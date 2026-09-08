const fs = require("fs");
const path = require("path");
const https = require("https");

const metadata = require("./extractedMetadata.cjs");
const { enemyMetadata, completionVariantsMetadata } = metadata;

const journalModule = require("../src/dictionary/categories/huntersJournal.ts");
const huntersJournal = journalModule.huntersJournal;

const bossesModule = require("../src/dictionary/categories/bosses.ts");
const bosses = bossesModule.bosses;

const OUTPUT_FILENAME = "huntersJournalEnriched.ts";
const OUTPUT_PATH = path.join(__dirname, "../src/dictionary/categories", OUTPUT_FILENAME);
const BOSSES_OUTPUT_FILENAME = "bossesEnriched.ts";
const BOSSES_OUTPUT_PATH = path.join(__dirname, "../src/dictionary/categories", BOSSES_OUTPUT_FILENAME);
const JOURNAL_ASSETS_DIR = path.join(__dirname, "../src/assets/journal");

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    https
      .get(url, response => {
        if (response.statusCode === 200) {
          const fileStream = fs.createWriteStream(filepath);
          response.pipe(fileStream);
          fileStream.on("finish", () => {
            fileStream.close();
            resolve();
          });
        } else {
          reject(new Error(`Failed to download: ${response.statusCode}`));
        }
      })
      .on("error", err => {
        reject(err);
      });
  });
}

async function downloadJournalImages(huntersJournal, enemyMetadata) {
  console.log("=== DOWNLOADING JOURNAL IMAGES ===\n");

  if (!fs.existsSync(JOURNAL_ASSETS_DIR)) {
    fs.mkdirSync(JOURNAL_ASSETS_DIR, { recursive: true });
  }

  let successCount = 0;
  let skippedCount = 0;
  let failCount = 0;
  const failedDownloads = [];

  for (const section of huntersJournal.sections) {
    for (const item of section.items) {
      const meta = enemyMetadata[item.name];
      if (meta && meta.imageUrl) {
        const filename = item.name.replace(/\s+/g, "_") + ".png";
        const filepath = path.join(JOURNAL_ASSETS_DIR, filename);

        try {
          if (fs.existsSync(filepath)) {
            skippedCount++;
          } else {
            await downloadFile(meta.imageUrl, filepath);
            successCount++;
          }
        } catch (error) {
          failCount++;
          failedDownloads.push({ name: item.name, error: error.message });
        }
      }
    }
  }

  console.log(`✓ Downloaded: ${successCount} images`);
  if (skippedCount > 0) {
    console.log(`⏭ Skipped (already existing): ${skippedCount} images`);
  }
  if (failCount > 0) {
    console.log(`✗ Failed downloads: ${failCount}`);
    failedDownloads.forEach(({ name, error }) => {
      console.log(`  - "${name}": ${error}`);
    });
  }
  console.log("");

  return { successCount, skippedCount, failCount, failedDownloads };
}

function collectJournalNames(huntersJournal) {
  const names = [];
  huntersJournal.sections.forEach(section => {
    section.items.forEach(item => {
      names.push(item.name);
    });
  });
  return names;
}

function analyzeHpDamageMatches(journalNames, enemyMetadata) {
  const matched = [];
  const notInMetadata = [];

  journalNames.forEach(name => {
    if (enemyMetadata[name] && enemyMetadata[name].values) {
      matched.push({ name, valuesCount: enemyMetadata[name].values.length });
    } else {
      notInMetadata.push(name);
    }
  });

  const notInJournal = Object.keys(enemyMetadata).filter(key => !journalNames.includes(key));

  return { matched, notInMetadata, notInJournal };
}

function analyzeCompletionVariants(journalNames, completionVariantsMetadata) {
  const bossesToMinions = {};
  const minionsToBosses = {};
  const bossesNotInJournal = [];
  const minionsNotInJournal = [];

  Object.entries(completionVariantsMetadata).forEach(([boss, minions]) => {
    if (journalNames.includes(boss)) {
      bossesToMinions[boss] = minions;

      minions.forEach(minion => {
        if (journalNames.includes(minion)) {
          if (!minionsToBosses[minion]) {
            minionsToBosses[minion] = [];
          }
          minionsToBosses[minion].push(boss);
        } else {
          if (!minionsNotInJournal.includes(minion)) {
            minionsNotInJournal.push(minion);
          }
        }
      });
    } else {
      bossesNotInJournal.push(boss);
    }
  });

  return { bossesToMinions, minionsToBosses, bossesNotInJournal, minionsNotInJournal };
}

function addHpDamageInfo(enrichedHuntersJournal, enemyMetadata) {
  let count = 0;

  enrichedHuntersJournal.sections.forEach(section => {
    section.items.forEach(item => {
      const meta = enemyMetadata[item.name];
      if (meta && meta.values) {
        if (!item.additionalMeta) {
          item.additionalMeta = {};
        }
        item.additionalMeta.hpAndDamageInfo = meta.values;
        count++;
      }
    });
  });

  return count;
}

function addCompletionVariants(enrichedHuntersJournal, bossesToMinions, minionsToBosses) {
  let bossCount = 0;
  let minionCount = 0;

  enrichedHuntersJournal.sections.forEach(section => {
    section.items.forEach(item => {
      if (bossesToMinions[item.name]) {
        if (!item.additionalMeta) {
          item.additionalMeta = {};
        }
        item.additionalMeta.completesEntries = bossesToMinions[item.name];
        bossCount++;
      }

      if (minionsToBosses[item.name]) {
        if (!item.additionalMeta) {
          item.additionalMeta = {};
        }
        const bosses = minionsToBosses[item.name];
        const [boss] = bosses;
        if (bosses.length !== 1) {
          console.warn(`⚠️  Warning: "${item.name}" has ${bosses.length} boss variants: ${bosses.join(", ")}`);
        }
        item.additionalMeta.completedByEntry = boss;
        minionCount++;
      }
    });
  });

  return { bossCount, minionCount };
}

function addImageAssets(enrichedHuntersJournal, enemyMetadata) {
  let count = 0;

  enrichedHuntersJournal.sections.forEach(section => {
    section.items.forEach(item => {
      const meta = enemyMetadata[item.name];
      if (meta && meta.imageUrl) {
        const filename = item.name.replace(/\s+/g, "_") + ".png";

        if (!item.additionalMeta) {
          item.additionalMeta = {};
        }
        item.additionalMeta.imageAsset = `journal/${filename}`;
        count++;
      }
    });
  });

  return count;
}

function addImageAssetsToBosses(enrichedBosses, enemyMetadata) {
  let count = 0;
  const nameMapping = {
    "Raging Conchfly": "Great Conchfly",
    "Great Conchflies": "Great Conchfly",
  };

  enrichedBosses.sections.forEach(section => {
    section.items.forEach(item => {
      const lookupName = nameMapping[item.name] || item.name;
      const meta = enemyMetadata[lookupName];

      if (meta && meta.imageUrl) {
        const filename = lookupName.replace(/\s+/g, "_") + ".png";

        if (!item.additionalMeta) {
          item.additionalMeta = {};
        }
        item.additionalMeta.imageAsset = `journal/${filename}`;
        count++;
      }
    });
  });

  return count;
}

function writeEnrichedJournal(enrichedHuntersJournal, outputPath) {
  const jsonString = JSON.stringify(enrichedHuntersJournal, null, 2);

  const singleLineParsingInfo = jsonString.replace(/"parsingInfo":\s*\{[^}]*\}/gs, match => {
    const obj = match.match(/"parsingInfo":\s*(\{[^}]*\})/s)[1];
    return `"parsingInfo": ${obj.replace(/\s+/g, " ")}`;
  });

  let outputContent = 'import type { TrackableCategory } from "../types";\n\n';
  outputContent += `export const huntersJournal: TrackableCategory = ${singleLineParsingInfo};\n`;

  fs.writeFileSync(outputPath, outputContent, "utf-8");
  return outputPath;
}

function writeEnrichedBosses(enrichedBosses, outputPath) {
  const jsonString = JSON.stringify(enrichedBosses, null, 2);

  const singleLineParsingInfo = jsonString.replace(/"parsingInfo":\s*\{[^}]*\}/gs, match => {
    const obj = match.match(/"parsingInfo":\s*(\{[^}]*\})/s)[1];
    return `"parsingInfo": ${obj.replace(/\s+/g, " ")}`;
  });

  let outputContent = 'import type { TrackableCategory } from "../types";\n\n';
  outputContent += `export const bosses: TrackableCategory = ${singleLineParsingInfo};\n`;

  fs.writeFileSync(outputPath, outputContent, "utf-8");
  return outputPath;
}

function runAnalysis(huntersJournal, enemyMetadata, completionVariantsMetadata) {
  const journalNames = collectJournalNames(huntersJournal);
  console.log(`Total journal entries: ${journalNames.length}\n`);

  console.log("=== HP AND DAMAGE INFO ANALYSIS ===");
  const hpAnalysis = analyzeHpDamageMatches(journalNames, enemyMetadata);
  console.log(`✅ Matched entries: ${hpAnalysis.matched.length}`);
  console.log(`❌ Not in metadata: ${hpAnalysis.notInMetadata.length}`);
  console.log(`⚠️  Metadata not in journal: ${hpAnalysis.notInJournal.length}\n`);

  console.log("=== COMPLETION VARIANTS ANALYSIS ===");
  const completionVariantsAnalysis = analyzeCompletionVariants(journalNames, completionVariantsMetadata);
  console.log(`✅ Bosses with completion variants: ${Object.keys(completionVariantsAnalysis.bossesToMinions).length}`);
  console.log(`✅ Minions completed by bosses: ${Object.keys(completionVariantsAnalysis.minionsToBosses).length}`);
  console.log(`❌ Bosses not in journal: ${completionVariantsAnalysis.bossesNotInJournal.length}`);
  console.log(`❌ Minions not in journal: ${completionVariantsAnalysis.minionsNotInJournal.length}\n`);

  if (completionVariantsAnalysis.bossesNotInJournal.length > 0) {
    console.log("Bosses not in journal:");
    completionVariantsAnalysis.bossesNotInJournal.forEach(boss => console.log(`  - "${boss}"`));
    console.log("");
  }

  if (completionVariantsAnalysis.minionsNotInJournal.length > 0) {
    console.log("Minions not in journal:");
    completionVariantsAnalysis.minionsNotInJournal.forEach(minion => console.log(`  - "${minion}"`));
    console.log("");
  }

  return { hpAnalysis, completionVariantsAnalysis };
}

function addHpDamageInfoToBosses(enrichedBosses, enemyMetadata) {
  let count = 0;
  const nameMapping = {
    "Raging Conchfly": "Great Conchfly",
    "Great Conchflies": "Great Conchfly",
  };

  enrichedBosses.sections.forEach(section => {
    section.items.forEach(item => {
      const lookupName = nameMapping[item.name] || item.name;
      const meta = enemyMetadata[lookupName];

      if (meta && meta.values) {
        if (!item.additionalMeta) {
          item.additionalMeta = {};
        }

        // For bosses with variants, pick the correct one
        if (item.name === "Raging Conchfly" && meta.values.length > 1) {
          const ragingVariant = meta.values.find(v => v.variantName === "Raging Conchfly");
          if (ragingVariant) {
            item.additionalMeta.hpAndDamageInfo = [ragingVariant];
          } else {
            item.additionalMeta.hpAndDamageInfo = meta.values;
          }
        } else if (item.name === "Great Conchflies" && meta.values.length > 1) {
          // Use the base variant (without variantName)
          const baseVariant = meta.values.find(v => !v.variantName);
          if (baseVariant) {
            item.additionalMeta.hpAndDamageInfo = [baseVariant];
          } else {
            item.additionalMeta.hpAndDamageInfo = meta.values;
          }
        } else {
          item.additionalMeta.hpAndDamageInfo = meta.values;
        }
        count++;
      }
    });
  });

  return count;
}

function runTransformation(huntersJournal, enemyMetadata, completionVariantsAnalysis, outputPath = OUTPUT_PATH) {
  console.log("=== STARTING HUNTERS JOURNAL TRANSFORMATION ===\n");

  const enrichedHuntersJournal = JSON.parse(JSON.stringify(huntersJournal));

  console.log("Step 1: Adding image assets...");
  const imageCount = addImageAssets(enrichedHuntersJournal, enemyMetadata);
  console.log(`✓ Added to ${imageCount} entries\n`);

  console.log("Step 2: Adding HP and damage info...");
  const hpCount = addHpDamageInfo(enrichedHuntersJournal, enemyMetadata);
  console.log(`✓ Added to ${hpCount} entries\n`);

  console.log("Step 3: Adding completion variants...");
  const completionCounts = addCompletionVariants(
    enrichedHuntersJournal,
    completionVariantsAnalysis.bossesToMinions,
    completionVariantsAnalysis.minionsToBosses
  );
  console.log(`✓ Added completesEntries to ${completionCounts.bossCount} bosses`);
  console.log(`✓ Added completedByEntry to ${completionCounts.minionCount} minions\n`);

  writeEnrichedJournal(enrichedHuntersJournal, outputPath);

  console.log("=== HUNTERS JOURNAL TRANSFORMATION COMPLETE ===");
  console.log(`New file created: ${outputPath}\n`);
}

function runBossesTransformation(bosses, enemyMetadata, outputPath = BOSSES_OUTPUT_PATH) {
  console.log("=== STARTING BOSSES TRANSFORMATION ===\n");

  const enrichedBosses = JSON.parse(JSON.stringify(bosses));

  console.log("Step 1: Adding image assets to bosses...");
  const imageCount = addImageAssetsToBosses(enrichedBosses, enemyMetadata);
  console.log(`✓ Added to ${imageCount} entries\n`);

  console.log("Step 2: Adding HP and damage info to bosses...");
  const hpCount = addHpDamageInfoToBosses(enrichedBosses, enemyMetadata);
  console.log(`✓ Added to ${hpCount} entries\n`);

  writeEnrichedBosses(enrichedBosses, outputPath);

  console.log("=== BOSSES TRANSFORMATION COMPLETE ===");
  console.log(`New file created: ${outputPath}\n`);
}

async function run() {
  console.log("=== METADATA ENRICHMENT SCRIPT ===\n");

  console.log("--- HUNTERS JOURNAL ---\n");
  const { completionVariantsAnalysis } = runAnalysis(huntersJournal, enemyMetadata, completionVariantsMetadata);

  await downloadJournalImages(huntersJournal, enemyMetadata);

  runTransformation(huntersJournal, enemyMetadata, completionVariantsAnalysis);

  console.log("--- BOSSES ---\n");
  runBossesTransformation(bosses, enemyMetadata);

  console.log("=== ALL ENRICHMENT COMPLETE ===");
}

run();

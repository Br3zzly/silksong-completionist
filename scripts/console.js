// These are scripts meant to be run in a browser console to extract the mentioned metadata from the Hollow Knight Silksong Wiki

// ------------------------------------------------------------

// Run this on https://hollowknight.wiki/w/Hunter%27s_Journal_(Silksong)
// to extract all the Journal Entries that can be completed by defeating a specific enemy/boss, under that specific enemy/boss
extractCompletionVariants("#mw-content-text > div.mw-parser-output > table");

function extractCompletionVariants(tableSelector) {
  const table = document.querySelector(tableSelector);
  if (!table) {
    console.error(`No table found for selector: ${tableSelector}`);
    return {};
  }

  const result = {};
  const rows = Array.from(table.querySelectorAll("tr"));

  rows.forEach((row, rowIndex) => {
    const tdList = row.querySelectorAll("td");
    if (tdList.length < 3) return;

    const completionCell = tdList[2];
    const text = completionCell.textContent.trim();

    const match = text.match(/(?:This entry|These entries) can also be completed by defeating\s+(.+?)\s*$/);
    if (!match) return;

    const variantName = match[1].trim();
    const rowspan = parseInt(completionCell.getAttribute("rowspan")) || 1;

    const values = [];

    for (let i = 0; i < rowspan; i++) {
      const targetRow = rows[rowIndex + i];
      const firstTd = targetRow?.querySelectorAll("td")[0];
      if (firstTd) {
        values.push(firstTd.textContent.trim());
      }
    }
    if (!result[variantName]) {
      result[variantName] = [];
    }
    result[variantName].push(...values);
  });
  copy(JSON.stringify(result, null, 2));
  console.table(result);
  return result;
}

// ------------------------------------------------------------

// Run this on https://hollowknight.wiki/w/Damage_Values_and_Enemy_Health_(Silksong)
// to extract enemy data (HP, damage modifiers, image URL)
extractGroupedEnemyDataFromMultipleSelectors([
  "#mw-content-text > div.mw-parser-output > table:nth-child(35)",
  "#mw-content-text > div.mw-parser-output > table:nth-child(37)",
]);

function extractGroupedEnemyDataFromMultipleSelectors(selectors) {
  function getFullImageUrl(thumbnailUrl) {
    return thumbnailUrl.replace(/\/thumb\/(.*?)\/([^\/]+)\/\d+px-\2$/, "/$1/$2");
  }

  const groupedData = {};

  selectors.forEach(selector => {
    const table = document.querySelector(selector);
    if (!table) {
      console.warn(`No table found for selector: ${selector}`);
      return;
    }

    const rows = table.querySelectorAll("tr");

    rows.forEach(row => {
      const img = row.querySelector("img");
      if (!img) return;

      const nameCell = row.querySelectorAll("th")[1];
      if (!nameCell) return;

      const fullName = nameCell.textContent.trim();

      // Match "<baseName><space?>(variantName)" or "<baseName><space?>[variant]"
      const match = fullName.match(/^(.+?)\s*(?:[\(\[]([^\)\]]+)[\)\]])?$/);
      let baseName = match?.[1]?.trim();
      let variantName = match?.[2]?.trim() || "Main";

      // Remap special cases
      if (baseName === "Lace 2") {
        variantName = "Lace 2";
        baseName = "Lace";
      }
      if (baseName === "Raging Conchfly") {
        variantName = "Raging Conchfly";
        baseName = "Great Conchfly";
      }
      if (variantName === "Fighting Garmond") {
        variantName = "Fighting with Garmond";
      }
      if (variantName === "Fighting Second Sentinel") {
        variantName = "Fighting with Second Sentinel";
      }
      if (variantName === "Missing information") {
        variantName = "[Missing information]";
      }

      const tdCells = row.querySelectorAll("td");
      if (tdCells.length === 0) return;

      const hp = tdCells[0].textContent.trim() || "";
      const damageModifiers = Array.from(tdCells)
        .slice(1)
        .map(td => parseFloat(td.textContent.trim()) || 0);

      const entry =
        variantName === "Main"
          ? { hp, damageModifiers }
          : {
              modifierName: variantName,
              hp,
              damageModifiers,
            };

      if (!groupedData[baseName]) {
        groupedData[baseName] = {
          imageUrl: getFullImageUrl(img.src),
          name: baseName,
          values: [entry],
        };
      } else {
        groupedData[baseName].values.push(entry);
      }
    });
  });

  console.table(Object.values(groupedData));
  copy(JSON.stringify(groupedData, null, 2));
  return groupedData;
}

// ------------------------------------------------------------

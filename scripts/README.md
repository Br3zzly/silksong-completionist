# Dictionary maintenance scripts

These utilities support manual updates to journal and boss metadata. They are not part of the application build.

- console.js: copy the relevant function/call into the browser console on the wiki page named in its comments. It extracts metadata for review.
- extractedMetadata.cjs: the checked-in extraction results consumed by the enrichment script.
- enrichHuntersJournal.cjs: run with Node.js 24 from the repository root using `node scripts/enrichHuntersJournal.cjs`. It reads the existing category files and extracted metadata, downloads journal images, and writes huntersJournalEnriched.ts and bossesEnriched.ts beside the original categories. Review the generated files and images before replacing source data. This script uses the network and is not run by tests or CI.

Caches & Secrets is work in progress and is excluded from the current dictionary uniqueness checks. Its data and parsing behavior are intentionally unchanged.

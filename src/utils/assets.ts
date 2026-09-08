const assetUrls = import.meta.glob<string>("/src/assets/{journal,quills}/*.{png,jpg,jpeg,gif,webp}", {
  eager: true,
  query: "?url&no-inline",
  import: "default",
});

export function getAssetUrl(path: string): string {
  return assetUrls["/src/assets/" + path] ?? "";
}

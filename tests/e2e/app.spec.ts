import { test, expect } from "@playwright/test";
import { createCipheriv } from "node:crypto";

function saveFile(silk: number) {
  const cipher = createCipheriv("aes-256-ecb", Buffer.from("UKu52ePUBwetZ9wNX88o54dnfKRu0T1l"), null);
  const json = JSON.stringify({ playerData: { silk, permadeathMode: 0, playTime: 100, maxHealthBase: 5 } });
  const payload = Buffer.from(Buffer.concat([cipher.update(json), cipher.final()]).toString("base64"));
  const length = [];
  let n = payload.length;
  while (n >= 128) {
    length.push((n & 127) | 128);
    n >>>= 7;
  }
  length.push(n);
  return {
    name: "user1.dat",
    mimeType: "application/octet-stream",
    buffer: Buffer.concat([
      Buffer.from([0, 1, 0, 0, 0, 255, 255, 255, 255, 1, 0, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 0, ...length]),
      payload,
      Buffer.from([11]),
    ]),
  };
}

test.beforeEach(async ({ page }) => {
  await page.route(/^https?:\/\/(?!127\.0\.0\.1)/, route => route.fulfill({ body: "", contentType: "text/html" }));
});

test("browse every category, preserve images, and reach the end of the journal", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Browse for a save file" })).toBeVisible();
  await page.getByRole("button", { name: "Show content filters" }).click();
  await page.getByRole("button", { name: /Show me, everything!/ }).click();
  for (const name of [
    "Mask Shards",
    "Spool Fragments",
    "Abilities",
    "Upgrades",
    "Tools",
    "Crests",
    "Lost Fleas",
    "Relics",
    "Keys",
    "Memory Lockets",
    "Craftmetals",
    "Mossberries",
    "Pale Oil",
    "Silkeaters",
    "Bellhome",
    "Materium",
    "Mementos",
    "Mapping Supplies",
    "Bellways",
    "Ventrica Stations",
    "Tasks",
    "Unique Spawns",
    "Bosses",
    "Hunter's Journal",
  ]) {
    await page.getByRole("button", { name: "Switch to " + name + " tab" }).click();
    await expect(page.getByRole("heading", { name, exact: true })).toBeVisible();
  }
  const table = page.getByRole("table");
  await expect(table.locator("tbody tr[data-index]").first()).toBeVisible();
  await table.evaluate(element => {
    const scroller = element.parentElement!;
    scroller.scrollTop = scroller.scrollHeight;
  });
  await expect(table.locator('tr[data-index="236"]')).toBeAttached();
  const rows = table.locator("tbody tr[data-index]");
  expect(await rows.count()).toBeLessThan(80);
  await expect
    .poll(() =>
      table
        .locator("img")
        .evaluateAll(images =>
          images
            .filter(
              image => image.getBoundingClientRect().top < innerHeight && image.getBoundingClientRect().bottom > 0
            )
            .every(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0)
        )
    )
    .toBe(true);
  expect(errors).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test("map dialogs support keyboard dismissal and restore focus", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Show content filters" }).click();
  await page.getByRole("button", { name: /Show me, everything!/ }).click();
  await page.getByRole("button", { name: "Switch to Bellways tab" }).click();
  const map = page.getByRole("button", { name: "Open map location" }).first();
  await map.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("button", { name: "Close modal" })).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  expect(await dialog.evaluate(element => element.contains(document.activeElement))).toBe(true);
  // A cross-origin map owns keyboard events while its iframe has focus.
  // Tab back out to the surrounding dialog before checking Escape.
  await page.keyboard.press("Tab");
  await expect(dialog.getByRole("button", { name: "Close modal" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(map).toBeFocused();
});

test("upload, replace the same filename, clear, and recover from invalid files", async ({ page }) => {
  await page.goto("/");
  const input = page.getByLabel("Upload save file");
  await input.setInputFiles(saveFile(0));
  await expect(page.getByRole("heading", { name: "At a glance..." })).toBeVisible();
  await page.getByRole("button", { name: "Switch to Mask Shards tab" }).click();
  await expect(page.getByRole("table")).toBeVisible();
  await input.setInputFiles(saveFile(10));
  await expect(page.getByRole("heading", { name: "At a glance..." })).toBeVisible();
  await input.setInputFiles({
    name: "broken.dat",
    mimeType: "application/octet-stream",
    buffer: Buffer.from("broken"),
  });
  await expect(page.getByText("This file is in an unsupported format.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "At a glance..." })).not.toBeVisible();
  await input.setInputFiles(saveFile(0));
  await expect(page.getByRole("heading", { name: "At a glance..." })).toBeVisible();
  await page.getByRole("button", { name: "Remove file" }).click();
  await expect(page.getByRole("heading", { name: "At a glance..." })).not.toBeVisible();
});

test("upload surface works with keyboard and drag-and-drop", async ({ page }) => {
  await page.goto("/");
  const browse = page.getByRole("button", { name: "Browse for a save file" });
  await browse.focus();
  const chooserPromise = page.waitForEvent("filechooser");
  await page.keyboard.press("Enter");
  const chooser = await chooserPromise;
  await chooser.setFiles(saveFile(0));
  await expect(page.getByRole("heading", { name: "At a glance..." })).toBeVisible();
  await page.getByRole("button", { name: "Remove file" }).click();
  const bytes = Array.from(saveFile(12).buffer);
  const transfer = await page.evaluateHandle(data => {
    const transfer = new DataTransfer();
    transfer.items.add(new File([new Uint8Array(data)], "dropped.dat", { type: "application/octet-stream" }));
    return transfer;
  }, bytes);
  await browse.dispatchEvent("drop", { dataTransfer: transfer });
  await expect(page.getByText("dropped.dat")).toBeVisible();
  await expect(page.getByRole("heading", { name: "At a glance..." })).toBeVisible();
});

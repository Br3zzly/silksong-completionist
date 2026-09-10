import { test, expect, type Page } from "@playwright/test";
import { createCipheriv } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";

async function selectBackground(page: Page, style: string) {
  const name = style === "song" ? "Switch to Song" : "Switch to Hornet";
  const toggle = page.getByRole("button", { name, exact: true });
  if (await toggle.count()) await toggle.click();
}

function saveFile(silk: number, extra: Record<string, unknown> = {}) {
  const cipher = createCipheriv("aes-256-ecb", Buffer.from("UKu52ePUBwetZ9wNX88o54dnfKRu0T1l"), null);
  const json = JSON.stringify({ playerData: { silk, permadeathMode: 0, playTime: 100, maxHealthBase: 5, ...extra } });
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

test("background styles play, loop, and persist on desktop and mobile", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  const videos: string[] = [];
  page.on("request", request => {
    if (request.url().includes(".mp4")) videos.push(request.url());
  });
  await page.goto("/");
  const video = page.locator("video.menu-background");
  const picker = page.locator(".background-toggle");
  await expect(picker).toHaveAccessibleName("Switch to Song");
  const toggleBounds = (await picker.boundingBox())!;
  expect(toggleBounds.width).toBeGreaterThanOrEqual(44);
  expect(toggleBounds.height).toBeGreaterThanOrEqual(44);
  expect(toggleBounds.y).toBeLessThanOrEqual(12);
  expect(page.viewportSize()!.width - toggleBounds.x - toggleBounds.width).toBeLessThanOrEqual(32);
  await expect(picker.locator("img")).toBeVisible();
  const mobile = page.viewportSize()!.width <= 600;
  for (const style of ["hornet", "song", "hornet", "song"]) {
    await selectBackground(page, style);
    await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.currentTime)).toBeGreaterThan(0.1);
    const info = await video.evaluate((element: HTMLVideoElement) => ({
      width: element.videoWidth,
      height: element.videoHeight,
      duration: element.duration,
      muted: element.muted,
      playbackRate: element.playbackRate,
    }));
    expect(info).toEqual({
      width: mobile ? 1280 : 2560,
      height: mobile ? 720 : 1440,
      duration: 13,
      muted: true,
      playbackRate: 1,
    });
    expect(videos.every(url => url.includes("-mobile") === mobile)).toBe(true);
    await expect
      .poll(() => video.evaluate((element: HTMLVideoElement) => element.currentSrc))
      .toContain(`${style}-menu`);
    const frames = await video.evaluate(
      (element: HTMLVideoElement) => element.getVideoPlaybackQuality().totalVideoFrames
    );
    await expect
      .poll(() => video.evaluate((element: HTMLVideoElement) => element.getVideoPlaybackQuality().totalVideoFrames))
      .toBeGreaterThan(frames);
    await video.evaluate((element: HTMLVideoElement) => {
      element.currentTime = element.duration - 0.15;
    });
    await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.currentTime)).toBeLessThan(1);
    await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(false);
  }
  videos.length = 0;
  await page.reload();
  await expect(picker).toHaveAccessibleName("Switch to Hornet");
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.currentTime)).toBeGreaterThan(0.1);
  expect(videos.every(url => url.includes("song-menu"))).toBe(true);
  await expect(page.getByRole("button", { name: /^(Pause|Play) background$/ })).toHaveCount(0);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(video).toHaveCount(0);
});

test("background resumes after a browser interruption and stays fixed while scrolling", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");

  const video = page.locator("video.menu-background");
  const poster = page.locator(".menu-background-poster");
  await selectBackground(page, "song");
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.currentTime)).toBeGreaterThan(0.1);
  // Returning from another app or browser UI can leave media suspended.
  await video.evaluate((element: HTMLVideoElement) => {
    element.pause();
    window.dispatchEvent(new Event("focus"));
  });
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(false);
  const bounds = await video.boundingBox();
  expect(await poster.boundingBox()).toEqual(bounds);
  await page.getByRole("button", { name: "Browse all items" }).click();
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
  expect(await video.boundingBox()).toEqual(bounds);
  expect(await poster.boundingBox()).toEqual(bounds);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(video).toHaveCount(0);
  expect(await poster.boundingBox()).toEqual(bounds);
});

test("background ignores scrollbar and mobile toolbar size changes", async ({ page, isMobile }) => {
  const viewport = page.viewportSize()!;
  if (isMobile) {
    // A real phone's screen is taller than its viewport while browser bars are open.
    const session = await page.context().newCDPSession(page);
    await session.send("Emulation.setDeviceMetricsOverride", {
      ...viewport,
      screenWidth: viewport.width,
      screenHeight: viewport.height + 80,
      mobile: true,
      deviceScaleFactor: await page.evaluate(() => devicePixelRatio),
    });
  }
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const video = page.locator("video.menu-background");
  const poster = page.locator(".menu-background-poster");
  await expect(video).toBeVisible();
  const bounds = await video.boundingBox();
  if (isMobile) {
    // Simulate height changes from retracting browser bars, then a keyboard.
    for (const height of [viewport.height + 60, viewport.height - 160, viewport.height]) {
      await page.setViewportSize({ width: viewport.width, height });
      await expect.poll(() => video.boundingBox()).toEqual(bounds);
      expect(await poster.boundingBox()).toEqual(bounds);
    }
    await selectBackground(page, "song");
    expect(await video.boundingBox()).toEqual(bounds);
  } else {
    // Force a classic scrollbar so this also catches shifts on overlay-scrollbar systems.
    await page.addStyleTag({ content: "::-webkit-scrollbar { width: 18px; }" });
    for (const overflow of ["hidden", "scroll", "hidden"]) {
      await page.evaluate(value => {
        document.documentElement.style.overflowY = value;
      }, overflow);
      await expect.poll(() => video.boundingBox()).toEqual(bounds);
      expect(await poster.boundingBox()).toEqual(bounds);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
  }
  // Rotation/window resizing must still produce a correctly sized scene.
  const resized = isMobile ? { width: viewport.height, height: viewport.width } : { width: 1100, height: 800 };
  await page.setViewportSize(resized);
  await expect.poll(() => video.boundingBox()).toEqual({ x: 0, y: 0, ...resized });
  expect(await poster.boundingBox()).toEqual(await video.boundingBox());
});

test("mobile zoom keeps both backgrounds covering an expanded viewport", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Pinch zoom uses the mobile visual viewport.");
  const session = await page.context().newCDPSession(page);
  await page.goto("/");
  const initial = page.viewportSize()!;
  const coverage = () =>
    page.evaluate(() => {
      const viewport = window.visualViewport!;
      const covers = (element: Element) => {
        const rect = element.getBoundingClientRect();
        return (
          rect.left <= viewport.offsetLeft + 1 &&
          rect.top <= viewport.offsetTop + 1 &&
          rect.right >= viewport.offsetLeft + viewport.width - 1 &&
          rect.bottom >= viewport.offsetTop + viewport.height - 1
        );
      };
      return [
        ...document.querySelectorAll(".menu-background-layer, .menu-background-poster, video.menu-background"),
      ].every(covers);
    });
  for (const reducedMotion of ["no-preference", "reduce"] as const) {
    await page.emulateMedia({ reducedMotion });
    for (const style of ["hornet", "song"]) {
      await selectBackground(page, style);
      for (const scale of [2, 4, 1]) {
        await session.send("Emulation.setPageScaleFactor", { pageScaleFactor: scale });
        await expect.poll(() => page.evaluate(() => window.visualViewport!.scale)).toBe(scale);
        if (scale === 2) await page.setViewportSize({ width: initial.width, height: initial.height + 200 });
        await page.evaluate(() => window.scrollTo(0, 400));
        await expect.poll(coverage).toBe(true);
      }
      if (reducedMotion === "no-preference") {
        const video = page.locator("video.menu-background");
        await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(false);
      }
    }
  }
});

test("reduced motion uses the still background without downloading a video", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const videos: string[] = [];
  page.on("request", request => {
    if (request.url().includes(".mp4")) videos.push(request.url());
  });
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Browse all items" })).toBeVisible();
  await expect(page.locator("video.menu-background")).toHaveCount(0);
  const poster = page.locator(".menu-background-poster");
  await expect(poster).toHaveCSS("background-image", /hornet-menu/);
  await selectBackground(page, "song");
  await expect(poster).toHaveCSS("background-image", /song-menu/);
  await expect(page.locator("video.menu-background")).toHaveCount(0);
  expect(videos).toEqual([]);
  const toggle = page.getByRole("button", { name: "Switch to Hornet", exact: true });
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(poster).toHaveCSS("background-image", /hornet-menu/);
  await page.keyboard.press("Space");
  await expect(poster).toHaveCSS("background-image", /song-menu/);
});

test("browse every category, preserve images, and reach the end of the journal", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Browse for a save file" })).toBeVisible();
  await page.getByRole("button", { name: "Browse all items" }).click();
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
  expect(await rows.count()).toBe(237);
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
  await page.getByRole("button", { name: "Browse all items" }).click();
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
  await expect(page.locator('.save-summary[data-loaded="true"]')).toBeVisible();
  await page.getByRole("button", { name: "Switch to Mask Shards tab" }).click();
  await expect(page.getByRole("table")).toBeVisible();
  await input.setInputFiles(saveFile(10));
  await expect(page.locator('.save-summary[data-loaded="true"]')).toBeVisible();
  await input.setInputFiles({
    name: "broken.dat",
    mimeType: "application/octet-stream",
    buffer: Buffer.from("broken"),
  });
  await expect(page.getByText("This file is in an unsupported format.")).toBeVisible();
  await expect(page.locator('.save-summary[data-loaded="true"]')).not.toBeVisible();
  await input.setInputFiles(saveFile(0));
  await expect(page.locator('.save-summary[data-loaded="true"]')).toBeVisible();
  await page.getByRole("button", { name: "Remove file" }).click();
  await expect(page.locator('.save-summary[data-loaded="true"]')).not.toBeVisible();
});

test("loading a save resets the category without scrolling away from the menu", async ({ page }) => {
  await page.goto("/");
  const input = page.getByLabel("Upload save file");
  const overview = page.locator('.save-summary[data-loaded="true"]');
  const position = () => page.evaluate(() => ({ x: scrollX, y: scrollY }));
  const initialPosition = await position();
  await input.setInputFiles(saveFile(0));
  await expect(overview).toBeAttached();
  await expect.poll(position).toEqual(initialPosition);

  for (const browse of [false, true]) {
    if (browse) {
      await page.getByRole("button", { name: "Remove file" }).click();
      await page.getByRole("button", { name: "Browse all items", exact: true }).click();
    }
    await page.getByRole("button", { name: "Switch to Mask Shards tab" }).click();
    await expect(page.getByRole("table")).toBeAttached();
    await page.getByRole("button", { name: "Browse for a save file" }).scrollIntoViewIfNeeded();
    const beforeLoad = await position();
    await input.setInputFiles(saveFile(10));
    await expect(overview).toBeAttached();
    await expect.poll(position).toEqual(beforeLoad);
    await expect(page.getByRole("button", { name: "Switch to Mask Shards tab" })).toHaveAttribute(
      "aria-pressed",
      "false"
    );
  }
});

test("save summary shows saved stats and landing options return only after clearing", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const summary = page.getByRole("region", { name: "Save summary" });
  const currencies = summary.locator(".summary-currency dd > [aria-hidden]");
  const playtime = summary.locator(".summary-playtime dd > [aria-hidden]");
  const mode = summary.locator(".summary-game-mode dd");
  const locations = page.getByRole("button", { name: "Open help modal about save file locations" });
  const browse = page.getByRole("button", { name: "Browse all items", exact: true });
  const checkLayout = async () => {
    const menu = (await page.locator(".save-menu-controls").boundingBox())!;
    const stats = (await summary.boundingBox())!;
    const panel = (await page.locator("main").boundingBox())!;
    expect(Math.abs(menu.x + menu.width / 2 - (panel.x + panel.width / 2))).toBeLessThan(1);
    if (page.viewportSize()!.width <= 1000) expect(stats.y).toBeGreaterThanOrEqual(menu.y + menu.height);
    else {
      expect(stats.x + stats.width).toBeLessThan(menu.x);
      expect(stats.y).toBe(menu.y);
    }
    const rows = summary.locator(".summary-stats > div");
    for (let i = 1; i < (await rows.count()); i++) {
      const previous = (await rows.nth(i - 1).boundingBox())!;
      const current = (await rows.nth(i).boundingBox())!;
      expect(current.y).toBeGreaterThanOrEqual(previous.y + previous.height);
      expect(current.x).toBe(previous.x);
    }
  };
  await expect(summary).toHaveAttribute("data-loaded", "false");
  await expect(currencies).toHaveText(["-", "-"]);
  await expect(playtime).toHaveText("0H 0M");
  await expect(mode).toHaveCount(0);
  await checkLayout();
  await expect(locations).toBeVisible();
  await expect(browse).toBeVisible();
  await browse.click();
  const input = page.getByLabel("Upload save file");
  await input.setInputFiles(saveFile(0, { geo: 120, ShellShards: 700, playTime: 90061 }));
  await expect(currencies).toHaveText(["120", "700"]);
  await expect(playtime).toHaveText("25H 1M");
  await expect(mode).toHaveText("Classic");
  await expect(mode.locator("img")).toHaveAttribute("src", /classic/);
  await checkLayout();
  await expect(page.getByRole("heading", { name: "At a glance..." })).toHaveCount(0);
  await expect(locations).toHaveCount(0);
  await expect(browse).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Return to save progress", exact: true })).toHaveCount(0);
  await input.setInputFiles(saveFile(0, { geo: 0, ShellShards: 0, playTime: 0, permadeathMode: 2 }));
  await expect(currencies).toHaveText(["0", "0"]);
  await expect(playtime).toHaveText("0H 0M");
  await expect(mode).toHaveText("Steel Soul (Dead)");
  await expect(mode.locator("img")).toHaveAttribute("src", /steel-soul/);
  await page.getByRole("button", { name: "Remove file" }).click();
  await expect(summary).toHaveAttribute("data-loaded", "false");
  await expect(currencies).toHaveText(["-", "-"]);
  await expect(playtime).toHaveText("0H 0M");
  await expect(mode).toHaveCount(0);
  await expect(mode.locator("img")).toHaveCount(0);
  await expect(locations).toBeVisible();
  await expect(browse).toBeVisible();
  await browse.click();
  await expect(page.getByRole("button", { name: "Switch to Mask Shards tab" })).toBeVisible();
});

test("silk fill and percentage count up together and finish on the saved values", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await page
    .getByLabel("Upload save file")
    .setInputFiles(saveFile(0, { geo: 400, ShellShards: 700, playTime: 3661, PurchasedBonebottomHeartPiece: true }));
  await expect(page.locator('.save-summary[data-loaded="true"]')).toBeVisible();
  await page.evaluate(() => {
    const samples: number[][] = [];
    const start = performance.now();
    (window as typeof window & { spoolSamples: number[][] }).spoolSamples = samples;
    const sample = () => {
      const box = document.querySelector(".summary-spool")!.getBoundingClientRect();
      samples.push([box.x, box.y, box.width, box.height]);
      if (performance.now() - start < 2400) requestAnimationFrame(sample);
    };
    requestAnimationFrame(sample);
  });
  const summary = page.getByRole("region", { name: "Save summary" });
  const rosaries = summary.locator(".summary-currency dd > [aria-hidden]").first();
  await expect.poll(async () => Number(await rosaries.textContent())).toBeGreaterThan(0);
  expect(Number(await rosaries.textContent())).toBeLessThan(400);
  const sync = await summary.evaluate(element => ({
    percentage: element.querySelector(".summary-percentage")!.textContent,
    fill: (element.querySelector(".summary-spool") as HTMLElement).style.getPropertyValue("--silk-fill"),
  }));
  expect(sync.fill).toBe(sync.percentage);
  await expect(rosaries).toHaveText("400");
  await expect(summary.locator(".summary-percentage")).toHaveText("0.25%");
  await expect(summary.locator(".summary-playtime dd > [aria-hidden]")).toHaveText("1H 1M");
  await expect(summary.locator(".summary-spool")).toHaveCSS("--silk-fill", "0.25%");
  await expect(summary.locator(".summary-spool")).toHaveAttribute("data-glowing", "true");
  await expect(summary.locator(".summary-silk-winding")).toHaveCount(0);
  const samples = await page.evaluate(() => (window as typeof window & { spoolSamples: number[][] }).spoolSamples);
  expect(samples.length).toBeGreaterThan(10);
  for (let dimension = 0; dimension < 4; dimension++) {
    const values = samples.map(sample => sample[dimension]);
    expect(Math.max(...values) - Math.min(...values)).toBeLessThan(0.1);
  }
});

test("upload surface works with keyboard and drag-and-drop", async ({ page }) => {
  await page.goto("/");
  const browse = page.getByRole("button", { name: "Browse for a save file" });
  await browse.focus();
  const chooserPromise = page.waitForEvent("filechooser");
  await page.keyboard.press("Enter");
  const chooser = await chooserPromise;
  await chooser.setFiles(saveFile(0));
  await expect(page.locator('.save-summary[data-loaded="true"]')).toBeVisible();
  await page.getByRole("button", { name: "Remove file" }).click();
  const bytes = Array.from(saveFile(12).buffer);
  const transfer = await page.evaluateHandle(data => {
    const transfer = new DataTransfer();
    transfer.items.add(new File([new Uint8Array(data)], "dropped.dat", { type: "application/octet-stream" }));
    return transfer;
  }, bytes);
  const panel = page.getByRole("main");
  const bounds = await panel.boundingBox();
  await panel.dispatchEvent("dragenter", { dataTransfer: transfer });
  await panel.dispatchEvent("dragover", { dataTransfer: transfer });
  await expect(panel).toHaveAttribute("data-drag-active", "true");
  await expect(panel.locator(".save-drop-overlay")).toHaveCSS("opacity", "1");
  expect(await panel.boundingBox()).toEqual(bounds);
  await browse.dispatchEvent("dragenter", { dataTransfer: transfer });
  await panel.dispatchEvent("dragleave", { dataTransfer: transfer });
  await expect(panel).toHaveAttribute("data-drag-active", "true");
  await panel.dispatchEvent("drop", { dataTransfer: transfer });
  await expect(panel).toHaveAttribute("data-drag-active", "false");
  await expect(page.getByText("dropped.dat")).toBeVisible();
  await expect(page.locator('.save-summary[data-loaded="true"]')).toBeVisible();
});

test("one global filter applies across categories and preserves quill information", async ({ page }) => {
  await page.goto("/");
  await page
    .getByLabel("Upload save file")
    .setInputFiles(saveFile(0, { hasQuill: true, QuillState: 2, PurchasedBonebottomHeartPiece: true }));
  await page.getByRole("button", { name: "Switch to Mask Shards tab" }).click();
  const content = page.getByRole("region", { name: "Category content", exact: true });
  const filters = page.getByRole("group", { name: "Global filters", exact: true });
  await expect(filters).toHaveCount(1);
  await expect(content.getByRole("group")).toHaveCount(0);
  await expect(content.getByText("Mask Shard #1", { exact: true })).not.toBeAttached();
  await filters.getByRole("button", { name: "Showing missing items" }).click();
  await expect(content.getByText("Mask Shard #1", { exact: true })).toBeVisible();
  await filters.getByRole("button", { name: "spoilers blurred" }).click();
  await page.getByRole("button", { name: "Switch to Mapping Supplies tab" }).click();
  await expect(filters.getByRole("button", { name: "spoilers shown" })).toBeAttached();
  await expect(content.locator(".spoiler")).toHaveCount(0);
  await expect(content.getByText(/You obtained the/)).toBeVisible();
  await expect(content.getByRole("img", { name: "Red Quill", exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Switch to Mask Shards tab" }).click();
  await expect(content.getByText("Mask Shard #1", { exact: true })).toBeVisible();
  await expect(filters.getByRole("button", { name: "Showing all items" })).toBeAttached();
  await filters.getByRole("button", { name: "Act I", exact: true }).click();
  await expect(content.getByText("Mask Shard #1", { exact: true })).not.toBeAttached();
  await page.getByRole("button", { name: "Switch to Spool Fragments tab" }).click();
  await expect(filters.getByRole("button", { name: "Act I", exact: true })).toHaveAttribute("aria-pressed", "false");
  await page.getByRole("button", { name: "Switch to Mask Shards tab" }).click();
  await expect(content.getByText("Mask Shard #1", { exact: true })).not.toBeAttached();
  await filters.getByRole("button", { name: "Act I", exact: true }).click();
  await expect(content.getByText("Mask Shard #1", { exact: true })).toBeAttached();
  await filters.getByRole("button", { name: "Showing all items" }).click();
  await expect(content.getByText("Mask Shard #1", { exact: true })).not.toBeAttached();
});

test("platform paths and both save exports are accessible", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  await page.getByRole("button", { name: "Open help modal about save file locations" }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.getByRole("combobox")).toHaveCount(0);
  const platforms = dialog.getByRole("group", { name: "Platform", exact: true });
  await expect(platforms.getByRole("button", { name: "PC (Steam & Others)", exact: true })).toHaveAttribute(
    "aria-pressed",
    "true"
  );
  await dialog.getByRole("button", { name: "Windows save path, click to copy", exact: true }).click();
  await expect(dialog.getByRole("status").filter({ hasText: "Copied" })).toBeVisible();
  await expect
    .poll(() => page.evaluate(() => navigator.clipboard.readText()))
    .toContain("Team Cherry/Hollow Knight Silksong");
  await platforms.getByRole("button", { name: "GamePass (Windows)", exact: true }).click();
  await expect(platforms.locator('[aria-pressed="true"]')).toHaveCount(1);
  await expect(dialog.getByText(/SystemAppData\/wgs/)).toBeVisible();
  await platforms.getByRole("button", { name: "Nintendo Switch", exact: true }).click();
  await expect(dialog.getByText(/Homebrew and JKSV/)).toBeVisible();
  await dialog.getByRole("button", { name: "Close modal" }).click();
  await page.getByLabel("Upload save file").setInputFiles(saveFile(0));
  await page.getByRole("button", { name: "Edit save file" }).click();
  for (const [label, filename] of [
    ["Download as (encrypted) .dat", "user1.dat"],
    ["Download as (plain) .json", "user1.json"],
  ]) {
    const download = page.waitForEvent("download");
    await dialog.getByRole("button", { name: label }).click();
    expect((await download).suggestedFilename()).toBe(filename);
  }
  await dialog.getByRole("button", { name: "Close modal" }).click();
  await expect(page.getByRole("button", { name: "Edit save file" })).toBeFocused();
});

test("local save editor loads patched DOMPurify and supports editing without a CDN", async ({ page }) => {
  const errors: string[] = [];
  const editorRequests: string[] = [];
  const workerUrls: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("request", request => {
    if (/LocalSaveEditor|cdn\.jsdelivr\.net|unpkg\.com/.test(request.url())) editorRequests.push(request.url());
  });
  page.on("worker", worker => workerUrls.push(worker.url()));

  await page.goto("/");
  expect(editorRequests).toEqual([]);
  await page.getByLabel("Upload save file").setInputFiles(saveFile(0));
  await page.getByRole("button", { name: "Edit save file", exact: true }).click();
  const dialog = page.getByRole("dialog");
  const editor = dialog.locator(".monaco-editor").first();
  await expect(editor).toBeVisible();
  await expect.poll(() => workerUrls.some(url => /json\.worker/.test(url))).toBe(true);
  expect(editorRequests.some(url => url.includes("LocalSaveEditor"))).toBe(true);
  expect(editorRequests.every(url => new URL(url).origin === new URL(page.url()).origin)).toBe(true);

  await editor.locator(".view-lines").click();
  await page.keyboard.press("Control+f");
  await expect(dialog.locator(".find-widget.visible")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeVisible();
  await page.keyboard.press("Control+a");
  await page.keyboard.press("Backspace");
  await page.keyboard.insertText("invalid json");
  await expect(dialog.locator(".editor-validity")).toHaveText("Invalid JSON");
  await expect(dialog.getByRole("button", { name: "Download as (encrypted) .dat" })).toBeDisabled();

  const edited = { playerData: { silk: 0, permadeathMode: 0, playTime: 100, maxHealthBase: 5, geo: 2345 } };
  await page.keyboard.press("Control+a");
  await page.keyboard.press("Backspace");
  await page.keyboard.insertText(JSON.stringify(edited));
  await expect(dialog.locator(".editor-validity")).toHaveText("Valid JSON");
  const linux = await page.evaluate(() => navigator.userAgent.includes("Linux"));
  await page.keyboard.press(linux ? "Control+Shift+i" : "Shift+Alt+f");
  await expect(editor.locator(".line-numbers").filter({ hasText: /^2$/ })).toBeVisible();
  const plainDownload = page.waitForEvent("download");
  await dialog.getByRole("button", { name: "Download as (plain) .json" }).click();
  const plainPath = await (await plainDownload).path();
  const json = await readFile(plainPath!, "utf8");
  expect(JSON.parse(json)).toEqual(edited);
  expect(json).toContain("\n");

  const encryptedDownload = page.waitForEvent("download");
  await dialog.getByRole("button", { name: "Download as (encrypted) .dat" }).click();
  const encryptedPath = await (await encryptedDownload).path();
  await dialog.getByRole("button", { name: "Close modal" }).click();
  await page.getByRole("button", { name: "Remove file", exact: true }).click();
  await page.getByLabel("Upload save file").setInputFiles(encryptedPath!);
  await expect(page.locator(".summary-currency").first().locator("dd .sr-only")).toHaveText("2345");
  expect(errors).toEqual([]);

  // Check the actual emitted editor, since Monaco's embedded sanitizer bypasses npm overrides.
  const assets = await readdir("dist/assets");
  const editorBundle = assets.find(name => /^LocalSaveEditor-.*\.js$/.test(name));
  expect(editorBundle).toBeTruthy();
  const bundle = await readFile(`dist/assets/${editorBundle}`, "utf8");
  const versions = [...bundle.matchAll(/\.version\s*=\s*["'](3\.\d+\.\d+)["']/g)].map(match => match[1]);
  expect(versions).toContain("3.4.15");
  expect(versions).not.toContain("3.4.8");
});

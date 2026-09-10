# Capture the original menu background

This BepInEx 5 plugin captures Unity's final rendered frames, including the game's
particles, shaders, lighting, and post-processing. It does not export a reusable
Unity scene or turn the particle systems into browser code.

## Build

Use the installed game's assemblies and a BepInEx 5 distribution:

```powershell
dotnet build tools/menu-capture/MenuCapture.csproj -c Release '-p:GameDir=C:/path/to/Hollow Knight Silksong' '-p:BepInExDir=C:/path/to/BepInEx'
```

The plugin is `bin/Release/netstandard2.1/Silksong.MenuCapture.dll`.
Copy it into the game's `BepInEx/plugins/MenuCapture/` folder. BepInEx 6 requires
a different plugin build; do not overwrite an existing mod loader with this one.

## Capture

1. Launch the game with BepInEx 5 and select a background through Extras.
2. Return to the main menu and let its transition finish.
3. Press **F9** to open the live capture panel. The normal menu is hidden so you
   can watch the actual background while adjusting its speed from 5% to 100%.
4. Choose 30 or 60 FPS and the video duration, then click **Record sequence**.
   For smooth 40% slower motion, use **60% speed / 60 FPS**.
5. The panel hides while recording and returns afterward. **F10** stops a sequence
   early; outside recording, **F9**, **F10**, or the Close button closes the panel
   and restores the original game speed and menu.
6. **F8** still captures a single PNG, including while previewing slow motion.

The plugin temporarily hides canvases, the game title, and subtitle renderers.
Closing the preview restores their state, menu input, cursor state, and simulation
timing. During the preview, unscaled particle systems and animators temporarily
use scaled time so they follow the slider. These settings are restored too.
Recording returns to the selected live-preview speed; leaving the menu or
disabling the plugin restores the original state. It does not edit save data or
unlock backgrounds. Capture is restricted to the main menu.

Output goes into the game's `MenuCaptures/` directory, in a new timestamped folder
for each capture. `capture.json` records the selected style, resolution, camera
information, frame count, simulation speed, and whether the capture finished.

Keep the game focused and its window resolution unchanged during capture. PNG
encoding can make capture slower than real time; simulation timing is set to the
requested FPS during a sequence. Ten seconds produces 300 PNGs at 30 FPS or 600
PNGs at 60 FPS. Duration is the output video's duration: at 60% speed, ten seconds
of output contains six seconds of game movement.
Check an F8 screenshot first to confirm the menu overlays are fully hidden.

Settings are in `BepInEx/config/local.silksong.menucapture.cfg` after first launch.
`OutputFolder` can point directly into this project's ignored `reference-assets/`
folder. `Seconds`, `FramesPerSecond`, and `SimulationSpeed` are also adjustable
in the panel and are saved when recording or closing it.

## Prepare for the website

Put the captured folder into `reference-assets/menu-captures/`. Use the PNG as a
still background, or encode a complete frame sequence into a silent web video:

```powershell
ffmpeg -framerate 30 -i frame-%05d.png -an -c:v libx264 -crf 20 -pix_fmt yuv420p -movflags +faststart background.mp4
```

Use the FPS recorded in `capture.json`. Slow motion is already present in the
captured frames, so play the encoded video at **1.0 playback speed**. Do not apply
an additional slowdown to the encoded video.
`Encode-Background.ps1` accepts complete 30/60 FPS sequences and creates an
overlapping loop plus the mobile version and WebP still.

A finite recording is not automatically a
seamless loop; check the join before adding looping playback to the website.

## Validation status

Compiled against the locally installed Silksong assemblies and BepInEx 5.4.23.5.
The v0.2 live panel and capture were used to produce the website's Hornet and Song
backgrounds, including the slow-motion Hornet sequence.
Shaders or custom scripts that use wall-clock time may not follow Unity's time
scale; inspect the preview and captured sequence before replacing the web video.

## API references

- [BepInEx](https://github.com/BepInEx/BepInEx)
- [Unity screenshot capture](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/ScreenCapture.CaptureScreenshotAsTexture.html)
- [Unity capture timing](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Time-captureFramerate.html)

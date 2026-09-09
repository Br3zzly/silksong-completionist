param(
    [Parameter(Mandatory)][string]$SequenceFolder,
    [string]$StillFolder,
    [ValidateSet('hornet', 'song')][string]$StyleName = 'hornet',
    [string]$FFmpeg = 'ffmpeg'
)
$ErrorActionPreference = 'Stop'
$capture = Get-Content -LiteralPath (Join-Path $SequenceFolder 'capture.json') | ConvertFrom-Json
if (!$capture.complete -or $capture.framesPerSecond -notin @(30, 60) -or $capture.capturedFrames -ne $capture.requestedFrames -or $capture.capturedFrames -lt (5 * $capture.framesPerSecond)) {
    throw 'This encoder expects a complete capture of at least five seconds at 30 or 60 FPS.'
}
$fps = [int]$capture.framesPerSecond
$frames = [int]$capture.capturedFrames
$overlapFrames = 2 * $fps
$outputFrames = $frames - $overlapFrames
$offset = (($frames / $fps) - 4).ToString([Globalization.CultureInfo]::InvariantCulture)
$projectRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../..'))
$output = Join-Path $projectRoot 'src/assets/backgrounds'
New-Item -ItemType Directory -Path $output -Force | Out-Null

# Blend the last two seconds into the first two seconds, preserving forward
# movement across the join. Slow-motion captures must play back at normal speed.
# Smoothstep eases the blend at both ends. Round rather than truncate pixels to
# avoid a luma step when the mostly static dark background leaves the blend.
$filter = "[0:v]format=yuv420p,split[a][b];[a]trim=start_frame=${overlapFrames}:end_frame=${frames},setpts=PTS-STARTPTS[tail];[b]trim=start_frame=0:end_frame=${overlapFrames},setpts=PTS-STARTPTS[head];[tail][head]xfade=transition=custom:expr='floor(A+(B-A)*(1-P)*(1-P)*(1+2*P)+0.5)':duration=2:offset=${offset},format=yuv420p[out]"
& $FFmpeg -hide_banner -loglevel error -y -framerate $fps -i (Join-Path $SequenceFolder 'frame-%05d.png') -filter_complex $filter -map '[out]' -frames:v $outputFrames -an -c:v libx264 -preset slow -crf 24 -movflags +faststart (Join-Path $output "$StyleName-menu.mp4")
if ($LASTEXITCODE -ne 0) { throw 'Desktop video encoding failed.' }
& $FFmpeg -hide_banner -loglevel error -y -i (Join-Path $output "$StyleName-menu.mp4") -vf 'scale=1280:720:flags=lanczos' -an -c:v libx264 -preset slow -crf 25 -movflags +faststart (Join-Path $output "$StyleName-menu-mobile.mp4")
if ($LASTEXITCODE -ne 0) { throw 'Mobile video encoding failed.' }
$stillSource = if ($StillFolder) { Join-Path $StillFolder 'background.png' } else { Join-Path $output "$StyleName-menu.mp4" }
& $FFmpeg -hide_banner -loglevel error -y -i $stillSource -frames:v 1 -c:v libwebp -quality 90 (Join-Path $output "$StyleName-menu.webp")
if ($LASTEXITCODE -ne 0) { throw 'Still image encoding failed.' }

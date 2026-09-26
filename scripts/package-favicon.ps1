param([Parameter(Mandatory=$true)][string]$Source)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$destination = Join-Path $PSScriptRoot '../public'
$original = [System.Drawing.Image]::FromFile((Resolve-Path -LiteralPath $Source))
try {
  if ($original.Width -ne $original.Height) { throw 'Favicon source must be square.' }
  $sizes = @(16, 32, 48, 64, 128, 256)
  $frames = @{}
  foreach ($size in ($sizes + 180)) {
    $bitmap = [System.Drawing.Bitmap]::new($size, $size)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $stream = [System.IO.MemoryStream]::new()
    try {
      $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $graphics.Clear([System.Drawing.Color]::White)
      $graphics.DrawImage($original, 0, 0, $size, $size)
      $bitmap.Save($stream, [System.Drawing.Imaging.ImageFormat]::Png)
      $frames[$size] = $stream.ToArray()
    } finally { $stream.Dispose(); $graphics.Dispose(); $bitmap.Dispose() }
  }
  [System.IO.File]::WriteAllBytes((Join-Path $destination 'favicon.png'), $frames[256])
  $encoded = [Convert]::ToBase64String($frames[256])
  $svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" role="img" aria-label="IJW Labs"><image href="data:image/png;base64,' + $encoded + '" width="256" height="256" /></svg>'
  [System.IO.File]::WriteAllText((Join-Path $destination 'favicon.svg'), $svg)
  [System.IO.File]::WriteAllBytes((Join-Path $destination 'apple-touch-icon.png'), $frames[180])
  $ico = [System.IO.MemoryStream]::new()
  $writer = [System.IO.BinaryWriter]::new($ico)
  try {
    $writer.Write([uint16]0); $writer.Write([uint16]1); $writer.Write([uint16]$sizes.Count)
    $offset = 6 + 16 * $sizes.Count
    foreach ($size in $sizes) {
      $dimension = if ($size -eq 256) { 0 } else { $size }
      $writer.Write([byte]$dimension); $writer.Write([byte]$dimension)
      $writer.Write([byte]0); $writer.Write([byte]0)
      $writer.Write([uint16]1); $writer.Write([uint16]32)
      $writer.Write([uint32]$frames[$size].Length); $writer.Write([uint32]$offset)
      $offset += $frames[$size].Length
    }
    foreach ($size in $sizes) { $writer.Write([byte[]]$frames[$size]) }
    [System.IO.File]::WriteAllBytes((Join-Path $destination 'favicon.ico'), $ico.ToArray())
  } finally { $writer.Dispose(); $ico.Dispose() }
} finally { $original.Dispose() }

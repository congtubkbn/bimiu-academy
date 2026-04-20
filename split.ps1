New-Item -ItemType Directory -Force -Path "core"
$htmlLines = Get-Content "academy.html" -Encoding UTF8

$cssStartNode = $htmlLines | Select-String -Pattern "<style>"
$cssStart = $cssStartNode.LineNumber[0] + 1
$cssEndNode = $htmlLines | Select-String -Pattern "</style>"
$cssEnd = $cssEndNode.LineNumber[0] - 1
$cssContent = $htmlLines[($cssStart - 1)..($cssEnd - 1)]
$cssContent | Out-File -FilePath "core\app.css" -Encoding UTF8

$htmlStartNode = $htmlLines | Select-String -Pattern '<div class="main-container">'
$htmlStart = $htmlStartNode.LineNumber[0]
$scriptStartNode = $htmlLines | Select-String -Pattern "<script>"
$scriptStartToken = $scriptStartNode.LineNumber[0]
$htmlEnd = $scriptStartToken - 1
$htmlContent = $htmlLines[($htmlStart - 1)..($htmlEnd - 1)]
$htmlContent | Out-File -FilePath "core\app.html" -Encoding UTF8

$jsStart = $scriptStartToken + 1
$jsEndNode = $htmlLines | Select-String -Pattern "</script>"
$jsEnd = $jsEndNode[0].LineNumber - 1
$jsContent = $htmlLines[($jsStart - 1)..($jsEnd - 1)]
$jsContentStr = $jsContent -join "`r`n"
$jsContentStr = $jsContentStr -replace 'window\.onload = async \(\) => \{', 'window.initApp = async () => {'
$jsContentStr | Set-Content -Path "core\app.js" -Encoding UTF8

Set-Content -Path "core\version.json" -Value '{ "version": "1.0.0" }' -Encoding UTF8

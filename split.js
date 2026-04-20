const fs = require('fs');

const txt = fs.readFileSync('academy.html', 'utf-8');
const lines = txt.split(/\r?\n/);

if (!fs.existsSync('core')) {
    fs.mkdirSync('core');
}

const cssStart = lines.findIndex(l => l.includes('<style>')) + 1;
const cssEnd = lines.findIndex(l => l.includes('</style>'));
fs.writeFileSync('core/app.css', lines.slice(cssStart, cssEnd).join('\n'), 'utf-8');

const htmlStart = lines.findIndex(l => l.includes('<div class="main-container">'));
const scriptStartToken = lines.findIndex(l => l.includes('<script>'));
fs.writeFileSync('core/app.html', lines.slice(htmlStart, scriptStartToken).join('\n'), 'utf-8');

const jsStart = scriptStartToken + 1;
const jsEnd = lines.findIndex(l => l.includes('</script>'));
let jsContent = lines.slice(jsStart, jsEnd).join('\n');
jsContent = jsContent.replace('window.onload = async () => {', 'window.initApp = async () => {');
fs.writeFileSync('core/app.js', jsContent, 'utf-8');

fs.writeFileSync('core/version.json', JSON.stringify({ version: "1.0.0" }, null, 2), 'utf-8');

console.log('Tách file thành công!');

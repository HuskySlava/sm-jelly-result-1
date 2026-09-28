const fs = require('fs');
const html = fs.readFileSync('/workspace/index.html', 'utf8');
const match = html.match(/<script>([\s\S]*)<\/script>/);
new Function(match[1]);
console.log('syntax OK');

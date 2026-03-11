const fs = require('fs');

const type = process.argv[2] || 'patch';
const valid = ['major', 'minor', 'patch'];
if (!valid.includes(type)) {
  console.error('Usage: node bump-version.js [major|minor|patch]');
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const v = pkg.version.split('.').map(Number);

if (type === 'major') { v[0]++; v[1] = 0; v[2] = 0; }
else if (type === 'minor') { v[1]++; v[2] = 0; }
else { v[2]++; }

pkg.version = v.join('.');
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
console.log(pkg.version);

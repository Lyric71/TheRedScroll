import { readFileSync } from 'node:fs';
const f = process.argv[2];
let s = readFileSync(f, 'utf8');
s = s.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');      // frontmatter
s = s.replace(/<!--[\s\S]*?-->/g, '');                     // html comments
const body = s.trim();
const withTables = body;
const proseOnly = body.split('\n').filter(l => !l.trim().startsWith('|')).join('\n').trim();
const words = t => (t.match(/[A-Za-z0-9][A-Za-z0-9'’.%-]*/g) || []).length;
console.log('body chars (with tables):', withTables.length);
console.log('body chars (prose only) :', proseOnly.length);
console.log('body words (with tables):', words(withTables));
console.log('body words (prose only) :', words(proseOnly));

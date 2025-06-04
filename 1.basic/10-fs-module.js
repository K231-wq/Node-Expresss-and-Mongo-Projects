const { readFileSync, writeFileSync, read} = require('fs');

const f1 = readFileSync('./content/text.txt', 'utf-8');
const f2 = readFileSync('./content/seconds.txt', 'utf-8');

writeFileSync('./content/newFile.txt', `\n [The new text string ${f1} + ${f2}]`, {flag: 'a'});
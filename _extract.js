const fs = require('fs');
const html = fs.readFileSync('Тесты для подговки к экзамену-1.htm', 'utf8');
const strip = t => t.replace(/<[^>]*>/g, '');
const decode = s => strip(s)
  .replace(/&#(x?)([0-9a-fA-F]+);/g, (m, x, n) => String.fromCharCode(parseInt(n, x ? 16 : 10)))
  .replace(/&nbsp;/g, ' ')
  .replace(/&quot;/g, '"')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ')
  .trim();
const rows = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
const out = [];
for (const r of rows) {
  const cells = [...r[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map(m => m[1]);
  if (cells.length >= 7) {
    const q = decode(cells[2]);
    const answers = [decode(cells[3]), decode(cells[4]), decode(cells[5]), decode(cells[6])].filter(Boolean);
    if (q && answers.length === 4) {
      out.push({ q, opts: answers, a: 0, explain: `Правильный ответ: ${answers[0]}` });
    }
  }
}
console.log('total', out.length);
fs.writeFileSync('questions.json', JSON.stringify(out, null, 2), 'utf8');

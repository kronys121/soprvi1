// prints shots shorter than 2 s per chapter: node tools/shots.js
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const b = await chromium.launch({ args: ['--allow-file-access-from-files'] });
  for (let ch = 0; ch <= 12; ch++) {
    const p = await b.newPage(); await p.goto('file://' + path.resolve('chapter.html') + '?ch=' + ch); await p.waitForFunction('window.ready===true', null, { timeout: 120000 });
    const r = await p.evaluate(() => { const out = []; for (let i = 0; i < SEG.length; i++) { const t1 = i < SEG.length - 1 ? SEG[i + 1].t0 : T_END; out.push([+SEG[i].t0.toFixed(2), +(t1 - SEG[i].t0).toFixed(2)]); } return out; });
    const short = r.filter(([, d]) => d < 2);
    console.log(`ch${ch}: ${r.length} shots, ${short.length} < 2s:`, short.map(([t, d]) => `${t}(${d})`).join(' '));
    await p.close();
  }
  await b.close();
})();

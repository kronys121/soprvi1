// usage: node render_main.js <html> <framesDir> <tStart> <fps> <i0> <i1>   renders frames i0..i1-1 at t = tStart + i/fps
//        node render_main.js <html> --sfx out.json                        dumps the SFX event list
//        node render_main.js <html> --stills dir t1,t2,...
const { chromium } = require(process.env.PW || 'playwright'); const fs = require('fs'); const path = require('path');
(async () => {
  const [html, a1, a2, a3, a4, a5] = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--allow-file-access-from-files'] });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on('console', m => console.log('[page]', m.text())); page.on('pageerror', e => console.log('[err]', e.message));
  await page.goto('file://' + path.resolve(html)); await page.waitForFunction('window.ready===true', null, { timeout: 120000 });
  const grab = async t => { const d = await page.evaluate(async tt => { await renderAt(tt); return document.getElementById('cv').toDataURL('image/jpeg', .93); }, t); return Buffer.from(d.split(',')[1], 'base64'); };
  if (a1 === '--sfx') fs.writeFileSync(a2, JSON.stringify(await page.evaluate(() => getSfx()), null, 0));
  else if (a1 === '--stills') { fs.mkdirSync(a2, { recursive: true }); for (const t of a3.split(',').map(Number)) fs.writeFileSync(`${a2}/t${t.toFixed(2)}.jpg`, await grab(t)); }
  else {
    const dir = a1, t0 = Number(a2), fps = Number(a3), i0 = Number(a4), i1 = Number(a5); fs.mkdirSync(dir, { recursive: true });
    const st = Date.now();
    for (let i = i0; i < i1; i++) { const f = `${dir}/f${String(i).padStart(5, '0')}.jpg`; if (fs.existsSync(f)) continue; fs.writeFileSync(f, await grab(t0 + i / fps)); if ((i - i0) % 60 === 0) console.log(`frame ${i} ${((Date.now() - st) / 1000).toFixed(0)}s`); }
  }
  await browser.close();
})();

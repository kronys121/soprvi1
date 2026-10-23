// usage: node render.js page.html out.mp4 [dur] | node render.js page.html --stills dir t1,t2,...
const { chromium } = require(process.env.PW || 'playwright');
const { spawn } = require('child_process'); const fs = require('fs'); const path = require('path');
(async () => {
  const [html, out, arg3] = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--allow-file-access-from-files'] });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on('console', m => console.log('[page]', m.text())); page.on('pageerror', e => console.log('[err]', e.message));
  await page.goto('file://' + path.resolve(html)); await page.waitForFunction('window.ready===true', null, { timeout: 30000 });
  const grab = async t => { const d = await page.evaluate(tt => { renderAt(tt); return document.getElementById('cv').toDataURL('image/jpeg', .94); }, t); return Buffer.from(d.split(',')[1], 'base64'); };
  if (out === '--frames') {
    const dir = arg3, st = Number(process.argv[5]), n = Number(process.argv[6]);
    for (let i = st; i < st + n && i < 900; i++) fs.writeFileSync(`${dir}/f${String(i).padStart(4, '0')}.jpg`, await grab(i / 60));
  } else if (out === '--stills') {
    const dir = arg3; fs.mkdirSync(dir, { recursive: true });
    for (const t of process.argv[5].split(',').map(Number)) fs.writeFileSync(`${dir}/t${t.toFixed(2)}.jpg`, await grab(t));
  } else {
    const dur = Number(arg3 || 15), fps = 60, N = Math.round(dur * fps);
    const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', '60', '-c:v', 'mjpeg', '-i', '-', '-c:v', 'libx264', '-preset', 'medium', '-crf', '17', '-pix_fmt', 'yuv420p', '-r', '60', out], { stdio: ['pipe', 'inherit', 'inherit'] });
    const t0 = Date.now();
    for (let i = 0; i < N; i++) { const b = await grab(i / fps); if (!ff.stdin.write(b)) await new Promise(r => ff.stdin.once('drain', r)); if (i % 120 === 0) console.log(i, ((Date.now() - t0) / 1000).toFixed(1) + 's'); }
    ff.stdin.end(); await new Promise(r => ff.on('close', r));
  }
  await browser.close();
})();

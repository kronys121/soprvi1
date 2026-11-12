// Unpacks clips/*.mp4 into JPEG frames: public/nacho/assets/frames/<clip>/f00001.jpg ...
// Uses the ffmpeg that ships with Remotion (npx remotion ffmpeg), so nothing else needs installing.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync } from 'node:fs';
import path from 'node:path';

const root = path.dirname(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')));
const clips = path.join(root, 'clips');
const out = path.join(root, 'public', 'nacho', 'assets', 'frames');
const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const files = readdirSync(clips).filter((f) => f.endsWith('.mp4')).sort();
let i = 0;
for (const f of files) {
  const key = f.replace(/\.mp4$/, ''), dir = path.join(out, key);
  i++;
  if (existsSync(path.join(dir, 'f00001.jpg'))) continue;
  mkdirSync(dir, { recursive: true });
  execFileSync(npx, ['remotion', 'ffmpeg', '-loglevel', 'error', '-y', '-i', path.join(clips, f), '-fps_mode', 'passthrough', '-q:v', '3', '-start_number', '1', path.join(dir, 'f%05d.jpg')], { stdio: 'inherit', shell: process.platform === 'win32' });
  console.log(`[${i}/${files.length}] ${key}: ${readdirSync(dir).length} кадров`);
}
console.log('Готово.');

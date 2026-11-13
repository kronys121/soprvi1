// Unpacks clips/*.mp4 into JPEG frame sequences: public/nacho/assets/frames/<clip>/f00001.jpg ...
// Uses the ffmpeg binary that ships inside Remotion (node_modules/@remotion/compositor-*/ffmpeg[.exe]),
// so nothing else has to be installed. A clip is unpacked again only when its mp4 changed.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const comp = path.join(root, 'node_modules', '@remotion');
const dir = readdirSync(comp).find((d) => d.startsWith('compositor-'));
if (!dir) throw new Error('Не найден @remotion/compositor-*: сначала выполни npm install');
const ffmpeg = path.join(comp, dir, process.platform === 'win32' ? 'ffmpeg.exe' : 'ffmpeg');
const clips = path.join(root, 'clips'), out = path.join(root, 'public', 'nacho', 'assets', 'frames');
const files = readdirSync(clips).filter((f) => f.endsWith('.mp4')).sort();
let i = 0, made = 0;
for (const f of files) {
  i++;
  const key = f.slice(0, -4), src = path.join(clips, f), dst = path.join(out, key), stamp = path.join(dst, '.src');
  const st = statSync(src), sig = `${st.size}`;
  if (existsSync(stamp) && readFileSync(stamp, 'utf8') === sig && existsSync(path.join(dst, 'f00001.jpg'))) continue;
  rmSync(dst, { recursive: true, force: true }); mkdirSync(dst, { recursive: true });
  execFileSync(ffmpeg, ['-loglevel', 'error', '-y', '-i', src, '-fps_mode', 'passthrough', '-q:v', '3', '-start_number', '1', path.join(dst, 'f%05d.jpg')], { stdio: 'inherit' });
  writeFileSync(stamp, sig); made++;
  console.log(`[${i}/${files.length}] ${key}: ${readdirSync(dst).length - 1} кадров`);
}
console.log(made ? `Готово: распаковано клипов ${made}.` : 'Кадры уже на месте.');

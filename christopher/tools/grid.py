# usage: grid.py out.jpg ep:t [ep:t ...] -> labeled contact grid (5 cols, 384px) from /home/user/bbm proxies
import sys, subprocess, os, tempfile
out, items = sys.argv[1], sys.argv[2:]; d = tempfile.mkdtemp(); fs = []
for i, it in enumerate(items):
    ep, t = it.split(':'); f = f'{d}/{i:03d}.jpg'
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', t, '-i', f'/home/user/bbm/{ep}_p.mp4', '-frames:v', '1', '-vf',
                    f"scale=384:216,drawtext=text='{ep} {t}':x=6:y=6:fontsize=20:fontcolor=yellow:box=1:boxcolor=black@.6", f])
    if not os.path.exists(f): subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'lavfi', '-i', 'color=black:s=384x216', '-frames:v', '1', f])
    fs.append(f)
while len(fs) % 5: fs.append(fs[-1])
args = []; [args.extend(['-i', f]) for f in fs]; n = len(fs)
lay = '|'.join(f'{(k % 5) * 384}_{(k // 5) * 216}' for k in range(n))
subprocess.run(['ffmpeg', '-v', 'error', '-y', *args, '-filter_complex', f'xstack=inputs={n}:layout={lay}', out])

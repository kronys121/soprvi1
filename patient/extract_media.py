# usage: python3 extract_media.py episodes_dir -> assets/frames/<key>/f00001.jpg ..., assets/stills/<key>.jpg
import json, os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__)); ep = sys.argv[1]; m = json.load(open(f'{here}/media.json'))
for k, (f, t0, d) in m['clips'].items():
    out = f'{here}/assets/frames/{k}'; os.makedirs(out, exist_ok=True)
    if os.path.exists(f'{out}/f00001.jpg'): continue
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-ss', str(t0), '-i', f'{ep}/{f}', '-t', str(d), '-an',
                    '-vf', 'fps=24000/1001,scale=704:-2', '-q:v', '3', f'{out}/f%05d.jpg'], check=True)
    print(k, len(os.listdir(out)))
os.makedirs(f'{here}/assets/stills', exist_ok=True)
for k, (f, t) in m['stills'].items():
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-ss', str(t), '-i', f'{ep}/{f}', '-frames:v', '1', '-vf', 'scale=704:-2',
                    '-q:v', '2', f'{here}/assets/stills/{k}.jpg'], check=True)

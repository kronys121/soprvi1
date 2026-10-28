# builds media.json from the pick lists (key ep t dur) and dialogue inserts (key ep start end), extracts dub audio
# usage: python3 make_media.py /home/user/bbg
import json, os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__)); ep = sys.argv[1]
m = json.load(open(f'{here}/media.json')) if os.path.exists(f'{here}/media.json') else {'fps': 23.976, 'clips': {}, 'stills': {}, 'dlg': {}}
for l in open(f'{ep}/picks.txt'):
    if l.startswith('#') or not l.strip(): continue
    k, e, t, d = l.split()[:4]; m['clips'][k] = [f'{e}_p.mp4', float(t), float(d)]
os.makedirs(f'{here}/assets/dlg', exist_ok=True)
for l in open(f'{ep}/dlg.txt'):
    if l.startswith('#') or not l.strip(): continue
    k, e, a, b = l.split()[:4]; a, b = float(a), float(b)
    m['clips'][k] = [f'{e}_p.mp4', a, round(b - a, 2)]; m['dlg'][k] = round(b - a, 2)
    w = f'{here}/assets/dlg/{k}.wav'
    if not os.path.exists(w) and os.path.exists(f'{ep}/{e}_p.mp4'):
        subprocess.run(['ffmpeg', '-nostdin', '-loglevel', 'error', '-y', '-ss', str(a), '-i', f'{ep}/{e}_p.mp4', '-t', str(b - a), '-vn', '-ac', '2', '-ar', '48000', w], check=True)
json.dump(m, open(f'{here}/media.json', 'w'), ensure_ascii=False, indent=1)
print(len(m['clips']), 'clips', m['dlg'])

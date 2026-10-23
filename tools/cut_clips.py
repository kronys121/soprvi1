# usage: python3 cut_clips.py clips.csv episodes_dir out_dir
# Snaps each [start,end] to the nearest detected shot cut (±1.5 s), then cuts an H.264/AAC clip and a PNG still.
import csv, subprocess, sys, os, bisect
lst, epdir, out = sys.argv[1:4]
os.makedirs(f'{out}/clips', exist_ok=True); os.makedirs(f'{out}/stills', exist_ok=True)
cuts = {}
def snap(ep, t, tol=1.5):
    if ep not in cuts: cuts[ep] = [float(x) for x in open(f'{epdir}/c_{ep}.txt')]
    c = cuts[ep]; near = min(c, key=lambda x: abs(x - t)) if c else t
    return near if abs(near - t) <= tol else t
rows = []
for r in csv.DictReader(open(lst)):
    a, b = snap(r['ep'], float(r['start'])), snap(r['ep'], float(r['end']))
    a += 1 / 24; b -= 1 / 24  # stay off the cut frame itself
    name = f"{r['id']}_{r['chapter']}"
    src = next(f"{epdir}/{r['ep']}.{x}" for x in ('avi', 'mkv') if os.path.exists(f"{epdir}/{r['ep']}.{x}"))
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-ss', f'{a:.3f}', '-i', src, '-t', f'{b - a:.3f}',
                    '-c:v', 'libx264', '-crf', '14', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '192k',
                    f'{out}/clips/{name}.mp4'], check=True)
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-ss', r['still'], '-i', src, '-frames:v', '1',
                    f'{out}/stills/{name}.png'], check=True)
    rows.append([r['id'], r['chapter'], r['desc'], r['ep'], f'{a:.2f}', f'{b:.2f}', f'{b - a:.2f}', name + '.mp4'])
    print(name, f'{a:.2f}-{b:.2f}')
with open(f'{out}/index_{os.path.basename(lst)}', 'w', newline='') as f:
    w = csv.writer(f); w.writerow(['id', 'chapter', 'desc', 'ep', 'in', 'out', 'dur', 'file']); w.writerows(rows)

# voice/orig.mp3 + result.json -> words_orig.json, cut long silences -> result.mp3 + words.json
import json, re, subprocess
V = 'voice/'
d = json.load(open(V + 'result.json'))
w = [[round(x['start'], 3), round(x['end'], 3), x['word']] for x in d['words'] if re.search(r'\w', x['word'])]
json.dump(w, open(V + 'words_orig.json', 'w'), ensure_ascii=False)
log = subprocess.run(['ffmpeg', '-i', V + 'orig.mp3', '-af', 'silencedetect=n=-38dB:d=0.25', '-f', 'null', '-'], capture_output=True, text=True).stderr
ss = [float(x) for x in re.findall(r'silence_start: ([\d.]+)', log)]
se = [float(x) for x in re.findall(r'silence_end: ([\d.]+)', log)]
cuts = [(s + .1, e - .1) for s, e in zip(ss, se) if e - s > .25 and s > 0.05]
dur = d['duration_seconds']
keep, t = [], 0
for a, b in cuts:
    keep.append((t, a)); t = b
keep.append((t, dur))
def remap(x):
    off = 0
    for a, b in cuts:
        if x >= b: off += b - a
        elif x > a: return a - (off) - 0  # inside a cut: clamp to cut start
    return x - off
w2 = [[round(remap(s), 3), round(remap(e), 3), t] for s, e, t in w]
json.dump(w2, open(V + 'words.json', 'w'), ensure_ascii=False)
expr = '+'.join(f'between(t,{a:.3f},{b:.3f})' for a, b in keep)
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', V + 'orig.mp3', '-af', f"aselect='{expr}',asetpts=N/SR/TB", '-c:a', 'libmp3lame', '-b:a', '192k', V + 'result.mp3'], check=True)
print(len(cuts), 'cuts, removed', round(sum(b - a for a, b in cuts), 2), 's; words', len(w2), 'last', w2[-1])

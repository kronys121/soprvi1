# usage: python3 srt_find.py file.srt "regex" -> prints start time (s) and text of matching subtitle blocks
import re, sys
txt = open(sys.argv[1], encoding='utf-8', errors='ignore').read().replace('\r', '')
pat = re.compile(sys.argv[2], re.I)
for b in txt.strip().split('\n\n'):
    l = b.split('\n')
    if len(l) < 3: continue
    m = re.match(r'(\d+):(\d+):(\d+),(\d+)', l[1])
    if not m: continue
    t = int(m[1]) * 3600 + int(m[2]) * 60 + int(m[3]) + int(m[4]) / 1000
    s = ' '.join(l[2:])
    if pat.search(s): print(f'{t:8.1f}  {s}')

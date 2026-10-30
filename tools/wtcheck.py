# usage: wtcheck.py project_dir chNN.js  -> lists Wt() anchors whose match is a longer word (prefix collision risk)
import json, re, sys
d, ch = sys.argv[1:3]
W = json.load(open(f'{d}/voice/words.json')); src = open(f'{d}/chapters/{ch}').read()
v0 = float(re.search(r'CH_V0 = ([\d.]+)', src)[1])
norm = lambda s: re.sub(r'[«»"(),.:;!?—–\-]', '', s.lower().replace('ё', 'е'))
for m in sorted(set(re.findall(r"Wt\('([^']+)'(?:,\s*(\d+))?\)", src))):
    q, n = m[0], int(m[1] or 1); ex = q[0] == '='; qq = norm(q.lstrip('='))
    hits = [w for w in W if w[0] >= v0 - 1e-6 and (norm(w[2]) == qq if ex else norm(w[2]).startswith(qq))]
    if len(hits) < n: print('NOT FOUND', q, n); continue
    w = hits[n - 1]
    if norm(w[2]) != qq: print(f'PREFIX  {q!r:16} #{n} -> {w[2]} @{w[0]:.1f}')

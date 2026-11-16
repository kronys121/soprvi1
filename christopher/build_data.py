# writes words.js (voice word timings) and media.js (frame counts) for main.html
import json, os
here = os.path.dirname(os.path.abspath(__file__))
w = json.load(open(f'{here}/voice/words.json'))
open(f'{here}/words.js', 'w').write('window.WORDS=' + json.dumps(w, ensure_ascii=False) + ';\n')
m = json.load(open(f'{here}/media.json'))
counts = {k: len(os.listdir(f'{here}/assets/frames/{k}')) for k in m['clips']}
open(f'{here}/media.js', 'w').write('window.MEDIA=' + json.dumps({'fps': m['fps'], 'frames': counts, 'stills': list(m['stills'])}) + ';\n')
print(counts)

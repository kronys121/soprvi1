# Soundtrack for the 30 s re-edit sample: nylon-guitar score (Karplus-Strong), layered foley from sfx_sample.json,
# room tone, voice pieces and the two dub pieces from sample_tl.js.  usage: python3 audio_sample.py -> mix_sample.wav
import json, os, subprocess
import numpy as np
from scipy.io import wavfile
here = os.path.dirname(os.path.abspath(__file__)); root = os.path.dirname(here)
src = open(f'{root}/intro/audio.py').read().rsplit('make_a(); make_b()', 1)[0]
ns = {}; os.chdir(f'{root}/intro'); exec(src, ns); os.chdir(here)
SR = ns['SR']; rs = np.random.default_rng(31)
f, bp, lp, hp, env, tone, noise, reverb, thump, whoosh = (ns[k] for k in 'f bp lp hp env tone noise reverb thump whoosh'.split())
TL = json.loads(subprocess.run(['node', '-e', "const t=require('./sample_tl.js'); console.log(JSON.stringify(t))"], capture_output=True, text=True, cwd=here).stdout)
DUR = TL['FILM_END']; N = int(SR * DUR); TA, TB, TK, DA, DB = (TL[k] for k in ('TA', 'TB', 'TK', 'DA', 'DB'))
W = json.load(open(f'{here}/voice/words.json'))
def wt(word, n=1):
    c = 0
    for s, e, w in W:
        ww = ''.join(ch for ch in w.lower().replace('ё', 'е') if ch.isalpha())
        if ww.startswith(word):
            c += 1
            if c == n: return s + (TL['PIECES'][0]['off'] if s < TL['PIECES'][0]['v1'] else TL['PIECES'][1]['off'])
    raise KeyError(word)
def buf(): return np.zeros((2, N))
def sec(d): return int(d * SR)
def put(b, t0, sig, gain=1.0, pan=0.0):
    i = int(round(t0 * SR))
    if i >= N or i + len(sig) <= 0: return
    if i < 0: sig = sig[-i:]; i = 0
    sig = sig[:N - i]; l = np.cos((pan + 1) * np.pi / 4); r = np.sin((pan + 1) * np.pi / 4)
    b[0, i:i + len(sig)] += sig * gain * l * 1.414; b[1, i:i + len(sig)] += sig * gain * r * 1.414
def ramp(n, a, d):
    e = np.ones(n); ka, kd = min(n, sec(a)), min(n, sec(d))
    if ka: e[:ka] = np.linspace(0, 1, ka)
    if kd: e[-kd:] *= np.linspace(1, 0, kd)
    return e

# ---------------- instruments ----------------
def pluck(note, dur=2.4, bright=.55, damp=.9965, mute=False):
    """Karplus-Strong nylon string, one period per step."""
    P = max(2, int(round(SR / f(note)))); n = sec(dur); x = lp(rs.uniform(-1, 1, P), 900 + 7000 * bright, 1); x -= x.mean()
    steps = n // P + 1; out = np.empty(steps * P); d = damp * (.985 if mute else 1)
    for k in range(steps):
        out[k * P:(k + 1) * P] = x; x = d * .5 * (x + np.roll(x, 1))
    out = out[:n]; body = bp(out, 90, 320) * .5 + out
    return body * ramp(n, .001, .08 if mute else .3) * (np.exp(-np.arange(n) / SR / .12) if mute else 1)
mus = buf()
def gtr(t, note, g=.3, pan=0.0, **k): put(mus, t, pluck(note, **k), g, pan)
def strum(t, notes, g=.26, gap=.022, up=False):
    for i, nn in enumerate(notes[::-1] if up else notes): gtr(t + i * gap, nn, g * (1 - .04 * i), (i - len(notes) / 2) * .12, bright=.7)
def trem(t0, t1, note, g0=.1, g1=.3, rate=.085):
    k = 0; t = t0
    while t < t1: u = (t - t0) / (t1 - t0); gtr(t, note, lerp(g0, g1, u) * (1 if k % 2 == 0 else .8), .25, dur=.5, bright=.75); t += rate; k += 1
def lerp(a, b, u): return a + (b - a) * u
def drone(t0, t1, note, g=.12, cut=220):
    n = sec(t1 - t0); tt = np.arange(n) / SR
    s = lp(np.sign(np.sin(2 * np.pi * f(note) * tt)) * .5 + np.sin(2 * np.pi * f(note + 12) * tt * 1.002) + .5 * np.sin(2 * np.pi * f(note + 19) * tt * .998), cut)
    put(mus, t0, s * ramp(n, min(2.5, (t1 - t0) / 3), min(1.0, (t1 - t0) / 4)) * (1 + .15 * np.sin(2 * np.pi * .23 * tt)), g)
def strings(t0, t1, notes, g=.05, swell=True):
    n = sec(t1 - t0); tt = np.arange(n) / SR; s = np.zeros(n)
    for k, nn in enumerate(notes):
        for det in (-.07, 0, .06): s += lp(2 * ((f(nn + det) * tt + k * .37) % 1) - 1, 2600) / 3
    s *= (1 + .5 * np.sin(2 * np.pi * 11 * tt)) * .5      # tremolo bowing
    e = (tt / (t1 - t0)) ** 1.6 if swell else ramp(n, .4, .6); put(mus, t0, hp(s, 200) * e * ramp(n, .05, .03), g)
def taiko(t, g=.5): put(mus, t, thump(62, 1.0, .22), g); put(mus, t, bp(noise(.12), 120, 900) * env(sec(.12), .001, .03), g * .5)
def shaker(t, g=.05, pan=.3): put(mus, t, hp(noise(.07), 5000) * env(sec(.07), .004, .02), g, pan)

# D Phrygian dominant: D Eb F# G A Bb C
D2, A2, D3, Eb3, Fs3, G3, A3, Bb3, C4, D4, Eb4, Fs4, G4, A4, Bb4 = 38, 45, 50, 51, 54, 55, 57, 58, 60, 62, 63, 66, 67, 69, 70
drone(.25, TA + .1, 26, .16); drone(TA, TK, 26, .05, 160)
gtr(wt('две'), D3, .34); gtr(wt('две') + .22, A3, .28, .15); gtr(wt('девятый') + .1, D4, .24, .25)
for k, nn in enumerate([Eb4, D4, C4, Bb3]): gtr(wt('второй') + .05 + k * .26, nn, .26, .2 - k * .1)
gtr(wt('тяжкие') + .1, A3, .3); gtr(wt('тяжкие') + .34, D3, .36, -.1); gtr(wt('тяжкие') + .34, D2, .3, -.2)
taiko(wt('уолтер') + .1, .4); gtr(wt('уолтер') + .1, D2, .4, -.2); gtr(wt('джесси'), A2, .32, .1); gtr(wt('чтобы') + .12, Fs3, .28, .2); gtr(wt('припугнуть') + .05, G3, .24, .25); gtr(wt('припугнуть') + .3, Fs3, .24, .2)
for k, nn in enumerate([D3, A3, D4, Fs4]): gtr(wt('адвоката') + .16 + k * .13, nn, .26, -.2 + k * .15)
gtr(wt('сола') + .1, A3, .3, .1); gtr(wt('гудмана') + .1, D3, .28, -.1)
taiko(wt('увозят') + .05, .34)
for k, nn in enumerate([Eb3, Bb3, Eb4, G4]): gtr(wt('увозят') + .05 + k * .16, nn, .28, -.2 + k * .15)
for k, nn in enumerate([G4, Fs4, Eb4, D4]): gtr(wt('пустыню') + .1 + k * .2, nn, .22, .3 - k * .1)
gtr(wt('ставят'), Bb3, .3); gtr(wt('ставят') + .18, A3, .3); gtr(wt('вырытой'), Fs3, .26, -.1)
tG = wt('ямой') + .1; taiko(tG, .7); gtr(tG, D2, .5, -.2); gtr(tG, A2, .4, .1)
strings(wt('ставят'), TA, [A4, Eb4 + 12], .04)
gtr(wt('уверен'), A4, .2, .3); gtr(wt('уверен') + .5, Bb4, .2, .3); gtr(wt('могила'), A4, .22, .3); gtr(wt('могила') + .45, Fs4, .2, .2)
t = wt('панике'); k = 0
while t < wt('потом') - .1:                                # muted ostinato under the scream
    u = (t - wt('панике')) / 3.6; gtr(t, D2 if k % 4 else D3, .2 + .16 * u, -.15, mute=True, bright=.4); shaker(t + .125, .03 + .03 * u)
    if k % 4 == 0: taiko(t, .2 + .2 * u)
    t += .25; k += 1
strum(wt('игнасио'), [Eb3, Bb3, Eb4, G4, Bb4], .3)
gtr(wt('потом'), D2, .4, -.2); trem(wt('спрашивает'), wt('лало') - .1, A4, .08, .2); trem(wt('лало') + .1, TA - .1, Bb4, .16, .32)
strum(wt('лало'), [D3, A3, D4, Fs4], .28); taiko(wt('лало'), .4)
taiko(TB + .95, .3); taiko(TB + 2.4, .38); strings(TB + .5, TB + DB, [D4, Eb4, A4], .05)
tLL = wt('лало', 2); taiko(TK + .08, .8)
gtr(wt('кто'), D2, .5, -.2); gtr(wt('такой'), A2, .45, .1)
strum(tLL, [D2, A2, D3, Fs3, A3, D4], .42, .018); taiko(tLL, .8)
strum(tLL + .5, [Eb3, Bb3, Eb4, G4, Bb4], .32, .02, up=True); strum(tLL + .95, [D2, A2, D3, Fs3, A3, D4, Fs4], .42, .03); gtr(tLL + 1.25, D4 + 12, .2, .3)

# ---------------- foley ----------------
fx = buf()
_wr = subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', f'{here}/samples/whoosh.flac', '-f', 's16le', '-ac', '1', '-ar', str(SR), '-'], capture_output=True).stdout
WHOOSH = np.frombuffer(_wr, np.int16).astype(np.float64); WHOOSH /= np.max(np.abs(WHOOSH)); WPK = int(np.argmax(np.abs(WHOOSH))) / SR
def burst(dur, lo, hi, d, a=.0005): return bp(noise(dur), lo, hi) * env(sec(dur), a, d)
def s_lamp(e):
    put(fx, e['t'] - .03, burst(.02, 1500, 7000, .004), .5); put(fx, e['t'], thump(140, .12, .02), .3)
    for dt in (0, .06, .16): put(fx, e['t'] + dt, burst(.05, 3000, 9000, .012), .16, .2)
    n = sec(DUR - e['t']); tt = np.arange(n) / SR; put(fx, e['t'], (np.sin(2 * np.pi * 100 * tt) + .4 * np.sin(2 * np.pi * 200 * tt)) * ramp(n, .3, .5), .006)
def s_cut(e): put(fx, e['t'], thump(75, .2, .03), .16); put(fx, e['t'], burst(.02, 2500, 8000, .004), .08)
def s_shutter(e):
    p = rs.uniform(-.2, .2); put(fx, e['t'], burst(.012, 2500, 9000, .003), .5, p); put(fx, e['t'] + .045, burst(.05, 700, 3200, .012), .45, p)
    n = sec(.14); tt = np.arange(n) / SR; put(fx, e['t'] + .06, np.sin(2 * np.pi * np.cumsum(260 + 500 * tt / .14) / SR) * ramp(n, .01, .05) * (1 + .5 * np.sign(np.sin(2 * np.pi * 90 * tt))), .05, p)
def s_slap(e):
    k = min(1.3, e.get('size', 500) / 520); put(fx, e['t'], burst(.07, 500, 4500, .014), .42 * k, rs.uniform(-.2, .2)); put(fx, e['t'], thump(95, .3, .045), .34 * k)
def s_slide(e):
    d = max(.18, e.get('dur', .3)); n = sec(d + .08); put(fx, e['t'], bp(noise(d + .08), 1400, 7000) * ramp(n, d * .5, d * .3) * (.7 + .3 * rs.uniform(0, 1, n)), .13, rs.uniform(-.3, .3))
def s_marker(e):
    d = max(.1, e.get('dur', .3)); n = sec(d); tt = np.arange(n) / SR; g = .1 if e.get('soft') else .17
    s = bp(noise(d), 900, 3200) * (.55 + .45 * np.sin(2 * np.pi * 17 * tt + rs.uniform(0, 6))) + .25 * np.sin(2 * np.pi * (1500 + 250 * np.sin(2 * np.pi * 9 * tt)) * tt) * (rs.uniform(0, 1, n) > .4)
    put(fx, e['t'], s * ramp(n, .015, .05), g, .15)
def s_label(e):
    for dt, g in ((0, .4), (.055, .55)): put(fx, e['t'] - .06 + dt, burst(.03, 1200, 6000, .006), g); put(fx, e['t'] - .06 + dt, thump(180, .08, .012), g * .5)
def s_clap(e):
    put(fx, e['t'], burst(.12, 900, 9000, .016, .0002), 1.0); put(fx, e['t'], tone(430, .2, ((1, 1), (2.3, .5), (3.9, .25)), a=.0005, d=.035), .5); put(fx, e['t'], thump(120, .25, .04), .5)
def s_card(e): put(fx, e['t'], burst(.03, 2000, 8000, .006), .3, -.2); put(fx, e['t'], thump(150, .12, .02), .18, -.2)
def s_unfold(e):
    d = .55; n = sec(d); g = np.repeat(rs.uniform(0, 1, n // 400 + 1) ** 3, 400)[:n]; put(fx, e['t'], bp(noise(d), 1500, 8000) * g * ramp(n, .05, .2), .5); put(fx, e['t'] + .42, thump(90, .3, .05), .3)
def s_pin(e): put(fx, e['t'], hp(noise(.03), 3000) * env(sec(.03), .0005, .006), .22); put(fx, e['t'], thump(220, .06, .01), .15)
def s_zip(e):
    d = max(.2, e.get('dur', .5)); n = sec(d); tt = np.arange(n) / SR; put(fx, e['t'], np.sin(2 * np.pi * np.cumsum(300 + 500 * tt / d) / SR) * bp(noise(d), 400, 3000) * .5 * ramp(n, .1, .1), .12, -.3)
def s_heart(e):
    for k, g in ((0, .7), (.21, .45)): put(fx, e['t'] + k, thump(46, .5, .13), g); put(fx, e['t'] + k, lp(noise(.5), 120) * env(sec(.5), .002, .08), g * .3)
def s_slamword(e):
    g = 1.0 if e.get('big') else .8; put(fx, e['t'], thump(58, .7, .16), .75 * g); put(fx, e['t'], burst(.09, 400, 5000, .02), .5 * g); put(fx, e['t'], burst(.3, 150, 900, .09), .2 * g)
def s_stamp(e): put(fx, e['t'], thump(62, .9, .22), .8); put(fx, e['t'], burst(.15, 300, 3000, .03), .45)
def s_riser(e):
    d = e.get('dur', 1.0); n = sec(d); tt = np.arange(n) / SR; u = tt / d
    put(fx, e['t'], whoosh(d, 1.0, 300, 9000) * u ** 2, 1.0); put(fx, e['t'], np.sin(2 * np.pi * np.cumsum(180 * 2 ** (u * 2.6)) / SR) * u ** 3 * ramp(n, .05, .01), .2); put(fx, e['t'], hp(noise(d), 6000) * u ** 4, .3)
def s_boom(e):
    g = .6 if e.get('soft') else 1.0; n = sec(2.2); tt = np.arange(n) / SR
    put(fx, e['t'], np.sin(2 * np.pi * np.cumsum(34 + 70 * np.exp(-tt * 9)) / SR) * env(n, .003, .7), 1.0 * g); put(fx, e['t'], lp(noise(1.6), 500) * env(sec(1.6), .002, .35), .4 * g); put(fx, e['t'], burst(.12, 800, 6000, .025), .3 * g)
def s_whoosh(e): d = e.get('dur', .5); put(fx, max(0, e['t'] + d * .45 - WPK), WHOOSH, .09 if e.get('soft') else .15, rs.uniform(-.2, .2))
def s_tapeon(e):
    d = e.get('dur', 3); put(fx, e['t'] - .02, thump(110, .2, .035), .5); put(fx, e['t'] - .02, burst(.03, 1000, 5000, .006), .4)
    n = sec(d); tt = np.arange(n) / SR; put(fx, e['t'], hp(noise(d), 3500) * ramp(n, .05, .05), .022); put(fx, e['t'], np.sin(2 * np.pi * 60 * tt) * ramp(n, .05, .05), .015)
def s_glitch(e):
    d = e.get('dur', .16) + .04; n = sec(d); tt = np.arange(n) / SR; gate = (np.sin(2 * np.pi * 43 * tt + 1) > -.2) * 1.0
    put(fx, e['t'], hp(noise(d), 800) * gate * ramp(n, .003, .02), .4)
    for k in range(6): t0 = rs.uniform(0, d - .03); put(fx, e['t'] + t0, np.sign(np.sin(2 * np.pi * rs.uniform(300, 3000) * np.arange(sec(.025)) / SR)) * .5, .12, rs.uniform(-.6, .6))
H = {k[2:]: v for k, v in globals().items() if k.startswith('s_')}
for e in json.load(open(f'{here}/sfx_sample.json')):
    if e['t'] >= DUR: continue
    if e['type'] in H: H[e['type']](e)
    else: print('no handler', e['type'])

# ---------------- room: tone, clock, desert wind ----------------
amb = buf(); tt = np.arange(N) / SR
put(amb, 0, lp(noise(DUR), 260) * ramp(N, .3, .6), .05)
k = 0; t = .9
while t < TA - .3: put(amb, t, burst(.03, 1800 if k % 2 else 2400, 5200, .005), .05, -.5); t += .5; k += 1
wind = bp(noise(DUR), 250, 900) * (.5 + .5 * np.sin(2 * np.pi * .13 * tt + 1)) * (.6 + .4 * np.sin(2 * np.pi * .31 * tt))
wenv = np.clip((tt - wt('увозят')) / 2.5, 0, 1) * np.clip((TA - tt) / .3, 0, 1); put(amb, 0, wind * wenv, .05)

# ---------------- voice + dub pieces ----------------
def load(path, ch=1):
    raw = subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', path, '-f', 's16le', '-ac', str(ch), '-ar', str(SR), '-'], capture_output=True).stdout
    x = np.frombuffer(raw, np.int16).astype(np.float64) / 32767
    return x.reshape(-1, ch).T if ch > 1 else x
v = load(f'{here}/voice/result.mp3'); voice = buf()
for p in TL['PIECES']:
    piece = v[int(p['v0'] * SR):int(p['v1'] * SR)].copy(); fd = sec(.01); piece[:fd] *= np.linspace(0, 1, fd); piece[-fd:] *= np.linspace(1, 0, fd); put(voice, p['v0'] + p['off'], piece)
def rms(x): x = x[np.abs(x) > 1e-3]; return np.sqrt(np.mean(x ** 2)) if len(x) else 1
vr = rms(v); dlg = buf(); dmask = np.zeros(N)
for key, t0, d in (('x_sA', TA, DA), ('x_sB', TB, DB)):
    x = load(f'{here}/assets/dlg/{key}.wav', 2)[:, :sec(d)]; g = .95 * vr / rms(x.mean(0)); n = x.shape[1]; i = sec(t0); x = x * ramp(n, .03, .05) * g
    dlg[:, i:i + n] += x[:, :N - i]; dmask[i:i + n] = 1
r = sec(.12); dmask = np.convolve(dmask, np.ones(r) / r, 'same')
a = np.abs(voice[0]); k = sec(.03); sm = np.convolve(a, np.ones(k) / k, 'same'); step = 64; blk = sm[::step]; ca = np.exp(-step / (SR * .01)); cr = np.exp(-step / (SR * .3)); y = 0.0; ev = np.empty(len(blk))
for i, x in enumerate(blk):
    c = ca if x > y else cr; y = c * y + (1 - c) * x; ev[i] = y
envv = np.repeat(ev, step)[:N]; envv = np.pad(envv, (0, N - len(envv))); envv = np.clip(envv / (np.percentile(envv[envv > 1e-4], 90) + 1e-9), 0, 1)

# ---------------- mix ----------------
mus_w = reverb(mus, 2.2, .28); fx_w = reverb(fx, 1.1, .16)
mix = voice + dlg + mus_w * .5 * (1 - .5 * envv) * (1 - .7 * dmask) + fx_w * .42 * (1 - .22 * envv) * (1 - .35 * dmask) + amb * (1 - .5 * dmask)
mix = np.tanh(mix * 1.05) / 1.05
fin = np.ones(N); fin[:sec(.05)] = np.linspace(0, 1, sec(.05)); j0 = sec(DUR - .7); fin[j0:] = np.linspace(1, 0, N - j0); mix *= fin
mix *= .9 / np.max(np.abs(mix))
wavfile.write(f'{here}/mix_sample.wav', SR, (np.clip(mix, -1, 1).T * 32767).astype(np.int16)); print('ok', DUR)

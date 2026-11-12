# Nacho film soundtrack: nylon-guitar score (Karplus-Strong, A minor), layered foley from sfx/chNN.json,
# room tone, voice pieces and dub inserts from timeline.js.  usage: python3 audio_film.py -> mix_film.wav
import json, os, subprocess, glob
import numpy as np
from scipy.io import wavfile
here = os.path.dirname(os.path.abspath(__file__)); root = os.path.dirname(here)
src = open(f'{root}/intro/audio.py').read().rsplit('make_a(); make_b()', 1)[0]
ns = {}; os.chdir(f'{root}/intro'); exec(src, ns); os.chdir(here)
SR = ns['SR']; rs = np.random.default_rng(37)
f, bp, lp, hp, env, tone, noise, reverb, thump, whoosh, typeclick = (ns[k] for k in 'f bp lp hp env tone noise reverb thump whoosh typeclick'.split())
TL = json.loads(subprocess.run(['node', '-e', "const t=require('./timeline.js'); const r={}; for (let k=0;k<=12;k++) r[k]=t.chRange(k); console.log(JSON.stringify({...t, CH:r}))"], capture_output=True, text=True, cwd=here).stdout)
DUR = TL['FILM_END']; N = int(SR * DUR); CH = {int(k): v for k, v in TL['CH'].items()}; DLGT = TL['DLGT']
DLG = {"d_saul2": 2.96, "d_police": 9.1, "d_mike": 3.6, "d_out": 13.7, "d_night": 17.0, "d_toast": 5.2, "d_call1": 14.5, "d_call2": 11.1, "d_conf": 7.5}
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
PC = {}
def pluck(note, dur=2.4, bright=.55, damp=.9965, mute=False):
    key = (note, round(dur, 1), round(bright, 2), mute, int(rs.integers(3)))
    if key in PC: return PC[key]
    PC[key] = _pluck(note, dur, bright, damp, mute); return PC[key]
def _pluck(note, dur, bright, damp, mute):
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


# ---------------- score: A minor, Am - F - C - E, eighths at 72 bpm ----------------
A1, E2, F2, G2, A2, B2, C3, D3, E3, F3, G3, Gs3, A3, B3, C4, D4, E4, F4, G4, Gs4, A4, C5, E5 = 33, 40, 41, 43, 45, 47, 48, 50, 52, 53, 55, 56, 57, 59, 60, 62, 64, 65, 67, 68, 69, 72, 76
CHORDS = [(A2, [A3, C4, E4]), (F2, [A3, C4, F4]), (C3, [G3, C4, E4]), (E2, [Gs3, B3, E4])]
EI = 60 / 72 / 2
#           chapter: (arp gain, ostinato, high melody)
STYLE = {0: (.16, 0, 1), 1: (.14, 0, 0), 2: (.13, 0, 1), 3: (.15, 1, 0), 4: (.15, 1, 0), 5: (.15, 1, 0), 6: (.16, 1, 0), 7: (.15, 0, 0), 8: (.16, 1, 1), 9: (.14, 0, 1), 10: (.15, 1, 1), 11: (.14, 0, 1), 12: (.12, 0, 0)}
MEL = [E5, D4 + 12, C5, B3 + 12, C5, A4, B3 + 12, Gs4]
for k, (a, b) in CH.items():
    g, ost, mel = STYLE[k]; t0 = a + (1.2 if k else .9); t = t0; i = 0
    if k: gtr(a + 1.0, A1, .32, -.1, dur=3.0); taiko(a + 1.0, .32)
    while t < b - .6:
        bar = i // 8; bass, up = CHORDS[bar % 4]; s = i % 8; u = min(1, (t - t0) / 6)
        if s == 0: gtr(t, bass, g * 1.5 * u + .05, -.15, dur=3.0, bright=.45)
        pat = [None, 0, 1, 2, 1, 0, 1, 2][s]
        if pat is not None: gtr(t, up[pat], g * u * (1.0 if s in (2, 6) else .8), .1 + .08 * pat, bright=.6)
        if ost and s % 2 == 1: gtr(t, bass + 12, .07 * u, -.25, mute=True, bright=.35)
        if ost and s == 0 and bar % 2 == 0: taiko(t, .14 * u)
        if mel and s == 4 and bar % 2 == 1: gtr(t, MEL[(bar // 2) % len(MEL)], .1 * u, .3, dur=3.0, bright=.7)
        t += EI; i += 1
    drone(a + 1.0, b, A1 + 12, .03, 180)
# swells
strings(DLGT['d_conf'] - 4, DLGT['d_conf'] + 7.5, [A3, E4, C5], .03)
strings(CH[11][1] - 14, CH[11][1] - .5, [A3, C4, E4], .04)
strings(CH[2][0] + 1, CH[2][1] - 1, [A3, E4], .018, swell=False)
fx = buf()
_wr = subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', f'{root}/lalo/samples/whoosh.flac', '-f', 's16le', '-ac', '1', '-ar', str(SR), '-'], capture_output=True).stdout
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

def s_type(e): put(fx, e['t'], typeclick(), .16 if e.get('heavy') else .1, rs.uniform(-.3, .3))
def s_pen(e):
    d = e.get('dur', .4); n = sec(d); tt = np.arange(n) / SR
    put(fx, e['t'], bp(noise(d), 1800, 4500) * (.6 + .4 * np.sin(2 * np.pi * 23 * tt)) * ramp(n, .02, .06), .12, .2)
def s_hitlow(e): put(fx, e['t'], thump(40, 1.6, .5), .6); put(fx, e['t'], hp(noise(1.2), 3500) * env(sec(1.2), .002, .4), .06, .3)
H = {k[2:]: v for k, v in globals().items() if k.startswith('s_')}

for e in sum((json.load(open(p)) for p in sorted(glob.glob(f'{here}/sfx/ch*.json'))), []):
    if e['t'] >= DUR: continue
    if e['type'] in H: H[e['type']](e)
    else: print('no handler', e['type'])
# red slam words get a guitar hit
for e in sum((json.load(open(p)) for p in sorted(glob.glob(f'{here}/sfx/ch*.json'))), []):
    if e['type'] == 'slamword' and e.get('big'): strum(e['t'], [A2, E3, A3, C4, E4], .2, .015); taiko(e['t'], .3)

# ---------------- room tone + clock ----------------
amb = buf()
put(amb, 0, lp(noise(DUR), 260) * ramp(N, .3, .6), .045)
t = 1.0; k = 0
while t < DUR - 1: put(amb, t, bp(noise(.03), 1800 if k % 2 else 2400, 5200) * env(sec(.03), .0005, .005), .035, -.5); t += .5; k += 1

# ---------------- voice + dub inserts ----------------
def load(path, ch=1):
    raw = subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', path, '-f', 's16le', '-ac', str(ch), '-ar', str(SR), '-'], capture_output=True).stdout
    x = np.frombuffer(raw, np.int16).astype(np.float64) / 32767
    return x.reshape(-1, ch).T if ch > 1 else x
v = load(f'{here}/voice/result.mp3'); voice = buf()
for p in TL['PIECES']:
    piece = v[int(p['v0'] * SR):int(min(p['v1'], len(v) / SR) * SR)].copy()
    if len(piece) < 10: continue
    fd = sec(.01); piece[:fd] *= np.linspace(0, 1, fd); piece[-fd:] *= np.linspace(1, 0, fd); put(voice, p['v0'] + p['off'], piece)
def rms(x): x = x[np.abs(x) > 1e-3]; return np.sqrt(np.mean(x ** 2)) if len(x) else 1
vr = rms(v); dlg = buf(); dmask = np.zeros(N)
for key, t0 in DLGT.items():
    d = DLG[key]; x = load(f'{here}/assets/dlg/{key}.wav', 2)[:, :sec(d)]; g = .95 * vr / rms(x.mean(0)); n = x.shape[1]; i = sec(t0); x = x * ramp(n, .03, .08) * g
    dlg[:, i:i + n] += x[:, :N - i]; dmask[i:i + n] = 1
r = sec(.25); dmask = np.convolve(dmask, np.ones(r) / r, 'same')
a = np.abs(voice[0]); k = sec(.03); sm = np.convolve(a, np.ones(k) / k, 'same'); step = 64; blk = sm[::step]; ca = np.exp(-step / (SR * .01)); cr = np.exp(-step / (SR * .3)); y = 0.0; ev = np.empty(len(blk))
for i, x in enumerate(blk):
    c = ca if x > y else cr; y = c * y + (1 - c) * x; ev[i] = y
envv = np.repeat(ev, step)[:N]; envv = np.pad(envv, (0, N - len(envv))); envv = np.clip(envv / (np.percentile(envv[envv > 1e-4], 90) + 1e-9), 0, 1)

# ---------------- mix ----------------
mus_w = reverb(mus, 2.2, .28); fx_w = reverb(fx, 1.1, .16)
mix = voice + dlg + mus_w * .5 * (1 - .5 * envv) * (1 - .8 * dmask) + fx_w * .42 * (1 - .22 * envv) * (1 - .35 * dmask) + amb * (1 - .5 * dmask)
mix = np.tanh(mix * 1.05) / 1.05
fin = np.ones(N); fin[:sec(.05)] = np.linspace(0, 1, sec(.05)); j0 = sec(DUR - 1.6); fin[j0:] = np.linspace(1, 0, N - j0); mix *= fin
mix *= .9 / np.max(np.abs(mix))
wavfile.write(f'{here}/mix_film.wav', SR, (np.clip(mix, -1, 1).T * 32767).astype(np.int16)); print('ok', DUR)

# Jesse film soundtrack: score per chapter, SFX from sfx/chNN.json, voice pieces from timeline.js,
# original-dub dialogue inserts at DLGT (music almost muted under them), ducking under the voice.
# usage: python3 audio_film.py  -> mix_film.wav (48 kHz stereo)
import json, os, subprocess
import numpy as np
from scipy.io import wavfile
here = os.path.dirname(os.path.abspath(__file__)); root = os.path.dirname(here)

# reuse the intro's synth toolkit (audio.py) without running its make_a/make_b calls
src = open(f'{root}/intro/audio.py').read().rsplit('make_a(); make_b()', 1)[0]
ns = {}; os.chdir(f'{root}/intro'); exec(src, ns); os.chdir(here)
SR = ns['SR']; rs = np.random.default_rng(23)
f, bp, lp, hp, env, tone, noise, reverb, piano, rhodes, typeclick, thump, whoosh = (ns[k] for k in
    'f bp lp hp env tone noise reverb piano rhodes typeclick thump whoosh'.split())

TL = json.loads(subprocess.run(['node', '-e', "const t=require('./timeline.js'); console.log(JSON.stringify({p: t.PIECES, d: t.DLGT, end: t.FILM_END, r: [...Array(12).keys()].map(k => t.chRange(k))}))"],
                               capture_output=True, text=True, cwd=here).stdout)
DUR = TL['end']; N = int(SR * DUR); CHR = TL['r']
def buf(): return np.zeros((2, N))
def put(b, t0, sig, gain=1.0, pan=0.0):
    i = int(round(t0 * SR))
    if i >= N or i + len(sig) <= 0: return
    if i < 0: sig = sig[-i:]; i = 0
    sig = sig[:N - i]; l = np.cos((pan + 1) * np.pi / 4); r = np.sin((pan + 1) * np.pi / 4)
    b[0, i:i + len(sig)] += sig * gain * l * 1.414; b[1, i:i + len(sig)] += sig * gain * r * 1.414
def sec(d): return int(d * SR)
def ramp(n, a, d):
    e = np.ones(n); ka, kd = min(n, sec(a)), min(n, sec(d))
    if ka: e[:ka] = np.linspace(0, 1, ka)
    if kd: e[-kd:] *= np.linspace(1, 0, kd)
    return e

# ---------------- score ----------------
mus = buf(); beat = .5; m0 = 0.0
roots = [33, 29, 36, 31]                               # A F C G: desert minor
def root_at(t): return roots[int((t - m0) // 2) % 4]
def grid(t0, t1, step):
    k0 = int(np.ceil((t0 - m0) / step - 1e-9)); return [m0 + k * step for k in range(k0, 10 ** 6) if m0 + k * step < t1]
def bass8(t, root, g=.42, cut=750): put(mus, t, lp(tone(f(root), .26, ((1, 1), (2, .5), (3, .33), (4, .25)), a=.003, d=.12), cut), g)
def kick(t, g=.5): put(mus, t, thump(52, .5, .14), g)
def tick(t, g=.09, pan=-.4, hi=6000): put(mus, t, hp(noise(.05), hi) * env(sec(.05), .001, .018), g, pan)
def pad(t0, dur, notes, g=.06, cut=1000, det=.3):
    n = sec(dur); tt = np.arange(n) / SR
    p = sum(lp(np.sign(np.sin(2 * np.pi * f(x) * tt + det * np.sin(tt * 3 + x))), cut) for x in notes) / len(notes)
    p *= ramp(n, min(.6, dur / 3), min(.8, dur / 3)); put(mus, t0, p, g)
def chord(r): return [r + 24, r + 31, r + 36 + (4 if r in (29, 36) else 3)]
def groove(t0, t1, g=1.0, half=False, kick_every=4, cut0=600, rh=False, slide=False):
    step = beat if half else beat / 2
    for t in grid(t0, t1, step):
        k = round((t - m0) / step); r = root_at(t); bass8(t, r, .38 * g, cut0 + 450 * (k % 2))
        if k % kick_every == 0: kick(t, .36 * g)
        elif k % 2: tick(t, .07 * g)
    for t in grid(t0, t1, 2.0):
        if t + 2.0 > t1 + .5: continue
        r = root_at(t); pad(t, 2.2, chord(r), .05 * g)
        if rh: put(mus, t + .06, rhodes([r + 24, r + 31, r + 34], 1.9, .9), .14 * g, .15)
        if slide:   # desert slide guitar-ish bend
            n = sec(1.8); tt = np.arange(n) / SR; fr = f(r + 31) * (1 + .03 * np.minimum(tt / .25, 1)); s = np.sin(2 * np.pi * np.cumsum(fr) / SR)
            put(mus, t + 1.0, lp(np.tanh(2.5 * s), 1800) * ramp(n, .05, 1.2), .05 * g, -.3)
def pianoline(pairs, g=.17): [put(mus, t, piano(nn, 3, 1.4), g, (nn - 64) / 24) for t, nn in pairs]
def drone(t0, t1, g=.16, note=21):
    n = sec(t1 - t0); tt = np.arange(n) / SR
    put(mus, t0, lp(np.sin(2 * np.pi * f(note + 12) * tt) + .4 * np.sin(2 * np.pi * f(note + 19) * tt * 1.003), 260) * ramp(n, 1.0, 1.0), g)
def clock(t0, t1, g=.09): [tick(t, g, -.3, 5000) for t in grid(t0, t1, beat)]
def hitm(t, g=.5): put(mus, t, thump(38, 2.0, .8), g); put(mus, t, piano(21, 2.5, 1.5) + piano(33, 2.5, 1.5), g * .5)
def motif(t0, g=.15, up=0):  # five-note theme (A minor)
    pianoline([(t0, 57 + up), (t0 + .8, 60 + up), (t0 + 1.6, 64 + up), (t0 + 2.6, 62 + up), (t0 + 3.4, 60 + up)], g)

# 00 cold open: piano + pad (the kid we loved), groove under the dossier
a, b = CHR[0]
pad(.4, 26, [45, 52, 57, 64], .05, 1000); motif(1.0, .14); motif(9.0, .13, 7); hitm(1.6, .35)
groove(26.0, b - .4, .85, half=True, slide=True)
# 01 УЧЕНИК: light rhodes groove; near-silence for the parents insert
a, b = CHR[1]; hitm(a + .1, .45)
groove(a + .9, b - .4, .8, rh=True, kick_every=8)
# 02 ЛИШНИЙ: playful driving groove
a, b = CHR[2]; hitm(a + .1, .45)
groove(a + .9, b - .4, 1.0, kick_every=2, rh=True)
# 03 ДЖЕЙН: pad + motif, drone at her death, clock for the planes
a, b = CHR[3]; hitm(a + .1, .45)
pad(a + .9, 20, [45, 52, 57, 64, 69], .055, 1100); motif(a + 2, .15)
drone(a + 21, a + 46, .16); clock(a + 46, b - .3, .08)
# 04 ГЕЙЛ: drone + clock to the shot, pad after
a, b = CHR[4]; hitm(a + .1, .5)
drone(a + .9, a + 33, .17); clock(a + 16, a + 33, .1)
pad(a + 34, b - a - 34.4, [45, 52, 57, 60], .05, 900); motif(a + 36, .13)
# 05 СОБАКА: party groove, then sparse
a, b = CHR[5]; hitm(a + .1, .45)
groove(a + .9, a + 16, 1.05, kick_every=2, slide=True); drone(a + 16, a + 30, .13)
groove(a + 30, a + 50, .85, rh=True); drone(a + 50, b - .3, .13)
# 06 ДЕТИ: music box over a drone
a, b = CHR[6]; hitm(a + .1, .45)
drone(a + .9, b - .3, .14); motif(a + 3, .12, 12); motif(a + 18, .12, 12); motif(a + 33, .12, 7)
# 07 ДЕНЬГИ: night groove, building to the gas can
a, b = CHR[7]; hitm(a + .1, .45)
groove(a + .9, a + 30, .9, half=True, slide=True); groove(a + 30, b - .4, 1.05, kick_every=2)
# 08 ЯМА: dark drone, clock
a, b = CHR[8]; hitm(a + .1, .5)
drone(a + .9, b - .3, .17); clock(a + 30, a + 50, .09); motif(a + 52, .12)
# 09 СВОБОДА: pulse to the refusal, then release
a, b = CHR[9]; hitm(a + .1, .5)
drone(a + .9, a + 36, .15); clock(a + .9, a + 12, .1)
groove(a + 46, b - .4, 1.0, rh=True, slide=True)
# 10 ВЕРДИКТ: pad + motif, building groove
a, b = CHR[10]; hitm(a + .1, .5)
pad(a + .9, 24, [45, 52, 57, 64], .05, 1000); motif(a + 2, .14)
groove(a + 25, b - .4, .95, rh=True)
# 11 outro
a, b = CHR[11]; hitm(a + .1, .45)
groove(a + .4, b - 4.5, .9, rh=True); hitm(b - 4.4, .65)

# ---------------- SFX from the scene events ----------------
sfxb = buf()
def s_stamp(e):
    g = 1.0 if e.get('big') else .85
    put(sfxb, e['t'], thump(62, .9, .22), .8 * g); put(sfxb, e['t'], bp(noise(.15), 300, 3000) * env(sec(.15), .001, .03), .45 * g)
def s_drop(e):
    k = min(1.2, e.get('size', 500) / 560)
    put(sfxb, e['t'], bp(noise(.12), 700, 5000) * env(sec(.12), .001, .025), .32 * k, rs.uniform(-.3, .3)); put(sfxb, e['t'], thump(85, .35, .05), .22 * k)
def s_slide(e):
    d = max(.2, e.get('dur', .35)); n = sec(d + .1); put(sfxb, e['t'], bp(noise(d + .1), 1200, 6000) * ramp(n, d * .4, d * .5), .1, rs.uniform(-.4, .4))
def s_type(e): put(sfxb, e['t'], typeclick(), .2 if e.get('heavy') else .13, rs.uniform(-.3, .3))
def s_tick(e): put(sfxb, e['t'], bp(noise(.04), 2500, 7000) * env(sec(.04), .0005, .008), .25, rs.uniform(-.4, .4))
def s_whoosh(e):
    d = e.get('dur', .7); put(sfxb, e['t'] - .1, whoosh(d + .2, .55, 200, 3500 if e.get('soft') else 5000), .14 if e.get('soft') else .22)
def s_zip(e):
    d = max(.2, e.get('dur', .5)); n = sec(d); tt = np.arange(n) / SR
    put(sfxb, e['t'], np.sin(2 * np.pi * np.cumsum(300 + 500 * tt / d) / SR) * bp(noise(d), 400, 3000) * .5 * ramp(n, .1, .1), .14, -.3)
def s_pin(e): put(sfxb, e['t'], hp(noise(.03), 3000) * env(sec(.03), .0005, .006), .2)
def s_flip(e):
    d = .55 if e.get('big') else .45; n = sec(d); burst = bp(noise(d), 500, 5000) * (np.abs(np.sin(np.linspace(0, 9, n))) ** 3) * ramp(n, .05, .2)
    put(sfxb, e['t'], burst, .3 if e.get('big') else .22); put(sfxb, e['t'] + d * .85, thump(90, .3, .05), .25)
def s_pen(e):
    d = e.get('dur', .4); n = sec(d); tt = np.arange(n) / SR
    put(sfxb, e['t'], bp(noise(d), 1800, 4500) * (.6 + .4 * np.sin(2 * np.pi * 23 * tt)) * ramp(n, .02, .06), .12, .2)
def s_marker(e):
    d = e.get('dur', .9); n = sec(d); tt = np.arange(n) / SR
    put(sfxb, e['t'], bp(noise(d), 900, 3000) * (.5 + .5 * np.abs(np.sin(2 * np.pi * 5 * tt))) * ramp(n, .02, .1), .15)
def s_tape(e):
    d = e.get('dur', .5) + .3; n = sec(d); put(sfxb, e['t'], bp(noise(d), 400, 2500) * ramp(n, .05, .3), .16); put(sfxb, e['t'], whoosh(d, .5, 150, 2500), .15)
def s_heart(e):
    for k, g in [(0, .55), (.2, .35)]: put(sfxb, e['t'] + k, thump(48, .5, .12), g)
def s_boom(e): put(sfxb, e['t'], thump(34, 2.5, .9), 1.0); put(sfxb, e['t'], lp(noise(1.5), 400) * env(sec(1.5), .002, .5), .35)
def s_shot(e):
    put(sfxb, e['t'], thump(55, 1.2, .25), .95); put(sfxb, e['t'], hp(noise(.25), 1500) * env(sec(.25), .0005, .05), .5)
    put(sfxb, e['t'] + .02, bp(noise(.6), 300, 2000) * env(sec(.6), .001, .2), .25)
def s_hitlow(e): put(sfxb, e['t'], thump(40, 1.6, .5), .6); put(sfxb, e['t'], hp(noise(1.2), 3500) * env(sec(1.2), .002, .4), .06, .3)
def s_splash(e): d = 1.6; put(sfxb, e['t'], bp(noise(d), 200, 4000) * env(sec(d), .01, .35), .35); put(sfxb, e['t'], thump(60, .6, .12), .3)
def s_slap(e): put(sfxb, e['t'], hp(noise(.12), 1500) * env(sec(.12), .0003, .02), .9); put(sfxb, e['t'], thump(70, .4, .06), .5)
def s_crash(e):
    put(sfxb, e['t'], thump(45, 1.5, .4), 1.0); put(sfxb, e['t'], hp(noise(1.0), 1200) * env(sec(1.0), .001, .25), .45)
    for k in range(8): put(sfxb, e['t'] + .05 + k * .06, hp(noise(.08), 3000) * env(sec(.08), .0005, .03), .2, rs.uniform(-.6, .6))
def s_bell(e):
    for h, g in [(1, 1), (2.76, .5), (5.4, .25)]: put(sfxb, e['t'], tone(1320 * h, 2.0, a=.001, d=.7), .12 * g, .3)
H = {k[2:]: v for k, v in globals().items() if k.startswith('s_')}
EVENTS = []
for k in range(12):
    a, b = CHR[k]; EVENTS += [e for e in json.load(open(f'{here}/sfx/ch{k:02d}.json')) if a - .05 <= e['t'] < b]
for e in EVENTS:
    if e['type'] in H: H[e['type']](e)
    else: print('no sfx handler for', e['type'])

# ---------------- voice + dialogue ----------------
def load(path, ch=1):
    raw = subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', path, '-f', 's16le', '-ac', str(ch), '-ar', str(SR), '-'], capture_output=True).stdout
    x = np.frombuffer(raw, np.int16).astype(np.float64) / 32767
    return x.reshape(-1, ch).T if ch > 1 else x
v = load(f'{here}/voice/result.mp3')
voice = buf()
for p in TL['p']:
    piece = v[int(p['v0'] * SR):int(min(p['v1'], len(v) / SR) * SR)].copy(); fd = sec(.01); piece[:fd] *= np.linspace(0, 1, fd); piece[-fd:] *= np.linspace(1, 0, fd)
    put(voice, p['v0'] + p['off'], piece, 1.0)
def rms(x): x = x[np.abs(x) > 1e-3]; return np.sqrt(np.mean(x ** 2)) if len(x) else 1
vr = rms(v); dlg = buf(); dlg_mask = np.zeros(N)
for key, t0 in TL['d'].items():
    d = load(f'{here}/assets/dlg/{key}.wav', 2); g = .9 * vr / rms(d.mean(0)); n = d.shape[1]
    e = ramp(n, .06, .12); i = sec(t0)
    m = min(n, N - i); dlg[:, i:i + m] += d[:, :m] * e[:m] * g
    r = sec(.3); dlg_mask[max(0, i - r):i] = np.maximum(dlg_mask[max(0, i - r):i], np.linspace(0, 1, min(r, i)))
    dlg_mask[i:i + m] = 1; dlg_mask[i + m:i + m + r] = np.maximum(dlg_mask[i + m:i + m + r], np.linspace(1, 0, len(dlg_mask[i + m:i + m + r])))

# ducking envelope from the voice
a = np.abs(voice[0]); k = sec(.03); sm = np.convolve(a, np.ones(k) / k, 'same')
step = 64; blk = sm[::step]; ca = np.exp(-step / (SR * .01)); cr = np.exp(-step / (SR * .35)); y = 0.0; ev = np.empty(len(blk))
for i, x in enumerate(blk):
    c = ca if x > y else cr; y = c * y + (1 - c) * x; ev[i] = y
envv = np.repeat(ev, step)[:N]; envv = np.pad(envv, (0, N - len(envv)))
envv = np.clip(envv / (np.percentile(envv[envv > 1e-4], 90) + 1e-9), 0, 1)
duck = (1 - .62 * envv) * (1 - .88 * dlg_mask)

# ---------------- mix ----------------
mus_w = reverb(mus, 1.8, .22); sfx_w = reverb(sfxb, 1.0, .12)
music_bus = mus_w * .5 * duck
mix = voice * 1.0 + dlg * 1.0 + music_bus * .55 + sfx_w * .42 * (1 - .25 * envv) * (1 - .5 * dlg_mask)
mix = np.tanh(mix * 1.05) / 1.05
fin = np.ones(N); fin[:sec(.5)] = np.linspace(0, 1, sec(.5)); j0 = sec(DUR - 1.6); fin[j0:] = np.linspace(1, 0, N - j0); mix *= fin
mix *= .9 / np.max(np.abs(mix))
wavfile.write(f'{here}/mix_film.wav', SR, (np.clip(mix, -1, 1).T * 32767).astype(np.int16))
print('ok', mix.shape, DUR)

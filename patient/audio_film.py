# Full-film soundtrack (built on the Intro + Patient mix): intro audio (0-14.4) + new score, SFX from sfx.json, voice at +12 s with ducking.
# usage: python3 audio_full.py  -> mix.wav (48 kHz stereo), stems/*.wav
import json, os, sys
import numpy as np
from scipy.io import wavfile
from scipy.signal import resample_poly
here = os.path.dirname(os.path.abspath(__file__)); root = os.path.dirname(here)

# reuse the intro's synth toolkit (audio.py) without running its make_a/make_b calls
src = open(f'{root}/intro/audio.py').read().rsplit('make_a(); make_b()', 1)[0]
ns = {}; os.chdir(f'{root}/intro'); exec(src, ns); os.chdir(here)
SR = ns['SR']; rs = np.random.default_rng(11)
f, bp, lp, hp, env, tone, noise, reverb, piano, rhodes, typeclick, thump, whoosh = (ns[k] for k in
    'f bp lp hp env tone noise reverb piano rhodes typeclick thump whoosh'.split())

OFF, T_INTRO, DUR = 12.0, 14.4, 516.5
T_CH1 = 125.0
N = int(SR * DUR)
def buf(): return np.zeros((2, N))
def put(b, t0, sig, gain=1.0, pan=0.0):
    i = int(round(t0 * SR))
    if i >= N or i + len(sig) <= 0: return
    if i < 0: sig = sig[-i:]; i = 0
    sig = sig[:N - i]; l = np.cos((pan + 1) * np.pi / 4); r = np.sin((pan + 1) * np.pi / 4)
    b[0, i:i + len(sig)] += sig * gain * l * 1.414; b[1, i:i + len(sig)] += sig * gain * r * 1.414
def sec(d): return int(d * SR)
def ramp(n, a, d):  # attack/decay linear envelope helper
    e = np.ones(n); ka, kd = min(n, sec(a)), min(n, sec(d))
    if ka: e[:ka] = np.linspace(0, 1, ka)
    if kd: e[-kd:] *= np.linspace(1, 0, kd)
    return e

# ---------------- intro (rendered by the original make_b) ----------------
os.chdir(f'{root}/intro'); ns['make_b'](); os.chdir(here)   # writes intro/b.wav (15 s)
sr_b, b = wavfile.read(f'{root}/intro/b.wav'); b = b.T.astype(np.float64) / 32767
intro = buf(); n_i = min(b.shape[1], N); intro[:, :n_i] = b[:, :n_i]
fade = np.ones(N); i0, i1 = sec(T_INTRO - .05), sec(T_INTRO + .35); fade[i0:i1] = np.linspace(1, 0, i1 - i0); fade[i1:] = 0
intro *= fade
g_t = np.ones(N); g0, g1 = sec(11.6), sec(12.0); g_t[g0:g1] = np.linspace(1, .55, g1 - g0); g_t[g1:] = .55; intro *= g_t   # leave room for the title line

# ---------------- score ----------------
mus = buf(); beat = .5; m0 = 2.5                       # same grid as the intro groove
roots = [40, 36, 33, 35]                               # E C A B (as in the intro)
def root_at(t): return roots[int((t - m0) // 2) % 4]
def grid(t0, t1, step):
    k0 = int(np.ceil((t0 - m0) / step - 1e-9)); return [m0 + k * step for k in range(k0, 10 ** 6) if m0 + k * step < t1]
def bass8(t, root, g=.42, cut=750):
    put(mus, t, lp(tone(f(root), .26, ((1, 1), (2, .5), (3, .33), (4, .25)), a=.003, d=.12), cut), g)
def kick(t, g=.5): put(mus, t, thump(52, .5, .14), g)
def tick(t, g=.09, pan=-.4, hi=6000): put(mus, t, hp(noise(.05), hi) * env(sec(.05), .001, .018), g, pan)
def pad(t0, dur, notes, g=.06, cut=1000, det=.3):
    n = sec(dur); tt = np.arange(n) / SR
    p = sum(lp(np.sign(np.sin(2 * np.pi * f(x) * tt + det * np.sin(tt * 3 + x))), cut) for x in notes) / len(notes)
    p *= ramp(n, min(.6, dur / 3), min(.8, dur / 3)); put(mus, t0, p, g)
def chord(r, minor=True): return [r + 24, r + 31, r + 36 + (3 if minor else 4)]

# A · 14.4-48.6 groove continues under the voice
for t in grid(14.4, 48.5, beat / 2):
    k = round((t - m0) / (beat / 2)); r = root_at(t); bass8(t, r, .40, 650 + 450 * (k % 2))
    if k % 2 == 0: kick(t, .42 if k % 4 == 0 else .28)
    else: tick(t, .08)
for t in grid(14.4, 48.5, 2.0): pad(t, 2.2, chord(root_at(t), root_at(t) != 35), .055)
# lift into the case opening, small break on the spoiler warning
put(mus, 34.2, whoosh(.9, .8, 200, 3000), .12)
# chapter 01 hit
put(mus, 48.95, thump(38, 2.4, .8), .6); put(mus, 48.95, piano(28, 3, 1.6) + piano(40, 3, 1.6), .28)
put(mus, 48.95, hp(noise(2.2), 3500) * env(sec(2.2), .002, .7), .08, .3)
# B · 49-57 sparse: clock + low drone
n = sec(8.5); tt = np.arange(n) / SR
put(mus, 49.3, lp(np.sin(2 * np.pi * f(28) * tt) + .4 * np.sin(2 * np.pi * f(35) * tt * 1.003), 260) * ramp(n, 1.2, 1.0), .2)
for t in grid(49.3, 59.5, beat): tick(t, .1, -.3, 5000)
for t in grid(51.0, 57.0, 2.0): put(mus, t, lp(tone(f(root_at(t)), 1.6, ((1, 1), (2, .4)), a=.01, d=.9), 500), .3)
# collapse: everything drops at the fall except a low tail
put(mus, 59.56, lp(noise(3.0), 180) * env(sec(3.0), .005, 1.4), .5)
# C · ducks 61.4-67.3: piano motif, rubato
motif = [(61.6, 64), (62.3, 67), (63.0, 71), (63.9, 69), (64.6, 67), (65.3, 64), (66.2, 76), (66.25, 71), (66.3, 67)]
for t, nn in motif: put(mus, t, piano(nn, 3, 1.4), .2, (nn - 68) / 20)
pad(61.4, 6.2, [52, 59, 64, 67], .05, 900)
put(mus, 66.15, hp(noise(1.6), 2000) * env(sec(1.6), .25, .5), .05, .4)
# D · doctors / Melfi / shame / Chase 67.3-85.6: lighter groove with Rhodes
prog_d = [40, 36, 33, 35]
for t in grid(67.4, 85.5, beat):
    k = round((t - m0) / beat); r = root_at(t); bass8(t, r, .36, 600)
    if k % 2 == 0: kick(t, .25)
    tick(t + beat / 2, .06)
for t in grid(67.4, 85.5, 2.0):
    r = root_at(t); put(mus, t + .06, rhodes([r + 24, r + 31, r + 27 + (0 if r == 35 else 0), r + 34], 1.9, .9), .16, .15)
# E · in the chair / ducks = family 85.6-98.5: piano + pad, sustained bass
for t in grid(86.0, 98.4, 2.0):
    r = root_at(t); put(mus, t, lp(tone(f(r), 2.1, ((1, 1), (2, .3)), a=.02, d=1.6), 400), .38)
    pad(t, 2.2, chord(r, r != 35), .05, 900)
for t, nn in [(86.4, 67), (88.4, 71), (90.4, 72), (92.4, 71), (94.0, 64), (95.0, 67), (96.0, 71), (96.8, 76)]: put(mus, t, piano(nn, 3, 1.5), .17)
pad(96.6, 2.2, [52, 59, 64, 71], .07, 1400)   # swell on "страшно потерять семью"
# F · human/gangster, inside the head 98.5-109.4: tension groove back
for t in grid(98.6, 109.3, beat / 2):
    k = round((t - m0) / (beat / 2)); r = root_at(t); bass8(t, r, .38, 600 + 500 * (k % 2))
    if k % 4 == 0: kick(t, .38)
    elif k % 2: tick(t, .07)
put(mus, 104.8, whoosh(1.3, .9, 150, 5000), .2)
# G · coma 109.4-120.3: dream pad, no drums
pad(109.6, 11.0, [52, 59, 63, 66, 71], .07, 1600, .9)
for t, nn in [(111.5, 83), (113.5, 78), (115.5, 81), (117.5, 76), (119.3, 79)]: put(mus, t, tone(f(nn), 2.5, ((1, 1), (2.76, .25), (5.4, .1)), a=.004, d=1.1), .07, .3)
n = sec(10.8); tt = np.arange(n) / SR; put(mus, 109.6, lp(np.sin(2 * np.pi * f(28) * tt), 200) * ramp(n, 1.5, 1.5), .16)
# H · step back 120.3-125: build and hit
for t in grid(120.4, 124.0, beat / 2):
    k = round((t - m0) / (beat / 2)); bass8(t, 40, .2 + .06 * (t - 120.4) / 3.6, 500 + 250 * (t - 120.4))
    if k % 2 == 0: kick(t, .16 + .05 * (t - 120.4))
put(mus, 124.2, thump(36, 2.0, .9), .55); put(mus, 124.2, piano(28, 2, 1.5) + piano(40, 2, 1.5) + piano(47, 2, 1.5), .35)

# ---------------- chapters 2-11 score ----------------
import subprocess as _sp
SEGS = json.loads(_sp.run(['node', '-e', "const t=require('./timeline.js'); console.log(JSON.stringify({segs: t.SEGS, r: Object.fromEntries([2,3,4,5,6,7,8,9,10,11].map(k=>[k,t.chRange(k)]))}))"], capture_output=True, text=True, cwd=here).stdout)
CHR = {int(k): v for k, v in SEGS['r'].items()}
def groove(t0, t1, g=1.0, half=False, kick_every=4, cut0=600, rhodes_on=False, minor=True):
    step = beat if half else beat / 2
    for t in grid(t0, t1, step):
        k = round((t - m0) / step); r = root_at(t); bass8(t, r, .38 * g, cut0 + 450 * (k % 2))
        if k % kick_every == 0: kick(t, .36 * g)
        elif k % 2: tick(t, .07 * g)
    for t in grid(t0, t1, 2.0):
        if t + 2.0 > t1 + .5: continue
        pad(t, 2.2, chord(root_at(t), minor and root_at(t) != 35), .05 * g)
        if rhodes_on: r = root_at(t); put(mus, t + .06, rhodes([r + 24, r + 31, r + 34], 1.9, .9), .14 * g, .15)
def pianoline(pairs, g=.17): [put(mus, t, piano(nn, 3, 1.4), g, (nn - 68) / 24) for t, nn in pairs]
def drone(t0, t1, g=.16, note=28):
    n = sec(t1 - t0); tt = np.arange(n) / SR
    put(mus, t0, lp(np.sin(2 * np.pi * f(note) * tt) + .4 * np.sin(2 * np.pi * f(note + 7) * tt * 1.003), 260) * ramp(n, 1.0, 1.0), g)
def clock(t0, t1, g=.09): [tick(t, g, -.3, 5000) for t in grid(t0, t1, beat)]
def hitm(t, g=.5): put(mus, t, thump(38, 2.0, .8), g); put(mus, t, piano(28, 2.5, 1.5) + piano(40, 2.5, 1.5), g * .5)
def chapter_open(k):
    a, b = CHR[k]; hitm(a + .1, .45); return a, b
# 02 СЫН: half-time dark groove, flashback = clock + music-box piano, build on trauma
a, b = chapter_open(2)
groove(a + .9, 154.0, .9, half=True); clock(154.0, 171.0); drone(154.0, 171.0, .12, 33)
pianoline([(158.0, 76), (159.6, 79), (161.2, 83), (162.6, 81), (165.2, 76), (166.8, 79), (168.4, 84), (169.8, 83)], .12)
groove(171.0, b - .4, 1.0)
# 03 ОТЕЦ: road trip rhodes, tension for the informant, sparse after, piano for AJ
a, b = chapter_open(3)
groove(a + .9, 203.0, .8, rhodes_on=True, kick_every=8, minor=False)
groove(203.0, 216.4, 1.05); put(mus, 214.4, thump(40, 1.6, .5), .55)
clock(216.4, 232.0); drone(216.4, 232.0, .13, 31)
pianoline([(232.4, 64), (234.0, 67), (235.6, 71), (237.2, 69), (239.8, 64), (241.4, 76), (243.0, 74), (244.6, 71), (246.6, 72), (248.2, 71)], .17)
pad(232.2, b - 232.6, [52, 59, 64, 67], .05, 900)
# 04 МУЖ: medium rhodes groove, lift on the system
a, b = chapter_open(4)
groove(a + .9, b - .4, .85, rhodes_on=True, kick_every=4)
put(mus, 283.7, thump(40, 1.4, .5), .4)
# 05 БОСС: tension; boat = sea drone; horse = piano; fight/crash pulses; reasons build
a, b = chapter_open(5)
groove(a + .9, 298.6, 1.0); drone(298.6, 305.6, .2, 28)
pianoline([(306.0, 64), (307.2, 67), (308.4, 71), (309.6, 76), (310.9, 75)], .16)
groove(311.5, 329.6, 1.05, kick_every=2)
clock(329.6, 335.4); groove(335.4, b - .4, 1.1)
# 06 ХУЖЕ НЕГО: sly half-time
a, b = chapter_open(6)
groove(a + .9, b - .4, .85, half=True, rhodes_on=True)
# 07 АКТЁР: warm piano + pad, a pulse under the terror frame
a, b = chapter_open(7)
pad(a + .9, b - a - 1.3, [52, 59, 64, 67, 71], .055, 1100)
pianoline([(a + 1.2, 67), (a + 2.8, 71), (a + 4.4, 72), (a + 6.0, 76), (a + 7.6, 74), (a + 9.2, 71)], .16)
groove(395.0, b - .4, .8, half=True)
# 08 МЕЛФИ: pad + piano; clock under the study; slap hit
a, b = chapter_open(8)
pad(a + .9, 431.0 - a - .9, [50, 57, 62, 65], .055, 900)
pianoline([(408.0, 69), (410.0, 72), (412.0, 74), (414.6, 77), (416.4, 76), (418.0, 72)], .15)
drone(419.0, 431.0, .14, 29)
pad(431.6, 8.0, [52, 59, 64, 71], .06, 1300)
clock(440.0, 449.6); groove(449.6, b - .4, .9, half=True); hitm(453.3, .6)
# 09 ФИНАЛ: diner pad, total silence at the black, sparse after, low verdict
a, b = chapter_open(9)
pad(a + .9, 470.7 - a - .9, [52, 59, 64, 68, 71], .06, 1300)
clock(472.6, 478.0, .08); drone(478.0, b - .3, .13, 28)
# 10 ВЕРДИКТ: building groove, hit on «дело открыто»
a, b = chapter_open(10)
groove(a + .9, 501.3, 1.0, rhodes_on=True); hitm(501.3, .7)
# 11 outro
a, b = chapter_open(11)
groove(a + .4, 513.6, .9, rhodes_on=True); hitm(513.8, .65)

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
    z = np.sin(2 * np.pi * np.cumsum(300 + 500 * tt / d) / SR) * bp(noise(d), 400, 3000) * .5
    put(sfxb, e['t'], z * ramp(n, .1, .1), .14, -.3)
def s_pin(e): put(sfxb, e['t'], hp(noise(.03), 3000) * env(sec(.03), .0005, .006), .2)
def s_pop(e): put(sfxb, e['t'], tone(1800, .04, a=.001, d=.015) + hp(noise(.04), 4000) * env(sec(.04), .0005, .01), .3)
def s_flip(e):
    d = .55 if e.get('big') else .45; n = sec(d); burst = bp(noise(d), 500, 5000) * (np.abs(np.sin(np.linspace(0, 9, n))) ** 3) * ramp(n, .05, .2)
    put(sfxb, e['t'], burst, .3 if e.get('big') else .22); put(sfxb, e['t'] + d * .85, thump(90, .3, .05), .25)
def s_pen(e):
    d = e.get('dur', .4); n = sec(d); tt = np.arange(n) / SR
    sq = bp(noise(d), 1800, 4500) * (.6 + .4 * np.sin(2 * np.pi * 23 * tt)) * ramp(n, .02, .06); put(sfxb, e['t'], sq, .12, .2)
def s_marker(e):
    d = e.get('dur', .9); n = sec(d); tt = np.arange(n) / SR
    put(sfxb, e['t'], bp(noise(d), 900, 3000) * (.5 + .5 * np.abs(np.sin(2 * np.pi * 5 * tt))) * ramp(n, .02, .1), .15)
def s_tape(e):
    d = e.get('dur', .5) + .3; n = sec(d); put(sfxb, e['t'], bp(noise(d), 400, 2500) * ramp(n, .05, .3), .16); put(sfxb, e['t'], whoosh(d, .5, 150, 2500), .15)
def s_heart(e):
    for k, g in [(0, .55), (.2, .35)]: put(sfxb, e['t'] + k, thump(48, .5, .12), g)
def s_boom(e): put(sfxb, e['t'], thump(34, 2.5, .9), 1.0); put(sfxb, e['t'], lp(noise(1.5), 400) * env(sec(1.5), .002, .5), .35)
def s_flap(e):
    d = e.get('dur', 1.2); n = sec(d); tt = np.arange(n) / SR
    put(sfxb, e['t'], bp(noise(d), 300, 2500) * (np.abs(np.sin(2 * np.pi * 7 * tt)) ** 4) * ramp(n, .1, .4), .25, .3)
def s_shot(e):
    put(sfxb, e['t'], thump(55, 1.2, .25), .95); put(sfxb, e['t'], hp(noise(.25), 1500) * env(sec(.25), .0005, .05), .5)
    put(sfxb, e['t'] + .02, bp(noise(.6), 300, 2000) * env(sec(.6), .001, .2), .25)
def s_roll(e): put(sfxb, e['t'], bp(noise(.03), 1500, 6000) * env(sec(.03), .0005, .006), .16, .3)
def s_rise(e):
    d = e.get('dur', 3.5); n = sec(d); tt = np.arange(n) / SR
    put(sfxb, e['t'], whoosh(d, .97, 150, 6000), .13); put(sfxb, e['t'], np.sin(2 * np.pi * np.cumsum(80 + 160 * (tt / d) ** 2) / SR) * (tt / d) ** 2 * .5, .12)
def s_hit(e): put(sfxb, e['t'], hp(noise(2.0), 3000) * env(sec(2.0), .002, .6), .12, .2)
def s_hitlow(e): put(sfxb, e['t'], thump(40, 1.6, .5), .6); put(sfxb, e['t'], hp(noise(1.2), 3500) * env(sec(1.2), .002, .4), .06, .3)
def s_chop(e): put(sfxb, e['t'], thump(90, .4, .06), .8); put(sfxb, e['t'], bp(noise(.12), 1500, 6000) * env(sec(.12), .0005, .02), .5)
def s_splash(e): d = 1.6; put(sfxb, e['t'], bp(noise(d), 200, 4000) * env(sec(d), .01, .35), .35); put(sfxb, e['t'], thump(60, .6, .12), .3)
def s_sea(e): d = e.get('dur', 4); n = sec(d); tt = np.arange(n) / SR; put(sfxb, e['t'], lp(noise(d), 700) * (.6 + .4 * np.sin(2 * np.pi * .25 * tt)) * ramp(n, .8, 1.0), .18)
def s_crash(e):
    put(sfxb, e['t'], thump(45, 1.5, .4), 1.0); put(sfxb, e['t'], hp(noise(1.0), 1200) * env(sec(1.0), .001, .25), .45)
    for k in range(8): put(sfxb, e['t'] + .05 + k * .06, hp(noise(.08), 3000) * env(sec(.08), .0005, .03), .2, rs.uniform(-.6, .6))
def s_slap(e): put(sfxb, e['t'], hp(noise(.12), 1500) * env(sec(.12), .0003, .02), .9); put(sfxb, e['t'], thump(70, .4, .06), .5)
def s_bell(e):
    for h, g in [(1, 1), (2.76, .5), (5.4, .25)]: put(sfxb, e['t'], tone(1320 * h, 2.0, a=.001, d=.7), .12 * g, .3)
def s_cutblack(e): pass
H = {k[2:]: v for k, v in globals().items() if k.startswith('s_')}
EVENTS = [e for e in json.load(open(f'{here}/sfx.json')) if T_INTRO - .2 <= e['t'] <= T_CH1]
for k in range(2, 12):
    a, b = CHR[k]; EVENTS += [e for e in json.load(open(f'{here}/sfx/ch{k:02d}.json')) if a - .05 <= e['t'] < b]
BLACK = [(e['t'], e['t'] + e['dur']) for e in EVENTS if e['type'] == 'cutblack']
for e in EVENTS: H[e['type']](e)

# ---------------- voice ----------------
import subprocess
raw = subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', f'{root}/voice/result.mp3', '-f', 's16le', '-ac', '1', '-ar', str(SR), '-'], capture_output=True).stdout
v = np.frombuffer(raw, np.int16).astype(np.float64) / 32767
voice = buf(); segs = SEGS['segs']
for i, sg in enumerate(segs):
    v0 = sg['v0']; v1 = segs[i + 1]['v0'] if i + 1 < len(segs) else len(v) / SR
    piece = v[int(v0 * SR):int(v1 * SR)].copy(); fd = sec(.01); piece[:fd] *= np.linspace(0, 1, fd); piece[-fd:] *= np.linspace(1, 0, fd)
    put(voice, v0 + sg['off'], piece, 1.0)
# ducking envelope from the voice
a = np.abs(voice[0]); k = sec(.03); sm = np.convolve(a, np.ones(k) / k, 'same')
step = 64; blk = sm[::step]; ca = np.exp(-step / (SR * .01)); cr = np.exp(-step / (SR * .35)); y = 0.0; ev = np.empty(len(blk))
for i, x in enumerate(blk):
    c = ca if x > y else cr; y = c * y + (1 - c) * x; ev[i] = y
envv = np.repeat(ev, step)[:N]
envv = np.clip(envv / (np.percentile(envv[envv > 1e-4], 90) + 1e-9), 0, 1)
duck = 1 - .62 * envv

# ---------------- mix ----------------
mus_w = reverb(mus, 1.8, .22); sfx_w = reverb(sfxb, 1.0, .12)
music_bus = (intro * .55 + mus_w * .5) * duck
mute = np.ones(N)
for b0, b1 in BLACK: i0, i1 = sec(b0), sec(b1); mute[i0:i1] = 0; r = sec(.25); mute[i1:i1 + r] = np.linspace(0, 1, r)
music_bus *= mute; sfx_w *= mute
mix = voice * 1.0 + music_bus * .55 + sfx_w * .42 * (1 - .25 * envv)
mix = np.tanh(mix * 1.05) / 1.05
tail = np.ones(N); j0 = sec(DUR - 1.6); tail[j0:] = np.linspace(1, 0, N - j0); mix *= tail
nf = .9 / np.max(np.abs(mix)); mix *= nf
np.savez_compressed(f'{here}/stems/levels_film.npz', voice=(voice * nf)[0, ::48], music=(music_bus * .55 * nf)[0, ::48], sfx=(sfx_w * .42 * (1 - .25 * envv) * nf)[0, ::48])
os.makedirs(f'{here}/stems', exist_ok=True)
w = lambda name, x: wavfile.write(name, SR, (np.clip(x, -1, 1).T * 32767).astype(np.int16))
w(f'{here}/mix_film.wav', mix)

print('ok', mix.shape, 'peak', np.max(np.abs(mix)))

import json, sys, numpy as np
from scipy.signal import butter, sosfilt, fftconvolve
from scipy.io import wavfile
SR = 48000; DUR = 15.0; N = int(SR * DUR)
rs = np.random.default_rng(3)

def load(name, key):
    return json.loads(open(name).read().split('=', 1)[1].strip().rstrip(';'))

def f(note):  # midi -> Hz
    return 440 * 2 ** ((note - 69) / 12)
def bp(x, lo, hi, o=2): return sosfilt(butter(o, [lo, hi], 'band', fs=SR, output='sos'), x)
def lp(x, c, o=2): return sosfilt(butter(o, c, 'low', fs=SR, output='sos'), x)
def hp(x, c, o=2): return sosfilt(butter(o, c, 'high', fs=SR, output='sos'), x)
def env(n, a, d):
    t = np.arange(n) / SR; e = np.exp(-t / d); k = int(a * SR)
    if k > 0: e[:k] *= np.linspace(0, 1, k)
    return e
def put(buf, t0, sig, gain=1.0, pan=0.0):
    i = int(round(t0 * SR));
    if i >= N: return
    sig = sig[:N - i]; l = np.cos((pan + 1) * np.pi / 4); r = np.sin((pan + 1) * np.pi / 4)
    buf[0, i:i + len(sig)] += sig * gain * l * 1.414; buf[1, i:i + len(sig)] += sig * gain * r * 1.414
def tone(freq, dur, harm=((1, 1),), a=.005, d=.4, vib=0):
    n = int(dur * SR); t = np.arange(n) / SR; s = np.zeros(n)
    for h, g in harm: s += g * np.sin(2 * np.pi * freq * h * t + vib * np.sin(2 * np.pi * 5 * t))
    return s * env(n, a, d)
def noise(dur): return rs.standard_normal(int(dur * SR))
def reverb(x, dec=1.8, mix=.25):
    n = int(dec * SR); t = np.arange(n) / SR
    out = np.zeros_like(x)
    for ch in range(2):
        ir = rs.standard_normal(n) * np.exp(-t * 6.9 / dec); ir = lp(ir, 5000); ir /= np.sqrt((ir ** 2).sum())
        out[ch] = fftconvolve(x[ch], ir)[:x.shape[1]]
    return x * (1 - mix) + out * mix * 1.2

def bass(freq, dur=.6): return lp(tone(freq, dur, ((1, 1), (2, .35), (3, .12)), a=.004, d=.32), 900)
def rhodes(notes, dur=1.2, d=.7):
    s = sum(tone(f(n), dur, ((1, 1), (2, .25), (4, .05)), a=.006, d=d) for n in notes); t = np.arange(len(s)) / SR
    return s * (1 + .25 * np.sin(2 * np.pi * 4.5 * t)) / len(notes)
def piano(n, dur=2.5, d=.9): return tone(f(n), dur, ((1, 1), (2, .5), (3, .2), (4, .1), (5.02, .05)), a=.002, d=d)
def typeclick():
    s = bp(noise(.05), 1800, 6000) * env(int(.05 * SR), .0005, .008); s += .5 * lp(noise(.05), 400) * env(int(.05 * SR), .0005, .015); return s
def thump(f0=55, dur=1.2, d=.35):
    n = int(dur * SR); t = np.arange(n) / SR; ph = 2 * np.pi * np.cumsum(f0 * (1 + 1.5 * np.exp(-t * 25))) / SR
    return np.sin(ph) * env(n, .002, d) + .4 * lp(noise(dur), 1200) * env(n, .001, .04)
def whoosh(dur, peak_at=1.0, lo=300, hi=4000):
    n = int(dur * SR); t = np.linspace(0, 1, n); x = noise(dur); out = np.zeros(n); blk = 2048
    for i in range(0, n, blk):
        u = t[i]; c = lo + (hi - lo) * (u / peak_at if u < peak_at else max(0, 1 - (u - peak_at) / (1 - peak_at + 1e-6)))
        out[i:i + blk] = lp(x[i:i + blk], max(100, c), 1)
    e = np.where(t < peak_at, (t / peak_at) ** 2, np.exp(-(t - peak_at) * 12)); return out * e
def crackle(dur, rate=18):
    n = int(dur * SR); s = np.zeros(n); idx = rs.integers(0, n, int(rate * dur)); s[idx] = rs.standard_normal(len(idx)) * rs.uniform(.2, 1, len(idx))
    return hp(s, 1500) + .02 * lp(noise(dur), 3000)
def master(buf, name, fade=(0, .4)):
    buf = np.tanh(buf * 1.1) / 1.1
    t = np.arange(N) / SR; buf *= np.clip((DUR - t) / fade[1], 0, 1)
    buf /= np.max(np.abs(buf)) / .89; wavfile.write(name, SR, (buf.T * 32767).astype(np.int16))

def make_a():
    T = load('timings_a.js', 'TA'); mus = np.zeros((2, N)); sfx = np.zeros((2, N))
    put(sfx, 0, crackle(DUR), .35)
    drone = lp(tone(f(38), 3.4, ((1, 1), (2, .3)), a=1.5, d=9), 400); put(mus, 0, drone * np.linspace(1, 0, len(drone)) ** .5, .07)
    for s, t0, per in T['type']:
        for k, ch in enumerate(s):
            if ch != ' ': put(sfx, t0 + (k + 1) * per - .01, typeclick(), .28 if t0 < 3 else .17, pan=rs.uniform(-.3, .3))
    b = T['beat']; m0 = T['musicStart']
    walk = [[38, 41, 45, 48], [43, 46, 50, 41], [45, 49, 52, 43]]
    comp = [[53, 57, 60, 64], [55, 58, 62, 65], [55, 61, 64, 67]]
    for bar in range(3):
        for k in range(4):
            tt = m0 + (bar * 4 + k) * b
            if tt >= T['answer'] - .01: continue
            put(mus, tt, bass(f(walk[bar][k])), .55)
            put(sfx, tt, hp(noise(.08), 7000) * env(int(.08 * SR), .001, .03), .05, .4)  # ride tick
            if k in (1, 3):
                put(sfx, tt, bp(noise(.25), 1500, 6000) * env(int(.25 * SR), .03, .08), .06, -.3)  # brush
                if bar < 2: put(mus, tt + (.06 if k == 3 else 0), rhodes(comp[bar], 1.0, .45), .22, .2)
    # whip-pan whoosh landing on the downbeat
    w0, w1 = T['whip']; put(sfx, w0 - .25, whoosh(w1 - w0 + .7, peak_at=(w1 - w0 + .25) / (w1 - w0 + .7)), .4)
    put(sfx, w1, hp(noise(1.6), 4000) * env(int(1.6 * SR), .002, .5), .1, .3)  # soft cymbal
    for (wd, wt), n in zip(T['words'], [69, 72, 76, 74]): put(mus, wt, piano(n, 2, .7), .16, .15)
    put(sfx, T['answer'], thump(48, 1.6, .5), .75); put(mus, T['answer'], sum(piano(n, 3, 1.4) for n in [26, 33, 39]) / 2, .45)
    # title: pad + rising piano + hit
    pad_n = [50, 53, 57, 61, 64]; dur = DUR - T['title']; n = int(dur * SR); tt = np.arange(n) / SR
    pad = sum(lp(np.sign(np.sin(2 * np.pi * f(p) * (1 + .003 * d) * tt)) * .3 + np.sin(2 * np.pi * f(p) * tt), 1400) for p in pad_n for d in (-1, 1)) / 10
    pad *= np.minimum(1, tt / 1.2); put(mus, T['title'], pad, .2)
    put(mus, T['title'], piano(38, 3, 1.5), .4)
    for i, n in enumerate([62, 65, 69]): put(mus, T['titleLetters'][0] + i * .25, piano(n, 2, .8), .17, -.2 + .2 * i)
    put(mus, T['titleRed'], piano(26, 3.5, 2) + piano(73, 3.5, 1.6) * .6, .5); put(sfx, T['titleRed'], thump(42, 2, .7), .6)
    l0, l1 = T['line']; put(sfx, l0, bp(noise(l1 - l0 + .05), 2500, 7000) * (.6 + .4 * np.sin(np.linspace(0, 40, int((l1 - l0 + .05) * SR)))) * env(int((l1 - l0 + .05) * SR), .02, .4), .12)
    master(reverb(mus, 2.2, .3) + reverb(sfx, 1.0, .12), 'a.wav')

def make_b():
    T = load('timings_b.js', 'TB'); mus = np.zeros((2, N)); sfx = np.zeros((2, N))
    put(sfx, 0, .02 * lp(noise(DUR), 800), 1)
    for k in range(int(T['title'] / .5)):
        put(sfx, k * .5, bp(noise(.04), 2500 if k % 2 else 3500, 8000) * env(int(.04 * SR), .0005, .007), .7, .5)
    put(sfx, T['stamp1'], thump(60, 1.2, .25), .95); put(sfx, T['stamp1'], bp(noise(.15), 300, 3000) * env(int(.15 * SR), .001, .03), .5)
    for s, t0, per in T['type']:
        for k, ch in enumerate(s):
            if ch != ' ': put(sfx, t0 + (k + 1) * per - .01, typeclick(), .22, rs.uniform(-.3, .3))
    o0, o1 = T['open']; put(sfx, o0 - .05, whoosh(o1 - o0 + .4, .6, 200, 2500), .35)
    for d in T['drops']: put(sfx, d, bp(noise(.12), 600, 4000) * env(int(.12 * SR), .001, .025), .55); put(sfx, d, thump(80, .5, .08), .4)
    b = T['beat']; m0 = T['musicStart']; roots = [40, 36, 33, 35]
    for k in range(int((T['title'] - m0) / (b / 2))):
        tt = m0 + k * b / 2; root = roots[int((tt - m0) // 2) % 4]
        put(mus, tt, lp(tone(f(root), .26, ((1, 1), (2, .5), (3, .33), (4, .25)), a=.003, d=.12), 700 + 500 * (k % 2)), .45)
        if tt >= 4.5 and k % 2 == 0: put(sfx, tt, thump(52, .5, .14), .55)
        if tt >= 4.5 and k % 2 == 1: put(sfx, tt, hp(noise(.06), 6000) * env(int(.06 * SR), .001, .02), .12, -.4)
    # pad, swelling bars
    for bar in range(5):
        t0 = m0 + bar * 2; root = roots[bar % 4]; nt = [root + 24, root + 31, root + 36 + (3 if bar % 4 != 3 else 4)]
        n = int(2.2 * SR); tt = np.arange(n) / SR
        p = sum(lp(np.sign(np.sin(2 * np.pi * f(x) * tt + .3 * np.sin(tt * 3))), 1000) for x in nt) / 3 * np.minimum(1, tt / .6) * np.exp(-np.maximum(0, tt - 1.8) * 8)
        if t0 < T['title']: put(mus, t0, p, .07)
    s0, s1 = T['string']; n = int((s1 - s0) * SR); tt = np.arange(n) / SR
    zipf = 300 + 500 * tt / (s1 - s0); zz = np.sin(2 * np.pi * np.cumsum(zipf) / SR) * bp(noise(s1 - s0), 400, 3000) * .5
    put(sfx, s0, zz * np.minimum(1, tt / .2) * np.exp(-np.maximum(0, tt - (s1 - s0 - .1)) * 30), .25, -.3)
    put(sfx, T['one'], thump(70, 1, .3), .6); put(mus, T['one'], piano(52, 2.5, 1.0) + piano(59, 2.5, 1.0), .25)
    p0, p1 = T['push']; put(sfx, p0 - .3, whoosh(p1 - p0 + .8, (p1 - p0 + .3) / (p1 - p0 + .8), 150, 3000), .45); put(sfx, p1, thump(45, 1.2, .35), .6)
    c0, c1 = T['circle']; n = int((c1 - c0) * SR); put(sfx, c0, bp(noise(c1 - c0), 2000, 5000) * (.5 + .5 * np.sin(np.linspace(0, 60, n))) * env(n, .02, .5), .18)
    for tt0, g in [(T['title'], 1.0), (T['title2'], .85)]:
        put(sfx, tt0, thump(40, 2.0, .6), g); put(sfx, tt0, bp(noise(.3), 100, 2500) * env(int(.3 * SR), .001, .08), .5 * g)
        put(mus, tt0, piano(28, 3, 1.5) + piano(40, 3, 1.5), .5 * g)
    put(sfx, T['stamp2'], thump(62, 1.0, .25), .95); put(sfx, T['stamp2'], bp(noise(.15), 300, 3000) * env(int(.15 * SR), .001, .03), .5)
    n = int((DUR - T['title']) * SR); tt = np.arange(n) / SR
    put(mus, T['title'], lp(np.sin(2 * np.pi * f(28) * tt) + .5 * np.sin(2 * np.pi * f(35) * tt * 1.002), 300) * np.minimum(1, tt / .5), .16)
    master(reverb(mus, 1.8, .25) + reverb(sfx, 1.2, .14), 'b.wav')

make_a(); make_b(); print('ok')

// 05 · БОСС
CH_V0 = 270.3;
const [T_START, T_END] = chRange(5);
function buildScenes() {
  const D = [0, 0]; divider(D, 5, 'БОСС', T_START);
  hold(T_START, Wt('чем') + .35, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · pity gauge drops (A1)
  const A1 = [1900, -200]; lamp(A1[0], A1[1] - 200, 1500, 1);
  card({ x: A1[0], y: A1[1], w: 900, h: 640, rot: -.015, order: 100, tIn: T_START, color: '#e6dfcf',
    text: (g, t) => {
      g.save(); g.translate(0, 120); g.strokeStyle = INK; g.lineWidth = 6; g.beginPath(); g.arc(0, 0, 340, Math.PI, 0); g.stroke();
      for (let k = 0; k <= 10; k++) { const a = Math.PI + k / 10 * Math.PI; g.lineWidth = k % 5 ? 3 : 6; g.beginPath(); g.moveTo(Math.cos(a) * 300, Math.sin(a) * 300); g.lineTo(Math.cos(a) * (k % 5 ? 325 : 340), Math.sin(a) * (k % 5 ? 325 : 340)); g.stroke(); }
      g.strokeStyle = RED; g.lineWidth = 16; g.beginPath(); g.arc(0, 0, 360, Math.PI, Math.PI * 1.25); g.stroke();
      g.fillStyle = INK; g.font = `800 52px ${SANS}`; g.textAlign = 'center'; g.letterSpacing = '6px'; g.fillText('ЖАЛОСТЬ', 0, -120); g.letterSpacing = '0px';
      const p = prog(t, Wt('меньше') - .1, Wt('жалости') + .3), e = p < 1 ? eio(p) : 1, wob = Math.exp(-Math.max(0, t - Wt('жалости') - .3) * 6) * Math.sin((t - Wt('жалости')) * 25) * .04 * (p >= 1);
      const a = Math.PI * (1.85 - 1.65 * e) + wob; g.strokeStyle = RED; g.lineWidth = 8; g.lineCap = 'round'; g.beginPath(); g.moveTo(0, 0); g.lineTo(Math.cos(a) * 290, Math.sin(a) * 290); g.stroke();
      g.fillStyle = INK; g.beginPath(); g.arc(0, 0, 22, 0, 7); g.fill(); g.restore();
      g.fillStyle = INK; g.font = `700 28px ${MONO}`; g.textAlign = 'left'; g.fillText('МИН', -390, 180); g.textAlign = 'right'; g.fillText('МАКС', 390, 180);
    } });
  sfx('slide', Wt('меньше') - .1, { dur: 1.3 });
  link(A1[0] - 420, A1[1] - 300, Wt('чем') + .35, Wt('дальше') + .5);
  travel(Wt('чем') + .35, Wt('дальше') + .5);
  hold(Wt('дальше') + .5, Wt('жалости') + .55, A1[0], A1[1] + 30, 1.25, .015, { dz: .1 });

  // S2 · Big Pussy works for the FBI (A2)
  const A2 = [4300, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  typedCard({ x: A2[0] - 900, y: A2[1] - 300, w: 420, h: 150, rot: -.05, order: 200, lined: false, tIn: Wt('второго') - .2, dur: .3, enter: 'slide', dx: -300, dy: 0 }, [[typed('СЕЗОН 2', Wt('второго'), .05), 0, 16, `700 48px ${MONO}`, INK, 'center']]);
  photo({ x: A2[0] - 300, y: A2[1], w: 700, rot: -.02, order: 210, tIn: Wt('узнает') + .1, dur: .3, enter: 'drop', dx: -100, dy: -240, src: { still: 'pussy' },
    caption: typed('САЛЬВАТОРЕ БОНПЕНСЬЕРО', Wt('сальваторе'), .03), capSize: 26 });
  tag({ x: A2[0] - 380, y: A2[1] + 380, w: 500, rot: .04, label: 'БОЛЬШАЯ КИСКА', tIn: Wt('большая') + .05, order: 220, size: 40 });
  const fbi = card({ x: A2[0] + 560, y: A2[1] - 60, w: 520, h: 360, rot: .05, order: 230, color: '#d9dfe6', tIn: Wt('работает') - .15, dur: .3, enter: 'slide', dx: 500, dy: -200,
    text: (g) => { g.fillStyle = '#1d2c44'; g.fillRect(-260, -180, 520, 90); g.fillStyle = '#e9edf2'; g.font = `800 40px ${SANS}`; g.textAlign = 'center'; g.fillText('ИНФОРМАТОР', 0, -122); } });
  fbi.stamps = [stamp('ФБР', Wt('фбр'), { x: 0, y: 110, size: 110, rot: -.08, shake: 18 })];
  link(A2[0] - 1100, A2[1] - 400, Wt('жалости') + .55, Wt('конце') + .1);
  travel(Wt('жалости') + .55, Wt('конце') + .1);
  camKey(Wt('конце') + .1, A2[0] - 720, A2[1] - 160, 1.2, -.02); camKey(Wt('узнает') + .3, A2[0] - 400, A2[1] + 20, 1.0, -.01);
  hold(Wt('прозвищу'), Wt('киска') + .4, A2[0] - 330, A2[1] + 130, 1.15, -.015, { dz: .05 });
  hold(Wt('работает') + .1, Wt('фбр') + .6, A2[0] + 520, A2[1] - 40, 1.3, .02, { dz: .06 });

  // S3 · the boat (A3)
  const A3 = [4300, 1800]; lamp(A3[0], A3[1] - 200, 2000, 1);
  photo({ x: A3[0] - 380, y: A3[1] - 40, w: 760, rot: -.025, order: 300, tIn: Wt('лодке') - .15, dur: .3, enter: 'drop', dx: -150, dy: -260, src: vid('boatsea', Wt('лодке') - .2, 0) });
  const bt = photo({ x: A3[0] + 520, y: A3[1] + 120, w: 600, rot: .04, order: 310, tIn: Wt('почти') - .1, dur: .3, enter: 'drop', dx: 200, dy: -200, src: vid('boattony', 1e9) });
  bt.stamps = [stamp('ПРИГОВОР', Wt('приговор'), { x: 0, y: 40, size: 72, rot: -.08, shake: 16 })];
  typedCard({ x: A3[0] + 500, y: A3[1] + 520, w: 520, h: 120, rot: -.02, order: 320, lined: false, tIn: Wt('отменяет') - .2, dur: .25, enter: 'slide', dx: 0, dy: 300 }, [[typed('НЕ ОТМЕНЁН', Wt('отменяет'), .05, { heavy: true }), 0, 16, `800 50px ${SANS}`, RED, 'center']]);
  sfx('sea', Wt('лодке') - .2, { dur: 4.5 });
  link(A3[0] - 760, A3[1] - 290, Wt('фбр') + .6, Wt('они') + .2);
  travel(Wt('фбр') + .6, Wt('они') + .2);
  hold(Wt('они') + .2, Wt('убивают') + .6, A3[0] - 360, A3[1] - 30, 1.2, -.02, { dz: .08 });
  hold(Wt('почти') + .15, Wt('отменяет') + .7, A3[0] + 500, A3[1] + 240, 1.12, .02, { dz: .06 });

  // S4 · Pie-O-My (A4)
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  typedCard({ x: A4[0] - 760, y: A4[1] - 320, w: 520, h: 150, rot: -.04, order: 400, lined: false, tIn: Wt('четвертом') - .2, dur: .3, enter: 'slide', dx: -300, dy: 0 }, [[typed('СЕЗОН 4', Wt('четвертом'), .05), 0, 16, `700 48px ${MONO}`, INK, 'center']]);
  photo({ x: A4[0] - 300, y: A4[1] + 60, w: 720, rot: .02, order: 410, tIn: Wt('лошадь') - .2, dur: .3, enter: 'drop', dx: -100, dy: -240, src: vid('horse', Wt('лошадь') - .2, 0) });
  const tk = card({ x: A4[0] + 560, y: A4[1] - 60, w: 460, h: 260, rot: .06, order: 420, color: '#efe3c0', tIn: Wt('пай') - .2, dur: .3, enter: 'slide', dx: 400, dy: -200,
    text: (g, t, it) => { g.strokeStyle = 'rgba(30,20,10,.5)'; g.setLineDash([10, 8]); g.lineWidth = 3; g.strokeRect(-215, -115, 430, 230); g.setLineDash([]);
      g.fillStyle = INK; g.font = `400 24px ${MONO}`; g.textAlign = 'center'; g.fillText('ИППОДРОМ · ЗАЕЗД 7', 0, -60); drawTyped(g, it.nm, t, 0, 10, `800 52px ${SANS}`, INK, 'center'); drawPen(g, it.heart, t); } });
  tk.nm = typed('ПАЙ-О-МАЙ', Wt('пай'), .05);
  tk.heart = pen(Array.from({ length: 41 }, (_, k) => { const a = k / 40 * Math.PI * 2; return [16 * Math.pow(Math.sin(a), 3) * 4 + 150, -(13 * Math.cos(a) - 5 * Math.cos(2 * a) - 2 * Math.cos(3 * a) - Math.cos(4 * a)) * 4 + 70]; }), Wt('любил') - .1, .45, { width: 6 });
  link(A4[0] - 1020, A4[1] - 400, Wt('отменяет') + .7, Wt('четвертом') + .1);
  travel(Wt('отменяет') + .7, Wt('четвертом') + .1);
  camKey(Wt('четвертом') + .1, A4[0] - 640, A4[1] - 160, 1.15, -.02); camKey(Wt('лошадь') + .2, A4[0] - 260, A4[1] + 70, 1.1, .01);
  hold(Wt('пай') + .1, Wt('любил') + .55, A4[0] + 520, A4[1] - 40, 1.4, .025, { dz: .06 });

  // S5 · Ralph (A5)
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2200, 1);
  const pol = typedCard({ x: A5[0] - 820, y: A5[1] - 160, w: 560, h: 520, rot: -.04, order: 500, color: '#e6e8dc', lined: false, tIn: Wt('уверен') - .1, dur: .3, enter: 'slide', dx: -400, dy: 0,
    extra: (g) => { g.strokeStyle = 'rgba(40,70,60,.45)'; g.lineWidth = 3; g.strokeRect(-250, -230, 500, 460); } },
    [[typed('СТРАХОВОЙ ПОЛИС', Wt('страховки') - .2, .03), -220, -150, `700 32px ${MONO}`], [typed('объект: лошадь', Wt('страховки') + .3, .03, { silent: true }), -220, -80, `400 28px ${MONO}`]]);
  pol.stamps = [stamp('ПОДЖОГ?', Wt('убили') + .1, { x: 10, y: 90, size: 64, rot: -.1, shake: 9 })];
  const fg = photo({ x: A5[0] - 60, y: A5[1] + 60, w: 640, rot: .03, order: 510, tIn: Wt('голыми') - .1, dur: .28, enter: 'drop', dx: 0, dy: -240, src: vid('fight', Wt('голыми') - .1, 1.2) });
  fg.stamps = [stamp('УБИЙСТВО', Wt('смерти'), { x: 0, y: 60, size: 72, rot: -.09, shake: 18 })];
  photo({ x: A5[0] + 640, y: A5[1] - 160, w: 440, rot: .07, order: 520, tIn: Wt('ральфа') - .1, dur: .28, enter: 'drop', dx: 200, dy: -200, src: { still: 'ralphface' }, caption: typed('РАЛЬФ СИФАРЕТТО', Wt('ральфа'), .035), capSize: 22 });
  link(A5[0] - 1080, A5[1] - 420, Wt('любил') + .55, Wt('уверен') + .2);
  travel(Wt('любил') + .55, Wt('уверен') + .2);
  hold(Wt('уверен') + .2, Wt('страховки') + .6, A5[0] - 780, A5[1] - 140, 1.25, -.02, { dz: .06 });
  camKey(Wt('руками') + .1, A5[0] - 40, A5[1] + 70, 1.2, .01); hold(Wt('ральфа') - .2, Wt('сифаретто') + .7, A5[0] + 300, A5[1] - 40, 1.0, .02, { dz: .08 });

  // S6 · the crash (A6)
  const A6 = [-300, 3700]; lamp(A6[0], A6[1] - 200, 2000, 1);
  photo({ x: A6[0] - 600, y: A6[1] - 80, w: 520, rot: -.05, order: 600, tIn: Wt('кристофер') - .05, dur: .28, enter: 'drop', dx: -200, dy: -200, src: { still: 'chris' }, caption: typed('КРИСТОФЕР', Wt('кристофер') + .2, .04, { silent: true }), capSize: 26 });
  tag({ x: A6[0] - 620, y: A6[1] + 300, w: 400, rot: .05, label: 'ПОЧТИ СЫН', tIn: Wt('сын') + .05, order: 610 });
  const cr = photo({ x: A6[0] + 380, y: A6[1] + 40, w: 720, rot: .03, order: 620, tIn: Wt('попадают') - .05, dur: .25, enter: 'drop', dx: 200, dy: -260, src: vid('crash', Wt('попадают') - .1, 2.0) });
  cr.pens = [pen([[-300, 330], [-80, 300], [140, 250], [330, 200]], Wt('аварию') + .1, .35, { width: 12, color: '#1a1512' }), pen([[-300, 370], [-80, 340], [140, 290], [330, 240]], Wt('аварию') + .15, .35, { width: 12, color: '#1a1512' })];
  sfx('crash', Wt('аварию')); shake(Wt('аварию'), 24); fast(Wt('аварию') - .05, Wt('аварию') + .15, 6);
  link(A6[0] - 860, A6[1] - 330, Wt('сифаретто') + .7, Wt('шестом') + .25);
  travel(Wt('сифаретто') + .7, Wt('шестом') + .25);
  hold(Wt('шестом') + .25, Wt('сын') + .3, A6[0] - 520, A6[1] + 40, 1.15, -.02, { dz: .06 });
  hold(Wt('попадают') + .05, Wt('аварию') + .55, A6[0] + 360, A6[1] + 60, 1.2, .02, { dz: .06 });

  // S7 · he stops breathing (A7)
  const A7 = [2100, 3800]; lamp(A7[0], A7[1] - 200, 2000, 1);
  const ns = photo({ x: A7[0], y: A7[1] - 40, w: 900, rot: -.015, order: 700, tIn: Wt('кристофер', 2) - .1, dur: .3, enter: 'drop', dx: 0, dy: -280, src: vid('nose', Wt('кристофер', 2), 0),
    greyAt: t => eio(prog(t, Wt('перестает'), Wt('дышать') + .7)) });
  typedCard({ x: A7[0] - 60, y: A7[1] + 470, w: 580, h: 120, rot: -.03, order: 710, lined: false, tIn: Wt('просит') - .15, dur: .25, enter: 'slide', dx: 0, dy: 300 }, [[typed('«ПОМОГИ...»', Wt('просит'), .05), 0, 14, `700 46px ${MONO}`, INK, 'center']]);
  focus(Wt('зажимает') - .6, Wt('дышать') + 1.0, [ns], .9);
  link(A7[0] - 470, A7[1] - 340, Wt('аварию') + .55, Wt('кристофер', 2) + .15);
  travel(Wt('аварию') + .55, Wt('кристофер', 2) + .15);
  camKey(Wt('кристофер', 2) + .15, A7[0], A7[1], 1.0, .01); camKey(Wt('помощи') + .2, A7[0] - 120, A7[1] + 140, 1.05, -.01);
  camKey(Wt('зажимает'), A7[0] + 20, A7[1] - 60, 1.4, .02); camKey(Wt('дышать') + .8, A7[0] + 40, A7[1] - 80, 1.6, .025);

  // S8 · an "understandable" reason every time, and we acquit him (A8)
  const A8 = [4700, 3700]; lamp(A8[0], A8[1] - 200, 2300, 1);
  typedCard({ x: A8[0], y: A8[1] - 480, w: 900, h: 140, rot: -.015, order: 800, lined: false, tIn: Wt('каждый') - .2, dur: .3, enter: 'slide', dx: 0, dy: -300 },
    [[typed('«ПОНЯТНАЯ» ПРИЧИНА', Wt('понятную'), .04), 0, 18, `800 56px ${SANS}`, INK, 'center']]);
  const rs = [['pussy', 'сал', 2, 'ПРЕДАЛ', 'предал'], ['ralphface', 'ральф', 2, 'УБИЛ ДЕВУШКУ', 'убил2'], ['chris', 'кристофер', 3, 'МОЖЕТ СДАТЬ', 'может']];
  const acq = [Wt('снова') + .05, Wt('снова', 2) + .05, Wt('оправдание') + .05];
  rs.forEach(([k, w, n, lab, wl], i) => {
    const x = A8[0] + (i - 1) * 640, t = Wt(w, n);
    const ph = photo({ x, y: A8[1] - 20, w: 520, rot: (i - 1) * .04, order: 810 + i, tIn: t - .15, dur: .28, enter: 'drop', dx: (i - 1) * 100, dy: -220, src: { still: k } });
    ph.stamps = [stamp('ОПРАВДАН', acq[i], { x: 0, y: 30, size: 56 + i * 6, rot: -.08 + i * .06, shake: 10 + i * 4 })];
    typedCard({ x, y: A8[1] + 360, w: 520, h: 140, rot: (1 - i) * .03, order: 820 + i, lined: false, tIn: t + .1, dur: .25, enter: 'slide', dx: 0, dy: 300 },
      [[typed(lab, wl === 'убил2' ? Wt('убил', 2) : Wt(wl), .04), 0, i === 1 ? 0 : 16, `700 40px ${MONO}`, INK, 'center']].concat(i === 1 ? [[typed('+ ЛОШАДЬ?', Wt('лошадь', 2), .05, { silent: true }), 0, 50, `400 30px ${MONO}`, '#6a5a4a', 'center']] : []).concat(i === 2 ? [[typed('(употребляет)', Wt('употребляет'), .03, { silent: true }), 0, 56, `400 26px ${MONO}`, '#6a5a4a', 'center']] : []));
  });
  link(A8[0] - 700, A8[1] - 620, Wt('дышать') + .8, Wt('здесь') + .3);
  travel(Wt('дышать') + .8, Wt('здесь') + .3);
  camKey(Wt('здесь') + .3, A8[0], A8[1] - 360, 1.15, 0); camKey(Wt('причину') + .5, A8[0] - 40, A8[1] - 250, 1.0, -.01);
  camKey(Wt('сал', 2) + .2, A8[0] - 560, A8[1] + 100, 1.15, -.02); camKey(Wt('ральф', 2) + .3, A8[0] + 20, A8[1] + 120, 1.15, 0);
  camKey(Wt('кристофер', 3) + .3, A8[0] + 560, A8[1] + 120, 1.15, .02); camKey(Wt('снова') - .2, A8[0] + 40, A8[1] + 80, .72, 0); camKey(T_END, A8[0], A8[1] + 60, .78, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8], [6000, 4600, 'ashtray', 1.0, 1.9]]);
  CAMK.sort((a, b) => a.t - b.t);
}

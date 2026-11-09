// 02 · ПЛЕМЯННИК — meets Nacho with the "family recipe", then Gus at Los Pollos (insert: thanks for saving Hector); the smile
CH_V0 = 90.47;
const [T_START, T_END] = chRange(2);
function buildScenes() {
  const D = [0, 0]; divider(D, 2, 'ПЛЕМЯННИК', T_START);
  hold(T_START, Wt('первым') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · first finds Nacho, feeds him the family recipe: "My name is Eduardo. Call me Lalo"
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('lalocook', Wt('находит') - .5, { x: A1[0] - 600, y: A1[1] - 140, w: 460, rot: -.05, order: 100, off: 1, caption: capt('«СЕМЕЙНЫЙ РЕЦЕПТ»', Wt('рецепту') - .2), capSize: 20 });
  pw('lalonacho', Wt('угощает') - .4, { x: A1[0] + 60, y: A1[1] - 40, w: 620, rot: .02, order: 110, off: 2 });
  pw('nachoface', Wt('варгу') - .4, { x: A1[0] - 600, y: A1[1] + 260, w: 400, rot: .04, order: 105, caption: capt('НАЧО ВАРГА', Wt('варгу')), capSize: 20 });
  const nm = card({ x: A1[0] + 60, y: A1[1] + 380, w: 760, h: 140, rot: -.015, order: 120, color: '#f3efe2', lined: false, tIn: Wt('меня') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -10, `700 28px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, 40, `800 36px ${SANS}`, RED, 'center'); } });
  nm.a = typed('«Меня зовут Эдуардо.»', Wt('меня') - .1, .03); nm.b = typed('«МОЖЕШЬ ЗВАТЬ МЕНЯ ЛАЛО»', Wt('можешь') - .1, .035);
  goTo(A1, Wt('первым') + .2, Wt('находит') - .2, A1[0] - 860, A1[1] - 460);
  camKey(Wt('находит'), A1[0] - 600, A1[1] - 120, 1.05, -.015); camKey(Wt('варгу') + .1, A1[0] - 560, A1[1] + 120, .98, -.01);
  camKey(Wt('угощает') + .2, A1[0] + 60, A1[1] - 20, 1.02, .01); camKey(Wt('меня') + .2, A1[0] + 60, A1[1] + 220, .95, 0);

  // S2 · soon walks into Los Pollos Hermanos, meets Gus, thanks him for CPR on Hector (original dub)
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2100, 1);
  pw('pollosgus', Wt('пойос') - .5, { x: A2[0] - 640, y: A2[1] - 180, w: 440, rot: -.05, order: 200, off: 1, caption: capt('«ЛОС ПОЛЛОС ЭРМАНОС»', Wt('эрманос') - .2), capSize: 18 });
  pw('pollos', Wt('знакомится') - .5, { x: A2[0] - 640, y: A2[1] + 200, w: 440, rot: .04, order: 205, off: 1 });
  const cpr = card({ x: A2[0] - 640, y: A2[1] + 520, w: 460, h: 120, rot: -.03, order: 210, lined: false, tIn: Wt('массаж') - .3, dur: .3, enter: 'slide', dx: -300, dy: 200,
    text: (g, t, it) => drawTyped(g, it.a, t, 0, 12, `800 28px ${SANS}`, INK, 'center') });
  cpr.a = typed('СПАС ГЕКТОРУ ЖИЗНЬ', Wt('спас') - .2, .04);
  dlgShot('d_gus', A2[0] + 220, A2[1] - 20, { w: 900, order: 220 });
  goTo(A2, Wt('лало') + .5, Wt('пойос') - .3, A2[0] - 860, A2[1] - 460);
  camKey(Wt('пойос'), A2[0] - 620, A2[1] - 160, 1.08, -.015); camKey(Wt('знакомится'), A2[0] - 620, A2[1] + 200, 1.05, .01);
  camKey(Wt('массаж'), A2[0] - 620, A2[1] + 400, 1.0, -.01);
  camKey(DLGT.d_gus + .1, A2[0] + 220, A2[1] - 20, 1.08, 0); camKey(DLGT.d_gus + 27.9, A2[0] + 220, A2[1] + 30, 1.18, .01);

  // S3 · while he smiles at Gus he studies his people; came not to thank but to look at the enemy
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .9);
  pw('laloffice', Wt('присматривается') - .6, { x: A3[0] - 380, y: A3[1] - 60, w: 720, rot: -.015, order: 300, off: 2 });
  pw('gusclose9', Wt('врага') - .8, { x: A3[0] + 560, y: A3[1] - 120, w: 420, rot: .04, order: 310, off: 1 });
  const en = card({ x: A3[0] + 560, y: A3[1] + 240, w: 420, h: 200, rot: -.03, order: 320, lined: true, tIn: Wt('благодарить') - .4, dur: .3, enter: 'slide', dx: 300, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 28px ${MONO}`) });
  en.cl = [checkLine('ПОБЛАГОДАРИТЬ', Wt('благодарить') + .1, 'x', -180, -40), checkLine('ПОСМОТРЕТЬ НА ВРАГА', Wt('врага') + .1, 'v', -180, 40)];
  goTo(A3, DLGT.d_gus + 28.2, Wt('пока') - .1, A3[0] - 860, A3[1] - 460);
  hold(Wt('пока') - .1, Wt('людям') + .3, A3[0] - 380, A3[1] - 60, 1.05, -.015, { dz: .06 });
  camKey(Wt('благодарить') + .1, A3[0] + 540, A3[1] + 80, 1.0, .015); camKey(Wt('врага') + .4, A3[0] + 540, A3[1] + 120, 1.08, .015);

  // S4 · the smile never means kindness: smiles joking, bargaining, killing
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const sm = pw('lalopoint', Wt('главное') - .5, { x: A4[0] - 380, y: A4[1] - 80, w: 680, rot: -.015, order: 400, off: 1 });
  sm.stamps = [stamp('УЛЫБКА ≠ ДОБРОТА', Wt('доброту') - .2, { x: 0, y: 130, size: 54, rot: -.06, shake: 14 })];
  const wh = typedCard({ x: A4[0] + 560, y: A4[1] - 60, w: 420, h: 300, rot: .03, order: 410, tIn: Wt('шутит') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0 },
    [[typed('УЛЫБАЕТСЯ, КОГДА:', Wt('шутит') - .3, .03), -180, -90, `700 22px ${MONO}`, '#777'], [typed('— шутит', Wt('шутит'), .05), -180, -30, `800 32px ${SANS}`], [typed('— торгуется', Wt('торгуется'), .05), -180, 30, `800 32px ${SANS}`], [typed('— убивает', Wt('убивает'), .05), -180, 90, `800 32px ${SANS}`, RED]]);
  goTo(A4, Wt('врага') + .8, Wt('главное') - .2, A4[0] - 860, A4[1] - 460);
  hold(Wt('главное') - .2, Wt('доброту') + .4, A4[0] - 380, A4[1] - 40, 1.05, -.015, { dz: .05 });
  camKey(Wt('шутит') + .1, A4[0] + 540, A4[1] - 40, 1.08, .015); camKey(Wt('убивает') + .5, A4[0] + 540, A4[1], 1.14, .015);

  // S5 · how he moves: Gus composed, back straight, hands folded; Lalo relaxed, free, the world is his living room; fears neither pain nor death
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2100, 1);
  [['gusface', Wt('собран') - .5, 'ГУС', ['собран', 'спина прямая', 'руки сложены'], [Wt('собран'), Wt('прямая'), Wt('сложены')], -420, -.04],
   ['lalosmile', Wt('расслаблен') - .5, 'ЛАЛО', ['расслаблен', 'свободен', 'мир — его гостиная'], [Wt('расслаблен'), Wt('свободен'), Wt('гостиная') - .3], 420, .03]].forEach(([st, t0, nm2, ls, ts, dx, r], i) => {
    pw(st, t0, { x: A5[0] + dx, y: A5[1] - 160, w: 460, rot: r, order: 500 + i * 2, off: 1, caption: capt(nm2, t0 + .3), capSize: 24 });
    typedCard({ x: A5[0] + dx, y: A5[1] + 220, w: 460, h: 200, rot: -r * .5, order: 501 + i * 2, tIn: ts[0] - .3, dur: .3, enter: 'slide', dx: 0, dy: 200 },
      ls.map((s, k) => [typed(s, ts[k] - .1, .04), -190, -50 + k * 50, `700 26px ${MONO}`, i ? RED : INK]));
  });
  const nf = card({ x: A5[0], y: A5[1] + 460, w: 1, h: 1, shadow: 0, lit: false, order: 520, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  nf.s = stamp('НЕ БОИТСЯ НИЧЕГО', Wt('смерти') + .1, { size: 64, rot: -.05, shake: 16 });
  goTo(A5, Wt('убивает') + .8, Wt('посмотрите') - .1, A5[0] - 860, A5[1] - 460);
  camKey(Wt('собран') - .2, A5[0] - 420, A5[1] - 20, 1.0, -.015); camKey(Wt('расслаблен') - .2, A5[0] + 420, A5[1] - 20, 1.0, .015);
  camKey(Wt('боится') + .1, A5[0], A5[1] + 220, .9, 0); camKey(T_END, A5[0], A5[1] + 280, .98, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}

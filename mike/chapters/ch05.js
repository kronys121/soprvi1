// 05 · ТУКО  (insert: Mike to Nacho "Я этого не сделаю... Саламанки слетятся на труп Туко, как мухи")
CH_V0 = 282.8;
const [T_START, T_END] = chRange(5);
function buildScenes() {
  const D = [0, 0]; divider(D, 5, 'ТУКО', T_START);
  hold(T_START, Wt('первым') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Nacho Varga, a young cartel man, wants his crazy boss Tuco gone and offers Mike money to kill him
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, .9);
  pw('nachooffer', Wt('начо') - .4, { x: A1[0] - 400, y: A1[1] - 20, w: 720, rot: -.02, order: 100, off: 2, caption: capt('НАЧО ВАРГА', Wt('варга')), capSize: 28 });
  const tc = pw('tucocafe', Wt('туко') - .4, { x: A1[0] + 560, y: A1[1] - 120, w: 440, rot: .04, order: 110, off: 2, caption: capt('ТУКО САЛАМАНКА', Wt('саламанки')), capSize: 20 });
  const of = card({ x: A1[0] + 560, y: A1[1] + 280, w: 460, h: 160, rot: -.03, order: 120, color: '#e9efe0', lined: false, tIn: Wt('предлагает') - .3, dur: .3, enter: 'slide', dx: 400, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -10, `800 40px ${MONO}`, '#2c5a2a', 'center'); drawTyped(g, it.b, t, 0, 45, `700 24px ${MONO}`, INK, 'center'); } });
  of.a = typed('$ $ $', Wt('деньги') - .1, .1); of.b = typed('«убей Туко»', Wt('убил') - .3, .04);
  goTo(A1, Wt('первым') + .2, Wt('начо') - .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('начо') - .1, Wt('картеля') + .3, A1[0] - 400, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('туко') + .1, A1[0] + 540, A1[1] - 100, 1.05, .015); camKey(Wt('убил') + .3, A1[0] + 540, A1[1] + 240, 1.1, -.01);

  // S2 · Mike refuses — not fear: a rule; no killing if it can be avoided; his own solution (original dub)
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1900, .9);
  const rl = card({ x: A2[0] - 560, y: A2[1] - 200, w: 500, h: 260, rot: -.03, order: 200, lined: true, tIn: Wt('отказывается') - .3, dur: .3, enter: 'slide', dx: -400, dy: -200,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 26px ${MONO}`) });
  rl.cl = [checkLine('БОИТСЯ', Wt('боится') + .1, 'x', -210, -60), checkLine('ПРАВИЛО', Wt('правило') + .1, 'v', -210, 10), checkLine('НЕ УБИВАТЬ БЕЗ НУЖДЫ', Wt('обойтись') + .1, 'v', -210, 80)];
  pw('mikenacho', Wt('предлагает', 2) - .4, { x: A2[0] - 560, y: A2[1] + 240, w: 480, rot: .04, order: 205, off: 2, caption: capt('ДРУГОЕ РЕШЕНИЕ', Wt('решение')), capSize: 22 });
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 1900, .9);
  dlgShot('d_notuco', A5[0] - 60, A5[1] - 40, { w: 900, order: 210 });
  const mx = card({ x: A5[0] - 60, y: A5[1] + 430, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  mx.s = stamp('«КАК МУХИ»', DLGT.d_notuco + 22, { size: 64, rot: -.06, shake: 14 });
  goTo(A2, Wt('убил') + .8, Wt('отказывается') - .2, A2[0] - 860, A2[1] - 460);
  hold(Wt('отказывается') - .2, Wt('этого') + .3, A2[0] - 560, A2[1] - 180, 1.08, -.015, { dz: .05 });
  camKey(Wt('предлагает', 2) + .1, A2[0] - 560, A2[1] + 220, 1.08, .015); camKey(Wt('решение') + .3, A2[0] - 560, A2[1] + 240, 1.15, .015);

  // S3 · Mike provokes Tuco on the street, lets himself be beaten; Tuco goes to prison for years; same money, nobody dies
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1.05);
  pw('tucomike', Wt('провоцирует') - .5, { x: A3[0] - 600, y: A3[1] - 160, w: 480, rot: -.05, order: 300, off: 2, caption: capt('ПРОВОКАЦИЯ', Wt('улице')), capSize: 22 });
  const bt = pw('bloody', Wt('избить') - .5, { x: A3[0] + 200, y: A3[1] - 60, w: 760, rot: .015, order: 310, off: 2 });
  bt.stamps = [stamp('ПОЗВОЛИЛ СЕБЯ ИЗБИТЬ', Wt('избить') - .1, { x: 0, y: 90, size: 50, rot: -.07, shake: 18 })];
  shake(Wt('избить'), 10);
  const rs = card({ x: A3[0] - 560, y: A3[1] + 260, w: 520, h: 260, rot: .03, order: 320, lined: true, tIn: Wt('тюрьму') - .4, dur: .3, enter: 'slide', dx: -400, dy: 200,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 26px ${MONO}`) });
  rs.cl = [checkLine('ТУКО — В ТЮРЬМЕ', Wt('тюрьму') + .1, 'v', -220, -60), checkLine('ДЕНЬГИ — ТЕ ЖЕ', Wt('деньги', 2) + .1, 'v', -220, 10), checkLine('НИКТО НЕ УМЕР', Wt('умирает') + .1, 'v', -220, 80)];
  goTo(A3, Wt('решение') + .5, Wt('сам') - .2, A3[0] - 860, A3[1] - 460);
  hold(Wt('сам') - .2, Wt('улице') + .3, A3[0] - 600, A3[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('избить') + .1, A3[0] + 200, A3[1] - 60, 1.05, .015); camKey(Wt('тюрьму') + .2, A3[0] - 500, A3[1] + 220, 1.05, -.01);
  camKey(Wt('умирает') + .3, A3[0] - 500, A3[1] + 260, 1.12, -.01);
  goTo(A5, Wt('умирает') + .4, DLGT.d_notuco - .1, A5[0] - 860, A5[1] - 460);
  camKey(DLGT.d_notuco + .1, A5[0] - 60, A5[1] - 40, 1.08, 0); camKey(DLGT.d_notuco + 30.4, A5[0] - 60, A5[1] + 20, 1.2, .01);

  // S4 · the key: not a killer at heart — a professional; violence a tool; hates the superfluous; hates chaos — chaos took his son
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const pr = card({ x: A4[0] - 100, y: A4[1] - 40, w: 900, h: 460, rot: -.015, order: 400, lined: false, tIn: Wt('ключ') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -150); g.lineTo(0, 120); g.stroke(); drawTyped(g, it.hd, t, 0, -185, `700 28px ${MONO}`, '#666', 'center');
      drawTyped(g, it.a, t, -225, -100, `800 36px ${SANS}`, '#888', 'center'); drawPen(g, it.p, t); drawTyped(g, it.b, t, 225, -100, `800 36px ${SANS}`, INK, 'center');
      drawTyped(g, it.c, t, -225, -20, `700 26px ${MONO}`, '#888', 'center'); drawTyped(g, it.d, t, 225, -20, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.e, t, 0, 180, `800 40px ${SANS}`, RED, 'center'); } });
  pr.hd = typed('ключ к характеру', Wt('ключ') - .1, .04);
  pr.a = typed('УБИЙЦА', Wt('убийца') - .3, .05); pr.p = pen([[-330, -112], [-120, -116]], Wt('профессионал') - .3, .25, { width: 7 }); pr.b = typed('ПРОФЕССИОНАЛ', Wt('профессионал') - .1, .04);
  pr.c = typed('удовольствие', Wt('удовольствие') - .2, .04); pr.d = typed('инструмент', Wt('инструмент') - .2, .05); pr.e = typed('НЕНАВИДИТ ХАОС', Wt('хаос') - .3, .05);
  card({ x: A4[0] - 100, y: A4[1] - 420, w: 1, h: 1, shadow: 0, lit: false, order: 410, tIn: 0, scrawls: [scrawl('лишних слов, движений, трупов', Wt('лишнего') - .1, .8, { size: 44, rot: -.03 })] });
  goTo(A4, DLGT.d_notuco + 30.6, Wt('ключ') - .1, A4[0] - 860, A4[1] - 600);
  hold(Wt('ключ') - .1, Wt('профессионал') + .4, A4[0] - 100, A4[1] - 120, 1.02, -.01, { dz: .04 });
  camKey(Wt('лишнего') + .3, A4[0] - 100, A4[1] - 260, .9, 0); camKey(Wt('хаос') + .3, A4[0] - 100, A4[1] + 80, 1.08, 0); camKey(T_END, A4[0] - 100, A4[1] + 100, 1.16, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}

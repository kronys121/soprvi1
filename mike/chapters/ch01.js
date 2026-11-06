// 01 · ФИЛАДЕЛЬФИЯ
CH_V0 = 76.7;
const [T_START, T_END] = chRange(1);
function buildScenes() {
  const D = [0, 0]; divider(D, 1, 'ФИЛАДЕЛЬФИЯ', T_START);
  hold(T_START, Wt('понять') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · not Albuquerque but Philadelphia: thirty years in the police, like almost all his colleagues
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, .95);
  pw('philtrain', Wt('филадельфии') - .4, { x: A1[0] - 400, y: A1[1] - 20, w: 720, rot: -.02, order: 100, off: 2, caption: capt('ФИЛАДЕЛЬФИЯ', Wt('филадельфии') + .2), capSize: 28 });
  const yr = card({ x: A1[0] + 560, y: A1[1] - 60, w: 460, h: 300, rot: .03, order: 110, color: '#f3efe2', lined: false, tIn: Wt('тридцать') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -20, `800 110px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, 0, 80, `700 28px ${MONO}`, INK, 'center'); } });
  yr.a = typed('30', Wt('тридцать') - .1, .1); yr.b = typed('лет в полиции', Wt('полиции') - .4, .04);
  card({ x: A1[0] - 300, y: A1[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 120, tIn: 0, scrawls: [scrawl('не злодей, не герой', Wt('злодеем') - .2, .6, { size: 50, rot: -.04 })] });
  goTo(A1, Wt('понять') + .2, Wt('альбукерке') - .2, A1[0] - 760, A1[1] - 400);
  hold(Wt('альбукерке') - .2, Wt('полиции') - .3, A1[0] - 400, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('тридцать') + .2, A1[0] + 520, A1[1] - 40, 1.08, .015); camKey(Wt('злодеем') + .2, A1[0] + 60, A1[1] + 200, .9, 0);

  // S2 · the system: the whole precinct took; envelopes; Mike didn't ask questions
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 1900, .9);
  const sy = card({ x: A2[0] - 300, y: A2[1] - 60, w: 800, h: 440, rot: -.02, order: 200, lined: true, tIn: Wt('система') - .5, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { drawTyped(g, it.a, t, -360, -150, `800 44px ${SANS}`, RED); drawChecks(g, t, it.cl, `700 30px ${MONO}`); } });
  sy.a = typed('СИСТЕМА', Wt('система') - .2, .06);
  sy.cl = [checkLine('ВЕСЬ УЧАСТОК БРАЛ', Wt('брал', 2) + .1, 'v', -340, -60), checkLine('ЗАКРЫВАЛИ ГЛАЗА', Wt('глаза') + .1, 'v', -340, 10), checkLine('КОНВЕРТ · ДЕЛИЛИ', Wt('делили') + .1, 'v', -340, 80)];
  const env = card({ x: A2[0] + 620, y: A2[1] - 100, w: 380, h: 240, rot: .06, order: 210, color: '#d9c7a0', lined: false, tIn: Wt('конверт') - .4, dur: .3, enter: 'drop', dx: 0, dy: -300,
    text: (g) => { g.strokeStyle = '#8a7348'; g.lineWidth = 3; g.beginPath(); g.moveTo(-190, -120); g.lineTo(0, 10); g.lineTo(190, -120); g.stroke(); g.fillStyle = '#2c5a2a'; g.font = `800 50px ${MONO}`; g.textAlign = 'center'; g.fillText('$', 0, 80); } });
  pw('cars', Wt('задавал') - .4, { x: A2[0] + 620, y: A2[1] + 280, w: 420, rot: -.04, order: 220, off: 2, caption: capt('КАК ВСЕ ВОКРУГ', Wt('вокруг') - .3), capSize: 20 });
  goTo(A2, Wt('злодеем') + 2.0, Wt('система') - .3, A2[0] - 860, A2[1] - 440);
  hold(Wt('система') - .3, Wt('конверт') - .2, A2[0] - 300, A2[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('конверт') + .1, A2[0] + 580, A2[1] - 80, 1.1, .015); camKey(Wt('задавал') + .2, A2[0] + 580, A2[1] + 240, 1.05, -.01);

  // S3 · his son Matt: a young, honest cop who believed in the police; proud of his father; knew nothing of the envelopes
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const mt = card({ x: A3[0] - 120, y: A3[1] - 40, w: 860, h: 460, rot: -.015, order: 300, lined: false, tIn: Wt('сын') - .3, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -150, `700 30px ${MONO}`, INK, 'center'); drawTyped(g, it.b, t, 0, -70, `800 80px ${SANS}`, INK, 'center');
      drawTyped(g, it.c, t, 0, 20, `700 28px ${MONO}`, INK, 'center'); drawTyped(g, it.d, t, 0, 80, `700 28px ${MONO}`, INK, 'center'); drawTyped(g, it.e, t, 0, 170, `800 34px ${SANS}`, RED, 'center'); } });
  mt.a = typed('сын', Wt('сын') - .1, .05); mt.b = typed('МЭТТ', Wt('мэтт') - .1, .08); mt.c = typed('полицейский · молодой · честный', Wt('полицейский') - .2, .03);
  mt.d = typed('гордился отцом', Wt('гордился') - .2, .04); mt.e = typed('НИЧЕГО НЕ ЗНАЛ', Wt('ничего') - .2, .04);
  goTo(A3, Wt('вокруг') + .5, Wt('сын') - .1, A3[0] - 800, A3[1] - 460);
  camKey(Wt('сын') + .1, A3[0] - 120, A3[1] - 80, 1.05, 0); camKey(Wt('честный') + .3, A3[0] - 120, A3[1] - 20, 1.1, .01); camKey(T_END, A3[0] - 120, A3[1] + 80, 1.15, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}

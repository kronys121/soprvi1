// 03 · ЛИФТ
CH_V0 = 190.8;
const [T_START, T_END] = chRange(3);
function buildScenes() {
  const D = [0, 0]; divider(D, 3, 'ЛИФТ', T_START);
  hold(T_START, Wt('едет') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the elevator: suddenly he can't breathe, heart pounding, hands shaking — a panic attack
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 1900, .9);
  const el = pw('elevator', Wt('лифте') - .5, { x: A1[0] - 360, y: A1[1] - 20, w: 780, rot: -.02, order: 100, off: 3, caption: capt('ЛИФТ · С КОЛЛЕГАМИ', Wt('коллегами')), capSize: 24 });
  const sy = card({ x: A1[0] + 580, y: A1[1] - 40, w: 460, h: 340, rot: .03, order: 110, lined: true, tIn: Wt('вдруг') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 28px ${MONO}`) });
  sy.cl = [checkLine('НЕЧЕМ ДЫШАТЬ', Wt('дышать') + .1, 'v', -190, -90), checkLine('СЕРДЦЕ КОЛОТИТСЯ', Wt('колотится') + .1, 'v', -190, -20), checkLine('РУКИ ТРЯСУТСЯ', Wt('трясутся') + .1, 'v', -190, 50)];
  el.stamps = [stamp('ПАНИЧЕСКАЯ АТАКА', Wt('паническая') - .1, { x: 0, y: 90, size: 56, rot: -.07, shake: 16 })];
  sfx('heart', Wt('сердце') - .1);
  goTo(A1, Wt('едет') + .2, Wt('лифте') + .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('лифте') + .1, Wt('дышать') - .3, A1[0] - 360, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('дышать') + .1, A1[0] + 540, A1[1] - 40, 1.08, .015); camKey(Wt('нормально') + .3, A1[0] - 200, A1[1], .9, -.01); camKey(Wt('атака') + .4, A1[0] - 360, A1[1] + 40, 1.12, -.015);

  // S2 · he killed a man and his body remembered: the head says self-defence, the body can't be fooled
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const hb = card({ x: A2[0] - 100, y: A2[1] - 40, w: 900, h: 440, rot: -.015, order: 200, lined: false, tIn: Wt('убил') - .3, dur: .3, enter: 'slide', dx: 0, dy: -400,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -180); g.lineTo(0, 180); g.stroke();
      drawTyped(g, it.a, t, -225, -130, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, -225, -50, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.c, t, -225, 0, `700 26px ${MONO}`, INK, 'center');
      drawTyped(g, it.d, t, 225, -130, `800 40px ${SANS}`, RED, 'center'); drawTyped(g, it.e, t, 225, -50, `700 26px ${MONO}`, INK, 'center'); drawTyped(g, it.f, t, 225, 40, `800 44px ${SANS}`, RED, 'center'); } });
  hb.d = typed('ТЕЛО', Wt('тело') - .1, .06); hb.e = typed('запомнило', Wt('запомнило') - .1, .04);
  hb.a = typed('ГОЛОВА', Wt('голова') - .1, .06); hb.b = typed('«самооборона»', Wt('самооборона') - .2, .04); hb.c = typed('«Туко — чудовище»', Wt('чудовищем') - .4, .04);
  hb.f = typed('НЕ ОБМАНЕШЬ', Wt('обманешь') - .3, .05);
  goTo(A2, Wt('атака') + .6, Wt('убил') + .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('убил') + .1, Wt('запомнило') + .4, A2[0] + 120, A2[1] - 40, 1.08, .01, { dz: .05 });
  camKey(Wt('голова') + .2, A2[0] - 320, A2[1] - 40, 1.1, -.015); camKey(Wt('=тело', 2) + .1, A2[0] + 130, A2[1], 1.1, .015); camKey(Wt('обманешь') + .5, A2[0] + 130, A2[1] + 20, 1.2, .015);

  // S3 · who Hank really is: tells no one — not Marie, not colleagues, not a shrink; keeps joking, stays loud
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2000, 1);
  const nt = card({ x: A3[0] - 560, y: A3[1] - 60, w: 480, h: 380, rot: -.03, order: 300, lined: true, tIn: Wt('здесь') - .2, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 28px ${MONO}`; g.textAlign = 'left'; g.fillText('КОМУ СКАЗАЛ:', -200, -130); drawChecks(g, t, it.cl, `700 28px ${MONO}`); } });
  nt.cl = [checkLine('МАРИ', Wt('мари') + .1, 'x', -180, -50), checkLine('КОЛЛЕГАМ', Wt('=коллегам') + .1, 'x', -180, 20), checkLine('ПСИХОЛОГУ', Wt('психологу') + .1, 'x', -180, 90)];
  pw('hankoffice', Wt('продолжает') - .4, { x: A3[0] + 300, y: A3[1] - 40, w: 720, rot: .02, order: 310, off: 4, caption: capt('ШУТИТ · ГРОМКИЙ', Wt('громким') - .3), capSize: 24 });
  card({ x: A3[0] - 100, y: A3[1] + 430, w: 1, h: 1, shadow: 0, lit: false, order: 320, tIn: 0, scrawls: [scrawl('тот, кто поймал Туко, не может бояться лифта', Wt('мужчина') - .2, 1.0, { size: 40, rot: -.03 })] });
  goTo(A3, Wt('запомнило') + .9, Wt('здесь') + .1, A3[0] - 800, A3[1] - 460);
  hold(Wt('здесь') + .1, Wt('психологу') + .3, A3[0] - 560, A3[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('мужчина') + .2, A3[0] - 100, A3[1] + 280, .9, 0); camKey(Wt('продолжает') + .2, A3[0] + 300, A3[1] - 40, 1.02, .015); camKey(Wt('громким') + .4, A3[0] + 320, A3[1], 1.1, .015);

  // S4 · alone in the evening at the river: he throws Tuco's gold teeth into the water; he wants to forget
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2100, 1);
  pw('river', Wt('вечером') - .4, { x: A4[0] - 560, y: A4[1] - 160, w: 500, rot: -.05, order: 400, off: 2, caption: capt('ВЕЧЕР · РЕКА · ОДИН', Wt('реке')), capSize: 20 });
  const gt = pw('grillthrow', Wt('выбрасывает') - .4, { x: A4[0] + 280, y: A4[1] - 40, w: 760, rot: .015, order: 410, off: 6 });
  gt.stamps = [stamp('В РЕКУ', Wt('воду') - .2, { x: 0, y: 80, size: 80, rot: -.08, shake: 16 })];
  sfx('splash', Wt('воду'));
  card({ x: A4[0] - 100, y: A4[1] + 430, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, scrawls: [scrawl('не герой — хочет забыть', Wt('героем') - .3, .7, { size: 52, rot: -.04 })] });
  goTo(A4, Wt('громким') + .7, Wt('вечером') + .1, A4[0] - 860, A4[1] - 460);
  hold(Wt('вечером') + .1, Wt('реке') + .4, A4[0] - 560, A4[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('выбрасывает') + .2, A4[0] + 280, A4[1] - 40, 1.02, .015); camKey(Wt('воду') + .4, A4[0] + 280, A4[1], 1.15, .02);
  camKey(Wt('героем') + .2, A4[0], A4[1] + 220, .88, 0); camKey(T_END, A4[0], A4[1] + 250, .95, -.01);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}

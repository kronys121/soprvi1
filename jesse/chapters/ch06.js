// 06 · ДЕТИ
CH_V0 = 341.9;
const [T_START, T_END] = chRange(6);
function buildScenes() {
  const D = [0, 0]; divider(D, 6, 'ДЕТИ', T_START);
  hold(T_START, Wt('весь') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · one line through the whole show: children. Three cards pinned in a row
  const A1 = [2400, -200]; lamp(A1[0], A1[1] - 200, 2400, 1);
  typedCard({ x: A1[0], y: A1[1] - 420, w: 760, h: 150, rot: -.015, order: 100, lined: false, tIn: Wt('линия') - .3, dur: .3, enter: 'slide', dx: 0, dy: -300 },
    [[typed('ЛИНИЯ ЧЕРЕЗ ВЕСЬ СЕРИАЛ:', Wt('линия'), .03), 0, 0, `700 34px ${MONO}`, INK, 'center'], [typed('ДЕТИ', Wt('дети') - .1, .08), 0, 50, `800 46px ${SANS}`, RED, 'center']]);
  // Tomas: forced to kill Jesse's friend
  const tm = pw('tomas', Wt('одиннадцатилетний') - .3, { x: A1[0] - 760, y: A1[1] - 20, w: 500, rot: -.04, order: 110, off: 1, caption: capt('ТОМАС, 11 ЛЕТ', Wt('томас')), capSize: 24 });
  pw('combo', Wt('убить') - .3, { x: A1[0] - 760, y: A1[1] + 340, w: 440, rot: .04, order: 111, off: 0, caption: capt('УБИЛ ДРУГА ДЖЕССИ', Wt('друга')), capSize: 20 });
  tag({ x: A1[0] - 500, y: A1[1] - 290, w: 360, rot: -.05, label: 'МЕСТЬ', tIn: Wt('отомстить') + .05, order: 112, size: 40 });
  // Brock: video games, the poisoning
  pw('hospital', Wt('шестилетний') - .3, { x: A1[0], y: A1[1] - 20, w: 500, rot: .02, order: 120, off: 2, caption: capt('БРОК, 6 ЛЕТ · СЫН АНДРЕА', Wt('андреа')), capSize: 20 });
  const ly = pw('lily', Wt('отравит') - .3, { x: A1[0], y: A1[1] + 340, w: 440, rot: -.03, order: 121, off: 3, caption: capt('ЛАНДЫШ · УОЛТЕР', Wt('ландышем')), capSize: 20 });
  // the boy on the dirt bike
  const dr = pw('drew', Wt('мальчик') - .3, { x: A1[0] + 760, y: A1[1] - 20, w: 500, rot: .04, order: 130, off: 3, caption: capt('МАЛЬЧИК В ПУСТЫНЕ', Wt('пустыне')), capSize: 22 });
  dr.greyAt = t => eio(prog(t, Wt('тодд'), Wt('тодд') + .8)) * .8;
  sfx('shot', Wt('застрелит') + .2); shake(Wt('застрелит') + .2, 14);
  pw('train', Wt('ограбления') - .3, { x: A1[0] + 760, y: A1[1] + 340, w: 440, rot: -.04, order: 131, off: 0, caption: capt('ПОСЛЕ ОГРАБЛЕНИЯ ПОЕЗДА · ТОДД', Wt('тодд')), capSize: 16 });
  goTo(A1, Wt('весь') + .3, Wt('сериал') + .1, A1[0] - 900, A1[1] - 600);
  hold(Wt('сериал') + .1, Wt('дети') + .4, A1[0], A1[1] - 300, 1.05, -.01, { dz: .04 });
  camKey(Wt('томас') + .2, A1[0] - 760, A1[1] + 120, 1.0, -.015); camKey(Wt('него') + .3, A1[0] - 700, A1[1] + 140, 1.05, -.015);
  camKey(Wt('брок') + .2, A1[0], A1[1] + 120, 1.0, .01); camKey(Wt('гуса') + .3, A1[0], A1[1] + 200, 1.05, .01);
  camKey(Wt('мальчик') + .2, A1[0] + 760, A1[1] + 60, 1.05, .015); camKey(Wt('тодд') + .5, A1[0] + 760, A1[1] + 40, 1.2, .015);

  // S2 · for Walter children are an excuse or a tool; for Jesse a line. Each crossing breaks him more
  const A2 = [2400, 1900]; lamp(A2[0], A2[1] - 200, 2100, 1);
  const cmp = card({ x: A2[0] - 300, y: A2[1] - 20, w: 900, h: 460, rot: -.015, order: 200, lined: false, tIn: Wt('для') - .3, dur: .3, enter: 'slide', dx: 0, dy: 500,
    text: (g, t, it) => { g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(0, -180); g.lineTo(0, 180); g.stroke();
      drawTyped(g, it.a, t, -220, -130, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.b, t, -220, -40, `700 32px ${MONO}`, INK, 'center'); drawTyped(g, it.c, t, -220, 20, `700 32px ${MONO}`, INK, 'center');
      drawTyped(g, it.d, t, 220, -130, `800 40px ${SANS}`, INK, 'center'); drawTyped(g, it.e, t, 220, 0, `800 52px ${SANS}`, RED, 'center'); } });
  cmp.a = typed('УОЛТЕР', Wt('уолтера') - .1, .05); cmp.b = typed('оправдание', Wt('оправдание') - .1, .04); cmp.c = typed('инструмент', Wt('инструмент') - .1, .04);
  cmp.d = typed('ДЖЕССИ', Wt('джесси', 6) - .1, .05); cmp.e = typed('ГРАНИЦА', Wt('граница') - .1, .06);
  const bk = pw('jface4', Wt('ломается') - .4, { x: A2[0] + 640, y: A2[1] + 320, w: 460, rot: .04, order: 210, off: 1 });
  bk.greyAt = t => eio(prog(t, Wt('сильнее'), Wt('сильнее') + 1.0)) * .6;
  goTo(A2, Wt('тодд') + .6, Wt('для') + .1, A2[0] - 860, A2[1] - 440);
  hold(Wt('для') + .1, Wt('граница') + .5, A2[0] - 300, A2[1] - 20, 1.08, -.01, { dz: .05 });
  camKey(Wt('ломается') + .2, A2[0] + 400, A2[1] + 200, 1.0, .015); camKey(T_END, A2[0] + 520, A2[1] + 260, 1.12, .02);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}

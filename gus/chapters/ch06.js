// 06 · ШАХМАТЫ  (insert: the threat in the desert)
CH_V0 = 376.7;
const [T_START, T_END] = chRange(6);
function buildScenes() {
  const D = [0, 0]; divider(D, 6, 'ШАХМАТЫ', T_START);
  hold(T_START, Wt('противостояние') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the chess game: a board, Gus a move ahead; his moves
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  const bd = item({ x: A1[0] - 440, y: A1[1] - 20, w: 620, h: 620, rot: -.03, order: 100, tIn: Wt('шахматная') - .3, dur: .35, enter: 'slide', dx: -500, dy: 0, shadow: 1,
    draw: (g, t) => {
      g.fillStyle = '#e9e1cf'; g.fillRect(-310, -310, 620, 620);
      for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) if ((i + j) % 2) { g.fillStyle = '#3b2f26'; g.fillRect(-280 + i * 70, -280 + j * 70, 70, 70); }
      g.strokeStyle = '#3b2f26'; g.lineWidth = 6; g.strokeRect(-282, -282, 564, 564);
      const pc = (x, y, lab, dark) => { g.fillStyle = dark ? '#151210' : '#f4efe4'; g.strokeStyle = dark ? '#f4efe4' : '#151210'; g.lineWidth = 4; g.beginPath(); g.arc(x, y, 28, 0, 7); g.fill(); g.stroke(); g.fillStyle = dark ? '#f4efe4' : '#151210'; g.font = `800 30px ${SANS}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(lab, x, y + 2); g.textBaseline = 'alphabetic'; };
      const p = eio(prog(t, Wt('ход') - .3, Wt('ход') + .3));
      pc(-245 + 70 * 3, -245 + 70 * (2 + p), 'Г', true); pc(-245 + 70 * 4, -245 + 70 * 6, 'У', false);
    } });
  sfx('drop', Wt('ход') + .1);
  const mv = card({ x: A1[0] + 520, y: A1[1] - 20, w: 540, h: 480, rot: .03, order: 110, lined: true, tIn: Wt('заменяет') - .3, dur: .3, enter: 'slide', dx: 500, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 32px ${MONO}`; g.textAlign = 'left'; g.fillText('ХОДЫ ГУСА:', -230, -170); drawChecks(g, t, it.cl, `700 30px ${MONO}`); } });
  mv.cl = [checkLine('ЗАМЕНА: ГЕЙЛ', Wt('гейлом') + .05, 'v', -210, -90), checkLine('РАСКОЛ: У. + ДЖ.', Wt('джесси') + .05, 'v', -210, -10), checkLine('КАМЕРЫ', Wt('камеры') + .05, 'v', -210, 70), checkLine('УГРОЗА СЕМЬЕ', DLGT.d_threat + 9.0, 'v', -210, 150)];
  goTo(A1, Wt('противостояние') + .3, Wt('уолтера') + .1, A1[0] - 860, A1[1] - 420);
  hold(Wt('уолтера') + .1, Wt('впереди') + .4, A1[0] - 440, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('заменяет') + .2, A1[0] + 460, A1[1] - 30, 1.05, .01); camKey(Wt('лаборатории') + .3, A1[0] + 500, A1[1] + 40, 1.12, .015);

  // S2 · the threat (original dub)
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  dlgShot('d_threat', A2[0], A2[1] - 20, { w: 980, order: 200 });
  const th = card({ x: A2[0], y: A2[1] + 460, w: 1, h: 1, shadow: 0, lit: false, order: 210, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  th.s = stamp('ЖЕНА · СЫН · ДОЧЬ', DLGT.d_threat + 12.0, { size: 58, rot: -.06, shake: 18 });
  goTo(A2, Wt('лаборатории') + .3, DLGT.d_threat - .2, A2[0] - 900, A2[1] - 460);
  camKey(DLGT.d_threat + .2, A2[0], A2[1] - 20, 1.1, 0); camKey(DLGT.d_threat + 13.7, A2[0], A2[1] + 60, 1.3, .01);

  // S3 · meanwhile Jesse: escort runs, a hero, Mexico, "you're worth something" -> used
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1);
  pw('gsniper', Wt('параллельно') - .4, { x: A3[0] - 620, y: A3[1] - 200, w: 500, rot: -.04, order: 300, off: 0, caption: capt('СОПРОВОЖДЕНИЕ ГРУЗОВ', Wt('грузов')), capSize: 20 });
  pw('gclinic', Wt('мексику') - .4, { x: A3[0] - 620, y: A3[1] + 220, w: 500, rot: .04, order: 310, off: 1, caption: capt('МЕКСИКА', Wt('мексику')), capSize: 22 });
  const gj = pw('gjesse', Wt('впервые') - .3, { x: A3[0] + 220, y: A3[1] - 20, w: 760, rot: .02, order: 320, off: 3, caption: capt('«ТЫ ЧЕГО-ТО СТОИШЬ»', Wt('стоит') - .4), capSize: 24 });
  card({ x: A3[0] + 220, y: A3[1] + 450, w: 1, h: 1, shadow: 0, lit: false, order: 330, tIn: 0, scrawls: [scrawl('ИСПОЛЬЗУЕТ. АККУРАТНЕЕ', Wt('использует') - .2, .6, { size: 54, rot: -.04 })] });
  goTo(A3, DLGT.d_threat + 13.8, Wt('параллельно') + .1, A3[0] - 900, A3[1] - 460);
  hold(Wt('параллельно') + .1, Wt('грузов') + .3, A3[0] - 580, A3[1] - 180, 1.08, -.02, { dz: .05 });
  camKey(Wt('мексику') + .2, A3[0] - 580, A3[1] + 200, 1.05, .01); camKey(Wt('впервые') + .2, A3[0] + 220, A3[1] - 20, 1.08, .01);
  camKey(Wt('уолтер', 4) + .2, A3[0] + 220, A3[1] + 160, .98, 0); camKey(Wt('аккуратнее') + .4, A3[0] + 200, A3[1] + 220, 1.05, -.01);

  // S4 · his one weakness: hatred of Hector
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 1900, .95);
  pw('ghector11', Wt('слабость') - .5, { x: A4[0] - 100, y: A4[1] - 20, w: 820, rot: -.015, order: 400, off: 3 });
  tag({ x: A4[0] + 420, y: A4[1] - 330, w: 460, rot: .06, label: 'СЛАБОСТЬ: ГЕКТОР', tIn: Wt('гектору') + .05, order: 410, size: 36 });
  card({ x: A4[0] - 100, y: A4[1] + 440, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, scrawls: [scrawl('ВИДЕТЬ ЛИЧНО', Wt('лично') - .1, .45, { size: 62, rot: -.05 })] });
  goTo(A4, Wt('аккуратнее') + .4, Wt('но') + .1, A4[0] - 860, A4[1] - 420);
  hold(Wt('но') + .1, Wt('её') + .3, A4[0] - 100, A4[1] - 20, 1.0, -.01, { dz: .06 });
  camKey(Wt('гектору') + .3, A4[0] + 40, A4[1] - 80, 1.15, .01); camKey(Wt('страдает') + .4, A4[0] - 80, A4[1] + 120, 1.1, -.01);

  // S5 · the darkest move: Brock, lily of the valley; the man who banned children loses to the man who used one
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2100, 1);
  pw('hospital', Wt('уолтер', 6) - .4, { x: A5[0] - 560, y: A5[1] - 180, w: 520, rot: -.04, order: 500, off: 1, caption: capt('БРОК, 6 ЛЕТ · БОЛЬНИЦА', Wt('брока')), capSize: 20 });
  const ly = pw('lily', Wt('ландышем') - .4, { x: A5[0] - 520, y: A5[1] + 240, w: 520, rot: .03, order: 510, off: 3 });
  ly.stamps = [stamp('УОЛТЕР', Wt('ландышем') + .3, { x: 0, y: 30, size: 72, rot: -.1, shake: 18 })];
  const vs = card({ x: A5[0] + 380, y: A5[1] - 20, w: 680, h: 460, rot: .02, order: 520, lined: false, tIn: Wt('человек') - .3, dur: .3, enter: 'slide', dx: 500, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -300, -130, `700 34px ${MONO}`); drawTyped(g, it.b, t, -300, -70, `800 44px ${SANS}`, RED);
      g.strokeStyle = INK; g.lineWidth = 2; g.beginPath(); g.moveTo(-300, -20); g.lineTo(300, -20); g.stroke();
      drawTyped(g, it.c, t, -300, 50, `700 34px ${MONO}`); drawTyped(g, it.d, t, -300, 110, `800 44px ${SANS}`); } });
  vs.a = typed('ЗАПРЕТИЛ ДЕТЕЙ', Wt('запретил') - .2, .035); vs.b = typed('ПРОИГРЫВАЕТ', Wt('проигрывает'), .04);
  vs.c = typed('ИСПОЛЬЗОВАЛ РЕБЁНКА', Wt('использовал') - .3, .03); vs.d = typed('ВЫИГРЫВАЕТ', Wt('ребёнка') + .1, .04);
  goTo(A5, Wt('страдает') + .4, Wt('уолтер', 6) + .1, A5[0] - 860, A5[1] - 460);
  hold(Wt('уолтер', 6) + .1, Wt('сериале') + .3, A5[0] - 540, A5[1] - 160, 1.08, -.015, { dz: .05 });
  camKey(Wt('ландышем') + .2, A5[0] - 500, A5[1] + 220, 1.1, .01); camKey(Wt('убить') + .4, A5[0] - 480, A5[1] + 230, 1.18, .015);
  camKey(Wt('человек') + .2, A5[0] + 360, A5[1] - 20, 1.05, .01); camKey(T_END, A5[0] + 380, A5[1] + 20, 1.15, .015);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}

// 11 · вопрос зрителю, подписка, досье Уолтера и Гуса и следующее дело
CH_V0 = 629.4;
const [T_START, T_END] = chRange(11);
FADE_IN = .5; FADE_OUT = 1.6;
function buildScenes() {
  const A = [0, 0]; lamp(A[0], A[1] - 200, 2600, 1);
  const bal = card({ x: A[0] - 380, y: A[1], w: 860, h: 600, rot: -.02, order: 100, lined: true, tIn: T_START,
    text: (g, t, it) => { drawTyped(g, it.q, t, -390, -200, `800 40px ${SANS}`); drawTyped(g, it.q2, t, -390, -146, `800 40px ${SANS}`); drawChecks(g, t, it.cl, `700 40px ${MONO}`); } });
  bal.q = typed('А ВЫ ПРОСТИЛИ', Wt('вы') - .05, .035); bal.q2 = typed('ДЖЕССИ?', Wt('джесси') - .05, .05);
  bal.cl = [checkLine('ПРОСТИЛ', 1e9, 'v', -330, -20), checkLine('ТАКОЙ ЖЕ ПРЕСТУПНИК', 1e9, 'v', -330, 80)];
  typedCard({ x: A[0] + 540, y: A[1] + 240, w: 560, h: 200, rot: .04, order: 110, color: '#f2efe8', lined: false, tIn: Wt('напишите') - .2, dur: .3, enter: 'slide', dx: 400, dy: 200,
    extra: (g) => { g.fillStyle = '#f2efe8'; g.beginPath(); g.moveTo(-200, 100); g.lineTo(-240, 150); g.lineTo(-150, 100); g.fill(); } },
    [[typed('НАПИШИТЕ', Wt('напишите'), .04), 0, -14, `800 46px ${SANS}`, INK, 'center'], [typed('В КОММЕНТАРИЯХ', Wt('комментариях'), .035), 0, 46, `700 34px ${MONO}`, INK, 'center']]);
  const sub = card({ x: A[0] + 60, y: A[1] + 480, w: 1, h: 1, shadow: 0, lit: false, order: 210, tIn: T_START, draw: (g, t, it) => drawStamp(g, it.s, t) });
  sub.s = stamp('ПОДПИСЫВАЙТЕСЬ', Wt('подписывайтесь') + .1, { size: 70, rot: -.06, shake: 14 });

  // closed dossiers on Tony and Walter, then the next case slides in
  const B = [2500, 200]; lamp(B[0], B[1] - 200, 2300, 1);
  [['walthat', Wt('уолтера'), 'ДЕЛО № 0508', 'У. УАЙТ', -760, -.07], ['gus', Wt('гуса'), 'ДЕЛО № 1989', 'Г. ФРИНГ', -230, .04]].forEach(([st, tw, tab, nm, dx, r], i) => {
    item({ draw: drawFolder, x: B[0] + dx, y: B[1] + 40, w: 560, h: 420, rot: r, order: 200 + i * 2, tIn: tw - .3, dur: .4, enter: 'slide', dx: -1200, dy: 200, drot: -.2, tab,
      text: (g) => { drawStamp(g, { text: 'ЗАКРЫТО', t: 0, size: 44, rot: -.08, x: 120, y: 150 }, 99); } });
    pw(st, tw - .1, { x: B[0] + dx - 10, y: B[1] - 10, w: 340, rot: r * .6, order: 201 + i * 2, caption: capt(nm, tw + .2), capSize: 22 });
  });
  tag({ x: B[0] - 480, y: B[1] - 300, w: 360, rot: .05, label: 'НА КАНАЛЕ', tIn: Wt('канале') - .1, order: 206, size: 40 });
  const nx = item({ draw: drawFolder, x: B[0] + 520, y: B[1] + 20, w: 820, h: 580, rot: .03, order: 220, tIn: Wt('следующее') + .1, dur: .5, enter: 'slide', dx: 1600, dy: -300, drot: .25, tab: 'ДЕЛО № ?',
    text: (g, t, it) => { g.fillStyle = '#eee9de'; g.fillRect(-200, -190, 400, 270); g.fillStyle = '#2a2523'; g.fillRect(-180, -170, 360, 210);
      g.fillStyle = '#e8e2d4'; g.font = `800 160px ${SANS}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('?', 0, -60); g.textBaseline = 'alphabetic';
      drawStamp(g, { text: 'СЕКРЕТНО', t: 0, size: 56, rot: -.08, x: 220, y: -230 }, 99); drawTyped(g, it.ty, t, 0, 190, `700 38px ${MONO}`, INK, 'center'); } });
  nx.ty = typed('СЛЕДУЮЩЕЕ ДОСЬЕ', Wt('дело') + .1, .04);

  camKey(T_START, A[0] - 340, A[1] - 60, 1.05, -.01); camKey(Wt('уолтер') + .2, A[0] - 280, A[1] + 20, 1.12, -.015);
  camKey(Wt('комментариях') + .5, A[0] + 200, A[1] + 140, .95, .01); camKey(Wt('подписывайтесь') + .4, A[0] + 60, A[1] + 280, .9, 0);
  travel(Wt('досье') - .4, Wt('досье') + .3);
  camKey(Wt('досье') + .4, B[0] - 520, B[1] + 20, .95, -.015); camKey(Wt('канале') + .4, B[0] - 420, B[1] - 20, .92, -.01);
  camKey(Wt('следующее') + .7, B[0] + 120, B[1] + 20, .78, .01); camKey(T_END, B[0] + 470, B[1] + 0, 1.12, .02);
  sfx('hitlow', Wt('столе') + .2);
  ensureFG([[-1200, 900, 'ashtray', 1.1, 1.9], [3600, -700, 'smoke', 1.6, 1.5, 0, .8], [900, 1000, 'cup', 1.0, 1.9]]);
  CAMK.sort((a, b) => a.t - b.t);
}

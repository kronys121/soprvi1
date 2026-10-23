// 11 · вопрос зрителю и подписка
CH_V0 = 481.2;
const [T_START, T_END] = chRange(11);
FADE_IN = .5; FADE_OUT = 1.6;
function buildScenes() {
  const A = [0, 0]; lamp(A[0], A[1] - 200, 2600, 1);
  const bal = card({ x: A[0] - 380, y: A[1], w: 820, h: 620, rot: -.02, order: 100, lined: true, tIn: T_START,
    text: (g, t, it) => { drawTyped(g, it.q, t, -370, -200, `800 46px ${SANS}`); drawChecks(g, t, it.cl, `700 46px ${MONO}`); } });
  bal.q = typed('А ВЫ ЖАЛЕЕТЕ ТОНИ?', Wt('вы') - .05, .04);
  bal.cl = [checkLine('ЖАЛЕЮ', 1e9, 'v', -300, -40), checkLine('НЕ ЖАЛЕЮ', 1e9, 'v', -300, 80)];
  typedCard({ x: A[0] + 520, y: A[1] + 220, w: 560, h: 200, rot: .04, order: 110, color: '#f2efe8', lined: false, tIn: Wt('напишите') - .2, dur: .3, enter: 'slide', dx: 400, dy: 200,
    extra: (g) => { g.fillStyle = '#f2efe8'; g.beginPath(); g.moveTo(-200, 100); g.lineTo(-240, 150); g.lineTo(-150, 100); g.fill(); } },
    [[typed('НАПИШИТЕ', Wt('напишите'), .04), 0, -14, `800 46px ${SANS}`, INK, 'center'], [typed('В КОММЕНТАРИЯХ', Wt('комментариях'), .035), 0, 46, `700 34px ${MONO}`, INK, 'center']]);
  item({ x: A[0] - 120, y: A[1] + 300, w: 900, h: 80, order: 120, tIn: T_START + .3, dur: .5, enter: 'slide', dx: 700, dy: 400, rot: -.3,
    draw: (g) => { g.fillStyle = '#141110'; g.beginPath(); g.roundRect(-420, -22, 760, 44, 22); g.fill(); g.fillStyle = '#c9a54a'; g.fillRect(200, -23, 48, 46); g.fillStyle = '#1b1715'; g.beginPath(); g.moveTo(-420, -18); g.lineTo(-500, 0); g.lineTo(-420, 18); g.fill(); } });
  // next case slides in
  const B = [2300, 200]; lamp(B[0], B[1] - 200, 2000, 1);
  const nx = item({ draw: drawFolder, x: B[0], y: B[1], w: 1100, h: 720, rot: .02, order: 200, tIn: Wt('следующее') + .1, dur: .5, enter: 'slide', dx: 1600, dy: -300, drot: .25, tab: 'ДЕЛО № 2',
    text: (g, t, it) => { g.fillStyle = '#eee9de'; g.fillRect(-260, -230, 520, 330); g.fillStyle = '#2a2523'; g.fillRect(-240, -210, 480, 270);
      g.fillStyle = '#e8e2d4'; g.font = `800 200px ${SANS}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('?', 0, -70); g.textBaseline = 'alphabetic';
      drawStamp(g, { text: 'СЕКРЕТНО', t: 0, size: 70, rot: -.08, x: 280, y: -290 }, 99); drawTyped(g, it.ty, t, 0, 230, `700 44px ${MONO}`, INK, 'center'); } });
  nx.ty = typed('СЛЕДУЮЩЕЕ ДОСЬЕ', Wt('досье') - .1, .04);
  const sub = card({ x: A[0] + 60, y: A[1] + 470, w: 1, h: 1, shadow: 0, lit: false, order: 210, tIn: T_START, draw: (g, t, it) => drawStamp(g, it.s, t) });
  sub.s = stamp('ПОДПИСЫВАЙТЕСЬ', Wt('подписывайтесь') + .1, { size: 70, rot: -.06, shake: 14 });
  camKey(T_START, A[0] - 300, A[1] - 40, 1.05, -.01); camKey(Wt('нет') + .4, A[0] - 200, A[1] + 20, 1.12, -.015);
  camKey(Wt('комментариях') + .6, A[0] + 200, A[1] + 120, .95, .01); camKey(Wt('подписывайтесь') + .4, A[0] + 60, A[1] + 260, .9, 0);
  travel(Wt('следующее') - .2, Wt('следующее') + .5);
  camKey(Wt('следующее') + .6, B[0], B[1], .98, .01); camKey(T_END, B[0] + 20, B[1] - 20, 1.25, .02);
  sfx('hitlow', Wt('столе') + .2);
  ensureFG([[-1200, 900, 'ashtray', 1.1, 1.9], [3600, -700, 'smoke', 1.6, 1.5, 0, .8], [900, 1000, 'cup', 1.0, 1.9]]);
  CAMK.sort((a, b) => a.t - b.t);
}

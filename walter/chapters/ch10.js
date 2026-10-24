// 10 · вопрос зрителю, подписка, досье Тони и следующее дело
CH_V0 = 630.0;
const [T_START, T_END] = chRange(10);
FADE_IN = .5; FADE_OUT = 1.6;
function buildScenes() {
  const A = [0, 0]; lamp(A[0], A[1] - 200, 2600, 1);
  const bal = card({ x: A[0] - 380, y: A[1], w: 860, h: 640, rot: -.02, order: 100, lined: true, tIn: T_START,
    text: (g, t, it) => { drawTyped(g, it.q, t, -390, -220, `800 40px ${SANS}`); drawTyped(g, it.q2, t, -390, -166, `800 40px ${SANS}`); drawChecks(g, t, it.cl, `700 36px ${MONO}`); } });
  bal.q = typed('В КАКОЙ МОМЕНТ ВЫ ПЕРЕСТАЛИ', Wt('вы') - .05, .03); bal.q2 = typed('БОЛЕТЬ ЗА УОЛТЕРА?', Wt('болеть') - .05, .035);
  bal.cl = [checkLine('КРЕЙЗИ-8', 1e9, 'v', -330, -60), checkLine('ДЖЕЙН', 1e9, 'v', -330, 20), checkLine('БРОК', 1e9, 'v', -330, 100), checkLine('НИКОГДА', 1e9, 'v', -330, 180)];
  typedCard({ x: A[0] + 540, y: A[1] + 240, w: 560, h: 200, rot: .04, order: 110, color: '#f2efe8', lined: false, tIn: Wt('напишите') - .2, dur: .3, enter: 'slide', dx: 400, dy: 200,
    extra: (g) => { g.fillStyle = '#f2efe8'; g.beginPath(); g.moveTo(-200, 100); g.lineTo(-240, 150); g.lineTo(-150, 100); g.fill(); } },
    [[typed('НАПИШИТЕ', Wt('напишите'), .04), 0, -14, `800 46px ${SANS}`, INK, 'center'], [typed('В КОММЕНТАРИЯХ', Wt('комментариях'), .035), 0, 46, `700 34px ${MONO}`, INK, 'center']]);
  const sub = card({ x: A[0] + 60, y: A[1] + 500, w: 1, h: 1, shadow: 0, lit: false, order: 210, tIn: T_START, draw: (g, t, it) => drawStamp(g, it.s, t) });
  sub.s = stamp('ПОДПИСЫВАЙТЕСЬ', Wt('подписывайтесь') + .1, { size: 70, rot: -.06, shake: 14 });

  // the Tony Soprano dossier, already closed, and the next case sliding in
  const B = [2400, 200]; lamp(B[0], B[1] - 200, 2200, 1);
  item({ draw: drawFolder, x: B[0] - 520, y: B[1] + 40, w: 760, h: 540, rot: -.06, order: 200, tIn: Wt('досье') - .2, dur: .4, enter: 'slide', dx: -1200, dy: 200, drot: -.2, tab: 'ДЕЛО № 1999',
    text: (g) => { drawStamp(g, { text: 'ЗАКРЫТО', t: 0, size: 56, rot: -.08, x: 160, y: 190 }, 99); } });
  pw('tony', Wt('тони') - .1, { x: B[0] - 540, y: B[1] - 20, w: 420, rot: -.03, order: 205, caption: capt('Т. СОПРАНО', Wt('сопрано')), capSize: 26 });
  tag({ x: B[0] - 300, y: B[1] - 300, w: 360, rot: .05, label: 'НА КАНАЛЕ', tIn: Wt('канале') - .1, order: 206, size: 40 });
  const nx = item({ draw: drawFolder, x: B[0] + 420, y: B[1] + 20, w: 900, h: 620, rot: .03, order: 220, tIn: Wt('следующее') + .1, dur: .5, enter: 'slide', dx: 1600, dy: -300, drot: .25, tab: 'ДЕЛО № ?',
    text: (g, t, it) => { g.fillStyle = '#eee9de'; g.fillRect(-220, -200, 440, 290); g.fillStyle = '#2a2523'; g.fillRect(-200, -180, 400, 230);
      g.fillStyle = '#e8e2d4'; g.font = `800 170px ${SANS}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('?', 0, -60); g.textBaseline = 'alphabetic';
      drawStamp(g, { text: 'СЕКРЕТНО', t: 0, size: 60, rot: -.08, x: 240, y: -250 }, 99); drawTyped(g, it.ty, t, 0, 200, `700 40px ${MONO}`, INK, 'center'); } });
  nx.ty = typed('СЛЕДУЮЩЕЕ ДОСЬЕ', Wt('дело') + .1, .04);

  camKey(T_START, A[0] - 340, A[1] - 60, 1.05, -.01); camKey(Wt('вообще') + .4, A[0] - 280, A[1] + 20, 1.12, -.015);
  camKey(Wt('комментариях') + .6, A[0] + 200, A[1] + 140, .95, .01); camKey(Wt('подписывайтесь') + .4, A[0] + 60, A[1] + 280, .9, 0);
  travel(Wt('досье') - .4, Wt('досье') + .3);
  camKey(Wt('досье') + .4, B[0] - 480, B[1] + 20, 1.05, -.015); camKey(Wt('канале') + .4, B[0] - 400, B[1] - 20, 1.0, -.01);
  camKey(Wt('следующее') + .7, B[0] + 100, B[1] + 20, .8, .01); camKey(T_END, B[0] + 380, B[1] + 0, 1.15, .02);
  sfx('hitlow', Wt('столе') + .2);
  ensureFG([[-1200, 900, 'ashtray', 1.1, 1.9], [3600, -700, 'smoke', 1.6, 1.5, 0, .8], [900, 1000, 'cup', 1.0, 1.9]]);
  CAMK.sort((a, b) => a.t - b.t);
}

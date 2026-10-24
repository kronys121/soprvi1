// 05 · ИМПЕРИЯ
CH_V0 = 318.1;
const [T_START, T_END] = chRange(5);
function buildScenes() {
  const D = [0, 0]; divider(D, 5, 'ИМПЕРИЯ', T_START);
  hold(T_START, Wt('третьем') + .1, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · Gus Fring, Los Pollos Hermanos, the superlab
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('gus', Wt('гуса') - .2, { x: A1[0] - 420, y: A1[1] - 40, w: 680, rot: -.02, order: 100, caption: capt('ГУСТАВО ФРИНГ', Wt('фринга')), capSize: 28 });
  const lp = card({ x: A1[0] + 520, y: A1[1] - 260, w: 520, h: 280, rot: .05, order: 110, color: '#f6d34a', lined: false, tIn: Wt('лос') - .2, dur: .3, enter: 'slide', dx: 500, dy: -200,
    text: (g) => { g.fillStyle = '#b8261e'; g.font = `800 52px ${SANS}`; g.textAlign = 'center'; g.fillText('LOS POLLOS', 0, -20); g.fillText('HERMANOS', 0, 50); } });
  tag({ x: A1[0] + 540, y: A1[1] + 60, w: 440, rot: -.04, label: 'НАРКОБАРОН', tIn: Wt('наркобарона') + .05, order: 120, size: 40 });
  pw('galesing', Wt('лаборатория') - .2, { x: A1[0] + 420, y: A1[1] + 380, w: 560, rot: .03, order: 130, caption: capt('СУПЕРЛАБОРАТОРИЯ', Wt('лаборатория')), capSize: 24 });
  tag({ x: A1[0] - 420, y: A1[1] + 360, w: 560, rot: .04, label: 'ОПАСНЫЙ ПРОТИВНИК', tIn: Wt('противник') + .05, order: 140, size: 36 });
  goTo(A1, Wt('третьем') + .1, Wt('уолтер') + .2, A1[0] - 760, A1[1] - 340);
  hold(Wt('уолтер') + .2, Wt('херманос') + .2, A1[0] - 100, A1[1] - 120, .95, -.01, { dz: .06 });
  camKey(Wt('наркобарона'), A1[0] + 400, A1[1] - 80, 1.05, .01); camKey(Wt('лаборатория') + .4, A1[0] + 380, A1[1] + 300, 1.1, .015); camKey(Wt('противник') + .6, A1[0], A1[1] + 200, .85, 0);

  // S2 · Gale: karaoke and tea; Jesse is made to kill him
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, .95);
  const gl = pw('gale', Wt('гейла') - .2, { x: A2[0] - 260, y: A2[1] - 20, w: 820, rot: -.015, order: 200, off: 0 });
  gl.greyAt = t => eio(prog(t, Wt('сделал') - .2, Wt('сделал') + .8)) * .9;
  const gc = typedCard({ x: A2[0] + 640, y: A2[1] - 160, w: 480, h: 380, rot: .04, order: 210, tIn: Wt('=гейл') - .1, dur: .3, enter: 'slide', dx: 400, dy: 0 },
    [[typed('ГЕЙЛ БЕТИКЕР', Wt('=гейл'), .04), -200, -110, `700 34px ${MONO}`], [typed('♪ караоке', Wt('караоке'), .04), -200, -30, `400 32px ${MONO}`], [typed('☕ чай', Wt('чай'), .05), -200, 30, `400 32px ${MONO}`], [typed('вина: —', Wt('ничего'), .05), -200, 110, `700 32px ${MONO}`, RED]]);
  goTo(A2, Wt('противник') + .6, Wt('чтобы') + .2, A2[0] - 720, A2[1] - 300);
  hold(Wt('чтобы') + .2, Wt('заменить') + .4, A2[0] - 200, A2[1] + 10, 1.1, -.015, { dz: .08 });
  camKey(Wt('=гейл') + .3, A2[0] + 300, A2[1] - 60, 1.0, .01); camKey(Wt('сделал') + .6, A2[0] + 160, A2[1] - 20, 1.05, 0);

  // S3 · Gus is blown up via Hector's bell
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1);
  pw('gusbell', Wt('финале') - .2, { x: A3[0] - 420, y: A3[1] - 40, w: 640, rot: -.03, order: 300, off: 0, caption: capt('ГЕКТОР САЛАМАНКА · ЗВОНОК', Wt('звонка')), capSize: 22 });
  const gf = pw('gusface', Wt('взрывает') - .3, { x: A3[0] + 420, y: A3[1] + 40, w: 640, rot: .03, order: 310, off: 0 });
  sfx('boom', Wt('взрывает') + .1); shake(Wt('взрывает') + .1, 24);
  FX.push({ name: 'zoomblur', fn: t => Math.sin(Math.PI * clamp(prog(t, Wt('взрывает'), Wt('взрывает') + .6))) * .9 });
  goTo(A3, Wt('сделал') + .6, Wt('финале') + .2, A3[0] - 800, A3[1] - 320);
  camKey(Wt('финале') + .2, A3[0] - 380, A3[1] - 20, 1.15, -.02); camKey(Wt('побеждает') + .2, A3[0] + 380, A3[1] + 40, 1.15, .02);
  camKey(Wt('саламанки') + .4, A3[0] + 400, A3[1] + 30, 1.3, .03);

  // S4 · the twist: Brock poisoned with lily of the valley — by Walter
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  const pois = typedCard({ x: A4[0] - 420, y: A4[1] - 40, w: 680, h: 520, rot: -.03, order: 400, tIn: Wt('маленький') - .2, dur: .3, enter: 'slide', dx: -500, dy: 0 },
    [[typed('ПОСТРАДАВШИЙ: БРОК, 6 ЛЕТ', Wt('брок'), .03), -300, -150, `700 32px ${MONO}`], [typed('ЯД: ЛАНДЫШ', Wt('ландышем'), .04), -300, -70, `700 40px ${MONO}`],
     [typed('ОТРАВИТЕЛЬ:', Wt('отравил'), .04), -300, 30, `700 36px ${MONO}`], [typed('УОЛТЕР УАЙТ', Wt('уолтер', 4), .05, { heavy: true }), -300, 110, `800 54px ${SANS}`, RED]]);
  pois.stamps = [stamp('РЕБЁНОК', Wt('ребёнок'), { x: 120, y: 200, size: 72, rot: -.1, shake: 22 })];
  pw('lily', Wt('кадр') - .3, { x: A4[0] + 560, y: A4[1] - 60, w: 640, rot: .04, order: 410, off: 3.0, caption: capt('ПОСЛЕДНИЙ КАДР СЕЗОНА 4', Wt('кадр')), capSize: 22 });
  card({ x: A4[0] + 560, y: A4[1] + 330, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, scrawls: [scrawl('ХЭППИ-ЭНД?', Wt('хэппи-энд') - .1, .45, { size: 66, rot: -.05 })] });
  goTo(A4, Wt('саламанки') + .4, Wt('тут') + .2, A4[0] - 800, A4[1] - 340);
  hold(Wt('тут') + .2, Wt('гуса', 3) + .4, A4[0] - 400, A4[1] - 20, 1.12, -.015, { dz: .1 });
  camKey(Wt('ребёнок') + .3, A4[0] - 300, A4[1] + 120, 1.25, -.02); camKey(Wt('победы') + .5, A4[0] - 260, A4[1] + 140, 1.3, -.025);
  camKey(Wt('многие') + .3, A4[0] + 540, A4[1] + 40, 1.0, .01); camKey(Wt('кадр') + .2, A4[0] + 560, A4[1] - 50, 1.25, .02); camKey(T_END, A4[0] + 570, A4[1] - 40, 1.4, .03);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}

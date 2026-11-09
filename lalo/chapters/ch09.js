// 09 · МЕРТВЕЦ — fakes his death; calls Hector; proof needed; Gus senses Lalo is alive and lives under siege
CH_V0 = 481.06;
const [T_START, T_END] = chRange(9);
function buildScenes() {
  const D = [0, 0]; divider(D, 9, 'МЕРТВЕЦ', T_START);
  hold(T_START, Wt('теперь') + .2, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · he dies — stages his death: kills a lookalike, leaves the burned body; the cartel is sure Lalo is dead
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('lalovillage', Wt('похожего') - .6, { x: A1[0] - 580, y: A1[1] - 120, w: 480, rot: -.04, order: 100, off: 1, caption: capt('ПОХОЖИЙ НА СЕБЯ', Wt('себя') - .2), capSize: 20 });
  pw('burned', Wt('обгоревшее') - .5, { x: A1[0] + 160, y: A1[1] - 60, w: 600, rot: .02, order: 110, off: 1 });
  const dd = card({ x: A1[0] + 160, y: A1[1] + 330, w: 1, h: 1, shadow: 0, lit: false, order: 120, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  dd.s = stamp('МЁРТВ?', Wt('мёртв') + .1, { size: 80, rot: -.06, shake: 16 });
  const inn = typedCard({ x: A1[0] - 580, y: A1[1] + 280, w: 460, h: 140, rot: .03, order: 105, tIn: Wt('инсценирует') - .4, dur: .3, enter: 'slide', dx: -300, dy: 200 },
    [[typed('ИНСЦЕНИРУЕТ', Wt('инсценирует') - .2, .04), 0, -6, `800 32px ${SANS}`, RED, 'center'], [typed('свою смерть', Wt('смерть') - .2, .04), 0, 40, `700 24px ${MONO}`, INK, 'center']]);
  goTo(A1, Wt('теперь') + .2, Wt('умирает') - .1, A1[0] - 860, A1[1] - 460);
  camKey(Wt('инсценирует'), A1[0] - 560, A1[1] + 60, 1.0, -.015); camKey(Wt('обгоревшее') + .1, A1[0] + 160, A1[1] - 40, 1.02, .01); camKey(Wt('мёртв') + .3, A1[0] + 160, A1[1] + 120, .95, .01);

  // S2 · calls Hector: "I'm alive, I'll kill Gus"; Hector: killing isn't enough — Eladio forgives Gus while he brings money; need proof; revenge → hunt
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2100, 1);
  pw('lalocall', Wt('звонит') - .5, { x: A2[0] - 600, y: A2[1] - 120, w: 460, rot: -.04, order: 200, off: 1, caption: capt('«Я ЖИВ. Я УБЬЮ ГУСА»', Wt('убью') - .2), capSize: 18 });
  pw('hectorcall', Wt('понять') - .6, { x: A2[0] - 600, y: A2[1] + 260, w: 420, rot: .04, order: 205, off: 1 });
  const pf = card({ x: A2[0] + 260, y: A2[1] - 40, w: 620, h: 440, rot: .015, order: 210, lined: true, tIn: Wt('мало') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawChecks(g, t, it.cl, `700 28px ${MONO}`); drawTyped(g, it.a, t, -270, 140, `800 40px ${SANS}`, RED); } });
  pf.cl = [checkLine('УБИТЬ ГУСА', Wt('мало') + .1, 'x', -260, -150), checkLine('ЭЛАДИО ВСЁ ПРОСТИТ', Wt('простит') + .1, 'x', -260, -80), checkLine('НУЖНО ДОКАЗАТЕЛЬСТВО', Wt('доказательство') + .2, 'v', -260, -10)];
  pf.a = typed('НЕ МЕСТЬ — ОХОТА', Wt('охоту') - .5, .04);
  goTo(A2, Wt('мёртв') + .6, Wt('звонит') - .2, A2[0] - 860, A2[1] - 460);
  camKey(Wt('звонит') + .1, A2[0] - 580, A2[1] - 100, 1.05, -.015); camKey(Wt('понять'), A2[0] - 580, A2[1] + 240, 1.05, .01);
  camKey(Wt('мало') + .1, A2[0] + 260, A2[1] - 20, 1.0, .015); camKey(Wt('охоту') + .3, A2[0] + 260, A2[1] + 40, 1.08, .015);

  // S3 · Gus senses Lalo is alive: sees how Hector holds up — not a man who lost his beloved nephew
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 1900, .9);
  pw('gushector', Wt('чувствует') - .5, { x: A3[0] - 380, y: A3[1] - 80, w: 680, rot: -.015, order: 300, off: 1 });
  pw('gushec2', Wt('держится') - .5, { x: A3[0] + 560, y: A3[1] - 120, w: 420, rot: .04, order: 310, off: 1 });
  const al = card({ x: A3[0] + 560, y: A3[1] + 250, w: 440, h: 150, rot: -.03, order: 320, color: '#f3efe2', lined: false, tIn: Wt('старик') - .3, dur: .3, enter: 'slide', dx: 300, dy: 200,
    text: (g, t, it) => { drawTyped(g, it.a, t, 0, -10, `700 22px ${MONO}`, '#777', 'center'); drawTyped(g, it.b, t, 0, 40, `800 40px ${SANS}`, RED, 'center'); } });
  al.a = typed('старик не скорбит —', Wt('старик') - .1, .03); al.b = typed('ЛАЛО ЖИВ', Wt('племянника') + .1, .06);
  goTo(A3, Wt('охоту') + .7, Wt('чувствует') - .2, A3[0] - 860, A3[1] - 460);
  hold(Wt('чувствует') - .2, Wt('=говорит') + .3, A3[0] - 380, A3[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('держится'), A3[0] + 540, A3[1] - 100, 1.08, .015); camKey(Wt('племянника') + .3, A3[0] + 540, A3[1] + 200, 1.05, .01);

  // S4 · the calmest man starts to fear: 24/7 guards at his house and every business; waiting for a blow from anywhere; Gus under siege
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  pw('gusphone', Wt('бояться') - .6, { x: A4[0] - 380, y: A4[1] - 80, w: 680, rot: -.015, order: 400, off: 1, caption: capt('САМЫЙ СПОКОЙНЫЙ НАЧИНАЕТ БОЯТЬСЯ', Wt('бояться') - .2), capSize: 20 });
  const gd = card({ x: A4[0] + 560, y: A4[1] - 60, w: 440, h: 300, rot: .03, order: 410, lined: true, tIn: Wt('круглосуточную') - .4, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -190, -100, `800 28px ${SANS}`); drawChecks(g, t, it.cl, `700 26px ${MONO}`); } });
  gd.a = typed('ОХРАНА 24/7:', Wt('круглосуточную') - .2, .04);
  gd.cl = [checkLine('ДОМ', Wt('дома') + .1, 'v', -180, -30), checkLine('ВСЕ ЗАВЕДЕНИЯ', Wt('заведений') + .1, 'v', -180, 40)];
  const sg = card({ x: A4[0], y: A4[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 420, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  sg.s = stamp('В ОСАДЕ', Wt('осаде') - .1, { size: 84, rot: -.06, shake: 20 });
  goTo(A4, Wt('племянника') + .7, Wt('самый') - .1, A4[0] - 860, A4[1] - 460);
  camKey(Wt('бояться'), A4[0] - 380, A4[1] - 60, 1.05, -.015); camKey(Wt('круглосуточную') + .2, A4[0] + 540, A4[1] - 40, 1.05, .015);
  camKey(Wt('удара'), A4[0], A4[1] + 200, .9, 0); camKey(T_END, A4[0], A4[1] + 260, 1.0, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}

// 00 · cold open + intro
CH_V0 = 0;
const [T_START, T_END] = chRange(0);
FADE_IN = .6;
function buildScenes() {
  // S0 · a world of talkers: Walter's speeches, Saul's mouth, Gus's quiet threats — and one man who's silent
  const A0 = [0, 0]; lamp(A0[0], A0[1] - 200, 2200, 1);
  pw('walthat', .2, { x: A0[0] - 640, y: A0[1] - 60, w: 420, rot: -.05, order: 100, caption: capt('УОЛТЕР: РЕЧИ', Wt('величии') - .3), capSize: 20 });
  pw('saulface', Wt('=сол') - .3, { x: A0[0] - 180, y: A0[1] - 80, w: 420, rot: .02, order: 110, caption: capt('СОЛ: БОЛТАЕТ', Wt('рта') - .3), capSize: 20 });
  pw('gus', Wt('гус') - .3, { x: A0[0] + 280, y: A0[1] - 60, w: 420, rot: .05, order: 120, caption: capt('ГУС: ТИХАЯ УГРОЗА', Wt('угроза') - .3), capSize: 20 });
  pw('mikeclose', Wt('молчит') - .6, { x: A0[0] + 760, y: A0[1] + 40, w: 460, rot: -.03, order: 130, off: 2, caption: capt('МОЛЧИТ', Wt('молчит')), capSize: 22 });
  camKey(0, A0[0] - 600, A0[1] - 40, 1.05, -.015); camKey(Wt('=сол') + .1, A0[0] - 180, A0[1] - 60, 1.08, .01);
  camKey(Wt('гус') + .2, A0[0] + 280, A0[1] - 50, 1.08, .015); camKey(Wt('молчит') + .1, A0[0] + 740, A0[1] + 40, 1.08, -.01);
  camKey(Wt('дедушка') + .3, A0[0] + 760, A0[1] + 60, 1.2, -.015);

  // S1 · Mike Ehrmantraut: ex-cop, cleaner, bodyguard, hitman — the calmest and maybe most dangerous man
  const A1 = [2600, 0]; lamp(A1[0], A1[1] - 200, 2000, 1);
  pw('mikeface3', Wt('майк') - .3, { x: A1[0] - 400, y: A1[1] - 20, w: 720, rot: -.02, order: 200, off: 2, caption: capt('МАЙК ЭРМАНТРАУТ', Wt('эрмантраут')), capSize: 28 });
  const rl = card({ x: A1[0] + 560, y: A1[1] - 40, w: 500, h: 380, rot: .03, order: 210, lined: true, tIn: Wt('бывший') - .3, dur: .3, enter: 'slide', dx: 400, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 28px ${MONO}`) });
  rl.cl = [checkLine('БЫВШИЙ КОП', Wt('полицейский') + .1, 'v', -210, -120), checkLine('ЧИСТИЛЬЩИК', Wt('чистильщик') + .1, 'v', -210, -50), checkLine('ТЕЛОХРАНИТЕЛЬ', Wt('телохранитель') + .1, 'v', -210, 20), checkLine('НАЁМНЫЙ УБИЙЦА', Wt('убийца') + .1, 'v', -210, 90)];
  const cm = card({ x: A1[0] - 400, y: A1[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 220, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  cm.s = stamp('САМЫЙ СПОКОЙНЫЙ', Wt('спокойный') - .1, { size: 60, rot: -.07, shake: 12 });
  goTo(A1, Wt('дедушка') + .6, Wt('майк') - .1, A1[0] - 760, A1[1] - 400);
  hold(Wt('майк') - .1, Wt('бывший') + .1, A1[0] - 400, A1[1] - 20, 1.05, -.015, { dz: .05 });
  camKey(Wt('полицейский') + .2, A1[0] + 520, A1[1] - 20, 1.05, .015); camKey(Wt('спокойный') + .2, A1[0] - 200, A1[1] + 200, .88, -.01);
  camKey(Wt('опасный') + .3, A1[0] - 200, A1[1] + 220, .95, -.01);

  // S2 · loved for few words, professionalism, seeing through Walt; but: one mistake, a lifetime of paying
  const A2 = [5200, 0]; lamp(A2[0], A2[1] - 200, 2100, 1);
  const lv = card({ x: A2[0] - 420, y: A2[1] - 60, w: 620, h: 360, rot: -.03, order: 300, lined: true, tIn: Wt('зрители') - .3, dur: .3, enter: 'slide', dx: -400, dy: 0,
    text: (g, t, it) => { g.fillStyle = INK; g.font = `700 28px ${MONO}`; g.textAlign = 'left'; g.fillText('ЗА ЧТО ЛЮБЯТ:', -270, -120); drawChecks(g, t, it.cl, `700 26px ${MONO}`); } });
  lv.cl = [checkLine('НЕМНОГОСЛОВНОСТЬ', Wt('немногословность') + .2, 'v', -250, -40), checkLine('ПРОФЕССИОНАЛИЗМ', Wt('профессионализм') + .2, 'v', -250, 30), checkLine('ВИДИТ УОЛТЕРА НАСКВОЗЬ', Wt('насквозь') + .1, 'v', -250, 100)];
  pw('mikewalt12', Wt('уолтера') - .3, { x: A2[0] + 520, y: A2[1] - 120, w: 460, rot: .04, order: 310, off: 3 });
  const er = card({ x: A2[0] + 60, y: A2[1] + 380, w: 900, h: 170, rot: -.015, order: 320, lined: false, tIn: Wt('однажды') - .3, dur: .3, enter: 'slide', dx: 0, dy: 300,
    text: (g, t, it) => { drawTyped(g, it.a, t, -410, -20, `800 38px ${SANS}`, RED); drawTyped(g, it.b, t, -410, 45, `700 28px ${MONO}`); } });
  er.a = typed('ОДНА ОШИБКА', Wt('ошибку') - .5, .05); er.b = typed('— и расплата всю жизнь', Wt('расплачивается') - .5, .03);
  goTo(A2, Wt('опасный') + .6, Wt('зрители') + .1, A2[0] - 800, A2[1] - 500);
  hold(Wt('зрители') + .1, Wt('взгляда') + .3, A2[0] - 300, A2[1] - 60, 1.05, -.015, { dz: .05 });
  camKey(Wt('присмотреться') + .2, A2[0] + 60, A2[1] + 160, .86, 0); camKey(Wt('расплачивается') + .3, A2[0] + 60, A2[1] + 300, 1.0, -.01);
  camKey(Wt('повторить') + .2, A2[0] + 60, A2[1] + 320, 1.08, -.01);

  // S3 · the dossier: Ehrmantraut, Mike; spoilers
  const A4 = [2600, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  mugBoard(A4, { still: 'mikeface' }, typed('ЭРМАНТРАУТ, МАЙК', Wt('досье'), .045), typed('бывш. полиция Филадельфии', Wt('эрмантраута') + .2, .03, { silent: true }), { order: 500 });
  const st6 = card({ x: A4[0] + 300, y: A4[1] - 300, w: 1, h: 1, shadow: 0, order: 540, tIn: 0, draw: (g, t, it) => drawStamp(g, it.s, t) });
  st6.s = stamp('ВНИМАНИЕ', Wt('дальше') + .05, { size: 110, rot: -.1, shake: 12 });
  TAPES.push({ t0: Wt('спойлеры') - .3, dur: .5, ang: -.2, y: -60, dir: 1, out: T_END - .45 });
  TAPES.push({ t0: Wt('шести') - .3, dur: .45, ang: .16, y: 170, dir: -1, out: T_END - .4 });
  TAPES.forEach(tp => sfx('tape', tp.t0, { dur: tp.dur }));
  goTo(A4, Wt('повторить') + .5, Wt('сегодня') + .1, A4[0] - 600, A4[1] - 420);
  hold(Wt('сегодня') + .1, Wt('дальше') - .2, A4[0], A4[1] - 40, 1.05, .01, { dz: .06 });
  camKey(Wt('дальше') + .3, A4[0] + 200, A4[1] - 60, 1.02, -.02); camKey(T_END, A4[0] + 260, A4[1] - 20, 1.12, -.04);

  ensureFG([[-1000, 700, 'ashtray', 1.1, 1.9], [3600, 600, 'smoke', 1.6, 1.5, 0, .8], [6200, 900, 'cup', 1.0, 1.9], [1400, 2600, 'pen', 1.2, 1.85, .4]]);
  CAMK.sort((a, b) => a.t - b.t);
}

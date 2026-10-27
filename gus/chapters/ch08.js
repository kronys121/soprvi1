// 08 · ВЕРДИКТ
CH_V0 = 496.3;
const [T_START, T_END] = chRange(8);
function buildScenes() {
  const D = [0, 0]; divider(D, 8, 'ВЕРДИКТ', T_START);
  hold(T_START, Wt('почему') + .3, D[0], D[1] + 10, .95, .01, { dz: .12 });

  // S1 · the cartel is predictable; Gus is calm and unreadable
  const A1 = [2000, -200]; lamp(A1[0], A1[1] - 200, 2100, 1);
  typedCard({ x: A1[0] - 300, y: A1[1] - 420, w: 760, h: 150, rot: -.015, order: 100, lined: false, tIn: Wt('почему') - .1, dur: .3, enter: 'slide', dx: 0, dy: -300 },
    [[typed('КАРТЕЛЬ ПРЕДСКАЗУЕМ', Wt('предсказуем') - .3, .035), 0, 18, `800 48px ${SANS}`, INK, 'center']]);
  [['tuco', 'туко', 'КРИЧИТ', 'кричит', -780], ['cousins', 'кузены', 'МОЛЧАТ', 'молчат', -340], ['hbell', 'гектор', 'ЗВОНИТ', 'звонит', 100]].forEach(([k, w, lab, wl, dx], i) => {
    pw(k, Wt(w) - .3, { x: A1[0] + dx, y: A1[1] - 20, w: 400, rot: (i - 1) * .04, order: 110 + i, off: 2, caption: capt(lab, Wt(wl)), capSize: 26 });
  });
  const gc = pw('gphone2', Wt('=гус') - .3, { x: A1[0] + 640, y: A1[1] + 40, w: 560, rot: .04, order: 120, off: 2, caption: capt('ВСЕГДА СПОКОЕН', Wt('спокоен')), capSize: 26 });
  card({ x: A1[0] + 640, y: A1[1] + 400, w: 1, h: 1, shadow: 0, lit: false, order: 130, tIn: 0, scrawls: [scrawl('ЧТО ОН РЕШИЛ?', Wt('решил') - .3, .5, { size: 60, rot: -.05 })] });
  goTo(A1, Wt('почему') + .3, Wt('картель') + .1, A1[0] - 760, A1[1] - 640);
  hold(Wt('картель') + .1, Wt('предсказуем') + .3, A1[0] - 300, A1[1] - 300, 1.0, -.01, { dz: .04 });
  camKey(Wt('кричит') + .2, A1[0] - 560, A1[1] - 20, .95, -.01); camKey(Wt('звонит') + .2, A1[0] - 220, A1[1] - 20, .95, .01);
  camKey(Wt('=гус') + .3, A1[0] + 620, A1[1] + 40, 1.05, .015); camKey(Wt('решил') + .4, A1[0] + 620, A1[1] + 200, 1.0, .01);

  // S2 · not cruelty but patience: 20 years smiling at the killers, a year keeping Walter close
  const A2 = [4400, 0]; lamp(A2[0], A2[1] - 200, 2000, 1);
  const pt = typedCard({ x: A2[0] - 300, y: A2[1] - 260, w: 820, h: 260, rot: -.02, order: 200, lined: false, tIn: Wt('самое') - .3, dur: .3, enter: 'slide', dx: 0, dy: -300 },
    [[typed('САМОЕ СТРАШНОЕ:', Wt('самое'), .035), -360, -50, `700 34px ${MONO}`], [typed('не жестокость', Wt('жестокость') - .2, .04), -360, 20, `700 40px ${MONO}`], [typed('ТЕРПЕНИЕ', Wt('терпение'), .05), -360, 95, `800 60px ${SANS}`, RED]]);
  pt.pens = [pen([[-370, 8], [-20, 4]], Wt('жестокость') + .4, .25, { width: 7 })];
  pw('gyoung', Wt('двадцать') - .3, { x: A2[0] - 560, y: A2[1] + 220, w: 480, rot: -.04, order: 210, off: 4, caption: capt('20 ЛЕТ УЛЫБАТЬСЯ', Wt('улыбаться')), capSize: 22 });
  pw('goffice', Wt('год') - .3, { x: A2[0] + 160, y: A2[1] + 240, w: 480, rot: .04, order: 220, off: 6, caption: capt('ГОД РЯДОМ · ЗАМЕНА РЕШЕНА', Wt('заменит')), capSize: 20 });
  goTo(A2, Wt('решил') + .4, Wt('самое') + .1, A2[0] - 860, A2[1] - 520);
  hold(Wt('самое') + .1, Wt('терпение') + .5, A2[0] - 300, A2[1] - 260, 1.05, -.015, { dz: .05 });
  camKey(Wt('двадцать') + .2, A2[0] - 540, A2[1] + 200, 1.08, -.01); camKey(Wt('год') + .2, A2[0] + 160, A2[1] + 220, 1.08, .01); camKey(Wt('его') + .3, A2[0] + 160, A2[1] + 240, 1.15, .015);

  // S3 · Esposito: almost no movement; Emmy nomination; back in Better Call Saul
  const A3 = [4400, 1900]; lamp(A3[0], A3[1] - 200, 2100, 1);
  pw('gelevator', Wt('джанкарло') - .3, { x: A3[0] - 520, y: A3[1] - 60, w: 640, rot: -.03, order: 300, off: 5, caption: capt('ДЖАНКАРЛО ЭСПОЗИТО', Wt('эспозито')), capSize: 26 });
  const es = card({ x: A3[0] + 300, y: A3[1] - 200, w: 520, h: 380, rot: .03, order: 310, lined: true, tIn: Wt('редко') - .3, dur: .3, enter: 'slide', dx: 500, dy: 0,
    text: (g, t, it) => drawChecks(g, t, it.cl, `700 32px ${MONO}`) });
  es.cl = [checkLine('РЕДКО МОРГАЕТ', Wt('моргает') + .05, 'v', -220, -90), checkLine('ГОВОРИТ МЕДЛЕННО', Wt('медленно') + .05, 'v', -220, -10), checkLine('НЕ ТОРОПИТСЯ', Wt('торопится') + .05, 'v', -220, 70)];
  tag({ x: A3[0] + 300, y: A3[1] + 90, w: 460, rot: -.04, label: 'НОМИНАЦИЯ «ЭММИ»', tIn: Wt('эмми') + .05, order: 320, size: 38 });
  typedCard({ x: A3[0] + 300, y: A3[1] + 330, w: 620, h: 200, rot: .02, order: 330, color: '#f2efe8', lined: false, tIn: Wt('приквеле') - .3, dur: .3, enter: 'slide', dx: 400, dy: 300 },
    [[typed('«ЛУЧШЕ ЗВОНИТЕ СОЛУ»', Wt('лучше'), .035), -280, -20, `800 40px ${SANS}`], [typed('лаборатория · месть', Wt('лаборатория') - .2, .035), -280, 45, `400 30px ${MONO}`]]);
  goTo(A3, Wt('его') + .5, Wt('джанкарло') + .1, A3[0] - 900, A3[1] - 440);
  hold(Wt('джанкарло') + .1, Wt('движений') + .3, A3[0] - 500, A3[1] - 60, 1.1, -.015, { dz: .05 });
  camKey(Wt('моргает') + .2, A3[0] + 280, A3[1] - 180, 1.08, .01); camKey(Wt('эмми') + .3, A3[0] + 280, A3[1] + 60, 1.05, -.01);
  camKey(Wt('лучше') + .2, A3[0] + 300, A3[1] + 300, 1.08, .01); camKey(Wt('месть') + .4, A3[0] + 60, A3[1] + 100, .88, 0);

  // S4 · why we respected him: never lied to himself
  const A4 = [2000, 1900]; lamp(A4[0], A4[1] - 200, 2000, 1);
  typedCard({ x: A4[0], y: A4[1] - 420, w: 760, h: 150, rot: -.015, order: 400, lined: false, tIn: Wt('уважали') - .3, dur: .3, enter: 'slide', dx: 0, dy: -300 },
    [[typed('НИКОГДА НЕ ВРАЛ СЕБЕ', Wt('врал') - .3, .035), 0, 18, `800 46px ${SANS}`, INK, 'center']]);
  const wl = pw('walthat', Wt('уолтер', 2) - .3, { x: A4[0] - 440, y: A4[1] + 20, w: 560, rot: -.04, order: 410, caption: capt('«ВСЁ РАДИ СЕМЬИ»', Wt('ради')), capSize: 24 });
  wl.stamps = [stamp('ЛОЖЬ', Wt('семьи') + .2, { x: 0, y: 30, size: 80, rot: -.1, shake: 16 })];
  const gsx = pw('gus', Wt('=гус', 5) - .3, { x: A4[0] + 440, y: A4[1] + 20, w: 560, rot: .04, order: 420, caption: capt('НЕ ПРИТВОРЯЛСЯ', Wt('притворялся')), capSize: 24 });
  gsx.stamps = [stamp('БЕЗУПРЕЧНО', Wt('безупречно'), { x: 0, y: 30, size: 60, rot: -.08, shake: 14 })];
  goTo(A4, Wt('месть') + .4, Wt('почему', 2) + .1, A4[0] - 600, A4[1] - 600);
  hold(Wt('почему', 2) + .1, Wt('себе') + .3, A4[0], A4[1] - 320, 1.0, -.01, { dz: .04 });
  camKey(Wt('уолтер', 2) + .2, A4[0] - 420, A4[1] + 20, 1.05, -.015); camKey(Wt('=гус', 5) + .2, A4[0] + 420, A4[1] + 20, 1.05, .015);
  camKey(Wt('безупречно') + .4, A4[0] + 430, A4[1] + 40, 1.15, .02);

  // S5 · Gus is what Walter wanted to be — feared, unseen. Walter needed his name said. The mistake.
  const A5 = [-300, 1900]; lamp(A5[0], A5[1] - 200, 2100, 1);
  const mr = typedCard({ x: A5[0] - 300, y: A5[1] - 300, w: 820, h: 300, rot: -.02, order: 500, lined: false, tIn: Wt('это', 3) - .3, dur: .3, enter: 'slide', dx: 0, dy: -400 },
    [[typed('ГУС = ТО, КЕМ', Wt('кем') - .2, .04), -360, -60, `800 46px ${SANS}`], [typed('УОЛТЕР ХОТЕЛ БЫТЬ', Wt('хотел') - .1, .04), -360, 10, `800 46px ${SANS}`, RED],
     [typed('боятся все · не видит никто', Wt('боятся') - .1, .03), -360, 90, `700 30px ${MONO}`]]);
  pw('waltface', Wt('власть') - .4, { x: A5[0] - 560, y: A5[1] + 220, w: 440, rot: -.05, order: 510, caption: capt('ХОТЕЛ, ЧТОБЫ ПРОИЗНЕСЛИ ИМЯ', Wt('имя') - .3), capSize: 18 });
  pw('gpollos', Wt('гусу', 2) - .4, { x: A5[0] + 0, y: A5[1] + 240, w: 440, rot: .04, order: 520, off: 1, caption: capt('НЕ НУЖНО, ЧТОБЫ ЗНАЛИ', Wt('знали') - .3), capSize: 18 });
  const sl = card({ x: A5[0] + 620, y: A5[1] + 20, w: 480, h: 420, rot: .03, order: 530, lined: false, tIn: Wt('сила') - .4, dur: .3, enter: 'slide', dx: 500, dy: 0,
    text: (g, t, it) => { drawTyped(g, it.a, t, -200, -110, `800 48px ${SANS}`); drawTyped(g, it.b, t, -200, -20, `800 48px ${SANS}`, RED); drawTyped(g, it.c, t, -200, 70, `700 28px ${MONO}`); drawTyped(g, it.d, t, -200, 120, `700 28px ${MONO}`); } });
  sl.a = typed('СИЛА', Wt('сила') - .1, .05); sl.b = typed('ОШИБКА', Wt('ошибка') - .1, .05);
  sl.c = typed('недооценил того,', Wt('недооценил') - .1, .03); sl.d = typed('кому важно победить', Wt('важнее') - .1, .03);
  goTo(A5, Wt('безупречно') + .4, Wt('это', 3) + .1, A5[0] - 860, A5[1] - 560);
  hold(Wt('это', 3) + .1, Wt('видит') + .4, A5[0] - 300, A5[1] - 260, 1.05, -.015, { dz: .05 });
  camKey(Wt('власть') + .2, A5[0] - 540, A5[1] + 200, 1.08, -.01); camKey(Wt('гусу', 2) + .2, A5[0] + 0, A5[1] + 220, 1.08, .01);
  camKey(Wt('сила') + .2, A5[0] + 600, A5[1] + 20, 1.08, .015); camKey(Wt('недооценил') + .2, A5[0] + 600, A5[1] + 60, 1.15, .015);
  camKey(T_END, A5[0] + 200, A5[1] + 60, .85, 0);

  ensureFG([[900, 600, 'ashtray', 1.1, 1.9], [3200, 900, 'smoke', 1.6, 1.5, 0, .8], [5800, 900, 'cup', 1.0, 1.9], [800, 2900, 'pen', 1.2, 1.85, .4], [3300, 2800, 'smoke', 1.7, 1.5, 0, .8]]);
  CAMK.sort((a, b) => a.t - b.t);
}

// 00 · cold open: the boat, the tequila, «Только не в лицо», then who he was and the case file
CH_V0 = 0;
const [T_START, T_END] = chRange(0);
FADE_IN = .01; FADE_OUT = .5;
function buildScenes() {
  const w = (s, n = 1, e = false) => Wt(s, n, e);
  dress(1); lampOn(.25);
  // "Пасмурный день. Новенький катер Тони Сопрано уходит в открытое море."
  WIDE(0, -150, -150, .62, { quiet: true, to: [-400, -260, .78] });
  P('b_marina', w('пасмурный') + .05, -1150, -560, { w: 640, rot: -.04, bri: 1.25, label: '«КЛАН СОПРАНО» · 2×13', chain: 'start' });
  P('b_sea', w('открытое') - .1, -350, -600, { w: 640, rot: .03, bri: 1.25 });
  // "В каюте четверо: Тони, Сильвио, Поли и толстый усатый человек в тёмном свитере."
  const fs = faces(700, -560, [['tonyboat', 'ТОНИ', w('тони', 2) - .05], ['silface', 'СИЛЬВИО', w('сильвио') - .05], ['pauliface', 'ПОЛИ', w('поли') - .05]], { w: 360, gap: 440 });
  S(w('каюте') - .2, 700, -540, 1.0, 0, { dx: 120 });
  const pp = P('pussyboat', w('толстый') - .1, -1150, 420, { w: 660, rot: .02, bri: 1.25, cap: 'тёмный свитер', capd: 1.0 });
  P('b_tequila', w('текилу') - .2, -350, 450, { w: 660, rot: -.03, bri: 1.4, cap: 'текила', capd: .4 });
  const nb = note(500, 430, w('прогулка') - .4, [['МОРСКАЯ ПРОГУЛКА', w('прогулка') - .1, 36], ['обратно не вернётся', w('вернётся') - .2, 34, RED]], { w: 640, h: 260 });
  // "Человек просит только об одном"
  const pf = P('b_plead', w('просит') - .2, 1300, 450, { w: 700, rot: .02, bri: 1.4, off: 2 });
  S(w('одном') - .1, 1300, 430, 2.2, .01, { dz: .1 });
  [w('лицо') + .1].forEach(t => sfx('heart', t));
  tape('d_face', { tc: 2369.6, tag: '«КЛАН СОПРАНО» · 2×13', bri: 1.5, subs: [[.1, 1.9, 'ТОЛЬКО НЕ В ЛИЦО, ОКЕЙ?', 'НЕ В ЛИЦО'], [2.0, 3.7, 'ЛАДНО.']] });
  // "Так закончилась жизнь Сальваторе БонпенсьЕро по прозвищу Большой Пусси."
  const tE = w('закончилась');
  const pc = P('pussyface', tE - .15, -800, 1400, { w: 720, rot: .02, bri: 1.2, z: 1.5, chain: false });
  pc.label = dymo('САЛЬВАТОРЕ БОНПЕНСЬЕРО', w('сальваторе') + .1, { size: 38 });
  pc.stamps = [stamp('БОЛЬШОЙ ПУССИ', w('пусси') + .05, { x: 120, y: -60, size: 70, rot: -.14 })];
  const cl = card({ x: 300, y: 1400, w: 640, h: 380, rot: -.02, order: ORD++, lined: true, tIn: w('старых') - .3, dur: .25, enter: 'slide', dx: 500, dy: 100, text: (g, t, it) => drawChecks(g, t, it.cl, `700 32px ${MONO}`) });
  cl.cl = [checkLine('СТАРЫЙ ДРУГ', w('старых') + .1, 'v', -240, -90), checkLine('ПОРУЧИТЕЛЬ СЫНА', w('поручителем') + .1, 'v', -240, 0), checkLine('СВОЙ НА ПРАЗДНИКАХ', w('праздниках') + .05, 'v', -240, 90)];
  S(w('старых') - .3, 300, 1380, 1.5, -.01);
  slam([['ПОЛТОРА ГОДА', w('полтора')], ['НА ФБР', w('фбр')]], { size: 170, y: H * .5, out: w('сегодня') - .2, seed: 7, red: [1], shake: 12 });
  // "Сегодня мы открываем досье на Большого Пусси..."
  const tD = w('досье');
  const fo = item({ draw: drawFolder, x: -1300, y: 2450, w: 1100, h: 720, rot: -.03, order: ORD++, tIn: w('сегодня') - .1, dur: .25, enter: 'slide', dx: -700, dy: 0, tab: 'ДОСЬЕ', snd: false,
    text: (g, t, it) => {
      g.fillStyle = 'rgba(40,25,10,.85)'; g.font = `400 32px ${MONO}`; g.textAlign = 'center'; g.fillText(CASE_LABEL, 0, -230);
      const p = prog(t, tD, tD + .5); if (p > 0) { g.globalAlpha *= p; g.fillStyle = INK; g.font = `700 120px ${HEAD}`; g.fillText('БОЛЬШОЙ', 0, -20); g.fillText('ПУССИ', 0, 105); g.globalAlpha = 1; }
      drawStamp(g, it.st, t);
    } });
  fo.st = stamp('КРЫСА', w('предателя') + .1, { x: 200, y: 250, size: 70, rot: -.08 });
  sfx('slide', w('сегодня') - .3, { dur: .3 });
  S(w('сегодня') - .1, -1300, 2460, 1.3, -.02, { dz: .12 });
  TAPES.push({ t0: w('спойлеры') - .3, dur: .5, ang: -.2, y: -60, dir: 1, out: T_END - .45 });
  TAPES.push({ t0: w('шести') - .3, dur: .45, ang: .16, y: 170, dir: -1, out: T_END - .4 });
  buildShots(T_END);
  ensureFG([[-2600, 500, 'pen', 1.2, 1.85, .4], [2600, 100, 'smoke', 1.6, 1.5, 0, .7], [200, 3200, 'smoke', 1.6, 1.5, 0, .6]]);
}

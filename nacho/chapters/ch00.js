// 00 · cold open + intro: the desert, the name, Saul's line, three masters, the case file
CH_V0 = 0;
const [T_START, T_END] = chRange(0);
FADE_IN = .01; FADE_OUT = .5;
function buildScenes() {
  const w = (s, n = 1, e = false) => Wt(s, n, e);
  dress(1); lampOn(.25);

  // 1 · "Пустыня. Вокруг — люди картеля, кузены, Гектор в кресле"
  WIDE(0, -150, -150, .62, { quiet: true, to: [-400, -260, .78] });
  P('fin_wide', w('пустыня') + .05, -1000, -560, { w: 640, rot: -.04, bri: 1.35, label: 'ПУСТЫНЯ · 6×03', chain: 'start' });
  P('fin_hector', w('картеля') + .05, -250, -620, { w: 560, rot: .03, bri: 1.4, off: 1, cap: 'люди картеля', capColor: INK });
  P('fin_cousins', w('кузены') + .05, 450, -560, { w: 600, rot: -.02, bri: 1.4, label: 'КУЗЕНЫ · ГЕКТОР', off: 2.5 });
  // 2 · "Посередине стоит человек со связанными руками" — the man
  const pn = P('fin_nacho', w('посередине') + .05, 1150, -420, { w: 720, rot: .025, bri: 1.5, playFor: 9, flash: .45, shake: 12 });
  pn.pens = [mark(ringPts(40, -40, 130, 150, 1.12, 5), w('связанными') + .1, .45)];
  S(w('знает') - .05, 1170, -470, 3.2, .02, { dz: .1 });
  [w('знает'), w('умрёт') + .1, w('думает') + .1].forEach(t => sfx('heart', t));
  slam([['ЧТОБЫ', w('чтобы')], ['ВЫЖИЛ', w('выжил')], ['ОТЕЦ', w('отец')]], { size: 170, y: H * .78, out: w('зовут') - .25, seed: 3, red: [2] });

  // 3 · "Его зовут Игнасио Варга. Все зовут его просто Начо." — the name card
  const tN = w('зовут');
  const pf = P('nachoface', tN + .05, -900, 450, { w: 760, rot: -.02, bri: 1.2, flash: .5, shake: 10, z: 1.5, chain: false });
  pf.label = dymo('ИГНАСИО ВАРГА', w('игнасио') + .05, { size: 46 });
  pf.stamps = [stamp('НАЧО', w('начо') + .02, { x: 160, y: -60, size: 110, rot: -.14, shake: 14 })];

  // 4 · "В «Во все тяжкие» его нет. Его имя мелькает один раз: Сол в пустыне кричит..."
  const pg = P('saulgrave', w('=во') + .05, 0, 520, { w: 600, rot: .04, bri: 2.0, off: .5, label: '«ВО ВСЕ ТЯЖКИЕ» · 2×08' });
  pg.stamps = [stamp('НЕТ', w('нет') + .02, { x: 0, y: -40, size: 90, rot: -.12 })];
  const ps = P('saulmask', w('сол') - .05, 750, 560, { w: 620, rot: -.03, bri: 1.9, off: 1, cap: '«это всё Игнасио!»' });
  tape('d_saul2', { tc: 1826.7, tag: '«ВО ВСЕ ТЯЖКИЕ» · 2×08', bri: 1.9, subs: [[.1, 1.38, 'НЕТ! Я НИ ПРИ ЧЁМ!'], [1.42, 2.95, 'ЭТО ВСЁ ИГНАСИО!', 'ИГНАСИО']] });

  // 5 · "А в «Лучше звоните Солу» — один из самых трагичных героев. Умный, осторожный, хладнокровный."
  const tB = w('лучше');
  const nb = note(1500, 400, tB + .05, [['«ЛУЧШЕ ЗВОНИТЕ СОЛУ»', tB + .1, 34], ['самый трагичный герой', w('трагичных') - .1, 30]], { w: 700 });
  const cl = card({ x: 1500, y: 860, w: 620, h: 330, rot: -.02, order: ORD++, lined: true, tIn: w('умный') - .3, dur: .25, enter: 'slide', dx: 500, dy: 100, text: (g, t, it) => drawChecks(g, t, it.cl, `700 34px ${MONO}`) });
  cl.cl = [checkLine('УМНЫЙ', w('умный') + .1, 'v', -200, -70), checkLine('ОСТОРОЖНЫЙ', w('осторожный') + .1, 'v', -200, 10), checkLine('ХЛАДНОКРОВНЫЙ', w('хладнокровный') + .1, 'v', -200, 90)];
  S(w('умный') - .3, 1500, 760, 1.55, -.01);

  // 6 · three masters — Salamancas, Gus, Salamancas again; "мечтал только об одном: уйти"
  const fs = faces(0, 1500, [['hectorface', 'САЛАМАНКИ', w('служил') + .2], ['gusface', 'ГУС ФРИНГ', w('гусу') + .05], ['lalogrin', 'СНОВА САЛАМАНКИ', w('снова') + .1]], { w: 400, gap: 470 });
  S(w('служил') - .1, 0, 1530, 1.28, 0, { dx: 120 });
  slam([['УЙТИ', w('уйти')]], { size: 240, y: H * .5, out: w('сегодня', 2) - .2, seed: 7, red: [0], shake: 16 });

  // 7 · "Сегодня мы открываем досье на Игнасио Варгу. Дальше спойлеры..." — the case file
  const tD = w('досье');
  const fo = item({ draw: drawFolder, x: -1300, y: 1450, w: 1100, h: 720, rot: -.03, order: ORD++, tIn: w('сегодня', 2) - .1, dur: .25, enter: 'slide', dx: -700, dy: 0, tab: 'ДОСЬЕ', snd: false,
    text: (g, t, it) => {
      g.fillStyle = 'rgba(40,25,10,.85)'; g.font = `400 32px ${MONO}`; g.textAlign = 'center'; g.fillText(CASE_LABEL, 0, -230);
      const p = prog(t, tD, tD + .5); if (p > 0) { g.globalAlpha *= p; g.fillStyle = INK; g.font = `700 150px ${HEAD}`; g.fillText('НАЧО ВАРГА', 0, 30); g.globalAlpha = 1; }
      drawStamp(g, it.st, t);
    } });
  fo.st = stamp('СОВЕРШЕННО СЕКРЕТНО', w('варгу') + .1, { x: 160, y: 200, size: 54, rot: -.08 });
  sfx('slide', w('сегодня', 2) - .3, { dur: .3 });
  S(w('сегодня', 2) - .1, -1300, 1460, 1.3, -.02, { dz: .12 });
  TAPES.push({ t0: w('спойлеры') - .3, dur: .5, ang: -.2, y: -60, dir: 1, out: T_END - .45 });
  TAPES.push({ t0: w('шести') - .3, dur: .45, ang: .16, y: 170, dir: -1, out: T_END - .4 });

  buildShots(T_END);
  ensureFG([[-2600, 500, 'pen', 1.2, 1.85, .4], [2600, 100, 'smoke', 1.6, 1.5, 0, .7], [200, 2600, 'smoke', 1.6, 1.5, 0, .6]]);
}

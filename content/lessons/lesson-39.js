export const lesson = {
  slug: "motion-verb-prefixes",
  level: "B1",
  module: "Módulo 3b — Prefijos de dirección",
  order: 9,
  title: "Prefijos de dirección con verbos de movimiento",
  vocabulary: [
    { ru: "прийти", transliteration: "priyti", es: "llegar (a pie)" },
    { ru: "уйти", transliteration: "uyti", es: "irse, partir (a pie)" },
    { ru: "выйти", transliteration: "vyyti", es: "salir (a pie)" },
    { ru: "приехать", transliteration: "priyekhat'", es: "llegar (en vehículo)" },
    { ru: "уехать", transliteration: "uyekhat'", es: "irse, partir (en vehículo)" },
    { ru: "выехать", transliteration: "vyyekhat'", es: "salir (en vehículo)" },
  ],
  grammarPoint: {
    title: "Prefijos de dirección con verbos de movimiento",
    explanation:
      "Los prefijos cambian el sentido de un verbo de movimiento: при- indica llegada, у- indica partida, y вы- indica salida de un lugar cerrado. Funcionan igual con los verbos a pie (идти) y en vehículo (ехать).",
    tables: [
      {
        title: "Prefijos con ехать (en vehículo)",
        columns: ["Prefijo", "Verbo", "Significado"],
        rows: [
          ["при-", "приехать", "llegar (en vehículo)"],
          ["у-", "уехать", "irse, partir"],
          ["вы-", "выехать", "salir (de un lugar, en vehículo)"],
        ],
      },
      {
        title: "Los mismos prefijos con идти (a pie)",
        columns: ["Prefijo", "Verbo", "Significado"],
        rows: [
          ["при-", "прийти", "llegar (a pie)"],
          ["у-", "уйти", "irse, partir"],
          ["вы-", "выйти", "salir (de un lugar, a pie)"],
        ],
        note: "El prefijo aporta el mismo significado a los dos verbos base: solo cambia si el movimiento es a pie o en vehículo.",
      },
    ],
    examples: [
      { ru: "Поезд приехал вовремя.", transliteration: "poyezd priyekhal vovremya.", es: "El tren llegó a tiempo." },
      { ru: "Мы уехали рано утром.", transliteration: "my uyekhali rano utrom.", es: "Nos fuimos temprano por la mañana." },
      { ru: "Он пришёл домой поздно.", transliteration: "on prishol domoy pozdno.", es: "Él llegó a casa tarde." },
      { ru: "Она ушла рано утром.", transliteration: "ona ushla rano utrom.", es: "Ella se fue temprano por la mañana." },
    ],
  },
  conversation: {
    title: "🚉 Когда ты приедешь?",
    lines: [
      {
        speaker: "A",
        transliteration: "kogda ty priyedesh' obratno?",
        segments: [{ ru: "Когда ты приедешь обратно?", es: "¿Cuándo vas a volver?" }],
      },
      {
        speaker: "B",
        transliteration: "ya uyedu v subbotu i priyedu domoy v voskresen'ye vecherom.",
        segments: [{ ru: "Я уеду в субботу и приеду домой в воскресенье вечером.", es: "Me iré el sábado y llegaré a casa el domingo por la noche." }],
      },
      {
        speaker: "A",
        transliteration: "a vo skol'ko ty vyyedesh' iz doma v subbotu?",
        segments: [{ ru: "А во сколько ты выедешь из дома в субботу?", es: "¿Y a qué hora saldrás de casa el sábado?" }],
      },
      {
        speaker: "B",
        transliteration: "ya vyyedu rano utrom, chtoby uspet' na poyezd.",
        segments: [{ ru: "Я выеду рано утром, чтобы успеть на поезд.", es: "Saldré temprano por la mañana, para llegar a tiempo al tren." }],
      },
      {
        speaker: "A",
        transliteration: "khorosho! pozvoni mnye, kogda pridyosh' domoy.",
        segments: [{ ru: "Хорошо! Позвони мне, когда придёшь домой.", es: "¡Bien! Llámame cuando llegues a casa." }],
      },
    ],
  },
  reading: {
    title: "Приезд и отъезд Игоря",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Утром Игорь вышел из дома и пошёл на вокзал пешком.", es: "Por la mañana, Ígor salió de casa y fue a pie hasta la estación." },
        ],
      },
      {
        segments: [
          { ru: "Поезд выехал ровно в девять часов и через три часа приехал в Новгород.", es: "El tren salió exactamente a las nueve y tres horas después llegó a Nóvgorod." },
        ],
      },
      {
        segments: [
          { ru: "Павел встретил друга на вокзале.", es: "Pável recibió a su amigo en la estación." },
        ],
      },
      {
        segments: [
          { ru: "Вечером Игорь понял, что нужно уезжать, потому что в понедельник у него работа.", es: "Por la noche, Ígor se dio cuenta de que tenía que irse, porque el lunes tenía trabajo." },
          { ru: "Он попрощался с Павлом и уехал на последнем поезде.", es: "Se despidió de Pável y se fue en el último tren." },
        ],
      },
      {
        segments: [
          { ru: "Он пообещал, что скоро снова приедет в Новгород.", es: "Prometió que pronto volvería a Nóvgorod." },
        ],
      },
    ],
  },
};

export const lesson = {
  slug: "futuro-planes",
  level: "A2",
  module: "Módulo 2 — Futuro y planes",
  order: 2,
  title: "Futuro y planes",
  vocabulary: [
    { ru: "Планировать", transliteration: "planirovat'", es: "Planear" },
    { ru: "Собираться", transliteration: "sobirat'sya", es: "Tener intención de / prepararse para" },
    { ru: "Поехать", transliteration: "poyekhat'", es: "Ir (en transporte, perfectivo)" },
    { ru: "Пойти", transliteration: "poyti", es: "Ir (a pie, perfectivo)" },
    { ru: "Идти", transliteration: "idti", es: "Ir / caminar (imperfectivo, a pie)" },
    { ru: "Ехать", transliteration: "yekhat'", es: "Ir / viajar (imperfectivo, en transporte)" },
    { ru: "Билет", transliteration: "bilyet", es: "Boleto" },
    { ru: "Путешествие", transliteration: "puteshestviye", es: "Viaje" },
    { ru: "Завтра", transliteration: "zavtra", es: "Mañana" },
    { ru: "Скоро", transliteration: "skoro", es: "Pronto" },
  ],
  grammarPoint: {
    title: "Futuro simple y futuro compuesto",
    explanation:
      "El ruso tiene dos formas de futuro: el futuro simple se forma conjugando un verbo perfectivo (поехать → я поеду) y expresa una acción puntual o completa; el futuro compuesto usa быть conjugado + infinitivo imperfectivo (я буду работать) y expresa una acción que se repetirá o durará.",
    tables: [
      {
        title: "Futuro simple vs. futuro compuesto",
        columns: ["Tipo de futuro", "Formación", "Ejemplo"],
        rows: [
          ["Simple", "verbo perfectivo conjugado", "я поеду (iré) / мы купим (compraremos)"],
          ["Compuesto", "быть conjugado + infinitivo imperfectivo", "я буду работать (voy a trabajar) / она будет учиться (ella va a estudiar)"],
        ],
        note: "El futuro simple marca una acción puntual o completa; el compuesto marca una acción que se repite o dura en el tiempo.",
      },
    ],
    examples: [
      { ru: "Я поеду в Москву.", transliteration: "ya poyedu v Moskvu.", es: "Iré a Moscú. (futuro simple)" },
      { ru: "Я буду работать завтра.", transliteration: "ya budu rabotat' zavtra.", es: "Voy a trabajar mañana. (futuro compuesto)" },
      { ru: "Мы купим билеты.", transliteration: "my kupim bilyety.", es: "Compraremos los boletos. (futuro simple)" },
      { ru: "Она будет учиться в университете.", transliteration: "ona budet uchit'sya v universitete.", es: "Ella va a estudiar en la universidad. (futuro compuesto)" },
    ],
  },
  conversation: {
    title: "✈️ Planificando un viaje",
    lines: [
      {
        speaker: "A",
        transliteration: "kakiye u tebya plany na leto?",
        segments: [{ ru: "Какие у тебя планы на лето?", es: "¿Qué planes tienes para el verano?" }],
      },
      {
        speaker: "B",
        transliteration: "ya poyedu v Sochi. uzhe kupil bilyety.",
        segments: [
          { ru: "Я поеду в Сочи.", es: "Iré a Sochi." },
          { ru: "Уже купил билеты.", es: "Ya compré los boletos." },
        ],
      },
      {
        speaker: "A",
        transliteration: "zdorovo! a chto ty budesh' tam delat'?",
        segments: [
          { ru: "Здорово!", es: "¡Qué bien!" },
          { ru: "А что ты будешь там делать?", es: "¿Y qué vas a hacer allí?" },
        ],
      },
      {
        speaker: "B",
        transliteration: "budu otdykhat' na more i mnogo gulyat'.",
        segments: [{ ru: "Буду отдыхать на море и много гулять.", es: "Voy a descansar en el mar y pasear mucho." }],
      },
      {
        speaker: "A",
        transliteration: "ya tozhe skoro poyedu v puteshestviye!",
        segments: [{ ru: "Я тоже скоро поеду в путешествие!", es: "¡Yo también voy a ir de viaje pronto!" }],
      },
    ],
  },
  reading: {
    title: "El viaje de Katia por Europa",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Летом Катя и её муж поедут в путешествие по Европе.", es: "En el verano Katia y su esposo irán de viaje por Europa." },
          { ru: "Они уже купили билеты на самолёт и забронировали гостиницы.", es: "Ya compraron los boletos de avión y reservaron los hoteles." },
        ],
      },
      {
        segments: [
          { ru: "Сначала они полетят в Италию.", es: "Primero volarán a Italia." },
          { ru: "Там они будут гулять по старым улицам, смотреть музеи и есть настоящую итальянскую пиццу.", es: "Allí van a caminar por las calles antiguas, visitar museos y comer auténtica pizza italiana." },
          { ru: "Катя говорит, что будет фотографировать каждый день.", es: "Katia dice que va a tomar fotos todos los días." },
        ],
      },
      {
        segments: [
          { ru: "Потом они поедут во Францию на поезде.", es: "Luego irán a Francia en tren." },
          { ru: "В Париже они посетят Эйфелеву башню и погуляют вдоль реки.", es: "En París visitarán la Torre Eiffel y pasearán a lo largo del río." },
          { ru: "Муж Кати хочет попробовать французские вина и сыры.", es: "El esposo de Katia quiere probar vinos y quesos franceses." },
        ],
      },
      {
        segments: [
          { ru: "В конце путешествия они вернутся домой на самолёте.", es: "Al final del viaje regresarán a casa en avión." },
          { ru: "Катя уверена, что это будет незабываемое лето.", es: "Katia está segura de que será un verano inolvidable." },
          { ru: "Она уже начала планировать следующую поездку — может быть, в Испанию!", es: "Ya empezó a planear el próximo viaje — ¡tal vez a España!" },
        ],
      },
    ],
  },
};

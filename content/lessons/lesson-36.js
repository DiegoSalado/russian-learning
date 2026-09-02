export const lesson = {
  slug: "compound-future",
  level: "A2",
  module: "Módulo 2b — Futuro compuesto",
  order: 4,
  title: "Futuro compuesto",
  vocabulary: [
    { ru: "Отдыхать", transliteration: "otdykhat'", es: "Descansar" },
    { ru: "Учиться", transliteration: "uchit'sya", es: "Estudiar (en una institución)" },
    { ru: "Работать", transliteration: "rabotat'", es: "Trabajar" },
  ],
  grammarPoint: {
    title: "Futuro compuesto",
    explanation:
      "El futuro compuesto se forma con быть conjugado en futuro + infinitivo imperfectivo (я буду работать). Expresa una acción que se repetirá, durará o seguirá en el tiempo — no un hecho puntual como el futuro simple.",
    tables: [
      {
        title: "Conjugación de быть en futuro + infinitivo",
        columns: ["Pronombre", "быть", "Ejemplo"],
        rows: [
          ["Я", "буду", "буду работать"],
          ["Ты", "будешь", "будешь отдыхать"],
          ["Он / Она", "будет", "будет учиться"],
          ["Мы", "будем", "будем гулять"],
          ["Вы", "будете", "будете работать"],
          ["Они", "будут", "будут отдыхать"],
        ],
        note: "El infinitivo que acompaña a быть siempre es imperfectivo — describe un proceso, no una acción completa.",
      },
    ],
    examples: [
      { ru: "Я буду работать завтра.", transliteration: "ya budu rabotat' zavtra.", es: "Voy a trabajar mañana." },
      { ru: "Она будет учиться в университете.", transliteration: "ona budet uchit'sya v universitete.", es: "Ella va a estudiar en la universidad." },
      { ru: "Мы будем отдыхать на море.", transliteration: "my budem otdykhat' na morye.", es: "Vamos a descansar en el mar." },
      { ru: "Что ты будешь делать вечером?", transliteration: "chto ty budesh' delat' vecherom?", es: "¿Qué vas a hacer por la noche?" },
    ],
  },
  conversation: {
    title: "🏖️ Что ты будешь делать?",
    lines: [
      {
        speaker: "A",
        transliteration: "chto ty budesh' delat' zavtra?",
        segments: [{ ru: "Что ты будешь делать завтра?", es: "¿Qué vas a hacer mañana?" }],
      },
      {
        speaker: "B",
        transliteration: "ya budu otdykhat' i gulyat' ves' den'.",
        segments: [{ ru: "Я буду отдыхать и гулять весь день.", es: "Voy a descansar y pasear todo el día." }],
      },
      {
        speaker: "A",
        transliteration: "a chto ty budesh' delat' vecherom?",
        segments: [{ ru: "А что ты будешь делать вечером?", es: "¿Y qué vas a hacer por la noche?" }],
      },
      {
        speaker: "B",
        transliteration: "budu otdykhat' na more i mnogo gulyat'.",
        segments: [{ ru: "Буду отдыхать на море и много гулять.", es: "Voy a descansar en el mar y pasear mucho." }],
      },
      {
        speaker: "A",
        transliteration: "zdorovo! a ya budu rabotat' ves' den'.",
        segments: [{ ru: "Здорово! А я буду работать весь день.", es: "¡Qué bien! Yo voy a trabajar todo el día." }],
      },
    ],
  },
  reading: {
    title: "Планы Кати на лето",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Катя говорит, что будет фотографировать каждый день.", es: "Katia dice que va a tomar fotos todos los días." },
        ],
      },
      {
        segments: [
          { ru: "В Италии они будут гулять по старым улицам и смотреть музеи.", es: "En Italia van a caminar por las calles antiguas y visitar museos." },
        ],
      },
      {
        segments: [
          { ru: "Катя уверена, что это будет незабываемое лето.", es: "Katia está segura de que será un verano inolvidable." },
        ],
      },
      {
        segments: [
          { ru: "Она будет отдыхать и много гулять каждый день.", es: "Va a descansar y pasear mucho todos los días." },
        ],
      },
    ],
  },
};

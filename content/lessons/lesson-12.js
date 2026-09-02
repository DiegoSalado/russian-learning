export const lesson = {
  slug: "future-plans",
  level: "A2",
  module: "Módulo 2 — Futuro simple",
  order: 3,
  title: "Futuro simple",
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
    title: "Futuro simple",
    explanation:
      "El futuro simple en ruso se forma conjugando un verbo perfectivo, igual que el presente pero con significado futuro (поехать → я поеду). Expresa una acción puntual o completa: algo que va a pasar una vez, no un hábito ni algo que dure en el tiempo.",
    tables: [
      {
        title: "Formación del futuro simple",
        columns: ["Tipo de futuro", "Formación", "Ejemplo"],
        rows: [
          ["Simple", "verbo perfectivo conjugado", "я поеду (iré) / мы купим (compraremos)"],
        ],
        note: "El futuro simple marca una acción puntual o completa, en un solo momento.",
      },
    ],
    examples: [
      { ru: "Я поеду в Москву.", transliteration: "ya poyedu v Moskvu.", es: "Iré a Moscú." },
      { ru: "Мы купим билеты.", transliteration: "my kupim bilyety.", es: "Compraremos los boletos." },
      { ru: "Она поедет в Италию.", transliteration: "ona poyedet v Italiyu.", es: "Ella irá a Italia." },
      { ru: "Мы полетим в Париж.", transliteration: "my poletim v Parizh.", es: "Volaremos a París." },
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
        transliteration: "ya tozhe skoro poyedu v puteshestviye!",
        segments: [{ ru: "Я тоже скоро поеду в путешествие!", es: "¡Yo también voy a ir de viaje pronto!" }],
      },
    ],
  },
  reading: {
    title: "Летние планы Кати",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Летом Катя и её муж поедут в путешествие по Европе.", es: "En el verano Katia y su esposo irán de viaje por Europa." },
          { ru: "Они уже купили билеты на самолёт.", es: "Ya compraron los boletos de avión." },
        ],
      },
      {
        segments: [
          { ru: "Сначала они полетят в Италию, а потом поедут во Францию на поезде.", es: "Primero volarán a Italia, y luego irán a Francia en tren." },
        ],
      },
      {
        segments: [
          { ru: "В конце путешествия они вернутся домой на самолёте.", es: "Al final del viaje regresarán a casa en avión." },
        ],
      },
    ],
  },
};

export const lesson = {
  slug: "accusative-case",
  level: "A2",
  module: "Módulo 3b — Caso acusativo",
  order: 6,
  title: "Caso acusativo",
  vocabulary: [
    { ru: "Видеть", transliteration: "videt'", es: "Ver" },
    { ru: "Книгу (вин.)", transliteration: "knigu", es: "al libro / el libro (acusativo)" },
    { ru: "Брата (вин.)", transliteration: "brata", es: "al hermano (acusativo)" },
  ],
  grammarPoint: {
    title: "Caso acusativo",
    explanation:
      "El acusativo marca el objeto directo del verbo — sobre qué o a quién recae la acción. Los sustantivos femeninos en -а cambian a -у (книга → книгу); los masculinos inanimados no cambian; los masculinos animados (personas, animales) coinciden con el genitivo.",
    tables: [
      {
        title: "Declinación: книга y брат en acusativo",
        columns: ["Caso", "книга", "брат"],
        rows: [
          ["Nominativo", "книга", "брат"],
          ["Acusativo", "книгу", "брата"],
        ],
        note: "Брат es animado, por eso su acusativo coincide con el genitivo (брата); книга es inanimado, por eso su acusativo cambia a -у.",
      },
    ],
    examples: [
      { ru: "Я читаю книгу.", transliteration: "ya chitayu knigu.", es: "Yo leo el libro. (acusativo, femenino cambia)" },
      { ru: "Он видит брата.", transliteration: "on vidit brata.", es: "Él ve al hermano. (acusativo animado, igual al genitivo)" },
      { ru: "Я хочу купить роман.", transliteration: "ya khochu kupit' roman.", es: "Quiero comprar una novela. (acusativo, masculino inanimado no cambia)" },
      { ru: "Я вижу подругу.", transliteration: "ya vizhu podrugu.", es: "Veo a mi amiga. (acusativo, femenino cambia)" },
    ],
  },
  conversation: {
    title: "👀 Что ты видишь?",
    lines: [
      {
        speaker: "A",
        transliteration: "chto ty vidish'?",
        segments: [{ ru: "Что ты видишь?", es: "¿Qué ves?" }],
      },
      {
        speaker: "B",
        transliteration: "ya vizhu knigu i moy novyy roman.",
        segments: [{ ru: "Я вижу книгу и мой новый роман.", es: "Veo el libro y mi novela nueva." }],
      },
      {
        speaker: "A",
        transliteration: "a kogo ty vidish' tam?",
        segments: [{ ru: "А кого ты видишь там?", es: "¿Y a quién ves allá?" }],
      },
      {
        speaker: "B",
        transliteration: "ya vizhu brata i podrugu.",
        segments: [{ ru: "Я вижу брата и подругу.", es: "Veo a mi hermano y a mi amiga." }],
      },
      {
        speaker: "A",
        transliteration: "ty khochesh' prochitat' etot roman?",
        segments: [{ ru: "Ты хочешь прочитать этот роман?", es: "¿Quieres leer esa novela?" }],
      },
      {
        speaker: "B",
        transliteration: "da, ya ochen' khochu prochitat' roman i knigu.",
        segments: [{ ru: "Да, я очень хочу прочитать роман и книгу.", es: "Sí, tengo muchas ganas de leer la novela y el libro." }],
      },
    ],
  },
  reading: {
    title: "Катя любит читать",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Катя любит читать книги и романы.", es: "Katia ama leer libros y novelas." },
        ],
      },
      {
        segments: [
          { ru: "Сегодня она хочет прочитать новый роман.", es: "Hoy quiere leer una novela nueva." },
        ],
      },
      {
        segments: [
          { ru: "Она видит брата в магазине и просит книгу.", es: "Ve a su hermano en la tienda y le pide un libro." },
        ],
      },
      {
        segments: [
          { ru: "Брат даёт ей книгу, и Катя читает роман весь вечер.", es: "El hermano le da el libro, y Katia lee la novela toda la noche." },
        ],
      },
    ],
  },
};

export const lesson = {
  slug: "b1-vocab-1",
  level: "B1",
  type: "vocabulary",
  module: "Vocabulario 1",
  order: 1,
  title: "Vocabulario 1",
  topics: [
    {
      title: "Sustantivos y adjetivos",
      vocabulary: [
        { ru: "Время", transliteration: "vremya", es: "Tiempo" },
        { ru: "Итог", transliteration: "itog", es: "Resultado final / balance" },
        { ru: "Следующий", transliteration: "sleduyushchiy", es: "Siguiente / próximo" },
      ],
      fillBlank: {
        title: "Practicá los sustantivos y adjetivos",
        instructions: "Completá cada frase con la palabra correcta.",
        wordBank: [
          { ru: "время", transliteration: "vremya" },
          { ru: "итог", transliteration: "itog" },
          { ru: "следующий", transliteration: "sleduyushchiy" },
        ],
        sentences: [
          { before: "", answer: "время", after: " идёт быстро.", es: "El tiempo pasa rápido." },
          { before: "Хороший ", answer: "итог", after: ".", es: "Un buen resultado final." },
          { before: "", answer: "следующий", after: " год будет лучше.", es: "El próximo año será mejor." },
        ],
      },
    },
    {
      title: "Verbos",
      vocabulary: [
        { ru: "Остаться", transliteration: "ostat'sya", es: "Quedarse (perfectivo)" },
        { ru: "Закрыться", transliteration: "zakryt'sya", es: "Cerrarse" },
        { ru: "Встретить", transliteration: "vstretit'", es: "Encontrar(se) con alguien (perfectivo)" },
      ],
      fillBlank: {
        title: "Practicá los verbos",
        instructions: "Completá cada frase con la forma correcta del verbo.",
        wordBank: [
          { ru: "закроется", transliteration: "zakroyetsya" },
          { ru: "останусь", transliteration: "ostanus'" },
          { ru: "встретит", transliteration: "vstretit" },
        ],
        sentences: [
          { before: "Магазин скоро ", answer: "закроется", after: ".", es: "La tienda cerrará pronto." },
          { before: "Я ", answer: "останусь", after: " дома.", es: "Me quedaré en casa." },
          { before: "Он ", answer: "встретит", after: " друга в городе.", es: "Él se encontrará con un amigo en la ciudad." },
        ],
      },
    },
    {
      title: "Adverbios",
      vocabulary: [
        { ru: "Наконец", transliteration: "nakonets", es: "Finalmente / por fin" },
        { ru: "Рано", transliteration: "rano", es: "Temprano" },
        { ru: "Даже", transliteration: "dazhe", es: "Incluso" },
        { ru: "Всегда", transliteration: "vsegda", es: "Siempre" },
      ],
      fillBlank: {
        title: "Practicá los adverbios",
        instructions: "Completá cada frase con la palabra correcta.",
        wordBank: [
          { ru: "наконец", transliteration: "nakonets" },
          { ru: "рано", transliteration: "rano" },
          { ru: "всегда", transliteration: "vsegda" },
          { ru: "даже", transliteration: "dazhe" },
        ],
        sentences: [
          { before: "", answer: "наконец", after: " мы приехали!", es: "¡Por fin llegamos!" },
          { before: "Он встаёт очень ", answer: "рано", after: ".", es: "Él se levanta muy temprano." },
          { before: "Она ", answer: "всегда", after: " помогает.", es: "Ella siempre ayuda." },
          { before: "Он не пришёл, ", answer: "даже", after: " не позвонил.", es: "No vino, ni siquiera llamó." },
        ],
      },
    },
  ],
};

export const lesson = {
  slug: "b2-vocab-1",
  level: "B2",
  type: "vocabulary",
  module: "Vocabulario 1",
  order: 1,
  title: "Vocabulario 1",
  topics: [
    {
      title: "Sustantivos",
      vocabulary: [
        { ru: "Результат", transliteration: "rezul'tat", es: "Resultado" },
        { ru: "Отец", transliteration: "otets", es: "Padre" },
      ],
      fillBlank: {
        title: "Practicá los sustantivos",
        instructions: "Completá cada frase con la palabra correcta.",
        wordBank: [
          { ru: "результат", transliteration: "rezul'tat" },
          { ru: "отец", transliteration: "otets" },
        ],
        sentences: [
          { before: "Это хороший ", answer: "результат", after: ".", es: "Este es un buen resultado." },
          { before: "Мой ", answer: "отец", after: " работает врачом.", es: "Mi padre trabaja de médico." },
        ],
      },
    },
    {
      title: "Verbos",
      vocabulary: [
        { ru: "Привыкать", transliteration: "privykat'", es: "Acostumbrarse" },
        { ru: "Мочь", transliteration: "moch'", es: "Poder" },
      ],
      fillBlank: {
        title: "Practicá los verbos",
        instructions: "Completá cada frase con la forma correcta del verbo.",
        wordBank: [
          { ru: "привыкает", transliteration: "privykayet" },
          { ru: "может", transliteration: "mozhet" },
        ],
        sentences: [
          { before: "Он быстро ", answer: "привыкает", after: " к новому городу.", es: "Él se acostumbra rápido a la nueva ciudad." },
          { before: "Она ", answer: "может", after: " помочь.", es: "Ella puede ayudar." },
        ],
      },
    },
    {
      title: "Adjetivos",
      vocabulary: [
        { ru: "Крупный", transliteration: "krupnyy", es: "Grande / importante" },
        { ru: "Подобный", transliteration: "podobnyy", es: "Similar" },
        { ru: "Сложный", transliteration: "slozhnyy", es: "Complejo / difícil" },
        { ru: "Реальный", transliteration: "real'nyy", es: "Real" },
      ],
      fillBlank: {
        title: "Practicá los adjetivos",
        instructions: "Completá cada frase con la palabra correcta.",
        wordBank: [
          { ru: "крупный", transliteration: "krupnyy" },
          { ru: "подобный", transliteration: "podobnyy" },
          { ru: "сложный", transliteration: "slozhnyy" },
          { ru: "реальный", transliteration: "real'nyy" },
        ],
        sentences: [
          { before: "Это ", answer: "крупный", after: " город.", es: "Esta es una ciudad grande." },
          { before: "Это ", answer: "подобный", after: " вопрос.", es: "Esta es una pregunta similar." },
          { before: "Этот текст очень ", answer: "сложный", after: ".", es: "Este texto es muy complejo." },
          { before: "Это ", answer: "реальный", after: " план.", es: "Este es un plan realista." },
        ],
      },
    },
  ],
};

export const lesson = {
  slug: "c2-vocab-1",
  level: "C2",
  type: "vocabulary",
  module: "Vocabulario 1",
  order: 1,
  title: "Vocabulario 1",
  topics: [
    {
      title: "Sustantivos",
      vocabulary: [
        { ru: "Звезда", transliteration: "zvezda", es: "Estrella" },
        { ru: "Память", transliteration: "pamyat'", es: "Memoria / recuerdo" },
        { ru: "Темнота", transliteration: "temnota", es: "Oscuridad" },
        { ru: "Тревога", transliteration: "trevoga", es: "Inquietud, alarma" },
        { ru: "Стихотворение", transliteration: "stikhotvoreniye", es: "Poema" },
        { ru: "Улыбка", transliteration: "ulybka", es: "Sonrisa" },
      ],
      fillBlank: {
        title: "Practicá los sustantivos",
        instructions: "Completá cada frase con la palabra correcta.",
        wordBank: [
          { ru: "звезда", transliteration: "zvezda" },
          { ru: "память", transliteration: "pamyat'" },
          { ru: "темнота", transliteration: "temnota" },
          { ru: "тревога", transliteration: "trevoga" },
          { ru: "стихотворение", transliteration: "stikhotvoreniye" },
          { ru: "улыбка", transliteration: "ulybka" },
        ],
        sentences: [
          { before: "На небе одна ", answer: "звезда", after: ".", es: "En el cielo hay una sola estrella." },
          { before: "У неё прекрасная ", answer: "память", after: ".", es: "Ella tiene una memoria excelente." },
          { before: "В комнате была полная ", answer: "темнота", after: ".", es: "En la habitación había total oscuridad." },
          { before: "Его лицо выдавало ", answer: "тревога", after: "у.", es: "Su cara delataba inquietud." },
          { before: "Она написала новое ", answer: "стихотворение", after: ".", es: "Ella escribió un poema nuevo." },
          { before: "У него добрая ", answer: "улыбка", after: ".", es: "Él tiene una sonrisa bondadosa." },
        ],
      },
    },
    {
      title: "Verbos y adjetivos",
      vocabulary: [
        { ru: "Сохранить", transliteration: "sokhranit'", es: "Preservar, conservar (perfectivo)" },
        { ru: "Обидеться", transliteration: "obidet'sya", es: "Ofenderse (perfectivo)" },
        { ru: "Честный", transliteration: "chestnyy", es: "Honesto" },
      ],
      fillBlank: {
        title: "Practicá los verbos y adjetivos",
        instructions: "Completá cada frase con la forma correcta.",
        wordBank: [
          { ru: "сохранить", transliteration: "sokhranit'" },
          { ru: "обиделась", transliteration: "obidelas'" },
          { ru: "честный", transliteration: "chestnyy" },
        ],
        sentences: [
          { before: "Он хочет ", answer: "сохранить", after: " память об этом дне.", es: "Él quiere preservar el recuerdo de ese día." },
          { before: "Она ", answer: "обиделась", after: " на его слова.", es: "Ella se ofendió por sus palabras." },
          { before: "Он всегда очень ", answer: "честный", after: ".", es: "Él siempre es muy honesto." },
        ],
      },
    },
  ],
};

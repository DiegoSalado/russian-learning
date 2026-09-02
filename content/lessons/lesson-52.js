export const lesson = {
  slug: "discourse-particles",
  level: "C1",
  module: "Módulo 2b — Partículas discursivas",
  order: 5,
  title: "Partículas discursivas: же, ведь, -то, вот, вон",
  vocabulary: [
    { ru: "Же", transliteration: "zhe", es: "Partícula de énfasis o contraste" },
    { ru: "Ведь", transliteration: "ved'", es: "Partícula que refuerza algo obvio o ya sabido" },
    { ru: "-то", transliteration: "-to", es: "Sufijo que marca algo ya mencionado o vago" },
    { ru: "Вот", transliteration: "vot", es: "Aquí está / eso es (señala algo cercano)" },
    { ru: "Вон", transliteration: "von", es: "Allá (señala algo lejano)" },
  ],
  grammarPoint: {
    title: "Partículas discursivas: же, ведь, -то, вот, вон",
    explanation:
      "Las partículas rusas no tienen significado léxico propio — no se pueden traducir palabra por palabra — pero cambian el matiz de una frase: énfasis, contraste, obviedad o señalamiento. Dominarlas es lo que hace que el ruso hablado suene natural en vez de traducido.",
    tables: [
      {
        title: "Partículas discursivas frecuentes",
        columns: ["Partícula", "Función", "Ejemplo"],
        rows: [
          ["Же", "Énfasis o contraste", "Я же говорил тебе! (¡Si te lo dije!)"],
          ["Ведь", "Refuerza algo obvio o ya sabido", "Ведь это правда, не так ли? (Es verdad, ¿no?)"],
          ["-то", "Marca algo ya mencionado o un dejo de duda", "Книгу-то ты прочитал? (Y el libro, ¿lo leíste?)"],
          ["Вот", "Señala algo cercano o presente", "Вот твоя книга. (Aquí tenés tu libro.)"],
          ["Вон", "Señala algo lejano", "Вон там мой дом. (Allá está mi casa.)"],
        ],
        note: "-то se pega directamente a la palabra que matiza (книгу-то, деньги-то); las demás partículas son palabras independientes.",
      },
    ],
    examples: [
      { ru: "Я же говорил тебе, что это опасно!", transliteration: "ya zhe govoril tebe, chto eto opasno!", es: "¡Si te lo dije, que era peligroso!" },
      { ru: "Ты ведь помнишь меня?", transliteration: "ty ved' pomnish' menya?", es: "Te acordás de mí, ¿no?" },
      { ru: "А деньги-то у тебя есть?", transliteration: "a den'gi-to u tebya yest'?", es: "¿Y plata, tenés?" },
      { ru: "Вон он идёт!", transliteration: "von on idyot!", es: "¡Allá viene él!" },
    ],
  },
  conversation: {
    title: "🗣️ Разговор на улице",
    lines: [
      {
        speaker: "A",
        transliteration: "smotri, von idyot Anton!",
        segments: [{ ru: "Смотри, вон идёт Антон!", es: "¡Mirá, allá viene Antón!" }],
      },
      {
        speaker: "B",
        transliteration: "a on ved' obeshchal pozvonit' vchera.",
        segments: [{ ru: "А он ведь обещал позвонить вчера.", es: "Y él había prometido llamar ayer, ¿no?" }],
      },
      {
        speaker: "A",
        transliteration: "ya zhe govoril, chto on zabudet!",
        segments: [{ ru: "Я же говорил, что он забудет!", es: "¡Si te dije que se iba a olvidar!" }],
      },
      {
        speaker: "B",
        transliteration: "a rabota-to u nego yest'? on vsegda tak zanyat.",
        segments: [{ ru: "А работа-то у него есть? Он всегда так занят.", es: "Y trabajo, ¿tiene? Siempre está tan ocupado." }],
      },
      {
        speaker: "A",
        transliteration: "vot on! sprosi yego sama.",
        segments: [{ ru: "Вот он! Спроси его сама.", es: "¡Aquí está! Preguntale vos misma." }],
      },
    ],
  },
  reading: {
    title: "Забывчивый друг",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "У Антона есть один недостаток: он вечно всё забывает.", es: "Antón tiene un defecto: se olvida siempre de todo." },
          { ru: "«Ты же обещал прийти вовремя!» — говорила ему сестра каждый раз.", es: "«¡Si prometiste llegar a tiempo!», le decía su hermana cada vez." },
        ],
      },
      {
        segments: [
          { ru: "«А билеты-то у тебя с собой?» — спрашивала она, зная ответ заранее.", es: "«Y los boletos, ¿los tenés con vos?», le preguntaba, sabiendo la respuesta de antemano." },
          { ru: "Антон только разводил руками: «Ведь я точно их брал!»", es: "Antón solo se encogía de hombros: «¡Pero si de verdad los agarré!»" },
        ],
      },
      {
        segments: [
          { ru: "«Вот они, в твоём кармане», — говорила сестра, доставая билеты.", es: "«Acá están, en tu bolsillo», decía su hermana, sacando los boletos." },
          { ru: "«Вон там наш поезд!» — кричал Антон, и они бежали изо всех сил.", es: "«¡Allá está nuestro tren!», gritaba Antón, y corrían con todas sus fuerzas." },
        ],
      },
    ],
  },
};

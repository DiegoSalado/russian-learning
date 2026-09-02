export const lesson = {
  slug: "prepositional-case",
  level: "B1",
  module: "Módulo 2c — Caso preposicional",
  order: 5,
  title: "Caso preposicional: ¿dónde? ¿de qué?",
  vocabulary: [
    { ru: "лес", transliteration: "les", es: "bosque" },
    { ru: "сад", transliteration: "sad", es: "jardín" },
    { ru: "пол", transliteration: "pol", es: "piso, suelo" },
    { ru: "здание", transliteration: "zdaniye", es: "edificio" },
    { ru: "музей", transliteration: "muzey", es: "museo" },
    { ru: "думать", transliteration: "dumat'", es: "pensar" },
    { ru: "говорить", transliteration: "govorit'", es: "hablar" },
    { ru: "мечтать", transliteration: "mechtat'", es: "soñar (con algo)" },
  ],
  grammarPoint: {
    title: "Caso preposicional: ¿dónde? / ¿de qué?",
    explanation:
      "El preposicional es el único caso ruso que nunca aparece solo: siempre va con una preposición, sobre todo в (en), на (en/sobre) y о/об (sobre, acerca de). Sirve para decir dónde está algo (Я живу в Москве — Vivo en Moscú) o de qué se habla o piensa (Он думает о работе — Él piensa en el trabajo). Con esto ya se completan los seis casos del ruso.",
    tables: [
      {
        title: "Terminaciones del preposicional singular",
        columns: ["Género", "Terminación", "Ejemplo"],
        rows: [
          ["Masculino", "-е (consonante → -е)", "музей → в музее"],
          ["Masculino (grupo -у)", "-у (un grupo reducido de palabras frecuentes)", "лес → в лесу; сад → в саду; пол → на полу"],
          ["Femenino", "-а/-я → -е", "Москва → в Москве; Россия → в России"],
          ["Femenino en -ь", "-ь → -и", "дверь → о двери"],
          ["Neutro", "-о/-е → -е", "окно → в окне; здание → в здании"],
        ],
        note: "El grupo en -у (лес, сад, пол, лёд, шкаф, угол, аэропорт…) es una excepción frecuente que se aprende de memoria: solo aparece con в/на de lugar, no con о.",
      },
      {
        title: "Terminaciones del preposicional plural",
        columns: ["Terminación singular", "Terminación plural", "Ejemplo"],
        rows: [
          ["consonante / -а / -о", "-ах", "музей → музеях; книга → книгах; окно → окнах"],
          ["-ь / -я / -е", "-ях", "дверь → дверях; станция → станциях; здание → зданиях"],
        ],
      },
      {
        title: "Los tres usos principales",
        columns: ["Preposición", "Significado", "Ejemplo"],
        rows: [
          ["в", "en (dentro de un lugar)", "в Москве — en Moscú"],
          ["на", "en / sobre (una superficie, un evento)", "на уроке — en la clase"],
          ["о / об", "sobre, acerca de (un tema)", "о работе — sobre el trabajo; об этом — sobre esto"],
        ],
        note: "об se usa en vez de о cuando la siguiente palabra empieza con vocal (об Анне, об этом).",
      },
    ],
    examples: [
      { ru: "Я живу в Москве.", transliteration: "ya zhivu v moskve.", es: "Vivo en Moscú." },
      { ru: "Книга лежит на столе.", transliteration: "kniga lezhit na stole.", es: "El libro está sobre la mesa." },
      { ru: "Мы говорим о новом фильме.", transliteration: "my govorim o novom fil'me.", es: "Hablamos sobre la nueva película." },
      { ru: "Дети играют в саду.", transliteration: "deti igrayut v sadu.", es: "Los niños juegan en el jardín." },
      { ru: "Он мечтает о путешествии.", transliteration: "on mechtayet o puteshestvii.", es: "Él sueña con un viaje." },
    ],
  },
  conversation: {
    title: "🏛️ En el museo",
    lines: [
      {
        speaker: "A",
        transliteration: "gde ty byl vchera?",
        segments: [{ ru: "Где ты был вчера?", es: "¿Dónde estuviste ayer?" }],
      },
      {
        speaker: "B",
        transliteration: "ya byl v muzeye. tam ochen' interesno.",
        segments: [{ ru: "Я был в музее. Там очень интересно.", es: "Estuve en el museo. Ahí es muy interesante." }],
      },
      {
        speaker: "A",
        transliteration: "o chyom vy govorili s gidom?",
        segments: [{ ru: "О чём вы говорили с гидом?", es: "¿De qué hablaron con el guía?" }],
      },
      {
        speaker: "B",
        transliteration: "my govorili o russkoy istorii i o starykh gorodakh.",
        segments: [{ ru: "Мы говорили о русской истории и о старых городах.", es: "Hablamos sobre la historia rusa y sobre las ciudades antiguas." }],
      },
      {
        speaker: "A",
        transliteration: "a gde vy obedali posle muzeya?",
        segments: [{ ru: "А где вы обедали после музея?", es: "¿Y dónde almorzaron después del museo?" }],
      },
      {
        speaker: "B",
        transliteration: "v kafe na ploshchadi. my sideli na terrase i mechtali o sleduyushchey poyezdke.",
        segments: [{ ru: "В кафе на площади. Мы сидели на террасе и мечтали о следующей поездке.", es: "En un café en la plaza. Nos sentamos en la terraza y soñamos con el próximo viaje." }],
      },
    ],
  },
  reading: {
    title: "Письмо о поездке",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Дорогая Анна, я сейчас в Санкт-Петербурге.", es: "Querida Anna, ahora estoy en San Petersburgo." },
          { ru: "Я живу в маленькой гостинице в центре города.", es: "Vivo en un hotel pequeño en el centro de la ciudad." },
        ],
      },
      {
        segments: [
          { ru: "Вчера я был в Эрмитаже — это огромный музей на берегу реки.", es: "Ayer estuve en el Hermitage: es un museo enorme a orillas del río." },
          { ru: "Там я думал о тебе, потому что ты любишь искусство.", es: "Ahí pensé en ti, porque a ti te encanta el arte." },
        ],
      },
      {
        segments: [
          { ru: "Вечером я гулял в парке и сидел на скамейке у озера.", es: "Por la noche caminé en el parque y me senté en un banco junto al lago." },
          { ru: "Я мечтал о нашем следующем путешествии вместе.", es: "Soñé con nuestro próximo viaje juntos." },
        ],
      },
      {
        segments: [
          { ru: "Напиши мне о своих новостях. Целую, Иван.", es: "Escríbeme sobre tus novedades. Un beso, Iván." },
        ],
      },
    ],
  },
  fillBlank: {
    title: "Practicá el caso preposicional",
    instructions: "Completá cada frase con la forma preposicional del sustantivo entre paréntesis.",
    wordBank: [
      { ru: "Москве", transliteration: "moskve" },
      { ru: "музее", transliteration: "muzeye" },
      { ru: "столе", transliteration: "stole" },
      { ru: "саду", transliteration: "sadu" },
      { ru: "работе", transliteration: "rabote" },
      { ru: "фильме", transliteration: "fil'me" },
      { ru: "России", transliteration: "rossii" },
      { ru: "школе", transliteration: "shkole" },
    ],
    sentences: [
      { before: "Я живу в ", answer: "Москве", after: ".", es: "Vivo en Moscú. (Москва)" },
      { before: "Мы были в ", answer: "музее", after: ".", es: "Estuvimos en el museo. (музей)" },
      { before: "Книга лежит на ", answer: "столе", after: ".", es: "El libro está sobre la mesa. (стол)" },
      { before: "Дети играют в ", answer: "саду", after: ".", es: "Los niños juegan en el jardín. (сад)" },
      { before: "Он думает о ", answer: "работе", after: ".", es: "Él piensa en el trabajo. (работа)" },
      { before: "Мы говорим о новом ", answer: "фильме", after: ".", es: "Hablamos sobre la nueva película. (фильм)" },
      { before: "Она родилась в ", answer: "России", after: ".", es: "Ella nació en Rusia. (Россия)" },
      { before: "Мой сын учится в ", answer: "школе", after: ".", es: "Mi hijo estudia en la escuela. (школа)" },
    ],
  },
};

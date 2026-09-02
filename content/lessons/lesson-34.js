export const lesson = {
  slug: "adjective-endings",
  level: "A1",
  module: "Módulo 3b — Terminaciones del adjetivo",
  order: 5,
  title: "Terminaciones del adjetivo por género",
  vocabulary: [
    { ru: "Жёлтый", transliteration: "zholtyy", es: "Amarillo" },
    { ru: "Красный", transliteration: "krasnyy", es: "Rojo" },
    { ru: "Синий", transliteration: "siniy", es: "Azul" },
    { ru: "Зелёный", transliteration: "zelyonyy", es: "Verde" },
    { ru: "Чёрный", transliteration: "chornyy", es: "Negro" },
  ],
  grammarPoint: {
    title: "Terminaciones del adjetivo por género",
    explanation:
      "Los adjetivos rusos concuerdan en género y número con el sustantivo que acompañan: cambian su terminación según si el sustantivo es masculino, femenino, neutro o plural. Hay dos grupos principales: los adjetivos en -ый/-ой (como новый) y los adjetivos en -ий (como синий), cada uno con su propio patrón de terminaciones.",
    tables: [
      {
        title: "Terminaciones del adjetivo por género",
        columns: ["Adjetivo (grupo)", "Masculino", "Femenino", "Neutro", "Plural"],
        rows: [
          ["новый (grupo -ый)", "новый", "новая", "новое", "новые"],
          ["красный (grupo -ый)", "красный", "красная", "красное", "красные"],
          ["синий (grupo -ий)", "синий", "синяя", "синее", "синие"],
        ],
        note: "Grupo en -ой/-ый (masc.) → -ая (fem.) → -ое (neutro) → -ые (plural). Grupo en -ий (masc.) → -яя (fem.) → -ее (neutro) → -ие (plural). El adjetivo siempre concuerda en género y número con el sustantivo.",
      },
    ],
    examples: [
      { ru: "Большой дом", transliteration: "bol'shoy dom", es: "Casa grande (masculino)" },
      { ru: "Большая книга", transliteration: "bol'shaya kniga", es: "Libro grande (femenino)" },
      { ru: "Большое окно", transliteration: "bol'shoye okno", es: "Ventana grande (neutro)" },
      { ru: "Большие дома", transliteration: "bol'shiye doma", es: "Casas grandes (plural)" },
    ],
  },
  conversation: {
    title: "🎨 Colores en casa",
    lines: [
      {
        speaker: "A",
        transliteration: "eto tvoya novaya kniga?",
        segments: [{ ru: "Это твоя новая книга?", es: "¿Este es tu libro nuevo?" }],
      },
      {
        speaker: "B",
        transliteration: "da, eto moya novaya kniga. ona sinyaya.",
        segments: [
          { ru: "Да, это моя новая книга.", es: "Sí, este es mi libro nuevo." },
          { ru: "Она синяя.", es: "Es azul." },
        ],
      },
      {
        speaker: "A",
        transliteration: "a eto tvoy novyy karandash?",
        segments: [{ ru: "А это твой новый карандаш?", es: "¿Y este es tu lápiz nuevo?" }],
      },
      {
        speaker: "B",
        transliteration: "da, karandash zholtyy. a moyo okno zelyonoye.",
        segments: [
          { ru: "Да, карандаш жёлтый.", es: "Sí, el lápiz es amarillo." },
          { ru: "А моё окно зелёное.", es: "Y mi ventana es verde." },
        ],
      },
      {
        speaker: "A",
        transliteration: "krasivoye okno! moi knigi tozhe krasivyye.",
        segments: [{ ru: "Красивое окно! Мои книги тоже красивые.", es: "¡Qué ventana bonita! Mis libros también son bonitos." }],
      },
    ],
  },
  reading: {
    title: "Комната Анны",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "У Анны маленькая комната.", es: "Anna tiene una habitación pequeña." },
          { ru: "В комнате новый стол и старый стул.", es: "En la habitación hay una mesa nueva y una silla vieja." },
        ],
      },
      {
        segments: [
          { ru: "Стол чёрный, а стул красный.", es: "La mesa es negra, y la silla es roja." },
        ],
      },
      {
        segments: [
          { ru: "На столе жёлтая книга и синий карандаш.", es: "Sobre la mesa hay un libro amarillo y un lápiz azul." },
        ],
      },
      {
        segments: [
          { ru: "Окно в комнате зелёное.", es: "La ventana de la habitación es verde." },
          { ru: "Это удобная и красивая комната.", es: "Es una habitación cómoda y bonita." },
        ],
      },
    ],
  },
  fillBlank: {
    title: "Practicá las terminaciones del adjetivo",
    instructions: "Completá cada frase con la forma del adjetivo que concuerde en género y número con el sustantivo.",
    wordBank: [
      { ru: "новый", transliteration: "novyy" },
      { ru: "новая", transliteration: "novaya" },
      { ru: "красный", transliteration: "krasnyy" },
      { ru: "красная", transliteration: "krasnaya" },
      { ru: "синее", transliteration: "sineye" },
      { ru: "синие", transliteration: "siniye" },
      { ru: "жёлтый", transliteration: "zholtyy" },
      { ru: "чёрное", transliteration: "chornoye" },
      { ru: "зелёная", transliteration: "zelyonaya" },
      { ru: "чёрные", transliteration: "chornyye" },
    ],
    sentences: [
      { before: "Это ", answer: "новый", after: " дом.", es: "Esta es una casa nueva." },
      { before: "Это ", answer: "новая", after: " книга.", es: "Este es un libro nuevo." },
      { before: "Это ", answer: "красный", after: " стол.", es: "Esta es una mesa roja." },
      { before: "Это ", answer: "красная", after: " машина.", es: "Este es un auto rojo." },
      { before: "Это ", answer: "синее", after: " окно.", es: "Esta es una ventana azul." },
      { before: "Это ", answer: "синие", after: " окна.", es: "Estas son ventanas azules." },
      { before: "Это ", answer: "жёлтый", after: " карандаш.", es: "Este es un lápiz amarillo." },
      { before: "Это ", answer: "чёрное", after: " письмо.", es: "Esta es una carta negra." },
      { before: "Это ", answer: "зелёная", after: " комната.", es: "Esta es una habitación verde." },
      { before: "Это ", answer: "чёрные", after: " карандаши.", es: "Estos son lápices negros." },
    ],
  },
};

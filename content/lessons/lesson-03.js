export const lesson = {
  slug: "gender-number",
  level: "A1",
  module: "Módulo 3 — Género y número de sustantivos",
  order: 3,
  title: "Género y número de sustantivos",
  vocabulary: [
    { ru: "Стол", transliteration: "stol", es: "Mesa (masculino)" },
    { ru: "Дом", transliteration: "dom", es: "Casa (masculino)" },
    { ru: "Студент", transliteration: "student", es: "Estudiante (masculino)" },
    { ru: "Друг", transliteration: "drug", es: "Amigo (masculino)" },
    { ru: "Книга", transliteration: "kniga", es: "Libro (femenino)" },
    { ru: "Машина", transliteration: "mashina", es: "Auto (femenino)" },
    { ru: "Комната", transliteration: "komnata", es: "Habitación (femenino)" },
    { ru: "Окно", transliteration: "okno", es: "Ventana (neutro)" },
    { ru: "Письмо", transliteration: "pis'mo", es: "Carta (neutro)" },
    { ru: "Море", transliteration: "morye", es: "Mar (neutro)" },
    { ru: "Жёлтый", transliteration: "zholtyy", es: "Amarillo" },
    { ru: "Красный", transliteration: "krasnyy", es: "Rojo" },
    { ru: "Синий", transliteration: "siniy", es: "Azul" },
    { ru: "Зелёный", transliteration: "zelyonyy", es: "Verde" },
    { ru: "Чёрный", transliteration: "chornyy", es: "Negro" },
  ],
  grammarPoint: {
    title: "Género de los sustantivos y plural",
    explanation:
      "Los sustantivos rusos tienen tres géneros que se reconocen por su terminación: masculino (consonante), femenino (-а/-я) y neutro (-о/-е). El plural regular se forma cambiando la terminación: masculino y femenino añaden -ы/-и, y el neutro cambia a -а/-я. Los adjetivos concuerdan en género y número con el sustantivo que acompañan.",
    tables: [
      {
        title: "Género y plural de sustantivos",
        columns: ["Género", "Terminación", "Ejemplo singular", "Ejemplo plural"],
        rows: [
          ["Masculino", "consonante", "стол (mesa)", "столы"],
          ["Femenino", "-а / -я", "книга (libro)", "книги"],
          ["Neutro", "-о / -е", "окно (ventana)", "окна"],
        ],
        note: "Estas son las terminaciones regulares; algunos sustantivos frecuentes forman el plural de manera irregular.",
      },
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
    title: "🏠 Describiendo la casa",
    lines: [
      {
        speaker: "A",
        transliteration: "eto tvoy dom?",
        segments: [{ ru: "Это твой дом?", es: "¿Esta es tu casa?" }],
      },
      {
        speaker: "B",
        transliteration: "da, eto moy novyy dom. on bol'shoy.",
        segments: [
          { ru: "Да, это мой новый дом.", es: "Sí, esta es mi casa nueva." },
          { ru: "Он большой.", es: "Es grande." },
        ],
      },
      {
        speaker: "A",
        transliteration: "a eto tvoya mashina?",
        segments: [{ ru: "А это твоя машина?", es: "¿Y este es tu auto?" }],
      },
      {
        speaker: "B",
        transliteration: "da, mashina tozhe novaya.",
        segments: [{ ru: "Да, машина тоже новая.", es: "Sí, el auto también es nuevo." }],
      },
      {
        speaker: "A",
        transliteration: "u vas krasivyye okna!",
        segments: [{ ru: "У вас красивые окна!", es: "¡Tienen ventanas hermosas!" }],
      },
    ],
  },
  reading: {
    title: "La casa de Iván",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "У Ивана есть большой дом.", es: "Iván tiene una casa grande." },
          { ru: "В доме есть новая кухня и красивая комната.", es: "En la casa hay una cocina nueva y una habitación bonita." },
          { ru: "Окна в доме большие и светлые.", es: "Las ventanas de la casa son grandes y luminosas." },
        ],
      },
      {
        segments: [
          { ru: "У Ивана есть старый друг, его зовут Пётр.", es: "Iván tiene un viejo amigo, se llama Piotr." },
          { ru: "Пётр — хороший студент.", es: "Piotr es un buen estudiante." },
          { ru: "У него есть маленькая машина и старая книга.", es: "Él tiene un auto pequeño y un libro viejo." },
        ],
      },
      {
        segments: [
          { ru: "Дома у Ивана и Петра разные, но оба дома удобные.", es: "Las casas de Iván y Piotr son diferentes, pero ambas casas son cómodas." },
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
    ],
    sentences: [
      { before: "Это ", answer: "новый", after: " дом.", es: "Esta es una casa nueva." },
      { before: "Это ", answer: "новая", after: " книга.", es: "Este es un libro nuevo." },
      { before: "Это ", answer: "красный", after: " стол.", es: "Esta es una mesa roja." },
      { before: "Это ", answer: "красная", after: " машина.", es: "Este es un auto rojo." },
      { before: "Это ", answer: "синее", after: " окно.", es: "Esta es una ventana azul." },
      { before: "Это ", answer: "синие", after: " окна.", es: "Estas son ventanas azules." },
    ],
  },
};

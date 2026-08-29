export const lesson = {
  slug: "genero-numero",
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
};

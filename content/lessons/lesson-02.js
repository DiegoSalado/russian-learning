export const lesson = {
  slug: "pronouns-questions",
  level: "A1",
  module: "Módulo 2 — Presentarse y frases básicas",
  order: 3,
  title: "Pronombres y palabras interrogativas",
  vocabulary: [
    { ru: "Я", transliteration: "ya", es: "Yo" },
    { ru: "Ты", transliteration: "ty", es: "Tú" },
    { ru: "Он", transliteration: "on", es: "Él" },
    { ru: "Она", transliteration: "ona", es: "Ella" },
    { ru: "Мы", transliteration: "my", es: "Nosotros" },
    { ru: "Вы", transliteration: "vy", es: "Ustedes / usted" },
    { ru: "Они", transliteration: "oni", es: "Ellos" },
    { ru: "Кто", transliteration: "kto", es: "Quién" },
    { ru: "Что", transliteration: "chto", es: "Qué" },
    { ru: "Где", transliteration: "gde", es: "Dónde" },
    { ru: "Здесь", transliteration: "zdes'", es: "Aquí" },
    { ru: "Там", transliteration: "tam", es: "Allá / Ahí" },
  ],
  grammarPoint: {
    title: "El verbo \"ser/estar\" no se usa en presente",
    explanation:
      "En ruso, el verbo быть (ser/estar) se omite en tiempo presente: 'Я студент' significa 'Yo (soy) estudiante', sin verbo. Para preguntar se usan palabras interrogativas simples: кто (quién) para personas, что (qué) para cosas, где (dónde) para el lugar, y как (cómo) para el modo.",
    tables: [
      {
        title: "Pronombres personales",
        columns: ["Pronombre", "Español", "Ejemplo con «быть» omitido"],
        rows: [
          ["Я", "Yo", "Я студент. (Yo soy estudiante.)"],
          ["Ты", "Tú", "Ты дома. (Tú estás en casa.)"],
          ["Он", "Él", "Он врач. (Él es médico.)"],
          ["Она", "Ella", "Она здесь. (Ella está aquí.)"],
          ["Мы", "Nosotros", "Мы друзья. (Nosotros somos amigos.)"],
          ["Вы", "Ustedes / usted", "Вы правы. (Usted tiene razón.)"],
          ["Они", "Ellos", "Они студенты. (Ellos son estudiantes.)"],
        ],
      },
      {
        title: "Adverbios de lugar: здесь / там",
        columns: ["Adverbio", "Transliteración", "Ejemplo"],
        rows: [
          ["Здесь", "zdes'", "Я здесь. (Estoy aquí.)"],
          ["Там", "tam", "Она там. (Ella está allá.)"],
          ["Дома", "doma", "Мама дома. (Mamá está en casa.)"],
        ],
        note: "«Дома» ('en casa') es una excepción: no lleva preposición «в». Se dice дома, nunca «в доме» para indicar que alguien está en casa.",
      },
    ],
    examples: [
      { ru: "Я студент.", transliteration: "ya student.", es: "Yo soy estudiante." },
      { ru: "Кто это?", transliteration: "kto eto?", es: "¿Quién es?" },
      { ru: "Что это?", transliteration: "chto eto?", es: "¿Qué es esto?" },
      { ru: "Где ты?", transliteration: "gde ty?", es: "¿Dónde estás?" },
    ],
  },
  conversation: {
    title: "🙋 ¿Quién eres tú?",
    lines: [
      {
        speaker: "A",
        transliteration: "privyet! kto ty?",
        segments: [
          { ru: "Привет!", es: "¡Hola!" },
          { ru: "Кто ты?", es: "¿Quién eres?" },
        ],
      },
      {
        speaker: "B",
        transliteration: "ya Anna. a ty kto?",
        segments: [
          { ru: "Я Анна.", es: "Soy Anna." },
          { ru: "А ты кто?", es: "¿Y tú quién eres?" },
        ],
      },
      {
        speaker: "A",
        transliteration: "ya Igor'. gde ty zhivyosh'?",
        segments: [
          { ru: "Я Игорь.", es: "Soy Igor." },
          { ru: "Где ты живёшь?", es: "¿Dónde vives?" },
        ],
      },
      {
        speaker: "B",
        transliteration: "ya zhivu v Moskve. a ty?",
        segments: [
          { ru: "Я живу в Москве.", es: "Vivo en Moscú." },
          { ru: "А ты?", es: "¿Y tú?" },
        ],
      },
      {
        speaker: "A",
        transliteration: "ya tozhe zhivu v Moskve!",
        segments: [{ ru: "Я тоже живу в Москве!", es: "¡Yo también vivo en Moscú!" }],
      },
    ],
  },
  reading: {
    title: "Me llamo María",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Меня зовут Мария.", es: "Me llamo María." },
          { ru: "Я студентка.", es: "Soy estudiante." },
          { ru: "Я не в Москве, я в Санкт-Петербурге.", es: "No estoy en Moscú, estoy en San Petersburgo." },
        ],
      },
      {
        segments: [
          { ru: "Кто мои друзья?", es: "¿Quiénes son mis amigos?" },
          { ru: "Это Олег и Анна.", es: "Son Oleg y Anna." },
          { ru: "Олег — врач, а Анна — учитель.", es: "Oleg es médico, y Anna es maestra." },
          { ru: "Мы все живём в одном городе.", es: "Todos vivimos en la misma ciudad." },
        ],
      },
      {
        segments: [
          { ru: "Где мы сейчас?", es: "¿Dónde estamos ahora?" },
          { ru: "Мы в кафе.", es: "Estamos en un café." },
          { ru: "Здесь хорошо и спокойно.", es: "Aquí se está bien y tranquilo." },
        ],
      },
    ],
  },
  fillBlank: {
    title: "Practicá здесь / там",
    instructions: "Completá cada frase con здесь o там según corresponda.",
    wordBank: [
      { ru: "здесь", transliteration: "zdes'" },
      { ru: "там", transliteration: "tam" },
    ],
    sentences: [
      { before: "Мама ", answer: "здесь", after: ".", es: "Mamá está aquí." },
      { before: "Папа ", answer: "там", after: ".", es: "Papá está allá." },
      { before: "Ты живёшь ", answer: "здесь", after: "?", es: "¿Tú vives aquí?" },
      { before: "Книга ", answer: "там", after: ".", es: "El libro está allá." },
    ],
  },
};

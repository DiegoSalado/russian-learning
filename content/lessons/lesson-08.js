export const lesson = {
  slug: "family",
  level: "A1",
  module: "Práctica extra",
  order: 8,
  title: "Familia",
  vocabulary: [
    { ru: "Семья", transliteration: "sem'ya", es: "Familia" },
    { ru: "Мама", transliteration: "mama", es: "Mamá" },
    { ru: "Папа", transliteration: "papa", es: "Papá" },
    { ru: "Сын", transliteration: "syn", es: "Hijo" },
    { ru: "Дочь", transliteration: "doch'", es: "Hija" },
    { ru: "Брат", transliteration: "brat", es: "Hermano" },
    { ru: "Сестра", transliteration: "sestra", es: "Hermana" },
    { ru: "Бабушка", transliteration: "babushka", es: "Abuela" },
    { ru: "Дедушка", transliteration: "dedushka", es: "Abuelo" },
    { ru: "Муж / Жена", transliteration: "muzh / zhena", es: "Esposo / Esposa" },
    { ru: "Дядя", transliteration: "dyadya", es: "Tío" },
    { ru: "Тётя", transliteration: "tyotya", es: "Tía" },
    { ru: "Двоюродный брат", transliteration: "dvoyurodnyy brat", es: "Primo" },
    { ru: "Двоюродная сестра", transliteration: "dvoyurodnaya sestra", es: "Prima" },
    { ru: "Внук / Внучка", transliteration: "vnuk / vnuchka", es: "Nieto / Nieta" },
    { ru: "Зять", transliteration: "zyat'", es: "Yerno" },
    { ru: "Невестка", transliteration: "nevestka", es: "Nuera" },
  ],
  grammarPoint: {
    title: "Posesivos: мой, моя, моё",
    explanation:
      "El ruso tiene tres formas de 'mi/mío' según el género del sustantivo: мой (masculino), моя (femenino), моё (neutro). Para familia se usa mucho, porque casi todos los sustantivos de parentesco necesitan un posesivo.",
    tables: [
      {
        title: "Posesivo «mi/mío» según género",
        columns: ["Género", "Posesivo", "Ejemplo"],
        rows: [
          ["Masculino", "Мой", "Мой брат (mi hermano)"],
          ["Femenino", "Моя", "Моя сестра (mi hermana)"],
          ["Neutro", "Моё", "Моё письмо (mi carta)"],
          ["Plural", "Мои", "Мои родители (mis padres)"],
        ],
        note: "El posesivo concuerda con el género del sustantivo que sigue, no con el género de quien habla.",
      },
      {
        title: "Todos los pronombres posesivos",
        columns: ["Pronombre", "Masculino", "Femenino", "Neutro", "Plural"],
        rows: [
          ["Я (yo)", "мой", "моя", "моё", "мои"],
          ["Ты (tú)", "твой", "твоя", "твоё", "твои"],
          ["Он (él)", "его", "его", "его", "его"],
          ["Она (ella)", "её", "её", "её", "её"],
          ["Мы (nosotros)", "наш", "наша", "наше", "наши"],
          ["Вы (usted/es)", "ваш", "ваша", "ваше", "ваши"],
          ["Они (ellos)", "их", "их", "их", "их"],
        ],
        note: "его, её e их nunca cambian de forma — son siempre iguales, sin importar el género o número de lo que poseen.",
      },
    ],
    examples: [
      { ru: "Мой брат", transliteration: "moy brat", es: "Mi hermano (masculino)" },
      { ru: "Моя сестра", transliteration: "moya sestra", es: "Mi hermana (femenino)" },
      { ru: "Это моя мама.", transliteration: "eto moya mama.", es: "Esta es mi mamá." },
      { ru: "Это мой папа.", transliteration: "eto moy papa.", es: "Este es mi papá." },
    ],
  },
  conversation: {
    title: "👨‍👩‍👧 Hablando de la familia",
    lines: [
      {
        speaker: "A",
        transliteration: "u tebya yest' sem'ya?",
        segments: [{ ru: "У тебя есть семья?", es: "¿Tienes familia?" }],
      },
      {
        speaker: "B",
        transliteration: "da, u menya yest' mama, papa i sestra.",
        segments: [{ ru: "Да, у меня есть мама, папа и сестра.", es: "Sí, tengo mamá, papá y hermana." }],
      },
      {
        speaker: "A",
        transliteration: "a brat yest'?",
        segments: [{ ru: "А брат есть?", es: "¿Y tienes hermano?" }],
      },
      {
        speaker: "B",
        transliteration: "net, brata net. tol'ko sestra.",
        segments: [
          { ru: "Нет, брата нет.", es: "No, no tengo hermano." },
          { ru: "Только сестра.", es: "Solo hermana." },
        ],
      },
      {
        speaker: "A",
        transliteration: "ponyatno, u menya tozhe odna sestra.",
        segments: [{ ru: "Понятно, у меня тоже одна сестра.", es: "Entiendo, yo también tengo una sola hermana." }],
      },
    ],
  },
  reading: {
    title: "Моя семья",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "У меня большая семья.", es: "Tengo una familia grande." },
          { ru: "Мой папа работает в банке, а моя мама — врач.", es: "Mi papá trabaja en un banco, y mi mamá es médica." },
          { ru: "У меня есть брат и сестра.", es: "Tengo un hermano y una hermana." },
          { ru: "Моего брата зовут Павел, а мою сестру зовут Оля.", es: "Mi hermano se llama Pável, y mi hermana se llama Olia." },
        ],
      },
      {
        segments: [
          { ru: "Моя бабушка живёт в маленьком доме недалеко от нас.", es: "Mi abuela vive en una casa pequeña cerca de nosotros." },
          { ru: "Мы часто ходим к ней в гости.", es: "Vamos a visitarla seguido." },
          { ru: "Бабушка готовит вкусный суп, и вся семья собирается за одним столом.", es: "La abuela cocina una sopa deliciosa, y toda la familia se reúne en una sola mesa." },
        ],
      },
    ],
  },
  fillBlank: {
    title: "Practicá los posesivos",
    instructions: "Completá cada frase con el posesivo correcto según el género del sustantivo que sigue.",
    wordBank: [
      { ru: "мой", transliteration: "moy" },
      { ru: "моя", transliteration: "moya" },
      { ru: "моё", transliteration: "moyo" },
      { ru: "твоя", transliteration: "tvoya" },
      { ru: "наш", transliteration: "nash" },
      { ru: "ваша", transliteration: "vasha" },
    ],
    sentences: [
      { before: "Это ", answer: "мой", after: " брат.", es: "Este es mi hermano." },
      { before: "Это ", answer: "моя", after: " сестра.", es: "Esta es mi hermana." },
      { before: "Это ", answer: "моё", after: " письмо.", es: "Esta es mi carta." },
      { before: "Как зовут ", answer: "твоя", after: " бабушка?", es: "¿Cómo se llama tu abuela?" },
      { before: "Это ", answer: "наш", after: " дом.", es: "Esta es nuestra casa." },
      { before: "Где ", answer: "ваша", after: " дочь?", es: "¿Dónde está su hija?" },
    ],
  },
};

export const lesson = {
  slug: "review-a1",
  level: "A1",
  module: "Módulo 6 — Proyecto de cierre A1",
  order: 15,
  title: "Repaso integrador de A1",
  vocabulary: [
    { ru: "Привет", transliteration: "privyet", es: "Hola" },
    { ru: "Спасибо", transliteration: "spasibo", es: "Gracias" },
    { ru: "Семья", transliteration: "sem'ya", es: "Familia" },
    { ru: "Дом", transliteration: "dom", es: "Casa" },
    { ru: "Работать", transliteration: "rabotat'", es: "Trabajar" },
    { ru: "Магазин", transliteration: "magazin", es: "Tienda" },
    { ru: "Друг", transliteration: "drug", es: "Amigo" },
    { ru: "Хорошо", transliteration: "khorosho", es: "Bien" },
    { ru: "Сегодня", transliteration: "segodnya", es: "Hoy" },
    { ru: "Улица", transliteration: "ulitsa", es: "Calle" },
  ],
  grammarPoint: {
    title: "Repaso integrador del nivel A1",
    explanation:
      "Repasamos cuatro puntos clave del nivel: el verbo быть se omite en presente, los sustantivos tienen género (masculino, femenino, neutro) y forman el plural regular, los verbos se conjugan en presente según dos patrones, y las preposiciones в/на indican lugar.",
    tables: [
      {
        title: "Resumen de reglas del nivel A1",
        columns: ["Regla", "Ejemplo"],
        rows: [
          ["Быть se omite en presente", "Я студент. (Yo soy estudiante.)"],
          ["Género de sustantivos", "Большая семья. (Familia grande, femenino)"],
          ["Presente en dos conjugaciones", "Мы работаем. (Nosotros trabajamos.)"],
          ["Preposiciones в / на", "Магазин на улице. (La tienda está en la calle.)"],
        ],
      },
    ],
    examples: [
      { ru: "Я студент.", transliteration: "ya student.", es: "Yo soy estudiante. (быть omitido)" },
      { ru: "Большая семья.", transliteration: "bol'shaya sem'ya.", es: "Familia grande. (concordancia de género)" },
      { ru: "Мы работаем дома.", transliteration: "my rabotayem doma.", es: "Nosotros trabajamos en casa. (presente)" },
      { ru: "Магазин на улице.", transliteration: "magazin na ulitse.", es: "La tienda está en la calle. (на + lugar)" },
    ],
  },
  conversation: {
    title: "👋 Un día cualquiera",
    lines: [
      {
        speaker: "A",
        transliteration: "privyet! kak dela?",
        segments: [
          { ru: "Привет!", es: "¡Hola!" },
          { ru: "Как дела?", es: "¿Cómo estás?" },
        ],
      },
      {
        speaker: "B",
        transliteration: "khorosho, spasibo. segodnya ya rabotayu doma.",
        segments: [
          { ru: "Хорошо, спасибо.", es: "Bien, gracias." },
          { ru: "Сегодня я работаю дома.", es: "Hoy trabajo en casa." },
        ],
      },
      {
        speaker: "A",
        transliteration: "a gde tvoya sem'ya?",
        segments: [{ ru: "А где твоя семья?", es: "¿Y dónde está tu familia?" }],
      },
      {
        speaker: "B",
        transliteration: "sem'ya v magazine na ulitse Lenina.",
        segments: [{ ru: "Семья в магазине на улице Ленина.", es: "La familia está en la tienda de la calle Lenin." }],
      },
      {
        speaker: "A",
        transliteration: "ponyatno! do vstrechi, drug!",
        segments: [
          { ru: "Понятно!", es: "¡Entendido!" },
          { ru: "До встречи, друг!", es: "¡Hasta luego, amigo!" },
        ],
      },
    ],
  },
  reading: {
    title: "Un buen día",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Сегодня обычный день.", es: "Hoy es un día normal." },
          { ru: "Утром Виктор встаёт в семь часов и завтракает с семьёй.", es: "Por la mañana Viktor se levanta a las siete y desayuna con su familia." },
          { ru: "У него большая и дружная семья: мама, папа и сестра.", es: "Él tiene una familia grande y unida: mamá, papá y hermana." },
        ],
      },
      {
        segments: [
          { ru: "Виктор — студент.", es: "Viktor es estudiante." },
          { ru: "Днём он учится, а вечером работает в маленьком кафе на улице Гагарина.", es: "Durante el día estudia, y por la noche trabaja en un pequeño café en la calle Gagarin." },
          { ru: "Кафе не очень большое, но там всегда хорошо и уютно.", es: "El café no es muy grande, pero allí siempre se está bien y a gusto." },
        ],
      },
      {
        segments: [
          { ru: "После работы Виктор идёт в магазин.", es: "Después del trabajo Viktor va a la tienda." },
          { ru: "Магазин рядом с домом.", es: "La tienda está cerca de casa." },
          { ru: "Он покупает хлеб, молоко и фрукты.", es: "Compra pan, leche y frutas." },
        ],
      },
      {
        segments: [
          { ru: "Вечером вся семья дома.", es: "Por la noche toda la familia está en casa." },
          { ru: "Они ужинают вместе и говорят о своём дне.", es: "Cenan juntos y hablan sobre su día." },
          { ru: "Виктор доволен: сегодня был хороший день.", es: "Viktor está contento: hoy fue un buen día." },
        ],
      },
    ],
  },
};

export const lesson = {
  slug: "motion-verbs",
  level: "B1",
  module: "Módulo 3 — Verbos de movimiento",
  order: 8,
  title: "Verbos de movimiento: unidireccionales y multidireccionales",
  vocabulary: [
    { ru: "идти", transliteration: "idti", es: "ir a pie (una vez, una dirección)" },
    { ru: "ходить", transliteration: "khodit'", es: "ir a pie (habitual, ida y vuelta)" },
    { ru: "ехать", transliteration: "yekhat'", es: "ir en vehículo (una vez, una dirección)" },
    { ru: "ездить", transliteration: "yezdit'", es: "ir en vehículo (habitual, ida y vuelta)" },
    { ru: "лететь", transliteration: "letet'", es: "volar (una vez, una dirección)" },
    { ru: "летать", transliteration: "letat'", es: "volar (habitual, ida y vuelta)" },
    { ru: "вокзал", transliteration: "vokzal", es: "estación de tren" },
  ],
  grammarPoint: {
    title: "Verbos de movimiento: unidireccionales y multidireccionales",
    explanation:
      "El ruso distingue verbos de movimiento unidireccionales (una acción concreta, en una dirección: идти, ехать, лететь) de los multidireccionales (movimiento habitual, repetido o de ida y vuelta: ходить, ездить, летать).",
    tables: [
      {
        title: "Unidireccional vs. multidireccional",
        columns: ["Unidireccional (una vez)", "Multidireccional (habitual)", "Significado"],
        rows: [
          ["идти", "ходить", "ir a pie"],
          ["ехать", "ездить", "ir en vehículo"],
          ["лететь", "летать", "volar"],
        ],
        note: "«Я иду в школу» describe un trayecto concreto ahora mismo; «я хожу в школу» describe un hábito, sin importar la dirección.",
      },
    ],
    examples: [
      { ru: "Я иду в магазин.", transliteration: "ya idu v magazin.", es: "Voy a la tienda (ahora, a pie)." },
      { ru: "Я часто хожу в парк.", transliteration: "ya chasto khozhu v park.", es: "Voy seguido al parque (a pie)." },
      { ru: "Ты часто ездишь в Москву?", transliteration: "ty chasto yezdish' v Moskvu?", es: "¿Vas seguido a Moscú?" },
      { ru: "Птицы летают на юг зимой.", transliteration: "ptitsy letayut na yug zimoy.", es: "Los pájaros vuelan al sur en invierno." },
    ],
  },
  conversation: {
    title: "🚆 Поездка на вокзал",
    lines: [
      {
        speaker: "A",
        transliteration: "kuda ty seychas idyosh'?",
        segments: [{ ru: "Куда ты сейчас идёшь?", es: "¿Adónde vas ahora (a pie)?" }],
      },
      {
        speaker: "B",
        transliteration: "ya idu na vokzal. zavtra ya yedu k roditelyam v drugoy gorod.",
        segments: [
          { ru: "Я иду на вокзал.", es: "Voy a la estación de tren." },
          { ru: "Завтра я еду к родителям в другой город.", es: "Mañana viajo a ver a mis padres a otra ciudad." },
        ],
      },
      {
        speaker: "A",
        transliteration: "ty chasto yezdish' k nim?",
        segments: [{ ru: "Ты часто ездишь к ним?", es: "¿Vas seguido a verlos?" }],
      },
      {
        speaker: "B",
        transliteration: "da, ya yezzhu k nim kazhdyy mesyats. a v proshlom godu ya dazhe letal k nim na samolyote.",
        segments: [
          { ru: "Да, я езжу к ним каждый месяц.", es: "Sí, voy a verlos cada mes." },
          { ru: "А в прошлом году я даже летал к ним на самолёте.", es: "Y el año pasado incluso volé a verlos en avión." },
        ],
      },
    ],
  },
  reading: {
    title: "Будни и путешествия Игоря",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Игорь работает в центре города.", es: "Ígor trabaja en el centro de la ciudad." },
          { ru: "Каждый день он ходит на работу пешком, потому что это недалеко.", es: "Todos los días va al trabajo a pie, porque queda cerca." },
        ],
      },
      {
        segments: [
          { ru: "Иногда он ездит на работу на машине, если идёт дождь.", es: "A veces va al trabajo en auto, si llueve." },
        ],
      },
      {
        segments: [
          { ru: "Игорь любит путешествовать.", es: "Ígor ama viajar." },
          { ru: "Каждое лето он ездит в разные города России.", es: "Cada verano viaja a distintas ciudades de Rusia." },
        ],
      },
      {
        segments: [
          { ru: "В этом году он хочет лететь в Петербург, а не ехать на поезде.", es: "Este año quiere volar a San Petersburgo, y no ir en tren." },
        ],
      },
    ],
  },
};

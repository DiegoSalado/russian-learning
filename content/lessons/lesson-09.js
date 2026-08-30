export const lesson = {
  slug: "numbers",
  level: "A1",
  module: "Práctica extra",
  order: 9,
  title: "Números del 1 al 10",
  vocabulary: [
    { ru: "Один", transliteration: "odin", es: "Uno" },
    { ru: "Два", transliteration: "dva", es: "Dos" },
    { ru: "Три", transliteration: "tri", es: "Tres" },
    { ru: "Четыре", transliteration: "chetyre", es: "Cuatro" },
    { ru: "Пять", transliteration: "pyat'", es: "Cinco" },
    { ru: "Шесть", transliteration: "shest'", es: "Seis" },
    { ru: "Семь", transliteration: "sem'", es: "Siete" },
    { ru: "Восемь", transliteration: "vosem'", es: "Ocho" },
    { ru: "Девять", transliteration: "devyat'", es: "Nueve" },
    { ru: "Десять", transliteration: "desyat'", es: "Diez" },
    { ru: "Двадцать", transliteration: "dvadtsat'", es: "Veinte" },
    { ru: "Тридцать", transliteration: "tridtsat'", es: "Treinta" },
    { ru: "Пятьдесят", transliteration: "pyat'desyat", es: "Cincuenta" },
    { ru: "Сто", transliteration: "sto", es: "Cien" },
  ],
  grammarPoint: {
    title: "Números y sustantivos: 1, 2-4, 5+",
    explanation:
      "En ruso el sustantivo cambia de forma según el número que lo acompaña: después de 1 va en singular normal, después de 2-4 va en una forma especial (genitivo singular), y después de 5 en adelante va en genitivo plural. Es una de las reglas más particulares del ruso.",
    tables: [
      {
        title: "«Рубль» según la cantidad",
        columns: ["Cantidad", "Forma del sustantivo", "Ejemplo"],
        rows: [
          ["1", "Singular (nominativo)", "один рубль"],
          ["2-4", "Genitivo singular", "два рубля"],
          ["5+", "Genitivo plural", "пять рублей"],
        ],
        note: "La misma regla aplica a casi todos los sustantivos contables, no solo a рубль.",
      },
      {
        title: "Números redondos hasta 100",
        columns: ["Número", "Ruso", "Transliteración"],
        rows: [
          ["10", "десять", "desyat'"],
          ["20", "двадцать", "dvadtsat'"],
          ["30", "тридцать", "tridtsat'"],
          ["40", "сорок", "sorok"],
          ["50", "пятьдесят", "pyat'desyat"],
          ["60", "шестьдесят", "shest'desyat"],
          ["70", "семьдесят", "sem'desyat"],
          ["80", "восемьдесят", "vosem'desyat"],
          ["90", "девяносто", "devyanosto"],
          ["100", "сто", "sto"],
        ],
      },
    ],
    examples: [
      { ru: "один рубль", transliteration: "odin rubl'", es: "un rublo" },
      { ru: "два рубля", transliteration: "dva rublya", es: "dos rublos" },
      { ru: "пять рублей", transliteration: "pyat' rubley", es: "cinco rublos" },
      { ru: "Сколько это стоит?", transliteration: "skol'ko eto stoit?", es: "¿Cuánto cuesta esto?" },
    ],
  },
  conversation: {
    title: "🛒 Comprando en el mercado",
    lines: [
      {
        speaker: "A",
        transliteration: "skol'ko eto stoit?",
        segments: [{ ru: "Сколько это стоит?", es: "¿Cuánto cuesta esto?" }],
      },
      {
        speaker: "B",
        transliteration: "pyat' rubley.",
        segments: [{ ru: "Пять рублей.", es: "Cinco rublos." }],
      },
      {
        speaker: "A",
        transliteration: "a eto?",
        segments: [{ ru: "А это?", es: "¿Y esto?" }],
      },
      {
        speaker: "B",
        transliteration: "tri rublya.",
        segments: [{ ru: "Три рубля.", es: "Tres rublos." }],
      },
      {
        speaker: "A",
        transliteration: "khorosho, ya voz'mu dva.",
        segments: [{ ru: "Хорошо, я возьму два.", es: "Bien, me llevo dos." }],
      },
    ],
  },
  reading: {
    title: "На рынке",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Сегодня я иду на рынок.", es: "Hoy voy al mercado." },
          { ru: "Там продают фрукты и овощи.", es: "Ahí venden frutas y verduras." },
          { ru: "Яблоки стоят три рубля, а бананы стоят пять рублей.", es: "Las manzanas cuestan tres rublos, y los plátanos cuestan cinco rublos." },
        ],
      },
      {
        segments: [
          { ru: "Я беру два яблока и один банан.", es: "Compro dos manzanas y un plátano." },
          { ru: "Продавец говорит: «Восемь рублей, пожалуйста.»", es: "El vendedor dice: «Ocho rublos, por favor.»" },
          { ru: "Я плачу и говорю: «Спасибо, до свидания!»", es: "Pago y digo: «¡Gracias, adiós!»" },
        ],
      },
    ],
  },
  fillBlank: {
    title: "Practicá números redondos",
    instructions: "Completá cada frase con el número correcto.",
    wordBank: [
      { ru: "двадцать", transliteration: "dvadtsat'" },
      { ru: "тридцать", transliteration: "tridtsat'" },
      { ru: "пятьдесят", transliteration: "pyat'desyat" },
      { ru: "сто", transliteration: "sto" },
    ],
    sentences: [
      { before: "Мне ", answer: "двадцать", after: " лет.", es: "Tengo veinte años." },
      { before: "Мне ", answer: "тридцать", after: " лет.", es: "Tengo treinta años." },
      { before: "У меня ", answer: "пятьдесят", after: " рублей.", es: "Tengo cincuenta rublos." },
      { before: "Билет стоит ", answer: "сто", after: " рублей.", es: "El boleto cuesta cien rublos." },
    ],
  },
};

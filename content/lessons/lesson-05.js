export const lesson = {
  slug: "places-shopping",
  level: "A1",
  module: "Módulo 5 — Lugares, números y compras",
  order: 5,
  title: "Lugares, números y compras",
  vocabulary: [
    { ru: "Одиннадцать", transliteration: "odinnadtsat'", es: "Once" },
    { ru: "Двадцать", transliteration: "dvadtsat'", es: "Veinte" },
    { ru: "Тридцать", transliteration: "tridtsat'", es: "Treinta" },
    { ru: "Пятьдесят", transliteration: "pyat'desyat", es: "Cincuenta" },
    { ru: "Сто", transliteration: "sto", es: "Cien" },
    { ru: "Магазин", transliteration: "magazin", es: "Tienda" },
    { ru: "Рынок", transliteration: "rynok", es: "Mercado" },
    { ru: "Улица", transliteration: "ulitsa", es: "Calle" },
    { ru: "Цена", transliteration: "tsena", es: "Precio" },
    { ru: "Дёшево", transliteration: "dyoshevo", es: "Barato" },
  ],
  grammarPoint: {
    title: "Preposiciones de lugar: в y на",
    explanation:
      "Para decir dónde está algo se usan в (en, dentro de: en un edificio, ciudad o tienda) y на (en, sobre: en una calle, plaza o evento). Ambas preposiciones van seguidas del sustantivo en caso prepositivo, que casi siempre termina en -е.",
    tables: [
      {
        title: "Preposiciones de lugar: в vs. на",
        columns: ["Preposición", "Se usa con...", "Ejemplo"],
        rows: [
          ["В", "edificios, ciudades, tiendas", "в магазине (en la tienda)"],
          ["В", "países", "в России (en Rusia)"],
          ["На", "calles, plazas", "на улице (en la calle)"],
          ["На", "eventos, superficies", "на рынке (en el mercado)"],
          ["На", "medios de transporte", "на такси (en taxi)"],
        ],
        note: "No hay una regla única: algunos sustantivos van con на por convención (например, на работе, en el trabajo) y hay que memorizarlos.",
      },
    ],
    examples: [
      { ru: "Магазин в центре.", transliteration: "magazin v tsentre.", es: "La tienda está en el centro." },
      { ru: "Хлеб в магазине.", transliteration: "khleb v magazine.", es: "El pan está en la tienda." },
      { ru: "Рынок на улице Ленина.", transliteration: "rynok na ulitse Lenina.", es: "El mercado está en la calle Lenin." },
      { ru: "Я на рынке.", transliteration: "ya na rynke.", es: "Estoy en el mercado." },
    ],
  },
  conversation: {
    title: "🛒 En el mercado",
    lines: [
      {
        speaker: "A",
        transliteration: "zdrastvuyte! skol'ko stoit eto yabloko?",
        segments: [
          { ru: "Здравствуйте!", es: "¡Hola!" },
          { ru: "Сколько стоит это яблоко?", es: "¿Cuánto cuesta esta manzana?" },
        ],
      },
      {
        speaker: "B",
        transliteration: "dvadtsat' rubley.",
        segments: [{ ru: "Двадцать рублей.", es: "Veinte rublos." }],
      },
      {
        speaker: "A",
        transliteration: "a sto gramm syra?",
        segments: [{ ru: "А сто грамм сыра?", es: "¿Y cien gramos de queso?" }],
      },
      {
        speaker: "B",
        transliteration: "pyat'desyat rubley. eto dyoshevo!",
        segments: [
          { ru: "Пятьдесят рублей.", es: "Cincuenta rublos." },
          { ru: "Это дёшево!", es: "¡Es barato!" },
        ],
      },
      {
        speaker: "A",
        transliteration: "khorosho, ya beru.",
        segments: [{ ru: "Хорошо, я беру.", es: "Bien, lo llevo." }],
      },
    ],
  },
  reading: {
    title: "Un día de compras",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Сегодня Анна идёт на рынок.", es: "Hoy Anna va al mercado." },
          { ru: "Рынок находится на улице Гагарина, недалеко от дома.", es: "El mercado está en la calle Gagarin, no lejos de casa." },
        ],
      },
      {
        segments: [
          { ru: "На рынке много овощей и фруктов.", es: "En el mercado hay muchas verduras y frutas." },
          { ru: "Яблоки стоят двадцать рублей, а помидоры — тридцать рублей.", es: "Las manzanas cuestan veinte rublos, y los tomates treinta rublos." },
          { ru: "Анна покупает пять яблок и два помидора.", es: "Anna compra cinco manzanas y dos tomates." },
        ],
      },
      {
        segments: [
          { ru: "Потом она идёт в магазин на улице Мира.", es: "Luego va a la tienda en la calle Mira." },
          { ru: "Там она покупает хлеб и молоко.", es: "Allí compra pan y leche." },
          { ru: "Всё стоит сто рублей.", es: "Todo cuesta cien rublos." },
          { ru: "Это не дорого, это нормальная цена.", es: "No es caro, es un precio normal." },
        ],
      },
    ],
  },
};

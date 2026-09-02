export const lesson = {
  slug: "genitive-accusative",
  level: "A2",
  module: "Módulo 3 — Primeros casos gramaticales",
  order: 5,
  title: "Caso genitivo",
  vocabulary: [
    { ru: "Книга (им.)", transliteration: "kniga", es: "Libro (nominativo)" },
    { ru: "Книги (род.)", transliteration: "knigi", es: "del libro / libros (genitivo)" },
    { ru: "Брат (им.)", transliteration: "brat", es: "Hermano (nominativo)" },
    { ru: "Брата (род.)", transliteration: "brata", es: "del hermano (genitivo)" },
    { ru: "Нет", transliteration: "nyet", es: "No hay (+ genitivo)" },
    { ru: "У меня есть", transliteration: "u menya yest'", es: "Yo tengo" },
    { ru: "Магазин", transliteration: "magazin", es: "Tienda" },
    { ru: "Стакан воды", transliteration: "stakan vody", es: "Vaso de agua (genitivo)" },
    { ru: "Читать", transliteration: "chitat'", es: "Leer" },
  ],
  grammarPoint: {
    title: "Caso genitivo",
    explanation:
      "El genitivo se usa para expresar posesión (книга брата, 'el libro del hermano'), cantidad (стакан воды) y negación de existencia con нет (нет книги). También aparece después de la preposición у en construcciones como «у меня есть» (yo tengo, literalmente 'junto a mí hay').",
    tables: [
      {
        title: "Declinación: книга y брат en genitivo",
        columns: ["Caso", "книга", "брат"],
        rows: [
          ["Nominativo", "книга", "брат"],
          ["Genitivo", "книги", "брата"],
        ],
        note: "Los sustantivos femeninos en -а cambian a -и/-ы en genitivo; los masculinos añaden -а.",
      },
    ],
    examples: [
      { ru: "У меня нет книги.", transliteration: "u menya nyet knigi.", es: "No tengo libro. (genitivo con нет)" },
      { ru: "Это книга брата.", transliteration: "eto kniga brata.", es: "Este es el libro del hermano. (genitivo posesivo)" },
      { ru: "В магазине нет хлеба.", transliteration: "v magazinye nyet khleba.", es: "En la tienda no hay pan." },
      { ru: "Стакан воды, пожалуйста.", transliteration: "stakan vody, pozhaluysta.", es: "Un vaso de agua, por favor." },
    ],
  },
  conversation: {
    title: "📚 Un libro prestado",
    lines: [
      {
        speaker: "A",
        transliteration: "u tebya yest' kniga Tolstogo? ya khochu yeyo pochitat'.",
        segments: [
          { ru: "У тебя есть книга Толстого?", es: "¿Tienes un libro de Tolstói?" },
          { ru: "Я хочу её почитать.", es: "Quiero leerlo." },
        ],
      },
      {
        speaker: "B",
        transliteration: "k sozhaleniyu, u menya nyet etoy knigi, no u brata yest'.",
        segments: [{ ru: "К сожалению, у меня нет этой книги, но у брата есть.", es: "Lamentablemente no tengo ese libro, pero mi hermano sí lo tiene." }],
      },
      {
        speaker: "A",
        transliteration: "mozhno vzyat' knigu u tvoyego brata?",
        segments: [{ ru: "Можно взять книгу у твоего брата?", es: "¿Puedo tomar el libro de tu hermano?" }],
      },
      {
        speaker: "B",
        transliteration: "konechno, ya sproshu yego segodnya vecherom.",
        segments: [{ ru: "Конечно, я спрошу его сегодня вечером.", es: "Claro, le preguntaré esta noche." }],
      },
      {
        speaker: "A",
        transliteration: "spasibo, ya ochen' khochu prochitat' etot roman.",
        segments: [{ ru: "Спасибо, я очень хочу прочитать этот роман.", es: "Gracias, tengo muchas ganas de leer esa novela." }],
      },
    ],
  },
  reading: {
    title: "El libro prestado",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "У Максима есть младшая сестра.", es: "Maxim tiene una hermana menor." },
          { ru: "Она любит читать книги, но у неё нет своей библиотеки, поэтому она часто берёт книги у друзей.", es: "A ella le encanta leer libros, pero no tiene su propia biblioteca, así que a menudo toma libros prestados de amigos." },
        ],
      },
      {
        segments: [
          { ru: "Вчера сестра Максима попросила у него роман.", es: "Ayer la hermana de Maxim le pidió una novela." },
          { ru: "Максим сказал, что у него нет этого романа дома. Он оставил его у друга.", es: "Maxim dijo que no tenía esa novela en casa. La había dejado en casa de un amigo." },
          { ru: "Тогда сестра решила пойти в библиотеку города.", es: "Entonces la hermana decidió ir a la biblioteca de la ciudad." },
        ],
      },
      {
        segments: [
          { ru: "В библиотеке она нашла нужную книгу и взяла её на две недели.", es: "En la biblioteca encontró el libro que necesitaba y lo tomó prestado por dos semanas." },
          { ru: "Библиотекарь спросил её имя и записал книгу.", es: "El bibliotecario le preguntó su nombre y registró el libro." },
        ],
      },
      {
        segments: [
          { ru: "Дома сестра Максима начала читать роман.", es: "En casa la hermana de Maxim empezó a leer la novela." },
          { ru: "Она читала историю молодой девушки и её семьи.", es: "Leía la historia de una joven y su familia." },
          { ru: "Книга оказалась очень интересной, и сестра прочитала половину книги за один вечер.", es: "El libro resultó ser muy interesante, y la hermana leyó la mitad del libro en una sola noche." },
        ],
      },
      {
        segments: [
          { ru: "Максим тоже захотел прочитать этот роман, но ему пришлось ждать, пока сестра закончит его читать.", es: "Maxim también quiso leer esa novela, pero tuvo que esperar a que su hermana terminara de leerla." },
        ],
      },
    ],
  },
};

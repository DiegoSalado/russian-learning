export const lesson = {
  slug: "genitive-accusative",
  level: "A2",
  module: "Módulo 3 — Primeros casos gramaticales",
  order: 3,
  title: "Genitivo y acusativo",
  vocabulary: [
    { ru: "Книга (им.)", transliteration: "kniga", es: "Libro (nominativo)" },
    { ru: "Книги (род.)", transliteration: "knigi", es: "del libro / libros (genitivo)" },
    { ru: "Книгу (вин.)", transliteration: "knigu", es: "al libro / el libro (acusativo)" },
    { ru: "Брат (им.)", transliteration: "brat", es: "Hermano (nominativo)" },
    { ru: "Брата (род./вин.)", transliteration: "brata", es: "del hermano / al hermano (genitivo/acusativo)" },
    { ru: "Нет", transliteration: "nyet", es: "No hay (+ genitivo)" },
    { ru: "У меня есть", transliteration: "u menya yest'", es: "Yo tengo" },
    { ru: "Магазин", transliteration: "magazin", es: "Tienda" },
    { ru: "Стакан воды", transliteration: "stakan vody", es: "Vaso de agua (genitivo)" },
    { ru: "Читать", transliteration: "chitat'", es: "Leer" },
  ],
  grammarPoint: {
    title: "Caso genitivo y caso acusativo",
    explanation:
      "El genitivo se usa para expresar posesión (книга брата, 'el libro del hermano'), cantidad (стакан воды) y negación de existencia con нет (нет книги). El acusativo marca el objeto directo del verbo: los sustantivos femeninos en -а cambian a -у (книга → книгу), mientras que los masculinos inanimados no cambian.",
    tables: [
      {
        title: "Declinación: книга y брат",
        columns: ["Caso", "книга", "брат"],
        rows: [
          ["Nominativo", "книга", "брат"],
          ["Genitivo", "книги", "брата"],
          ["Acusativo", "книгу", "брата"],
        ],
        note: "Брат es animado, por eso su acusativo coincide con el genitivo (брата); книга es inanimado, por eso su acusativo cambia a -у.",
      },
    ],
    examples: [
      { ru: "У меня нет книги.", transliteration: "u menya nyet knigi.", es: "No tengo libro. (genitivo con нет)" },
      { ru: "Это книга брата.", transliteration: "eto kniga brata.", es: "Este es el libro del hermano. (genitivo posesivo)" },
      { ru: "Я читаю книгу.", transliteration: "ya chitayu knigu.", es: "Yo leo el libro. (acusativo)" },
      { ru: "Он видит брата.", transliteration: "on vidit brata.", es: "Él ve al hermano. (acusativo animado)" },
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
          { ru: "Максим сказал, что у него нет этого романа дома, потому что он оставил его у друга.", es: "Maxim dijo que no tenía esa novela en casa, porque la había dejado en casa de un amigo." },
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

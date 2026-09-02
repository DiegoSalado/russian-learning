export const lesson = {
  slug: "19th-century-literary-russian",
  level: "C2",
  module: "Módulo 1 — Ruso literario clásico",
  order: 2,
  title: "Ruso literario del siglo XIX: vocabulario y sintaxis elevada",
  vocabulary: [
    { ru: "Очи", transliteration: "ochi", es: "Ojos (poético/arcaico, vs. глаза)" },
    { ru: "Уста", transliteration: "usta", es: "Labios / boca (poético/arcaico, vs. губы, рот)" },
    { ru: "Чело", transliteration: "chelo", es: "Frente (poético/arcaico, vs. лоб)" },
    { ru: "Сей", transliteration: "sey", es: "Este (arcaico, vs. этот)" },
    { ru: "Дабы", transliteration: "daby", es: "Para que (arcaico, vs. чтобы)" },
    { ru: "Доколе", transliteration: "dokole", es: "Hasta cuándo (arcaico)" },
  ],
  grammarPoint: {
    title: "Ruso literario del siglo XIX: vocabulario y sintaxis elevada",
    explanation:
      "La literatura clásica rusa (Пушкин, Лермонтов, Толстой) usa un registro elevado con vocabulario de raíz eslava eclesiástica (очи en vez de глаза, уста en vez de губы) y estructuras hoy consideradas arcaicas o puramente poéticas. Reconocer este vocabulario paralelo es imprescindible para leer literatura del siglo XIX sin adaptar.",
    tables: [
      {
        title: "Vocabulario arcaico/poético y su equivalente moderno",
        columns: ["Arcaico / poético", "Equivalente moderno", "Significado"],
        rows: [
          ["Очи", "глаза", "Ojos"],
          ["Уста", "губы / рот", "Labios / boca"],
          ["Чело", "лоб", "Frente"],
          ["Сей", "этот", "Este"],
          ["Дабы", "чтобы", "Para que"],
          ["Доколе", "до каких пор", "Hasta cuándo"],
        ],
        note: "Estas palabras casi no se usan en el habla cotidiana actual — sobreviven en poesía, en citas clásicas y, con intención irónica o solemne, en textos contemporáneos.",
      },
    ],
    examples: [
      { ru: "Её очи блестели, как звёзды.", transliteration: "yeyo ochi blesteli, kak zvyozdy.", es: "Sus ojos brillaban como estrellas." },
      { ru: "Он произнёс это слово тихими устами.", transliteration: "on proiznyos eto slovo tikhimi ustami.", es: "Pronunció esa palabra con labios silenciosos." },
      { ru: "В сей момент всё изменилось.", transliteration: "v sey moment vsyo izmenilos'.", es: "En ese momento todo cambió." },
      { ru: "Он писал, дабы сохранить память об этом дне.", transliteration: "on pisal, daby sokhranit' pamyat' ob etom dne.", es: "Escribía para preservar el recuerdo de ese día." },
    ],
  },
  conversation: {
    title: "📚 Читая Пушкина",
    lines: [
      {
        speaker: "A",
        transliteration: "ya nachal chitat' Pushkina v originale. mnogo slov ya ne znayu.",
        segments: [{ ru: "Я начал читать Пушкина в оригинале. Много слов я не знаю.", es: "Empecé a leer a Pushkin en el original. No conozco muchas palabras." }],
      },
      {
        speaker: "B",
        transliteration: "naprimer, kakiye?",
        segments: [{ ru: "Например, какие?", es: "¿Por ejemplo cuáles?" }],
      },
      {
        speaker: "A",
        transliteration: "on pishet «ochi» vmesto «glaza», «usta» vmesto «guby».",
        segments: [{ ru: "Он пишет «очи» вместо «глаза», «уста» вместо «губы».", es: "Escribe «очи» en vez de «глаза», «уста» en vez de «губы»." }],
      },
      {
        speaker: "B",
        transliteration: "eto poeticheskiye slova iz starogo yazyka. segodnya ikh nikto ne ispol'zuyet v razgovore.",
        segments: [{ ru: "Это поэтические слова из старого языка.", es: "Son palabras poéticas del idioma antiguo." }, { ru: "Сегодня их никто не использует в разговоре.", es: "Hoy nadie las usa en una conversación." }],
      },
      {
        speaker: "A",
        transliteration: "ponyatno. teper' ya luchshe ponimayu poeziyu.",
        segments: [{ ru: "Понятно. Теперь я лучше понимаю поэзию.", es: "Entiendo. Ahora comprendo mejor la poesía." }],
      },
    ],
  },
  reading: {
    title: "Отрывок в старом стиле",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "В сей вечерний час она стояла у окна.", es: "En esa hora vespertina, ella estaba de pie junto a la ventana." },
          { ru: "Её очи были обращены к далёким огням города.", es: "Sus ojos estaban vueltos hacia las luces lejanas de la ciudad." },
        ],
      },
      {
        segments: [
          { ru: "Уста её молчали, но чело выдавало тревогу.", es: "Sus labios callaban, pero su frente delataba inquietud." },
          { ru: "Она ждала письма, дабы узнать наконец правду.", es: "Esperaba una carta, para poder finalmente conocer la verdad." },
        ],
      },
      {
        segments: [
          { ru: "«Доколе мне ждать?» — прошептала она тихо, глядя в темноту.", es: "«¿Hasta cuándo debo esperar?», susurró en voz baja, mirando la oscuridad." },
        ],
      },
    ],
  },
};

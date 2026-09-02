export const lesson = {
  slug: "instrumental-case",
  level: "B1",
  module: "Módulo 2b — Caso instrumental",
  order: 4,
  title: "Caso instrumental: ¿con qué?",
  vocabulary: [
    { ru: "ручка", transliteration: "ruchka", es: "bolígrafo" },
    { ru: "нож", transliteration: "nozh", es: "cuchillo" },
    { ru: "интересоваться", transliteration: "interesovat'sya", es: "interesarse en algo (+ instrumental)" },
    { ru: "заниматься", transliteration: "zanimat'sya", es: "dedicarse a, practicar (+ instrumental)" },
    { ru: "спорт", transliteration: "sport", es: "deporte" },
    { ru: "фотография", transliteration: "fotografiya", es: "fotografía" },
  ],
  grammarPoint: {
    title: "Caso instrumental: ¿con qué? / ¿con quién?",
    explanation:
      "El instrumental indica el instrumento con el que se hace algo (писать ручкой — escribir con un bolígrafo) o, con la preposición с, la compañía (идти с другом — ir con un amigo). También lo piden verbos como интересоваться (interesarse en) y заниматься (dedicarse a, practicar).",
    tables: [
      {
        title: "Declinación de «друг» y «подруга» en instrumental",
        columns: ["Caso", "друг", "подруга"],
        rows: [
          ["Nominativo", "друг", "подруга"],
          ["Instrumental (¿con quién?)", "другом", "подругой"],
        ],
      },
      {
        title: "Terminaciones del instrumental singular por género",
        columns: ["Género", "Terminación", "Ejemplo"],
        rows: [
          ["Masculino", "-ом", "друг → другом"],
          ["Femenino", "-ой", "подруга → подругой"],
          ["Neutro", "-ом", "письмо → письмом"],
        ],
        note: "En el instrumental de compañía, el sustantivo va casi siempre con la preposición с (con).",
      },
    ],
    examples: [
      { ru: "Она пишет письмо ручкой.", transliteration: "ona pishet pis'mo ruchkoy.", es: "Ella escribe la carta con un bolígrafo." },
      { ru: "Мы идём в кафе с подругой.", transliteration: "my idyom v kafe s podrugoy.", es: "Vamos al café con mi amiga." },
      { ru: "Он интересуется музыкой.", transliteration: "on interesuyetsya muzykoy.", es: "Él se interesa por la música." },
      { ru: "Я занимаюсь спортом каждый день.", transliteration: "ya zanimayus' sportom kazhdyy den'.", es: "Practico deporte todos los días." },
    ],
  },
  conversation: {
    title: "🏃 Увлечения",
    lines: [
      {
        speaker: "A",
        transliteration: "chem ty zanimayesh'sya v svobodnoye vremya?",
        segments: [{ ru: "Чем ты занимаешься в свободное время?", es: "¿A qué te dedicas en tu tiempo libre?" }],
      },
      {
        speaker: "B",
        transliteration: "ya zanimayus' sportom s bratom kazhdyy vecher. a ty?",
        segments: [{ ru: "Я занимаюсь спортом с братом каждый вечер. А ты?", es: "Practico deporte con mi hermano todas las noches. ¿Y tú?" }],
      },
      {
        speaker: "A",
        transliteration: "ya interesuyus' fotografiyey.",
        segments: [{ ru: "Я интересуюсь фотографией.", es: "Yo me intereso por la fotografía." }],
      },
      {
        speaker: "B",
        transliteration: "zdorovo! a eto chto, novyy nozh?",
        segments: [{ ru: "Здорово! А это что, новый нож?", es: "¡Qué bien! ¿Y eso qué es, un cuchillo nuevo?" }],
      },
      {
        speaker: "A",
        transliteration: "da, a ya vsegda pishu pis'ma ruchkoy, a ne na komp'yutere.",
        segments: [{ ru: "Да, а я всегда пишу письма ручкой, а не на компьютере.", es: "Sí, y yo siempre escribo cartas con un bolígrafo, no en la computadora." }],
      },
    ],
  },
  reading: {
    title: "Увлечения Кати",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Катя интересуется музыкой, а её брат Олег интересуется спортом.", es: "Katia se interesa por la música, y su hermano Oleg se interesa por el deporte." },
        ],
      },
      {
        segments: [
          { ru: "Катя занимается музыкой в школе, а Олег занимается футболом с друзьями.", es: "Katia practica música en la escuela, y Oleg practica fútbol con amigos." },
        ],
      },
      {
        segments: [
          { ru: "Вечером Катя пишет письмо бабушке ручкой, а Олег играет в футбол во дворе.", es: "Por la noche, Katia le escribe una carta a la abuela con un bolígrafo, y Oleg juega al fútbol en el patio." },
        ],
      },
      {
        segments: [
          { ru: "Бабушка любит получать письма от Кати и всегда отвечает ей быстро.", es: "A la abuela le encanta recibir cartas de Katia y siempre le responde rápido." },
        ],
      },
    ],
  },
};

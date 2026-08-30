export const lesson = {
  slug: "indirect-speech",
  level: "B2",
  module: "Módulo 2 — Estilo indirecto",
  order: 2,
  title: "Estilo indirecto",
  vocabulary: [
    { ru: "сказать", transliteration: "skazat'", es: "decir" },
    { ru: "спросить", transliteration: "sprosit'", es: "preguntar" },
    { ru: "ответить", transliteration: "otvetit'", es: "responder" },
    { ru: "попросить", transliteration: "poprosit'", es: "pedir" },
    { ru: "сообщить", transliteration: "soobshchit'", es: "informar, comunicar" },
    { ru: "объяснить", transliteration: "ob\"yasnit'", es: "explicar" },
    { ru: "уточнить", transliteration: "utochnit'", es: "aclarar, precisar" },
    { ru: "утверждать", transliteration: "utverzhdat'", es: "afirmar" },
    { ru: "признаться", transliteration: "priznat'sya", es: "confesar, admitir" },
    { ru: "интервью", transliteration: "interv'yu", es: "entrevista" },
  ],
  grammarPoint: {
    title: "De discurso directo a discurso indirecto",
    explanation:
      "Para transformar una cita textual en discurso indirecto, el ruso usa что (que) después de verbos de afirmación, las palabras interrogativas o la partícula ли (si) después de verbos de pregunta, y чтобы + pasado después de verbos de orden o pedido. Los pronombres y a veces los tiempos verbales cambian según quién relata la información.",
    tables: [
      {
        title: "Transformación de discurso directo a indirecto",
        columns: ["Discurso directo", "Discurso indirecto", "Cambio"],
        rows: [
          ["«Я устал», — сказал он.", "Он сказал, что устал.", "Pronombre я → он; se añade что"],
          ["«Где ты живёшь?» — спросил он.", "Он спросил, где я живу.", "La palabra interrogativa (где) se conserva"],
          ["«Ты придёшь?» — спросила она.", "Она спросила, приду ли я.", "Pregunta sin palabra interrogativa → se añade ли"],
          ["«Позвони мне!» — попросила мама.", "Мама попросила, чтобы я позвонил ей.", "Imperativo → чтобы + verbo en pasado"],
        ],
        note: "El verbo introductorio (сказать, спросить, попросить) determina qué conector usar: что, palabra interrogativa + ли, o чтобы.",
      },
    ],
    examples: [
      { ru: "Он сказал, что вернётся завтра.", transliteration: "on skazal, chto vernyotsya zavtra.", es: "Él dijo que volvería mañana." },
      { ru: "Она спросила, знаю ли я ответ.", transliteration: "ona sprosila, znayu li ya otvet.", es: "Ella preguntó si yo sabía la respuesta." },
      { ru: "Журналист уточнил, когда начнётся встреча.", transliteration: "zhurnalist utochnil, kogda nachnyotsya vstrecha.", es: "El periodista precisó cuándo empezaría la reunión." },
      { ru: "Он признался, что не готовился к интервью.", transliteration: "on priznalsya, chto ne gotovilsya k interv'yu.", es: "Él confesó que no se había preparado para la entrevista." },
    ],
  },
  conversation: {
    title: "🎙️ Интервью с писателем",
    lines: [
      {
        speaker: "A",
        transliteration: "vy govorili, chto vasha novaya kniga budet o puteshestviyakh. eto tak?",
        segments: [{ ru: "Вы говорили, что ваша новая книга будет о путешествиях.", es: "Usted dijo que su nuevo libro trataría sobre viajes." }, { ru: "Это так?", es: "¿Es así?" }],
      },
      {
        speaker: "B",
        transliteration: "da, ya utverzhdal eto v proshlom interv'yu, i eto vsyo yeshcho pravda.",
        segments: [{ ru: "Да, я утверждал это в прошлом интервью, и это всё ещё правда.", es: "Sí, lo afirmé en la entrevista anterior, y sigue siendo verdad." }],
      },
      {
        speaker: "A",
        transliteration: "chitateli chasto sprashivayut, otkuda vy berete idei.",
        segments: [{ ru: "Читатели часто спрашивают, откуда вы берёте идеи.", es: "Los lectores suelen preguntar de dónde saca usted las ideas." }],
      },
      {
        speaker: "B",
        transliteration: "ya vsegda otvechayu, chto idei prikhodyat iz real'noy zhizni.",
        segments: [{ ru: "Я всегда отвечаю, что идеи приходят из реальной жизни.", es: "Siempre respondo que las ideas vienen de la vida real." }],
      },
      {
        speaker: "A",
        transliteration: "mozhete li vy utochnit', kogda vyydet kniga?",
        segments: [{ ru: "Можете ли вы уточнить, когда выйдет книга?", es: "¿Puede precisar cuándo saldrá el libro?" }],
      },
      {
        speaker: "B",
        transliteration: "priznayus', chto tochnaya data yeshcho ne izvestna, no izdatel' poprosil menya zakonchit' rabotu k oseni.",
        segments: [{ ru: "Признаюсь, что точная дата ещё не известна, но издатель попросил меня закончить работу к осени.", es: "Confieso que la fecha exacta aún no se sabe, pero el editor me pidió que terminara el trabajo para el otoño." }],
      },
    ],
  },
  reading: {
    title: "Интервью с молодым режиссёром",
    type: "artículo",
    paragraphs: [
      {
        segments: [
          { ru: "На прошлой неделе журналист местной газеты взял интервью у молодого режиссёра Дмитрия Волкова, чей первый фильм получил приз на фестивале.", es: "La semana pasada, un periodista del diario local entrevistó al joven director Dmitri Volkov, cuya primera película recibió un premio en un festival." },
          { ru: "Встреча проходила в небольшом кафе рядом с киностудией, где Дмитрий работает уже три года.", es: "El encuentro tuvo lugar en un pequeño café cerca del estudio de cine donde Dmitri trabaja desde hace tres años." },
          { ru: "Журналист спросил, как режиссёр начал заниматься кино.", es: "El periodista preguntó cómo el director había empezado a dedicarse al cine." },
        ],
      },
      {
        segments: [
          { ru: "Дмитрий ответил, что интерес к кино появился у него ещё в детстве, когда отец подарил ему старую видеокамеру.", es: "Dmitri respondió que el interés por el cine había surgido ya en su infancia, cuando su padre le regaló una vieja videocámara." },
          { ru: "Он признался, что сначала родители не верили в его выбор профессии.", es: "Confesó que al principio sus padres no creían en su elección de profesión." },
          { ru: "Мама, по его словам, надеялась, что он станет инженером, как и все в их семье.", es: "Su mamá, según sus palabras, esperaba que él se convirtiera en ingeniero, como todos en su familia." },
          { ru: "Отец же утверждал, что рано или поздно родители изменят своё мнение, если сын будет упорно работать.", es: "El padre, en cambio, afirmaba que tarde o temprano los padres cambiarían de opinión si el hijo trabajaba con constancia." },
        ],
      },
      {
        segments: [
          { ru: "Затем журналист уточнил, о чём именно рассказывает новый фильм.", es: "Luego el periodista precisó de qué trataba exactamente la nueva película." },
          { ru: "Режиссёр объяснил, что фильм рассказывает о простой семье, которая переезжает из деревни в большой город.", es: "El director explicó que la película cuenta la historia de una familia sencilla que se muda de un pueblo a una gran ciudad." },
          { ru: "Он добавил, что хотел показать, как сложно людям привыкать к новой жизни.", es: "Añadió que quería mostrar lo difícil que es para la gente acostumbrarse a una vida nueva." },
          { ru: "Журналист спросил, основан ли сюжет на реальной истории, и Дмитрий признался, что частично рассказывает о собственной семье.", es: "El periodista preguntó si la trama se basaba en una historia real, y Dmitri confesó que en parte contaba sobre su propia familia." },
        ],
      },
      {
        segments: [
          { ru: "На вопрос, будет ли у фильма продолжение, Дмитрий ответил, что пока не думал об этом.", es: "Ante la pregunta de si la película tendría una continuación, Dmitri respondió que todavía no lo había pensado." },
          { ru: "Однако он сообщил, что уже начал писать сценарий для следующего проекта.", es: "Sin embargo, informó que ya había empezado a escribir el guion para el siguiente proyecto." },
          { ru: "Журналист уточнил, будет ли новая история связана с первым фильмом, и режиссёр ответил, что нет: это будет совсем другая тема.", es: "El periodista precisó si la nueva historia estaría relacionada con la primera película, y el director respondió que no: sería un tema completamente distinto." },
        ],
      },
      {
        segments: [
          { ru: "В конце интервью журналист спросил, что режиссёр посоветует молодым авторам.", es: "Al final de la entrevista, el periodista preguntó qué les aconsejaría el director a los autores jóvenes." },
          { ru: "Дмитрий сказал, что главное — не бояться начинать, даже если результат кажется несовершенным.", es: "Dmitri dijo que lo principal es no tener miedo de empezar, aunque el resultado parezca imperfecto." },
          { ru: "Он посоветовал снимать как можно больше, даже на телефон, и не ждать идеальных условий.", es: "Aconsejó filmar todo lo posible, incluso con el teléfono, y no esperar a tener condiciones perfectas." },
          { ru: "Прощаясь, режиссёр попросил журналиста передать читателям, что премьера фильма состоится уже этой осенью.", es: "Al despedirse, el director le pidió al periodista que les transmitiera a los lectores que el estreno de la película sería ese mismo otoño." },
        ],
      },
    ],
  },
};

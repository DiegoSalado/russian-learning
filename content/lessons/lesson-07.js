export const lesson = {
  slug: "introductions",
  level: "A1",
  module: "Práctica extra",
  order: 11,
  title: "Presentarse: cómo te llamas",
  vocabulary: [
    { ru: "Меня зовут", transliteration: "menya zovut", es: "Me llamo" },
    { ru: "Имя", transliteration: "imya", es: "Nombre" },
    { ru: "Я из", transliteration: "ya iz", es: "Soy de" },
    { ru: "Город", transliteration: "gorod", es: "Ciudad" },
    { ru: "Приятно познакомиться", transliteration: "priyatno poznakomit'sya", es: "Mucho gusto" },
    { ru: "Сколько тебе лет?", transliteration: "skol'ko tebe let?", es: "¿Cuántos años tienes?" },
    { ru: "Мне ... лет", transliteration: "mnye ... let", es: "Tengo ... años" },
    { ru: "Работа", transliteration: "rabota", es: "Trabajo" },
    { ru: "Студент", transliteration: "student", es: "Estudiante" },
    { ru: "Друг", transliteration: "drug", es: "Amigo" },
  ],
  grammarPoint: {
    title: "Меня зовут... (Me llamo...)",
    explanation:
      "Para decir tu nombre en ruso no se usa un verbo 'ser' como en español, sino la construcción 'меня зовут' (literalmente 'a mí me llaman'), seguida del nombre. Es una estructura fija que conviene memorizar entera.",
    tables: [
      {
        title: "Pronombres con «зовут»",
        columns: ["Pronombre", "Con «зовут»", "Español"],
        rows: [
          ["Я", "Меня зовут", "Me llamo"],
          ["Ты", "Тебя зовут", "Te llamas"],
          ["Он / Она", "Его / Её зовут", "Se llama"],
          ["Мы", "Нас зовут", "Nos llamamos"],
          ["Вы", "Вас зовут", "Se llama(n) (usted/es)"],
          ["Они", "Их зовут", "Se llaman"],
        ],
        note: "«Зовут» no cambia: siempre acompaña al pronombre en acusativo (меня, тебя, его...), nunca al nominativo (я, ты, он...).",
      },
    ],
    examples: [
      { ru: "Меня зовут Анна.", transliteration: "menya zovut Anna.", es: "Me llamo Anna." },
      { ru: "Как тебя зовут?", transliteration: "kak tebya zovut?", es: "¿Cómo te llamas?" },
      { ru: "Я из Иркутска.", transliteration: "ya iz Irkutska.", es: "Soy de Irkutsk." },
      { ru: "Приятно познакомиться.", transliteration: "priyatno poznakomit'sya.", es: "Mucho gusto (al conocerte)." },
    ],
  },
  conversation: {
    title: "👋 Conociendo a alguien",
    lines: [
      {
        speaker: "A",
        transliteration: "zdrastvuyte! kak vas zovut?",
        segments: [
          { ru: "Здравствуйте!", es: "¡Hola!" },
          { ru: "Как вас зовут?", es: "¿Cómo se llama usted?" },
        ],
      },
      {
        speaker: "B",
        transliteration: "menya zovut Anton. a vas?",
        segments: [
          { ru: "Меня зовут Антон.", es: "Me llamo Antón." },
          { ru: "А вас?", es: "¿Y usted?" },
        ],
      },
      {
        speaker: "A",
        transliteration: "menya zovut Mariya. priyatno poznakomit'sya.",
        segments: [
          { ru: "Меня зовут Мария.", es: "Me llamo María." },
          { ru: "Приятно познакомиться.", es: "Mucho gusto." },
        ],
      },
      {
        speaker: "B",
        transliteration: "mnye tozhe. otkuda vy?",
        segments: [
          { ru: "Мне тоже.", es: "Igualmente." },
          { ru: "Откуда вы?", es: "¿De dónde es usted?" },
        ],
      },
      {
        speaker: "A",
        transliteration: "ya iz Rossii.",
        segments: [{ ru: "Я из России.", es: "Soy de Rusia." }],
      },
    ],
  },
  reading: {
    title: "Новый студент",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Меня зовут Антон.", es: "Me llamo Antón." },
          { ru: "Мне двадцать два года.", es: "Tengo veintidós años." },
          { ru: "Я из Иркутска, но сейчас я живу в Москве.", es: "Soy de Irkutsk, pero ahora vivo en Moscú." },
          { ru: "Я студент, я изучаю экономику.", es: "Soy estudiante, estudio economía." },
        ],
      },
      {
        segments: [
          { ru: "Вчера я познакомился с новой подругой.", es: "Ayer conocí a una nueva amiga." },
          { ru: "Её зовут Мария.", es: "Se llama María." },
          { ru: "Она тоже студентка.", es: "Ella también es estudiante." },
          { ru: "Мы говорим по-русски и много смеёмся.", es: "Hablamos en ruso y nos reímos mucho." },
          { ru: "Приятно познакомиться с новыми друзьями!", es: "¡Es un placer conocer nuevos amigos!" },
        ],
      },
    ],
  },
};

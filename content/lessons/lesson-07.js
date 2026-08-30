export const lesson = {
  slug: "introductions",
  level: "A1",
  module: "Práctica extra",
  order: 7,
  title: "Presentarse",
  vocabulary: [
    { ru: "Меня зовут", transliteration: "menya zovut", es: "Me llamo" },
    { ru: "Имя", transliteration: "imya", es: "Nombre" },
    { ru: "Я из", transliteration: "ya iz", es: "Soy de" },
    { ru: "Страна", transliteration: "strana", es: "País" },
    { ru: "Приятно познакомиться", transliteration: "priyatno poznakomit'sya", es: "Mucho gusto" },
    { ru: "Сколько тебе лет?", transliteration: "skol'ko tebe let?", es: "¿Cuántos años tienes?" },
    { ru: "Мне ... лет", transliteration: "mnye ... let", es: "Tengo ... años" },
    { ru: "Работа", transliteration: "rabota", es: "Trabajo" },
    { ru: "Студент", transliteration: "student", es: "Estudiante" },
    { ru: "Друг", transliteration: "drug", es: "Amigo" },
    { ru: "Врач", transliteration: "vrach", es: "Médico" },
    { ru: "Учитель", transliteration: "uchitel'", es: "Maestro" },
    { ru: "Инженер", transliteration: "inzhener", es: "Ingeniero" },
    { ru: "Художник", transliteration: "khudozhnik", es: "Pintor / Artista" },
    { ru: "Писатель", transliteration: "pisatel'", es: "Escritor" },
    { ru: "Музыкант", transliteration: "muzykant", es: "Músico" },
    { ru: "Таксист", transliteration: "taksist", es: "Taxista" },
    { ru: "Германия", transliteration: "Germaniya", es: "Alemania" },
    { ru: "Италия", transliteration: "Italiya", es: "Italia" },
    { ru: "Канада", transliteration: "Kanada", es: "Canadá" },
    { ru: "Китай", transliteration: "Kitay", es: "China" },
    { ru: "Аргентина", transliteration: "Argentina", es: "Argentina" },
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
      {
        title: "«Я + profesión» y «Я из + país»",
        columns: ["Estructura", "Ejemplo", "Español"],
        rows: [
          ["Я + профессия", "Я врач.", "Soy médico."],
          ["Я + профессия", "Я учитель.", "Soy maestro."],
          ["Я + профессия", "Я инженер.", "Soy ingeniero."],
          ["Я + профессия", "Я художник.", "Soy pintor."],
          ["Я из + страна", "Я из Германии.", "Soy de Alemania."],
          ["Я из + страна", "Я из Италии.", "Soy de Italia."],
          ["Я из + страна", "Я из Канады.", "Soy de Canadá."],
          ["Я из + страна", "Я из Китая.", "Soy de China."],
        ],
        note: "Con «из» (de) el país va en genitivo: Германия→Германии, Италия→Италии, Канада→Канады, Китай→Китая. Con la profesión, en cambio, no hace falta declinar nada.",
      },
    ],
    examples: [
      { ru: "Меня зовут Анна.", transliteration: "menya zovut Anna.", es: "Me llamo Anna." },
      { ru: "Как тебя зовут?", transliteration: "kak tebya zovut?", es: "¿Cómo te llamas?" },
      { ru: "Я из Мексики.", transliteration: "ya iz Meksiki.", es: "Soy de México." },
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
        transliteration: "menya zovut Diego. a vas?",
        segments: [
          { ru: "Меня зовут Диего.", es: "Me llamo Diego." },
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
          { ru: "Меня зовут Диего.", es: "Me llamo Diego." },
          { ru: "Мне двадцать два года.", es: "Tengo veintidós años." },
          { ru: "Я из Мексики, но сейчас я живу в Москве.", es: "Soy de México, pero ahora vivo en Moscú." },
          { ru: "Я студент, я изучаю русский язык.", es: "Soy estudiante, estudio ruso." },
        ],
      },
      {
        segments: [
          { ru: "Вчера я познакомился с новой подругой.", es: "Ayer conocí a una nueva amiga." },
          { ru: "Её зовут Мария.", es: "Se llama María." },
          { ru: "Она тоже студентка.", es: "Ella también es estudiante." },
          { ru: "Мы говорим по-русски и немного по-испански.", es: "Hablamos en ruso y un poco en español." },
          { ru: "Приятно познакомиться с новыми друзьями!", es: "¡Es un placer conocer nuevos amigos!" },
        ],
      },
    ],
  },
  fillBlank: {
    title: "Practicá profesión y país de origen",
    instructions: "Completá cada frase con la palabra correcta.",
    wordBank: [
      { ru: "Врач", transliteration: "vrach" },
      { ru: "Учитель", transliteration: "uchitel'" },
      { ru: "Германии", transliteration: "Germanii" },
      { ru: "Италии", transliteration: "Italii" },
      { ru: "Канады", transliteration: "Kanady" },
      { ru: "Китая", transliteration: "Kitaya" },
    ],
    sentences: [
      { before: "Я ", answer: "Врач", after: ".", es: "Soy médico." },
      { before: "Я ", answer: "Учитель", after: ".", es: "Soy maestro." },
      { before: "Я из ", answer: "Германии", after: ".", es: "Soy de Alemania." },
      { before: "Я из ", answer: "Италии", after: ".", es: "Soy de Italia." },
      { before: "Я из ", answer: "Канады", after: ".", es: "Soy de Canadá." },
      { before: "Я из ", answer: "Китая", after: ".", es: "Soy de China." },
    ],
  },
};

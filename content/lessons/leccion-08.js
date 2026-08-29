export const lesson = {
  slug: "rutina",
  level: "A1",
  module: "Módulo 4 — Rutina y verbos en presente",
  order: 4,
  title: "La rutina diaria",
  vocabulary: [
    { ru: "Вставать", transliteration: "vstavat'", es: "Levantarse" },
    { ru: "Завтракать", transliteration: "zavtrakat'", es: "Desayunar" },
    { ru: "Работать", transliteration: "rabotat'", es: "Trabajar" },
    { ru: "Обедать", transliteration: "obedat'", es: "Almorzar" },
    { ru: "Учиться", transliteration: "uchit'sya", es: "Estudiar" },
    { ru: "Отдыхать", transliteration: "otdykhat'", es: "Descansar" },
    { ru: "Спать", transliteration: "spat'", es: "Dormir" },
    { ru: "Понедельник", transliteration: "ponedel'nik", es: "Lunes" },
    { ru: "Суббота", transliteration: "subbota", es: "Sábado" },
    { ru: "Воскресенье", transliteration: "voskresen'ye", es: "Domingo" },
  ],
  grammarPoint: {
    title: "Conjugación en presente: dos grupos de verbos",
    explanation:
      "Los verbos rusos en presente se dividen en dos conjugaciones: la primera (como работать) usa las terminaciones -ю/-ешь/-ет/-ем/-ете/-ют; la segunda (como говорить) usa -ю/-ишь/-ит/-им/-ите/-ят. Basta con reconocer el patrón para conjugar la mayoría de los verbos regulares.",
    tables: [
      {
        title: "Conjugación en presente: работать vs. говорить",
        columns: ["Pronombre", "работать (1ª conj.)", "говорить (2ª conj.)"],
        rows: [
          ["Я", "работаю", "говорю"],
          ["Ты", "работаешь", "говоришь"],
          ["Он / Она", "работает", "говорит"],
          ["Мы", "работаем", "говорим"],
          ["Вы", "работаете", "говорите"],
          ["Они", "работают", "говорят"],
        ],
      },
    ],
    examples: [
      { ru: "Я работаю.", transliteration: "ya rabotayu.", es: "Yo trabajo. (1ª conjugación)" },
      { ru: "Ты работаешь.", transliteration: "ty rabotayesh'.", es: "Tú trabajas." },
      { ru: "Он говорит.", transliteration: "on govorit.", es: "Él habla. (2ª conjugación)" },
      { ru: "Мы говорим.", transliteration: "my govorim.", es: "Nosotros hablamos." },
    ],
  },
  conversation: {
    title: "⏰ Mi día",
    lines: [
      {
        speaker: "A",
        transliteration: "kogda ty vstayosh'?",
        segments: [{ ru: "Когда ты встаёшь?", es: "¿Cuándo te levantas?" }],
      },
      {
        speaker: "B",
        transliteration: "ya vstayu v sem' chasov i zavtrakayu.",
        segments: [{ ru: "Я встаю в семь часов и завтракаю.", es: "Me levanto a las siete y desayuno." }],
      },
      {
        speaker: "A",
        transliteration: "a chto ty delayesh' vecherom?",
        segments: [{ ru: "А что ты делаешь вечером?", es: "¿Y qué haces por la noche?" }],
      },
      {
        speaker: "B",
        transliteration: "vecherom ya uchus', a v subbotu otdykhayu.",
        segments: [{ ru: "Вечером я учусь, а в субботу отдыхаю.", es: "Por la noche estudio, y el sábado descanso." }],
      },
      {
        speaker: "A",
        transliteration: "zdorovo! ty mnogo rabotayesh'.",
        segments: [
          { ru: "Здорово!", es: "¡Qué bien!" },
          { ru: "Ты много работаешь.", es: "Trabajas mucho." },
        ],
      },
    ],
  },
  reading: {
    title: "El día de Natasha",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Каждый день Наташа встаёт в семь часов утра.", es: "Cada día Natasha se levanta a las siete de la mañana." },
          { ru: "Она завтракает и пьёт чай.", es: "Desayuna y toma té." },
        ],
      },
      {
        segments: [
          { ru: "В девять часов она едет на работу.", es: "A las nueve va al trabajo." },
          { ru: "Наташа работает в офисе до шести часов вечера.", es: "Natasha trabaja en una oficina hasta las seis de la tarde." },
          { ru: "Днём она обедает с коллегами.", es: "Durante el día almuerza con sus colegas." },
        ],
      },
      {
        segments: [
          { ru: "Вечером Наташа учится дома — она изучает английский язык.", es: "Por la noche Natasha estudia en casa — aprende inglés." },
          { ru: "Потом она ужинает и смотрит телевизор.", es: "Luego cena y mira televisión." },
          { ru: "В одиннадцать часов она ложится спать.", es: "A las once se acuesta a dormir." },
        ],
      },
      {
        segments: [
          { ru: "В субботу и воскресенье Наташа отдыхает и гуляет с друзьями.", es: "El sábado y el domingo Natasha descansa y pasea con amigos." },
        ],
      },
    ],
  },
};

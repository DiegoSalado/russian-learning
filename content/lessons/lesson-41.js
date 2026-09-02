export const lesson = {
  slug: "reflexive-verbs",
  level: "B1",
  module: "Módulo 3c — Verbos reflexivos",
  order: 6,
  title: "Verbos reflexivos: -ся / -сь",
  vocabulary: [
    { ru: "одеваться", transliteration: "odevat'sya", es: "vestirse" },
    { ru: "умываться", transliteration: "umyvat'sya", es: "lavarse la cara" },
    { ru: "встречаться", transliteration: "vstrechat'sya", es: "encontrarse, salir con alguien" },
    { ru: "улыбаться", transliteration: "ulybat'sya", es: "sonreír" },
    { ru: "смеяться", transliteration: "smeyat'sya", es: "reír" },
    { ru: "надеяться", transliteration: "nadeyat'sya", es: "esperar, tener esperanza" },
    { ru: "нравиться", transliteration: "nravit'sya", es: "gustar" },
    { ru: "начинаться", transliteration: "nachinat'sya", es: "empezar (algo por sí solo)" },
  ],
  grammarPoint: {
    title: "Verbos reflexivos: la partícula -ся / -сь",
    explanation:
      "La partícula -ся (o -сь después de vocal) viene de себя (a sí mismo) y se pega al final del verbo, después de la terminación de la conjugación. No significa lo mismo en todos los verbos: puede marcar una acción reflexiva de verdad (одеваться — vestirse a uno mismo), una acción recíproca (встречаться — encontrarse el uno al otro), un verbo que simplemente no existe sin -ся (нравиться, надеяться, смеяться), o una acción sin objeto explícito (начинаться — empezar, sin decir quién lo empieza).",
    tables: [
      {
        title: "Regla ortográfica de -ся / -сь",
        columns: ["Termina en…", "Partícula", "Ejemplo"],
        rows: [
          ["consonante", "-ся", "он одевается"],
          ["vocal", "-сь", "я одеваюсь"],
        ],
        note: "-ся después de consonante, -сь después de vocal — igual que otras reglas de ortografía del ruso, es una cuestión de cómo suena, no de significado.",
      },
      {
        title: "Conjugación completa: одеваться (vestirse)",
        columns: ["Persona", "Forma"],
        rows: [
          ["я", "одеваюсь"],
          ["ты", "одеваешься"],
          ["он / она", "одевается"],
          ["мы", "одеваемся"],
          ["вы", "одеваетесь"],
          ["они", "одеваются"],
        ],
        note: "Se conjuga el verbo normalmente y después se agrega -ся/-сь según la terminación.",
      },
      {
        title: "Los cuatro usos de -ся",
        columns: ["Uso", "Ejemplo", "Traducción"],
        rows: [
          ["Reflexivo real (a uno mismo)", "Я умываюсь.", "Me lavo la cara."],
          ["Recíproco (el uno al otro)", "Мы встретились в кафе.", "Nos encontramos en el café."],
          ["Solo existe con -ся", "Я надеюсь на тебя.", "Cuento contigo / espero de ti."],
          ["Sin objeto explícito", "Урок начинается в семь.", "La clase empieza a las siete."],
        ],
      },
    ],
    examples: [
      { ru: "Ты уже оделась?", transliteration: "ty uzhe odelas'?", es: "¿Ya te vestiste? (a una mujer)" },
      { ru: "Мы часто смеёмся вместе.", transliteration: "my chasto smeyomsya vmeste.", es: "Nos reímos juntos seguido." },
      { ru: "Она мне очень нравится.", transliteration: "ona mne ochen' nravitsya.", es: "Ella me gusta mucho." },
      { ru: "Фильм начинается в восемь.", transliteration: "fil'm nachinayetsya v vosem'.", es: "La película empieza a las ocho." },
      { ru: "Я надеюсь, что всё будет хорошо.", transliteration: "ya nadeyus', chto vsyo budet khorosho.", es: "Espero que todo salga bien." },
    ],
  },
  conversation: {
    title: "☀️ Por la mañana",
    lines: [
      {
        speaker: "A",
        transliteration: "vo skol'ko ty prosypayesh'sya?",
        segments: [{ ru: "Во сколько ты просыпаешься?", es: "¿A qué hora te despertás?" }],
      },
      {
        speaker: "B",
        transliteration: "ya prosypayus' v sem'. potom ya umyvayus' i odevayus'.",
        segments: [{ ru: "Я просыпаюсь в семь. Потом я умываюсь и одеваюсь.", es: "Me despierto a las siete. Después me lavo la cara y me visto." }],
      },
      {
        speaker: "A",
        transliteration: "ty vstrechayesh'sya s druz'yami utrom?",
        segments: [{ ru: "Ты встречаешься с друзьями утром?", es: "¿Te encontrás con amigos por la mañana?" }],
      },
      {
        speaker: "B",
        transliteration: "net, moya rabota nachinayetsya rano. no my vsegda ulybayemsya drug drugu po doroge.",
        segments: [{ ru: "Нет, моя работа начинается рано. Но мы всегда улыбаемся друг другу по дороге.", es: "No, mi trabajo empieza temprano. Pero siempre nos sonreímos en el camino." }],
      },
      {
        speaker: "A",
        transliteration: "ya nadeyus', chto u tebya budet khoroshiy den'!",
        segments: [{ ru: "Я надеюсь, что у тебя будет хороший день!", es: "¡Espero que tengas un buen día!" }],
      },
    ],
  },
  reading: {
    title: "Утро Марины",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Марина просыпается очень рано, в шесть часов утра.", es: "Marina se despierta muy temprano, a las seis de la mañana." },
          { ru: "Сначала она умывается, а потом одевается быстро.", es: "Primero se lava la cara, y después se viste rápido." },
        ],
      },
      {
        segments: [
          { ru: "Она любит смеяться и улыбаться, даже когда устала.", es: "A ella le gusta reír y sonreír, incluso cuando está cansada." },
          { ru: "По дороге на работу она встречается с подругой Олей.", es: "En el camino al trabajo se encuentra con su amiga Olia." },
        ],
      },
      {
        segments: [
          { ru: "Они разговаривают и смеются вместе.", es: "Ellas conversan y se ríen juntas." },
          { ru: "Работа Марины начинается в девять, и она всегда надеется, что день будет хорошим.", es: "El trabajo de Marina empieza a las nueve, y ella siempre espera que el día sea bueno." },
        ],
      },
    ],
  },
  fillBlank: {
    title: "Practicá los verbos reflexivos",
    instructions: "Completá cada frase con la forma reflexiva correcta del verbo entre paréntesis.",
    wordBank: [
      { ru: "просыпаюсь", transliteration: "prosypayus'" },
      { ru: "одевается", transliteration: "odevayetsya" },
      { ru: "улыбаемся", transliteration: "ulybayemsya" },
      { ru: "встречаешься", transliteration: "vstrechayesh'sya" },
      { ru: "нравится", transliteration: "nravitsya" },
      { ru: "начинается", transliteration: "nachinayetsya" },
      { ru: "надеюсь", transliteration: "nadeyus'" },
      { ru: "смеются", transliteration: "smeyutsya" },
    ],
    sentences: [
      { before: "Я всегда ", answer: "просыпаюсь", after: " рано.", es: "Siempre me despierto temprano. (просыпаться)" },
      { before: "Он быстро ", answer: "одевается", after: " утром.", es: "Él se viste rápido por la mañana. (одеваться)" },
      { before: "Мы всегда ", answer: "улыбаемся", after: " друг другу.", es: "Siempre nos sonreímos el uno al otro. (улыбаться)" },
      { before: "С кем ты ", answer: "встречаешься", after: " вечером?", es: "¿Con quién te encontrás a la noche? (встречаться)" },
      { before: "Этот фильм мне очень ", answer: "нравится", after: ".", es: "Esta película me gusta mucho. (нравиться)" },
      { before: "Урок ", answer: "начинается", after: " в девять.", es: "La clase empieza a las nueve. (начинаться)" },
      { before: "Я ", answer: "надеюсь", after: ", что мы встретимся.", es: "Espero que nos encontremos. (надеяться)" },
      { before: "Дети всегда ", answer: "смеются", after: " вместе.", es: "Los niños siempre se ríen juntos. (смеяться)" },
    ],
  },
};

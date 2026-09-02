export const lesson = {
  slug: "dative-instrumental-cases",
  level: "B1",
  module: "Módulo 2 — Caso dativo",
  order: 3,
  title: "Caso dativo: ¿a quién?",
  vocabulary: [
    { ru: "друг", transliteration: "drug", es: "amigo" },
    { ru: "подруга", transliteration: "podruga", es: "amiga" },
    { ru: "подарок", transliteration: "podarok", es: "regalo" },
    { ru: "дать", transliteration: "dat'", es: "dar" },
    { ru: "помогать", transliteration: "pomogat'", es: "ayudar (+ dativo)" },
    { ru: "звонить", transliteration: "zvonit'", es: "llamar por teléfono (+ dativo)" },
  ],
  grammarPoint: {
    title: "Caso dativo: ¿a quién?",
    explanation:
      "El dativo indica el destinatario de una acción — a quién o para quién se hace algo (дать другу — dar a un amigo). Lo piden verbos como помогать (ayudar), звонить (llamar) y дать (dar), donde la persona destinataria siempre va en dativo.",
    tables: [
      {
        title: "Declinación de «друг» y «подруга» en dativo",
        columns: ["Caso", "друг", "подруга"],
        rows: [
          ["Nominativo", "друг", "подруга"],
          ["Dativo (¿a quién?)", "другу", "подруге"],
        ],
      },
      {
        title: "Terminaciones del dativo singular por género",
        columns: ["Género", "Terminación", "Ejemplo"],
        rows: [
          ["Masculino", "-у", "друг → другу"],
          ["Femenino", "-е", "подруга → подруге"],
          ["Neutro", "-у", "письмо → письму"],
        ],
        note: "Los femeninos en -я y los masculinos con consonante blanda usan -е en vez de -у.",
      },
    ],
    examples: [
      { ru: "Я дал другу подарок.", transliteration: "ya dal drugu podarok.", es: "Le di un regalo a mi amigo." },
      { ru: "Помоги мне, пожалуйста.", transliteration: "pomogi mnye, pozhaluysta.", es: "Ayúdame, por favor." },
      { ru: "Я позвоню подруге вечером.", transliteration: "ya pozvonyu podrugye vecherom.", es: "Llamaré a mi amiga por la noche." },
      { ru: "Бабушка помогает детям.", transliteration: "babushka pomogayet detyam.", es: "La abuela ayuda a los niños." },
    ],
  },
  conversation: {
    title: "🎁 Подарок другу",
    lines: [
      {
        speaker: "A",
        transliteration: "chto ty podarish' drugu na den' rozhdeniya?",
        segments: [{ ru: "Что ты подаришь другу на день рождения?", es: "¿Qué le vas a regalar a tu amigo para su cumpleaños?" }],
      },
      {
        speaker: "B",
        transliteration: "ya khochu dat' yemu novuyu knigu.",
        segments: [{ ru: "Я хочу дать ему новую книгу.", es: "Quiero darle un libro nuevo." }],
      },
      {
        speaker: "A",
        transliteration: "a ty pozvonish' podruge segodnya?",
        segments: [{ ru: "А ты позвонишь подруге сегодня?", es: "¿Y le vas a llamar a tu amiga hoy?" }],
      },
      {
        speaker: "B",
        transliteration: "da, ya pozvonyu yey vecherom i pomogu yey vybrat' plat'ye.",
        segments: [{ ru: "Да, я позвоню ей вечером и помогу ей выбрать платье.", es: "Sí, la llamaré por la noche y la ayudaré a elegir un vestido." }],
      },
      {
        speaker: "A",
        transliteration: "zdorovo! spasibo, chto pomogayesh' druz'yam!",
        segments: [{ ru: "Здорово! Спасибо, что помогаешь друзьям!", es: "¡Qué bien! ¡Gracias por ayudar a tus amigos!" }],
      },
    ],
  },
  reading: {
    title: "Помощь брату",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "У Антона есть младший брат Дима.", es: "Antón tiene un hermano menor, Dima." },
          { ru: "Дима попросил Антона помочь ему с уроками.", es: "Dima le pidió a Antón que le ayudara con las tareas." },
        ],
      },
      {
        segments: [
          { ru: "Антон позвонил другу и спросил совета, а потом объяснил брату трудную задачу.", es: "Antón llamó a un amigo y le pidió consejo, y luego le explicó a su hermano el problema difícil." },
        ],
      },
      {
        segments: [
          { ru: "Дима сказал брату спасибо и подарил ему открытку.", es: "Dima le dio las gracias a su hermano y le regaló una tarjeta." },
        ],
      },
      {
        segments: [
          { ru: "Вечером мама позвонила бабушке и рассказала, как Антон помог брату.", es: "Por la noche, mamá llamó a la abuela y le contó cómo Antón ayudó a su hermano." },
        ],
      },
    ],
  },
};

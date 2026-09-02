export const lesson = {
  slug: "cause-consequence-connectors",
  level: "B1",
  module: "Módulo 5b — Causa y consecuencia",
  order: 12,
  title: "Conectores de causa y consecuencia",
  vocabulary: [
    { ru: "поэтому", transliteration: "poetomu", es: "por eso" },
    { ru: "так как", transliteration: "tak kak", es: "ya que, dado que" },
    { ru: "из-за того что", transliteration: "iz-za togo chto", es: "debido a que" },
  ],
  grammarPoint: {
    title: "Conectores de causa y consecuencia",
    explanation:
      "Para justificar algo se usan conectores causales como так как o из-за того что (dado que / debido a que); para señalar la consecuencia de algo, поэтому (por eso).",
    tables: [
      {
        title: "Conectores de causa y consecuencia",
        columns: ["Conector", "Función", "Ejemplo"],
        rows: [
          ["Так как", "Causa (dado que)", "Так как было поздно, я пошёл домой."],
          ["Из-за того что", "Causa (debido a que)", "Из-за того что шёл дождь, мы остались дома."],
          ["Поэтому", "Consecuencia (por eso)", "Было поздно, поэтому я пошёл домой."],
        ],
        note: "Так как y из-за того что van antes de la causa; поэтому va antes de la consecuencia — el orden de las cláusulas no se puede invertir libremente.",
      },
    ],
    examples: [
      { ru: "Она устала, поэтому решила уйти пораньше.", transliteration: "ona ustala, poetomu reshila uyti poran'she.", es: "Ella estaba cansada, por eso decidió irse más temprano." },
      { ru: "Из-за того что все работают из дома, офисы опустели.", transliteration: "iz-za togo chto vse rabotayut iz doma, ofisy opusteli.", es: "Debido a que todos trabajan desde casa, las oficinas se vaciaron." },
      { ru: "Я не согласен с тобой, так как эта работа неудобна.", transliteration: "ya ne soglasen s toboy, tak kak eta rabota neudobna.", es: "No estoy de acuerdo contigo, ya que este trabajo es incómodo." },
      { ru: "Так как этот формат сочетает преимущества обоих подходов, всё больше компаний выбирают именно его.", transliteration: "tak kak etot format sochetayet preimushchestva oboikh podkhodov, vsyo bol'she kompaniy vybirayut imenno yego.", es: "Ya que este formato combina las ventajas de ambos enfoques, cada vez más empresas eligen precisamente ese." },
    ],
  },
  conversation: {
    title: "🌧️ Почему ты не пришёл?",
    lines: [
      {
        speaker: "A",
        transliteration: "pochemu ty ne prishol vchera?",
        segments: [{ ru: "Почему ты не пришёл вчера?", es: "¿Por qué no viniste ayer?" }],
      },
      {
        speaker: "B",
        transliteration: "ya ne prishol, tak kak ploho sebya chuvstvoval.",
        segments: [{ ru: "Я не пришёл, так как плохо себя чувствовал.", es: "No vine porque me sentía mal." }],
      },
      {
        speaker: "A",
        transliteration: "ponyatno. a pochemu magazin zakryt?",
        segments: [{ ru: "Понятно.", es: "Entiendo." }, { ru: "А почему магазин закрыт?", es: "¿Y por qué está cerrado el negocio?" }],
      },
      {
        speaker: "B",
        transliteration: "iz-za togo chto segodnya prazdnik, magazin zakryt.",
        segments: [{ ru: "Из-за того что сегодня праздник, магазин закрыт.", es: "El negocio está cerrado porque hoy es feriado." }],
      },
      {
        speaker: "A",
        transliteration: "a chto ty budesh' delat' vecherom?",
        segments: [{ ru: "А что ты будешь делать вечером?", es: "¿Y qué vas a hacer por la noche?" }],
      },
      {
        speaker: "B",
        transliteration: "ya ustal, poetomu ostanus' doma.",
        segments: [{ ru: "Я устал, поэтому останусь дома.", es: "Estoy cansado, así que me quedaré en casa." }],
      },
    ],
  },
  reading: {
    title: "Дождливый день",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Сегодня шёл дождь, поэтому Анна осталась дома.", es: "Hoy llovía, así que Anna se quedó en casa." },
        ],
      },
      {
        segments: [
          { ru: "Так как было поздно, она пошла спать.", es: "Como era tarde, se fue a dormir." },
        ],
      },
      {
        segments: [
          { ru: "Из-за того что был дождь, друзья не пришли в гости.", es: "Debido a que llovía, los amigos no vinieron de visita." },
        ],
      },
      {
        segments: [
          { ru: "Анна была одна дома, поэтому она читала книгу весь день.", es: "Anna estaba sola en casa, así que leyó un libro todo el día." },
        ],
      },
    ],
  },
};

export const lesson = {
  slug: "profession-origin",
  level: "A1",
  module: "Práctica extra",
  order: 12,
  title: "Presentarse: profesión y ciudad de origen",
  vocabulary: [
    { ru: "Врач", transliteration: "vrach", es: "Médico" },
    { ru: "Учитель", transliteration: "uchitel'", es: "Maestro" },
    { ru: "Инженер", transliteration: "inzhener", es: "Ingeniero" },
    { ru: "Художник", transliteration: "khudozhnik", es: "Pintor / Artista" },
    { ru: "Писатель", transliteration: "pisatel'", es: "Escritor" },
    { ru: "Музыкант", transliteration: "muzykant", es: "Músico" },
    { ru: "Таксист", transliteration: "taksist", es: "Taxista" },
    { ru: "Москва", transliteration: "Moskva", es: "Moscú" },
    { ru: "Казань", transliteration: "Kazan'", es: "Kazán" },
    { ru: "Новосибирск", transliteration: "Novosibirsk", es: "Novosibirsk" },
    { ru: "Владивосток", transliteration: "Vladivostok", es: "Vladivostok" },
  ],
  grammarPoint: {
    title: "«Я + profesión» y «Я из + ciudad»",
    explanation:
      "Para decir tu profesión en ruso, solo hace falta poner я y la profesión, sin verbo (Я врач — Soy médico). Para decir de qué ciudad sos, se usa «я из» + la ciudad en genitivo: Москва→Москвы, Казань→Казани, Новосибирск→Новосибирска.",
    tables: [
      {
        title: "«Я + profesión» y «Я из + ciudad»",
        columns: ["Estructura", "Ejemplo", "Español"],
        rows: [
          ["Я + профессия", "Я врач.", "Soy médico."],
          ["Я + профессия", "Я учитель.", "Soy maestro."],
          ["Я + профессия", "Я инженер.", "Soy ingeniero."],
          ["Я + профессия", "Я художник.", "Soy pintor."],
          ["Я из + город", "Я из Москвы.", "Soy de Moscú."],
          ["Я из + город", "Я из Казани.", "Soy de Kazán."],
          ["Я из + город", "Я из Новосибирска.", "Soy de Novosibirsk."],
          ["Я из + город", "Я из Владивостока.", "Soy de Vladivostok."],
        ],
        note: "Con «из» (de) la ciudad va en genitivo: los nombres en -а pierden la -а (Москва→Москвы), los que terminan en -ь cambian a -и (Казань→Казани), y los que terminan en consonante suman -а (Новосибирск→Новосибирска). Con la profesión, en cambio, no hace falta declinar nada.",
      },
    ],
    examples: [
      { ru: "Я врач.", transliteration: "ya vrach.", es: "Soy médico." },
      { ru: "Я учитель.", transliteration: "ya uchitel'.", es: "Soy maestro." },
      { ru: "Я из Москвы.", transliteration: "ya iz Moskvy.", es: "Soy de Moscú." },
      { ru: "Я из Казани.", transliteration: "ya iz Kazani.", es: "Soy de Kazán." },
    ],
  },
  conversation: {
    title: "💼 ¿A qué te dedicas?",
    lines: [
      {
        speaker: "A",
        transliteration: "ty student? kakaya u tebya rabota?",
        segments: [{ ru: "Ты студент? Какая у тебя работа?", es: "¿Sos estudiante? ¿En qué trabajás?" }],
      },
      {
        speaker: "B",
        transliteration: "ya vrach. a ty?",
        segments: [{ ru: "Я врач. А ты?", es: "Soy médico. ¿Y vos?" }],
      },
      {
        speaker: "A",
        transliteration: "ya uchitel'. a tvoy drug?",
        segments: [{ ru: "Я учитель. А твой друг?", es: "Soy maestro. ¿Y tu amigo?" }],
      },
      {
        speaker: "B",
        transliteration: "moy drug khudozhnik. on iz Novosibirska.",
        segments: [{ ru: "Мой друг художник. Он из Новосибирска.", es: "Mi amigo es pintor. Es de Novosibirsk." }],
      },
      {
        speaker: "A",
        transliteration: "a ty otkuda?",
        segments: [{ ru: "А ты откуда?", es: "¿Y vos de dónde sos?" }],
      },
      {
        speaker: "B",
        transliteration: "ya iz Kazani.",
        segments: [{ ru: "Я из Казани.", es: "Soy de Kazán." }],
      },
    ],
  },
  reading: {
    title: "Разные профессии",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Меня зовут Павел. Я инженер. Я из Владивостока.", es: "Me llamo Pável. Soy ingeniero. Soy de Vladivostok." },
        ],
      },
      {
        segments: [
          { ru: "Мой друг Лёша — музыкант. Он из Новосибирска.", es: "Mi amigo Liosha es músico. Es de Novosibirsk." },
        ],
      },
      {
        segments: [
          { ru: "А моя подруга Анна — таксист. Она из Казани.", es: "Y mi amiga Anna es taxista. Es de Kazán." },
        ],
      },
      {
        segments: [
          { ru: "У нас разная работа, но мы хорошие друзья.", es: "Tenemos trabajos distintos, pero somos buenos amigos." },
        ],
      },
    ],
  },
  fillBlank: {
    title: "Practicá profesión y ciudad de origen",
    instructions: "Completá cada frase con la palabra correcta.",
    wordBank: [
      { ru: "врач", transliteration: "vrach" },
      { ru: "учитель", transliteration: "uchitel'" },
      { ru: "Москвы", transliteration: "Moskvy" },
      { ru: "Казани", transliteration: "Kazani" },
      { ru: "Новосибирска", transliteration: "Novosibirska" },
      { ru: "Владивостока", transliteration: "Vladivostoka" },
      { ru: "художник", transliteration: "khudozhnik" },
    ],
    sentences: [
      { before: "Я ", answer: "врач", after: ".", es: "Soy médico." },
      { before: "Я ", answer: "учитель", after: ".", es: "Soy maestro." },
      { before: "Я из ", answer: "Москвы", after: ".", es: "Soy de Moscú." },
      { before: "Я из ", answer: "Казани", after: ".", es: "Soy de Kazán." },
      { before: "Я из ", answer: "Новосибирска", after: ".", es: "Soy de Novosibirsk." },
      { before: "Я из ", answer: "Владивостока", after: ".", es: "Soy de Vladivostok." },
      { before: "Кто это? 👨‍⚕️ — Это ", answer: "врач", after: ".", es: "¿Quién es? 👨‍⚕️ — Es un médico." },
      { before: "Кто это? 👩‍🏫 — Это ", answer: "учитель", after: ".", es: "¿Quién es? 👩‍🏫 — Es una maestra." },
      { before: "Кто это? 🎨 — Это ", answer: "художник", after: ".", es: "¿Quién es? 🎨 — Es un pintor." },
    ],
  },
};

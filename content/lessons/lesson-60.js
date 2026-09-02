export const lesson = {
  slug: "poetry-meter-rhyme",
  level: "C2",
  module: "Módulo 1b — Poesía",
  order: 3,
  title: "Poesía: métrica, rima y lenguaje poético",
  vocabulary: [
    { ru: "Рифма", transliteration: "rifma", es: "Rima" },
    { ru: "Размер", transliteration: "razmer", es: "Métrica (patrón de sílabas acentuadas)" },
    { ru: "Строфа", transliteration: "strofa", es: "Estrofa" },
    { ru: "Четверостишие", transliteration: "chetverostishiye", es: "Estrofa de cuatro versos (cuarteto)" },
    { ru: "Безмолвно", transliteration: "bezmolvno", es: "En silencio (poético)" },
    { ru: "Нежно", transliteration: "nezhno", es: "Tiernamente" },
  ],
  grammarPoint: {
    title: "Poesía: métrica, rima y lenguaje poético",
    explanation:
      "La poesía rusa clásica se organiza en versos con métrica silábico-tónica (un patrón regular de sílabas acentuadas y no acentuadas) y esquemas de rima. Antes de analizar el significado de un poema, conviene reconocer su forma: cuántos versos tiene cada estrofa, cómo riman entre sí, y qué palabras eligió el poeta tanto por su sonido como por su sentido.",
    tables: [
      {
        title: "Términos básicos de análisis poético",
        columns: ["Término", "Significado"],
        rows: [
          ["Рифма", "Rima — coincidencia de sonidos al final del verso"],
          ["Размер", "Métrica — el patrón regular de sílabas acentuadas"],
          ["Строфа", "Estrofa — grupo de versos"],
          ["Четверостишие", "Estrofa de cuatro versos (cuarteto)"],
        ],
        note: "El poema de esta lección tiene dos четверостишия con rima cruzada (ABAB): el primer verso rima con el tercero, el segundo con el cuarto.",
      },
    ],
    examples: [
      { ru: "Любил / тревожит — это не рифма.", transliteration: "lyubil / trevozhit — eto ne rifma.", es: "«Любил» / «тревожит» — eso no es una rima." },
      { ru: "Может / тревожит — это рифма (окончания похожи).", transliteration: "mozhet / trevozhit — eto rifma.", es: "«Может» / «тревожит» — eso sí es una rima (las terminaciones se parecen)." },
      { ru: "Она читала стихи безмолвно, только двигая губами.", transliteration: "ona chitala stikhi bezmolvno, tol'ko dvigaya gubami.", es: "Leía los versos en silencio, moviendo apenas los labios." },
      { ru: "Он говорил с ней очень нежно.", transliteration: "on govoril s ney ochen' nezhno.", es: "Le hablaba con mucha ternura." },
    ],
  },
  conversation: {
    title: "🖋️ Анализ стихотворения",
    lines: [
      {
        speaker: "A",
        transliteration: "kakoy razmer u etogo stikhotvoreniya?",
        segments: [{ ru: "Какой размер у этого стихотворения?", es: "¿Qué métrica tiene este poema?" }],
      },
      {
        speaker: "B",
        transliteration: "eto klassicheskiy razmer Pushkina. a rifma zdes' perekryostnaya.",
        segments: [{ ru: "Это классический размер Пушкина.", es: "Es la métrica clásica de Pushkin." }, { ru: "А рифма здесь перекрёстная.", es: "Y la rima acá es cruzada." }],
      },
      {
        speaker: "A",
        transliteration: "mne nravitsya, kak on pishet ob etom bezmolvno i nezhno.",
        segments: [{ ru: "Мне нравится, как он пишет об этом безмолвно и нежно.", es: "Me gusta cómo escribe sobre esto en silencio y con ternura." }],
      },
      {
        speaker: "B",
        transliteration: "eto i yest' glavnaya sila etogo chetverostishiya.",
        segments: [{ ru: "Это и есть главная сила этого четверостишия.", es: "Esa es justamente la principal fuerza de esta estrofa." }],
      },
    ],
  },
  reading: {
    title: "«Я вас любил» — А. С. Пушкин",
    type: "poema",
    paragraphs: [
      {
        segments: [
          { ru: "Я вас любил: любовь ещё, быть может,", es: "Te amé: el amor, acaso todavía," },
          { ru: "В душе моей угасла не совсем;", es: "no se ha apagado del todo en mi alma;" },
          { ru: "Но пусть она вас больше не тревожит;", es: "pero que ya no te inquiete más;" },
          { ru: "Я не хочу печалить вас ничем.", es: "no quiero entristecerte con nada." },
        ],
      },
      {
        segments: [
          { ru: "Я вас любил безмолвно, безнадежно,", es: "Te amé en silencio, sin esperanza," },
          { ru: "То робостью, то ревностью томим;", es: "atormentado a veces por la timidez, a veces por los celos;" },
          { ru: "Я вас любил так искренно, так нежно,", es: "te amé tan sinceramente, tan tiernamente," },
          { ru: "Как дай вам Бог любимой быть другим.", es: "como quiera Dios que otro te ame algún día." },
        ],
      },
    ],
  },
};

export const lesson = {
  slug: "irony-subtext",
  level: "C2",
  module: "Módulo 2 — Ironía y subtexto",
  order: 4,
  title: "Ironía, subtexto y registro figurativo",
  vocabulary: [
    { ru: "Ирония", transliteration: "ironiya", es: "Ironía" },
    { ru: "Подтекст", transliteration: "podtekst", es: "Subtexto" },
    { ru: "Намёк", transliteration: "namyok", es: "Insinuación" },
    { ru: "Скрытый", transliteration: "skrytyy", es: "Oculto" },
    { ru: "Буквально", transliteration: "bukval'no", es: "Literalmente" },
    { ru: "На самом деле", transliteration: "na samom dele", es: "En realidad" },
  ],
  grammarPoint: {
    title: "Ironía, subtexto y registro figurativo",
    explanation:
      "Mucho de lo que se comunica en ruso — especialmente en la literatura y en la conversación educada — no está en las palabras literales, sino en el подтекст: lo que se insinúa, lo que se dice con ironía, lo que se calla a propósito. Leer entre líneas es una habilidad tan importante como entender la gramática.",
    tables: [
      {
        title: "Tres recursos de significado indirecto",
        columns: ["Recurso", "Función", "Ejemplo"],
        rows: [
          ["Ирония", "Decir lo contrario de lo que se piensa, con cierto tono", "«Ну конечно, ты всегда прав!» (sarcástico)"],
          ["Подтекст", "Significado implícito bajo el sentido literal", "«Здесь немного прохладно» (= quiero que cierres la ventana)"],
          ["Намёк", "Insinuación indirecta de algo que no se dice abiertamente", "«Уже поздно...» (= deberíamos irnos)"],
        ],
        note: "Estos recursos dependen del tono, del contexto y de la relación entre los hablantes — no hay marca gramatical que los señale, hay que inferirlos.",
      },
    ],
    examples: [
      { ru: "«Прекрасная погода!» — сказала она, глядя на дождь.", transliteration: "«prekrasnaya pogoda!» — skazala ona, glyadya na dozhd'.", es: "«¡Qué clima maravilloso!», dijo mirando la lluvia." },
      { ru: "В его словах был скрытый намёк на прошлое.", transliteration: "v yego slovakh byl skrytyy namyok na proshloye.", es: "En sus palabras había una insinuación oculta sobre el pasado." },
      { ru: "Она не сказала это буквально, но подтекст был ясен.", transliteration: "ona ne skazala eto bukval'no, no podtekst byl yasen.", es: "No lo dijo literalmente, pero el subtexto estaba claro." },
      { ru: "На самом деле он был совсем не рад этой новости.", transliteration: "na samom dele on byl sovsem ne rad etoy novosti.", es: "En realidad, no estaba nada contento con esa noticia." },
    ],
  },
  conversation: {
    title: "☕ Скрытый смысл",
    lines: [
      {
        speaker: "A",
        transliteration: "kak tebe moy novyy proyekt?",
        segments: [{ ru: "Как тебе мой новый проект?", es: "¿Qué te parece mi proyecto nuevo?" }],
      },
      {
        speaker: "B",
        transliteration: "nu... eto, konechno, ochen' original'no.",
        segments: [{ ru: "Ну... это, конечно, очень оригинально.", es: "Bueno... esto es, sin dudas, muy original." }],
      },
      {
        speaker: "A",
        transliteration: "ya slyshu v etom kakoy-to skrytyy namyok.",
        segments: [{ ru: "Я слышу в этом какой-то скрытый намёк.", es: "Escucho ahí alguna insinuación oculta." }],
      },
      {
        speaker: "B",
        transliteration: "na samom dele ya khotel skazat', chto idei nemnogo strannyye.",
        segments: [{ ru: "На самом деле я хотел сказать, что идеи немного странные.", es: "En realidad quería decir que las ideas son un poco raras." }],
      },
      {
        speaker: "A",
        transliteration: "spasibo, chto skazal bez ironii.",
        segments: [{ ru: "Спасибо, что сказал без иронии.", es: "Gracias por decirlo sin ironía." }],
      },
    ],
  },
  reading: {
    title: "Разговор за чаем",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "«Ты, конечно, уже прочитал мою книгу», — сказала Ирина с лёгкой иронией.", es: "«Vos, por supuesto, ya leíste mi libro», dijo Irina con leve ironía." },
          { ru: "Она прекрасно знала, что он этого не сделал.", es: "Ella sabía perfectamente que él no lo había hecho." },
        ],
      },
      {
        segments: [
          { ru: "«Э-э... почти», — ответил он, избегая её взгляда.", es: "«Eh... casi», respondió él, evitando su mirada." },
          { ru: "В его голосе был скрытый намёк на то, что он забыл.", es: "En su voz había una insinuación oculta de que se había olvidado." },
        ],
      },
      {
        segments: [
          { ru: "Ирина не сказала ничего буквально, но подтекст был ясен: она обиделась.", es: "Irina no dijo nada literalmente, pero el subtexto estaba claro: se había ofendido." },
          { ru: "На самом деле она просто хотела, чтобы он был честен с самого начала.", es: "En realidad, solo quería que él fuera honesto desde el principio." },
        ],
      },
    ],
  },
};

export const lesson = {
  slug: "academic-register",
  level: "C1",
  module: "Módulo 3b — Registro académico",
  order: 8,
  title: "Registro académico: voz pasiva y construcciones impersonales",
  vocabulary: [
    { ru: "Считается", transliteration: "schitayetsya", es: "Se considera / se cree" },
    { ru: "Известно", transliteration: "izvestno", es: "Se sabe / es sabido" },
    { ru: "Проводиться", transliteration: "provodit'sya", es: "Llevarse a cabo, realizarse" },
    { ru: "Осуществляться", transliteration: "osushchestvlyat'sya", es: "Realizarse, ejecutarse (formal)" },
    { ru: "Указывать", transliteration: "ukazyvat'", es: "Indicar, señalar" },
    { ru: "Выявить", transliteration: "vyyavit'", es: "Revelar, detectar (perfectivo)" },
  ],
  grammarPoint: {
    title: "Registro académico: voz pasiva y construcciones impersonales",
    explanation:
      "Los textos académicos y científicos evitan el sujeto personal: usan la voz pasiva reflexiva con -ся (проводиться, осуществляться) o construcciones impersonales con predicado neutro (известно, что...; считается, что...) para sonar objetivos y despersonalizados.",
    tables: [
      {
        title: "Construcciones del registro académico",
        columns: ["Construcción", "Uso", "Ejemplo"],
        rows: [
          ["Verbo + -ся (pasiva reflexiva)", "Acción sin agente explícito", "Исследование проводится в университете."],
          ["Известно, что...", "Hecho aceptado como conocido", "Известно, что вода кипит при 100°."],
          ["Считается, что...", "Opinión o consenso general", "Считается, что это лучший метод."],
          ["Было выявлено, что...", "Resultado de una investigación", "Было выявлено, что метод эффективен."],
        ],
        note: "La pasiva con -ся es la forma más neutra: no menciona quién realiza la acción, solo que ocurre — típico del estilo científico ruso.",
      },
    ],
    examples: [
      { ru: "Считается, что этот метод самый надёжный.", transliteration: "schitayetsya, chto etot metod samyy nadyozhnyy.", es: "Se considera que este método es el más confiable." },
      { ru: "Известно, что климат меняется быстрее, чем ожидалось.", transliteration: "izvestno, chto klimat menyayetsya bystreye, chem ozhidalos'.", es: "Se sabe que el clima cambia más rápido de lo esperado." },
      { ru: "Эксперимент проводится в трёх городах одновременно.", transliteration: "eksperiment provoditsya v tryokh gorodakh odnovremenno.", es: "El experimento se lleva a cabo en tres ciudades a la vez." },
      { ru: "Было выявлено, что большинство участников согласны с этим.", transliteration: "bylo vyyavleno, chto bol'shinstvo uchastnikov soglasny s etim.", es: "Se reveló que la mayoría de los participantes está de acuerdo con esto." },
    ],
  },
  conversation: {
    title: "🔬 Обсуждение исследования",
    lines: [
      {
        speaker: "A",
        transliteration: "kak provoditsya vashe issledovaniye?",
        segments: [{ ru: "Как проводится ваше исследование?", es: "¿Cómo se lleva a cabo su investigación?" }],
      },
      {
        speaker: "B",
        transliteration: "ono osushchestvlyayetsya v neskol'kikh universitetakh odnovremenno.",
        segments: [{ ru: "Оно осуществляется в нескольких университетах одновременно.", es: "Se realiza en varias universidades a la vez." }],
      },
      {
        speaker: "A",
        transliteration: "chto uzhe udalos' vyyavit'?",
        segments: [{ ru: "Что уже удалось выявить?", es: "¿Qué se logró revelar hasta ahora?" }],
      },
      {
        speaker: "B",
        transliteration: "bylo vyyavleno, chto rezul'taty ukazyvayut na novuyu zakonomernost'.",
        segments: [{ ru: "Было выявлено, что результаты указывают на новую закономерность.", es: "Se reveló que los resultados indican una nueva regularidad." }],
      },
      {
        speaker: "A",
        transliteration: "interesno. schitayetsya, chto eto mozhet izmenit' teoriyu?",
        segments: [{ ru: "Интересно. Считается, что это может изменить теорию?", es: "Interesante. ¿Se considera que esto puede cambiar la teoría?" }],
      },
    ],
  },
  reading: {
    title: "О результатах исследования",
    type: "artículo",
    paragraphs: [
      {
        segments: [
          { ru: "В последние годы всё чаще проводятся исследования влияния сна на память.", es: "En los últimos años, cada vez más se llevan a cabo investigaciones sobre la influencia del sueño en la memoria." },
          { ru: "Известно, что недостаток сна ухудшает концентрацию.", es: "Es sabido que la falta de sueño empeora la concentración." },
        ],
      },
      {
        segments: [
          { ru: "Считается, что взрослому человеку необходимо спать не менее семи часов.", es: "Se considera que un adulto necesita dormir al menos siete horas." },
          { ru: "Новое исследование осуществлялось в течение двух лет и включало более тысячи участников.", es: "Una nueva investigación se llevó a cabo durante dos años e incluyó a más de mil participantes." },
        ],
      },
      {
        segments: [
          { ru: "Было выявлено, что участники, спавшие меньше шести часов, хуже справлялись с тестами.", es: "Se reveló que los participantes que dormían menos de seis horas rendían peor en las pruebas." },
          { ru: "Результаты указывают на прямую связь между сном и работой мозга.", es: "Los resultados indican una relación directa entre el sueño y el funcionamiento del cerebro." },
        ],
      },
    ],
  },
};

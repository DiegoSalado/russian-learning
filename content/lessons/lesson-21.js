export const lesson = {
  slug: "opinion-argumentation",
  level: "B1",
  module: "Módulo 5 — Opinión y argumentación simple",
  order: 5,
  title: "Expresar opinión y argumentar",
  vocabulary: [
    { ru: "я думаю, что", transliteration: "ya dumayu, chto", es: "pienso que" },
    { ru: "по-моему", transliteration: "po-moyemu", es: "en mi opinión (coloquial)" },
    { ru: "на мой взгляд", transliteration: "na moy vzglyad", es: "a mi parecer (más formal)" },
    { ru: "я согласен / согласна", transliteration: "ya soglasen / soglasna", es: "estoy de acuerdo" },
    { ru: "я не согласен / не согласна", transliteration: "ya ne soglasen / ne soglasna", es: "no estoy de acuerdo" },
    { ru: "поэтому", transliteration: "poetomu", es: "por eso" },
    { ru: "так как", transliteration: "tak kak", es: "ya que, dado que" },
    { ru: "из-за того что", transliteration: "iz-za togo chto", es: "debido a que" },
    { ru: "мнение", transliteration: "mneniye", es: "opinión" },
    { ru: "спорить", transliteration: "sporit'", es: "discutir, debatir" },
  ],
  grammarPoint: {
    title: "Expresiones de opinión y conectores de causa-consecuencia",
    explanation:
      "Para dar una opinión en ruso hay varias fórmulas con distinto grado de formalidad: desde por-моему (muy coloquial) hasta на мой взгляд o я считаю, что (más propias de un texto escrito o argumentativo). Para justificar una opinión se usan conectores causales como так как o из-за того что (porque/dado que), y para señalar la consecuencia, поэтому (por eso).",
    tables: [
      {
        title: "Expresiones de opinión y su registro",
        columns: ["Expresión", "Uso", "Registro"],
        rows: [
          ["Я думаю, что...", "Opinión general, introduce cualquier idea", "Neutro"],
          ["По-моему...", "Opinión personal y directa", "Informal"],
          ["На мой взгляд...", "Opinión argumentada y elaborada", "Formal / escrito"],
          ["Мне кажется, что...", "Opinión con matiz de duda o suavidad", "Neutro"],
          ["Я считаю, что...", "Opinión firme y argumentativa", "Formal"],
        ],
        note: "Cuanto más formal es la expresión, más se usa en ensayos, artículos o debates; las coloquiales son propias de la conversación diaria.",
      },
    ],
    examples: [
      { ru: "Я не согласен с тобой, так как эта работа неудобна.", transliteration: "ya ne soglasen s toboy, tak kak eta rabota neudobna.", es: "No estoy de acuerdo contigo, ya que este trabajo es incómodo." },
      { ru: "Она устала, поэтому решила уйти пораньше.", transliteration: "ona ustala, poetomu reshila uyti poran'she.", es: "Ella estaba cansada, por eso decidió irse más temprano." },
      { ru: "Из-за того что все работают из дома, офисы опустели.", transliteration: "iz-za togo chto vse rabotayut iz doma, ofisy opusteli.", es: "Debido a que todos trabajan desde casa, las oficinas se vaciaron." },
      { ru: "На мой взгляд, удалённая работа даёт больше свободы.", transliteration: "na moy vzglyad, udalyonnaya rabota dayot bol'she svobody.", es: "A mi parecer, el trabajo remoto da más libertad." },
    ],
  },
  conversation: {
    title: "💬 Спор о социальных сетях",
    lines: [
      {
        speaker: "A",
        transliteration: "po-moyemu, sotsial'nyye seti prinosyat bol'she vreda, chem pol'zy.",
        segments: [{ ru: "По-моему, социальные сети приносят больше вреда, чем пользы.", es: "En mi opinión, las redes sociales hacen más daño que bien." }],
      },
      {
        speaker: "B",
        transliteration: "ya ne soglasna. na moy vzglyad, oni pomogayut lyudyam obshchat'sya, dazhe yesli oni daleko drug ot druga.",
        segments: [
          { ru: "Я не согласна.", es: "No estoy de acuerdo." },
          { ru: "На мой взгляд, они помогают людям общаться, даже если они далеко друг от друга.", es: "A mi parecer, ayudan a la gente a comunicarse, incluso cuando están lejos unos de otros." },
        ],
      },
      {
        speaker: "A",
        transliteration: "no ya dumayu, chto lyudi stali men'she razgovarivat' vzhivuyu, tak kak vsyo vremya sidyat v telefone.",
        segments: [{ ru: "Но я думаю, что люди стали меньше разговаривать вживую, так как всё время сидят в телефоне.", es: "Pero pienso que la gente empezó a hablar menos en persona, ya que está todo el tiempo en el teléfono." }],
      },
      {
        speaker: "B",
        transliteration: "eto pravda, no eto zavisit ot cheloveka, a ne ot samikh setey.",
        segments: [{ ru: "Это правда, но это зависит от человека, а не от самих сетей.", es: "Eso es cierto, pero depende de la persona, no de las redes en sí." }],
      },
      {
        speaker: "A",
        transliteration: "vozmozhno, ty prava. ya prosto schitayu, chto nuzhno bol'she vremeni provodit' bez telefona.",
        segments: [{ ru: "Возможно, ты права.", es: "Quizás tengas razón." }, { ru: "Я просто считаю, что нужно больше времени проводить без телефона.", es: "Solo creo que hay que pasar más tiempo sin el teléfono." }],
      },
      {
        speaker: "B",
        transliteration: "s etim ya soglasna polnost'yu!",
        segments: [{ ru: "С этим я согласна полностью!", es: "¡Con eso estoy totalmente de acuerdo!" }],
      },
    ],
  },
  reading: {
    title: "Работа из дома: за и против",
    type: "artículo",
    paragraphs: [
      {
        segments: [
          { ru: "В последние годы всё больше людей работают из дома, и мнения об этом сильно расходятся.", es: "En los últimos años, cada vez más personas trabajan desde casa, y las opiniones sobre esto difieren mucho." },
          { ru: "Одни считают, что удалённая работа — это шаг вперёд, другие уверены, что она приносит больше проблем, чем пользы.", es: "Unos consideran que el trabajo remoto es un paso adelante, otros están seguros de que trae más problemas que beneficios." },
          { ru: "Эта тема часто обсуждается в новостях, в социальных сетях и даже в разговорах между друзьями.", es: "Este tema se debate a menudo en las noticias, en las redes sociales e incluso en conversaciones entre amigos." },
        ],
      },
      {
        segments: [
          { ru: "На мой взгляд, у работы из дома много преимуществ.", es: "A mi parecer, el trabajo desde casa tiene muchas ventajas." },
          { ru: "Во-первых, человек экономит время, так как ему не нужно ехать в офис каждое утро.", es: "En primer lugar, la persona ahorra tiempo, ya que no necesita viajar a la oficina cada mañana." },
          { ru: "Во-вторых, из-за того что рабочий график становится гибче, легче находить время для семьи и отдыха.", es: "En segundo lugar, debido a que el horario laboral se vuelve más flexible, es más fácil encontrar tiempo para la familia y el descanso." },
          { ru: "В-третьих, многие говорят, что дома они чувствуют себя спокойнее и поэтому работают продуктивнее.", es: "En tercer lugar, muchos dicen que en casa se sienten más tranquilos y por eso trabajan de forma más productiva." },
        ],
      },
      {
        segments: [
          { ru: "Однако не все согласны с этим мнением.", es: "Sin embargo, no todos están de acuerdo con esta opinión." },
          { ru: "Многие считают, что дома трудно сосредоточиться, так как всегда есть отвлекающие факторы: дети, шум, домашние дела.", es: "Muchos consideran que en casa es difícil concentrarse, ya que siempre hay factores que distraen: los hijos, el ruido, las tareas domésticas." },
          { ru: "Кроме того, некоторые говорят, что без коллег рядом теряется чувство команды.", es: "Además, algunos dicen que sin colegas cerca se pierde el sentido de equipo." },
          { ru: "Из-за того что границы между работой и личной жизнью стираются, некоторые люди работают даже больше, чем раньше.", es: "Debido a que los límites entre el trabajo y la vida personal se difuminan, algunas personas trabajan incluso más que antes." },
        ],
      },
      {
        segments: [
          { ru: "Я думаю, что идеальное решение — это комбинированный формат: несколько дней дома и несколько дней в офисе.", es: "Pienso que la solución ideal es un formato combinado: algunos días en casa y algunos días en la oficina." },
          { ru: "Таким образом человек получает и свободу, и живое общение с коллегами.", es: "De esa manera, la persona obtiene tanto libertad como comunicación en vivo con sus colegas." },
          { ru: "Так как этот формат сочетает преимущества обоих подходов, всё больше компаний выбирают именно его.", es: "Ya que este formato combina las ventajas de ambos enfoques, cada vez más empresas eligen precisamente ese." },
        ],
      },
      {
        segments: [
          { ru: "В любом случае, этот вопрос будет обсуждаться ещё долго, поэтому каждому стоит найти формат, который подходит именно ему.", es: "En cualquier caso, este tema se seguirá debatiendo por mucho tiempo, así que cada uno debería encontrar el formato que le resulte más adecuado." },
          { ru: "По-моему, не существует одного правильного ответа для всех, так как у каждого человека разные условия и разные привычки.", es: "En mi opinión, no existe una única respuesta correcta para todos, ya que cada persona tiene condiciones y hábitos distintos." },
        ],
      },
    ],
  },
};

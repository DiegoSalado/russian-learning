export const lesson = {
  slug: "word-formation-suffixes",
  level: "C2",
  module: "Módulo 3 — Formación de palabras",
  order: 6,
  title: "Formación de palabras: sufijos productivos",
  vocabulary: [
    { ru: "Молодость", transliteration: "molodost'", es: "Juventud" },
    { ru: "Важность", transliteration: "vazhnost'", es: "Importancia" },
    { ru: "Помощник", transliteration: "pomoshchnik", es: "Ayudante" },
    { ru: "Художественный", transliteration: "khudozhestvennyy", es: "Artístico" },
    { ru: "Политический", transliteration: "politicheskiy", es: "Político (adjetivo)" },
    { ru: "Экономический", transliteration: "ekonomicheskiy", es: "Económico" },
  ],
  grammarPoint: {
    title: "Formación de palabras: sufijos productivos",
    explanation:
      "El ruso forma sustantivos y adjetivos nuevos a partir de raíces ya conocidas usando sufijos productivos — patrones que se repiten una y otra vez. Reconocerlos permite deducir el significado de palabras que nunca viste, con solo identificar la raíz y el sufijo.",
    tables: [
      {
        title: "Tres sufijos productivos",
        columns: ["Sufijo", "Función", "Ejemplo"],
        rows: [
          ["-ость", "Sustantivo abstracto de cualidad (desde un adjetivo)", "молодой (joven) → молодость (juventud)"],
          ["-ник", "Persona relacionada con algo", "помощь (ayuda) → помощник (ayudante)"],
          ["-ическ(ий)", "Adjetivo relativo a un campo o disciplina", "политика (política) → политический (político)"],
        ],
        note: "Una vez que reconocés el patrón, palabras como «важность» (важный + -ость) o «экономический» (экономика + -ический) dejan de ser vocabulario nuevo y pasan a ser solo una raíz conocida con un sufijo conocido.",
      },
    ],
    examples: [
      { ru: "С возрастом приходит мудрость, а не только молодость уходит.", transliteration: "s vozrastom prikhodit mudrost', a ne tol'ko molodost' ukhodit.", es: "Con la edad llega la sabiduría, y no solo se va la juventud." },
      { ru: "Он не понимал важности этого решения.", transliteration: "on ne ponimal vazhnosti etogo resheniya.", es: "Él no entendía la importancia de esta decisión." },
      { ru: "Мой помощник уже подготовил все документы.", transliteration: "moy pomoshchnik uzhe podgotovil vse dokumenty.", es: "Mi ayudante ya preparó todos los documentos." },
      { ru: "Это художественный фильм, а не документальный.", transliteration: "eto khudozhestvennyy fil'm, a ne dokumental'nyy.", es: "Esta es una película artística, no un documental." },
    ],
  },
  conversation: {
    title: "🗞️ Новости дня",
    lines: [
      {
        speaker: "A",
        transliteration: "ty slyshal poslednie politicheskiye novosti?",
        segments: [{ ru: "Ты слышал последние политические новости?", es: "¿Escuchaste las últimas noticias políticas?" }],
      },
      {
        speaker: "B",
        transliteration: "da, no menya bol'she interesuyet ekonomicheskaya storona voprosa.",
        segments: [{ ru: "Да, но меня больше интересует экономическая сторона вопроса.", es: "Sí, pero a mí me interesa más el lado económico del asunto." }],
      },
      {
        speaker: "A",
        transliteration: "ponimayu vazhnost' etoy temy. moy pomoshchnik gotovit doklad ob etom.",
        segments: [{ ru: "Понимаю важность этой темы.", es: "Entiendo la importancia de este tema." }, { ru: "Мой помощник готовит доклад об этом.", es: "Mi ayudante está preparando un informe sobre esto." }],
      },
      {
        speaker: "B",
        transliteration: "otlichno. v moyu molodost' takikh vozmozhnostey ne bylo.",
        segments: [{ ru: "Отлично. В мою молодость таких возможностей не было.", es: "Excelente. En mi juventud no existían esas oportunidades." }],
      },
    ],
  },
  reading: {
    title: "Помощник директора",
    type: "artículo",
    paragraphs: [
      {
        segments: [
          { ru: "Новый помощник директора начал работу в понедельник.", es: "El nuevo ayudante del director comenzó a trabajar el lunes." },
          { ru: "У него уже есть большой опыт: он изучал экономический и политический анализ в университете.", es: "Ya tiene una gran experiencia: estudió análisis económico y político en la universidad." },
        ],
      },
      {
        segments: [
          { ru: "Директор сразу понял важность этого назначения.", es: "El director comprendió enseguida la importancia de este nombramiento." },
          { ru: "«В его молодость это редкость — такой уровень знаний», — сказал он коллегам.", es: "«Para su juventud, es una rareza tener este nivel de conocimientos», les dijo a sus colegas." },
        ],
      },
      {
        segments: [
          { ru: "Кроме работы, новый сотрудник увлекается художественным кино и часто ходит на выставки.", es: "Además del trabajo, al nuevo empleado le apasiona el cine artístico y suele ir a exposiciones." },
        ],
      },
    ],
  },
};

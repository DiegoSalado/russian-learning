export const lesson = {
  slug: "short-story-reading",
  level: "C1",
  module: "Módulo 4 — Lectura de cierre",
  order: 9,
  title: "Lectura: un cuento corto",
  vocabulary: [
    { ru: "Взгляд", transliteration: "vzglyad", es: "Mirada" },
    { ru: "Вздохнуть", transliteration: "vzdokhnut'", es: "Suspirar" },
    { ru: "Задуматься", transliteration: "zadumat'sya", es: "Quedarse pensativo, absorto" },
    { ru: "Молчание", transliteration: "molchaniye", es: "Silencio" },
    { ru: "Одиночество", transliteration: "odinochestvo", es: "Soledad" },
    { ru: "Судьба", transliteration: "sud'ba", es: "Destino" },
  ],
  grammarPoint: {
    title: "Matices literarios: sinónimos de la narrativa breve",
    explanation:
      "La prosa breve rusa (Чехов es el maestro del género) se apoya en detalles pequeños y palabras precisas para transmitir emoción sin explicarla directamente. Reconocer estos matices — un взгляд (mirada cargada de sentido) en vez de simplemente «mirar», un vздохнуть (suspiro) en vez de decir «estaba triste» — es clave para leer literatura rusa con soltura.",
    tables: [
      {
        title: "Palabras que muestran, no explican",
        columns: ["Palabra", "Uso narrativo", "Ejemplo"],
        rows: [
          ["Взгляд", "Una mirada cargada de significado, no solo «ver»", "Она бросила на него грустный взгляд."],
          ["Вздохнуть", "Suspirar — muestra cansancio o tristeza sin nombrarla", "Он вздохнул и посмотрел в окно."],
          ["Задуматься", "Quedarse absorto en un pensamiento", "Она задумалась о прошлом."],
          ["Молчание", "El silencio como parte activa de la escena", "Повисло долгое молчание."],
        ],
        note: "Estas palabras no aportan información nueva a la trama — aportan atmósfera. Un buen lector de narrativa breve les presta tanta atención como a los hechos mismos.",
      },
    ],
    examples: [
      { ru: "Она бросила на него грустный взгляд и ничего не сказала.", transliteration: "ona brosila na nego grustnyy vzglyad i nichego ne skazala.", es: "Ella le lanzó una mirada triste y no dijo nada." },
      { ru: "Он вздохнул, вспоминая свою молодость.", transliteration: "on vzdokhnul, vspominaya svoyu molodost'.", es: "Él suspiró, recordando su juventud." },
      { ru: "Задумавшись, она не заметила, как стемнело.", transliteration: "zadumavshis', ona ne zametila, kak stemnelo.", es: "Absorta en sus pensamientos, no notó que había oscurecido." },
      { ru: "Между ними повисло долгое молчание.", transliteration: "mezhdu nimi povislo dolgoye molchaniye.", es: "Entre ellos se instaló un largo silencio." },
    ],
  },
  conversation: {
    title: "📖 Перед чтением",
    lines: [
      {
        speaker: "A",
        transliteration: "ty uzhe prochital etot rasskaz?",
        segments: [{ ru: "Ты уже прочитал этот рассказ?", es: "¿Ya leíste este cuento?" }],
      },
      {
        speaker: "B",
        transliteration: "da, on o cheloveke, kotoryy vstrechayet staruyu znakomuyu na vokzale.",
        segments: [{ ru: "Да, он о человеке, который встречает старую знакомую на вокзале.", es: "Sí, es sobre un hombre que se encuentra con una vieja conocida en la estación." }],
      },
      {
        speaker: "A",
        transliteration: "o chyom oni govoryat?",
        segments: [{ ru: "О чём они говорят?", es: "¿De qué hablan?" }],
      },
      {
        speaker: "B",
        transliteration: "pochti ni o chyom. no v ikh molchanii bol'she, chem v slovakh.",
        segments: [{ ru: "Почти ни о чём. Но в их молчании больше, чем в словах.", es: "Casi de nada. Pero en su silencio hay más que en las palabras." }],
      },
    ],
  },
  reading: {
    title: "Встреча на вокзале",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Поезд опаздывал, и Сергей Иванович сидел на скамейке, глядя на пустые рельсы.", es: "El tren se retrasaba, y Serguéi Ivánovich estaba sentado en un banco, mirando las vías vacías." },
          { ru: "Рядом кто-то сел. Он поднял взгляд и не поверил своим глазам: это была Анна.", es: "Alguien se sentó a su lado. Levantó la mirada y no podía creer lo que veía: era Anna." },
        ],
      },
      {
        segments: [
          { ru: "Они не виделись двадцать лет.", es: "No se veían desde hacía veinte años." },
          { ru: "«Как странно устроена судьба», — сказала она тихо.", es: "«Qué extraño es como se organiza el destino», dijo ella en voz baja." },
        ],
      },
      {
        segments: [
          { ru: "Сергей Иванович вздохнул и ничего не ответил.", es: "Serguéi Ivánovich suspiró y no respondió nada." },
          { ru: "Он вспомнил все годы одиночества после того, как она уехала.", es: "Recordó todos los años de soledad después de que ella se fue." },
        ],
      },
      {
        segments: [
          { ru: "Повисло долгое молчание. Оба смотрели на пустые рельсы, каждый думая о своём.", es: "Se instaló un largo silencio. Ambos miraban las vías vacías, cada uno pensando en lo suyo." },
        ],
      },
      {
        segments: [
          { ru: "Наконец Анна задумалась и тихо спросила: «Ты счастлив?»", es: "Finalmente Anna quedó pensativa y preguntó en voz baja: «¿Sos feliz?»" },
          { ru: "Он посмотрел на неё долгим взглядом и просто сказал: «Теперь — да».", es: "Él la miró con una mirada larga y simplemente dijo: «Ahora sí»." },
        ],
      },
      {
        segments: [
          { ru: "В этот момент подошёл поезд. Они попрощались, зная, что, возможно, больше не встретятся.", es: "En ese momento llegó el tren. Se despidieron, sabiendo que quizás no volverían a encontrarse." },
          { ru: "Но взгляд, которым они обменялись, остался с обоими на долгие годы.", es: "Pero la mirada que intercambiaron quedó con los dos por muchos años." },
        ],
      },
    ],
  },
};

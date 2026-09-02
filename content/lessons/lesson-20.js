export const lesson = {
  slug: "adapted-literary-reading",
  level: "B1",
  module: "Módulo 4 — Primeras lecturas literarias adaptadas",
  order: 10,
  title: "Primera lectura literaria adaptada",
  vocabulary: [
    { ru: "рассказ", transliteration: "rasskaz", es: "relato, cuento" },
    { ru: "герой", transliteration: "geroy", es: "personaje, héroe" },
    { ru: "судьба", transliteration: "sud'ba", es: "destino" },
    { ru: "грустный", transliteration: "grustnyy", es: "triste" },
    { ru: "удивиться", transliteration: "udivit'sya", es: "sorprenderse" },
    { ru: "вздохнуть", transliteration: "vzdokhnut'", es: "suspirar" },
    { ru: "взгляд", transliteration: "vzglyad", es: "mirada" },
    { ru: "молчать", transliteration: "molchat'", es: "callar, guardar silencio" },
    { ru: "внезапно", transliteration: "vnezapno", es: "de repente" },
    { ru: "заметить", transliteration: "zametit'", es: "notar, darse cuenta" },
  ],
  grammarPoint: {
    title: "El pronombre relativo который",
    explanation:
      "Который equivale a «que» o «el cual» y sirve para unir una oración subordinada a un sustantivo. Concuerda en género y número con la palabra a la que se refiere (el antecedente), pero su caso depende de la función que cumple dentro de su propia oración. Es una palabra clave para leer textos literarios, donde las oraciones suelen ser más largas y descriptivas.",
    tables: [
      {
        title: "Declinación de который por género y número",
        columns: ["Género / número", "Forma (nominativo)", "Ejemplo"],
        rows: [
          ["Masculino singular", "который", "Мужчина, который сидел у окна, молчал."],
          ["Femenino singular", "которая", "Женщина, которая молчала, вздохнула."],
          ["Neutro singular", "которое", "Письмо, которое он получил, было грустным."],
          ["Plural", "которые", "Люди, которые ждали, удивились."],
        ],
        note: "El género y el número de который dependen del sustantivo al que se refiere, no de la palabra más cercana en la oración.",
      },
    ],
    examples: [
      { ru: "Это рассказ, который я прочитал вчера.", transliteration: "eto rasskaz, kotoryy ya prochital vchera.", es: "Este es el relato que leí ayer." },
      { ru: "Герой, о котором мы говорим, жил очень скромно.", transliteration: "geroy, o kotorom my govorim, zhil ochen' skromno.", es: "El personaje del que hablamos vivía muy modestamente." },
      { ru: "Девушка, которую он любил, уехала навсегда.", transliteration: "devushka, kotoruyu on lyubil, uyekhala navsegda.", es: "La muchacha a la que él amaba se fue para siempre." },
      { ru: "Это была судьба, которой никто не ожидал.", transliteration: "eto byla sud'ba, kotoroy nikto ne ozhidal.", es: "Fue un destino que nadie esperaba." },
    ],
  },
  conversation: {
    title: "📖 Разговор о рассказе",
    lines: [
      {
        speaker: "A",
        transliteration: "ty prochital rasskaz, kotoryy ya tebe dala?",
        segments: [{ ru: "Ты прочитал рассказ, который я тебе дала?", es: "¿Leíste el relato que te di?" }],
      },
      {
        speaker: "B",
        transliteration: "da, no ya ne vsyo ponyal. tam mnogo slov, kotorykh ya ne znayu.",
        segments: [
          { ru: "Да, но я не всё понял.", es: "Sí, pero no entendí todo." },
          { ru: "Там много слов, которых я не знаю.", es: "Hay muchas palabras que no conozco." },
        ],
      },
      {
        speaker: "A",
        transliteration: "eto normal'no. glavnoye — ponyat' obshchiy smysl iz konteksta.",
        segments: [{ ru: "Это нормально. Главное — понять общий смысл из контекста.", es: "Es normal. Lo importante es entender el sentido general por el contexto." },],
      },
      {
        speaker: "B",
        transliteration: "geroy, o kotorom rasskaz, pokazalsya mne ochen' grustnym chelovekom.",
        segments: [{ ru: "Герой, о котором рассказ, показался мне очень грустным человеком.", es: "El personaje del que trata el relato me pareció una persona muy triste." },],
      },
      {
        speaker: "A",
        transliteration: "ya soglasna. a ty zametil, pochemu on vsyo vremya molchal?",
        segments: [{ ru: "Я согласна. А ты заметил, почему он всё время молчал?", es: "Estoy de acuerdo. ¿Y notaste por qué se quedaba callado todo el tiempo?" },],
      },
      {
        speaker: "B",
        transliteration: "kazhetsya, potomu chto on zhdal pis'mo, kotoroye tak i ne prishlo.",
        segments: [{ ru: "Кажется, потому что он ждал письмо, которое так и не пришло.", es: "Creo que porque esperaba una carta que finalmente nunca llegó." },],
      },
    ],
  },
  reading: {
    title: "Учитель",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "В маленьком городе жил учитель по имени Сергей Петрович, который каждый день ходил в школу одной и той же дорогой.", es: "En una pequeña ciudad vivía un maestro llamado Serguéi Petróvich, que iba a la escuela todos los días por el mismo camino." },
          { ru: "Он был человеком тихим и скромным, и ученики, которые у него учились, любили его за терпение.", es: "Era un hombre callado y modesto, y los alumnos que estudiaban con él lo querían por su paciencia." },
          { ru: "Каждое утро он приходил в класс раньше всех и готовил доску, на которой писал число и тему урока.", es: "Cada mañana llegaba a la clase antes que nadie y preparaba el pizarrón, en el que escribía la fecha y el tema de la lección." },
        ],
      },
      {
        segments: [
          { ru: "Однажды осенью Сергей Петрович заметил на своём столе письмо, которое кто-то оставил без подписи.", es: "Una vez, en otoño, Serguéi Petróvich notó sobre su escritorio una carta que alguien había dejado sin firmar." },
          { ru: "Сначала он подумал, что это шутка учеников, которые часто оставляли на столе разные записки.", es: "Al principio pensó que era una broma de los alumnos, que a menudo dejaban distintas notas sobre el escritorio." },
          { ru: "Он открыл конверт и удивился: внутри был короткий текст, в котором говорилось только «Спасибо за всё».", es: "Abrió el sobre y se sorprendió: adentro había un texto corto, en el que solo decía «Gracias por todo»." },
        ],
      },
      {
        segments: [
          { ru: "Учитель долго молчал и смотрел на письмо грустным взглядом.", es: "El maestro guardó silencio largo rato y miró la carta con una mirada triste." },
          { ru: "Он вспомнил всех учеников, которые прошли через его класс за тридцать лет работы.", es: "Recordó a todos los alumnos que habían pasado por su clase en treinta años de trabajo." },
          { ru: "Он не знал, кто из них написал это письмо, но это было неважно.", es: "No sabía cuál de ellos había escrito esa carta, pero eso no importaba." },
          { ru: "Важно было лишь то, что кто-то через много лет всё ещё помнил о нём.", es: "Lo importante era solamente que alguien, después de tantos años, todavía lo recordaba." },
        ],
      },
      {
        segments: [
          { ru: "Внезапно он вздохнул и тихо сказал коллеге, которая вошла в кабинет: «Вот моя настоящая награда».", es: "De repente suspiró y le dijo en voz baja a una colega que había entrado en el despacho: «Esta es mi verdadera recompensa»." },
          { ru: "Коллега улыбнулась, но ничего не ответила — она поняла, что учитель говорит не только о письме, но и о своей судьбе.", es: "La colega sonrió, pero no respondió nada; entendió que el maestro no hablaba solo de la carta, sino también de su destino." },
        ],
      },
      {
        segments: [
          { ru: "С того дня Сергей Петрович хранил письмо в старой книге, которую всегда носил с собой.", es: "Desde ese día, Serguéi Petróvich guardó la carta en un libro viejo que siempre llevaba consigo." },
          { ru: "Иногда, когда урок казался особенно трудным, он вспоминал это письмо и снова находил силы для работы.", es: "A veces, cuando la clase le parecía especialmente difícil, recordaba esa carta y volvía a encontrar fuerzas para trabajar." },
          { ru: "Ученики, которые сидели ближе всех к его столу, заметили, что после того случая учитель стал улыбаться чаще.", es: "Los alumnos que se sentaban más cerca de su escritorio notaron que, después de aquel episodio, el maestro empezó a sonreír más." },
        ],
      },
    ],
  },
};

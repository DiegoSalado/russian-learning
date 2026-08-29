export const lesson = {
  slug: "repaso-b2",
  level: "B2",
  module: "Módulo 6 — Proyecto de cierre B2",
  order: 6,
  title: "Repaso integrador de B2",
  vocabulary: [
    { ru: "живущий", transliteration: "zhivushchiy", es: "que vive (participio activo)" },
    { ru: "решив", transliteration: "reshiv", es: "habiendo decidido (gerundio perfectivo)" },
    { ru: "сообщить", transliteration: "soobshchit'", es: "informar, comunicar" },
    { ru: "развитие", transliteration: "razvitiye", es: "desarrollo" },
    { ru: "несмотря на то что", transliteration: "nesmotrya na to chto", es: "a pesar de que" },
    { ru: "если бы", transliteration: "yesli by", es: "si (condicional irreal)" },
    { ru: "регистр", transliteration: "registr", es: "registro (lingüístico)" },
    { ru: "сленг", transliteration: "sleng", es: "jerga, argot" },
    { ru: "повышение", transliteration: "povysheniye", es: "aumento, subida" },
    { ru: "предчувствие", transliteration: "predchuvstviye", es: "presentimiento" },
  ],
  grammarPoint: {
    title: "Repaso: los cinco pilares del nivel B2",
    explanation:
      "Este módulo repasa los cinco temas centrales del nivel: participios y gerundios (para condensar información como en la prensa y la literatura), el estilo indirecto (para reportar lo que otros dijeron), los sustantivos deverbales en -ание/-ение (típicos del lenguaje periodístico), los conectores subordinantes de concesión y condición (хотя, несмотря на то что, если бы) y la distinción entre registro neutro, coloquial y literario.",
    tables: [
      {
        title: "Cuadro resumen del nivel B2",
        columns: ["Tema", "Ejemplo", "Idea clave"],
        rows: [
          ["Participios y gerundios", "Решив уехать, она собрала вещи.", "Condensan dos acciones en una sola oración."],
          ["Estilo indirecto", "Он сказал, что уже сообщил новость.", "Que / palabra interrogativa + ли / чтобы, según el verbo."],
          ["Sustantivos en -ание/-ение", "развитие, повышение, изменение", "Verbo → proceso o resultado de la acción."],
          ["Conectores subordinantes", "Несмотря на то что было поздно...", "Marcan concesión (хотя) o condición irreal (если бы)."],
          ["Registro", "деньги vs. бабки vs. средства", "El mismo concepto cambia de tono según el contexto."],
        ],
        note: "Estos cinco puntos, combinados, son la base del ruso de prensa, ensayo y literatura adaptada que se lee a partir de este nivel.",
      },
    ],
    examples: [
      { ru: "Живущие в этом районе жители сообщили о повышении цен.", transliteration: "zhivushchiye v etom rayone zhiteli soobshchili o povyshenii tsen.", es: "Los residentes que viven en este barrio informaron sobre el aumento de precios." },
      { ru: "Несмотря на то что регистр текста был официальным, автор использовал немного сленга.", transliteration: "nesmotrya na to chto registr teksta byl ofitsial'nym, avtor ispol'zoval nemnogo slenga.", es: "A pesar de que el registro del texto era formal, el autor usó algo de jerga." },
      { ru: "Если бы не странное предчувствие, он бы не сообщил об этом никому.", transliteration: "yesli by ne strannoye predchuvstviye, on by ne soobshchil ob etom nikomu.", es: "Si no fuera por un extraño presentimiento, no se lo habría comunicado a nadie." },
      { ru: "Решив изменить свою жизнь, она начала с малого развития привычек.", transliteration: "reshiv izmenit' svoyu zhizn', ona nachala s malogo razvitiya privychek.", es: "Habiendo decidido cambiar su vida, empezó con un pequeño desarrollo de hábitos." },
    ],
  },
  conversation: {
    title: "🎓 Финальный разговор об уровне",
    lines: [
      {
        speaker: "A",
        transliteration: "nu chto, kak tebe kazhetsya uroven' B2? po-moyemu, samoye slozhnoye — eto prichastiya.",
        segments: [{ ru: "Ну что, как тебе кажется уровень B2?", es: "¿Y bien, qué te pareció el nivel B2?" }, { ru: "По-моему, самое сложное — это причастия.", es: "En mi opinión, lo más difícil son los participios." }],
      },
      {
        speaker: "B",
        transliteration: "soglasna, no reshiv praktikovat'sya kazhdyy den', ya postepenno privykla.",
        segments: [{ ru: "Согласна, но, решив практиковаться каждый день, я постепенно привыкла.", es: "De acuerdo, pero, habiendo decidido practicar todos los días, me fui acostumbrando poco a poco." }],
      },
      {
        speaker: "A",
        transliteration: "a mne kosvennaya rech' dalas' legche, chem ya dumal.",
        segments: [{ ru: "А мне косвенная речь далась легче, чем я думал.", es: "A mí el estilo indirecto me resultó más fácil de lo que pensaba." }],
      },
      {
        speaker: "B",
        transliteration: "nesmotrya na to chto my proshli mnogo grammatiki, samoye poleznoye — eto chteniye statey.",
        segments: [{ ru: "Несмотря на то что мы прошли много грамматики, самое полезное — это чтение статей.", es: "A pesar de que vimos mucha gramática, lo más útil fue la lectura de artículos." }],
      },
      {
        speaker: "A",
        transliteration: "yesli by kto-to skazal mne god nazad, chto ya budu ponimat' takiye teksty, ya by ne poveril.",
        segments: [{ ru: "Если бы кто-то сказал мне год назад, что я буду понимать такие тексты, я бы не поверил.", es: "Si alguien me hubiera dicho hace un año que iba a entender textos así, no le habría creído." }],
      },
      {
        speaker: "B",
        transliteration: "teper' my gotovy chitat' pressu i literaturu bez postoyannogo perevoda. eto zhe otlichnyy rezul'tat!",
        segments: [{ ru: "Теперь мы готовы читать прессу и литературу без постоянного перевода.", es: "Ahora estamos listos para leer prensa y literatura sin traducir todo el tiempo." }, { ru: "Это же отличный результат!", es: "¡Eso sí que es un resultado excelente!" }],
      },
    ],
  },
  reading: {
    title: "Город, который научил меня читать по-русски",
    type: "artículo",
    paragraphs: [
      {
        segments: [
          { ru: "Есть города, которые меняют человека незаметно, день за днём, а есть такие, что делают это почти мгновенно.", es: "Hay ciudades que cambian a una persona sin que se note, día tras día, y hay otras que lo hacen casi al instante." },
          { ru: "Для меня таким городом стал небольшой российский город на Волге, куда я приехал, зная о русском языке совсем немного.", es: "Para mí, esa ciudad fue una pequeña ciudad rusa a orillas del Volga, adonde llegué sabiendo muy poco sobre el idioma ruso." },
        ],
      },
      {
        segments: [
          { ru: "Хотя первые недели я понимал едва ли половину того, что слышал, местные жители, живущие рядом с моим домом, оказались на удивление терпеливыми.", es: "Aunque las primeras semanas apenas entendía la mitad de lo que oía, los vecinos que vivían cerca de mi casa resultaron sorprendentemente pacientes." },
          { ru: "Сосед, узнав, что я изучаю язык, стал каждое утро сообщать мне новости, читая заголовки местной газеты вслух.", es: "El vecino, al enterarse de que yo estudiaba el idioma, empezó cada mañana a contarme las noticias leyendo en voz alta los titulares del diario local." },
          { ru: "Сначала я лишь кивал, мало что понимая, но, решив не сдаваться, начал записывать незнакомые слова в маленький блокнот.", es: "Al principio solo asentía, entendiendo poco, pero, habiendo decidido no rendirme, empecé a anotar las palabras desconocidas en una libreta pequeña." },
        ],
      },
      {
        segments: [
          { ru: "Именно тогда я впервые заметил, насколько язык прессы отличается от разговорного: слова вроде «развитие», «повышение» и «изменение» встречались почти в каждой статье, а на улице люди говорили совсем иначе, часто используя сленг, которого не было ни в одном учебнике.", es: "Fue entonces cuando noté por primera vez cuánto se diferencia el lenguaje de la prensa del habla cotidiana: palabras como «desarrollo», «aumento» y «cambio» aparecían en casi cada artículo, mientras que en la calle la gente hablaba de forma muy distinta, usando a menudo una jerga que no aparecía en ningún manual." },
        ],
      },
      {
        segments: [
          { ru: "Несмотря на то что поначалу это казалось двумя разными языками, со временем я научился различать регистры и понимать, когда уместна официальная речь, а когда — простая и живая.", es: "A pesar de que al principio esto parecía dos idiomas distintos, con el tiempo aprendí a distinguir los registros y a entender cuándo era apropiado el habla formal y cuándo la sencilla y viva." },
          { ru: "Если бы не эти ежедневные разговоры с соседом, моё понимание языка осталось бы чисто теоретическим.", es: "Si no fuera por esas conversaciones diarias con el vecino, mi comprensión del idioma habría quedado puramente teórica." },
          { ru: "Постепенно я начал замечать причастия и деепричастия, которые раньше казались мне просто длинными непонятными словами.", es: "Poco a poco empecé a notar los participios y gerundios, que antes me parecían simplemente palabras largas e incomprensibles." },
          { ru: "Однажды сосед, сообщив мне о повышении цен на хлеб, вдруг сказал: «Живя здесь, ты быстрее выучишь язык, чем в любой школе».", es: "Un día, el vecino, tras informarme sobre el aumento del precio del pan, de repente dijo: «Viviendo aquí, aprenderás el idioma más rápido que en cualquier escuela»." },
        ],
      },
      {
        segments: [
          { ru: "Решив однажды прочитать целую статью самостоятельно, я почувствовал странное предчувствие успеха — и оно меня не обмануло.", es: "Habiendo decidido un día leer un artículo entero por mi cuenta, sentí un extraño presentimiento de éxito, y no me engañó." },
          { ru: "Статья была о развитии малого бизнеса в нашем районе, и, хотя в тексте встречалось несколько незнакомых терминов, общий смысл я понял почти сразу.", es: "El artículo trataba sobre el desarrollo de los pequeños negocios en nuestro barrio, y, aunque en el texto aparecían varios términos desconocidos, entendí el sentido general casi de inmediato." },
          { ru: "С того дня я читаю русские тексты каждый вечер, и город на Волге навсегда останется местом, где для меня началось настоящее знакомство с этим языком.", es: "Desde ese día leo textos en ruso todas las noches, y esa ciudad a orillas del Volga siempre será el lugar donde comenzó mi verdadero encuentro con este idioma." },
          { ru: "Если бы кто-то сказал мне тогда, что однажды я буду свободно читать прессу и литературу, я бы, наверное, не поверил — но именно так и случилось.", es: "Si alguien me hubiera dicho entonces que algún día leería con soltura prensa y literatura, probablemente no le habría creído, pero fue exactamente eso lo que ocurrió." },
        ],
      },
    ],
  },
};

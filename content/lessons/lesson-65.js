export const lesson = {
  slug: "classic-text-reading",
  level: "C2",
  module: "Módulo 4 — Lectura de cierre",
  order: 8,
  title: "Lectura extensa: un texto clásico sin adaptar",
  vocabulary: [
    { ru: "Лесть", transliteration: "lest'", es: "Adulación, halago falso" },
    { ru: "Взгромоздиться", transliteration: "vzgromozdit'sya", es: "Encaramarse (en algo alto)" },
    { ru: "Плутовка", transliteration: "plutovka", es: "Pícara, tramposa" },
    { ru: "Вскружиться (голова)", transliteration: "vskruzhit'sya (golova)", es: "Envanecerse (lit. dársele vueltas la cabeza)" },
    { ru: "Каркнуть", transliteration: "karknut'", es: "Graznar" },
  ],
  grammarPoint: {
    title: "Vocabulario de la fábula clásica: Крылов",
    explanation:
      "Las fábulas de Иван Крылов (siglo XIX) son de los textos clásicos más citados del ruso — su moraleja y hasta frases enteras siguen siendo parte del habla culta cotidiana. Su vocabulario, aunque antiguo, sigue siendo reconocible para cualquier hablante nativo educado. Esta lección presenta una fábula completa, sin adaptar, tal como se escribió originalmente.",
    tables: [
      {
        title: "Vocabulario clave de la fábula",
        columns: ["Palabra / expresión", "Significado"],
        rows: [
          ["Лесть", "Adulación, halago falso"],
          ["Взгромоздясь", "Habiéndose encaramado (gerundio arcaico de взгромоздиться)"],
          ["Плутовка", "Pícara, tramposa (dicho de un animal o persona femenina)"],
          ["Вскружилась голова", "Se le subió a la cabeza (envanecerse por un halago)"],
          ["Каркнуть", "Graznar — el sonido característico del cuervo"],
        ],
        note: "No hace falta entender cada palabra para captar el sentido: la fábula se apoya en una estructura muy clara (situación → halago → consecuencia) que guía la lectura incluso cuando el vocabulario es desconocido.",
      },
    ],
    examples: [
      { ru: "Лесть всегда находит уголок в чьём-то сердце.", transliteration: "lest' vsegda nakhodit ugolok v ch'yom-to serdtse.", es: "La adulación siempre encuentra un rincón en el corazón de alguien." },
      { ru: "От похвалы у неё вскружилась голова.", transliteration: "ot pokhvaly u neyo vskruzhilas' golova.", es: "El halago se le subió a la cabeza." },
      { ru: "Плутовка обманула всех своей улыбкой.", transliteration: "plutovka obmanula vsekh svoyey ulybkoy.", es: "La pícara engañó a todos con su sonrisa." },
      { ru: "Ворона каркнула и уронила сыр.", transliteration: "vorona karknula i uronila syr.", es: "El cuervo graznó y dejó caer el queso." },
    ],
  },
  conversation: {
    title: "🦊 О чём эта басня?",
    lines: [
      {
        speaker: "A",
        transliteration: "ty prochital basnyu Krylova «Vorona i Lisitsa»?",
        segments: [{ ru: "Ты прочитал басню Крылова «Ворона и Лисица»?", es: "¿Leíste la fábula de Krýlov «El cuervo y la zorra»?" }],
      },
      {
        speaker: "B",
        transliteration: "da. lisitsa ispol'zovala lest', chtoby poluchit' syr.",
        segments: [{ ru: "Да. Лисица использовала лесть, чтобы получить сыр.", es: "Sí. La zorra usó la adulación para conseguir el queso." }],
      },
      {
        speaker: "A",
        transliteration: "a u vorony ot pokhval vskruzhilas' golova, i ona otkryla klyuv.",
        segments: [{ ru: "А у вороны от похвал вскружилась голова, и она открыла клюв.", es: "Y al cuervo el halago se le subió a la cabeza, y abrió el pico." }],
      },
      {
        speaker: "B",
        transliteration: "morali eto basni prosta: ne ver' lesti, dazhe yesli ona priyatna.",
        segments: [{ ru: "Мораль этой басни проста: не верь лести, даже если она приятна.", es: "La moraleja de esta fábula es simple: no le creas a la adulación, aunque sea agradable." }],
      },
    ],
  },
  reading: {
    title: "«Ворона и Лисица» — И. А. Крылов",
    type: "poema",
    paragraphs: [
      {
        segments: [
          { ru: "Уж сколько раз твердили миру,", es: "Cuántas veces se le ha repetido al mundo," },
          { ru: "Что лесть гнусна, вредна; но только всё не впрок,", es: "que la adulación es vil, dañina; pero de nada sirve," },
          { ru: "И в сердце льстец всегда отыщет уголок.", es: "y el adulador siempre encuentra un rincón en el corazón." },
        ],
      },
      {
        segments: [
          { ru: "Вороне где-то бог послал кусочек сыру;", es: "A un cuervo, Dios le mandó de algún lado un trozo de queso;" },
          { ru: "На ель Ворона взгромоздясь,", es: "encaramado en un abeto," },
          { ru: "Позавтракать было совсем уж собралась,", es: "estaba a punto de desayunar," },
          { ru: "Да призадумалась, а сыр во рту держала.", es: "pero se quedó pensativo, con el queso en el pico." },
        ],
      },
      {
        segments: [
          { ru: "На ту беду, Лиса близёхонько бежала;", es: "Por desgracia, una zorra pasaba corriendo cerca;" },
          { ru: "Вдруг сырный дух Лису остановил:", es: "de pronto el olor del queso la detuvo:" },
          { ru: "Лисица видит сыр, — Лисицу сыр пленил.", es: "la zorra ve el queso, y el queso la cautiva." },
        ],
      },
      {
        segments: [
          { ru: "Плутовка к дереву на цыпочках подходит;", es: "La pícara se acerca al árbol en puntas de pie;" },
          { ru: "Вертит хвостом, с Вороны глаз не сводит", es: "mueve la cola, sin quitarle los ojos de encima al cuervo," },
          { ru: "И говорит так сладко, чуть дыша:", es: "y habla tan dulcemente, casi sin respirar:" },
        ],
      },
      {
        segments: [
          { ru: "«Голубушка, как хороша!", es: "«¡Palomita, qué hermosa eres!" },
          { ru: "Ну что за шейка, что за глазки!", es: "¡Qué cuello, qué ojitos!" },
          { ru: "Рассказывать, так, право, сказки!", es: "¡Da para contar cuentos de lo lindos que son!" },
          { ru: "Какие пёрышки! какой носок!", es: "¡Qué plumas! ¡Qué pico!" },
          { ru: "И, верно, ангельский быть должен голосок!", es: "¡Y tu vocecita debe ser angelical!" },
        ],
      },
      {
        segments: [
          { ru: "Спой, светик, не стыдись!", es: "¡Cantá, lucecita, no seas tímida!" },
          { ru: "Что ежели, сестрица,", es: "Porque si, hermanita," },
          { ru: "При красоте такой и петь ты мастерица,", es: "con tal belleza, además cantás de maravilla," },
          { ru: "Ведь ты была б у нас царь-птица!»", es: "¡serías la reina de las aves entre nosotros!»" },
        ],
      },
      {
        segments: [
          { ru: "Вещуньина с похвал вскружилась голова,", es: "A la profetisa, los halagos se le subieron a la cabeza," },
          { ru: "От радости в зобу дыханье спёрло, —", es: "de la alegría se le cortó la respiración en el buche," },
          { ru: "И на приветливы Лисицыны слова", es: "y ante las palabras amables de la zorra" },
          { ru: "Ворона каркнула во всё воронье горло:", es: "el cuervo graznó con toda su garganta:" },
        ],
      },
      {
        segments: [
          { ru: "Сыр выпал — с ним была плутовка такова.", es: "El queso cayó — y con él, la pícara desapareció." },
        ],
      },
    ],
  },
};

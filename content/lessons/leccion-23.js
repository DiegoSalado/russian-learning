export const lesson = {
  slug: "participios-gerundios",
  level: "B2",
  module: "Módulo 1 — Participios y gerundios",
  order: 1,
  title: "Participios y gerundios",
  vocabulary: [
    { ru: "читающий", transliteration: "chitayushchiy", es: "que lee, leyendo (participio activo)" },
    { ru: "прочитанный", transliteration: "prochitannyy", es: "leído (participio pasivo)" },
    { ru: "читая", transliteration: "chitaya", es: "leyendo (gerundio imperfectivo)" },
    { ru: "прочитав", transliteration: "prochitav", es: "habiendo leído (gerundio perfectivo)" },
    { ru: "пишущий", transliteration: "pishushchiy", es: "que escribe (participio activo)" },
    { ru: "написанный", transliteration: "napisannyy", es: "escrito (participio pasivo)" },
    { ru: "говоря", transliteration: "govorya", es: "hablando (gerundio)" },
    { ru: "сделанный", transliteration: "sdelannyy", es: "hecho (participio pasivo)" },
    { ru: "живущий", transliteration: "zhivushchiy", es: "que vive (participio activo)" },
    { ru: "решив", transliteration: "reshiv", es: "habiendo decidido (gerundio perfectivo)" },
  ],
  grammarPoint: {
    title: "Formación de participios y gerundios",
    explanation:
      "Los participios (причастия) funcionan como adjetivos: describen un sustantivo y concuerdan con él en género, número y caso. Los gerundios (деепричастия) son invariables y funcionan como adverbios, describiendo una acción simultánea o previa a la del verbo principal. Ambos son característicos del ruso escrito y periodístico, donde permiten condensar dos oraciones en una.",
    tables: [
      {
        title: "Cinco formas participiales y de gerundio",
        columns: ["Tipo", "Formación", "Ejemplo"],
        rows: [
          ["Participio activo presente", "raíz de presente + -ущ-/-ющ- (1ª conjug.) o -ащ-/-ящ- (2ª conjug.)", "читать → читающий (que lee)"],
          ["Participio pasivo presente", "raíz de presente + -ем-/-им-", "читать → читаемый (leído, siendo leído)"],
          ["Participio pasivo pasado", "raíz de infinitivo + -нн-/-т-", "написать → написанный (escrito)"],
          ["Gerundio imperfectivo", "raíz de presente + -я/-а", "читать → читая (leyendo)"],
          ["Gerundio perfectivo", "raíz de pasado + -в", "прочитать → прочитав (habiendo leído)"],
        ],
        note: "Los participios concuerdan como los adjetivos (читающая девушка, написанное письмо); los gerundios no cambian nunca de forma.",
      },
    ],
    examples: [
      { ru: "Девушка, читающая книгу, — моя сестра.", transliteration: "devushka, chitayushchaya knigu, — moya sestra.", es: "La chica que lee el libro es mi hermana." },
      { ru: "Прочитав статью, он всё понял.", transliteration: "prochitav stat'yu, on vsyo ponyal.", es: "Habiendo leído el artículo, lo entendió todo." },
      { ru: "Читая новости, я узнал об этом.", transliteration: "chitaya novosti, ya uznal ob etom.", es: "Leyendo las noticias, me enteré de esto." },
      { ru: "Это письмо, написанное вчера.", transliteration: "eto pis'mo, napisannoye vchera.", es: "Esta es la carta escrita ayer." },
    ],
  },
  conversation: {
    title: "📰 Обсуждение статьи",
    lines: [
      {
        speaker: "A",
        transliteration: "ty chital stat'yu, napisannuyu etim zhurnalistom?",
        segments: [{ ru: "Ты читал статью, написанную этим журналистом?", es: "¿Leíste el artículo escrito por este periodista?" }],
      },
      {
        speaker: "B",
        transliteration: "da, prochitav yeyo, ya ponyal, chto situatsiya slozhneye, chem ya dumal.",
        segments: [{ ru: "Да, прочитав её, я понял, что ситуация сложнее, чем я думал.", es: "Sí, habiéndolo leído, entendí que la situación es más compleja de lo que pensaba." }],
      },
      {
        speaker: "A",
        transliteration: "chelovek, zhivushchiy ryadom so mnoy, rabotayet v etoy sfere. on govorit to zhe samoye.",
        segments: [{ ru: "Человек, живущий рядом со мной, работает в этой сфере.", es: "El hombre que vive cerca de mí trabaja en esa área." }, { ru: "Он говорит то же самое.", es: "Él dice lo mismo." }],
      },
      {
        speaker: "B",
        transliteration: "govorya chestno, ya ne ozhidal takikh tsifr.",
        segments: [{ ru: "Говоря честно, я не ожидал таких цифр.", es: "Hablando con honestidad, no esperaba esas cifras." }],
      },
      {
        speaker: "A",
        transliteration: "reshiv izuchit' vopros glubzhe, ya nashla yeshcho neskol'ko istochnikov.",
        segments: [{ ru: "Решив изучить вопрос глубже, я нашла ещё несколько источников.", es: "Habiendo decidido estudiar el tema más a fondo, encontré varias fuentes más." }],
      },
      {
        speaker: "B",
        transliteration: "pokazhi mne ikh, kogda budet vremya.",
        segments: [{ ru: "Покажи мне их, когда будет время.", es: "Muéstramelas cuando tengas tiempo." }],
      },
    ],
  },
  reading: {
    title: "Люди, меняющие свои города",
    type: "artículo",
    paragraphs: [
      {
        segments: [
          { ru: "В последние годы всё больше жителей крупных городов, уставших от шумных улиц, начинают менять окружающее пространство своими руками.", es: "En los últimos años, cada vez más habitantes de grandes ciudades, cansados de las calles ruidosas, empiezan a cambiar el espacio que los rodea con sus propias manos." },
          { ru: "Люди, живущие в одном районе, объединяются и создают небольшие сады на месте заброшенных дворов.", es: "Personas que viven en un mismo barrio se unen y crean pequeños jardines en el lugar de patios abandonados." },
          { ru: "Эксперты, изучающие городскую жизнь, называют это движение одним из самых заметных явлений последнего десятилетия.", es: "Los expertos que estudian la vida urbana llaman a este movimiento uno de los fenómenos más notables de la última década." },
        ],
      },
      {
        segments: [
          { ru: "Одним из таких примеров является проект, начатый три года назад в Санкт-Петербурге.", es: "Uno de esos ejemplos es un proyecto iniciado hace tres años en San Petersburgo." },
          { ru: "Группа соседей, решивших изменить свой двор, посадила деревья и построила скамейки, сделанные из переработанного дерева.", es: "Un grupo de vecinos que decidió cambiar su patio plantó árboles y construyó bancos hechos de madera reciclada." },
          { ru: "Жители, работавшие над проектом по выходным, признаются, что сначала не верили в успех этой затеи.", es: "Los residentes que trabajaron en el proyecto los fines de semana admiten que al principio no creían en el éxito de esta iniciativa." },
          { ru: "Читая отзывы жителей, можно заметить, насколько изменилось их отношение к общему пространству.", es: "Leyendo los comentarios de los residentes, se puede notar cuánto cambió su relación con el espacio común." },
        ],
      },
      {
        segments: [
          { ru: "По словам организатора проекта, увидевшего похожую инициативу в другом городе, главная цель — не просто украсить двор, а объединить людей.", es: "Según el organizador del proyecto, que vio una iniciativa parecida en otra ciudad, el objetivo principal no es solo embellecer el patio, sino unir a la gente." },
          { ru: "«Соседи, работающие вместе, начинают доверять друг другу», — говорит он, отвечая на вопрос журналиста.", es: "«Los vecinos que trabajan juntos empiezan a confiar unos en otros», dice, respondiendo a la pregunta del periodista." },
          { ru: "Он добавляет, что дети, растущие рядом с таким садом, с раннего возраста учатся заботиться об общем имуществе.", es: "Añade que los niños que crecen cerca de un jardín así aprenden desde pequeños a cuidar los bienes comunes." },
        ],
      },
      {
        segments: [
          { ru: "Сегодня подобные проекты, поддерживаемые местными властями, появляются и в других городах России.", es: "Hoy en día, proyectos similares, apoyados por las autoridades locales, aparecen también en otras ciudades de Rusia." },
          { ru: "В Москве, например, уже работает программа, финансирующая инициативы жителей, желающих благоустроить свой двор.", es: "En Moscú, por ejemplo, ya funciona un programa que financia las iniciativas de residentes que desean mejorar su patio." },
          { ru: "Люди, вдохновлённые первыми успехами, уже планируют новые инициативы — от общественных библиотек до велосипедных дорожек.", es: "Personas inspiradas por los primeros éxitos ya planean nuevas iniciativas, desde bibliotecas comunitarias hasta ciclovías." },
        ],
      },
      {
        segments: [
          { ru: "Специалисты, наблюдающие за развитием таких инициатив, отмечают, что успех зависит не столько от денег, сколько от людей, готовых потратить своё время.", es: "Los especialistas que observan el desarrollo de estas iniciativas señalan que el éxito depende no tanto del dinero, sino de las personas dispuestas a dedicar su tiempo." },
          { ru: "Проекты, начатые небольшой группой энтузиастов, часто становятся примером для целого города.", es: "Los proyectos iniciados por un pequeño grupo de entusiastas a menudo se convierten en un ejemplo para toda la ciudad." },
          { ru: "Изучая опыт разных дворов, исследователи заметили одну общую черту: почти везде всё начиналось с одного человека, предложившего простую идею.", es: "Estudiando la experiencia de distintos patios, los investigadores notaron un rasgo común: casi en todas partes todo comenzó con una sola persona que propuso una idea sencilla." },
          { ru: "Именно эта идея, поддержанная соседями, постепенно превращалась в проект, меняющий облик целого квартала.", es: "Precisamente esa idea, apoyada por los vecinos, se fue transformando poco a poco en un proyecto que cambiaba el aspecto de todo el barrio." },
        ],
      },
    ],
  },
};

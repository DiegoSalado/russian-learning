export const lesson = {
  slug: "press-informative-texts",
  level: "B2",
  module: "Módulo 3 — Prensa y textos informativos",
  order: 3,
  title: "Prensa y textos informativos",
  vocabulary: [
    { ru: "власть", transliteration: "vlast'", es: "poder, autoridad" },
    { ru: "правительство", transliteration: "pravitel'stvo", es: "gobierno" },
    { ru: "экономика", transliteration: "ekonomika", es: "economía" },
    { ru: "общество", transliteration: "obshchestvo", es: "sociedad" },
    { ru: "решение", transliteration: "resheniye", es: "decisión" },
    { ru: "развитие", transliteration: "razvitiye", es: "desarrollo" },
    { ru: "изменение", transliteration: "izmeneniye", es: "cambio" },
    { ru: "закон", transliteration: "zakon", es: "ley" },
    { ru: "население", transliteration: "naseleniye", es: "población" },
    { ru: "налог", transliteration: "nalog", es: "impuesto" },
  ],
  grammarPoint: {
    title: "Sustantivos deverbales en -ание / -ение",
    explanation:
      "El ruso periodístico usa mucho sustantivos formados a partir de verbos con los sufijos -ание o -ение, que equivalen a los sustantivos españoles terminados en -ción, -miento o -o (desarrollar → desarrollo). Reconocer este patrón ayuda a entender titulares y artículos sin tener que buscar cada palabra nueva en el diccionario.",
    tables: [
      {
        title: "Verbos que forman sustantivos en -ание / -ение",
        columns: ["Verbo", "Sustantivo", "Significado"],
        rows: [
          ["развивать(ся)", "развитие", "desarrollo"],
          ["изменять(ся)", "изменение", "cambio"],
          ["решать", "решение", "decisión, solución"],
          ["создавать", "создание", "creación"],
          ["повышать", "повышение", "aumento, subida"],
        ],
        note: "La forma exacta del sufijo (-ание o -ение) depende de la conjugación del verbo de origen, pero el significado siempre es el resultado o proceso de la acción.",
      },
    ],
    examples: [
      { ru: "Правительство объявило о повышении налогов.", transliteration: "pravitel'stvo ob\"yavilo o povyshenii nalogov.", es: "El gobierno anunció un aumento de impuestos." },
      { ru: "Экономика страны показывает признаки развития.", transliteration: "ekonomika strany pokazyvayet priznaki razvitiya.", es: "La economía del país muestra señales de desarrollo." },
      { ru: "Общество активно обсуждает это решение.", transliteration: "obshchestvo aktivno obsuzhdayet eto resheniye.", es: "La sociedad debate activamente esta decisión." },
      { ru: "В законе произошли важные изменения.", transliteration: "v zakone proizoshli vazhnyye izmeneniya.", es: "En la ley se produjeron cambios importantes." },
    ],
  },
  conversation: {
    title: "🗞️ Обсуждение новостей",
    lines: [
      {
        speaker: "A",
        transliteration: "ty videla novost' o povyshenii nalogov?",
        segments: [{ ru: "Ты видела новость о повышении налогов?", es: "¿Viste la noticia sobre el aumento de impuestos?" }],
      },
      {
        speaker: "B",
        transliteration: "da, pravitel'stvo obyasnyayet eto neobkhodimost'yu razvitiya obshchestvennogo transporta.",
        segments: [{ ru: "Да, правительство объясняет это необходимостью развития общественного транспорта.", es: "Sí, el gobierno lo explica por la necesidad de desarrollar el transporte público." }],
      },
      {
        speaker: "A",
        transliteration: "a kak naseleniye otreagirovalo na eto resheniye?",
        segments: [{ ru: "А как население отреагировало на это решение?", es: "¿Y cómo reaccionó la población ante esta decisión?" }],
      },
      {
        speaker: "B",
        transliteration: "mneniya razdelilis'. odni podderzhivayut izmeneniya, drugiye schitayut, chto ekonomika yeshcho ne gotova.",
        segments: [{ ru: "Мнения разделились.", es: "Las opiniones se dividieron." }, { ru: "Одни поддерживают изменения, другие считают, что экономика ещё не готова.", es: "Unos apoyan los cambios, otros consideran que la economía todavía no está lista." }],
      },
      {
        speaker: "A",
        transliteration: "interesno, kogda novyy zakon vstupit v silu?",
        segments: [{ ru: "Интересно, когда новый закон вступит в силу?", es: "Me pregunto cuándo entrará en vigor la nueva ley." }],
      },
      {
        speaker: "B",
        transliteration: "po dannym gazety, uzhe so sleduyushchego goda.",
        segments: [{ ru: "По данным газеты, уже со следующего года.", es: "Según el diario, ya desde el año que viene." }],
      },
    ],
  },
  reading: {
    title: "Город меняет систему общественного транспорта",
    type: "artículo",
    paragraphs: [
      {
        segments: [
          { ru: "На этой неделе городские власти объявили о крупном изменении в системе общественного транспорта.", es: "Esta semana las autoridades municipales anunciaron un gran cambio en el sistema de transporte público." },
          { ru: "По словам представителя правительства, целью реформы является развитие более удобного и экологичного города.", es: "Según un representante del gobierno, el objetivo de la reforma es el desarrollo de una ciudad más cómoda y ecológica." },
          { ru: "Новость быстро распространилась в обществе и уже несколько дней остаётся главной темой местных новостей.", es: "La noticia se difundió rápidamente en la sociedad y desde hace varios días sigue siendo el tema principal de las noticias locales." },
        ],
      },
      {
        segments: [
          { ru: "Согласно новому закону, с начала следующего года в центре города появятся дополнительные автобусные полосы, а число электрических автобусов увеличится вдвое.", es: "Según la nueva ley, desde principios del año que viene aparecerán carriles de autobús adicionales en el centro de la ciudad, y el número de autobuses eléctricos se duplicará." },
          { ru: "Для финансирования проекта правительство приняло решение о небольшом повышении транспортного налога.", es: "Para financiar el proyecto, el gobierno tomó la decisión de un pequeño aumento del impuesto de transporte." },
          { ru: "Кроме того, закон предусматривает создание новых велосипедных дорожек вдоль главных улиц города.", es: "Además, la ley prevé la creación de nuevas ciclovías a lo largo de las calles principales de la ciudad." },
        ],
      },
      {
        segments: [
          { ru: "Реакция населения на это решение оказалась неоднозначной.", es: "La reacción de la población ante esta decisión resultó ambigua." },
          { ru: "Часть жителей поддерживает изменение, так как считает, что развитие транспорта улучшит качество воздуха.", es: "Una parte de los habitantes apoya el cambio, ya que considera que el desarrollo del transporte mejorará la calidad del aire." },
          { ru: "Другие выражают беспокойство из-за повышения налога, особенно в условиях, когда экономика растёт медленно.", es: "Otros expresan preocupación por el aumento del impuesto, especialmente en condiciones donde la economía crece lentamente." },
          { ru: "В социальных сетях уже появилось несколько петиций как в поддержку реформы, так и против неё.", es: "En las redes sociales ya aparecieron varias peticiones, tanto a favor de la reforma como en contra de ella." },
        ],
      },
      {
        segments: [
          { ru: "Представители общества автомобилистов заявили, что новый закон создаст дополнительные трудности для водителей.", es: "Representantes de la asociación de automovilistas declararon que la nueva ley creará dificultades adicionales para los conductores." },
          { ru: "Они также сообщили, что направят правительству официальное письмо с просьбой пересмотреть размер повышения налога.", es: "También informaron que enviarían al gobierno una carta oficial pidiendo revisar el monto del aumento del impuesto." },
          { ru: "Однако городская администрация утверждает, что через несколько лет изменения принесут пользу всем жителям без исключения.", es: "Sin embargo, la administración municipal afirma que en unos años los cambios traerán beneficios a todos los habitantes sin excepción." },
        ],
      },
      {
        segments: [
          { ru: "Некоторые экономисты, изучающие развитие городского транспорта, считают, что подобные реформы неизбежны почти во всех крупных городах.", es: "Algunos economistas que estudian el desarrollo del transporte urbano consideran que reformas de este tipo son inevitables en casi todas las grandes ciudades." },
          { ru: "По их мнению, население со временем привыкает к новым правилам, если видит реальные результаты изменений.", es: "En su opinión, la población con el tiempo se acostumbra a las nuevas normas si ve resultados reales de los cambios." },
          { ru: "В качестве примера они приводят несколько европейских городов, где похожие реформы уже привели к заметному улучшению экологии.", es: "Como ejemplo mencionan varias ciudades europeas, donde reformas similares ya llevaron a una notable mejora del medio ambiente." },
        ],
      },
      {
        segments: [
          { ru: "Окончательное решение о запуске реформы будет принято после общественного обсуждения, которое пройдёт в следующем месяце.", es: "La decisión final sobre el lanzamiento de la reforma se tomará después de un debate público que tendrá lugar el mes que viene." },
          { ru: "Власти пообещали учесть мнение населения и, при необходимости, внести изменения в первоначальный план.", es: "Las autoridades prometieron tener en cuenta la opinión de la población y, si fuera necesario, introducir cambios en el plan inicial." },
        ],
      },
    ],
  },
};

export const lesson = {
  slug: "extended-adapted-literature",
  level: "B2",
  module: "Módulo 4 — Literatura adaptada extensa",
  order: 6,
  title: "Literatura adaptada extensa",
  vocabulary: [
    { ru: "гора", transliteration: "gora", es: "montaña" },
    { ru: "крепость", transliteration: "krepost'", es: "fortaleza" },
    { ru: "офицер", transliteration: "ofitser", es: "oficial (militar)" },
    { ru: "душа", transliteration: "dusha", es: "alma" },
    { ru: "одиночество", transliteration: "odinochestvo", es: "soledad" },
    { ru: "страсть", transliteration: "strast'", es: "pasión" },
    { ru: "скала", transliteration: "skala", es: "roca, peñasco" },
    { ru: "мрачный", transliteration: "mrachnyy", es: "sombrío" },
    { ru: "гордость", transliteration: "gordost'", es: "orgullo" },
    { ru: "предчувствие", transliteration: "predchuvstviye", es: "presentimiento" },
  ],
  grammarPoint: {
    title: "Oraciones complejas con conectores subordinantes",
    explanation:
      "Los textos literarios usan con frecuencia conectores que introducen contraste o condición hipotética: хотя y несмотря на то что (aunque / a pesar de que) marcan una concesión, mientras que если бы introduce una condición irreal, generalmente acompañada del verbo en pasado y la partícula бы. Reconocerlos ayuda a seguir el hilo lógico de frases largas y descriptivas.",
    tables: [
      {
        title: "Conectores subordinantes frecuentes en textos literarios",
        columns: ["Conector", "Significado", "Ejemplo"],
        rows: [
          ["хотя", "aunque", "Хотя было холодно, он вышел на скалу."],
          ["несмотря на то что", "a pesar de que", "Несмотря на то что все советовали остаться, он уехал."],
          ["если бы", "si (condicional irreal)", "Если бы он остался, всё было бы иначе."],
          ["так что", "de manera que, así que", "Ветер усилился, так что идти дальше было опасно."],
        ],
        note: "Если бы siempre pide бы en ambas partes de la oración cuando la condición es contraria a la realidad o al pasado.",
      },
    ],
    examples: [
      { ru: "Хотя его душа была полна страсти, лицо оставалось спокойным.", transliteration: "khotya yego dusha byla polna strasti, litso ostavalos' spokoynym.", es: "Aunque su alma estaba llena de pasión, su rostro permanecía tranquilo." },
      { ru: "Несмотря на то что крепость была далеко, он слышал звук выстрелов.", transliteration: "nesmotrya na to chto krepost' byla daleko, on slyshal zvuk vystrelov.", es: "A pesar de que la fortaleza estaba lejos, oía el sonido de disparos." },
      { ru: "Если бы не гордость, он бы вернулся в тот же вечер.", transliteration: "yesli by ne gordost', on by vernulsya v tot zhe vecher.", es: "Si no fuera por el orgullo, habría vuelto esa misma noche." },
      { ru: "У него было странное предчувствие, так что он не мог уснуть.", transliteration: "u nego bylo strannoye predchuvstviye, tak chto on ne mog usnut'.", es: "Tenía un extraño presentimiento, así que no podía dormir." },
    ],
  },
  conversation: {
    title: "🏔️ Разговор офицеров у крепости",
    lines: [
      {
        speaker: "A",
        transliteration: "khotya nebo mrachnoye, ya khochu podnyat'sya na goru do zakhoda solntsa.",
        segments: [{ ru: "Хотя небо мрачное, я хочу подняться на гору до захода солнца.", es: "Aunque el cielo está sombrío, quiero subir a la montaña antes del atardecer." }],
      },
      {
        speaker: "B",
        transliteration: "eto opasno. nesmotrya na to chto ty otlichnyy nayezdnik, skaly seychas mokryye.",
        segments: [{ ru: "Это опасно.", es: "Es peligroso." }, { ru: "Несмотря на то что ты отличный наездник, скалы сейчас мокрые.", es: "A pesar de que eres un jinete excelente, las rocas ahora están mojadas." }],
      },
      {
        speaker: "A",
        transliteration: "u menya strannoye predchuvstviye, no ya ne mogu ostat'sya v kreposti. moya dusha ne znayet pokoya.",
        segments: [{ ru: "У меня странное предчувствие, но я не могу остаться в крепости.", es: "Tengo un extraño presentimiento, pero no puedo quedarme en la fortaleza." }, { ru: "Моя душа не знает покоя.", es: "Mi alma no conoce la paz." }],
      },
      {
        speaker: "B",
        transliteration: "yesli by ty poslushal menya khot' raz, my by ne sporili kazhdyy vecher.",
        segments: [{ ru: "Если бы ты послушал меня хоть раз, мы бы не спорили каждый вечер.", es: "Si me escucharas aunque sea una vez, no discutiríamos todas las noches." }],
      },
      {
        speaker: "A",
        transliteration: "ty prav, no gordost' sil'neye strakha.",
        segments: [{ ru: "Ты прав, но гордость сильнее страха.", es: "Tienes razón, pero el orgullo es más fuerte que el miedo." }],
      },
      {
        speaker: "B",
        transliteration: "togda voz'mi khotya by ognya s soboy, tak chto ty ne zabludish'sya v temnote.",
        segments: [{ ru: "Тогда возьми хотя бы огня с собой, так что ты не заблудишься в темноте.", es: "Entonces al menos llévate fuego, así no te perderás en la oscuridad." }],
      },
    ],
  },
  reading: {
    title: "Печорин у скалы",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "На Кавказе, среди высоких гор и старых крепостей, служил молодой офицер по имени Печорин.", es: "En el Cáucaso, entre altas montañas y viejas fortalezas, servía un joven oficial llamado Pechorin." },
          { ru: "Хотя все вокруг считали его смелым и удачливым человеком, его душа была полна одиночества.", es: "Aunque todos a su alrededor lo consideraban un hombre valiente y afortunado, su alma estaba llena de soledad." },
          { ru: "Товарищи по крепости уважали его за храбрость, но никто по-настоящему не знал, что происходит в его сердце.", es: "Sus compañeros de la fortaleza lo respetaban por su valentía, pero nadie sabía en verdad qué ocurría en su corazón." },
        ],
      },
      {
        segments: [
          { ru: "Однажды вечером, несмотря на то что товарищи предупреждали его об опасности, Печорин решил подняться на скалу над рекой.", es: "Una noche, a pesar de que sus compañeros le advirtieron del peligro, Pechorin decidió subir a la roca sobre el río." },
          { ru: "Небо было мрачным, а воздух — тяжёлым, будто предвещал бурю.", es: "El cielo estaba sombrío, y el aire, pesado, como si presagiara una tormenta." },
          { ru: "Он шёл узкой тропой, которую хорошо знал ещё с первых месяцев службы в этих местах.", es: "Caminaba por un sendero estrecho, que conocía bien desde los primeros meses de su servicio en aquellos lugares." },
          { ru: "У него было странное предчувствие, но гордость не позволяла ему отступить.", es: "Tenía un extraño presentimiento, pero el orgullo no le permitía retroceder." },
        ],
      },
      {
        segments: [
          { ru: "На вершине скалы Печорин долго стоял и смотрел на далёкие горы, освещённые последними лучами солнца.", es: "En la cima de la roca, Pechorin permaneció largo rato de pie, mirando las montañas lejanas iluminadas por los últimos rayos de sol." },
          { ru: "Он думал о своей жизни, полной страсти и разочарований, и о людях, которых любил, но не сумел удержать рядом.", es: "Pensaba en su vida, llena de pasión y desilusiones, y en las personas que había amado pero no había logrado retener a su lado." },
          { ru: "Ему вспомнилась женщина, чьи глаза он не мог забыть, хотя прошло уже много лет с их последней встречи.", es: "Recordó a una mujer cuyos ojos no podía olvidar, aunque ya habían pasado muchos años desde su último encuentro." },
          { ru: "Если бы он мог начать всё сначала, возможно, он выбрал бы другой путь.", es: "Si pudiera empezar todo de nuevo, quizás elegiría otro camino." },
          { ru: "Но, зная свою душу, он понимал, что снова выбрал бы одиночество, а не спокойную и предсказуемую жизнь.", es: "Pero, conociendo su alma, comprendía que de nuevo elegiría la soledad, y no una vida tranquila y previsible." },
        ],
      },
      {
        segments: [
          { ru: "Внезапно налетел холодный ветер, так что Печорин почувствовал озноб и вспомнил о крепости, ждущей его внизу.", es: "De repente se levantó un viento frío, así que Pechorin sintió escalofríos y recordó la fortaleza que lo esperaba abajo." },
          { ru: "Несмотря на то что спуск в темноте был опасен, он не чувствовал страха — только странную усталость.", es: "A pesar de que el descenso en la oscuridad era peligroso, no sentía miedo, solo un extraño cansancio." },
          { ru: "Он вздохнул и медленно начал спускаться, зная, что завтра снова наденет маску спокойного и уверенного офицера.", es: "Suspiró y comenzó a bajar lentamente, sabiendo que mañana volvería a ponerse la máscara del oficial tranquilo y seguro." },
        ],
      },
      {
        segments: [
          { ru: "В крепости его встретил старый товарищ и спросил, зачем он снова ходил один в горы в такую погоду.", es: "En la fortaleza lo recibió un viejo compañero, que le preguntó por qué había vuelto a ir solo a las montañas con ese clima." },
          { ru: "Печорин лишь улыбнулся мрачной улыбкой и ответил, что искал там то, чего не мог найти среди людей.", es: "Pechorin solo sonrió con una sonrisa sombría y respondió que buscaba allí lo que no podía encontrar entre la gente." },
          { ru: "Товарищ покачал головой, так как давно привык к странностям своего друга, и предложил ему горячего чаю.", es: "El compañero negó con la cabeza, ya que hacía tiempo se había acostumbrado a las rarezas de su amigo, y le ofreció té caliente." },
          { ru: "Печорин сел у огня, и, хотя лицо его оставалось спокойным, где-то глубоко внутри снова зарождалось знакомое предчувствие: завтра всё может измениться.", es: "Pechorin se sentó junto al fuego, y aunque su rostro permanecía tranquilo, en algún lugar profundo de su interior volvía a nacer un presentimiento conocido: mañana todo podía cambiar." },
        ],
      },
    ],
  },
};

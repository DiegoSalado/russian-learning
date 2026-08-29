export const lesson = {
  slug: "casos-dativo-instrumental",
  level: "B1",
  module: "Módulo 2 — Los casos restantes",
  order: 2,
  title: "Los casos dativo e instrumental",
  vocabulary: [
    { ru: "друг", transliteration: "drug", es: "amigo" },
    { ru: "подруга", transliteration: "podruga", es: "amiga" },
    { ru: "подарок", transliteration: "podarok", es: "regalo" },
    { ru: "дать", transliteration: "dat'", es: "dar" },
    { ru: "помогать", transliteration: "pomogat'", es: "ayudar (+ dativo)" },
    { ru: "звонить", transliteration: "zvonit'", es: "llamar por teléfono (+ dativo)" },
    { ru: "ручка", transliteration: "ruchka", es: "bolígrafo" },
    { ru: "нож", transliteration: "nozh", es: "cuchillo" },
    { ru: "интересоваться", transliteration: "interesovat'sya", es: "interesarse en algo (+ instrumental)" },
    { ru: "заниматься", transliteration: "zanimat'sya", es: "dedicarse a, practicar (+ instrumental)" },
  ],
  grammarPoint: {
    title: "Caso dativo (¿a quién?) y caso instrumental (¿con qué?)",
    explanation:
      "El dativo indica el destinatario de una acción — a quién o para quién se hace algo (дать другу — dar a un amigo) y se usa con verbos como помогать, звонить, писать. El instrumental indica el instrumento o la compañía — con qué o con quién (писать ручкой, идти с другом). Junto con el nominativo, genitivo, acusativo y prepositivo, completan el sistema de seis casos del ruso.",
    tables: [
      {
        title: "Declinación de «друг» en tres casos",
        columns: ["Caso", "Forma", "Ejemplo"],
        rows: [
          ["Nominativo (¿quién? ¿qué?)", "друг", "Это мой друг."],
          ["Dativo (¿a quién?)", "другу", "Я дал подарок другу."],
          ["Instrumental (¿con quién?)", "другом", "Я иду в кино с другом."],
        ],
        note: "En el instrumental de compañía, el sustantivo va casi siempre con la preposición с (con).",
      },
      {
        title: "Terminaciones típicas por género",
        columns: ["Género", "Dativo singular", "Instrumental singular"],
        rows: [
          ["Masculino (друг)", "-у → другу", "-ом → другом"],
          ["Femenino (подруга)", "-е → подруге", "-ой → подругой"],
          ["Neutro (письмо)", "-у → письму", "-ом → письмом"],
        ],
        note: "Los sustantivos femeninos terminados en -я y los masculinos con consonante blanda usan -е / -ей en lugar de -у / -ой.",
      },
    ],
    examples: [
      { ru: "Я дал другу подарок.", transliteration: "ya dal drugu podarok.", es: "Le di un regalo a mi amigo." },
      { ru: "Она пишет письмо ручкой.", transliteration: "ona pishet pis'mo ruchkoy.", es: "Ella escribe la carta con un bolígrafo." },
      { ru: "Мы идём в кафе с подругой.", transliteration: "my idyom v kafe s podrugoy.", es: "Vamos al café con mi amiga." },
      { ru: "Он интересуется музыкой.", transliteration: "on interesuyetsya muzykoy.", es: "Él se interesa por la música." },
    ],
  },
  conversation: {
    title: "🎁 Подарок другу",
    lines: [
      {
        speaker: "A",
        transliteration: "chto ty podarish' drugu na den' rozhdeniya?",
        segments: [{ ru: "Что ты подаришь другу на день рождения?", es: "¿Qué le vas a regalar a tu amigo para su cumpleaños?" }],
      },
      {
        speaker: "B",
        transliteration: "ya khochu dat' yemu novuyu knigu. a ty chto podarish' podruge?",
        segments: [
          { ru: "Я хочу дать ему новую книгу.", es: "Quiero darle un libro nuevo." },
          { ru: "А ты что подаришь подруге?", es: "¿Y tú qué le vas a regalar a tu amiga?" },
        ],
      },
      {
        speaker: "A",
        transliteration: "ya kuplyu yey tsvety i napishu otkrytku ruchkoy, kotoruyu ona podarila mne.",
        segments: [{ ru: "Я куплю ей цветы и напишу открытку ручкой, которую она подарила мне.", es: "Le compraré flores y le escribiré una tarjeta con el bolígrafo que ella me regaló." }],
      },
      {
        speaker: "B",
        transliteration: "zdorovo! a chem ty seychas zanimayesh'sya?",
        segments: [{ ru: "Здорово! А чем ты сейчас занимаешься?", es: "¡Qué bien! ¿Y a qué te dedicas ahora?" }],
      },
      {
        speaker: "A",
        transliteration: "ya zanimayus' sportom s bratom kazhdyy vecher.",
        segments: [{ ru: "Я занимаюсь спортом с братом каждый вечер.", es: "Practico deporte con mi hermano todas las noches." }],
      },
      {
        speaker: "B",
        transliteration: "otlichno, a ya interesuyus' fotografiyey.",
        segments: [{ ru: "Отлично, а я интересуюсь фотографией.", es: "Genial, y yo me intereso por la fotografía." }],
      },
    ],
  },
  reading: {
    title: "Подарок для бабушки",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Скоро день рождения бабушки, и Антон долго думал, что подарить ей.", es: "Pronto es el cumpleaños de la abuela, y Antón pensó mucho qué regalarle." },
          { ru: "Он позвонил сестре Кате и попросил помочь ему выбрать подарок.", es: "Llamó a su hermana Katia y le pidió ayuda para elegir el regalo." },
          { ru: "Кате нравится помогать брату, потому что вместе они всегда находят интересные идеи.", es: "A Katia le gusta ayudar a su hermano, porque juntos siempre encuentran ideas interesantes." },
        ],
      },
      {
        segments: [
          { ru: "Катя сказала, что бабушка интересуется садоводством, и посоветовала подарить ей новые инструменты.", es: "Katia dijo que la abuela se interesa por la jardinería, y sugirió regalarle herramientas nuevas." },
          { ru: "Антон согласился и пошёл с сестрой в магазин.", es: "Antón estuvo de acuerdo y fue a la tienda con su hermana." },
          { ru: "По дороге они звонили маме и спрашивали, чем ещё можно порадовать бабушку.", es: "En el camino llamaban a su mamá y le preguntaban con qué más podían alegrar a la abuela." },
        ],
      },
      {
        segments: [
          { ru: "В магазине продавец помог им и показал разные инструменты: лопату, ножницы и специальный нож для сада.", es: "En la tienda, el vendedor los ayudó y les mostró distintas herramientas: una pala, unas tijeras y un cuchillo especial de jardín." },
          { ru: "Катя выбрала маленькую лопату, а Антон купил бабушке красивую открытку.", es: "Katia eligió una pala pequeña, y Antón le compró a la abuela una tarjeta bonita." },
          { ru: "Продавец также посоветовал купить перчатки, потому что работать с землёй без них неудобно.", es: "El vendedor también aconsejó comprar guantes, porque trabajar la tierra sin ellos es incómodo." },
          { ru: "Антон согласился с продавцом и добавил перчатки к остальным подаркам.", es: "Antón estuvo de acuerdo con el vendedor y añadió los guantes al resto de los regalos." },
        ],
      },
      {
        segments: [
          { ru: "Дома Антон сел за стол и написал бабушке тёплое письмо новой ручкой.", es: "En casa, Antón se sentó a la mesa y le escribió a la abuela una carta cálida con un bolígrafo nuevo." },
          { ru: "Он написал, что всегда будет благодарен ей за помощь и любовь.", es: "Escribió que siempre le estaría agradecido por su ayuda y su cariño." },
          { ru: "Он вспомнил, как в детстве бабушка часто гуляла с ним по саду и рассказывала о цветах.", es: "Recordó cómo, de niño, la abuela paseaba a menudo con él por el jardín y le contaba sobre las flores." },
          { ru: "Закончив письмо, Антон положил его в конверт вместе с открыткой.", es: "Al terminar la carta, Antón la puso en un sobre junto con la tarjeta." },
        ],
      },
      {
        segments: [
          { ru: "В день рождения вся семья собралась у бабушки.", es: "El día del cumpleaños, toda la familia se reunió en casa de la abuela." },
          { ru: "Дедушка помогал бабушке накрывать на стол, а дядя и тётя приехали из соседнего города с большим тортом.", es: "El abuelo ayudaba a la abuela a poner la mesa, y el tío y la tía llegaron de la ciudad vecina con una torta grande." },
          { ru: "Антон дал ей подарок и открытку, а Катя обняла бабушку и поздравила её с праздником.", es: "Antón le dio el regalo y la tarjeta, y Katia abrazó a la abuela y la felicitó por su día." },
          { ru: "Бабушка открыла коробку с инструментами и перчатками и удивилась, насколько хорошо внуки знают её увлечения.", es: "La abuela abrió la caja con las herramientas y los guantes y se sorprendió de lo bien que sus nietos conocían sus aficiones." },
          { ru: "Бабушка была очень довольна и сказала, что теперь будет заниматься садом с новыми инструментами каждый день.", es: "La abuela quedó muy contenta y dijo que ahora se dedicaría al jardín con las herramientas nuevas todos los días." },
        ],
      },
    ],
  },
};

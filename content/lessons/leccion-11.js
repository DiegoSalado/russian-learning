export const lesson = {
  slug: "pasado-simple",
  level: "A2",
  module: "Módulo 1 — Pasado simple",
  order: 1,
  title: "El pasado simple",
  vocabulary: [
    { ru: "Был / была / было", transliteration: "byl / byla / bylo", es: "Fue / estuvo (pasado de быть)" },
    { ru: "Сделал / сделала", transliteration: "sdelal / sdelala", es: "Hizo (pasado de сделать)" },
    { ru: "Сказал / сказала", transliteration: "skazal / skazala", es: "Dijo (pasado de сказать)" },
    { ru: "Увидел / увидела", transliteration: "uvidel / uvidela", es: "Vio (pasado de увидеть)" },
    { ru: "Поел / поела", transliteration: "poyel / poyela", es: "Comió (pasado de поесть)" },
    { ru: "Пошёл / пошла", transliteration: "poshol / poshla", es: "Fue / se dirigió (pasado de пойти)" },
    { ru: "Вчера", transliteration: "vchera", es: "Ayer" },
    { ru: "На прошлой неделе", transliteration: "na proshloy nedele", es: "La semana pasada" },
    { ru: "В прошлом году", transliteration: "v proshlom godu", es: "El año pasado" },
    { ru: "Позавчера", transliteration: "pozavchera", es: "Anteayer" },
  ],
  grammarPoint: {
    title: "El pasado simple: -л, -ла, -ло, -ли",
    explanation:
      "El pasado en ruso no distingue persona, solo género y número: se forma quitando -ть del infinitivo y añadiendo -л (masculino), -ла (femenino), -ло (neutro) o -ли (plural). Algunos verbos frecuentes son irregulares, como идти → шёл/шла o есть → ел/ела.",
    tables: [
      {
        title: "Terminaciones de pasado: читать",
        columns: ["Sujeto", "Terminación", "Ejemplo"],
        rows: [
          ["Masculino (я/ты/он)", "-л", "он читал (él leyó)"],
          ["Femenino (я/ты/она)", "-ла", "она читала (ella leyó)"],
          ["Neutro (оно)", "-ло", "оно читало (leyó, neutro)"],
          ["Plural (мы/вы/они)", "-ли", "они читали (ellos leyeron)"],
        ],
        note: "El pasado no marca persona, solo género y número — por eso «я читал» y «он читал» tienen la misma forma.",
      },
    ],
    examples: [
      { ru: "Он читал книгу.", transliteration: "on chital knigu.", es: "Él leyó un libro." },
      { ru: "Она читала книгу.", transliteration: "ona chitala knigu.", es: "Ella leyó un libro." },
      { ru: "Мы читали книгу.", transliteration: "my chitali knigu.", es: "Nosotros leímos un libro." },
      { ru: "Вчера я пошёл в кино.", transliteration: "vchera ya poshol v kino.", es: "Ayer fui al cine." },
    ],
  },
  conversation: {
    title: "🕐 ¿Qué hiciste ayer?",
    lines: [
      {
        speaker: "A",
        transliteration: "chto ty delal vchera?",
        segments: [{ ru: "Что ты делал вчера?", es: "¿Qué hiciste ayer?" }],
      },
      {
        speaker: "B",
        transliteration: "vchera ya poshol v magazin i kupil novuyu kurtku.",
        segments: [{ ru: "Вчера я пошёл в магазин и купил новую куртку.", es: "Ayer fui a la tienda y compré una chaqueta nueva." }],
      },
      {
        speaker: "A",
        transliteration: "a vecherom?",
        segments: [{ ru: "А вечером?", es: "¿Y por la noche?" }],
      },
      {
        speaker: "B",
        transliteration: "vecherom ya posmotrel fil'm i rano lyog spat'.",
        segments: [{ ru: "Вечером я посмотрел фильм и рано лёг спать.", es: "Por la noche vi una película y me acosté temprano." }],
      },
      {
        speaker: "A",
        transliteration: "a ya na proshloy nedele uvidel starogo druga!",
        segments: [{ ru: "А я на прошлой неделе увидел старого друга!", es: "¡Yo la semana pasada vi a un viejo amigo!" }],
      },
    ],
  },
  reading: {
    title: "El viaje de Dmitri",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "В прошлом году Дмитрий поехал в отпуск в Санкт-Петербург.", es: "El año pasado Dmitri se fue de vacaciones a San Petersburgo." },
          { ru: "Он никогда раньше там не был, поэтому очень волновался.", es: "Nunca había estado allí antes, así que estaba muy nervioso." },
        ],
      },
      {
        segments: [
          { ru: "Сначала он полетел на самолёте, а потом взял такси до гостиницы.", es: "Primero voló en avión, y luego tomó un taxi hasta el hotel." },
          { ru: "Гостиница была маленькая, но очень уютная.", es: "El hotel era pequeño, pero muy acogedor." },
          { ru: "В первый день Дмитрий гулял по центру города и увидел много красивых зданий.", es: "El primer día Dmitri caminó por el centro de la ciudad y vio muchos edificios hermosos." },
        ],
      },
      {
        segments: [
          { ru: "Вечером он пошёл в ресторан и поел настоящий русский борщ.", es: "Por la noche fue a un restaurante y comió un auténtico borsch ruso." },
          { ru: "Еда была вкусная, и Дмитрий остался очень доволен.", es: "La comida estaba deliciosa, y Dmitri quedó muy contento." },
          { ru: "Потом он вернулся в гостиницу и написал письмо друзьям.", es: "Luego volvió al hotel y le escribió una carta a sus amigos." },
        ],
      },
      {
        segments: [
          { ru: "На следующий день он посетил музей и купил несколько подарков для семьи.", es: "Al día siguiente visitó un museo y compró varios regalos para su familia." },
          { ru: "Позавчера Дмитрий вернулся домой.", es: "Anteayer Dmitri regresó a casa." },
          { ru: "Он сказал, что это было лучшее путешествие в его жизни.", es: "Dijo que fue el mejor viaje de su vida." },
        ],
      },
    ],
  },
};

export const lesson = {
  slug: "everyday-narrative",
  level: "A2",
  module: "Módulo 5 — Narrativa cotidiana",
  order: 9,
  title: "Narrativa cotidiana",
  vocabulary: [
    { ru: "Потом", transliteration: "potom", es: "Luego / después" },
    { ru: "Поэтому", transliteration: "poetomu", es: "Por eso" },
    { ru: "Но", transliteration: "no", es: "Pero" },
    { ru: "Потому что", transliteration: "potomu chto", es: "Porque" },
    { ru: "Сначала", transliteration: "snachala", es: "Al principio / primero" },
    { ru: "Работа", transliteration: "rabota", es: "Trabajo" },
    { ru: "Учёба", transliteration: "ucheba", es: "Estudios" },
    { ru: "Отдых", transliteration: "otdykh", es: "Descanso / ocio" },
    { ru: "Коллега", transliteration: "kollega", es: "Colega" },
    { ru: "Проект", transliteration: "proyekt", es: "Proyecto" },
  ],
  grammarPoint: {
    title: "Conectores narrativos y discurso directo",
    explanation:
      "Palabras como сначала, потом, поэтому, но y потому что permiten encadenar oraciones y dar coherencia a una narración. El discurso directo simple se introduce con dos puntos y comillas: Он сказал: «Я приду завтра» (Él dijo: 'Vendré mañana').",
    tables: [
      {
        title: "Conectores narrativos",
        columns: ["Conector", "Función", "Ejemplo"],
        rows: [
          ["Сначала", "marca el inicio de la secuencia", "Сначала я работал. (Primero trabajé.)"],
          ["Потом", "marca lo que sigue en el tiempo", "Потом отдыхал. (Luego descansé.)"],
          ["Но", "contrasta dos ideas", "Было трудно, но интересно. (Fue difícil, pero interesante.)"],
          ["Потому что", "explica la causa", "Опоздал, потому что был трафик. (Llegó tarde porque había tráfico.)"],
          ["Поэтому", "introduce la consecuencia", "Я устал, поэтому пошёл домой. (Estaba cansado, por eso me fui.)"],
        ],
      },
    ],
    examples: [
      { ru: "Сначала я работал, потом отдыхал.", transliteration: "snachala ya rabotal, potom otdykhal.", es: "Primero trabajé, luego descansé." },
      { ru: "Я устал, поэтому пошёл домой.", transliteration: "ya ustal, poetomu poshol domoy.", es: "Estaba cansado, por eso me fui a casa." },
      { ru: "Он опоздал, потому что был трафик.", transliteration: "on opozdal, potomu chto byl trafik.", es: "Llegó tarde porque había tráfico." },
      { ru: "Коллега сказал: «Проект готов».", transliteration: "kollega skazal: «proyekt gotov».", es: "El colega dijo: 'El proyecto está listo'." },
    ],
  },
  conversation: {
    title: "💼 Un día de trabajo",
    lines: [
      {
        speaker: "A",
        transliteration: "kak proshol tvoy den' na rabote?",
        segments: [{ ru: "Как прошёл твой день на работе?", es: "¿Cómo te fue en el trabajo hoy?" }],
      },
      {
        speaker: "B",
        transliteration: "snachala bylo spokoyno, no potom nachalis' problemy s proyektom.",
        segments: [{ ru: "Сначала было спокойно, но потом начались проблемы с проектом.", es: "Al principio estuvo tranquilo, pero luego empezaron problemas con el proyecto." }],
      },
      {
        speaker: "A",
        transliteration: "chto sluchilos'?",
        segments: [{ ru: "Что случилось?", es: "¿Qué pasó?" }],
      },
      {
        speaker: "B",
        transliteration: "kollega skazal: «my ne uspeyem zakonchit' vovremya», poetomu my ostalis' do vechera.",
        segments: [{ ru: "Коллега сказал: «Мы не успеем закончить вовремя», поэтому мы остались до вечера.", es: "Mi colega dijo: 'No llegaremos a terminar a tiempo', así que nos quedamos hasta la noche." }],
      },
      {
        speaker: "A",
        transliteration: "ponyatno. nadeyus', zavtra budet legche.",
        segments: [
          { ru: "Понятно.", es: "Entiendo." },
          { ru: "Надеюсь, завтра будет легче.", es: "Espero que mañana sea más fácil." },
        ],
      },
    ],
  },
  reading: {
    title: "El largo día de Olga",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Сегодня был длинный день у Ольги.", es: "Hoy fue un día largo para Olga." },
          { ru: "Сначала она пошла на работу, как обычно, в восемь часов утра.", es: "Primero fue al trabajo, como de costumbre, a las ocho de la mañana." },
          { ru: "В офисе её ждал большой проект, который нужно было закончить к вечеру.", es: "En la oficina la esperaba un gran proyecto que debía terminar para la noche." },
        ],
      },
      {
        segments: [
          { ru: "Сначала всё шло хорошо, но потом компьютер сломался, и Ольга потеряла часть работы.", es: "Al principio todo iba bien, pero luego la computadora se rompió, y Olga perdió parte de su trabajo." },
          { ru: "Она расстроилась, но не сдалась, потому что проект был очень важен для компании.", es: "Se sintió frustrada, pero no se rindió, porque el proyecto era muy importante para la empresa." },
          { ru: "Коллега подошёл к ней и сказал: «Не волнуйся, я помогу тебе».", es: "Un colega se acercó a ella y le dijo: 'No te preocupes, te voy a ayudar'." },
          { ru: "Ольга обрадовалась и поблагодарила его.", es: "Olga se alegró y le agradeció." },
        ],
      },
      {
        segments: [
          { ru: "Вместе они работали до семи часов вечера и наконец закончили проект.", es: "Juntos trabajaron hasta las siete de la tarde y por fin terminaron el proyecto." },
          { ru: "Поэтому Ольга решила пригласить коллегу выпить кофе — это была небольшая награда за тяжёлый день.", es: "Por eso Olga decidió invitar a su colega a tomar un café — era una pequeña recompensa por un día difícil." },
        ],
      },
      {
        segments: [
          { ru: "В кафе они говорили не только о работе, но и об учёбе и о планах на отдых.", es: "En el café hablaron no solo de trabajo, sino también de estudios y de planes de descanso." },
          { ru: "Коллега рассказал, что летом хочет поехать в горы, а Ольга призналась, что мечтает о море.", es: "El colega contó que en verano quiere ir a las montañas, y Olga confesó que sueña con el mar." },
        ],
      },
      {
        segments: [
          { ru: "Домой Ольга вернулась поздно, но счастливая.", es: "Olga volvió a casa tarde, pero feliz." },
          { ru: "Она подумала, что, хотя день был трудным, он закончился хорошо, потому что рядом были хорошие люди.", es: "Pensó que, aunque el día había sido difícil, terminó bien, porque a su lado había buena gente." },
        ],
      },
    ],
  },
};

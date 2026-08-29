export const lesson = {
  slug: "repaso-a2",
  level: "A2",
  module: "Módulo 6 — Proyecto de cierre A2",
  order: 6,
  title: "Repaso integrador de A2",
  vocabulary: [
    { ru: "Вчера", transliteration: "vchera", es: "Ayer" },
    { ru: "Завтра", transliteration: "zavtra", es: "Mañana" },
    { ru: "Планировать", transliteration: "planirovat'", es: "Planear" },
    { ru: "Лучше", transliteration: "luchshe", es: "Mejor" },
    { ru: "Потому что", transliteration: "potomu chto", es: "Porque" },
    { ru: "Поэтому", transliteration: "poetomu", es: "Por eso" },
    { ru: "Купить", transliteration: "kupit'", es: "Comprar" },
    { ru: "Путешествие", transliteration: "puteshestviye", es: "Viaje" },
    { ru: "Нет времени", transliteration: "nyet vremeni", es: "No hay tiempo (genitivo)" },
    { ru: "Самый интересный", transliteration: "samyy interesnyy", es: "El más interesante" },
  ],
  grammarPoint: {
    title: "Repaso integrador del nivel A2",
    explanation:
      "Repasamos los cuatro pilares del nivel: el pasado con -л/-ла/-ло/-ли, el futuro simple y compuesto, los casos genitivo y acusativo, y los comparativos/superlativos de adjetivos.",
    tables: [
      {
        title: "Resumen de reglas del nivel A2",
        columns: ["Regla", "Ejemplo"],
        rows: [
          ["Pasado: -л/-ла/-ло/-ли", "Вчера я пошёл в кино. (Ayer fui al cine.)"],
          ["Futuro simple / compuesto", "Завтра я буду отдыхать. (Mañana voy a descansar.)"],
          ["Genitivo / acusativo", "У меня нет билета. (No tengo boleto.)"],
          ["Comparativos / superlativos", "Этот город красивее, чем наш. (Esta ciudad es más bonita que la nuestra.)"],
        ],
      },
    ],
    examples: [
      { ru: "Вчера я пошёл в кино.", transliteration: "vchera ya poshol v kino.", es: "Ayer fui al cine. (pasado)" },
      { ru: "Завтра я буду отдыхать.", transliteration: "zavtra ya budu otdykhat'.", es: "Mañana voy a descansar. (futuro compuesto)" },
      { ru: "У меня нет билета.", transliteration: "u menya nyet bileta.", es: "No tengo boleto. (genitivo)" },
      { ru: "Этот город красивее, чем наш.", transliteration: "etot gorod krasiveye, chem nash.", es: "Esta ciudad es más bonita que la nuestra. (comparativo)" },
    ],
  },
  conversation: {
    title: "🗺️ Contando el viaje",
    lines: [
      {
        speaker: "A",
        transliteration: "kak proshlo tvoyo puteshestviye na proshloy nedele?",
        segments: [{ ru: "Как прошло твоё путешествие на прошлой неделе?", es: "¿Cómo te fue el viaje la semana pasada?" }],
      },
      {
        speaker: "B",
        transliteration: "otlichno! snachala ya boyalsya, chto ne khvatit deneg, no potom vsyo poluchilos'.",
        segments: [
          { ru: "Отлично!", es: "¡Excelente!" },
          { ru: "Сначала я боялся, что не хватит денег, но потом всё получилось.", es: "Al principio temía que no me alcanzara el dinero, pero luego todo salió bien." },
        ],
      },
      {
        speaker: "A",
        transliteration: "a chto bylo samym interesnym?",
        segments: [{ ru: "А что было самым интересным?", es: "¿Y qué fue lo más interesante?" }],
      },
      {
        speaker: "B",
        transliteration: "samym interesnym byl staryy gorod — on krasiveye, chem ya dumal.",
        segments: [{ ru: "Самым интересным был старый город — он красивее, чем я думал.", es: "Lo más interesante fue la ciudad vieja — es más bonita de lo que pensaba." }],
      },
      {
        speaker: "A",
        transliteration: "zdorovo! kuda poyedesh' v sleduyushchiy raz?",
        segments: [
          { ru: "Здорово!", es: "¡Qué bien!" },
          { ru: "Куда поедешь в следующий раз?", es: "¿A dónde irás la próxima vez?" },
        ],
      },
    ],
  },
  reading: {
    title: "El nuevo café de Artiom",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "В прошлом году Артём решил изменить свою жизнь.", es: "El año pasado Artiom decidió cambiar su vida." },
          { ru: "Сначала он работал в большой компании, но работа не приносила ему радости, поэтому он начал думать о переменах.", es: "Al principio trabajaba en una gran empresa, pero el trabajo no le traía alegría, así que empezó a pensar en un cambio." },
        ],
      },
      {
        segments: [
          { ru: "Однажды коллега сказал ему: «Почему бы тебе не попробовать открыть своё дело?»", es: "Un día un colega le dijo: '¿Por qué no intentas abrir tu propio negocio?'" },
          { ru: "Артём подумал об этом и понял, что это отличная идея.", es: "Artiom lo pensó y se dio cuenta de que era una idea excelente." },
          { ru: "Он начал планировать новый проект — небольшое кафе в центре города.", es: "Empezó a planear un nuevo proyecto — un pequeño café en el centro de la ciudad." },
        ],
      },
      {
        segments: [
          { ru: "Сначала было трудно: у него не было ни опыта, ни достаточно денег.", es: "Al principio fue difícil: no tenía experiencia ni suficiente dinero." },
          { ru: "Но Артём не сдался, потому что верил в свою мечту.", es: "Pero Artiom no se rindió, porque creía en su sueño." },
          { ru: "Он взял кредит в банке и нашёл хорошее место для кафе.", es: "Pidió un crédito en el banco y encontró un buen lugar para el café." },
        ],
      },
      {
        segments: [
          { ru: "Через полгода кафе открылось.", es: "Medio año después el café abrió." },
          { ru: "Оно оказалось лучше, чем ожидал Артём: люди приходили каждый день, а некоторые говорили, что это самое уютное кафе в городе.", es: "Resultó ser mejor de lo que Artiom esperaba: la gente venía todos los días, y algunos decían que era el café más acogedor de la ciudad." },
        ],
      },
      {
        segments: [
          { ru: "Теперь у Артёма есть новые планы.", es: "Ahora Artiom tiene nuevos planes." },
          { ru: "Завтра он поедет на встречу с инвестором, потому что хочет открыть второе кафе в другом районе.", es: "Mañana irá a una reunión con un inversor, porque quiere abrir un segundo café en otro barrio." },
          { ru: "Он верит, что будущее будет ещё интереснее, чем прошлое.", es: "Cree que el futuro será aún más interesante que el pasado." },
        ],
      },
    ],
  },
};

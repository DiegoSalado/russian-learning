export const lesson = {
  slug: "colloquialisms-slang",
  level: "C2",
  module: "Módulo 3b — Coloquialismos y jerga",
  order: 7,
  title: "Coloquialismos y jerga contemporánea",
  vocabulary: [
    { ru: "Клёво", transliteration: "klyovo", es: "Genial (jerga)" },
    { ru: "Тусовка", transliteration: "tusovka", es: "Reunión informal / fiesta (jerga)" },
    { ru: "Прикольно", transliteration: "prikol'no", es: "Gracioso / copado (jerga)" },
    { ru: "Задолбать", transliteration: "zadolbat'", es: "Hartar (coloquial, fuerte)" },
    { ru: "Короче", transliteration: "koroche", es: "En fin / resumiendo (muletilla coloquial)" },
    { ru: "Достало", transliteration: "dostalo", es: "Ya me harté (coloquial)" },
  ],
  grammarPoint: {
    title: "Coloquialismos y jerga contemporánea",
    explanation:
      "El ruso hablado por jóvenes y en redes sociales usa un vocabulario muy distinto del neutro o literario: jerga (сленг), muletillas y expresiones informales que raramente aparecen en un diccionario tradicional, pero que son centrales para entender conversación real entre hablantes nativos.",
    tables: [
      {
        title: "Jerga frecuente y su equivalente neutro",
        columns: ["Coloquial", "Equivalente neutro", "Significado"],
        rows: [
          ["Клёво", "Здорово, отлично", "Genial"],
          ["Тусовка", "Встреча, вечеринка", "Reunión informal, fiesta"],
          ["Прикольно", "Интересно, забавно", "Gracioso, copado"],
          ["Короче", "Итак, в общем", "En fin, resumiendo (muletilla)"],
        ],
        note: "Esta jerga cambia rápido de una generación a otra — lo que suena «клёво» hoy puede sonar anticuado en diez años, a diferencia del vocabulario neutro, que se mantiene estable.",
      },
    ],
    examples: [
      { ru: "Вчера была клёвая тусовка у Максима.", transliteration: "vchera byla klyovaya tusovka u Maksima.", es: "Ayer hubo una fiesta genial en lo de Maxim." },
      { ru: "Это прикольно, но немного странно.", transliteration: "eto prikol'no, no nemnogo stranno.", es: "Es gracioso, pero un poco raro." },
      { ru: "Меня уже достало это ждать!", transliteration: "menya uzhe dostalo eto zhdat'!", es: "¡Ya me harté de esperar esto!" },
      { ru: "Короче, мы решили не ехать.", transliteration: "koroche, my reshili ne yekhat'.", es: "En fin, decidimos no ir." },
    ],
  },
  conversation: {
    title: "📱 Переписка друзей",
    lines: [
      {
        speaker: "A",
        transliteration: "kak proshla vecherinka?",
        segments: [{ ru: "Как прошла вечеринка?", es: "¿Cómo estuvo la fiesta?" }],
      },
      {
        speaker: "B",
        transliteration: "ochen' klyovo! byla klassnaya tusovka, mnogo lyudey.",
        segments: [{ ru: "Очень клёво! Была классная тусовка, много людей.", es: "¡Muy genial! Fue una reunión buenísima, con mucha gente." }],
      },
      {
        speaker: "A",
        transliteration: "prikol'no! a chto s toy problemoy na rabote?",
        segments: [{ ru: "Прикольно! А что с той проблемой на работе?", es: "¡Copado! ¿Y qué pasó con ese problema del trabajo?" }],
      },
      {
        speaker: "B",
        transliteration: "koroche, menya uzhe dostalo ob etom dumat'. reshu zavtra.",
        segments: [{ ru: "Короче, меня уже достало об этом думать.", es: "En fin, ya me harté de pensar en eso." }, { ru: "Решу завтра.", es: "Lo resuelvo mañana." }],
      },
    ],
  },
  reading: {
    title: "Два письма",
    type: "artículo",
    paragraphs: [
      {
        segments: [
          { ru: "Сообщение другу: «Короче, тусовка была клёвая, все было прикольно, но музыка немного достала под конец».", es: "Mensaje a un amigo: «En fin, la reunión estuvo genial, todo fue divertido, pero la música terminó por hartarme un poco»." },
        ],
      },
      {
        segments: [
          { ru: "То же самое, но официально: «Мероприятие прошло отлично, атмосфера была приятной, хотя музыка под конец показалась немного утомительной».", es: "Lo mismo, pero de forma oficial: «El evento resultó excelente, el ambiente fue agradable, aunque la música hacia el final resultó algo cansadora»." },
        ],
      },
      {
        segments: [
          { ru: "Одно и то же сообщение, два совершенно разных регистра — и оба звучат абсолютно естественно в своём контексте.", es: "El mismo mensaje, dos registros completamente distintos — y ambos suenan absolutamente naturales en su contexto." },
        ],
      },
    ],
  },
};

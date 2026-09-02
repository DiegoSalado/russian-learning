export const lesson = {
  slug: "review-b1",
  level: "B1",
  module: "Módulo 6 — Proyecto de cierre B1",
  order: 14,
  title: "Repaso integrador de B1",
  vocabulary: [
    { ru: "заканчивать / закончить", transliteration: "zakanchivat' / zakonchit'", es: "terminar (imperfectivo / perfectivo)" },
    { ru: "путешествие", transliteration: "puteshestviye", es: "viaje" },
    { ru: "который", transliteration: "kotoryy", es: "que, el cual" },
    { ru: "мнение", transliteration: "mneniye", es: "opinión" },
    { ru: "согласен / согласна", transliteration: "soglasen / soglasna", es: "de acuerdo" },
    { ru: "инструмент", transliteration: "instrument", es: "herramienta, instrumento" },
    { ru: "приехать", transliteration: "priyekhat'", es: "llegar (en vehículo)" },
    { ru: "судьба", transliteration: "sud'ba", es: "destino" },
    { ru: "поэтому", transliteration: "poetomu", es: "por eso" },
    { ru: "взгляд", transliteration: "vzglyad", es: "mirada, punto de vista" },
  ],
  grammarPoint: {
    title: "Repaso: los cinco pilares del nivel B1",
    explanation:
      "Este módulo repasa los cinco temas centrales del nivel: el aspecto verbal (proceso vs. resultado), los casos dativo e instrumental, los verbos de movimiento con sus prefijos, el pronombre relativo который, y las expresiones de opinión con conectores de causa-consecuencia. Dominarlos juntos permite leer y contar historias con más precisión y naturalidad.",
    tables: [
      {
        title: "Cuadro resumen del nivel B1",
        columns: ["Tema", "Ejemplo", "Idea clave"],
        rows: [
          ["Aspecto verbal", "Я прочитал книгу.", "Perfectivo: la acción se completó."],
          ["Dativo / instrumental", "Я дал другу подарок и написал письмо ручкой.", "Dativo = a quién; instrumental = con qué."],
          ["Verbos de movimiento", "Он уехал, но скоро приедет обратно.", "Los prefijos у-/при- marcan partida y llegada."],
          ["Который", "Друг, который мне помог, живёт рядом.", "Concuerda en género/número con el antecedente."],
          ["Opinión y causa", "На мой взгляд, поэтому...", "Justificar una opinión con так как / поэтому."],
        ],
        note: "Estos cinco puntos aparecen combinados de forma natural en cualquier texto de nivel B1 en adelante.",
      },
    ],
    examples: [
      { ru: "Когда я закончил работу, я поехал домой.", transliteration: "kogda ya zakonchil rabotu, ya poyekhal domoy.", es: "Cuando terminé el trabajo, me fui a casa." },
      { ru: "Это книга, которую мне подарила подруга.", transliteration: "eto kniga, kotoruyu mne podarila podruga.", es: "Este es el libro que me regaló mi amiga." },
      { ru: "На мой взгляд, судьба часто зависит от наших решений.", transliteration: "na moy vzglyad, sud'ba chasto zavisit ot nashikh resheniy.", es: "A mi parecer, el destino a menudo depende de nuestras decisiones." },
      { ru: "Он выехал рано, поэтому приехал вовремя.", transliteration: "on vyyekhal rano, poetomu priyekhal vovremya.", es: "Salió temprano, por eso llegó a tiempo." },
    ],
  },
  conversation: {
    title: "🎓 Подводим итоги уровня",
    lines: [
      {
        speaker: "A",
        transliteration: "nu chto, ty uzhe zakonchila povtoreniye grammatiki?",
        segments: [{ ru: "Ну что, ты уже закончила повторение грамматики?", es: "¿Y bien, ya terminaste de repasar la gramática?" }],
      },
      {
        speaker: "B",
        transliteration: "pochti. samoye trudnoye dlya menya — eto glagoly dvizheniya s pristavkami.",
        segments: [{ ru: "Почти. Самое трудное для меня — это глаголы движения с приставками.", es: "Casi. Lo más difícil para mí son los verbos de movimiento con prefijos." }],
      },
      {
        speaker: "A",
        transliteration: "po-moyemu, luchshe vsego zapominat' ikh cherez istorii, kotoryye ty chitayesh'.",
        segments: [{ ru: "По-моему, лучше всего запоминать их через истории, которые ты читаешь.", es: "En mi opinión, lo mejor es memorizarlos a través de las historias que lees." }],
      },
      {
        speaker: "B",
        transliteration: "ya soglasna. a chto ty dumayesh' o padezhakh?",
        segments: [{ ru: "Я согласна. А что ты думаешь о падежах?", es: "Estoy de acuerdo. ¿Y qué piensas de los casos?" }],
      },
      {
        speaker: "A",
        transliteration: "na moy vzglyad, dative i tvoritel'nyy uzhe ne kazhutsya takimi trudnymi, kak ran'she.",
        segments: [{ ru: "На мой взгляд, дательный и творительный уже не кажутся такими трудными, как раньше.", es: "A mi parecer, el dativo y el instrumental ya no parecen tan difíciles como antes." }],
      },
      {
        speaker: "B",
        transliteration: "otlichno! togda my gotovy k sleduyushchemu urovnyu.",
        segments: [{ ru: "Отлично! Тогда мы готовы к следующему уровню.", es: "¡Excelente! Entonces estamos listos para el siguiente nivel." }],
      },
    ],
  },
  reading: {
    title: "Путешествие, которое изменило всё",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Марина всегда мечтала о путешествии, которое изменит её жизнь, но никогда не решалась поехать одна.", es: "Marina siempre soñó con un viaje que cambiara su vida, pero nunca se animaba a viajar sola." },
          { ru: "Однажды подруга дала ей билет на поезд и сказала: «Ты должна это сделать».", es: "Un día, una amiga le dio un boleto de tren y le dijo: «Tienes que hacerlo»." },
        ],
      },
      {
        segments: [
          { ru: "Марина долго думала, но в итоге согласилась и решила уехать в маленький город на севере, о котором давно читала.", es: "Marina lo pensó largo rato, pero al final aceptó y decidió irse a un pueblo pequeño del norte, sobre el cual había leído hace tiempo." },
          { ru: "Она выехала рано утром, взяла с собой только небольшую сумку и старую книгу, которую читала ещё в детстве.", es: "Salió temprano por la mañana, llevó consigo solo una bolsa pequeña y un libro viejo que había leído de niña." },
        ],
      },
      {
        segments: [
          { ru: "В поезде она познакомилась с мужчиной, который ехал в тот же город по работе.", es: "En el tren conoció a un hombre que viajaba a la misma ciudad por trabajo." },
          { ru: "Они долго разговаривали, и он рассказал ей о людях, которые живут в тех местах, и об их простой, но счастливой жизни.", es: "Hablaron largo rato, y él le contó sobre la gente que vive en esos lugares, y sobre su vida sencilla pero feliz." },
          { ru: "По-моему, сказал он, счастье не зависит от денег, а зависит от того, с кем ты его делишь.", es: "«En mi opinión», dijo él, «la felicidad no depende del dinero, sino de con quién la compartes»." },
        ],
      },
      {
        segments: [
          { ru: "Когда поезд наконец приехал, Марина вышла на маленькую станцию и почувствовала странное спокойствие.", es: "Cuando el tren finalmente llegó, Marina bajó en una pequeña estación y sintió una extraña calma." },
          { ru: "Воздух здесь был чище, чем в городе, и люди, которых она встречала на улице, улыбались ей, как старой знакомой.", es: "El aire aquí era más limpio que en la ciudad, y la gente con la que se cruzaba en la calle le sonreía como a una vieja conocida." },
          { ru: "Она поняла, что это путешествие было не просто поездкой, а началом новой судьбы.", es: "Comprendió que ese viaje no era solo un traslado, sino el comienzo de un nuevo destino." },
        ],
      },
      {
        segments: [
          { ru: "Первую неделю Марина просто гуляла по улицам, разговаривала с местными жителями и заканчивала ту старую книгу из детства.", es: "La primera semana, Marina simplemente paseaba por las calles, hablaba con los habitantes del lugar y terminaba aquel viejo libro de la infancia." },
          { ru: "Она заметила, что здесь она читает медленнее, зато понимает гораздо больше, чем раньше.", es: "Notó que allí leía más despacio, pero entendía mucho más que antes." },
          { ru: "Через месяц Марина написала подруге письмо, в котором благодарила её за смелость дать ей тот билет.", es: "Un mes después, Marina le escribió a su amiga una carta en la que le agradecía la valentía de haberle dado ese boleto." },
          { ru: "«Я согласна с тобой, — писала она, — иногда нужно просто уехать, чтобы найти себя».", es: "«Estoy de acuerdo contigo», escribió, «a veces solo hace falta irse para encontrarse a uno mismo»." },
          { ru: "С тех пор Марина каждый год ездит в новые места, и, по её словам, эти путешествия сделали её другим человеком.", es: "Desde entonces, Marina viaja cada año a nuevos lugares y, según sus palabras, esos viajes la convirtieron en otra persona." },
        ],
      },
    ],
  },
};

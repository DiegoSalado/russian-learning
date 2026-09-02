export const lesson = {
  slug: "verb-prefixes-meaning",
  level: "C1",
  module: "Módulo 1b — Prefijos verbales",
  order: 3,
  title: "Prefijos verbales y cambio de significado",
  vocabulary: [
    { ru: "Переписать", transliteration: "perepisat'", es: "Reescribir / copiar" },
    { ru: "Подписать", transliteration: "podpisat'", es: "Firmar" },
    { ru: "Описать", transliteration: "opisat'", es: "Describir" },
    { ru: "Записать", transliteration: "zapisat'", es: "Anotar / grabar" },
    { ru: "Выписать", transliteration: "vypisat'", es: "Dar de alta / extraer una cita" },
    { ru: "Дописать", transliteration: "dopisat'", es: "Terminar de escribir" },
  ],
  grammarPoint: {
    title: "Prefijos verbales y cambio de significado",
    explanation:
      "Los prefijos verbales no solo aportan aspecto perfectivo — muchos cambian por completo el significado del verbo. Un mismo verbo base, писать (escribir), da lugar a media docena de verbos con sentidos distintos según el prefijo que lleve.",
    tables: [
      {
        title: "Prefijos con писать (escribir)",
        columns: ["Prefijo", "Verbo", "Significado"],
        rows: [
          ["пере-", "переписать", "reescribir, copiar"],
          ["под-", "подписать", "firmar"],
          ["о-", "описать", "describir"],
          ["за-", "записать", "anotar, grabar"],
          ["вы-", "выписать", "dar de alta (de un hospital), extraer una cita"],
          ["до-", "дописать", "terminar de escribir"],
        ],
        note: "El significado de cada prefijo con писать se repite con otros verbos base: пере- siempre aporta la idea de 'de nuevo', до- la de 'hasta el final', под- la de 'debajo/al pie'.",
      },
    ],
    examples: [
      { ru: "Я переписал сочинение.", transliteration: "ya perepisal sochineniye.", es: "Reescribí la redacción." },
      { ru: "Она подписала документ.", transliteration: "ona podpisala dokument.", es: "Ella firmó el documento." },
      { ru: "Он описал свою поездку.", transliteration: "on opisal svoyu poyezdku.", es: "Él describió su viaje." },
      { ru: "Запиши мой номер телефона.", transliteration: "zapishi moy nomer telefona.", es: "Anota mi número de teléfono." },
    ],
  },
  conversation: {
    title: "📝 В больнице",
    lines: [
      {
        speaker: "A",
        transliteration: "vrach uzhe vypisal tebya iz bol'nitsy?",
        segments: [{ ru: "Врач уже выписал тебя из больницы?", es: "¿Ya te dio de alta el médico del hospital?" }],
      },
      {
        speaker: "B",
        transliteration: "da, on vypisal menya vchera.",
        segments: [{ ru: "Да, он выписал меня вчера.", es: "Sí, me dio de alta ayer." }],
      },
      {
        speaker: "A",
        transliteration: "ty podpisal vse dokumenty?",
        segments: [{ ru: "Ты подписал все документы?", es: "¿Firmaste todos los documentos?" }],
      },
      {
        speaker: "B",
        transliteration: "da, podpisal. a yeshcho ya zapisal vse sovety vracha.",
        segments: [{ ru: "Да, подписал.", es: "Sí, los firmé." }, { ru: "А ещё я записал все советы врача.", es: "Y además anoté todos los consejos del médico." }],
      },
      {
        speaker: "A",
        transliteration: "molodets! ne zabud' dopisat' dnevnik zdorov'ya.",
        segments: [{ ru: "Молодец! Не забудь дописать дневник здоровья.", es: "¡Bien hecho! No te olvides de terminar de escribir el diario de salud." }],
      },
    ],
  },
  reading: {
    title: "Писатель за работой",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Писатель весь вечер работал над своим новым романом.", es: "El escritor trabajó toda la tarde en su nueva novela." },
          { ru: "Сначала он описал главного героя и его жизнь в маленьком городе.", es: "Primero describió al protagonista y su vida en una pequeña ciudad." },
        ],
      },
      {
        segments: [
          { ru: "Потом он понял, что первая глава написана плохо, и переписал её три раза.", es: "Luego se dio cuenta de que el primer capítulo estaba mal escrito, y lo reescribió tres veces." },
          { ru: "Он записал новые идеи в отдельную тетрадь, чтобы не забыть их.", es: "Anotó las ideas nuevas en un cuaderno aparte para no olvidarlas." },
        ],
      },
      {
        segments: [
          { ru: "Поздно ночью он наконец дописал последнюю страницу главы.", es: "Ya tarde por la noche, finalmente terminó de escribir la última página del capítulo." },
          { ru: "Завтра ему нужно подписать контракт с издательством.", es: "Mañana tiene que firmar el contrato con la editorial." },
        ],
      },
    ],
  },
};

export const lesson = {
  slug: "case-summary",
  level: "B1",
  module: "Módulo 4 — Resumen de los seis casos",
  order: 13,
  title: "Los seis casos: resumen y comparación",
  vocabulary: [
    { ru: "именительный", transliteration: "imenitel'nyy", es: "nominativo" },
    { ru: "винительный", transliteration: "vinitel'nyy", es: "acusativo" },
    { ru: "родительный", transliteration: "roditel'nyy", es: "genitivo" },
    { ru: "дательный", transliteration: "datel'nyy", es: "dativo" },
    { ru: "творительный", transliteration: "tvoritel'nyy", es: "instrumental" },
    { ru: "предложный", transliteration: "predlozhnyy", es: "preposicional" },
  ],
  grammarPoint: {
    title: "Los seis casos: para qué sirve cada uno",
    explanation:
      "Ya viste los seis casos por separado en lecciones anteriores. Esta lección los junta en una sola vista: qué pregunta responde cada caso, con qué preposiciones aparece, y cómo cambia una misma palabra («друг», amigo) al pasar por los seis. La idea no es aprender nada nuevo, sino ver el sistema completo de una vez.",
    tables: [
      {
        title: "Los seis casos, uno al lado del otro",
        columns: ["Caso", "Pregunta", "Función", "Ejemplo (en español)"],
        rows: [
          ["Nominativo", "¿quién? ¿qué?", "El sujeto de la oración", "Adam dio una flor a Ana"],
          ["Acusativo", "¿a quién? ¿qué?", "El objeto directo", "Adam dio una flor a Ana"],
          ["Genitivo", "¿de quién?", "Posesión, cantidad, negación con нет", "el libro de Adam"],
          ["Dativo", "¿a quién? ¿para quién?", "El objeto indirecto", "Adam dio una flor a Ana"],
          ["Instrumental", "¿con qué? ¿con quién?", "El instrumento o la compañía", "fuimos a Moscú en auto"],
          ["Preposicional", "¿dónde? ¿de qué?", "Solo aparece con в, на, о/об", "vivimos en Moscú"],
        ],
      },
      {
        title: "«Друг» (amigo) en los seis casos",
        columns: ["Caso", "Forma", "Con preposición"],
        rows: [
          ["Nominativo", "друг", "— (Мой друг здесь. — Mi amigo está aquí.)"],
          ["Acusativo", "друга", "— (Я вижу друга. — Veo a mi amigo.)"],
          ["Genitivo", "друга", "у друга (en casa de mi amigo)"],
          ["Dativo", "другу", "— (Я звоню другу. — Llamo a mi amigo.)"],
          ["Instrumental", "другом", "с другом (con mi amigo)"],
          ["Preposicional", "друге", "о друге (sobre mi amigo)"],
        ],
        note: "Nota que acusativo y genitivo coinciden (друга) porque друг es masculino animado: los sustantivos animados toman la forma del genitivo en el acusativo.",
      },
      {
        title: "Preposiciones y el caso que exigen",
        columns: ["Preposición", "Caso", "Significado"],
        rows: [
          ["у", "genitivo", "en casa de, junto a"],
          ["из, от, до, без", "genitivo", "de, desde, hasta, sin"],
          ["к", "dativo", "hacia, a casa de"],
          ["по", "dativo", "por, a lo largo de"],
          ["с (con)", "instrumental", "con (compañía)"],
          ["перед, над, под, за", "instrumental", "delante de, sobre, debajo de, detrás de"],
          ["в, на", "acusativo o preposicional", "acusativo = movimiento hacia; preposicional = ubicación quieta"],
          ["о, об", "preposicional", "sobre, acerca de"],
        ],
        note: "в y на son las únicas preposiciones que cambian de caso según el sentido: «идти в школу» (ir a la escuela, acusativo — movimiento) vs. «быть в школе» (estar en la escuela, preposicional — ubicación).",
      },
    ],
    examples: [
      { ru: "Это мой друг.", transliteration: "eto moy drug.", es: "Este es mi amigo. (nominativo)" },
      { ru: "Я вижу друга.", transliteration: "ya vizhu druga.", es: "Veo a mi amigo. (acusativo)" },
      { ru: "У друга есть машина.", transliteration: "u druga yest' mashina.", es: "Mi amigo tiene un auto. (genitivo)" },
      { ru: "Я дарю подарок другу.", transliteration: "ya daryu podarok drugu.", es: "Le doy un regalo a mi amigo. (dativo)" },
      { ru: "Мы едем в Москву с другом.", transliteration: "my yedem v moskvu s drugom.", es: "Vamos a Moscú con mi amigo. (instrumental)" },
      { ru: "Я думаю о друге.", transliteration: "ya dumayu o druge.", es: "Pienso en mi amigo. (preposicional)" },
    ],
  },
  reading: {
    title: "Один день, шесть падежей",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Мой друг Иван живёт в Москве.", es: "Mi amigo Iván vive en Moscú. (preposicional: в Москве)" },
        ],
      },
      {
        segments: [
          { ru: "Утром я вижу Ивана на улице.", es: "Por la mañana veo a Iván en la calle. (acusativo: Ивана)" },
        ],
      },
      {
        segments: [
          { ru: "У Ивана есть новая машина.", es: "Iván tiene un auto nuevo. (genitivo: у Ивана)" },
        ],
      },
      {
        segments: [
          { ru: "Я звоню Ивану вечером.", es: "Llamo a Iván por la noche. (dativo: Ивану)" },
        ],
      },
      {
        segments: [
          { ru: "Мы едем в центр города с Иваном.", es: "Vamos al centro de la ciudad con Iván. (instrumental: с Иваном)" },
        ],
      },
      {
        segments: [
          { ru: "Иван — мой лучший друг, и я часто думаю о нём.", es: "Iván es mi mejor amigo, y pienso en él seguido. (preposicional: о нём)" },
        ],
      },
    ],
  },
  fillBlank: {
    title: "Identificá el caso",
    instructions: "Completá cada frase con la forma correcta de «Иван» / «друг» según el caso que pide la preposición o la función de la palabra.",
    wordBank: [
      { ru: "Иван", transliteration: "ivan" },
      { ru: "Ивана", transliteration: "ivana" },
      { ru: "Ивану", transliteration: "ivanu" },
      { ru: "Иваном", transliteration: "ivanom" },
      { ru: "Иване", transliteration: "ivane" },
      { ru: "друга", transliteration: "druga" },
      { ru: "другу", transliteration: "drugu" },
      { ru: "друге", transliteration: "druge" },
    ],
    sentences: [
      { before: "Это мой друг ", answer: "Иван", after: ".", es: "Este es mi amigo Iván. (nominativo)" },
      { before: "Я вижу ", answer: "Ивана", after: " каждый день.", es: "Veo a Iván todos los días. (acusativo)" },
      { before: "У ", answer: "Ивана", after: " есть собака.", es: "Iván tiene un perro. (genitivo)" },
      { before: "Я звоню ", answer: "Ивану", after: ".", es: "Llamo a Iván. (dativo)" },
      { before: "Мы идём в кино с ", answer: "Иваном", after: ".", es: "Vamos al cine con Iván. (instrumental)" },
      { before: "Я думаю об ", answer: "Иване", after: ".", es: "Pienso en Iván. (preposicional)" },
      { before: "Я дарю книгу ", answer: "другу", after: ".", es: "Le regalo un libro a un amigo. (dativo)" },
      { before: "Мы говорим о ", answer: "друге", after: ".", es: "Hablamos sobre un amigo. (preposicional)" },
    ],
  },
};

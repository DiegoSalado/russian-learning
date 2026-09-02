export const lesson = {
  slug: "verb-government",
  level: "C1",
  module: "Módulo 1 — Régimen verbal",
  order: 2,
  title: "Régimen verbal: verbos con preposición fija",
  vocabulary: [
    { ru: "Гордиться", transliteration: "gordit'sya", es: "Enorgullecerse de (+ instrumental)" },
    { ru: "Увлекаться", transliteration: "uvlekat'sya", es: "Apasionarse por (+ instrumental)" },
    { ru: "Заботиться о", transliteration: "zabotit'sya o", es: "Cuidar de / preocuparse por (+ prepositivo)" },
    { ru: "Верить в", transliteration: "verit' v", es: "Creer en (+ acusativo)" },
    { ru: "Надеяться на", transliteration: "nadeyat'sya na", es: "Confiar en / esperar (+ acusativo)" },
    { ru: "Готовиться к", transliteration: "gotovit'sya k", es: "Prepararse para (+ dativo)" },
    { ru: "Жаловаться на", transliteration: "zhalovat'sya na", es: "Quejarse de (+ acusativo)" },
    { ru: "Обращать внимание на", transliteration: "obrashchat' vnimaniye na", es: "Prestar atención a (+ acusativo)" },
  ],
  grammarPoint: {
    title: "Régimen verbal: verbos con preposición fija",
    explanation:
      "Muchos verbos rusos exigen una preposición y un caso específicos para introducir su complemento — a esto se le llama 'régимен verbal'. No hay una regla general que lo prediga: cada combinación verbo + preposición + caso se aprende como una unidad fija, igual que un idiom.",
    tables: [
      {
        title: "Verbos con preposición fija",
        columns: ["Verbo", "Preposición + caso", "Ejemplo"],
        rows: [
          ["Гордиться", "— + instrumental (sin preposición)", "Я горжусь тобой."],
          ["Увлекаться", "— + instrumental (sin preposición)", "Он увлекается фотографией."],
          ["Заботиться", "о + prepositivo", "Она заботится о семье."],
          ["Верить", "в + acusativo", "Я верю в тебя."],
          ["Надеяться", "на + acusativo", "Мы надеемся на успех."],
          ["Готовиться", "к + dativo", "Он готовится к экзамену."],
        ],
        note: "Гордиться y увлекаться no llevan preposición, pero sí exigen instrumental — por eso están en esta misma familia: el régimen no siempre implica una preposición visible.",
      },
    ],
    examples: [
      { ru: "Я горжусь своим братом.", transliteration: "ya gorzhus' svoim bratom.", es: "Estoy orgulloso de mi hermano." },
      { ru: "Она увлекается музыкой.", transliteration: "ona uvlekayetsya muzykoy.", es: "Ella es aficionada a la música." },
      { ru: "Он заботится о родителях.", transliteration: "on zabotitsya o roditelyakh.", es: "Él cuida de sus padres." },
      { ru: "Мы верим в лучшее будущее.", transliteration: "my verim v luchsheye budushcheye.", es: "Creemos en un futuro mejor." },
    ],
  },
  conversation: {
    title: "🎯 О чём ты мечтаешь?",
    lines: [
      {
        speaker: "A",
        transliteration: "chem ty uvlekayesh'sya v poslednee vremya?",
        segments: [{ ru: "Чем ты увлекаешься в последнее время?", es: "¿Qué te apasiona últimamente?" }],
      },
      {
        speaker: "B",
        transliteration: "ya gotovlyus' k ekzamenu, no v svobodnoye vremya uvlekayus' fotografiyey.",
        segments: [{ ru: "Я готовлюсь к экзамену, но в свободное время увлекаюсь фотографией.", es: "Me estoy preparando para un examen, pero en mi tiempo libre me apasiona la fotografía." }],
      },
      {
        speaker: "A",
        transliteration: "ya goryazhus' toboy — ty vsegda gotov k trudnostyam.",
        segments: [{ ru: "Я горжусь тобой — ты всегда готов к трудностям.", es: "Estoy orgulloso de ti — siempre estás listo para las dificultades." }],
      },
      {
        speaker: "B",
        transliteration: "spasibo. ya nadeyus' na khoroshiy rezul'tat.",
        segments: [{ ru: "Спасибо. Я надеюсь на хороший результат.", es: "Gracias. Confío en un buen resultado." }],
      },
      {
        speaker: "A",
        transliteration: "ne zhaluysya na ustalost' — obrashchay vnimaniye na otdykh tozhe.",
        segments: [{ ru: "Не жалуйся на усталость — обращай внимание на отдых тоже.", es: "No te quejes del cansancio — préstale atención al descanso también." }],
      },
    ],
  },
  reading: {
    title: "Увлечения Марины",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Марина увлекается живописью с детства.", es: "Marina se apasiona por la pintura desde niña." },
          { ru: "Её родители всегда заботились о том, чтобы у неё было время рисовать.", es: "Sus padres siempre se preocuparon de que tuviera tiempo para dibujar." },
        ],
      },
      {
        segments: [
          { ru: "Сейчас она готовится к своей первой выставке.", es: "Ahora se está preparando para su primera exposición." },
          { ru: "Она немного нервничает и иногда жалуется на нехватку времени.", es: "Está un poco nerviosa y a veces se queja de la falta de tiempo." },
        ],
      },
      {
        segments: [
          { ru: "Но она верит в свой талант и надеется на успех.", es: "Pero cree en su talento y confía en el éxito." },
          { ru: "Друзья гордятся ею и обращают внимание на каждую новую картину.", es: "Sus amigos están orgullosos de ella y prestan atención a cada cuadro nuevo." },
        ],
      },
    ],
  },
};

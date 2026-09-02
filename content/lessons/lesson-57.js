export const lesson = {
  slug: "review-c1",
  level: "C1",
  module: "Módulo 5 — Proyecto de cierre C1",
  order: 10,
  title: "Repaso integrador de C1",
  vocabulary: [
    { ru: "Собеседование", transliteration: "sobesedovaniye", es: "Entrevista (de trabajo)" },
    { ru: "Волноваться", transliteration: "volnovat'sya", es: "Ponerse nervioso" },
    { ru: "Успокоиться", transliteration: "uspokoit'sya", es: "Calmarse" },
    { ru: "Достижение", transliteration: "dostizheniye", es: "Logro" },
  ],
  grammarPoint: {
    title: "Repaso integrador del nivel C1",
    explanation:
      "Repasamos los cinco pilares del nivel: el régimen verbal (verbo + preposición fija), los prefijos que cambian el significado del verbo, las oraciones condicionales con если/если бы, las partículas discursivas, y el registro académico con voz pasiva y construcciones impersonales.",
    tables: [
      {
        title: "Resumen de reglas del nivel C1",
        columns: ["Regla", "Ejemplo"],
        rows: [
          ["Régimen verbal", "Он гордится своей дочерью. (verbo + instrumental fijo)"],
          ["Prefijos verbales", "Она переписала письмо, а потом его подписала."],
          ["Condicional irreal", "Если бы я знал, я бы пришёл раньше."],
          ["Partículas discursivas", "Ты же обещал! А билеты-то у тебя есть?"],
          ["Registro académico", "Считается, что результаты были выявлены случайно."],
        ],
      },
    ],
    examples: [
      { ru: "Она горжится тем, что справилась с трудным собеседованием.", transliteration: "ona gordit'sya tem, chto spravilas' s trudnym sobesedovaniyem.", es: "Está orgullosa de haber superado una entrevista difícil." },
      { ru: "Если бы она не готовилась к нему всю неделю, она бы волновалась ещё больше.", transliteration: "yesli by ona ne gotovilas' k nemu vsyu nedelyu, ona by volnovalas' yeshcho bol'she.", es: "Si no se hubiera preparado toda la semana, se habría puesto aún más nerviosa." },
      { ru: "Она же говорила себе: главное — не делать из мухи слона.", transliteration: "ona zhe govorila sebe: glavnoye — ne delat' iz mukhi slona.", es: "Se decía a sí misma: lo principal es no exagerar." },
      { ru: "Считается, что первое впечатление решает многое.", transliteration: "schitayetsya, chto pervoye vpechatleniye reshayet mnogoye.", es: "Se considera que la primera impresión decide mucho." },
    ],
  },
  conversation: {
    title: "💼 После собеседования",
    lines: [
      {
        speaker: "A",
        transliteration: "nu, kak proshlo tvoyo sobesedovaniye?",
        segments: [{ ru: "Ну, как прошло твоё собеседование?", es: "Bueno, ¿cómo te fue en la entrevista?" }],
      },
      {
        speaker: "B",
        transliteration: "snachala ya sil'no volnovalsya, no potom sumel uspokoit'sya.",
        segments: [{ ru: "Сначала я сильно волновался, но потом сумел успокоиться.", es: "Al principio estaba muy nervioso, pero después logré calmarme." }],
      },
      {
        speaker: "A",
        transliteration: "ya zhe govoril, chto ty spravish'sya! ty gotovilsya k nemu tselyy mesyats.",
        segments: [{ ru: "Я же говорил, что ты справишься! Ты готовился к нему целый месяц.", es: "¡Si te dije que lo lograrías! Te preparaste todo un mes." }],
      },
      {
        speaker: "B",
        transliteration: "esli by ya ne gotovilsya, ya by, navernoye, provalilsya.",
        segments: [{ ru: "Если бы я не готовился, я бы, наверное, провалился.", es: "Si no me hubiera preparado, probablemente habría fracasado." }],
      },
      {
        speaker: "A",
        transliteration: "a rabotu-to tebe uzhe predlozhili?",
        segments: [{ ru: "А работу-то тебе уже предложили?", es: "Y el trabajo, ¿ya te lo ofrecieron?" }],
      },
      {
        speaker: "B",
        transliteration: "poka net, no ya veryu v khoroshiy rezul'tat. eto bylo nastoyashcheye dostizheniye.",
        segments: [{ ru: "Пока нет, но я верю в хороший результат.", es: "Todavía no, pero confío en un buen resultado." }, { ru: "Это было настоящее достижение.", es: "Fue un verdadero logro." }],
      },
    ],
  },
  reading: {
    title: "Собеседование Марии",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Мария готовилась к собеседованию целую неделю.", es: "María se preparó para la entrevista durante toda una semana." },
          { ru: "Она переписала своё резюме три раза и записала ответы на возможные вопросы.", es: "Reescribió su currículum tres veces y anotó respuestas a posibles preguntas." },
        ],
      },
      {
        segments: [
          { ru: "В день собеседования она сильно волновалась, но подруга сказала: «Ты же всегда чувствуешь себя как рыба в воде на таких встречах!»", es: "El día de la entrevista estaba muy nerviosa, pero su amiga le dijo: «¡Si siempre te sentís cómoda en este tipo de reuniones!»" },
        ],
      },
      {
        segments: [
          { ru: "Мария вздохнула, улыбнулась и сумела успокоиться.", es: "María suspiró, sonrió y logró calmarse." },
          { ru: "Если бы она не верила в себя, она бы, наверное, не рискнула прийти.", es: "Si no hubiera creído en sí misma, probablemente no se habría arriesgado a venir." },
        ],
      },
      {
        segments: [
          { ru: "На собеседовании она рассказала о своих достижениях и ни разу не растерялась.", es: "En la entrevista habló de sus logros y no se desconcertó ni una vez." },
          { ru: "Она заботилась о том, чтобы отвечать честно, а не просто вешать интервьюеру лапшу на уши.", es: "Se preocupaba por responder con honestidad, y no simplemente mentirle descaradamente al entrevistador." },
        ],
      },
      {
        segments: [
          { ru: "Выходя из офиса, она подумала: что бы ни случилось, это было настоящее достижение — она справилась со своим страхом.", es: "Al salir de la oficina, pensó: pase lo que pase, esto fue un verdadero logro — superó su miedo." },
        ],
      },
    ],
  },
};

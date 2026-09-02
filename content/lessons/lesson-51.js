export const lesson = {
  slug: "conditional-sentences",
  level: "C1",
  module: "Módulo 2 — Oraciones condicionales",
  order: 4,
  title: "Oraciones condicionales: если / если бы",
  vocabulary: [
    { ru: "Если", transliteration: "yesli", es: "Si (condicional)" },
    { ru: "Бы", transliteration: "by", es: "Partícula del condicional/subjuntivo" },
    { ru: "Случай", transliteration: "sluchay", es: "Caso / ocasión" },
    { ru: "Условие", transliteration: "usloviye", es: "Condición" },
    { ru: "Воображаемый", transliteration: "voobrazhayemyy", es: "Imaginario" },
    { ru: "Сбыться", transliteration: "sbyt'sya", es: "Cumplirse (un sueño/deseo)" },
  ],
  grammarPoint: {
    title: "Oraciones condicionales: если / если бы + бы",
    explanation:
      "El ruso distingue condicionales reales (если + presente o futuro, sin бы) de condicionales irreales o hipotéticos (если бы + pasado, con бы también en la cláusula principal). La partícula бы no tiene traducción propia: marca que la acción es hipotética, no un hecho real.",
    tables: [
      {
        title: "Condicional real vs. irreal",
        columns: ["Tipo", "Formación", "Ejemplo"],
        rows: [
          ["Real (posible)", "Если + presente/futuro", "Если будет время, я приду."],
          ["Irreal (hipotético)", "Если бы + pasado, ... бы + pasado", "Если бы у меня было время, я бы пришёл."],
        ],
        note: "En el condicional irreal, бы aparece dos veces: una en la cláusula con «если бы» y otra en la cláusula principal. El verbo siempre va en pasado, sin importar si se refiere al presente, pasado o futuro.",
      },
    ],
    examples: [
      { ru: "Если пойдёт дождь, мы останемся дома.", transliteration: "yesli poydyot dozhd', my ostanemsya doma.", es: "Si llueve, nos quedaremos en casa." },
      { ru: "Если бы я знал об этом раньше, я бы помог.", transliteration: "yesli by ya znal ob etom ran'she, ya by pomog.", es: "Si lo hubiera sabido antes, habría ayudado." },
      { ru: "Что бы ты сделал, если бы выиграл миллион?", transliteration: "chto by ty sdelal, yesli by vyigral million?", es: "¿Qué harías si ganaras un millón?" },
      { ru: "Я бы хотел, чтобы это было правдой.", transliteration: "ya by khotel, chtoby eto bylo pravdoy.", es: "Me gustaría que esto fuera verdad." },
    ],
  },
  conversation: {
    title: "🌠 Что если...?",
    lines: [
      {
        speaker: "A",
        transliteration: "chto by ty sdelala, yesli by mogla zhit' v lyubom gorode mira?",
        segments: [{ ru: "Что бы ты сделала, если бы могла жить в любом городе мира?", es: "¿Qué harías si pudieras vivir en cualquier ciudad del mundo?" }],
      },
      {
        speaker: "B",
        transliteration: "ya by pereyekhala v Peterburg. a yesli by u tebya byl takoy sluchay?",
        segments: [{ ru: "Я бы переехала в Петербург.", es: "Me mudaría a San Petersburgo." }, { ru: "А если бы у тебя был такой случай?", es: "¿Y si tuvieras esa oportunidad?" }],
      },
      {
        speaker: "A",
        transliteration: "eto moya voobrazhayemaya mechta — ya by khotel, chtoby ona sbylas'.",
        segments: [{ ru: "Это моя воображаемая мечта — я бы хотел, чтобы она сбылась.", es: "Ese es mi sueño imaginario — me gustaría que se cumpliera." }],
      },
      {
        speaker: "B",
        transliteration: "yesli sozdash' khoroshiye usloviya, mechty deystvitel'no sbyvayutsya.",
        segments: [{ ru: "Если создашь хорошие условия, мечты действительно сбываются.", es: "Si creás buenas condiciones, los sueños realmente se cumplen." }],
      },
    ],
  },
  reading: {
    title: "Если бы всё было иначе",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Иногда Ольга представляет себе воображаемую жизнь.", es: "A veces Olga se imagina una vida imaginaria." },
          { ru: "Если бы она не выбрала эту профессию, она бы стала художницей.", es: "Si no hubiera elegido esta profesión, se habría convertido en pintora." },
        ],
      },
      {
        segments: [
          { ru: "Но она знает: если бы каждый случай в жизни был другим, она была бы другим человеком.", es: "Pero sabe que si cada ocasión en su vida hubiera sido distinta, sería una persona diferente." },
          { ru: "Она не жалеет о своём выборе.", es: "No se arrepiente de su elección." },
        ],
      },
      {
        segments: [
          { ru: "Если появится новая возможность, она обязательно попробует что-то новое.", es: "Si aparece una nueva oportunidad, seguramente probará algo nuevo." },
          { ru: "А пока она верит, что при нужных условиях любая мечта может сбыться.", es: "Y por ahora cree que, dadas las condiciones adecuadas, cualquier sueño puede cumplirse." },
        ],
      },
    ],
  },
};

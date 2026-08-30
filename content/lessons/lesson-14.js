export const lesson = {
  slug: "descriptions-comparisons",
  level: "A2",
  module: "Módulo 4 — Descripciones y comparaciones",
  order: 4,
  title: "Descripciones y comparaciones",
  vocabulary: [
    { ru: "Холодный / тёплый", transliteration: "kholodnyy / tyoplyy", es: "Frío / cálido" },
    { ru: "Здоровый / больной", transliteration: "zdorovyy / bol'noy", es: "Sano / enfermo" },
    { ru: "Добрый", transliteration: "dobryy", es: "Bondadoso" },
    { ru: "Умный", transliteration: "umnyy", es: "Inteligente" },
    { ru: "Весёлый", transliteration: "vesyolyy", es: "Alegre" },
    { ru: "Бабушка", transliteration: "babushka", es: "Abuela" },
    { ru: "Дедушка", transliteration: "dedushka", es: "Abuelo" },
    { ru: "Тётя", transliteration: "tyotya", es: "Tía" },
    { ru: "Дядя", transliteration: "dyadya", es: "Tío" },
    { ru: "Двоюродный брат", transliteration: "dvoyurodnyy brat", es: "Primo" },
  ],
  grammarPoint: {
    title: "Comparativos y superlativos de adjetivos",
    explanation:
      "El comparativo simple se forma añadiendo -ее (o -ей) al adjetivo: умный → умнее (más inteligente). Algunos adjetivos comunes son irregulares: хороший → лучше (mejor), плохой → хуже (peor). El superlativo se forma con самый + adjetivo: самый умный (el más inteligente).",
    tables: [
      {
        title: "Comparativos regulares e irregulares",
        columns: ["Adjetivo", "Comparativo", "Tipo"],
        rows: [
          ["Умный (inteligente)", "умнее", "Regular (-ее)"],
          ["Весёлый (alegre)", "веселее", "Regular (-ее)"],
          ["Холодный (frío)", "холоднее", "Regular (-ее)"],
          ["Хороший (bueno)", "лучше", "Irregular"],
          ["Плохой (malo)", "хуже", "Irregular"],
        ],
      },
    ],
    examples: [
      { ru: "Зимой холоднее, чем осенью.", transliteration: "zimoy kholodneye, chem osen'yu.", es: "En invierno hace más frío que en otoño." },
      { ru: "Моя бабушка добрее всех.", transliteration: "moya babushka dobreye vsekh.", es: "Mi abuela es la más bondadosa de todos." },
      { ru: "Он лучше меня играет в шахматы.", transliteration: "on luchshe menya igrayet v shakhmaty.", es: "Él juega mejor que yo al ajedrez." },
      { ru: "Это самый весёлый праздник.", transliteration: "eto samyy vesyolyy prazdnik.", es: "Esta es la fiesta más alegre." },
    ],
  },
  conversation: {
    title: "👨‍👩‍👧 Hablando de la familia",
    lines: [
      {
        speaker: "A",
        transliteration: "rasskazhi o svoyey sem'ye.",
        segments: [{ ru: "Расскажи о своей семье.", es: "Cuéntame sobre tu familia." }],
      },
      {
        speaker: "B",
        transliteration: "u menya bol'shaya sem'ya. moya babushka dobreye vsekh, a dedushka samyy umnyy.",
        segments: [
          { ru: "У меня большая семья.", es: "Tengo una familia grande." },
          { ru: "Моя бабушка добрее всех, а дедушка самый умный.", es: "Mi abuela es la más bondadosa de todos, y mi abuelo es el más inteligente." },
        ],
      },
      {
        speaker: "A",
        transliteration: "a tvoy dyadya takoy zhe vesyolyy, kak babushka?",
        segments: [{ ru: "А твой дядя такой же весёлый, как бабушка?", es: "¿Y tu tío es tan alegre como tu abuela?" }],
      },
      {
        speaker: "B",
        transliteration: "nyet, dyadya tishe, no tyotya veseleye yego.",
        segments: [{ ru: "Нет, дядя тише, но тётя веселее его.", es: "No, mi tío es más callado, pero mi tía es más alegre que él." }],
      },
      {
        speaker: "A",
        transliteration: "pokhozhe, u tebya interesnaya sem'ya!",
        segments: [{ ru: "Похоже, у тебя интересная семья!", es: "¡Parece que tienes una familia interesante!" }],
      },
    ],
  },
  reading: {
    title: "Mi abuela Nina",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Моя бабушка Нина — самый добрый человек, которого я знаю.", es: "Mi abuela Nina es la persona más bondadosa que conozco." },
          { ru: "Ей уже восемьдесят лет, но она моложе душой, чем многие молодые люди.", es: "Ya tiene ochenta años, pero es más joven de espíritu que muchos jóvenes." },
        ],
      },
      {
        segments: [
          { ru: "Бабушка живёт в маленькой деревне, где воздух чище, чем в городе, а жизнь спокойнее.", es: "Mi abuela vive en un pueblo pequeño, donde el aire es más limpio que en la ciudad, y la vida es más tranquila." },
          { ru: "Зимой там холоднее, чем у нас, но бабушка не боится холода.", es: "En invierno allí hace más frío que donde nosotros vivimos, pero mi abuela no le teme al frío." },
          { ru: "Она говорит, что деревенская жизнь лучше городской, потому что там люди добрее и внимательнее друг к другу.", es: "Dice que la vida de pueblo es mejor que la de ciudad, porque allí la gente es más bondadosa y atenta entre sí." },
        ],
      },
      {
        segments: [
          { ru: "У бабушки есть сестра, тётя Оля.", es: "Mi abuela tiene una hermana, la tía Olia." },
          { ru: "Тётя Оля старше бабушки на два года, но выглядит моложе.", es: "La tía Olia es dos años mayor que mi abuela, pero se ve más joven." },
          { ru: "Обе сестры очень умные и весёлые, но бабушка, кажется, ещё энергичнее тёти.", es: "Ambas hermanas son muy inteligentes y alegres, pero mi abuela parece incluso más enérgica que mi tía." },
        ],
      },
      {
        segments: [
          { ru: "Каждое лето вся семья — дедушка, тётя, дядя и двоюродные братья — собирается у бабушки в деревне.", es: "Cada verano toda la familia —el abuelo, la tía, el tío y los primos— se reúne en el pueblo de la abuela." },
          { ru: "Это самое счастливое время года для всех нас.", es: "Esta es la época más feliz del año para todos nosotros." },
          { ru: "Дети говорят, что в деревне интереснее, чем дома, потому что там больше свободы и приключений.", es: "Los niños dicen que en el pueblo es más interesante que en casa, porque allí hay más libertad y aventuras." },
        ],
      },
      {
        segments: [
          { ru: "Я люблю свою бабушку больше всех и мечтаю быть такой же доброй, как она.", es: "Quiero a mi abuela más que a nadie y sueño con ser tan bondadosa como ella." },
        ],
      },
    ],
  },
};

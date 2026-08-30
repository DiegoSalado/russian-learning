export const lesson = {
  slug: "verbal-aspect",
  level: "B1",
  module: "Módulo 1 — Aspecto verbal",
  order: 1,
  title: "Aspecto verbal: imperfectivo y perfectivo",
  vocabulary: [
    { ru: "делать", transliteration: "delat'", es: "hacer (imperfectivo, proceso)" },
    { ru: "сделать", transliteration: "sdelat'", es: "hacer (perfectivo, completado)" },
    { ru: "читать", transliteration: "chitat'", es: "leer (imperfectivo)" },
    { ru: "прочитать", transliteration: "prochitat'", es: "leer (perfectivo)" },
    { ru: "писать", transliteration: "pisat'", es: "escribir (imperfectivo)" },
    { ru: "написать", transliteration: "napisat'", es: "escribir (perfectivo)" },
    { ru: "говорить", transliteration: "govorit'", es: "hablar / decir (imperfectivo)" },
    { ru: "сказать", transliteration: "skazat'", es: "decir (perfectivo)" },
    { ru: "покупать", transliteration: "pokupat'", es: "comprar (imperfectivo)" },
    { ru: "купить", transliteration: "kupit'", es: "comprar (perfectivo)" },
  ],
  grammarPoint: {
    title: "Aspecto imperfectivo vs. perfectivo",
    explanation:
      "Casi todos los verbos rusos existen en dos versiones: imperfectiva (describe un proceso, una acción repetida o su duración, sin importar si terminó) y perfectiva (señala que la acción se completó, ocurrió una sola vez o produjo un resultado). No son tiempos distintos, sino dos formas del mismo verbo, y ambas pueden usarse en pasado y futuro.",
    tables: [
      {
        title: "Pares aspectuales en pasado",
        columns: ["Imperfectivo", "Perfectivo", "Matiz"],
        rows: [
          ["Я читал книгу.", "Я прочитал книгу.", "Estaba leyendo (proceso) / terminé de leer (resultado)"],
          ["Я писал письмо.", "Я написал письмо.", "Estaba escribiendo la carta / la terminé de escribir"],
          ["Он делал домашнее задание.", "Он сделал домашнее задание.", "Estaba haciendo la tarea / la terminó"],
          ["Мы говорили об этом.", "Мы сказали об этом.", "Hablábamos del tema / lo dijimos (una vez, con resultado)"],
          ["Она покупала цветы.", "Она купила цветы.", "Compraba flores (habitualmente) / compró flores (una vez)"],
        ],
        note: "El imperfectivo responde a 'qué estabas haciendo'; el perfectivo responde a 'qué lograste hacer'.",
      },
    ],
    examples: [
      { ru: "Вчера я весь день читал книгу.", transliteration: "vchera ya ves' den' chital knigu.", es: "Ayer estuve leyendo el libro todo el día." },
      { ru: "Наконец я прочитал книгу.", transliteration: "nakonets ya prochital knigu.", es: "Por fin terminé de leer el libro." },
      { ru: "Она часто покупала цветы.", transliteration: "ona chasto pokupala tsvety.", es: "Ella compraba flores a menudo." },
      { ru: "Она купила цветы для мамы.", transliteration: "ona kupila tsvety dlya mamy.", es: "Ella compró flores para su mamá." },
    ],
  },
  conversation: {
    title: "📚 Разговор о выходных",
    lines: [
      {
        speaker: "A",
        transliteration: "chto ty delal v subbotu?",
        segments: [{ ru: "Что ты делал в субботу?", es: "¿Qué hiciste (estuviste haciendo) el sábado?" }],
      },
      {
        speaker: "B",
        transliteration: "ya chital knigu ves' den'. a potom ya napisal pis'mo drugu.",
        segments: [
          { ru: "Я читал книгу весь день.", es: "Estuve leyendo un libro todo el día." },
          { ru: "А потом я написал письмо другу.", es: "Y después le escribí una carta a un amigo." },
        ],
      },
      {
        speaker: "A",
        transliteration: "ty uzhe prochital knigu?",
        segments: [{ ru: "Ты уже прочитал книгу?", es: "¿Ya terminaste de leer el libro?" }],
      },
      {
        speaker: "B",
        transliteration: "da, ya prochital yeyo vchera vecherom. bylo interesno.",
        segments: [
          { ru: "Да, я прочитал её вчера вечером.", es: "Sí, terminé de leerlo ayer por la noche." },
          { ru: "Было интересно.", es: "Fue interesante." },
        ],
      },
      {
        speaker: "A",
        transliteration: "a chto ty kupil v magazine?",
        segments: [{ ru: "А что ты купил в магазине?", es: "¿Y qué compraste en la tienda?" }],
      },
      {
        speaker: "B",
        transliteration: "ya kupil khleb i moloko. yeshcho ya khotel kupit' frukty, no magazin uzhe zakrylsya.",
        segments: [
          { ru: "Я купил хлеб и молоко.", es: "Compré pan y leche." },
          { ru: "Ещё я хотел купить фрукты, но магазин уже закрылся.", es: "También quería comprar fruta, pero la tienda ya había cerrado." },
        ],
      },
    ],
  },
  reading: {
    title: "Обычный день Максима",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "В субботу утром Максим долго спал, а потом делал зарядку около получаса.", es: "El sábado por la mañana Máxim durmió hasta tarde, y luego hizo ejercicio durante media hora." },
          { ru: "Обычно он делает зарядку быстро, но в этот раз решил не спешить.", es: "Normalmente hace el ejercicio rápido, pero esta vez decidió no apurarse." },
          { ru: "Когда он сделал зарядку, он приготовил себе завтрак.", es: "Cuando terminó de hacer ejercicio, se preparó el desayuno." },
          { ru: "Пока он готовил яичницу, он думал о планах на день.", es: "Mientras preparaba huevos fritos, pensaba en los planes del día." },
        ],
      },
      {
        segments: [
          { ru: "После завтрака Максим сел за стол и весь час читал новую книгу о путешествиях.", es: "Después del desayuno, Máxim se sentó a la mesa y estuvo una hora leyendo un libro nuevo sobre viajes." },
          { ru: "Он не прочитал книгу до конца, потому что зазвонил телефон.", es: "No terminó de leer el libro, porque sonó el teléfono." },
          { ru: "Звонила его сестра Оля, и они долго говорили о планах на лето.", es: "Llamaba su hermana Olia, y hablaron largo rato sobre los planes de verano." },
        ],
      },
      {
        segments: [
          { ru: "Оля сказала, что хочет поехать на море, и спросила, поедет ли Максим с ней.", es: "Olia dijo que quería ir al mar, y le preguntó si Máxim iría con ella." },
          { ru: "Максим ответил, что подумает, и пообещал написать ей письмо на следующей неделе.", es: "Máxim respondió que lo pensaría, y prometió escribirle una carta la semana siguiente." },
          { ru: "Пока они говорили, Максим вспомнил, что уже делал похожую поездку два года назад.", es: "Mientras hablaban, Máxim recordó que ya había hecho un viaje parecido dos años atrás." },
          { ru: "Тогда он тоже долго думал, но в итоге сказал сестре «да» в последний момент.", es: "En aquella ocasión también lo pensó mucho, pero al final le dijo «sí» a su hermana en el último momento." },
        ],
      },
      {
        segments: [
          { ru: "Днём Максим пошёл в магазин, потому что дома не было еды.", es: "Por la tarde Máxim fue a la tienda, porque no había comida en casa." },
          { ru: "Он покупал продукты почти каждую субботу, но в этот раз список был длиннее обычного.", es: "Compraba víveres casi todos los sábados, pero esta vez la lista era más larga que de costumbre." },
          { ru: "В магазине он встретил соседа, который тоже делал покупки на выходные.", es: "En la tienda se encontró con un vecino que también estaba haciendo compras para el fin de semana." },
          { ru: "Они немного поговорили, а потом Максим быстро сделал все покупки и пошёл домой.", es: "Charlaron un poco, y después Máxim hizo rápidamente todas las compras y volvió a casa." },
          { ru: "В итоге он купил овощи, мясо и немного фруктов.", es: "Al final compró verduras, carne y algo de fruta." },
        ],
      },
      {
        segments: [
          { ru: "Вечером, когда Максим сделал все дела, он снова взял книгу и наконец прочитал её до конца.", es: "Por la noche, cuando Máxim terminó todos los quehaceres, tomó de nuevo el libro y por fin terminó de leerlo." },
          { ru: "Пока он читал последние страницы, он уже писал в голове письмо для Оли.", es: "Mientras leía las últimas páginas, ya iba escribiendo en su cabeza la carta para Olia." },
          { ru: "Закончив книгу, он сразу сел за стол и написал сестре короткое сообщение: он решил поехать на море.", es: "Al terminar el libro, se sentó enseguida a la mesa y le escribió a su hermana un mensaje corto: había decidido ir al mar." },
          { ru: "Он остался очень доволен этим спокойным днём.", es: "Quedó muy satisfecho con ese día tranquilo." },
        ],
      },
    ],
  },
};

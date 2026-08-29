export const lesson = {
  slug: "verbos-movimiento",
  level: "B1",
  module: "Módulo 3 — Verbos de movimiento",
  order: 3,
  title: "Verbos de movimiento y prefijos",
  vocabulary: [
    { ru: "идти", transliteration: "idti", es: "ir a pie (una vez, una dirección)" },
    { ru: "ходить", transliteration: "khodit'", es: "ir a pie (habitual, ida y vuelta)" },
    { ru: "ехать", transliteration: "yekhat'", es: "ir en vehículo (una vez, una dirección)" },
    { ru: "ездить", transliteration: "yezdit'", es: "ir en vehículo (habitual, ida y vuelta)" },
    { ru: "лететь", transliteration: "letet'", es: "volar (una vez, una dirección)" },
    { ru: "летать", transliteration: "letat'", es: "volar (habitual, ida y vuelta)" },
    { ru: "приехать", transliteration: "priyekhat'", es: "llegar (en vehículo)" },
    { ru: "уехать", transliteration: "uyekhat'", es: "irse, partir (en vehículo)" },
    { ru: "выехать", transliteration: "vyyekhat'", es: "salir (en vehículo)" },
    { ru: "вокзал", transliteration: "vokzal", es: "estación de tren" },
  ],
  grammarPoint: {
    title: "Verbos de movimiento: unidireccionales, multidireccionales y prefijos",
    explanation:
      "El ruso distingue verbos de movimiento unidireccionales (una acción concreta, en una dirección: идти, ехать, лететь) de los multidireccionales (movimiento habitual, repetido o de ida y vuelta: ходить, ездить, летать). Además, los prefijos cambian el sentido del movimiento: при- indica llegada, у- indica partida, y вы- indica salida de un lugar cerrado.",
    tables: [
      {
        title: "Unidireccional vs. multidireccional",
        columns: ["Unidireccional (una vez)", "Multidireccional (habitual)", "Significado"],
        rows: [
          ["идти", "ходить", "ir a pie"],
          ["ехать", "ездить", "ir en vehículo"],
          ["лететь", "летать", "volar"],
        ],
        note: "«Я иду в школу» describe un trayecto concreto ahora mismo; «я хожу в школу» describe un hábito, sin importar la dirección.",
      },
      {
        title: "Prefijos de dirección con verbos de movimiento",
        columns: ["Prefijo", "Verbo", "Significado"],
        rows: [
          ["при-", "приехать", "llegar (en vehículo)"],
          ["у-", "уехать", "irse, partir"],
          ["вы-", "выехать", "salir (de un lugar, en vehículo)"],
        ],
        note: "Los mismos prefijos funcionan también con идти → прийти, уйти, выйти (a pie).",
      },
    ],
    examples: [
      { ru: "Я иду в магазин.", transliteration: "ya idu v magazin.", es: "Voy a la tienda (ahora, a pie)." },
      { ru: "Я часто хожу в парк.", transliteration: "ya chasto khozhu v park.", es: "Voy seguido al parque (a pie)." },
      { ru: "Поезд приехал вовремя.", transliteration: "poyezd priyekhal vovremya.", es: "El tren llegó a tiempo." },
      { ru: "Мы уехали рано утром.", transliteration: "my uyekhali rano utrom.", es: "Nos fuimos temprano por la mañana." },
    ],
  },
  conversation: {
    title: "🚆 Поездка на вокзал",
    lines: [
      {
        speaker: "A",
        transliteration: "kuda ty seychas idyosh'?",
        segments: [{ ru: "Куда ты сейчас идёшь?", es: "¿Adónde vas ahora (a pie)?" }],
      },
      {
        speaker: "B",
        transliteration: "ya idu na vokzal. zavtra ya yedu k roditelyam v drugoy gorod.",
        segments: [
          { ru: "Я иду на вокзал.", es: "Voy a la estación de tren." },
          { ru: "Завтра я еду к родителям в другой город.", es: "Mañana viajo a ver a mis padres a otra ciudad." },
        ],
      },
      {
        speaker: "A",
        transliteration: "ty chasto yezdish' k nim?",
        segments: [{ ru: "Ты часто ездишь к ним?", es: "¿Vas seguido a verlos?" }],
      },
      {
        speaker: "B",
        transliteration: "da, ya yezzhu k nim kazhdyy mesyats. a v proshlom godu ya dazhe letal k nim na samolyote.",
        segments: [
          { ru: "Да, я езжу к ним каждый месяц.", es: "Sí, voy a verlos cada mes." },
          { ru: "А в прошлом году я даже летал к ним на самолёте.", es: "Y el año pasado incluso volé a verlos en avión." },
        ],
      },
      {
        speaker: "A",
        transliteration: "kogda ty priyedesh' obratno?",
        segments: [{ ru: "Когда ты приедешь обратно?", es: "¿Cuándo vas a volver?" }],
      },
      {
        speaker: "B",
        transliteration: "ya uyedu v subbotu i priyedu domoy v voskresen'ye vecherom.",
        segments: [{ ru: "Я уеду в субботу и приеду домой в воскресенье вечером.", es: "Me iré el sábado y llegaré a casa el domingo por la noche." }],
      },
    ],
  },
  reading: {
    title: "Поездка Игоря в Новгород",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Игорь любит путешествовать и часто ездит в разные города России.", es: "Ígor ama viajar y viaja seguido a distintas ciudades de Rusia." },
          { ru: "В эту субботу он решил поехать в Новгород, где живёт его старый друг Павел.", es: "Este sábado decidió ir a Nóvgorod, donde vive su viejo amigo Pável." },
          { ru: "Игорь не был в этом городе уже два года, и ему хотелось снова увидеть старые улицы.", es: "Ígor no había estado en esa ciudad hacía ya dos años, y tenía ganas de volver a ver las calles antiguas." },
        ],
      },
      {
        segments: [
          { ru: "Утром Игорь вышел из дома и пошёл на вокзал пешком, потому что вокзал находится недалеко.", es: "Por la mañana, Ígor salió de casa y fue a pie hasta la estación, porque queda cerca." },
          { ru: "По дороге он зашёл в кафе и купил кофе, чтобы не хотеть спать в поезде.", es: "En el camino entró a un café y compró un café, para no tener sueño en el tren." },
          { ru: "На вокзале он купил билет и сел на поезд, который выехал ровно в девять часов.", es: "En la estación compró un boleto y subió al tren, que salió exactamente a las nueve." },
        ],
      },
      {
        segments: [
          { ru: "Игорь любит ездить на поезде больше, чем летать на самолёте, потому что из окна видно поля и леса.", es: "A Ígor le gusta más viajar en tren que volar en avión, porque desde la ventana se ven campos y bosques." },
          { ru: "Кроме того, в поезде можно спокойно читать книгу или разговаривать с попутчиками.", es: "Además, en el tren se puede leer un libro con calma o conversar con los compañeros de viaje." },
          { ru: "В этот раз рядом с ним сидела женщина, которая тоже ехала в Новгород навестить родителей.", es: "Esta vez, a su lado iba sentada una mujer que también viajaba a Nóvgorod a visitar a sus padres." },
          { ru: "Через три часа поезд наконец приехал в Новгород.", es: "Tres horas después, el tren finalmente llegó a Nóvgorod." },
        ],
      },
      {
        segments: [
          { ru: "Павел встретил друга на вокзале, и они вместе пошли гулять по старому городу.", es: "Pável recibió a su amigo en la estación, y juntos fueron a pasear por la ciudad vieja." },
          { ru: "Они долго ходили по улицам и говорили о жизни.", es: "Caminaron largo rato por las calles y hablaron de la vida." },
          { ru: "Потом они пообедали в маленьком ресторане у реки, а после обеда поехали на автобусе к старой крепости.", es: "Luego almorzaron en un pequeño restaurante junto al río, y después del almuerzo fueron en autobús hasta la vieja fortaleza." },
          { ru: "Павел рассказал, что каждое лето он ездит туда с детьми и что этот вид его до сих пор впечатляет.", es: "Pável contó que cada verano va allí con sus hijos y que esa vista todavía lo impresiona." },
        ],
      },
      {
        segments: [
          { ru: "Вечером Игорь понял, что нужно уезжать, потому что в понедельник у него работа.", es: "Por la noche, Ígor se dio cuenta de que tenía que irse, porque el lunes tenía trabajo." },
          { ru: "Павел проводил друга до вокзала, и они ещё немного поговорили, ожидая поезд.", es: "Pável acompañó a su amigo hasta la estación, y hablaron un poco más mientras esperaban el tren." },
          { ru: "Он попрощался с Павлом и уехал на последнем поезде.", es: "Se despidió de Pável y se fue en el último tren." },
          { ru: "В поезде он смотрел в окно и думал, что нужно ездить в гости к друзьям чаще.", es: "En el tren miraba por la ventana y pensaba que debía visitar a sus amigos con más frecuencia." },
          { ru: "Он пообещал, что скоро снова приедет в Новгород.", es: "Prometió que pronto volvería a Nóvgorod." },
        ],
      },
    ],
  },
};

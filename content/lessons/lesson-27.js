export const lesson = {
  slug: "register-nuances",
  level: "B2",
  module: "Módulo 5 — Registro y matices",
  order: 5,
  title: "Registro y matices del ruso",
  vocabulary: [
    { ru: "деньги", transliteration: "den'gi", es: "dinero (neutro)" },
    { ru: "бабки", transliteration: "babki", es: "plata, pasta (coloquial, dinero)" },
    { ru: "работать", transliteration: "rabotat'", es: "trabajar (neutro)" },
    { ru: "пахать", transliteration: "pakhat'", es: "currar, trabajar duro (coloquial)" },
    { ru: "устать", transliteration: "ustat'", es: "cansarse (neutro)" },
    { ru: "вымотаться", transliteration: "vymotat'sya", es: "quedar reventado (coloquial)" },
    { ru: "жутко", transliteration: "zhutko", es: "tremendamente (intensificador coloquial)" },
    { ru: "к сожалению", transliteration: "k sozhaleniyu", es: "lamentablemente (neutro/formal)" },
    { ru: "бить баклуши", transliteration: "bit' baklushi", es: "holgazanear, no hacer nada (idiomático)" },
    { ru: "смыться", transliteration: "smyt'sya", es: "irse rápido, escabullirse (coloquial)" },
  ],
  grammarPoint: {
    title: "Registro neutro, coloquial y literario",
    explanation:
      "Un mismo concepto se puede expresar con palabras muy distintas según el registro: neutro (apto para cualquier contexto), coloquial (propio de la conversación entre amigos, a veces con matiz humorístico) o literario (más elaborado, típico de textos escritos o formales). Elegir bien el registro es tan importante como elegir bien el vocabulario, porque una palabra coloquial en un texto formal puede sonar fuera de lugar.",
    tables: [
      {
        title: "Un mismo concepto en tres registros",
        columns: ["Neutro", "Coloquial", "Literario"],
        rows: [
          ["деньги", "бабки / бабло", "средства / состояние"],
          ["устать", "вымотаться / вырубиться", "изнемочь"],
          ["говорить много", "болтать", "разглагольствовать"],
          ["быстро уйти", "смыться", "удалиться поспешно"],
          ["хорошо", "классно / клёво", "прекрасно / великолепно"],
        ],
        note: "Las formas coloquiales son perfectamente naturales entre amigos, pero conviene evitarlas en un correo formal o un examen escrito.",
      },
    ],
    examples: [
      { ru: "Он весь день бил баклуши вместо того, чтобы работать.", transliteration: "on ves' den' bil baklushi vmesto togo, chtoby rabotat'.", es: "Estuvo todo el día holgazaneando en vez de trabajar." },
      { ru: "Я жутко устал после смены.", transliteration: "ya zhutko ustal posle smeny.", es: "Estoy tremendamente cansado después del turno." },
      { ru: "К сожалению, мы не успели закончить проект.", transliteration: "k sozhaleniyu, my ne uspeli zakonchit' proyekt.", es: "Lamentablemente, no llegamos a terminar el proyecto." },
      { ru: "Он пашет на двух работах, чтобы заработать бабки.", transliteration: "on pashet na dvukh rabotakh, chtoby zarabotat' babki.", es: "Él se mata trabajando en dos empleos para ganar plata." },
    ],
  },
  conversation: {
    title: "☕ Встреча старых друзей",
    lines: [
      {
        speaker: "A",
        transliteration: "nu ty daysh! skol'ko let, skol'ko zim! ty vygliadish' zhutko ustavshim.",
        segments: [{ ru: "Ну ты даёшь! Сколько лет, сколько зим!", es: "¡No lo puedo creer! ¡Cuánto tiempo sin vernos!" }, { ru: "Ты выглядишь жутко уставшим.", es: "Te ves tremendamente cansado." }],
      },
      {
        speaker: "B",
        transliteration: "da uzh, poslednyaya nedelya byla zhesti. ya pakhal kak proklyatyy, chtoby sobrat' bol'she babok na otpusk.",
        segments: [{ ru: "Да уж, последняя неделя была жести.", es: "Sí, la última semana fue una locura." }, { ru: "Я пахал как проклятый, чтобы собрать больше бабок на отпуск.", es: "Estuve currando como loco para juntar más plata para las vacaciones." }],
      },
      {
        speaker: "A",
        transliteration: "ponimayu. a moy nachal'nik voobshche bit baklushi lyubit, a rabotat' zastavlyayet nas.",
        segments: [{ ru: "Понимаю.", es: "Te entiendo." }, { ru: "А мой начальник вообще бить баклуши любит, а работать заставляет нас.", es: "Y mi jefe la verdad ama holgazanear, y nos obliga a trabajar a nosotros." }],
      },
      {
        speaker: "B",
        transliteration: "klassika! a pomnish', kak on smylsya s vecherinki, kogda nado bylo platit'?",
        segments: [{ ru: "Классика! А помнишь, как он смылся с вечеринки, когда надо было платить?", es: "¡Clásico! ¿Te acuerdas cómo se escabulló de la fiesta cuando había que pagar?" }],
      },
      {
        speaker: "A",
        transliteration: "kak zhe ne pomnit'! k sozhaleniyu, on takoy vsegda.",
        segments: [{ ru: "Как же не помнить! К сожалению, он такой всегда.", es: "¡Cómo no acordarme! Lamentablemente, siempre es así." }],
      },
      {
        speaker: "B",
        transliteration: "ladno, khvatit o rabote. davay luchshe vypyem kofe i poboltayem po-normal'nomu.",
        segments: [{ ru: "Ладно, хватит о работе.", es: "Bueno, basta de hablar del trabajo." }, { ru: "Давай лучше выпьем кофе и поболтаем по-нормальному.", es: "Mejor tomemos un café y charlemos tranquilos." }],
      },
    ],
  },
  reading: {
    title: "Два голоса одного вечера",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Вечером в небольшом кафе на углу улицы встретились два старых друга, Игорь и Настя, которые не виделись почти год.", es: "Por la noche, en un pequeño café en la esquina, se encontraron dos viejos amigos, Ígor y Nastia, que no se veían desde hacía casi un año." },
          { ru: "Атмосфера была тёплой, а разговор — лёгким и непринуждённым, полным шуток и коротких, почти обрывочных фраз.", es: "El ambiente era cálido, y la conversación, ligera y despreocupada, llena de bromas y frases cortas, casi entrecortadas." },
          { ru: "За соседними столиками тоже сидели компании друзей, и их смех то и дело заглушал музыку из колонок.", es: "En las mesas de al lado también había grupos de amigos, y sus risas a cada rato tapaban la música de los parlantes." },
        ],
      },
      {
        segments: [
          { ru: "«Слушай, я реально вымоталась на этой неделе», — призналась Настя, устало улыбаясь.", es: "«Oye, en serio quedé reventada esta semana», confesó Nastia, sonriendo con cansancio." },
          { ru: "«Понимаю. Я тоже пашу как проклятый, чтобы накопить бабок на новую квартиру», — ответил Игорь, помешивая кофе.", es: "«Te entiendo. Yo también curro como loco para juntar plata para un departamento nuevo», respondió Ígor, revolviendo su café." },
          { ru: "«А помнишь, как мы били баклуши всё лето после школы и совсем не думали о деньгах?» — со смехом добавила Настя.", es: "«¿Y te acuerdas de cómo holgazaneábamos todo el verano después de la escuela y ni pensábamos en el dinero?», añadió Nastia entre risas." },
        ],
      },
      {
        segments: [
          { ru: "Их разговор, наполненный неформальными выражениями и лёгкой иронией, резко контрастировал с воспоминаниями, которые Настя хранила о своей бабушке.", es: "Su conversación, llena de expresiones informales y ligera ironía, contrastaba notablemente con los recuerdos que Nastia guardaba de su abuela." },
          { ru: "Бабушка всегда говорила спокойно и размеренно, тщательно подбирая слова, будто произносила не разговор, а маленькую речь.", es: "La abuela siempre hablaba con calma y de forma pausada, eligiendo cuidadosamente las palabras, como si no sostuviera una conversación, sino un pequeño discurso." },
          { ru: "В её доме никто никогда не говорил «бабки» вместо «деньги» или «пахать» вместо «работать» — там царил совсем другой, более книжный стиль речи.", es: "En su casa nadie decía jamás «babki» en vez de «dinero», ni «pakhat'» en vez de «trabajar»: allí reinaba un estilo de habla muy distinto, más literario." },
        ],
      },
      {
        segments: [
          { ru: "«К сожалению, современная молодёжь совсем не умеет ценить тишину», — любила повторять бабушка, и Настя вспоминала эти слова каждый раз, когда друзья шумно смеялись за соседним столиком.", es: "«Lamentablemente, la juventud actual no sabe apreciar el silencio», solía repetir la abuela, y Nastia recordaba esas palabras cada vez que unos amigos se reían ruidosamente en la mesa de al lado." },
          { ru: "Но в этот вечер сама Настя с удовольствием болтала обо всём подряд, забыв о всякой серьёзности.", es: "Pero esa noche, la propia Nastia charlaba con gusto de todo un poco, olvidándose de toda seriedad." },
        ],
      },
      {
        segments: [
          { ru: "Когда пришло время платить по счёту, Игорь пошутил, что готов «смыться» через окно, как в старые студенческие годы.", es: "Cuando llegó el momento de pagar la cuenta, Ígor bromeó diciendo que estaba listo para «escabullirse» por la ventana, como en los viejos tiempos de estudiante." },
          { ru: "Настя, смеясь, ответила, что на этот раз заплатит она, и жутко удивила Игоря, который привык платить сам.", es: "Nastia, riendo, respondió que esta vez pagaría ella, y sorprendió tremendamente a Ígor, que estaba acostumbrado a pagar siempre él." },
          { ru: "Выходя из кафе, оба ещё долго болтали на улице, не желая расставаться после такого тёплого вечера.", es: "Al salir del café, ambos siguieron charlando largo rato en la calle, sin querer despedirse después de una noche tan cálida." },
          { ru: "Настя рассмеялась и подумала, что именно такие простые, живые разговоры делают дружбу по-настоящему ценной.", es: "Nastia se rió y pensó que precisamente esas conversaciones simples y vivas son las que hacen que la amistad sea verdaderamente valiosa." },
        ],
      },
    ],
  },
};

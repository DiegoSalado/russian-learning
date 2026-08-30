export const lesson = {
  slug: "greetings",
  level: "A1",
  module: "Práctica extra",
  order: 6,
  title: "Saludos",
  vocabulary: [
    { ru: "Привет", transliteration: "privyet", es: "Hola" },
    { ru: "Здравствуйте", transliteration: "zdrastvuyte", es: "Hola (formal)" },
    { ru: "Доброе утро", transliteration: "dobroye utro", es: "Buenos días" },
    { ru: "Добрый вечер", transliteration: "dobriy vecher", es: "Buenas tardes/noches" },
    { ru: "Как дела?", transliteration: "kak dela?", es: "¿Cómo estás?" },
    { ru: "Хорошо", transliteration: "khorosho", es: "Bien" },
    { ru: "Спасибо", transliteration: "spasibo", es: "Gracias" },
    { ru: "Пожалуйста", transliteration: "pozhaluysta", es: "Por favor / De nada" },
    { ru: "До свидания", transliteration: "do svidaniya", es: "Adiós" },
    { ru: "Пока", transliteration: "poka", es: "Chau (informal)" },
    { ru: "До встречи", transliteration: "do vstrechi", es: "Hasta pronto" },
    { ru: "Увидимся", transliteration: "uvidimsya", es: "Nos vemos" },
    { ru: "До завтра", transliteration: "do zavtra", es: "Hasta mañana" },
  ],
  grammarPoint: {
    title: "Formal vs. informal",
    explanation:
      "En ruso hay dos registros de saludo: uno formal (con desconocidos, mayores, contextos de trabajo) y uno informal (con amigos, familia, gente de tu edad). Elegir el registro correcto es una de las primeras cosas que se aprenden.",
    tables: [
      {
        title: "Registro formal vs. informal",
        columns: ["Situación", "Formal", "Informal"],
        rows: [
          ["Saludo", "Здравствуйте", "Привет"],
          ["¿Cómo estás?", "Как вы?", "Как ты?"],
          ["Despedida", "До свидания", "Пока"],
        ],
        note: "Usa вы (formal) con desconocidos, mayores o en el trabajo; ты (informal) con amigos y familia.",
      },
      {
        title: "Formas de despedida",
        columns: ["Ruso", "Transliteración", "Español"],
        rows: [
          ["До свидания", "do svidaniya", "Adiós"],
          ["До встречи", "do vstrechi", "Hasta pronto"],
          ["Увидимся", "uvidimsya", "Nos vemos"],
          ["Пока", "poka", "Chau (informal)"],
          ["До завтра", "do zavtra", "Hasta mañana"],
        ],
        note: "«Пока» es informal (entre amigos); las demás sirven tanto en registro formal como informal.",
      },
    ],
    examples: [
      { ru: "Привет!", transliteration: "privyet!", es: "Hola (informal, entre amigos)" },
      { ru: "Здравствуйте!", transliteration: "zdrastvuyte!", es: "Hola (formal, con desconocidos)" },
      { ru: "Как дела?", transliteration: "kak dela?", es: "¿Cómo estás? (informal)" },
      { ru: "Как вы?", transliteration: "kak vy?", es: "¿Cómo está usted? (formal)" },
    ],
  },
  conversation: {
    title: "☀️ Encuentro en la calle",
    lines: [
      {
        speaker: "A",
        transliteration: "privyet! kak dela?",
        segments: [
          { ru: "Привет!", es: "¡Hola!" },
          { ru: "Как дела?", es: "¿Cómo estás?" },
        ],
      },
      {
        speaker: "B",
        transliteration: "privyet! khorosho, spasibo. a ty?",
        segments: [
          { ru: "Привет!", es: "¡Hola!" },
          { ru: "Хорошо, спасибо.", es: "Bien, gracias." },
          { ru: "А ты?", es: "¿Y tú?" },
        ],
      },
      {
        speaker: "A",
        transliteration: "tozhe khorosho.",
        segments: [{ ru: "Тоже хорошо.", es: "También bien." }],
      },
      {
        speaker: "B",
        transliteration: "poka! do zavtra.",
        segments: [
          { ru: "Пока!", es: "¡Chau!" },
          { ru: "До завтра.", es: "Hasta mañana." },
        ],
      },
    ],
  },
  reading: {
    title: "Un día lleno de saludos",
    type: "historia",
    paragraphs: [
      {
        segments: [
          { ru: "Утром Анна говорит: «Доброе утро!» соседке.", es: "Por la mañana, Anna dice: «¡Buenos días!» a su vecina." },
          { ru: "Соседка отвечает: «Доброе утро! Как дела?»", es: "La vecina responde: «¡Buenos días! ¿Cómo está?»" },
          { ru: "Анна говорит: «Хорошо, спасибо, а как вы?»", es: "Anna dice: «Bien, gracias, ¿y usted?»" },
        ],
      },
      {
        segments: [
          { ru: "Вечером Анна встречает друга Ивана.", es: "Por la tarde, Anna se encuentra con su amigo Iván." },
          { ru: "Она говорит: «Привет, Иван!»", es: "Ella dice: «¡Hola, Iván!»" },
          { ru: "Иван отвечает: «Привет! Как дела?»", es: "Iván responde: «¡Hola! ¿Cómo estás?»" },
          { ru: "Анна говорит: «Отлично! А у тебя?»", es: "Anna dice: «¡Muy bien! ¿Y tú?»" },
          { ru: "Иван говорит: «Тоже хорошо.»", es: "Iván dice: «También bien.»" },
          { ru: "Потом они говорят: «Пока! До завтра!»", es: "Después dicen: «¡Chau! ¡Hasta mañana!»" },
        ],
      },
    ],
  },
  fillBlank: {
    title: "Practicá saludos y despedidas",
    instructions: "Completá cada frase con el saludo o la despedida correcta.",
    wordBank: [
      { ru: "Привет", transliteration: "privyet" },
      { ru: "Здравствуйте", transliteration: "zdrastvuyte" },
      { ru: "До свидания", transliteration: "do svidaniya" },
      { ru: "Пока", transliteration: "poka" },
      { ru: "До встречи", transliteration: "do vstrechi" },
    ],
    sentences: [
      { before: "", answer: "Привет", after: ", как дела?", es: "¡Hola! ¿Cómo estás?" },
      { before: "", answer: "Здравствуйте", after: "! Как вас зовут?", es: "¡Hola (formal)! ¿Cómo se llama usted?" },
      { before: "Спасибо за всё! ", answer: "До свидания", after: ".", es: "¡Gracias por todo! Adiós." },
      { before: "Ну, мне пора. ", answer: "Пока", after: "!", es: "Bueno, me tengo que ir. ¡Chau!" },
      { before: "Увидимся завтра! ", answer: "До встречи", after: "!", es: "¡Nos vemos mañana! ¡Hasta pronto!" },
    ],
  },
};

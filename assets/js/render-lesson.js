import { speak, stopSpeaking, getRate, toggleRate, supportsSpeech } from "./speech.js";
import { levels, lessonsIndex } from "../../content/lessons-index.js";
import { runFlashcardsSession, toFlashcardEntries } from "./render-flashcards.js";

export function waveHTML() {
  return '<span class="wave"><span></span><span></span><span></span><span></span></span>';
}

export function wrapWords(text) {
  return text
    .split(" ")
    .map((tok) => {
      if (!/[а-яёА-ЯЁ]/.test(tok)) return tok + " ";
      const match = tok.match(
        /^([^\wа-яёА-ЯЁ]*)([\wа-яёА-ЯЁ'-]*)([^\wа-яёА-ЯЁ]*)$/
      );
      if (!match || !match[2]) return tok + " ";
      const [, pre, core, post] = match;
      return `${pre}<span class="w" tabindex="0" data-word="${core}">${core}${waveHTML()}</span>${post} `;
    })
    .join("");
}

// Botón ▶ compartido por líneas de diálogo y lecturas completas: un solo
// clic reproduce, un segundo clic sobre el MISMO botón mientras suena lo
// detiene. Solo puede haber un botón "reproduciendo" a la vez en toda la
// página — al arrancar uno nuevo, el anterior vuelve a su estado normal
// (speak() ya cancela el audio previo; acá solo sincronizamos el ícono).
let activePlayButton = null;

function wirePlayToggle(btn, getText, { playingLabel, idleLabel }) {
  function reset() {
    btn.classList.remove("playing");
    btn.textContent = idleLabel;
    if (activePlayButton === btn) activePlayButton = null;
  }
  btn.addEventListener("click", () => {
    if (btn.classList.contains("playing")) {
      stopSpeaking();
      reset();
      return;
    }
    if (activePlayButton && activePlayButton !== btn) {
      activePlayButton.classList.remove("playing");
      activePlayButton.textContent = activePlayButton.dataset.idleLabel ?? activePlayButton.textContent;
    }
    btn.dataset.idleLabel = idleLabel;
    btn.classList.add("playing");
    btn.textContent = playingLabel;
    activePlayButton = btn;
    speak(getText(), { onend: reset });
  });
}

document.addEventListener("mouseenter", handleWordEnter, true);
document.addEventListener("focusin", handleWordEnter, true);
document.addEventListener("click", handleWordEnter, true);

function handleWordEnter(e) {
  const el = e.target.closest ? e.target.closest(".w") : null;
  if (!el) return;
  if (e.type === "mouseenter" && el.dataset.locked) return;
  speak(el.dataset.word);
  el.classList.add("active");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("active"), 650 / getRate());
}

document.addEventListener("mouseenter", handleSegEnter, true);
document.addEventListener("mouseleave", handleSegLeave, true);
document.addEventListener("focusin", handleSegEnter, true);
document.addEventListener("focusout", handleSegLeave, true);

function segmentOf(node) {
  return node && node.closest ? node.closest(".seg, .seg-es") : null;
}

function handleSegEnter(e) {
  const el = segmentOf(e.target);
  if (!el) return;
  document
    .querySelectorAll(`[data-seg="${el.dataset.seg}"]`)
    .forEach((node) => node.classList.add("seg-highlight"));
}

function handleSegLeave(e) {
  const el = segmentOf(e.target);
  if (!el) return;
  const stillInside = segmentOf(e.relatedTarget) === el;
  if (stillInside) return;
  document
    .querySelectorAll(`[data-seg="${el.dataset.seg}"]`)
    .forEach((node) => node.classList.remove("seg-highlight"));
}

function renderHero(root, lesson) {
  const hero = document.createElement("section");
  hero.className = "hero";
  hero.innerHTML = `
    <p class="eyebrow">${lesson.level} · ${lesson.module ?? "Lección " + String(lesson.order).padStart(2, "0")}</p>
    <h1>${lesson.title}</h1>
    <p class="lead">Pasa el cursor, toca, o navega con Tab por cualquier palabra en ruso — y la escucharás pronunciada al instante.</p>
  `;
  root.appendChild(hero);
}

function renderAlphabetSection(root, alphabet, number) {
  if (!alphabet) return;
  const section = document.createElement("section");
  section.className = "section section-paper reveal";
  section.id = "alphabet";
  section.innerHTML = `
    <p class="eyebrow">${String(number).padStart(2, "0")} — El alfabeto</p>
    <h2>Las 33 letras del alfabeto ruso</h2>
    <p class="section-note">Pasa el cursor por cada letra para escuchar cómo suena.</p>
    <div class="word-grid alphabet-grid"></div>
  `;
  const grid = section.querySelector(".alphabet-grid");
  alphabet.forEach((item) => {
    const card = document.createElement("div");
    card.className = "word-card alphabet-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <span class="wc-ipa">${item.transliteration}</span>
      <span class="wc-word alphabet-letter">${item.letter}${waveHTML()}</span>
      <span class="wc-es">${item.type}</span>
    `;
    function trigger() {
      speak(item.letter);
      card.classList.add("active");
      clearTimeout(card._t);
      card._t = setTimeout(() => card.classList.remove("active"), 700 / getRate());
    }
    card.addEventListener("mouseenter", trigger);
    card.addEventListener("focus", trigger);
    card.addEventListener("click", trigger);
    grid.appendChild(card);
  });
  root.appendChild(section);
}

function renderVocabSection(root, vocabulary, number, isVocabLesson, idSuffix, heading) {
  const section = document.createElement("section");
  section.className = "section section-paper reveal";
  section.id = idSuffix ? `vocab-${idSuffix}` : "vocab";
  section.innerHTML = isVocabLesson
    ? `
    <p class="eyebrow">${String(number).padStart(2, "0")} — Vocabulario nuevo</p>
    <h2>${heading ?? "Palabras para las próximas lecciones"}</h2>
    <p class="section-note">Pasa el cursor por cada tarjeta para escuchar la pronunciación y ver su transliteración. Estas palabras aparecen en las lecciones que siguen.</p>
    <div class="word-grid"></div>
  `
    : `
    <p class="eyebrow">${String(number).padStart(2, "0")} — Vocabulario esencial</p>
    <h2>Palabras para empezar</h2>
    <p class="section-note">Pasa el cursor por cada tarjeta para escuchar la pronunciación y ver su transliteración.</p>
    <div class="word-grid"></div>
  `;
  const grid = section.querySelector(".word-grid");
  vocabulary.forEach((item) => {
    const card = document.createElement("div");
    card.className = "word-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <span class="wc-ipa">${item.transliteration}</span>
      <span class="wc-word">${item.ru}${waveHTML()}</span>
      <span class="wc-es">${item.es}</span>
    `;
    function trigger() {
      speak(item.ru);
      card.classList.add("active");
      clearTimeout(card._t);
      card._t = setTimeout(() => card.classList.remove("active"), 700 / getRate());
    }
    card.addEventListener("mouseenter", trigger);
    card.addEventListener("focus", trigger);
    card.addEventListener("click", trigger);
    grid.appendChild(card);
  });
  attachTopicFlashcards(section, grid, vocabulary, isVocabLesson ? heading : "Vocabulario esencial");
  root.appendChild(section);
}

function attachTopicFlashcards(section, grid, vocabulary, heading) {
  const launcher = document.createElement("div");
  launcher.className = "topic-flashcards-launcher";
  launcher.innerHTML = `<button type="button" class="topic-flashcards-btn">🃏 Practicar estas palabras con flashcards</button>`;
  const panel = document.createElement("div");
  panel.className = "topic-flashcards-panel";
  panel.hidden = true;
  grid.before(launcher, panel);

  const btn = launcher.querySelector(".topic-flashcards-btn");
  btn.addEventListener("click", () => {
    const opening = panel.hidden;
    panel.hidden = !opening;
    grid.style.display = opening ? "none" : "";
    if (!opening) return;
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    runFlashcardsSession(panel, toFlashcardEntries(vocabulary), {
      subtitle: heading,
      exitLabel: "✕ Cerrar",
      onExit: () => {
        panel.hidden = true;
        panel.innerHTML = "";
        grid.style.display = "";
      },
    });
  });
}

function renderGrammarBoxes(container, tables) {
  if (!tables || !tables.length) return;
  const wrap = document.createElement("div");
  wrap.className = "grammar-boxes";
  tables.forEach((table) => {
    const box = document.createElement("div");
    box.className = "grammar-box";
    const h3 = document.createElement("h3");
    h3.className = "grammar-box-title";
    h3.textContent = table.title;
    box.appendChild(h3);

    const tableWrap = document.createElement("div");
    tableWrap.className = "table-wrap";
    const tableEl = document.createElement("table");
    tableEl.className = "grammar-box-table";
    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    table.columns.forEach((col) => {
      const th = document.createElement("th");
      th.textContent = col;
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    const tbody = document.createElement("tbody");
    table.rows.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");
        td.innerHTML = wrapWords(cell);
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    tableEl.appendChild(thead);
    tableEl.appendChild(tbody);
    tableWrap.appendChild(tableEl);
    box.appendChild(tableWrap);

    if (table.note) {
      const note = document.createElement("p");
      note.className = "grammar-box-note";
      note.textContent = table.note;
      box.appendChild(note);
    }
    wrap.appendChild(box);
  });
  container.appendChild(wrap);
}

function renderGrammarSection(root, grammarPoint, number) {
  const section = document.createElement("section");
  section.className = "section section-board reveal";
  section.id = "grammar";
  section.innerHTML = `
    <p class="eyebrow">${String(number).padStart(2, "0")} — Gramática</p>
    <h2>${grammarPoint.title}</h2>
    <p class="section-note">${grammarPoint.explanation}</p>
  `;
  renderGrammarBoxes(section, grammarPoint.tables);

  const examplesLabel = document.createElement("p");
  examplesLabel.className = "grammar-examples-label";
  examplesLabel.textContent = "Ejemplos";
  section.appendChild(examplesLabel);

  const tableWrap = document.createElement("div");
  tableWrap.className = "table-wrap";
  tableWrap.innerHTML = `
    <table class="grammar-table">
      <thead>
        <tr><th>Ruso</th><th>Transliteración</th><th>Español</th></tr>
      </thead>
      <tbody></tbody>
    </table>
  `;
  const tbody = tableWrap.querySelector("tbody");
  grammarPoint.examples.forEach((ex) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="pronoun">${wrapWords(ex.ru)}</td>
      <td class="form">${ex.transliteration}</td>
      <td>${ex.es}</td>
    `;
    tbody.appendChild(tr);
  });
  section.appendChild(tableWrap);

  root.appendChild(section);
}

function renderConversationSection(root, conversation, number) {
  const section = document.createElement("section");
  section.className = "section section-paper reveal";
  section.id = "conversations";
  section.innerHTML = `
    <p class="eyebrow">${String(number).padStart(2, "0")} — Conversación</p>
    <h2>${conversation.title}</h2>
    <p class="section-note">Toca ▶ para escuchar la línea completa, o pasa el cursor por palabras sueltas.</p>
    <div class="dialogue-card"></div>
  `;
  const card = section.querySelector(".dialogue-card");
  conversation.lines.forEach((line, lineIdx) => {
    const row = document.createElement("div");
    row.className = "line";
    row.dataset.speaker = line.speaker;

    const tag = document.createElement("span");
    tag.className = "speaker-tag";
    tag.textContent = line.speaker;

    const fullRu = line.segments.map((seg) => seg.ru).join(" ");
    const btn = document.createElement("button");
    btn.className = "play-btn";
    btn.setAttribute("aria-label", "Reproducir línea completa");
    btn.textContent = "▶";
    wirePlayToggle(btn, () => fullRu, { playingLabel: "■", idleLabel: "▶" });

    const p = document.createElement("p");
    p.className = "line-text";
    line.segments.forEach((seg, segIdx) => {
      const span = document.createElement("span");
      span.className = "seg";
      span.dataset.seg = `dlg-${lineIdx}-${segIdx}`;
      span.innerHTML = wrapWords(seg.ru);
      p.appendChild(span);
      p.appendChild(document.createTextNode(" "));
    });

    row.appendChild(tag);
    row.appendChild(btn);
    row.appendChild(p);
    card.appendChild(row);
  });

  const translationCard = document.createElement("div");
  translationCard.className = "dialogue-card dialogue-card-translation";
  const h4 = document.createElement("h3");
  h4.textContent = "Traducción";
  translationCard.appendChild(h4);
  conversation.lines.forEach((line, lineIdx) => {
    const row = document.createElement("div");
    row.className = "line";
    row.dataset.speaker = line.speaker;

    const tag = document.createElement("span");
    tag.className = "speaker-tag";
    tag.textContent = line.speaker;

    const p = document.createElement("p");
    p.className = "line-text";
    line.segments.forEach((seg, segIdx) => {
      const span = document.createElement("span");
      span.className = "seg-es";
      span.tabIndex = 0;
      span.dataset.seg = `dlg-${lineIdx}-${segIdx}`;
      span.textContent = seg.es;
      p.appendChild(span);
      p.appendChild(document.createTextNode(" "));
    });

    row.appendChild(tag);
    row.appendChild(p);
    translationCard.appendChild(row);
  });
  card.after(translationCard);

  root.appendChild(section);
}

function renderReadingSection(root, reading, number) {
  if (!reading) return;
  const section = document.createElement("section");
  section.className = "section section-paper reveal";
  section.id = "reading";
  const typeLabel =
    { historia: "Historia", "artículo": "Artículo", "diálogo": "Diálogo", poema: "Poema" }[reading.type] ?? "Lectura";
  section.innerHTML = `
    <p class="eyebrow">${String(number).padStart(2, "0")} — Lectura</p>
    <h2>${reading.title}</h2>
    <p class="section-note">${typeLabel} — pasa el cursor por las palabras o escucha el texto completo.</p>
    <div class="dialogue-card reading-card">
      <button class="play-btn reading-play" aria-label="Reproducir texto completo">▶ Escuchar texto completo</button>
      <div class="reading-text"></div>
    </div>
  `;
  const card = section.querySelector(".reading-card");
  const textEl = card.querySelector(".reading-text");
  reading.paragraphs.forEach((para, paraIdx) => {
    const p = document.createElement("p");
    p.className = "line-text reading-paragraph";
    para.segments.forEach((seg, segIdx) => {
      const span = document.createElement("span");
      span.className = "seg";
      span.dataset.seg = `rd-${paraIdx}-${segIdx}`;
      span.innerHTML = wrapWords(seg.ru);
      p.appendChild(span);
      p.appendChild(document.createTextNode(" "));
    });
    textEl.appendChild(p);
  });

  const playBtn = card.querySelector(".reading-play");
  const fullText = reading.paragraphs
    .flatMap((para) => para.segments.map((seg) => seg.ru))
    .join(" ");
  wirePlayToggle(playBtn, () => fullText, {
    playingLabel: "■ Reproduciendo…",
    idleLabel: "▶ Escuchar texto completo",
  });

  const translationCard = document.createElement("div");
  translationCard.className = "dialogue-card dialogue-card-translation";
  const h3 = document.createElement("h3");
  h3.textContent = "Traducción";
  translationCard.appendChild(h3);
  reading.paragraphs.forEach((para, paraIdx) => {
    const p = document.createElement("p");
    p.className = "line-text reading-paragraph";
    para.segments.forEach((seg, segIdx) => {
      const span = document.createElement("span");
      span.className = "seg-es";
      span.tabIndex = 0;
      span.dataset.seg = `rd-${paraIdx}-${segIdx}`;
      span.textContent = seg.es;
      p.appendChild(span);
      p.appendChild(document.createTextNode(" "));
    });
    translationCard.appendChild(p);
  });
  card.after(translationCard);

  root.appendChild(section);
}

function renderLessonsMenu(currentLevel) {
  const wrap = document.createElement("div");
  wrap.className = "lessons-menu";
  wrap.innerHTML = `
    <button class="lessons-menu-toggle breadcrumb" aria-haspopup="true" aria-expanded="false">Lecciones ▾</button>
    <div class="lessons-menu-panel" hidden>
      <div class="lessons-menu-panel-inner">
        <div class="lessons-menu-levels"></div>
        <div class="lessons-menu-list"></div>
      </div>
    </div>
  `;
  const toggle = wrap.querySelector(".lessons-menu-toggle");
  const panel = wrap.querySelector(".lessons-menu-panel");
  const levelsEl = wrap.querySelector(".lessons-menu-levels");
  const listEl = wrap.querySelector(".lessons-menu-list");

  function showLessons(levelCode) {
    listEl.innerHTML = "";
    lessonsIndex
      .filter((item) => item.level === levelCode)
      .sort((a, b) => a.order - b.order)
      .forEach((item) => {
        const a = document.createElement("a");
        a.className = "lessons-menu-item";
        a.href = `${item.file}`;
        a.innerHTML = `
          <span class="lessons-menu-item-title">${item.title}</span>
          ${item.grammarLabel ? `<span class="lessons-menu-item-topic">${item.grammarLabel}</span>` : ""}
        `;
        listEl.appendChild(a);
      });
    levelsEl.querySelectorAll(".lessons-menu-level").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.level === levelCode);
    });
  }

  levels.forEach((lvl) => {
    const btn = document.createElement("button");
    btn.className = "lessons-menu-level";
    btn.type = "button";
    btn.dataset.level = lvl.code;
    btn.textContent = lvl.label;
    btn.addEventListener("mouseenter", () => showLessons(lvl.code));
    btn.addEventListener("focus", () => showLessons(lvl.code));
    btn.addEventListener("click", () => {
      window.location.href = `../index.html?level=${lvl.code}`;
    });
    levelsEl.appendChild(btn);
  });

  showLessons(currentLevel ?? levels[0].code);

  let closeTimer = null;
  function cancelAutoClose() {
    clearTimeout(closeTimer);
  }
  function scheduleAutoClose(delay = 600) {
    cancelAutoClose();
    closeTimer = setTimeout(closePanel, delay);
  }
  const mobileQuery = window.matchMedia("(max-width: 640px)");
  function positionPanel() {
    if (!mobileQuery.matches) {
      panel.removeAttribute("style");
      return;
    }
    const rect = toggle.getBoundingClientRect();
    panel.style.position = "fixed";
    panel.style.left = "12px";
    panel.style.right = "12px";
    panel.style.top = `${rect.bottom + 10}px`;
    panel.style.paddingTop = "0";
  }

  function closePanel() {
    cancelAutoClose();
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }
  function openPanel() {
    cancelAutoClose();
    panel.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    positionPanel();
  }
  window.addEventListener("resize", () => {
    if (!panel.hidden) positionPanel();
  });
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (panel.hidden) openPanel();
    else closePanel();
  });
  wrap.addEventListener("mouseenter", cancelAutoClose);
  wrap.addEventListener("mouseleave", () => scheduleAutoClose());
  wrap.addEventListener("focusin", cancelAutoClose);
  wrap.addEventListener("focusout", (e) => {
    if (!wrap.contains(e.relatedTarget)) scheduleAutoClose(300);
  });
  document.addEventListener("click", (e) => {
    if (!wrap.contains(e.target)) closePanel();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePanel();
  });

  return wrap;
}

function renderFillBlankSection(root, fillBlank, number, idSuffix) {
  if (!fillBlank) return;
  const section = document.createElement("section");
  section.className = "section section-paper reveal";
  section.id = idSuffix ? `fillblank-${idSuffix}` : "fillblank";
  section.innerHTML = `
    <p class="eyebrow">${String(number).padStart(2, "0")} — Completa las frases</p>
    <h2>${fillBlank.title}</h2>
    <p class="section-note">${fillBlank.instructions ?? "Arrastrá cada palabra hasta su hueco, o hacé click en la palabra y después en el hueco."}</p>
    <div class="fillblank-bank"></div>
    <div class="fillblank-sentences"></div>
    <div class="fillblank-actions">
      <button type="button" class="fillblank-btn fillblank-check">Comprobar</button>
      <button type="button" class="fillblank-btn-ghost fillblank-reset">Reiniciar</button>
    </div>
    <p class="fillblank-feedback" aria-live="polite"></p>
  `;

  const bankEl = section.querySelector(".fillblank-bank");
  const sentencesEl = section.querySelector(".fillblank-sentences");
  const feedbackEl = section.querySelector(".fillblank-feedback");
  let selectedChip = null;

  fillBlank.sentences.forEach((s, i) => {
    const p = document.createElement("p");
    p.className = "fillblank-sentence";
    const before = document.createElement("span");
    before.innerHTML = s.before ? wrapWords(s.before) : "";
    const blank = document.createElement("span");
    blank.className = "fillblank-blank";
    blank.dataset.answer = s.answer;
    blank.dataset.index = String(i);
    blank.tabIndex = 0;
    blank.setAttribute("role", "button");
    blank.setAttribute("aria-label", "Espacio para completar, tocá para elegir una palabra");
    blank.textContent = "______";
    const after = document.createElement("span");
    after.innerHTML = s.after ? wrapWords(s.after) : "";
    p.appendChild(before);
    p.appendChild(blank);
    p.appendChild(after);
    if (s.es) {
      const es = document.createElement("span");
      es.className = "fillblank-es";
      es.textContent = ` (${s.es})`;
      p.appendChild(es);
    }
    sentencesEl.appendChild(p);
  });

  function buildBank() {
    bankEl.innerHTML = "";
    fillBlank.wordBank.forEach((w) => {
      const chip = document.createElement("div");
      chip.className = "fillblank-chip";
      chip.draggable = true;
      chip.tabIndex = 0;
      chip.dataset.word = w.ru;
      chip.innerHTML = wrapWords(w.ru);
      chip.addEventListener("click", () => {
        if (selectedChip === chip) {
          chip.classList.remove("selected");
          selectedChip = null;
        } else {
          if (selectedChip) selectedChip.classList.remove("selected");
          selectedChip = chip;
          chip.classList.add("selected");
        }
      });
      chip.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", w.ru);
      });
      bankEl.appendChild(chip);
    });
  }
  buildBank();

  // Las palabras del banco son reutilizables: una misma palabra puede
  // completar varios huecos (ej. здесь/там puede repetirse en distintas
  // frases), así que no se deshabilita ni se "gasta" al colocarla.
  function placeWord(blank, word) {
    blank.innerHTML = wrapWords(word);
    blank.classList.add("filled");
    blank.classList.remove("correct", "incorrect");
    blank.dataset.filled = word;
    if (selectedChip) {
      selectedChip.classList.remove("selected");
      selectedChip = null;
    }
  }

  function clearBlank(blank) {
    if (!blank.dataset.filled) return;
    delete blank.dataset.filled;
    blank.classList.remove("filled", "correct", "incorrect");
    blank.textContent = "______";
  }

  sentencesEl.querySelectorAll(".fillblank-blank").forEach((blank) => {
    blank.addEventListener("click", () => {
      if (blank.dataset.filled) {
        clearBlank(blank);
        return;
      }
      if (selectedChip) placeWord(blank, selectedChip.dataset.word);
    });
    blank.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        blank.click();
      }
    });
    blank.addEventListener("dragover", (e) => e.preventDefault());
    blank.addEventListener("drop", (e) => {
      e.preventDefault();
      const word = e.dataTransfer.getData("text/plain");
      if (!word) return;
      if (blank.dataset.filled) clearBlank(blank);
      placeWord(blank, word);
    });
  });

  section.querySelector(".fillblank-check").addEventListener("click", () => {
    const blanks = sentencesEl.querySelectorAll(".fillblank-blank");
    let correctCount = 0;
    blanks.forEach((blank) => {
      const filled = blank.dataset.filled;
      const isCorrect = !!filled && filled === blank.dataset.answer;
      blank.classList.toggle("correct", isCorrect);
      blank.classList.toggle("incorrect", !!filled && !isCorrect);
      if (isCorrect) correctCount++;
    });
    feedbackEl.textContent = `${correctCount} / ${blanks.length} correctas.`;
    feedbackEl.className =
      "fillblank-feedback " + (correctCount === blanks.length ? "correct" : "incorrect");
  });

  section.querySelector(".fillblank-reset").addEventListener("click", () => {
    sentencesEl.querySelectorAll(".fillblank-blank").forEach(clearBlank);
    buildBank();
    selectedChip = null;
    feedbackEl.textContent = "";
    feedbackEl.className = "fillblank-feedback";
  });

  root.appendChild(section);
}

function renderTopbar(root, lesson) {
  const topbar = document.createElement("div");
  topbar.className = "topbar";
  const nav = document.createElement("div");
  nav.className = "topbar-nav";
  const back = document.createElement("a");
  back.className = "breadcrumb breadcrumb-back";
  back.href = "../index.html";
  back.setAttribute("aria-label", "Volver a lecciones");
  back.innerHTML = `<span aria-hidden="true">←</span><span class="breadcrumb-label"> Volver a lecciones</span>`;
  nav.appendChild(back);
  nav.appendChild(renderLessonsMenu(lesson?.level));

  const vocabLink = document.createElement("a");
  vocabLink.className = "breadcrumb";
  vocabLink.href = "../vocabulary.html";
  vocabLink.textContent = "Vocabulario";
  nav.appendChild(vocabLink);

  const speedToggle = document.createElement("button");
  speedToggle.className = "speed-toggle";
  speedToggle.id = "speedToggle";
  speedToggle.setAttribute("aria-label", "Cambiar velocidad de voz");
  speedToggle.innerHTML = `<span id="speedIcon">⚡</span> <span id="speedLabel">Normal</span>`;

  topbar.appendChild(nav);
  topbar.appendChild(speedToggle);
  root.appendChild(topbar);
  speedToggle.addEventListener("click", () => {
    const rate = toggleRate();
    document.getElementById("speedIcon").textContent = rate === 1 ? "⚡" : "🐢";
    document.getElementById("speedLabel").textContent = rate === 1 ? "Normal" : "Lento";
  });
}

function renderFooter(root) {
  const footer = document.createElement("footer");
  footer.innerHTML = `<p>La voz se genera con la síntesis de voz de tu navegador (Web Speech API), así que la calidad varía según el dispositivo y funciona mejor en Chrome o Edge.</p>`;
  root.appendChild(footer);
}

function renderSpeechNotice(root) {
  if (supportsSpeech) return;
  const notice = document.createElement("div");
  notice.className = "speech-notice";
  notice.textContent =
    "Tu navegador no soporta síntesis de voz — prueba en Chrome, Edge o Safari recientes para escuchar la pronunciación.";
  root.insertBefore(notice, root.querySelector(".hero").nextSibling);
}

function setupScrollReveal(root) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  root.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

function renderVocabTopics(root, topics, n) {
  topics.forEach((topic, i) => {
    renderVocabSection(root, topic.vocabulary, n++, true, i + 1, topic.title);
    if (topic.fillBlank) renderFillBlankSection(root, topic.fillBlank, n++, i + 1);
  });
  return n;
}

export function renderLesson(lesson) {
  const root = document.getElementById("lesson-root");
  let n = 1;
  renderTopbar(root, lesson);
  renderHero(root, lesson);
  if (lesson.alphabet) renderAlphabetSection(root, lesson.alphabet, n++);
  if (lesson.topics) {
    n = renderVocabTopics(root, lesson.topics, n);
  } else {
    if (lesson.vocabulary) renderVocabSection(root, lesson.vocabulary, n++, lesson.type === "vocabulary");
    if (lesson.fillBlank) renderFillBlankSection(root, lesson.fillBlank, n++);
  }
  if (lesson.grammarPoint) renderGrammarSection(root, lesson.grammarPoint, n++);
  if (lesson.conversation) renderConversationSection(root, lesson.conversation, n++);
  renderReadingSection(root, lesson.reading, n++);
  renderFooter(root);
  renderSpeechNotice(root);
  setupScrollReveal(root);
}

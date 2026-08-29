import { speak, getRate, toggleRate, supportsSpeech } from "./speech.js";
import { levels, lessonsIndex } from "../../content/lessons-index.js";

function waveHTML() {
  return '<span class="wave"><span></span><span></span><span></span><span></span></span>';
}

function wrapWords(text) {
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

function renderVocabSection(root, vocabulary, number) {
  const section = document.createElement("section");
  section.className = "section section-paper reveal";
  section.id = "vocab";
  section.innerHTML = `
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
  root.appendChild(section);
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
    btn.addEventListener("click", () => {
      btn.classList.add("playing");
      btn.textContent = "■";
      speak(fullRu, {
        onend: () => {
          btn.classList.remove("playing");
          btn.textContent = "▶";
        },
      });
    });

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
    { historia: "Historia", "artículo": "Artículo", "diálogo": "Diálogo" }[reading.type] ?? "Lectura";
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
  playBtn.addEventListener("click", () => {
    playBtn.classList.add("playing");
    playBtn.textContent = "■ Reproduciendo…";
    speak(fullText, {
      onend: () => {
        playBtn.classList.remove("playing");
        playBtn.textContent = "▶ Escuchar texto completo";
      },
    });
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
        a.textContent = item.title;
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

function renderTopbar(root, lesson) {
  const topbar = document.createElement("div");
  topbar.className = "topbar";
  const nav = document.createElement("div");
  nav.className = "topbar-nav";
  const back = document.createElement("a");
  back.className = "breadcrumb";
  back.href = "../index.html";
  back.textContent = "← Volver a lecciones";
  nav.appendChild(back);
  nav.appendChild(renderLessonsMenu(lesson?.level));

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

export function renderLesson(lesson) {
  const root = document.getElementById("lesson-root");
  let n = 1;
  renderTopbar(root, lesson);
  renderHero(root, lesson);
  if (lesson.alphabet) renderAlphabetSection(root, lesson.alphabet, n++);
  renderVocabSection(root, lesson.vocabulary, n++);
  renderGrammarSection(root, lesson.grammarPoint, n++);
  renderConversationSection(root, lesson.conversation, n++);
  renderReadingSection(root, lesson.reading, n++);
  renderFooter(root);
  renderSpeechNotice(root);
  setupScrollReveal(root);
}

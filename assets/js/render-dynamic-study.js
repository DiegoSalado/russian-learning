import { speak, supportsSpeech } from "./speech.js";
import { wrapWords } from "./render-lesson.js";
import { shuffle } from "./render-flashcards.js";
import { loadProgress, recordExposure } from "./flashcards-progress.js";

const SESSION_LENGTH = 10;
const MAX_OPTIONS = 4;
const EXERCISE_TYPES = ["audio-to-ru", "ru-to-es", "es-to-ru", "matching"];

// Las palabras son entries {id, lemma, transliteration, es} (ver toFlashcardEntries).

// Palabras reales del pool que no repiten ni la traducción ni el ruso de `word`
// ni entre sí, para que ninguna opción sea ambigua.
function pickDistractors(words, word, count) {
  const usedEs = new Set([word.es.toLowerCase()]);
  const usedRu = new Set([word.lemma.toLowerCase()]);
  const picked = [];
  for (const w of shuffle(words)) {
    if (picked.length >= count) break;
    if (usedEs.has(w.es.toLowerCase()) || usedRu.has(w.lemma.toLowerCase())) continue;
    usedEs.add(w.es.toLowerCase());
    usedRu.add(w.lemma.toLowerCase());
    picked.push(w);
  }
  return picked;
}

// Punto único para agregar tipos nuevos: devuelve {type, word, options} o {type:"matching", word, pairs}.
export function createNextExercise(words, word, lastType) {
  const group = shuffle([word, ...pickDistractors(words, word, MAX_OPTIONS - 1)]);
  const types = EXERCISE_TYPES.filter(
    (t) =>
      t !== lastType &&
      (t !== "audio-to-ru" || supportsSpeech) &&
      (t !== "matching" || group.length >= 3)
  );
  const type = types[Math.floor(Math.random() * types.length)];
  return type === "matching" ? { type, word, pairs: group } : { type, word, options: group };
}

export function renderDynamicStart(container, { subtitle, onBack, onStart }) {
  container.innerHTML = `
    <div class="flashcard-topline">
      <button type="button" class="flashcard-back-btn breadcrumb">← Volver</button>
    </div>
    <div class="study-start">
      <p class="eyebrow">Study</p>
      <h3>Dinámico</h3>
      ${subtitle ? `<p class="study-start-sub">${subtitle}</p>` : ""}
      ${supportsSpeech ? "" : '<p class="study-start-sub">Tu navegador no soporta audio: se omitirán los ejercicios de escucha.</p>'}
      <button type="button" class="study-start-btn">Iniciar</button>
    </div>
  `;
  container.querySelector(".flashcard-back-btn").addEventListener("click", onBack);
  const startBtn = container.querySelector(".study-start-btn");
  startBtn.addEventListener("click", onStart);
  startBtn.focus({ preventScroll: true });
}

/**
 * Sesión de ejercicios variados.
 * @param {HTMLElement} container
 * @param {Array} words - entries {id, lemma, transliteration, es}.
 * @param {object} meta
 * @param {string} [meta.subtitle]
 * @param {() => void} meta.onExit - salir / "Volver a Study".
 */
export function runDynamicSession(container, words, meta = {}) {
  const onExit = meta.onExit ?? (() => {});
  const progressData = loadProgress();

  if (words.length < 2) {
    container.innerHTML = `
      <div class="flashcard-topline"><button type="button" class="flashcard-back-btn breadcrumb">← Volver</button></div>
      <p class="section-note">Hacen falta al menos 2 palabras para practicar en modo Dinámico.</p>
    `;
    container.querySelector(".flashcard-back-btn").addEventListener("click", onExit);
    return;
  }

  const order = shuffle(words);
  const total = Math.min(SESSION_LENGTH, order.length * 2);
  const state = {
    targets: Array.from({ length: total }, (_, i) => order[i % order.length]),
    index: 0,
    score: 0,
    lastType: null,
    current: null,
    practiced: new Set(),
  };
  let lastSpoken = { text: "", at: 0 };

  // hover + focus + click disparan casi a la vez: evita reiniciar el mismo audio.
  function speakOnce(text) {
    const now = Date.now();
    if (lastSpoken.text === text && now - lastSpoken.at < 400) return;
    lastSpoken = { text, at: now };
    speak(text);
  }

  function leave() {
    if (!window.confirm("¿Salir de la sesión? Perderás el avance de esta práctica.")) return;
    onExit();
  }

  function header() {
    return `
      <div class="flashcard-topline">
        <button type="button" class="flashcard-back-btn breadcrumb">← Volver</button>
        <p class="flashcard-progress">Study · Dinámico · Ejercicio ${state.index + 1} / ${total}</p>
      </div>
    `;
  }

  function next() {
    if (state.index >= total) {
      renderStudyComplete();
      return;
    }
    const word = state.targets[state.index];
    state.current = createNextExercise(words, word, state.lastType);
    state.lastType = state.current.type;
    renderExercise();
  }

  function renderExercise() {
    const ex = state.current;
    const body =
      ex.type === "matching" ? matchingHTML(ex) : ex.type === "audio-to-ru" ? audioHTML(ex) : translationHTML(ex);
    container.innerHTML = `
      ${header()}
      <div class="study-stage">
        ${body}
        <div class="study-feedback" aria-live="polite"></div>
      </div>
    `;
    container.querySelector(".flashcard-back-btn").addEventListener("click", leave);
    if (ex.type === "matching") wireMatching(ex);
    else wireChoice(ex);
    if (ex.type === "audio-to-ru" || ex.type === "ru-to-es") speak(ex.word.lemma);
  }

  // ---------- opción múltiple (audio→ru, ru→es, es→ru) ----------

  function optionHTML(o, i, ex) {
    const inner =
      ex.type === "ru-to-es"
        ? `<span class="study-option-es">${o.es}</span>`
        : `<span class="study-option-ru">${o.lemma}</span><span class="study-option-tr">${ex.type === "audio-to-ru" ? o.es : o.transliteration}</span>`;
    return `<button type="button" class="study-option" data-index="${i}">${inner}</button>`;
  }

  function audioHTML(ex) {
    return `
      <p class="study-prompt">¿Qué palabra escuchaste?</p>
      <button type="button" class="study-listen" aria-label="Escuchar otra vez">🔊 Escuchar otra vez</button>
      <div class="study-options">${ex.options.map((o, i) => optionHTML(o, i, ex)).join("")}</div>
    `;
  }

  function translationHTML(ex) {
    const isRu = ex.type === "ru-to-es";
    return `
      <div class="study-question">
        <p class="study-word">${isRu ? wrapWords(ex.word.lemma) : ex.word.es}</p>
        ${isRu ? `<p class="study-translit">${ex.word.transliteration}</p>` : ""}
      </div>
      <p class="study-prompt">${isRu ? "Selecciona la traducción correcta" : "Selecciona la palabra correcta en ruso"}</p>
      <div class="study-options">${ex.options.map((o, i) => optionHTML(o, i, ex)).join("")}</div>
    `;
  }

  function wireChoice(ex) {
    const buttons = [...container.querySelectorAll(".study-option")];
    container.querySelector(".study-listen")?.addEventListener("click", () => speak(ex.word.lemma));
    buttons.forEach((btn, i) => {
      const option = ex.options[i];
      if (ex.type === "es-to-ru") {
        btn.addEventListener("mouseenter", () => speakOnce(option.lemma));
        btn.addEventListener("focus", () => speakOnce(option.lemma));
      }
      btn.addEventListener("click", () => {
        if (ex.answered) return;
        if (ex.type === "es-to-ru") speakOnce(option.lemma);
        ex.answered = true;
        const correct = option.id === ex.word.id;
        buttons.forEach((b, j) => {
          b.setAttribute("aria-disabled", "true");
          if (ex.options[j].id === ex.word.id) mark(b, "correct");
        });
        if (!correct) mark(btn, "incorrect");
        btn.classList.add("selected");
        finishExercise(correct, correct ? "¡Correcto!" : `Respuesta correcta: ${ex.word.lemma} — ${ex.word.es}`);
      });
    });
  }

  function mark(el, status) {
    el.classList.add(status);
    el.dataset.status = status === "correct" ? "✓" : "✕";
    el.setAttribute("aria-label", `${el.textContent.trim()} — ${status === "correct" ? "correcta" : "incorrecta"}`);
  }

  // ---------- emparejar ----------

  function matchingHTML(ex) {
    const left = ex.pairs.map((p) => `<button type="button" class="study-match-item" data-side="ru" data-id="${p.id}">${p.lemma}</button>`);
    const right = shuffle(ex.pairs).map((p) => `<button type="button" class="study-match-item" data-side="es" data-id="${p.id}">${p.es}</button>`);
    return `
      <p class="study-prompt">Empareja cada palabra con su traducción</p>
      <div class="study-match">
        <div class="study-match-col" role="group" aria-label="Ruso"><p class="study-match-head">Ruso</p>${left.join("")}</div>
        <div class="study-match-col" role="group" aria-label="Español"><p class="study-match-head">Español</p>${right.join("")}</div>
      </div>
    `;
  }

  function wireMatching(ex) {
    const items = [...container.querySelectorAll(".study-match-item")];
    let selected = null;
    let busy = false;
    let matched = 0;
    let mistakes = 0;

    items.forEach((item) => {
      item.addEventListener("click", () => {
        if (busy || item.classList.contains("matched")) return;
        const side = item.dataset.side;
        if (side === "ru") speakOnce(ex.pairs.find((p) => p.id === item.dataset.id).lemma);
        if (selected && selected.dataset.side === side) {
          selected.classList.remove("selected");
          selected = null;
        }
        if (!selected) {
          selected = item;
          item.classList.add("selected");
          return;
        }
        const pair = [selected, item];
        selected.classList.remove("selected");
        selected = null;
        if (pair[0].dataset.id === pair[1].dataset.id) {
          pair.forEach((el) => {
            mark(el, "correct");
            el.classList.add("matched");
            el.setAttribute("aria-disabled", "true");
          });
          matched += 1;
          if (matched === ex.pairs.length) finishExercise(mistakes === 0, mistakes === 0 ? "¡Perfecto!" : "¡Completado!");
          return;
        }
        mistakes += 1;
        busy = true;
        pair.forEach((el) => mark(el, "incorrect"));
        setTimeout(() => {
          pair.forEach((el) => {
            el.classList.remove("incorrect");
            delete el.dataset.status;
            el.removeAttribute("aria-label");
          });
          busy = false;
        }, 700);
      });
    });
  }

  // ---------- feedback y fin ----------

  function finishExercise(correct, message) {
    const ex = state.current;
    if (correct) state.score += 1;
    state.practiced.add(ex.word.id);
    recordExposure(progressData, ex.word.id);
    const isLast = state.index + 1 >= total;
    const box = container.querySelector(".study-feedback");
    box.className = `study-feedback ${correct ? "correct" : "incorrect"}`;
    box.innerHTML = `
      <p class="study-feedback-msg"><span aria-hidden="true">${correct ? "✓" : "✕"}</span> ${message}</p>
      <button type="button" class="flashcard-btn study-continue">${isLast ? "Ver resultado" : "Continuar"}</button>
    `;
    const btn = box.querySelector(".study-continue");
    btn.addEventListener("click", () => {
      state.index += 1;
      next();
    });
    btn.focus({ preventScroll: true });
  }

  function renderStudyComplete() {
    const n = state.practiced.size;
    container.innerHTML = `
      <div class="flashcards-summary">
        <p class="eyebrow">Sesión terminada</p>
        <h3>¡Sesión completada!</h3>
        <p class="study-summary-text">Has practicado ${n} palabra${n === 1 ? "" : "s"}.</p>
        <div class="flashcards-summary-stats">
          <div><strong>${state.score} / ${total}</strong><span>ejercicios sin errores</span></div>
        </div>
        <div class="flashcard-actions">
          <button type="button" class="flashcard-btn study-exit">Volver a Study</button>
          <button type="button" class="flashcard-btn study-repeat">Repetir</button>
        </div>
      </div>
    `;
    container.querySelector(".study-exit").addEventListener("click", onExit);
    container.querySelector(".study-repeat").addEventListener("click", () => runDynamicSession(container, words, meta));
  }

  next();
}

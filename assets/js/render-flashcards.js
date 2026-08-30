import { speak } from "./speech.js";
import { wrapWords } from "./render-lesson.js";
import { levels } from "../../content/lessons-index.js";
import { posOptions, POS_LABELS } from "./render-vocabulary.js";
import {
  loadProgress,
  getWordProgress,
  recordSwipe,
  recordExposure,
  priorityScore,
} from "./flashcards-progress.js";

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalize(s) {
  return s.toLowerCase().replace(/ё/g, "е").trim();
}

function pickSessionWords(vocabulary, level, pos, progressData, count) {
  const pool = vocabulary.filter(
    (w) => w.level === level && (pos === "Todos" || w.pos === pos) && !w.excludeFromFlashcards
  );
  const scored = pool.map((w) => ({ word: w, score: priorityScore(getWordProgress(progressData, w.id)) }));
  const maxScore = Math.max(0, ...scored.map((s) => s.score));
  const ordered = [];
  for (let s = maxScore; s >= 0; s--) {
    ordered.push(...shuffle(scored.filter((x) => x.score === s).map((x) => x.word)));
  }
  return ordered.slice(0, count);
}

export function renderFlashcardsMode(vocabulary, container) {
  const progressData = loadProgress();
  const SESSION_SIZE = 50;
  const posChoices = ["Todos", ...posOptions(vocabulary)];

  let session = null; // { level, pos, round, queue, round2Queue, index, current, stats, revealed, checked, correct }
  let activePos = "Todos";

  function levelWordCount(code) {
    return vocabulary.filter(
      (w) => w.level === code && (activePos === "Todos" || w.pos === activePos) && !w.excludeFromFlashcards
    ).length;
  }

  function renderLevelPicker() {
    container.innerHTML = `
      <div class="flashcards-picker">
        <p class="section-note">Elegí qué querés practicar y empezá una sesión de hasta ${SESSION_SIZE} palabras.</p>
        <div class="flashcards-pos-tabs" id="flashcardsPosTabs"></div>
        <div class="flashcards-level-grid"></div>
      </div>
    `;
    const posTabsEl = container.querySelector("#flashcardsPosTabs");
    posChoices.forEach((pos) => {
      const tab = document.createElement("button");
      tab.className = "flashcards-pos-tab" + (pos === activePos ? " active" : "");
      tab.type = "button";
      tab.textContent = pos === "Todos" ? "Todas las categorías" : POS_LABELS[pos];
      tab.addEventListener("click", () => {
        activePos = pos;
        renderLevelPicker();
      });
      posTabsEl.appendChild(tab);
    });

    const grid = container.querySelector(".flashcards-level-grid");
    levels.forEach((lvl) => {
      const count = levelWordCount(lvl.code);
      const btn = document.createElement("button");
      btn.className = "flashcards-level-card";
      btn.type = "button";
      btn.disabled = count === 0;
      btn.innerHTML = `
        <span class="flashcards-level-code">${lvl.code}</span>
        <span class="flashcards-level-label">${lvl.label}</span>
        <span class="flashcards-level-count">${count} palabra${count === 1 ? "" : "s"} disponible${count === 1 ? "" : "s"}</span>
      `;
      btn.addEventListener("click", () => startSession(lvl.code));
      grid.appendChild(btn);
    });
  }

  function startSession(level) {
    const words = pickSessionWords(vocabulary, level, activePos, progressData, SESSION_SIZE);
    session = {
      level,
      pos: activePos,
      round: 1,
      queue: words,
      round2Queue: [],
      index: 0,
      current: null,
      stats: { seen: 0, known: 0, unknown: 0 },
      revealed: false,
      writingChecked: null, // null | "correct" | "incorrect"
    };
    nextCard();
  }

  function nextCard() {
    if (session.index >= session.queue.length) {
      if (session.round === 1 && session.round2Queue.length > 0) {
        session.round = 2;
        session.queue = shuffle(session.round2Queue);
        session.round2Queue = [];
        session.index = 0;
      } else {
        renderSummary();
        return;
      }
    }
    session.current = session.queue[session.index];
    session.revealed = false;
    session.writingChecked = null;
    if (session.round === 1) {
      renderRound1Card();
    } else {
      renderRound2Card();
    }
    speak(session.current.lemma);
  }

  function cardHeader() {
    const total = session.queue.length;
    const cardPos = session.index + 1;
    const roundLabel = session.round === 1 ? "Ronda 1" : "Ronda 2 · Repaso";
    const posLabel = session.pos && session.pos !== "Todos" ? ` · ${POS_LABELS[session.pos]}` : "";
    return `
      <div class="flashcard-topline">
        <button type="button" class="flashcard-back-btn breadcrumb">← Cambiar de nivel</button>
        <p class="flashcard-progress">${session.level}${posLabel} · ${roundLabel} · Tarjeta ${cardPos} / ${total}</p>
      </div>
    `;
  }

  function wireHeader() {
    container.querySelector(".flashcard-back-btn").addEventListener("click", renderLevelPicker);
  }

  function flipCardHTML(entry) {
    return `
      <div class="flashcard-flip-wrap">
        <div class="flashcard" tabindex="0" role="button" aria-label="Tocar para dar vuelta la tarjeta">
          <div class="flashcard-face flashcard-front">
            <span class="flashcard-word">${wrapWords(entry.lemma)}</span>
            <span class="wc-ipa flashcard-translit">${entry.transliteration}</span>
          </div>
          <div class="flashcard-face flashcard-back">
            <span class="flashcard-es">${entry.es}</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderRound1Card() {
    const entry = session.current;
    container.innerHTML = `
      ${cardHeader()}
      <div class="flashcard-stage">
        ${flipCardHTML(entry)}
        <div class="flashcard-actions">
          <button class="flashcard-btn flashcard-btn-unknown" aria-label="No la sé">✕ No la sé</button>
          <button class="flashcard-btn flashcard-btn-known" aria-label="La sé">✓ La sé</button>
        </div>
        <p class="flashcard-hint">Tocá la tarjeta para darla vuelta y ver el significado. Deslizá o usá los botones (← / →) para responder.</p>
      </div>
    `;
    wireHeader();
    wireCardInteractions();
  }

  function renderRound2Card() {
    const entry = session.current;
    container.innerHTML = `
      ${cardHeader()}
      <div class="flashcard-stage">
        ${flipCardHTML(entry)}
        <div class="flashcard-writing" hidden>
          <label class="flashcard-writing-label" for="flashcardWritingInput">Escribí la palabra en ruso:</label>
          <input type="text" id="flashcardWritingInput" class="flashcard-writing-input" autocomplete="off" autocapitalize="off" spellcheck="false">
          <div class="flashcard-writing-actions">
            <button type="button" class="flashcard-btn flashcard-check">Comprobar</button>
            <button type="button" class="flashcard-skip">Saltar →</button>
          </div>
          <p class="flashcard-writing-feedback" aria-live="polite"></p>
        </div>
        <p class="flashcard-hint">Repaso de palabras difíciles: escuchá, dala vuelta para ver el significado y después escribila.</p>
      </div>
    `;
    wireHeader();
    wireRound2Interactions();
  }

  function reveal() {
    toggleFlip();
  }

  function toggleFlip() {
    const card = container.querySelector(".flashcard");
    if (!card) return;
    session.revealed = !session.revealed;
    card.classList.toggle("flipped", session.revealed);
    if (session.round === 2) {
      const writing = container.querySelector(".flashcard-writing");
      if (writing) writing.hidden = !session.revealed;
      if (session.revealed) {
        const input = container.querySelector("#flashcardWritingInput");
        if (input) input.focus();
      }
    }
  }

  function wireCardInteractions() {
    const card = container.querySelector(".flashcard");
    const unknownBtn = container.querySelector(".flashcard-btn-unknown");
    const knownBtn = container.querySelector(".flashcard-btn-known");

    let startX = 0;
    let startY = 0;
    let dx = 0;
    let dragging = false;
    const DRAG_THRESHOLD = 8;
    const COMMIT_THRESHOLD = 90;

    card.addEventListener("pointerdown", (e) => {
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
      dx = 0;
      card.setPointerCapture(e.pointerId);
      card.classList.add("dragging");
    });
    card.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) return;
      const flippedY = card.classList.contains("flipped") ? " rotateY(180deg)" : "";
      card.style.transform = `translateX(${dx}px) rotate(${dx / 18}deg)${flippedY}`;
      card.classList.toggle("swipe-known", dx > 30);
      card.classList.toggle("swipe-unknown", dx < -30);
    });
    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      card.classList.remove("dragging");
      if (Math.abs(dx) > COMMIT_THRESHOLD) {
        answer(dx > 0 ? "known" : "unknown");
      } else if (Math.abs(dx) < DRAG_THRESHOLD) {
        reveal();
        card.style.transform = "";
      } else {
        card.style.transform = "";
        card.classList.remove("swipe-known", "swipe-unknown");
      }
    }
    card.addEventListener("pointerup", endDrag);
    card.addEventListener("pointercancel", () => {
      dragging = false;
      card.classList.remove("dragging", "swipe-known", "swipe-unknown");
      card.style.transform = "";
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        reveal();
      } else if (e.key === "ArrowRight") {
        answer("known");
      } else if (e.key === "ArrowLeft") {
        answer("unknown");
      }
    });

    unknownBtn.addEventListener("click", () => answer("unknown"));
    knownBtn.addEventListener("click", () => answer("known"));
  }

  function answer(direction) {
    const entry = session.current;
    recordSwipe(progressData, entry.id, direction);
    session.stats.seen += 1;
    session.stats[direction] += 1;
    if (direction === "unknown") session.round2Queue.push(entry);
    session.index += 1;
    nextCard();
  }

  function wireRound2Interactions() {
    const card = container.querySelector(".flashcard");
    card.addEventListener("click", reveal);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        reveal();
      }
    });

    const checkBtn = container.querySelector(".flashcard-check");
    const skipBtn = container.querySelector(".flashcard-skip");
    const input = container.querySelector("#flashcardWritingInput");
    const feedback = container.querySelector(".flashcard-writing-feedback");

    checkBtn.addEventListener("click", () => checkWriting());
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        checkWriting();
      }
    });
    skipBtn.addEventListener("click", () => advanceRound2());

    function checkWriting() {
      const entry = session.current;
      const correct = normalize(input.value) === normalize(entry.lemma);
      feedback.textContent = correct
        ? `¡Correcto! ${entry.lemma}`
        : `Todavía no — la palabra es "${entry.lemma}". Probá de nuevo.`;
      feedback.classList.toggle("correct", correct);
      feedback.classList.toggle("incorrect", !correct);
      input.classList.toggle("correct", correct);
      input.classList.toggle("incorrect", !correct);
      if (correct) {
        recordExposure(progressData, entry.id);
        input.disabled = true;
        checkBtn.disabled = true;
        setTimeout(advanceRound2, 900);
      }
    }
  }

  function advanceRound2() {
    recordExposure(progressData, session.current.id);
    session.index += 1;
    nextCard();
  }

  function renderSummary() {
    const { seen, known, unknown } = session.stats;
    container.innerHTML = `
      <div class="flashcards-summary">
        <p class="eyebrow">Sesión terminada</p>
        <h3>¡Buen trabajo!</h3>
        <div class="flashcards-summary-stats">
          <div><strong>${seen}</strong><span>palabras estudiadas</span></div>
          <div><strong>${known}</strong><span>ya las sabías</span></div>
          <div><strong>${unknown}</strong><span>reforzadas</span></div>
        </div>
        <button class="flashcard-btn flashcards-restart">Elegir otro nivel</button>
      </div>
    `;
    container.querySelector(".flashcards-restart").addEventListener("click", renderLevelPicker);
  }

  renderLevelPicker();
}

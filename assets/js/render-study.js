import { runFlashcardsSession, renderFlashcardsMode } from "./render-flashcards.js";
import { renderDynamicStart, runDynamicSession } from "./render-dynamic-study.js";

export function renderStudyModeSelector(container, { exitLabel, onExit, onPick }) {
  container.innerHTML = `
    ${onExit ? `<div class="flashcard-topline"><button type="button" class="flashcard-back-btn breadcrumb">${exitLabel}</button></div>` : ""}
    <div class="study-select">
      <p class="eyebrow">Práctica</p>
      <h3>Study</h3>
      <div class="study-mode-grid">
        <button type="button" class="study-mode-card" data-mode="dynamic">
          <span class="study-mode-name">Dinámico</span>
          <span class="study-mode-desc">Actividades variadas para practicar</span>
        </button>
        <button type="button" class="study-mode-card" data-mode="flashcards">
          <span class="study-mode-name">Flashcards</span>
          <span class="study-mode-desc">Repaso tradicional</span>
        </button>
      </div>
    </div>
  `;
  container.querySelector(".flashcard-back-btn")?.addEventListener("click", onExit);
  container.querySelectorAll(".study-mode-card").forEach((card) => {
    card.addEventListener("click", () => onPick(card.dataset.mode));
  });
}

// meta = { subtitle, exitLabel, onExit } — el mismo contrato que runFlashcardsSession.
function startMode(mode, container, words, meta) {
  if (mode === "flashcards") {
    runFlashcardsSession(container, words, meta);
    return;
  }
  renderDynamicStart(container, {
    subtitle: meta.subtitle,
    onBack: meta.onExit,
    onStart: () => runDynamicSession(container, words, { subtitle: meta.subtitle, onExit: meta.onExit }),
  });
}

// Study sobre una lista fija de palabras (sección de vocabulario de una lección).
export function runStudy(container, words, meta = {}) {
  const showSelector = () =>
    renderStudyModeSelector(container, {
      exitLabel: meta.exitLabel ?? "← Volver",
      onExit: meta.onExit,
      onPick: (mode) =>
        startMode(mode, container, words, { subtitle: meta.subtitle, exitLabel: "← Volver", onExit: showSelector }),
    });
  showSelector();
}

// Study sobre el diccionario completo: reutiliza el picker de nivel/categoría de flashcards.
export function renderStudyVocabulary(vocabulary, container) {
  const showSelector = () =>
    renderStudyModeSelector(container, {
      onPick: (mode) =>
        renderFlashcardsMode(vocabulary, container, {
          onBack: showSelector,
          run: (c, words, meta) => startMode(mode, c, words, meta),
        }),
    });
  showSelector();
}

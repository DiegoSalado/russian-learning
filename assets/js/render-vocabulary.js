import { wrapWords } from "./render-lesson.js";
import { levels } from "./../../content/lessons-index.js";

export const POS_LABELS = {
  noun: "Sustantivo",
  profession: "Profesión",
  family: "Familia",
  country: "País",
  verb: "Verbo",
  adjective: "Adjetivo",
  pronoun: "Pronombre",
  numeral: "Numeral",
  adverb: "Adverbio",
  preposition: "Preposición",
  conjunction: "Conjunción",
  interjection: "Interjección",
};

// El "grupo de filtro" de una palabra es su categoría temática si la tiene
// (profession/family/country), y si no, su categoría gramatical (pos).
// Esto separa profesiones/familia/países del cajón genérico "Sustantivo"
// sin perder la info gramatical real de cada palabra.
export function filterGroup(entry) {
  return entry.category ?? entry.pos;
}

export function posOptions(vocabulary) {
  const present = new Set(vocabulary.map((w) => filterGroup(w)));
  return Object.keys(POS_LABELS).filter((key) => present.has(key));
}

function normalize(s) {
  return s.toLowerCase().replace(/ё/g, "е").trim();
}

function buildFormIndex(vocabulary) {
  const index = [];
  vocabulary.forEach((entry, entryIndex) => {
    entry.forms.forEach((f) => {
      index.push({
        formNorm: normalize(f.form),
        form: f.form,
        label: f.label,
        entryIndex,
      });
    });
  });
  return index;
}

function searchVocabulary(vocabulary, formIndex, queryRaw, levelFilter, posFilter) {
  const query = (queryRaw || "").trim();
  const results = new Map();

  if (!query) {
    vocabulary.forEach((entry, entryIndex) => {
      results.set(entryIndex, { entry, entryIndex, matchLabel: null, matchForm: null, score: 0 });
    });
  } else if (/[а-яёА-ЯЁ]/.test(query)) {
    const qNorm = normalize(query);
    formIndex.forEach(({ formNorm, form, label, entryIndex }) => {
      let score = 0;
      if (formNorm === qNorm) score = 3;
      else if (formNorm.startsWith(qNorm)) score = 2;
      else if (formNorm.includes(qNorm)) score = 1;
      if (score === 0) return;
      const existing = results.get(entryIndex);
      if (!existing || score > existing.score) {
        results.set(entryIndex, { entry: vocabulary[entryIndex], entryIndex, matchLabel: label, matchForm: form, score });
      }
    });
  } else {
    const qLower = query.toLowerCase();
    vocabulary.forEach((entry, entryIndex) => {
      const esLower = entry.es.toLowerCase();
      let score = 0;
      if (esLower === qLower) score = 3;
      else if (esLower.startsWith(qLower)) score = 2;
      else if (esLower.includes(qLower)) score = 1;
      if (score === 0) return;
      results.set(entryIndex, { entry, entryIndex, matchLabel: null, matchForm: null, score });
    });
  }

  let list = Array.from(results.values());
  if (levelFilter && levelFilter !== "Todos") {
    list = list.filter((r) => r.entry.level === levelFilter);
  }
  if (posFilter && posFilter !== "Todos") {
    list = list.filter((r) => filterGroup(r.entry) === posFilter);
  }
  list.sort((a, b) => b.score - a.score || a.entry.lemma.localeCompare(b.entry.lemma, "ru"));
  return list;
}

function renderVocabCard(result) {
  const { entry, matchLabel, matchForm } = result;
  const card = document.createElement("div");
  card.className = "vocab-card";

  const head = document.createElement("div");
  head.className = "vocab-card-head";
  const posLabel = POS_LABELS[filterGroup(entry)] ?? entry.pos;
  head.innerHTML = `
    <span class="vocab-pos">${posLabel}${entry.gender ? " · " + entry.gender : ""}${entry.aspect ? " · " + entry.aspect : ""}</span>
    <span class="lesson-level">${entry.level}</span>
  `;
  card.appendChild(head);

  const lemmaEl = document.createElement("div");
  lemmaEl.className = "vocab-lemma";
  lemmaEl.innerHTML = `${wrapWords(entry.lemma)}`;
  card.appendChild(lemmaEl);

  const meta = document.createElement("div");
  meta.className = "vocab-meta";
  meta.innerHTML = `
    <span class="wc-ipa">${entry.transliteration}</span>
    <span class="wc-es">${entry.es}</span>
  `;
  card.appendChild(meta);

  if (matchLabel && matchForm && normalize(matchForm) !== normalize(entry.lemma)) {
    const note = document.createElement("p");
    note.className = "vocab-match-note";
    note.innerHTML = `Coincide con: <strong>${matchLabel}</strong> → ${wrapWords(matchForm)}`;
    card.appendChild(note);
  }

  const formsWrap = document.createElement("div");
  formsWrap.className = "vocab-forms";
  entry.forms.forEach((f) => {
    const chip = document.createElement("div");
    const isMatched = matchForm && f.form === matchForm && f.label === matchLabel;
    chip.className = "vocab-form-chip" + (isMatched ? " matched" : "");
    chip.innerHTML = `${wrapWords(f.form)}<small>${f.label}</small>`;
    formsWrap.appendChild(chip);
  });
  card.appendChild(formsWrap);

  return card;
}

export function renderVocabularyPage(vocabulary) {
  const root = document.getElementById("vocab-root");
  const formIndex = buildFormIndex(vocabulary);

  const input = document.getElementById("vocabInput");
  const tabsEl = document.getElementById("vocabLevelTabs");
  const posTabsEl = document.getElementById("vocabPosTabs");
  const grid = document.getElementById("vocabGrid");
  const countEl = document.getElementById("vocabResultCount");

  let activeLevel = "Todos";
  let activePos = "Todos";

  function renderResults() {
    const results = searchVocabulary(vocabulary, formIndex, input.value, activeLevel, activePos);
    grid.innerHTML = "";
    results.forEach((r) => grid.appendChild(renderVocabCard(r)));
    countEl.textContent =
      results.length === 0
        ? "Sin resultados — probá con otra palabra o quitá los filtros."
        : `${results.length} ${results.length === 1 ? "palabra encontrada" : "palabras encontradas"}`;
  }

  const levelOptions = ["Todos", ...levels.map((l) => l.code)];
  levelOptions.forEach((code) => {
    const tab = document.createElement("button");
    tab.className = "level-tab" + (code === "Todos" ? " active" : "");
    tab.type = "button";
    tab.dataset.level = code;
    tab.textContent = code;
    tab.addEventListener("click", () => {
      activeLevel = code;
      tabsEl.querySelectorAll(".level-tab").forEach((t) => t.classList.toggle("active", t.dataset.level === code));
      renderResults();
    });
    tabsEl.appendChild(tab);
  });

  if (posTabsEl) {
    const posCodes = ["Todos", ...posOptions(vocabulary)];
    posCodes.forEach((pos) => {
      const tab = document.createElement("button");
      tab.className = "level-tab" + (pos === "Todos" ? " active" : "");
      tab.type = "button";
      tab.dataset.pos = pos;
      tab.textContent = pos === "Todos" ? "Todos" : POS_LABELS[pos];
      tab.addEventListener("click", () => {
        activePos = pos;
        posTabsEl.querySelectorAll(".level-tab").forEach((t) => t.classList.toggle("active", t.dataset.pos === pos));
        renderResults();
      });
      posTabsEl.appendChild(tab);
    });
  }

  input.addEventListener("input", renderResults);

  renderResults();
}

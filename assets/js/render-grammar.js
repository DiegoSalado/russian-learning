import { levels, lessonsIndex } from "../../content/lessons-index.js";
import { renderGrammarBoxes } from "./render-lesson.js";

// lesson-02-pronouns-questions.html → content/lessons/lesson-02.js
function loadLesson(entry) {
  const num = entry.file.match(/lesson-(\d+)/)[1];
  return import(`../../content/lessons/lesson-${num}.js`).then((m) => m.lesson);
}

function renderTopic(entry, lesson) {
  const details = document.createElement("details");
  details.className = "grammar-topic";
  const summary = document.createElement("summary");
  summary.innerHTML = `
    <span class="grammar-topic-arrow" aria-hidden="true">▸</span>
    <span class="grammar-topic-name"></span>
    <span class="grammar-topic-lesson"></span>
  `;
  summary.querySelector(".grammar-topic-name").textContent = entry.grammarLabel ?? entry.title;
  summary.querySelector(".grammar-topic-lesson").textContent = entry.grammarLabel ? entry.title : "";
  details.appendChild(summary);

  const body = document.createElement("div");
  body.className = "grammar-topic-body";
  const link = document.createElement("a");
  link.className = "grammar-topic-link";
  link.href = `lessons/${entry.file}`;
  link.textContent = "Ir a la lección →";
  body.appendChild(link);
  renderGrammarBoxes(body, lesson.grammarPoint.tables);
  details.appendChild(body);
  return details;
}

export async function renderGrammarPage(root) {
  const entries = lessonsIndex.filter((e) => e.type !== "vocabulary");
  const lessons = await Promise.all(entries.map(loadLesson));
  root.innerHTML = "";
  levels.forEach((lvl) => {
    const topics = entries
      .map((entry, i) => ({ entry, lesson: lessons[i] }))
      .filter(({ entry, lesson }) => entry.level === lvl.code && lesson.grammarPoint?.tables?.length)
      .sort((a, b) => a.entry.order - b.entry.order);
    if (!topics.length) return;
    const group = document.createElement("div");
    group.className = "grammar-level";
    group.innerHTML = `<h2 class="grammar-level-title"></h2>`;
    group.querySelector("h2").textContent = lvl.label;
    topics.forEach(({ entry, lesson }) => group.appendChild(renderTopic(entry, lesson)));
    root.appendChild(group);
  });
}

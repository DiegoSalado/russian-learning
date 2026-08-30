const STORAGE_KEY = "privet-vocab-progress-v1";

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === "object" && parsed.words ? parsed : { words: {} };
  } catch {
    return { words: {} };
  }
}

export function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage no disponible (modo privado, cuota llena, etc.) — la sesión sigue
    // funcionando en memoria, solo no persiste entre visitas.
  }
}

export function getWordProgress(data, wordId) {
  return (
    data.words[wordId] ?? {
      seen: 0,
      known: 0,
      unknown: 0,
      lastStudied: null,
      status: "new", // "new" | "learning" | "known"
    }
  );
}

export function recordSwipe(data, wordId, direction) {
  const wp = { ...getWordProgress(data, wordId) };
  wp.seen += 1;
  wp.lastStudied = new Date().toISOString();
  if (direction === "known") {
    wp.known += 1;
    wp.status = wp.known >= 2 && wp.known > wp.unknown ? "known" : "learning";
  } else {
    wp.unknown += 1;
    wp.status = "learning";
  }
  data.words[wordId] = wp;
  saveProgress(data);
  return wp;
}

export function recordExposure(data, wordId) {
  const wp = { ...getWordProgress(data, wordId) };
  wp.seen += 1;
  wp.lastStudied = new Date().toISOString();
  if (wp.status === "new") wp.status = "learning";
  data.words[wordId] = wp;
  saveProgress(data);
  return wp;
}

export function priorityScore(wp) {
  if (!wp || wp.seen === 0) return 1;
  if (wp.status === "known") return 0;
  const diff = wp.unknown - wp.known;
  return 2 + Math.max(0, diff);
}

export const supportsSpeech = "speechSynthesis" in window;

let cachedVoice = null;
let voicesReady = false;

function resolveVoice() {
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return null;
  voicesReady = true;
  cachedVoice =
    voices.find((v) => v.lang === "ru-RU" && v.name.includes("Google")) ??
    voices.find((v) => v.lang.startsWith("ru")) ??
    null;
  return cachedVoice;
}

export function pickRussianVoice() {
  if (!supportsSpeech) return null;
  if (voicesReady) return cachedVoice;
  return resolveVoice();
}

if (supportsSpeech) {
  resolveVoice();
  speechSynthesis.addEventListener("voiceschanged", resolveVoice);
}

let rate = 1;

export function getRate() {
  return rate;
}

export function toggleRate() {
  rate = rate === 1 ? 0.72 : 1;
  return rate;
}

export function speak(text, { onend } = {}) {
  if (!supportsSpeech) return null;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ru-RU";
  u.rate = rate;
  const voice = pickRussianVoice();
  if (voice) u.voice = voice;
  if (onend) u.onend = onend;
  speechSynthesis.speak(u);
  return u;
}

export function stopSpeaking() {
  if (!supportsSpeech) return;
  speechSynthesis.cancel();
}

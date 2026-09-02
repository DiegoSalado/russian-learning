// Paleta activa del sitio — debe coincidir siempre con el bloque :root
// (sin atributo) que esté activo en assets/css/styles.css. Si cambiás la
// paleta cortando y pegando bloques en ese archivo, actualizá también
// este valor para que el favicon seguir la misma paleta.
export const PALETTE = "rf"; // "current" | "rf" | "ussr"

const FAVICON_TOKENS = {
  current: { board: "#24413A", chalk: "#F5F1E6" },
  rf: { board: "#1E3A5F", chalk: "#F2F5FA" },
  ussr: { board: "#7A1420", chalk: "#F6ECD6" },
};

function faviconSvg({ board, chalk }) {
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">` +
    `<rect width="32" height="32" rx="7" fill="${board}"/>` +
    `<text x="7.5" y="24" font-family="Georgia, 'Times New Roman', serif" font-size="19" font-weight="600" fill="${chalk}">П</text>` +
    `<rect x="12.5" y="4.5" width="7" height="2" rx="1" fill="${chalk}" transform="rotate(-28 16 5.5)"/>` +
    `</svg>`
  );
}

function applyFavicon() {
  const tokens = FAVICON_TOKENS[PALETTE] ?? FAVICON_TOKENS.current;
  const svg = faviconSvg(tokens);
  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.type = "image/svg+xml";
  link.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

applyFavicon();

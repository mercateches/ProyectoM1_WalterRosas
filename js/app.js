/* ==========================================================
   Generador de Paletas de Colores Interactivo
   Archivo: js/app.js
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Referencias al DOM ---------- */
  const paletteEl = document.querySelector('.palette');
  const generatePaletteBtn = document.getElementById('generate-palette-btn');

  const nameTitle = document.querySelector('.palette-toolbar__name h2');
  const editNameBtn = document.querySelector('.palette-toolbar__name button');
  const countSelect = document.querySelector('select[aria-label="Cantidad de colores"]');
  const formatSelect = document.querySelector('select[aria-label="Formato de color"]');

  const [saveBtn, exportBtn] = document.querySelectorAll('.palette-toolbar__actions button');
  const lockedStatus = document.querySelector('.generator-controls__status strong');
  const [undoBtn, redoBtn] = document.querySelectorAll('.generator-controls__history button');

  /* ---------- Estado ---------- */
  let palette = [];      // [{ hex: '#aabbcc', locked: false }]
  let format = 'HEX';    // 'HEX' | 'HSL'
  let undoStack = [];
  let redoStack = [];

  /* ---------- Utilidades de color ---------- */
  const randomHex = () =>
    '#' +
    Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase();

  // Colores más agradables: saturación y luminosidad controladas
  const randomPleasantHex = () => {
    const h = Math.floor(Math.random() * 360);
    const s = 45 + Math.floor(Math.random() * 45); // 45–90
    const l = 35 + Math.floor(Math.random() * 40); // 35–75
    return hslToHex(h, s, l);
  };

  function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    const k = (n) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const toHex = (x) => Math.round(x * 255).toString(16).padStart(2, '0');
    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`.toUpperCase();
  }

  function hexToHsl(hex) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    let h = 0;
    const l = (max + min) / 2;
    const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));

    if (d !== 0) {
      if (max === r) h = ((g - b) / d) % 6;
      else if (max === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h *= 60;
      if (h < 0) h += 360;
    }
    return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  }

  const formatColor = (hex) => (format === 'HSL' ? hexToHsl(hex) : hex);

  // Devuelve negro o blanco según el contraste con el fondo
  function readableTextColor(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? '#111111' : '#FFFFFF';
  }

  /* ---------- Copiar al portapapeles ---------- */
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const temp = document.createElement('textarea');
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      temp.remove();
    }
  }

  function flash(el, message) {
    const original = el.textContent;
    el.textContent = message;
    setTimeout(() => (el.textContent = original), 1000);
  }

  /* ---------- Paleta ---------- */
  const getCount = () => parseInt(countSelect.value, 10) || 6;

  const snapshot = () => palette.map((c) => ({ ...c }));

  function pushHistory() {
    undoStack.push(snapshot());
    if (undoStack.length > 50) undoStack.shift();
    redoStack = [];
  }

  function renderPalette() {
    paletteEl.innerHTML = '';

    palette.forEach((color, index) => {
      const card = document.createElement('article');
      card.className = 'color-card';
      card.style.setProperty('--color', color.hex);
      card.style.setProperty('--contrast', readableTextColor(color.hex));

      /* Zona de color */
      const preview = document.createElement('div');
      preview.className = 'color-preview';

      const number = document.createElement('span');
      number.className = 'color-card__number';
      number.textContent = String(index + 1).padStart(2, '0');

      const lockBtn = document.createElement('button');
      lockBtn.type = 'button';
      lockBtn.className = 'color-card__lock' + (color.locked ? ' is-locked' : '');
      lockBtn.textContent = color.locked ? '🔒' : '🔓';
      lockBtn.setAttribute('aria-pressed', String(color.locked));
      lockBtn.setAttribute(
        'aria-label',
        color.locked ? 'Desbloquear color' : 'Bloquear color'
      );
      lockBtn.addEventListener('click', () => {
        pushHistory();
        palette[index].locked = !palette[index].locked;
        renderPalette();
      });

      const status = document.createElement('span');
      status.className = 'color-card__status';
      status.textContent = color.locked ? 'Bloqueado' : '';

      preview.append(number, lockBtn, status);

      /* Detalles */
      const details = document.createElement('div');
      details.className = 'color-card__details';

      const codeBtn = document.createElement('button');
      codeBtn.type = 'button';
      codeBtn.className = 'color-card__hex';
      codeBtn.textContent = formatColor(color.hex);
      codeBtn.title = 'Haz clic para copiar';
      codeBtn.addEventListener('click', async () => {
        await copyText(formatColor(color.hex));
        flash(codeBtn, 'Copiado ✓');
        setTimeout(() => (codeBtn.textContent = formatColor(color.hex)), 1050);
      });

      // Muestra el formato alterno como referencia secundaria
      const alt = document.createElement('span');
      alt.className = 'color-card__hsl';
      alt.textContent = format === 'HSL' ? color.hex : hexToHsl(color.hex);

      details.append(codeBtn, alt);

      card.append(preview, details);
      paletteEl.appendChild(card);
    });

    updateControls();
  }

  function updateControls() {
    const lockedCount = palette.filter((c) => c.locked).length;
    lockedStatus.textContent =
      lockedCount === 1 ? '1 color bloqueado' : `${lockedCount} colores bloqueados`;

    undoBtn.disabled = undoStack.length === 0;
    redoBtn.disabled = redoStack.length === 0;
  }

  function generatePalette({ record = true } = {}) {
    if (record) pushHistory();

    const count = getCount();
    const next = [];
    for (let i = 0; i < count; i++) {
      const existing = palette[i];
      next.push(existing && existing.locked ? existing : { hex: randomPleasantHex(), locked: false });
    }
    palette = next;
    renderPalette();
  }

  generatePaletteBtn.addEventListener('click', () => generatePalette());

  /* ---------- Cantidad y formato ---------- */
  countSelect.addEventListener('change', () => {
    pushHistory();
    const count = getCount();
    if (palette.length > count) {
      palette = palette.slice(0, count);
    } else {
      while (palette.length < count) {
        palette.push({ hex: randomPleasantHex(), locked: false });
      }
    }
    renderPalette();
  });

  formatSelect.addEventListener('change', () => {
    format = formatSelect.value;
    renderPalette();
  });

  /* ---------- Deshacer / Rehacer ---------- */
  undoBtn.addEventListener('click', () => {
    if (!undoStack.length) return;
    redoStack.push(snapshot());
    palette = undoStack.pop();
    syncCountSelect();
    renderPalette();
  });

  redoBtn.addEventListener('click', () => {
    if (!redoStack.length) return;
    undoStack.push(snapshot());
    palette = redoStack.pop();
    syncCountSelect();
    renderPalette();
  });

  function syncCountSelect() {
    const option = [...countSelect.options].find(
      (o) => parseInt(o.value || o.textContent, 10) === palette.length
    );
    if (option) countSelect.value = option.value;
  }

  /* ---------- Nombre de la paleta ---------- */
  editNameBtn.addEventListener('click', () => {
    const current = nameTitle.textContent.trim();
    const name = prompt('Nombre de la paleta:', current);
    if (name !== null && name.trim() !== '') {
      nameTitle.textContent = name.trim();
    }
  });

  /* ---------- Guardar y exportar ---------- */
  const STORAGE_KEY = 'paletas-guardadas';

  saveBtn.addEventListener('click', () => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    saved.push({
      name: nameTitle.textContent.trim(),
      colors: palette.map((c) => c.hex),
      date: new Date().toISOString(),
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    flash(saveBtn, 'Guardada ✓');
  });

  exportBtn.addEventListener('click', () => {
    const data = {
      name: nameTitle.textContent.trim(),
      colors: palette.map((c) => ({ hex: c.hex, hsl: hexToHsl(c.hex) })),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${data.name.toLowerCase().replace(/\s+/g, '-')}.json`;
    link.click();
    URL.revokeObjectURL(url);
  });

  /* ---------- Atajo de teclado: Espacio ---------- */
  document.addEventListener('keydown', (e) => {
    if (e.code !== 'Space') return;
    const tag = e.target.tagName;
    if (['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(tag)) return;
    e.preventDefault();
    generatePalette();
  });

  /* ---------- Inicio ---------- */
  generatePalette({ record: false });
});
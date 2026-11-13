// Логіка сторінки. Переклади лежать у translations.js, мовою керує i18next.

const MAX_DEPTH = 10935; // Маріанський жолоб, у метрах
const STORAGE_KEY = 'credico-lang';

const pairsContainer = document.getElementById('pairs');
const hero = document.getElementById('hero');
const depthValue = document.getElementById('depth-value');
const zoneName = document.getElementById('zone-name');
const switchButtons = document.querySelectorAll('.lang-switch button');
const wave = document.querySelector('.lang-wave');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Підставляємо переклади в усі елементи з data-i18n:
// "ключ" замінює текст, "[атрибут]ключ" замінює значення атрибута
function localizeDom() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const attrMatch = el.dataset.i18n.match(/^\[(.+?)\](.+)$/);
    if (attrMatch) {
      el.setAttribute(attrMatch[1], i18next.t(attrMatch[2]));
    } else {
      el.textContent = i18next.t(el.dataset.i18n);
    }
  });
}

// Мікс-лабораторія: картки «океан ↔ кібернетика»
function renderPairs() {
  // запам’ятовуємо відкриті картки, щоб зміна мови їх не скидала
  const wasOpen = Array.from(pairsContainer.children)
    .map(card => card.getAttribute('aria-pressed') === 'true');
  pairsContainer.innerHTML = '';

  i18next.t('js.pairs', { returnObjects: true }).forEach(([oceanTerm, cyberTerm, description], index) => {
    const card = document.createElement('button');
    card.className = 'pair';
    card.setAttribute('aria-pressed', String(Boolean(wasOpen[index])));
    card.style.setProperty('--h', (index * 58 + 170) % 360);

    card.innerHTML = `
      <span class="pair-front">
        <small>${i18next.t('js.ocean')}</small>
        <b>${oceanTerm}</b>
        <i>${i18next.t('js.hint')}</i>
      </span>
      <span class="pair-back">
        <small>${i18next.t('js.cyber')}</small>
        <b>${cyberTerm}</b>
        <i>${description}</i>
      </span>`;

    card.addEventListener('click', () => {
      const isOpen = card.getAttribute('aria-pressed') === 'true';
      card.setAttribute('aria-pressed', String(!isOpen));
    });

    pairsContainer.appendChild(card);
  });
}

// Бульбашки на першому екрані
for (let i = 0; i < 16; i++) {
  const bubble = document.createElement('i');
  const size = 8 + Math.random() * 34;
  bubble.className = 'bubble';
  bubble.style.cssText = `left: ${Math.random() * 100}%; width: ${size}px; height: ${size}px; ` +
    `animation-duration: ${9 + Math.random() * 10}s; animation-delay: -${Math.random() * 14}s;`;
  hero.appendChild(bubble);
}

// Лічильник глибини
function getZoneName(depth) {
  const zones = i18next.t('js.zones', { returnObjects: true });
  if (depth < 200) return zones[0];
  if (depth < 1000) return zones[1];
  if (depth < 4000) return zones[2];
  if (depth < 6000) return zones[3];
  return zones[4];
}

function updateDepth() {
  if (!i18next.isInitialized) return;

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  const depth = Math.round(progress * MAX_DEPTH / 5) * 5;

  depthValue.textContent = depth.toLocaleString(i18next.t('js.locale'));
  zoneName.textContent = getZoneName(depth);
}

// Усе, що треба оновити після зміни мови
function applyLanguage() {
  const lang = i18next.resolvedLanguage;
  document.documentElement.lang = lang;
  document.title = i18next.t('meta.title');

  localizeDom();
  renderPairs();
  updateDepth();

  switchButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });
}

// Анімація переключання: хвиля закриває екран, а мова міняється під нею
let waveIsRunning = false;

function changeLanguage(newLang) {
  if (newLang === i18next.resolvedLanguage || waveIsRunning) return;

  // тим, хто вимкнув анімацію в системі, міняємо мову одразу
  if (prefersReducedMotion.matches) {
    i18next.changeLanguage(newLang);
    return;
  }

  waveIsRunning = true;
  wave.classList.add('is-running');

  // кнопка перемикається одразу, щоб відгук був миттєвим
  switchButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === newLang));
  });

  // приблизно на 550-й мілісекунді хвиля повністю закриває екран
  setTimeout(() => i18next.changeLanguage(newLang), 550);

  wave.addEventListener('animationend', () => {
    wave.classList.remove('is-running');
    waveIsRunning = false;
  }, { once: true });
}

switchButtons.forEach(button => {
  button.addEventListener('click', () => changeLanguage(button.dataset.lang));
});
window.addEventListener('scroll', updateDepth, { passive: true });

// Запуск i18next. Мову визначає i18next-browser-languagedetector:
// спочатку те, що відвідувач вибирав раніше (localStorage), потім мова браузера.
const detector = window.i18nextBrowserLanguageDetector;
if (detector) i18next.use(detector);

i18next
  .init({
    resources,
    supportedLngs: ['uk', 'en'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    fallbackLng: 'uk',
    lng: detector ? undefined : 'uk',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: STORAGE_KEY,
      caches: ['localStorage']
    }
  })
  .then(() => {
    applyLanguage();
    i18next.on('languageChanged', applyLanguage);
  });

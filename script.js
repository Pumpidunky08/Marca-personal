// script.js – Scroll effects, section reveal, dynamic subtitle & header color, skill bar animation

// ---------- Config ----------
const subtitles = [
  "Estudiante de Ingeniería de Sistemas – Universidad Javeriana", // default / home
  "Sobre mí",
  "Habilidades",
  "Contacto"
];
const headerColors = [
  "var(--color-primary)", // home
  "#006699",
  "#0099CC",
  "#004080"
];

// ---------- Helper Functions ----------
function setHeader(subIdx) {
  const header = document.getElementById('top-header');
  const subtitleEl = document.getElementById('subtitle');
  if (!header || !subtitleEl) return;
  subtitleEl.textContent = subtitles[subIdx] || subtitles[0];
  header.style.backgroundColor = headerColors[subIdx] || headerColors[0];
}

// ---------- Section Reveal & Scroll Detection ----------
const sections = document.querySelectorAll('.section');
const observerOptions = {
  root: null,
  threshold: 0.2
};
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Determine which section index for subtitle change
      const id = entry.target.id;
      let idx = 0; // default home
      switch (id) {
        case 'about': idx = 1; break;
        case 'skills': idx = 2; break;
        case 'contact': idx = 3; break;
        default: idx = 0;
      }
      setHeader(idx);
    }
  });
}, observerOptions);
sections.forEach(sec => sectionObserver.observe(sec));

// ---------- Skill Bar Animation ----------
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillEl = entry.target;
      const level = skillEl.getAttribute('data-level') || "0";
      skillEl.style.setProperty('--skill-level', level + "%");
      skillEl.classList.add('visible');
    }
  });
}, { root: null, threshold: 0.3 });

const skillElements = document.querySelectorAll('.skill');
skillElements.forEach(el => skillObserver.observe(el));

// ---------- Initial Call (in case page loads already scrolled) ----------
window.addEventListener('load', () => {
  // Trigger header for top of page
  setHeader(0);
});

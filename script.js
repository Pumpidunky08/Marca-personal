// script.js – Apple‑style scroll‑snap pages with animated skill bars

// Helper: add "visible" class to pages when they enter the viewport
const pages = document.querySelectorAll('.page');
const pageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { root: null, threshold: 0.5 });
pages.forEach(p => pageObserver.observe(p));

// Skill bar animation – runs when the skills page becomes visible
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillEl = entry.target;
      const level = skillEl.getAttribute('data-level') || '0';
      const color = skillEl.getAttribute('data-color') || '#3572A5';
      const fill = skillEl.querySelector('.fill');
      if (fill) {
        fill.style.width = level + '%';
        fill.style.backgroundColor = color;
      }
      // Keep the skill element visible so it doesn't animate again unnecessarily
      skillEl.classList.add('visible');
    }
  });
}, { root: null, threshold: 0.3 });

const skillElems = document.querySelectorAll('.skill');
skillElems.forEach(s => skillObserver.observe(s));

// Ensure the first page is visible on load (in case the browser starts scrolled)
window.addEventListener('load', () => {
  pages[0]?.classList.add('visible');
});

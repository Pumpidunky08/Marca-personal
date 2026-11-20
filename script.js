// Animaciones de entrada y barras de habilidades.
// Si IntersectionObserver no está disponible, el contenido permanece visible.

document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const skills = document.querySelectorAll('.skill');
    const year = document.querySelector('#current-year');

    if (year) year.textContent = new Date().getFullYear();

    if (!('IntersectionObserver' in window)) {
        pages.forEach(page => page.classList.add('visible'));
        skills.forEach(skill => revealSkill(skill));
        return;
    }

    const pageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    pages.forEach(page => pageObserver.observe(page));

    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealSkill(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    skills.forEach(skill => skillObserver.observe(skill));
});

function revealSkill(skill) {
    const rawLevel = Number(skill.dataset.level);
    const level = Number.isFinite(rawLevel) ? Math.min(100, Math.max(0, rawLevel)) : 0;
    const color = skill.dataset.color || '#69b7ff';
    const bar = skill.querySelector('.skill-bar');

    skill.style.setProperty('--skill-level', `${level}%`);
    skill.classList.add('visible');

    if (bar) {
        bar.setAttribute('aria-valuenow', String(level));
        const fill = bar.querySelector('.fill');
        if (fill) fill.style.backgroundColor = color;
    }
}

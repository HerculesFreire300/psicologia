/* ============================================================
   smooth-scroll.js — Rolagem Suave para Âncoras
   
   Intercepta cliques em links âncora (href="#...") e
   aplica scroll suave considerando a altura da navbar fixa.
   ============================================================ */

function initSmoothScroll() {
  const NAVBAR_HEIGHT = 80; // px — margem extra para não ficar sob a navbar

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const targetTop = target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', initSmoothScroll);

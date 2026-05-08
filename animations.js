/* ============================================================
   animations.js — Scroll Reveal (Intersection Observer)
   
   Todos os elementos com class="reveal" ficam invisíveis
   inicialmente e aparecem com animação ao entrar na tela.
   
   Use as classes de delay para escalonamento:
     .d1 → delay 0.1s
     .d2 → delay 0.2s
     .d3 → delay 0.3s
     .d4 → delay 0.4s
   ============================================================ */

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Opcional: para de observar após revelar (melhor performance)
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initScrollReveal);

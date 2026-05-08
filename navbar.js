/* ============================================================
   navbar.js — Comportamento da Navbar
   - Scroll: adiciona classe .scrolled
   - Menu mobile: toggle abrir/fechar
   ============================================================ */

// ── Scroll: navbar fica mais compacta ──────────────────────
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// ── Toggle menu mobile ──────────────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobMenu');
  if (menu) menu.classList.toggle('open');
}

function closeMenu() {
  const menu = document.getElementById('mobMenu');
  if (menu) menu.classList.remove('open');
}

// Fecha ao clicar fora do menu
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobMenu');
  const hamburger = document.querySelector('.hamburger');
  if (
    menu &&
    menu.classList.contains('open') &&
    !menu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    menu.classList.remove('open');
  }
});

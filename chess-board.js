/* ============================================================
   chess-board.js — Tabuleiro de Xadrez Decorativo
   Gera um grid 6x6 com casas aleatoriamente coloridas,
   incluindo casas douradas para destaque visual.
   ============================================================ */

function buildChessBoard() {
  const board = document.getElementById('chessBoard');
  if (!board) return;

  const TOTAL_SQUARES = 36;           // 6 × 6
  const GOLDEN_INDICES = [7, 16, 20]; // Posições que ficam douradas

  for (let i = 0; i < TOTAL_SQUARES; i++) {
    const square = document.createElement('div');
    square.className = 'csq';

    const row = Math.floor(i / 6);
    const col = i % 6;

    if (GOLDEN_INDICES.includes(i)) {
      square.classList.add('gold-sq');
    } else if ((row + col) % 2 === 0) {
      square.classList.add('dark');
    } else {
      square.classList.add('light');
    }

    board.appendChild(square);
  }

  // Animação sutil nas casas douradas ao hover do board
  board.addEventListener('mouseenter', () => {
    board.querySelectorAll('.gold-sq').forEach((sq, i) => {
      sq.style.transition = `opacity 0.3s ease ${i * 0.1}s`;
      sq.style.opacity = '1';
    });
  });
  board.addEventListener('mouseleave', () => {
    board.querySelectorAll('.gold-sq').forEach(sq => {
      sq.style.opacity = '0.75';
    });
  });
}

document.addEventListener('DOMContentLoaded', buildChessBoard);

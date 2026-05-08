/* ============================================================
   agenda.js — Agenda Interativa de Consultas
   
   Horários disponíveis:
     Segunda-feira: 13h, 14h
     Sexta-feira:   13h, 14h, 15h, 16h, 17h

   Ao clicar em horário disponível → abre WhatsApp com
   mensagem automática personalizada.
   ============================================================ */

// Configuração dos horários
const SCHEDULE = {
  hours: ['08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h'],
  days:  ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],

  // Horários disponíveis por dia
  // Se o dia não constar aqui (ou array vazio) = totalmente ocupado
  available: {
    'Segunda': ['13h', '14h'],
    'Terça':   [],
    'Quarta':  [],
    'Quinta':  [],
    'Sexta':   ['13h', '14h', '15h', '16h', '17h'],
  },
};

// Número WhatsApp (apenas dígitos, com DDI)
const WA_NUMBER = '556599308510';

// Monta a mensagem automática para o WhatsApp
function buildWhatsAppURL(hour, day) {
  const msg = `Olá, gostaria de agendar uma consulta no horário das ${hour} na ${day}-feira.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// Verifica se o slot está disponível
function isAvailable(day, hour) {
  const slots = SCHEDULE.available[day] || [];
  return slots.includes(hour);
}

// Constrói o grid da agenda dinamicamente
function buildAgenda() {
  const grid = document.getElementById('agGrid');
  if (!grid) return;

  // ── Linha de cabeçalho ──────────────────────────────────
  const headerTime = document.createElement('div');
  headerTime.className = 'ag-ch';
  headerTime.textContent = 'Horário';
  grid.appendChild(headerTime);

  SCHEDULE.days.forEach(day => {
    const cell = document.createElement('div');
    cell.className = 'ag-ch';
    cell.textContent = day;
    grid.appendChild(cell);
  });

  // ── Linhas de horário ────────────────────────────────────
  SCHEDULE.hours.forEach(hour => {
    // Coluna de hora
    const timeCell = document.createElement('div');
    timeCell.className = 'ag-time';
    timeCell.textContent = hour;
    grid.appendChild(timeCell);

    // Colunas de dias
    SCHEDULE.days.forEach(day => {
      const slot = document.createElement('div');
      const avail = isAvailable(day, hour);

      slot.className = 'slot ' + (avail ? 'avail' : 'busy');

      if (avail) {
        slot.setAttribute('role', 'button');
        slot.setAttribute('aria-label', `Agendar ${day}-feira às ${hour}`);
        slot.setAttribute('tabindex', '0');

        // Clique → WhatsApp
        slot.addEventListener('click', () => {
          window.open(buildWhatsAppURL(hour, day), '_blank');
        });

        // Acessibilidade: Enter/Space
        slot.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.open(buildWhatsAppURL(hour, day), '_blank');
          }
        });
      }

      grid.appendChild(slot);
    });
  });
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', buildAgenda);

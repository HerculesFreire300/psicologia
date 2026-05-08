# 🧠 Psicólogo Hércules Freire — Site Profissional

Site premium desenvolvido para o psicólogo Hércules Freire,
com foco em Logoterapia, Dependência Química, Psicologia Infantil,
ABA/TEA, Xadrez Terapêutico e mais.

---

## 📁 Estrutura de Pastas

```
hercules-site/
│
├── index.html              ← Página principal (abra aqui)
│
├── css/
│   ├── variables.css       ← Tokens de design (cores, sombras, raios)
│   ├── base.css            ← Reset, tipografia, botões globais
│   ├── navbar.css          ← Navbar fixa + menu mobile + botão WhatsApp flutuante
│   ├── hero.css            ← Seção Hero + seção Logoterapia
│   ├── sections.css        ← Xadrez, Sobre, Localização, CTA Final
│   ├── cards.css           ← Cards de Áreas de Atuação + Depoimentos
│   ├── agenda.css          ← Estilos da Agenda Interativa
│   ├── footer.css          ← Rodapé
│   ├── animations.css      ← Keyframes + classes .reveal e delays
│   └── responsive.css      ← Media queries (tablet e mobile)
│
├── js/
│   ├── navbar.js           ← Scroll compacto + toggle menu mobile
│   ├── agenda.js           ← Constrói agenda e links WhatsApp dinâmicos
│   ├── chess-board.js      ← Tabuleiro de xadrez decorativo (6x6)
│   ├── animations.js       ← Scroll Reveal via IntersectionObserver
│   └── smooth-scroll.js    ← Rolagem suave em links âncora
│
└── assets/
    ├── foto-hercules.png   ← Foto profissional do psicólogo
    └── unimed-logo.png     ← Logo da Unimed (convênio)
```

---

## 🚀 Como rodar no VS Code

### Opção 1 — Live Server (recomendado)
1. Instale a extensão **Live Server** (Ritwick Dey)
2. Clique com o botão direito em `index.html`
3. Selecione **"Open with Live Server"**
4. O site abre automaticamente no navegador em `localhost:5500`

### Opção 2 — Abrir direto
1. Apenas abra o arquivo `index.html` no navegador
2. (As imagens podem não carregar por restrição CORS — prefira Live Server)

---

## ✏️ Personalizações comuns

### Trocar foto do psicólogo
Substitua o arquivo `assets/foto-hercules.png` pela nova foto.
Mantenha o mesmo nome ou atualize o `src` no `index.html`.

### Trocar número de WhatsApp
Busque e substitua em todos os arquivos:
```
556599308510  →  55XXXXXXXXXXX
```
(Formato: 55 + DDD + número, sem espaços ou traços)

### Adicionar/remover horários disponíveis
Edite o objeto `SCHEDULE.available` em `js/agenda.js`:
```js
available: {
  'Segunda': ['13h', '14h'],
  'Sexta':   ['13h', '14h', '15h', '16h', '17h'],
}
```

### Alterar cores
Edite as variáveis CSS em `css/variables.css`.
Todas as cores do site usam essas variáveis.

---

## 🎨 Paleta de Cores

| Variável      | Cor           | Uso                    |
|---------------|---------------|------------------------|
| `--deep`      | `#0d2137`     | Fundos escuros         |
| `--petrol`    | `#1a4a6b`     | Azul petróleo          |
| `--teal`      | `#2a7a8a`     | Destaques teal         |
| `--sage`      | `#4a8c7a`     | Verde sálvia           |
| `--gold`      | `#c9a84c`     | Dourado premium        |
| `--cream`     | `#f8f5ef`     | Fundo principal        |

---

## 📱 Responsividade

| Breakpoint    | Layout                   |
|---------------|--------------------------|
| > 1024px      | Desktop — 3 colunas      |
| ≤ 1024px      | Tablet — 2 colunas       |
| ≤ 768px       | Mobile — 1 coluna        |
| ≤ 480px       | Mobile pequeno           |

---

## 🔍 SEO Incluído

- Meta tags completas (description, keywords, robots)
- Open Graph (compartilhamento em redes sociais)
- Schema Markup (JSON-LD) para Psicólogo
- HTML semântico (section, nav, footer, h1→h3)
- Texto alt nas imagens
- `loading="lazy"` no iframe do mapa

---

## 📞 Contato Configurado

- **WhatsApp:** (65) 99308-5010
- **Endereço:** CPA III, Cuiabá – MT
- **Convênio:** Unimed
- **Atendimento:** Presencial e Online

# Site — Hercules Freire | Psicólogo Clínico

## Estrutura do projeto

Todos os arquivos ficam juntos, na mesma pasta:

```
projeto-site/
├── index.html   → página principal
├── style.css    → todo o estilo visual do site
├── script.js    → menu mobile, acordeão do FAQ, scroll, animações
├── hero.jpg     → foto usada na seção inicial (hero)
├── lab.jpg      → foto usada na seção "Abordagem / Formação"
└── README.md
```

## Como abrir no Visual Studio Code

1. Extraia esta pasta em qualquer lugar do seu computador.
2. Abra o VS Code → **File > Open Folder** → selecione a pasta `projeto-site`.
3. Instale a extensão **Live Server** (Ritwick Dey), se ainda não tiver.
4. Clique com o botão direito em `index.html` → **Open with Live Server**.
5. O site abre no navegador e atualiza sozinho a cada alteração salva.

## O que ainda falta personalizar antes de publicar

- **CRP**: já preenchido como `18/05709` em duas partes do site (seção "Sobre" e rodapé) — confira se o formato de exibição é o que o Hercules usa.
- **Domínio real**: dentro de `index.html`, procure por `hercuslesfreirepsicologo.com.br` (aparece na tag `canonical` e no JSON-LD de SEO) e troque pelo domínio definitivo quando o site for publicado.
- **Imagem do schema.org**: o campo `"image"` dentro do bloco `<script type="application/ld+json">` também está com uma URL placeholder — depois de publicar, aponte para a URL real da foto hospedada no domínio.
- **Depoimentos**: os três depoimentos na seção "Depoimentos" são exemplos ilustrativos (nomes fictícios). Troque por relatos reais e autorizados pelos pacientes antes de publicar, respeitando o sigilo profissional (evite nome completo e foto de paciente).
- **WhatsApp**: o número (65) 99308-5010 já está linkado em todos os botões (`wa.me/5565993085010`) e no botão flutuante.

## Publicando o site

Como é um site estático (HTML/CSS/JS puro, sem back-end), pode subir direto em qualquer hospedagem simples: Hostinger, Netlify, Vercel, GitHub Pages, ou dentro do próprio painel da hospedagem que a agência já usa. Basta enviar todos os arquivos desta pasta juntos, sem subpastas.

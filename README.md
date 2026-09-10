# 🏨 Pousada Ubatuba Itaguá - Site Oficial & Sistema de Simulador de Reservas

Este é um projeto de uma plataforma web institucional, responsiva e de alta conversão desenvolvida para a **Pousada Ubatuba Itaguá**, localizada na Rua Tapajós, 171 - Itaguá, Ubatuba/SP. 

O site foi construído focando na **experiência do usuário (UX)** no setor de turismo, oferecendo navegação fluida, apresentação das acomodações e um sistema dinâmico de simulação de disponibilidade conectado diretamente ao canal de atendimento via WhatsApp.

---

## 🚀 Principais Funcionalidades

* **Design Náutico e Elegante:** Paleta de cores inspirada na identidade de praia do Itaguá (azul marinho, tons de oceano e areia clean).
* **Estrutura SPA (Single Page Application):** Todo o conteúdo essencial é acessível de maneira rápida e sem recarregamentos em uma única página.
* **Seção de Acomodações:** Apresentação em cards responsivos das três principais suítes (Standard, Adaptada e Quádrupla Família).
* **Motor de Validação de Datas (JavaScript):**
  * Bloqueio inteligente para impedir reservas com datas no passado.
  * Verificação lógica para garantir que a data de saída seja posterior à data de entrada.
* **Integração Inteligente com WhatsApp:** Ao encontrar uma data disponível, o sistema gera dinamicamente um link com uma mensagem personalizada contendo o quarto escolhido e as datas exatas para fechamento direto no WhatsApp da pousada.
* **Persistência de Dados:** Uso de `localStorage` para simular o armazenamento dos dados de intenção de reserva no navegador do usuário.
* **Layout 100% Responsivo:** Adaptado perfeitamente para visualização em computadores, tablets e smartphones.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias nativas do desenvolvimento web front-end, garantindo excelente performance e leveza no carregamento:

* **HTML5:** Estruturação semântica de todas as seções da página.
* **CSS3:** Estilização customizada, variáveis de design system, efeitos de transição suave nos botões e regras de media queries (responsividade).
* **JavaScript Vanilla (Puro):** Lógica de negócios para tratamento das regras do calendário, cálculos de datas e manipulação dinâmica do DOM.
* **FontAwesome:** Biblioteca externa utilizada para a renderização de ícones modernos de comunicação e recursos.

---

## 📁 Estrutura de Arquivos

O projeto está organizado em uma arquitetura limpa de arquivos separados:

```text
├── index.html       # Estrutura principal da página e textos informativos
├── style.css        # Identidade visual, cores, tipografia e responsividade
├── script.js        # Regras de negócio da reserva e integração com WhatsApp
└── fundo-pousada.jpg # Imagem de alta definição utilizada no banner principal (Hero)
```

---

## 💻 Como Executar o Projeto Localmente

1. Faça o download ou clone a pasta contendo os arquivos.
2. Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estejam exatamente **na mesma pasta**.
3. Adicione uma imagem com o nome `fundo-pousada.jpg` no mesmo diretório para servir de plano de fundo do cabeçalho.
4. Dê um duplo clique no arquivo `index.html` para abrir o site instantaneamente em qualquer navegador de sua preferência.

---

## 📞 Canais de Atendimento Cadastrados

* **Endereço:** Rua Tapajós, 171 - Itaguá, Ubatuba - SP
* **WhatsApp:** (12) 99247-7869
* **Telefone Fixo:** (12) 3832-5039

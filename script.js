/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/


const cards = {
  arco: ["Crescimento - Uma década", "Crescimento - Duas gerações", "Crescimento - Um século", "Crescimento - Um milênio",
        //"Colapso - Uma década", "Colapso - Duas gerações", "Colapso - Um século", "Colapso - Um milênio",
        "Disciplina - Uma década",  "Disciplina - Duas gerações", "Disciplina - Um século", "Disciplina - Um milênio",
        "Transformação - Uma década", "Transformação - Duas gerações","Transformação - Um século","Transformação - Um milênio"], /*o tipo de futuro de onde a coisa vem e o quao distante está de hoje*/
  terreno: ["Fissura", "Fluxo", "Acúmulo", "Trama", "Ressonância", "Ruptura"], /*contexto temático ou local onde o objeto poderia ser encontrado no futuro*/
  objeto: ["Uma instalação para incorporar cultura ancestral urbana", "Uma instalação sobre escuta, memória e reparação", "Uma instalação para fortalecer o convívio e reciprocidade com a natureza", "Uma instalação dedicada a valorizar o movimento do corpo e rituais", "Uma instalação como espaço para a oralidade intergeracional", "Uma instalação que debate a transição climática"], /*o foco para a imaginação: um artefato específico que revel alguma coisa sobre como esse futuro é diferente de hoje*/ 
  atmosfera: ["Esperança", "Calma", "Otimismo", "Diversão", "Fascinação", "Bem-estar"] /*qual é o sentimento que aflora ao experienciar essa coisa do futuro*/
};

const drawn = {};

function drawCard(type) {
  const options = cards[type];
  const random = options[Math.floor(Math.random() * options.length)];
  drawn[type] = random;

  renderDrawnCards();
}

function renderDrawnCards() {
  const ul = document.getElementById('drawn-cards');
  ul.innerHTML = ''; // Limpa

  Object.keys(drawn).forEach(type => {
    const li = document.createElement('li');
    li.textContent = `${type.toUpperCase()}: ${drawn[type]}`;
    ul.appendChild(li);
  });
}


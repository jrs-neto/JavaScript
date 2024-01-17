// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
  link.classList.remove('ativo');
  })
  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
  link.addEventListener('click',handleLink);
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const allElements = document.querySelectorAll('body *');

function handleElement(event) {
  event.currentTarget.remove();
}

// allElements.forEach((element) => {
//   element.addEventListener('click',handleElement )
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior');
  }
}

window.addEventListener('keydown', handleClickT);

//Minha resolução
// const selectBody = document.body;

// function textUppercase(event) {
//   if(event.key === 't') {
//     document.body.style.fontSize = '70px';
//   } else if(event.key === 'u') {
//     document.body.style.fontSize = 'medium';
//   }
// }

// window.addEventListener('keydown', textUppercase);


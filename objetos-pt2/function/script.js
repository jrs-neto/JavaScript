// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos2 = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos2, (acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);
console.log(totalCaracteres);

// Minha resolução
const paragrafos = document.querySelectorAll('p');
const arrayP = Array.from(paragrafos)

const somaCaracteres = arrayP.reduce((acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0)

console.log(somaCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function createElement(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}
console.log(createElement('li', 'azul', 'Esse é o conteúdo'));


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = createElement.bind(null, 'h1', 'titulo');

const cursosJS = h1Titulo('Cursos de JavaScript');
const cursosHTML = h1Titulo('Cursos de HTML');

console.log(cursosJS, cursosHTML);

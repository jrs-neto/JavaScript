// function createButton(text) {
//   function element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     return buttonElement;
//   }

//   return Object.freeze({
//     text,
//     element
//   })
// }

// Object.freeze() impede que os objetos sejam alterados

// const btnComprar = createButton('Comprar');
// const btnVender = createButton('Vender');

// btnComprar.text = 'Novo texto';
// btnComprar.element = 'Novo texto';

// console.log(btnComprar, btnVender);

// variável privada
// function criarPessoa(nome, sobrenome) {
//   const nomeCompleto = `${nome} ${sobrenome}`;

//   function andar() {
//     return `${nomeCompleto} andou`;
//   }
//   function nadar() {
//     return `${nomeCompleto} nadou`;
//   }
//   return {
//     nome,
//     sobrenome,
//     andar,
//     nadar,
//   }
// }

// const designer = criarPessoa('André', 'Rafael');
// console.log(designer.andar());
// console.log(designer.nadar());

// 1° forma
// function Pessoa(nome) {
//   if(!(this instanceof Pessoa))
//   return new Pessoa(nome)
//   this.nome = nome;
// }

// Pessoa.prototype.andar = function() {
//   return `${this.nome} andou`;
// }

// const designer = Pessoa('André');
// console.log(designer);

// 2° forma nova do ES6
function Pessoa(nome) {
  if(!new.target)
  return new Pessoa(nome)
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`;
}

const designer = Pessoa('André');
console.log(designer);
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.fullName = function() {
  return `${this.nome} ${this.sobrenome}`
}

const jose = new Pessoa('José', 'Rodrigues', 30);
console.log(jose);


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(NodeList.prototype, Object.getOwnPropertyNames(NodeList.prototype));

console.log(HTMLCollection.prototype, Object.getOwnPropertyNames(HTMLAllCollection.prototype));

console.log(Document.prototype, Object.getOwnPropertyNames(Document.prototype));


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li.constructor.name; // HTMLLIElement
li.click.constructor.name; // Function
li.innerText.constructor.name; // String
li.value.constructor.name; // Number
li.hidden.constructor.name; // Boolean
li.offsetLeft.constructor.name; // Number
li.click().constructor.name; // Undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name // String

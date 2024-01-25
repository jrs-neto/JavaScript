function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function() {
    return 'Abraçou';
  }
  this.andar = function() {
    return 'Andou pelo objeto';
  }
}

const andre = new Pessoa('André', 28);
console.log(andre);
console.log(andre.abracar());

Pessoa.prototype.andar = function() {
  return this.nome + ' Pessoa andou';
}
console.log(andre.andar()); // Primeiro ele procura o método dentro da função e depois procura no prototype, nesse caso está executando o método de dentro da função, pois ele existe lá dentro.

Pessoa.prototype.nadar = function() {
  return this.nome + ' Pessoa nadou';
}
console.log(andre.nadar());

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');
console.log(lista) // Retorna uma NodeList

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

console.log(listaArray); // Retorna uma Array
console.log(listaArray2); // Retorna uma Array

//Obs: Uma Array e uma NodeList tem métodos e propriedades diferentes.

// Retorna uma lista com métodos / propriedades
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(andre));
console.log(Object.getOwnPropertyNames(Pessoa.prototype));

const carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return 'Oi';
  }
}

console.log(carro.andar.constructor);
console.log(carro.andar.constructor.name);
console.log(carro.andar().constructor.name);
console.log(carro.preco.constructor.name);
console.log(carro.constructor.name);
console.log(carro.marca.constructor.name);

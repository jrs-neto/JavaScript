// const perimetro = new Function('lado', 'return lado * 4');
// console.log(perimetro(5));

// function somar(n1, n2, n3, n4) {
//   return n1 + n2;
// }
// console.log(somar.length);
// console.log(somar.name);

// function darOi(nome, idade) {
//   console.log('Oi para você ' + nome + idade);
// }

// darOi.call(null, 'José', 30);

// function descricaoCarro(velocidade) {
//   console.log(this);
//   console.log(this.marca + ' ' + this.ano + velocidade);
// }
// descricaoCarro.call({marca: 'Honda', ano: 2015}, 100);

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pêra'];

// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// })

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//   console.log(this);
//   this.element.classList.add(classe)
// }

// const li = {
//   element: document.querySelector('li')
// }
// Dom.prototype.ativo.call(li, 'ativar');

// const ul = new Dom('ul');
// ul.ativo('ativo')


// ul.ativo.call(li, 'ativo');

const frutas = ['Uva', 'Maçã', 'Banana'];

Array.prototype.pop.call(frutas);
frutas.pop();
console.log(frutas);

const arrayLike = {
  0: 'Item 1',
  1: 'Item 2',
  2: 'Item 3',
  length: 3,
}

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains('ativo');
})

console.log(filtro);

const numeros = [3,4,6,1,34,44,32];
Math.max.apply(null, numeros); // O método apply consegue receber uma array
Math.max.call(null, 3, 4, 5, 6, 7, 20);

const filtro2 = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains('ativo');
})

console.log(filtro2());

const $ = document.querySelectorAll.bind(document);
console.log($('li'));

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`
  }
}
// console.log(carro);

const honda = {
  marca: 'Honda'
}

const acelerarHonda = carro.acelerar.bind(honda);
console.log(acelerarHonda(300, 20));

function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

console.log(imc(1.80, 70)); // 21.6
console.log(imc180(70)); // 21.6
// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array)=> {
//   console.log(item.toUpperCase(), index, array);
// })

// const li = document.querySelectorAll('li');

// const retornoForeach = li.forEach((item, index) => {
//   item.classList.add('ativa' + index);
// })
// console.log(retornoForeach); // retorna Undefined

const carros = ['Ford', 'Fiat', 'Honda'];


// Ao utilizar o .map ele retorna uma nova array com valores atualizados de acordo com o return de cada iteração. 

// const novaArray = carros.map((item, index, array) => {
//   return item.toUpperCase();
// })
// console.log(novaArray);

// const numeros = [2, 4, 5, 6, 78];
// const numerosX2 = numeros.map(n => n * 2);
// console.log(numerosX2);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//     {
//     nome: 'CSS 2',
//     min: 25
//   },
// ]

// const tempoAulas = aulas.map(aula => aula.min);
// console.log(tempoAulas);

// const nomeAulas = aula => aula.nome;

// const nomeAulas2 = function(aula) {
//   return aula.nome;
// }

// function nomeAulas3(aula) {
//   return aula.nome;
// }

// const arrayNomeAulas = aulas.map(nomeAulas3);
// console.log(arrayNomeAulas);

// const aulas = [10, 25, 30];


// const reduceAulas = aulas.reduce((acumulador, item) => {
//   console.log(acumulador, item);
//   return acumulador + item;
// }, 0)

// console.log(reduceAulas);

// Passo a passo do reduce


// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   if(anterior > atual) 
//     return anterior
//   else
//     return atual
// }, 0)

// console.log(maiorNumero);

// Usando operador ternário

// const maiorNumero2 = numeros.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0)

// console.log(maiorNumero2);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 2',
    min: 20
  },
  {
    nome: 'CSS 2',
    min: 25
  },
]

const listaAulas = aulas.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  return acumulador;
}, {});

console.log(listaAulas);

// método .some() verifica se pelo menos um valor retorna "true"
const frutas = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas.some((item) => {
  return item === 'Uva';
})

console.log(temUva);

// metodo .every() verifica se todos são "true", caso algum não seja, ele retorna "false"

const every = frutas.every((fruta) => {
  return fruta
})

console.log(every);

const numeros2 = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros2.every(function(n) {
  return n > 3
})
console.log(maiorQue3);

// metodo .find() retorna o  primeiro VALOR truthy que encontrar
// metodo .findIndex() retorna o INDEX deste valor na array

const frutas2 = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Abacaxi'];

const indexUva = frutas.findIndex((item) => {
  return item === 'Uva'
})

console.log('Index: ', indexUva); // retorna 2

const retornaValor = frutas.find((item) => {
  return item
})

console.log('O valor é: ', retornaValor);

// Metodo .filter() retorna uma Array e coloca todos os valores Truthy nela

const frutas3 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayFrutas = frutas3.filter((item) => {
  console.log(item);
  return item
})
console.log(arrayFrutas);

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.filter(x => x > 45);

console.log(buscaMaior45); // [88, 101]

const aulas2 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 2',
    min: 20
  },
  {
    nome: 'CSS 2',
    min: 25
  },
]

const maiores15 = aulas2.filter((aula) => {
  return aula.min >= 15;
})
console.log(maiores15);
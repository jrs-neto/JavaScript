const comida = 'Pizza';
const agua = new String('Água');

console.log(agua.length);

const frase = 'A melhor comida';

console.log(frase[frase.length -1])
console.log(frase.charAt(frase.length -1))

const frase2 = 'A melhor linguagem é ';
const linguagem = 'Javascript';

const fraseFinal = frase2.concat(linguagem, '!!', 'Oi');
console.log(fraseFinal);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta)); // Procura por fruta dentro da constante listaFrutas.
console.log(listaFrutas.includes(fruta, 5)) // Procura a partir do index 5

console.log(fruta.startsWith('Ba')) // Começa com... (É case sensitive)
console.log(fruta.endsWith('na')) // Termina com... (É case sensitive)

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); // Dep
console.log(transacao1.slice(0, 3)); // Dep
console.log(transacao1.slice(0, 3)); // Tax

console.log(transacao1.slice(12)); // cliente
console.log(transacao1.slice(-4)); // ente
console.log(transacao1.slice(3, 6)); // ósi

// Corta a String com valor de start e end, mas não funciona com valores negativos como o slice.
console.log(linguagem.substring(3, 5)); //aS
console.log(linguagem.substring(0, 4)); //Java
console.log(linguagem.substring(4)); // Script
console.log(linguagem.substring(-3)); // JavaScript

console.log(fruta.indexOf('na')); // Retorna o index que começa
console.log(fruta.lastIndexOf('na'));

const preco = 'R$ 99,00';

console.log(preco.padStart(20)) // Preenche a string a partir do começo
console.log(preco.padEnd(20, '.')) // Preenche a string a partir do final

const listaPrecos = ['R$ 99,00', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item)=> {
  console.log(item.padStart(10, '-'));
});

const umafruta = 'Banana';
console.log(umafruta.repeat(5));

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';

listaItens = listaItens.replace(/[ ]+/g, ', ');
console.log(listaItens);

const arrayLista = listaItens.split(', '); // Divide a string com o argumento passado e retorna uma Array
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];

console.log(frutasArray.join(''));
console.log(frutasArray.join(', '));

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLocaleUpperCase() === 'FEMININO');

const valor = '  R$ 23.00  ';
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00 '
valor.trimEnd(); // '  R$ 23.00'

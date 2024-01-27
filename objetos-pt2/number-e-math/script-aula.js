console.log(Number.isNaN('OK')); // false
console.log(Number.isNaN(10)); // false

console.log(parseFloat(' 3243.343')); // Converte de String para numero
console.log(parseFloat('100.27 reais')); // Converte de String para numero
console.log(parseInt('100.27 reais')); // Converte de String para numero, retirando a casa decimal
console.log(parseInt(23.49, 10)); // Converte de String para numero, retirando a casa decimal

const preco = 10.32323;
console.log(preco.toFixed()); // Arredonda para cima ou para baixo
console.log(preco.toFixed(4)); 
console.log((99.99).toFixed()); 
console.log((99.99).toFixed(2)); // Arredonda com duas casas decimais

let valor = 48.49;
// valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
valor = valor.toLocaleString('en-US', {style: 'currency', currency: 'USD'});

console.log(valor);

console.log(Math.abs(-8)); // Retorna sempre um valor positivo
console.log(Math.ceil(4.8334)); // Arredonda para cima = 5
console.log(Math.floor(4.8334)); // Arredonda para baixo = 4
console.log(Math.round(4.8334)); // Arredonda para cima ou baixo 

console.log(Math.max(4,43,5,3,13,5,65,343,10,37)); // Retorna o maior
console.log(Math.min(4,43,5,3,13,5,65,343,10,37)); // Retorna o menor

console.log(Math.random()); // Retorna um n° aleatório entre 0 e 1
const numeroAleatorio = Math.floor(Math.random() * 500); // Retorna um número aleatório entre 0 e 500
console.log(numeroAleatorio);


// Número random entre 72 e 32
console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32);
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);



// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // O resultado é: 35

// Crie duas expressões que retornem NaN
let firstExpression = '20s' / 40;
let secondExpression = 'trinta' * 100;
console.log(isNaN(firstExpression, secondExpression));

// Somar a string '200' com o número 50 e retornar 250
let string = '200';
let number = 50;
console.log(+string + number);

// Incremente o número 5 e retorne o seu valor incrementado
let incrementNumber = 5;
console.log(++incrementNumber);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
// var pesoPorDois = peso / 2; // NaN (Not a Number)
console.log(peso);

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let myAge = 30;
let parentAge = 60;

if(myAge > parentAge) {
  console.log('Minha idade é maior.');
} else if (myAge === parentAge) {
  console.log('Minha idade é igual.');
} else {
  console.log('Minha idade é menor.');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // Retorna o valor 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome,!!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log('O Brasil tem mais habitantes do que a China.')
} else if(brasil < china) {
  console.log('A China tem mais habitantes do que o Brasil.')
} else {
  console.log('Ambos tem a mesma quantidade de habitantes.')
}

// O que irá aparecer no console? // Retorna Falso
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console? // Retorna Cão
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
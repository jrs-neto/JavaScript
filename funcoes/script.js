// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
  return !!value
}
console.log(isTruthy(' '));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName(name, lastName) {
  return `My full name is: ${name} ${lastName}`;
}
console.log(fullName('José', 'Rodrigues'))

// Crie uma função que verifica se um número é par
function evenOrOdd(value) {
  if(value % 2 === 0) {
    return 'The result is Even.'
  } else {
    return 'The result is Odd.';
  }
}
console.log(evenOrOdd(4))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function returnType(type) {
  return typeof type
}
console.log(returnType(true));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function() {
  console.log('José Rodrigues');
});

// Corrija o erro abaixo // Corrigido! 
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

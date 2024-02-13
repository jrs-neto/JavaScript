// function somar(a, b) {
//   return a + b;
// }
// console.log(somar(4, 6));

// const somar = function(a, b) {
//   return a + b;
// }
// console.log(somar(4, 6));

function dividir(a, b) {
  return a / b;
}
console.log(dividir(10, 5));

const somar = (a, b) => a + b;
const quadrado = a => a * a;

console.log(somar(4, 6));
console.log(quadrado(4));

// Método antigo de isolar função
const instrumento = 'Violão';
(() => {
  const instrumento = 'Guitarra';
  console.log(instrumento);
})();

console.log(instrumento);
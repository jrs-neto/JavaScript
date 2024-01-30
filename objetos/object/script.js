// Crie uma função que verifique
// corretamente o tipo de dado
function VerificaDado(dado) {
  return Object.prototype.toString.call(dado)
}
console.log(VerificaDado([]));
console.log(VerificaDado(''));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado2 = {};
Object.defineProperties(quadrado2, {
  lados: {
    value: 4,
    enumerable: true,
  }
})
console.log(quadrado2);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao);
console.log(Object.isFrozen(configuracao));

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));

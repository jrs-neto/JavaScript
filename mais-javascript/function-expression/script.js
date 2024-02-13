// Remova o erro - R: Ativei a função após sua declaração
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(() => {
  const frase = 'Função isolada do escopo global'
  console.log(frase);
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(function() {
  console.log('Teste de Active');
});





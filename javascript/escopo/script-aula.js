'use strict';
var carro = 'Fusca';

function mostrarCarro() {
  console.log(carro);
}
mostrarCarro(); // Exibe Fusca no console
console.log(carro); // Erro, carro is not defined

if(true) {
  const mes = 'Dezembro';
  console.log(mes);
}
// console.log(mes); // Erro, pois const e let não vazam o bloco.

{
  var carro2 = 'BMW';
  const ano = 2018;
}
console.log(carro2); // Exibe BMW no console
// console.log(ano); // Erro, ano is not defined

// var i = 50;
// for(let i = 0; i < 10; i++) {
//   console.log(`Número: ${i}`);
// }

// console.log(i * 10)

const semana = 'Sexta';
// semana = 'Quinta'; // Erro, não pode redeclarar uma constante.
console.log(semana);

const data = {
  ano: 2018,
  mes: 'Dezembro',
}
data.ano = 2019; // É possível modificar o valor de um objeto.
// data = 'Isso é uma String'; // Erro, pois está tentando redeclarar o objeto.
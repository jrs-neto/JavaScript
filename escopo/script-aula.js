'use strict';


function mostrarCarro() {
  let carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Mostra Fusca no console
// console.log(carro) // Erro, carro is not defined

if(false) {
  const mes = 'Dezembro';
  console.log(mes);
}

{
  let carro2 = 'Fusca 2';
  const ano = 2018;
}
// console.log(carro2); // Erro, carro2 is not defined
// console.log(ano); // Erro, ano is not defined

let i = 50;

// for(let i = 0; i < 10; i++) {
//   console.log(`Número: ${i}`);
// }

console.log(i * 10);

const semana = 'Sexta';
// semana = 'Quinta';

console.log(semana);

const data = {
  ano: 2018,
  mes: 'Dezembro',
}

data.ano = 2019;
data.dia = 25;
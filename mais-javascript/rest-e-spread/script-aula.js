// function perimetroForma(lado, totalLados = 4) {
//   const argArray = Array.from(arguments);
//   argArray.forEach(arg => {
//     console.log(arg);
//   })
//   console.log(argArray);
//   return lado * totalLados;
// }

// console.log(perimetroForma(10, 20)); 

// function perimetroForma(lado, totalLados, ...listaArgumentos) {
//   console.log(listaArgumentos);
//   console.log(arguments);
//   return lado * totalLados;
// }

// console.log(perimetroForma(10, 20, 30, 'OI', 'Teste'));

// function anunciarGanhadores(premio, ...ganhadores) {
//   ganhadores.forEach(ganhador => {
//     console.log(ganhador + ' ganhou um ' + premio);
//   });
// }
// anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria', 'Beto');

// const frutas = ['Banana', 'Uva', 'Morango'];
// const legumes = ['Cenoura', 'Batata'];
// const comidas = [...frutas, 'Pizza', ...legumes];

// console.log(comidas);

function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou um ' + premio);
  });
}

const ganhadores = ['Pedro', 'Marta', 'Maria', 'Beto'];
anunciarGanhadores('Carro', ...ganhadores);

const arrayNumeros = [3,4,5,12,3,10,24,2,13];
const maiorNumero = Math.max(...arrayNumeros);
console.log(maiorNumero);

const btns = document.querySelectorAll('button');
console.log(btns);

const btnsArray = [...btns]
console.log(btnsArray);

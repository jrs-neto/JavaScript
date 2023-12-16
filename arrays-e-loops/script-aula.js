// let videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

// let ultimoItem = videoGames.pop(); // Remove e retorna o útimo item
// console.log(ultimoItem);

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

for(let item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if(videoGames[item] === 'PS4') {
    break;
  }
}

let frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function(fruta, index, array) {
  // frutas.pop();
  console.log(fruta, index, array);
});

// NÃO ACONSELHAVEL 

// let numero = 0;
// let maximo = 50;
// for(;numero < maximo;) {
//   console.log(numero);
//   numero++;
// }

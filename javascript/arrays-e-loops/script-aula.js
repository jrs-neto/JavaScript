let videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

// let ultimoItem = videoGames.pop();

for(let numero = 0; numero <= 10; numero++) {
  console.log(numero);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 5;
}

for(let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}

let frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function(item, index, array) {
  // frutas.pop();
  console.log(item, index, array);
})

//NÃO ACONSELHAVEL!!!
let numero = 0;
let maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}


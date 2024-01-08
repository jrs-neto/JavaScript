// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const anosQueOBrasilGanhouACopa = [1959, 1962, 1970, 1994, 2002];
console.log(anosQueOBrasilGanhouACopa);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(let i = 0; i < anosQueOBrasilGanhouACopa.length; i++) {
  console.log(`O Brasil ganhou a copa no ano de ${anosQueOBrasilGanhouACopa[i]}.`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for(let i = 0; i < frutas.length; i++) {
  if(frutas[i] === 'Pera') {
    console.log(frutas[i]);
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);

// Mostrar no console o item que tiver cinco ou mais letras.
let carros = ['Volkswagen', 'Mitsubishi', 'Ford', 'Hyundai', 'Maserati', 'Honda', 'Fiat', 'Toyota'];


// Utilizando a array acima, coloque em uma array vazia carros que possuem a letra t. 


//Utilizando a array acima, mostre no console se o carro é da marca honda e dê break, e se não for, mostre no console que não é.



// Utilizando a array acima, cria uma nova array com os carros que tem cinco ou mais letras e mostre no console. 


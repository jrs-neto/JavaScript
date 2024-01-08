// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;
darCredito = (possuiCarro && possuiCasa)
console.log(darCredito); // Retorna true ou false.

//Outro método
let possuiCarro2 = true;
let possuiCasa2 = false;
let darCredito2;
darCredito2 = (possuiCarro2 && possuiCasa2) ? 'Dar crédito ao cliente.' : 'Negar crédito ao cliente.';
console.log(darCredito2);

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
  let myAge = 30;
  let myMotherAge = 60;

  if(myAge > myMotherAge) {
    console.log('É maior.')
  } else if (myAge < myMotherAge) {
    console.log('É menor.')
  } else {
    console.log('É igual.')
  }


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // Retona 3 
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

  if(brasil > china) {
    console.log('Brasil tem mais habitantes.')
  } else if ( brasil < china) {
    console.log('Brasil tem menos habitantes.')
  } else {
    console.log('Brasil e China tem a mesma quantidade de habitantes.')
  }

// O que irá aparecer no console? // Falso
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console? // Retorna Cão
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}




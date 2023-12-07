function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4));

function pi() {
  return 3.14;
}
let total = 5 * pi();

console.log(pi());

function imc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function favoriteColor(color) {
  if(color === 'Blue') {
    return 'I like blue.';
  } else if(color === 'Green') {
    return 'I like green.';
  } else {
    return 'I don\'t like colors';
  }
}
console.log(favoriteColor('Blue'));

addEventListener('click', function() {
  console.log('Oi');
})

// function mostraConsole() {
//   console.log('Oi');
// }

// addEventListener('click', mostraConsole);
function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(20, 1.8); //undefined
console.log(imc2(1000, 1.8)) // retorna o imc e undefined

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Por favor preencha um número'
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade('Oi'));

let totalPaises = 193;
function faltaVisitar(paisesVisitados) {
  return `Falta visitar ${totalPaises - paisesVisitados}.`;
}

console.log(faltaVisitar(30))

let profissao = 'Designer';

function dados() {
  let nome = 'André';
  let idade = 29;
  function outrosDados() {
    let endereco = 'Rio de Janeiro';
    let idade = 30;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados();
}

console.log(dados());
function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

let total = 5 * pi(); // Retorna 15.7

console.log(total);

function imc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function favoriteColor(color) {
  if(color === 'Blue') {
    return 'My favorite color is Blue!';
  } else if(color === 'Green') {
    return 'My favorite color is Green!';
  } else {
    return 'This ins\'t my favorite color.';
  }
}

console.log(favoriteColor('Red'));

function mostraConsole() {
  console.log('Hello World!');
}
addEventListener('click', mostraConsole);

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

// imc2(80, 1.8); 
console.log(imc2(100, 1.9)) // retorna o imc e undefined

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Por favor, preencha um número'
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(' '));

const totalPaises = 193;
function faltaVisitar(paisesVisitados) {
  return `Falta visitar ${totalPaises - paisesVisitados} países.`
}

console.log(faltaVisitar(10));

let profissao = 'André';

function dados() {
  let nome = 'André';
  let idade = 28;
  function outrosDados() {
    let endereco = 'Rio de Janeiro';
    let idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());
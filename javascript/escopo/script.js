// Por qual motivo o código abaixo retorna com erros? R: Para corrigir o erro, coloquei o console.log para dentro do escopo e alterei a palavra "var" para "cor", assim pude acessar as variáveis corretamente de dentro do escopo.
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas); 
}

// Como corrigir o erro abaixo? R: Movi a constante dois para fora do escopo da função e assim as duas funções podem acessa-la. 
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500? // Alterei o nome de var para let dentro do for loop para que não vazasse o escopo.
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);


// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas); // Código correto

}
// console.log(var, marca, portas); R: Está dando console.log em var ao invés de cor e o console.log fora do escopo, não estava conseguindo acessar as outras variáveis. 


// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) { // R: Deve-se colocar a constante fora do escopo para ambas as funções poderem acessar.
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
// R: Muda-se a palavra var para let, para que o escopo de bloco seja respeitado e assim a constante poder realizar sua conta sem interferencia.

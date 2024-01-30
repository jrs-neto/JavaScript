let numero = 20;
let numero2 = 10;

numero += numero2; // numero = numero + numero2
console.log(numero);

let idade = 20;
let naoPossuiDiabetes = false;

let podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);

//IF ABREVIADO
let possuiFaculdade = true;
if(possuiFaculdade)
  console.log('Sim, possui Faculdade.');
else 
  console.log('Sim, possui');
let possuiGraduacao = false;
let possuiDoutorado = false;

if(possuiGraduacao) {
  console.log('Possui Graduação.');
} else if(possuiDoutorado) {
  console.log('Possui Doutorado.');
} else {
  console.log('Não possui nada.');
}

let nome = 'José';

if(nome) {
  console.log(nome);
} else {
  console.log('Nome não existe.');
}

if(!possuiGraduacao) {
  console.log('Não possui Graduação!!');
}

let x = 10;

console.log(x !== 10);

if((5 - 5) && (5 + 5)) {
  console.log('Verdadeiro.')
} else {
  console.log('Falso.');
}

let condicional = (5 - 10) && (5 + 5);
if(condicional) {
  console.log('Verdadeiro.', condicional)
} else {
  console.log('Falso.');
}

let condicional2 = (5 - 5) || (5 + 5) && (10 - 2);
console.log(condicional2);

let favoriteColor = 'Green';

switch (favoriteColor) {
  case 'Blue':
    console.log('Look to the sky.')
    break;
  case 'Yellow':
    console.log('Look to the sun.')
    break;
  case 'Green':
    console.log('Look to the forest.')
    break;
    default:
    console.log('Close your eyes.')
}

console.log(favoriteColor);
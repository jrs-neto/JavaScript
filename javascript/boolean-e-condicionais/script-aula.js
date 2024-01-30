let possuiGraduacao = false;
let possuiDoutorado = false;

if(possuiGraduacao) {
  console.log('Posui Graduação.')
} else if(possuiDoutorado) {
  console.log('Posui Doutorado.')
} else {
  console.log('Não possui Graduação e Doutorado.')
}

let nome = '10kg' / 10;

if(nome) {
  console.log(nome);
} else {
  console.log('Nome não existe.');
}

if(!possuiGraduacao) {
  console.log('Não possui Graduação.')
}

let x = 10;
console.log(x !== 11);

if((5 - 5) && (5 + 5)) {
  console.log('Verdadeiro.')
} else {
  console.log('Falso.')
}

let condicional = (5 - 10) && (5 + 5);
if(condicional) {
  console.log('Verdadeiro.')
} else {
  console.log('Falso.')
}

let condicional2 = (5 - 5) || (5 + 5) && (10 - 2);
console.log(condicional2)

let favoriteColor = 'Red';

switch (favoriteColor) {
  case 'Blue':
    console.log('Blue is my favorite color.')
    break;
  case 'Yellow':
    console.log('Yellow is my favorite color.')
    break;
  case 'Green':
    console.log('Green is my favorite color.')
    break;
  default:
    console.log('This isn\'t my favorite color')  
}
// const regexp = /\w+/gi;
// const regexp1 = new RegExp('\\w', 'gi');

// const frase = 'Javascript Linguagem 101';
// console.log(frase.replace(regexp1, 'X'));

// Propriedades
// console.log(regexp.flags);
// console.log(regexp.global);
// console.log(regexp.ignoreCase);
// console.log(regexp.source);

// const regexp = /Java/g;

// const frase = 'JavaScript e Java Linguagem 101, Java';
// console.log(regexp.lastIndex);
// console.log(regexp.test(frase));
// console.log(regexp.lastIndex);
// console.log(regexp.test(frase));
// console.log(regexp.lastIndex);
// console.log(regexp.test(frase));
// console.log(regexp.lastIndex);
// console.log(regexp.test(frase));

// Retorna true or false
// let i = 1;
// while(regexp.test(frase)) {
//   console.log(i++, regexp.lastIndex);
// }

const frase = 'JavaScript, TypeScript, CoffeeScript, Java';

const regexp = /\w+/g;
// console.log(regexp.exec(frase));
// console.log(regexp.exec(frase));
// console.log(regexp.exec(frase));
// console.log(regexp.exec(frase));
// console.log(regexp.exec(frase));
// console.log(regexp.exec(frase));

let regexpResult;
while((regexpResult = regexp.exec(frase)) !== null)  {
  // console.log(regexpResult);
  console.log(regexpResult[0]);
}
// Métodos de String

// const frase = 'JavaScript, TypeScript, CoffeeScript, Java, 200';
// const regexp = /\w+/g;
// const regexp = /[0-9]/g;
// const regexp = /[A-Za-z]+/g;
// const resultados = frase.match(regexp);
// const resultados = frase.split(regexp);

// console.log(resultados);

// const tags = `
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>
// `;

// // const regexp = /(?<=<\/?)\w+/g;
// const regexp = /<li/g;


// // const resultado = tags.replace(regexp, 'div');
// const resultado = tags.replace(regexp, '$& class="ativa"');

// console.log(resultado);

// GRUPOS DE CAPTURA
// const emails = `empresa@email.com
// contato@email.com
// suporte@email.com
// `;

// const regexp = /(\w+)@[\w.]+/g;
// const resultado = emails.replace(regexp, '$1gmail.com');
// console.log(resultado);

// const regexp = /(\w+)@([\w.])+/g;

// const resultado = emails.replace(regexp, function(...args) {
//   console.log(args);
//   return '$1X'
// })

const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
andre@origamid.com`

const regexp = /(\w+@)([\w.]+)/g;

const resultado = emails.replace(regexp, function(...args) {
  if(args[2] === 'homail.com.br') {
    return args[1] + 'hotmail.com.br'; 
  } 
  else if (args[2] === 'ggmail.com.br') {
    return args[1] + 'gmail.com.br';
  } 
  else if (args[2] === 'oulook.com.br') {
    return args[1] + 'outlook.com.br'
  } 
  else {
    return args[0]
  }
})

console.log(resultado);
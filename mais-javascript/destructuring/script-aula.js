// const carro = {
//   marca: 'Honda',
//   ano: 2018
// }

// const {marca, ano} = carro;
// console.log(marca, ano);

// const cliente = {
//   nome: 'André',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Vídeo JS', 'Vídeo HTML']
//     },
//     fisicas: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

// const {livros, videos} = cliente.compras.digitais;
// console.log(livros, videos);

// const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras;
// console.log(livros);

// const cliente = {
//   nome: 'André',
//   compras: 10,
//   email: 'andre@gmail.com'
// }

// const {nome} = cliente;
// console.log(nome);

// email ficou como valor padrão, porém pode ser escrito por cima.
// const {nome: nomeAndre, email = 'email@gmail.com'} = cliente;
// console.log(email);

// const frutas = ['Banana', 'Uva', 'Morango'];

// const [primeira, segunda, terceira] = frutas;

// console.log(primeira, segunda, terceira);

const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3'];

console.log(segundo);

function handleKeyboard({key, keyCode}) {
  console.log(key, keyCode);
}

document.addEventListener('keyup', handleKeyboard);
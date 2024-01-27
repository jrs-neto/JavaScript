const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// console.log(instrumentos);
// console.log(precos);
// console.log(dados[0]);
// console.log(dados[1][2].cor);
// console.log(dados[1][2].preco);
// console.log(dados[2]('Eu mesmo'));

const carros = new Array('Ford', 'Fiat', 'Honda');

carros[2] = 'Ferrari'; // Substitui o valor
console.log(carros[2]);

carros[3] = 'Kia'; // Está criando um valor em um index que não existe
console.log(carros[3]);

carros[20] = 'Mazda'; // Está criando um valor em um index que não existe e criando espaços vazios.
console.log(carros[20]);

console.log(carros.length);// Retorna a quantidade de itens dentro da Array

const li = document.querySelectorAll('li');

const arrayLi = Array.from(li);

const obj = {
  0: 'Andre',
  1: 'Rafael',
  2: 'Teste',
    length: 3,
} // Foi criada a propriedade "length", pois o metodo Array.from() só consegue converter quando existe a propriedade "length"

const objArray = Array.from(obj); 

// console.log(li);
// console.log(arrayLi);
// console.log(objArray);

// console.log(Array.isArray(li)); // false
// console.log(Array.isArray(arrayLi)); // true

// console.log(Array.of(10)); // cria uma array com o valor que for passado
// console.log(Array.of('Teste 1', 'Teste 2')); // cria uma array com o valor que for passado
// console.log(Array(20)); // Cria uma array vazia com 20 espaços

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

// console.log(frutas);
// console.log(frutas.length);
// console.log(frutas[0].length);
// console.log(frutas[2][0].length);

const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos2.sort();
console.log(instrumentos2); // organiza a array em ordem alfabética

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort(); // organiza a array em ordem
console.log(idades);

const carros2 = ['Ford', 'Fiat', 'VW', 'Ferrai', 'Gol', 'Belina', 'Mazda'];
// carros2.unshift('Kia', 'Ferrari'); // add o item ao início da Array e retorna ela
// carros2.push('Chevrolet', 'Toyota '); // add o item ao final da array e retorna ela
// console.log(carros2); 

// console.log(carros2.shift()); // remove o 1° item da array e retorna ele
// console.log(carros2.pop());  // remove o ultimo item da array e retorna ele

// console.log(carros2.reverse()); // Inverte os itens da array e retorna a nova array

// console.log(carros2.splice(2, 0, 'Fusca')); // Adiciona a partir do segundo index, não remove nada e adiciona 'Fusca' a partir do segundo index.

// console.log(carros2.splice(2, 2, 'Parati')); // // Adiciona a partir do segundo index, remove dois index, e adiciona 'Parati' a partir do segundo index.

// console.log(carros2);

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 2));

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].fill('Banana', 0, 2)); // Preenche o espaço a partir do item 0 e para no item 2

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].fill('Banana')); // Preenche a array toda com 'Banana'

// Métodos de acesso não modificam a Array

const transporte1 = ['Barco', 'Avião'];
const transporte2 = ['Carro', 'Moto'];
const transporte3 = [].concat(transporte1, transporte2); // Concatena a array

console.log(transporte1.concat(transporte2, 'Item1', 'Item2'));
console.log(transporte3);
console.log(['Bicicleta'].concat(transporte1, transporte2));

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

console.log(linguagens.includes('ruby')); // Verifica se possui aquele valor e retorna true or false
console.log(linguagens.indexOf('js')); // Retorna o primeiro index daquele valor, se passar um valor que não existe, ele retorna -1
console.log(linguagens.lastIndexOf('js')); //Retorna o último index daquele valor, se passar um valor que não existe, ele retorna -1
console.log(linguagens.join()); // Junta todo o conteúdo em uma array
console.log(linguagens.join(' ')); // Junta todo o conteúdo em uma array e passando o espaço
console.log(linguagens.join(', ')); // Junta todo o conteúdo em uma array e passando o espaço e vírgula.
// Obs: Pode passar qualquer valor dentro do () utilizando o método .join

let htmlString = '<h2>Título Principal<h2/>';
htmlString = htmlString.split('h2'); // Separa a string sempre que tiver h2
htmlString = htmlString.join('h1'); 

console.log(htmlString);

console.log(linguagens.slice(3)); // Retorna os itens da array a partir do index 3 ['php', 'python']
console.log(linguagens.slice(1, 4)); // Retorna os itens da array começando pelo index 1 e terminando no 4 ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();
console.log(linguagens.pop());
console.log(linguagens);
console.log(cloneLinguagens);
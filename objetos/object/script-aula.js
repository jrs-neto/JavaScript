// const pessoa = new Object({
//   nome: 'André',
// })
// console.log(pessoa);

// const carro = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + ' acelerou';
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// }
// const honda = Object.create(carro).init('Honda');
// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar());

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   }
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// Object.assign(moto, funcaoAutomovel);

// console.log(moto);

// const moto = {};
// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: false, // Impede deletar e mudar o valor
//     enumerable: true, // torna enumerável
//   },
//   capacete: {
//     value: true,
//     configurable: true,
//     writable: false, // Impede mudança de valor
//   },
// })

const moto = {
  capacete: true,
}

Object.defineProperties(moto, {
  rodas: {
    enumerable: true,
    get() {
      return 2;
    },
    set(valor) {
      this._rodas = valor * 4 + ' Total de Rodas';
    }
  }
})
// console.log(moto);
// console.log(moto.rodas = 4);
// console.log(moto.rodas);

// Lista com métodos e propriedades e Array
// console.log(Object.getOwnPropertyDescriptors(Array));
// Lista com métodos e propriedades do protótipo de Array
// console.log(Object.getOwnPropertyDescriptors(Array.prototype));
// console.log(Object.getOwnPropertyDescriptors(moto));
// Puxa de uma única propriedade 
// const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');
// console.log(innerHeightConfig);

// console.log(Object.keys(moto)); // Retorna chave
// console.log(Object.values(moto)); // Retorna c o valor
// console.log(Object.entries(moto)); // Retorna chave e o valor

// console.log(Object.getOwnPropertyNames(Array));
// console.log(Object.getOwnPropertyNames(Array.prototype));

// const fruta = ['Banana'];

// console.log(Object.getPrototypeOf(''));
// console.log(Array.prototype);

// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

// const novaFruta = frutas1;

// // Verifica se as arrays são iguais
// console.log(Object.is(frutas1, frutas2)); // False
// console.log(Object.is(frutas1, novaFruta)); // True

// console.log(Object.freeze()); // Impede qualquer mudança nas propriedades
// console.log(Object.seal()); // Impede adição de novas propriedades e impede que as atuais sejam deletadas.
// console.log(Object.preventExtensions()); // Impede adição de novas propriedades

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }

// Object.seal(carro);
// Object.freeze(carro);
// Object.preventExtensions(carro);


// carro.portas = 4;
// delete carro.marca;

// carro.marca = 'Honda'

// console.log(carro);

// console.log(Object.isFrozen(carro));
// console.log(Object.isExtensible(carro));
// console.log(Object.isSealed(carro));

// console.log(''.constructor);
// console.log(''.constructor.prototype);
// console.log([].constructor.prototype);
// console.log(carro.constructor.prototype);

// console.log(fruta.hasOwnProperty('map'));
// console.log(Array.prototype.hasOwnProperty('map'));
// console.log(Array.hasOwnProperty('map'));

// console.log(Object.getOwnPropertyNames(fruta));
// console.log(Array.prototype.propertyIsEnumerable('map'));

const frutas = ['Banana', 'Uva', 'Mamão'];
console.log(Array.prototype.isPrototypeOf(frutas)); // true

const frase = 'Isso é uma String';
const somar = function(a, b) {
  return a + b;
};

const carro = {
  marca: 'Ford',
}

console.log(frutas.toString());
console.log(frase.toString());
console.log(somar.toString());


console.log(Array.isArray([]));

// Verifica se é um objeto
console.log(Object.prototype.toString.call(frutas));
console.log(Object.prototype.toString.call(frase));
console.log(Object.prototype.toString.call(somar));
















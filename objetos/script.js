// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const personalData = {
  name: 'José',
  lastName: 'Rodrigues',
  age: 30,
  city: 'Rio de Janeiro',
  // fullName() {
  //   return `${this.name} ${this.lastName}`
  // }
}

// Crie um método no objeto anterior, que mostre o seu nome completo
personalData.fullName = function() {
  return `${this.name} ${this.lastName}`
}
console.log(personalData.fullName());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const dog = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(lat) {
    if(lat === 'Homem') {
      return 'O cachorro latiu, pois viu um homem.'
    } else {
      return 'O cachorro não latiu, pois não é um homem.'
    }
  }
}

console.log(dog.latir('Homem'));

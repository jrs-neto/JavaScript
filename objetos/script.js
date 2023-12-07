// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
const personalData = {
  name: 'José',
  lastName: 'Rodrigues',
  age: 30,
  fullName() {
    return `My full name is ${this.name} ${this.lastName}.`;
  }
}
console.log(personalData.fullName());

// Crie um método no objeto anterior, que mostre o seu nome completo // DONE

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const dog = {
  breed: 'Labrador',
  color: 'Black',
  age: 10,
  bark(person) {
    if(person === 'Homem') {
      console.log('O cachorro está latindo, pois viu um homem.')
    } else {
      console.log('Não é um homem.')
    }
  }
}

dog.bark(' ');

let pessoa = {
  name: 'André',
  age: 28,
}

console.log(pessoa.name);

let quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

console.log(quadrado.area(10));
console.log(quadrado.perimetro(5));
console.log(Math.random());

let height = 120;
let menu = {
  with: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2;
  }
}

menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function() {
  console.log('Escondi')
}

let bg = menu.backgroundColor;

const pessoa = {
  nome: 'André',
  idade: 28,
}

console.log(pessoa);

const quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(4));

console.log(Math.random());

let height = 120;
const menu = {
  width: 800,
  height: 50,
  backgroundColor:'#84E',
  metadeHeight() {
    return this.height / 2;
  }
}

menu.backgroundColor = '#000';
menu.color = 'Blue';

menu.hide = function() {
  console.log('hide menu')
}

let bg = menu.backgroundColor;

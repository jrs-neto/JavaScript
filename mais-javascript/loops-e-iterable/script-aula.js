const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

for(const fruta of frutas) {
  console.log(fruta);
}

// for(const char of frase) {
//   console.log(char);
// }

const buttons = document.querySelectorAll('button');

for(const btn of buttons) {
  btn.style.color = 'blue';
}

console.log(...buttons);

const carro = {
  marca: 'Honda',
  ano: 2018,
}

Object.defineProperties(carro, {
  rodas: {
    value: 4,
    enumerable: true,
  }
})

for(const key in carro) {
  console.log(carro[key]);
}

for(const f in frutas) {
  console.log(f);
}

for(const f in frutas) {
  console.log(frutas[f]);
}

const btnUnico = document.querySelector('button');
const btnStyles = getComputedStyle(btnUnico);

for(const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`);
}

let i = 0;
do {
  console.log(i++);
} while(i <= 20);
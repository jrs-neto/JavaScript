// function espera(texto) {
//   console.log('Passou 1 segundo');
// }
// setTimeout(espera, 1000, 'Passou 1 segundo');

// setTimeout(function() {
//   console.log('Testing');
// }, 0);

// setTimeout(() => {
//   console.log('Testing2');
// }, 1000);

// for(let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 300 * i);
// }

// const btn = document.querySelector('button');

// btn.addEventListener('click', handleClick);

// function handleClick() {
//   setTimeout(() => {
//     console.log(this);
//     this.classList.add('active');
//   }, 1000)
// }

// setTimeout(() => {
//   console.log('Testing');
// }, 0);

// function loop(texto) {
//   console.log(texto);
// }
// setInterval(loop, 1000, 'Passou 1s');

// // Loop a cada segundo
// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 1000);

// function loop(texto) {
//   console.log(texto);
// }
// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 300);

let i = 0;
const meuLoop = setInterval(() => {
  console.log(i++);
  if(i > 20) {
    clearInterval(meuLoop)
  }
})
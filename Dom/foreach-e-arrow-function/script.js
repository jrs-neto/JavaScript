// Mostre no console cada parágrado do site
const mostrarP = document.querySelectorAll('p');
console.log(mostrarP);

mostrarP.forEach((item) => {
  console.log(item);
})

// Mostre o texto dos parágrafos no console
mostrarP.forEach((item)=> {
  console.log(item.innerText);
})

// Como corrigir os erros abaixo: // Corrigidos!!
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( () => {
  console.log(i++);
});

imgs.forEach(() => i++);

console.log(i);

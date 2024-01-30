let name = 'José';

let nomeMinusculo = name.toLowerCase();
console.log(nomeMinusculo);

let number = 1.8
let arredondaNumero = number.toFixed() // Arredonda o número
console.log(arredondaNumero);

let btn = document.querySelector('.btn')
btn.classList.add('active');
btn.innerText;
btn.addEventListener('click', function() {
  console.log('Clicou')
})
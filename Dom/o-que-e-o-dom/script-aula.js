// window.alert('alert')
const href = window.location.href;
console.log(href)

if(href === 'http://127.0.0.1:5500/o-que-e-o-dom/') {
  console.log('The location is the same.')
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;
console.log(h1Classes);

function callBack() {
  console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callBack);
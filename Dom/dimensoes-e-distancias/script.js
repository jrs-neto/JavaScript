// Verifique a distância da primeira imagem
// em relação ao topo da página

const firstImg = document.querySelector('img');
const distanceFirstImg = firstImg.offsetTop;
console.log(distanceFirstImg);

// Retorne a soma da largura de todas as imagens

function somaImagens() {
const allImages = document.querySelectorAll('img');
let imgValue = 0;
  allImages.forEach((image) => {
  imgValue += image.offsetWidth;
})
console.log(imgValue);
}

window.onload = function() {
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const allLinks = document.querySelectorAll('a');
allLinks.forEach((link) => {
if(link.offsetWidth >= 48 && link.offsetHeight >= 48) {
  console.log(link, 'Possui boa acessibilidade.');
} else {
  console.log(link, 'Não possui boa acessibilidade.')
}
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile');
}
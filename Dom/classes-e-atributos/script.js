// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
  item.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
})
itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const pageImgs = document.querySelectorAll('img');
pageImgs.forEach((imgElement) => {
  console.log(imgElement.hasAttribute('alt'));
})


// Modifique o href do link externo no menu
// const linkExterno = document.querySelectorAll('a'); 
// console.log(linkExterno);

// linkExterno.forEach((link) => {
//   console.log(link)
// } )

let linkExterno2 = document.querySelector('a[href^="https://"]');
linkExterno2.setAttribute('href', 'https://www.amazon.com.br/');
console.log(linkExterno2);



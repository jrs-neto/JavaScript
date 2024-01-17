// Duplique o menu e adicione ele em copy
const selectMenu = document.querySelector('.menu');
const selectCopy = document.querySelector('.copy');

const cloneMenu = selectMenu.cloneNode(true);
selectCopy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');


//Minha resolução
// const selectFaq = document.querySelectorAll('.faq dl dt');
// console.log(selectFaq[0]);

// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD);

// Minha resolução
// const firstDt = document.querySelector('dt');
// console.log(firstDt.nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
const selectClass = document.querySelector('.animais');

faq.innerHTML = selectClass.innerHTML;

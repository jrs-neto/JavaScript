// Retorne o url da página atual utilizando o objeto window
const returnUrl = window.location.href;
console.log(`The URL page is: ${returnUrl}`);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const firsElement = document.querySelector('.ativo');
console.log(firsElement);

// Retorne a linguagem do navegador
const returnLanguage = navigator.language;
console.log(`The navigator language is: ${returnLanguage}`);

// Retorne a largura da janela 
const returnWidth = window.innerWidth;
console.log(`The Width is: ${returnWidth}`)

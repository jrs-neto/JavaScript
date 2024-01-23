// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + ' andou');
  }
}

const pessoa1 = new Pessoa('José', 30);
pessoa1.andar();


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoa2 = new Pessoa('João', 20);
console.log(pessoa2.nome, pessoa2.idade);

const pessoa3 = new Pessoa('Maria', 25);
console.log(pessoa3.nome, pessoa3.idade);

const pessoa4 = new Pessoa('Bruno', 15);
console.log(pessoa4.nome, pessoa4.idade);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  this.elements = document.querySelectorAll(seletor);
  this.addClass = function(classe) {
    this.elements.forEach((element)=> {
      element.classList.add(classe)
    })
  }
    this.removeClass = function(classe) {
      this.elements.forEach((element) => {
        element.classList.remove(classe)
      } )
    }
  }
 
Dom();

const dom = new Dom('li');
dom.addClass('Ativo');
// addClass.removeClass('Ativa');




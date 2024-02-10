// const doc = fetch('./doc.txt');
// const cep = fetch('https://viacep.com.br/ws/01001000/json/')
// const css = fetch('./style.css');

// doc.then(resolucao => {
//   resolucao.text().then((body) => {
//     console.log(body);
//   })
// })

// doc.then(resolucao => {
//   return resolucao.text();
// }).then((body) => {
//   const conteudo = document.querySelector('.conteudo');
//   conteudo.innerText = body;
// })

// doc
// .then(r => r.text())
// .then(body => {
//   const conteudo = document.querySelector('.conteudo');
//   conteudo.innerText = body;
// })

// cep
// .then(r => r.json())
// .then(body => {
//   console.log(body.logradouro);
//   const conteudo = document.querySelector('.conteudo');
//   conteudo.innerText = body.logradouro;
// })

// css.then(r => r.text())
// .then(body => {
//   const conteudo = document.querySelector('.conteudo');
//   const style = document.createElement('style');
//   style.innerHTML = body;
//   conteudo.appendChild(style);
// })

// const sobre = fetch('./sobre.html');

// const div = document.createElement('div');

// sobre.then(r => r.text())
// .then(body => {
//   div.innerHTML = body;
//   const titulo = div.querySelector('h1');
//   document.querySelector('h1').innerText = titulo.innerText;
//   console.log(titulo);
// })

// const imagem = fetch('./imagem.png');

// imagem.then(r => r.blob())
// .then(body => {
//   const blobUrl = URL.createObjectURL(body);
//   const imagemDom = document.querySelector('img');
//   imagemDom.src = blobUrl;
// })

// const cep = fetch('https://viacep.com.br/ws/01001000/json/');

// cep.then(r => {
//   const r2 = r.clone();
//   r.text().then((text) => {
//     console.log(text);
//   })
//   r2.json().then((json) => {
//     console.log(json);
//   })
//   console.log(r);
// })
// .then(body => {
//   console.log(body);
// });

// cep.then(response => {
//   console.log(response);
//   response.headers.forEach(console.log);
// })

// const doc = fetch('./docs.txt');

// doc.then(response => {
//   console.log(response.status);
//   if(response.status === 404) {
//     console.log('Página não existe.');
//   }
// })

// const doc = fetch('./docs.txt');

// doc.then(response => {
//   console.log(response.url);
//   if(response.status === 404) {
//     console.log('Página não existe.');
//   }
// })

// Se o type for basic, significa que estou fazendo uma requisição dentro do meu próprio servidor.
// Se o type for 'cors' significa que estou fazendo uma requisição fora do meu servidor, mas que ela é permitida.
const doc = fetch('./docs.txt');
const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then(response => {
  console.log(response.type);
  if(response.status === 404) {
    console.log('Página não existe.');
  }
})

doc.then(response => {
  console.log(response.type);
  if(response.status === 404) {
    console.log('Página não existe.');
  }
})
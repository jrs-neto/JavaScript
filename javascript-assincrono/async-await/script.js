// async function puxarDados() {
//   const responseDados = await fetch('./dados.json');
//   const jsonDados = await responseDados.json();

//   document.body.innerText = jsonDados.aula;
// }
// puxarDados();

// FORMAS COM FETCH E ASYNC
// function inicarFetch() {
//   fetch('./dados.json')
//   .then(dadosResponse => dadosResponse.json())
//   .then(dadosJSON => {
//     document.body.innerText = dadosJSON.titulo;
//   })
// }
// inicarFetch();

// async function iniciarAsync() {
//   const dadosReponse = await fetch('./dados.json');
//   const dadosJSON = await dadosReponse.json();
//   document.body.innerText = dadosJSON.titulo;
// }
// iniciarAsync();

// Erro com try e catch
// async function puxarDados() {
//   try {
//     const responseDados = await fetch('./dados.json');
//     const jsonDados = await responseDados.json();
  
//     document.body.innerText = jsonDados.aula;
//   } catch (erro) {
//     console.log(erro);
//   }
// }
// puxarDados();

async function puxarDados() {
    const responseDados = fetch('./dados.json');
    const responseClientes = fetch('./clientes.json');

    const jsonDados = await (await responseDados).json();
    const jsonClientes = await (await responseClientes).json();
  
    console.log(jsonDados);
    console.log(jsonClientes);

}
puxarDados();

// async function asyncComPromise() {
//   await new Promise(resolve => {
//     setTimeout(() => {
//       console.log('Depois de 1s');
//       resolve();
//     }, 1000);
//   })
//   console.log('Acabou');
// }
// asyncComPromise();

async function asyncSemPromise() {
  // Console não irá esperar.
  await setTimeout(() => console.log('Depois de 1s'), 1000);
  console.log('acabou');
}
asyncSemPromise();



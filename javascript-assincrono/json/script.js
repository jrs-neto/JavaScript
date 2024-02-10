fetch('./dados.json')
.then(r => r.json())
.then(json => {
  json.forEach(materia => {
    // console.log(materia.aula);
    // console.log(materia.tempo);
    // console.log(materia.id);
    console.log(materia);
  })
})

fetch('./dados.json')
.then(r => r.text())
.then(jsonText => {
  const jsonFinal = JSON.parse(jsonText);
  console.log(jsonFinal);
})

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
}

const stringConfig = JSON.stringify(configuracoes);
console.log(stringConfig);

localStorage.config = JSON.stringify(configuracoes);
console.log(JSON.parse(localStorage.config));
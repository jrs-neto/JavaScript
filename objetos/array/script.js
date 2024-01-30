const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável 
const firstValue = comidas.shift();
console.log(firstValue);

// Remova o último valor de comidas e coloque em uma variável 
const lastValue = comidas.pop();
console.log(lastValue);

// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
console.log(comidas);

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());

// Inverta a ordem dos estudantes
console.log(estudantes.reverse());

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana')); // return True

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana')); // return False


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section').join('ul');
html = html.split('div').join('li');
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const newArray = [].concat(carros);
console.log(newArray);

carros.pop();
console.log(carros);

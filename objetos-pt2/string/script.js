// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal2 = 0;
let recebimentoTotal2 = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$ ', '');
  if (item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal2 += numeroLimpo;
  } else if (item.descricao.slice(0, 4) === 'Rece') {
    recebimentoTotal2 += numeroLimpo;
  }
})
console.log(taxaTotal2);
console.log(recebimentoTotal2);

// Minha Resolução
let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((transacao) => {
 if (transacao.descricao.startsWith('Taxa')) {
  taxaTotal += +transacao.valor.replace('R$ ', '');
  } else if (transacao.descricao.startsWith('Recebimento')) {
  recebimentoTotal += +transacao.valor.replace('R$ ', '');
  }
})
console.log(taxaTotal);
console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';')
console.log(arrayTransportes);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log(html.split('span').join('a'));

// Minha resolução 
console.log(html.replace(/span/g, 'a'));

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1]);
console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotais = 0;
transacoes2.forEach((item) => {
  item = item.toLowerCase().trim().slice(0, 4);

  if(item === 'taxa')
    taxasTotais++;
})
console.log(taxasTotais);


// Minha Resolução
let contador = 0;
  transacoes2.forEach((transacao) => {
    if(transacao.toLowerCase().includes('taxa')) {
      contador++;
    };
  })
  console.log(contador);

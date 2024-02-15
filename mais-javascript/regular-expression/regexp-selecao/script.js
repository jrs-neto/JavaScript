// REGULAR EXPRESSION - Regexp Seleção

// const frase = 'Javascript';
// const regexp = /J/;
// const fraseNova = frase.replace(regexp, 'B');
// console.log(fraseNova);

// const regexp = /Java/;
// const frase = 'Javascript';
// const fraseNova = frase.replace(regexp, 'Type');
// console.log(fraseNova);

// flag g signfica global, ele seleciona todas as letras.
// const frase = 'Javascript';
// const regexp = /a/g;
// const fraseNova = frase.replace(regexp, 'i');
// console.log(fraseNova);

// flag i ele ignora se é maiuscula ou minuscula
// const frase = 'Perdeu perdido';
// const regexp = /Pe/gi;
// const fraseNova = frase.replace(regexp, 'Ba');
// console.log(fraseNova); // Bardeu Bardido

// Character Class /[ab]/ ira procurar por a ou b
// const frase = 'JavaScript';
// const regexp = /[ai]/gi; // procura por todo a, A, i, I
// const fraseNova = frase.replace(regexp, 'u');
// console.log(fraseNova); // JuvuScrupt 

// Character Class /[-.]/ procura por - ou .
// const stringNumeros = '111.222-333-44';
// const regexp = /[-.]/g; 
// const NumeroSemEspaco = stringNumeros.replace(regexp, ''); // Substitui todos os - e .
// console.log(NumeroSemEspaco); // 11122233344 

// Um ou Outro
// Procura: B, seguido de r, a seguido de s ou z, seguido de i, l
// const pais = 'Brasil é com z: Brazil';
// const regexp = /Bra[sz]il/g; 
// const substituiPais = pais.replace(regexp, 'Prazer'); 
// console.log(substituiPais); // Prazer é com z: Prazer 

// De A à Z
// O traço - dentro de [] pode servir para definirmos um alcance. [A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à 9. A tabela UNICODE é utilizada como referência para definir os caracteres dentro do alcance.

//Busca por itens de a à z
// const regexp = /[a-z]/g;
// const frase = 'Javascript é a linguage.';
// const replaceFrase = frase.replace(regexp, '0');
// console.log(replaceFrase); // J000000000 é 0 00000000.

// Busca por itens de a à z e A à Z 
// const regexp = /[a-zA-Z]/g;
// const frase = 'Javascript é a linguage.';
// const replaceFrase = frase.replace(regexp, '1');
// console.log(replaceFrase); // 1111111111 é 1 11111111.

// Busca por números de 0 à 9
// const regexpNumero = /[0-9]/g;
// const numerosString = '123.333.333-33';
// const replaceNumeros =  numerosString.replace(regexpNumero, 'X');
// console.log(replaceNumeros); // XXX.XXX.XXX-XX

//  o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a]
// Procura: por tudo que não estiver entre a e z 

// Ponto seleciona tudo, menos quebras de linha
//procura todos os caracteres, menos quebra de linha
// const frase = 'Javascript é a linguagem';
// const regexp = /./g;
// const replaceFrase = frase.replace(regexp, '0');
// console.log(replaceFrase); // 000000000000000000000000

// Lista de caracteres especiais: +*?^$\.[]{}()|/
// Escapar caracteres especiais \
// const regexp = /\./g;
// const regexpAlternativa = /[.]/g;
// const numerosString = '999.222.222.11';
// const replaceNumeros =  numerosString.replace(regexp, '-');
// console.log(replaceNumeros); // 999-222-222-11

// Word: O \w irá selecionar qualquer caracter alfanumérico e o underline. É a mesma coisa que [A-Za-z0-9_].
// Procura: todos os alfanuméricos
// const regexp = /\w/g;
// const frase = 'Guarda-chuva R$ 23,00.';
// const replaceFrase = frase.replace(regexp, '-');
// console.log(replaceFrase);  // ------------ -$ --,--.

// NOT WORD: O \W irá selecionar tudo o que não for caracter alfanumérico e o underline. É a mesma coisa que [^A-Za-z0-9_].
// Procura: o que não for caracter alfanuméricos
// const regexp = /\W/g;
// console.log('Guarda-chuva R$ 23,00.'.replace(regexp, '-'));// Guarda-chuva-R--23-00-

// DIGIT: O \d irá selecionar qualquer dígito. É a mesma coisa que [0-9].
// Procura: todos os dígitos
// const regexp = /\d/g;
// const regexpTelefone = '+55 (21) 2222-2222'
// const replaceTelefone = regexpTelefone.replace(regexp, 'X');
// console.log(replaceTelefone); // +XX (XX) XXXX-XXXX.

// NOT DIGIT: O \D irá selecionar tudo que não for dígito. É a mesma coisa que [^0-9].
// Procura: o que não for dígito
// const regexp = /\D/g;
// console.log('+55 (21) 2222-2222'.replace(regexp, ''));// 552122222222

// WHITESPACE: O \s irá selecionar qualquer espaço em branco, isso inclui espaços, tabs, quebra de linhas.
// Procura: espaços em branco
// const regexp = /\s/g;
// console.log('+55 (21) 2222-  2222  '.replace(regexp, ''));// +55(21)2222-2222

// NOT WHITESPACE: O \S irá selecionar qualquer caracter que não for espaço em branco.
// Procura: o que não for espaço em branco
// const regexp = /\S/g;
// console.log('+55 (21) 2222-  2222  '.replace(regexp, ''));// XXX XXXX XXXXX  XXXX  

// QUANTIFICADOR: É possível selecionar caracteres seguidos, como /bbb/g irá selecionar apenas bbb. Com as chaves podemos indicar a repetição /b{3}/g. Agora ele está fazendo uma seleção completa e não caracter por caracter.
// Procura: 4 a's seguidos
// const regexp = /aaaa/g;
// const regexpAlt = /a{4}/g;
// console.log('Vaaaai ali por favor.'.replace(regexp, 'a')); // Vai ali por favor.  

// QUANTIFICADOR MIN E MAX
// Podemos informar o min e max do quantificador /a{2,4}/ vai selecionar quando aparecer a duas vezes ou até 4 vezes. /a{2,}/ irá selecionar quando se repetir duas ou mais vezes.
// Procura: dígitos seguidos de 2 à 3
// const regexp = /\d{2,3}/g;
// console.log('222.333.222.42'.replace(regexp, 'X'));// X.X.X.X

// Procura: letras seguidos com 1 caracter ou mais
// const regexpLetras = /\w{1,}/g;
// console.log('A melhor linguagem é JavaScript'.replace(regexpLetras, 'X'));// X X X é X

// MAIS + : O sinal de + significa que devemos selecionar quando existir pelo menos uma ou mais ocorrências.
// Procura: dígitos em ocorrência de um ou mais
// const regexp = /\d+/g;
// console.log('222.333.222.42'.replace(regexp, 'X'));// X.X.X.X

// Procura: Começa com d, seguido por uma ou mais letras.
// const regexpLetras = /d\w+/g;
// console.log('Dígitos, dados, desenhos, Dito, d'.replace(regexpLetras, 'X'));
// // Dígitos, X, X, Dito, d

// ASTERISCO * : O sinal * significa que devemos selecionar quando existir 0 ou mais ocorrências.
// Procura: Começa com d, seguido por zero ou mais letras.
// const regexp = /d\w*/g;
// console.log('Dígitos, dados, desenhos, Dito, d'.replace(regexp, 'X'));// Dígitos, X, X, Dito, X

// OPCIONAL ? : O sinal ? significa que o caracter é opcional, pode ou não existir.
// Procura: Por regex com p opcional
// const regexp = /regexp?/g;
// console.log('Qual é o certo, regexp ou regex?'.replace(regexp, 'Regular Expression'));// Qual é o certo, Regular Expression ou Regular Expression?

// ALTERNADO | : O sinal | irá selecionar um ou outro. java|php
// Procura: java ou php (case insensitive)
// const regexp = /java|php/gi;
// console.log('PHP e Java são linguagens diferentes'.replace(regexp, 'X'));
// // X e X são linguagens diferente

// WORD BOUNDARY \B : O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.
// Procura: java (case insensitive)
// const regexp = /java/gi;
// console.log('Java não é JavaScript.'.replace(regexp, 'X'));// X não é XScript.

// Procura: java (case insensitive)
// const regexpBoundary = /\bjava\b/gi;
// console.log('Java não é JavaScript.'.replace(regexpBoundary, 'X'));// X não é JavaScript.

// Procura: Dígitos em sequência, que estejam isolados
// const regexpDigito = /\b\d+\b/gi;
// console.log('O Restaurante25 na Rua 3, custa R$ 32,00'.replace(regexpDigito, 'X')); // O Restaurante25 na Rua X, custa R$ X,X

// console.log('11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X'));
// // 11_22 X-X XéX 77e88

// NOT WORD BOUNDARY \B : É o contrário do \b.
// const regexpDigito = /\B\d+\B/gi;
// console.log('11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X'));// 1X_X2 33-44 55é66 7XeX8

// ANCHOR BEGINNING: Ao utilizar o  ^ significa que busca deve ser iniciada no início da linha.
// Procura: sequência de alfanuméricos
// no início da linha.
// const regexp = /^\w+/g;
// console.log(
//   `andre@origamid.com
//   contato@origamid.com`.replace(regexp, 'X')
// );// X@origamid.com
// // contato@origamid.com

// FLAG: M : Com a flag m de multiline, informa que a busca de início ^ e final $ de linha devem ocorrer em todas as linhas disponíveis.

// Procura: sequência de alfanuméricos
// no final da linha.
// const regexp = /\w+$/gm;
// console.log(
//   `andre@origamid.com
//   contato@origamid.com`.replace(regexp, 'X')
// );// andre@origamid.X
// // contato@origamid.X

// Procura: sequência de alfanuméricos
// no início da linha.
// const regexp = /^\w+/gm;
// console.log(
// `andre@origamid.com
// contato@origamid.com`.replace(regexp, 'X')
// );// X@origamid.com
// // X@origamid.com

// LINE FEED \N : O \n irá selecionar o final de uma linha, quando criamos uma nova. Obs: \t seleciona tabs
// const regexp = /\n/g;
// console.log(
//   `andre@origamid.com\ncontato@origamid.com`.replace(regexp, '---')
// );// andre@origamid.com---contato@origamid.com

// console.log(
//   `andre@origamid.com
//   contato@origamid.com`.replace(regexp, 'X')
// );// andre@origamid.com---contato@origamid.com

// UNICODE : O \u seleciona o respectivo caracter unicode, de acordo com o código passado em \uXXXX. Ex: \u0040 seleciona o @.








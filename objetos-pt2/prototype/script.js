function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function() {
    return 'Abraçou';
  }
  this.andar = function() {
    return 'Andou pelo objeto';
  }
}

const andre = new Pessoa('André', 28)
console.log(Pessoa.prototype);

Pessoa.prototype.andar = function() {
  return this.nome + ' Pesssoa andou';
}

Pessoa.prototype.nadar = function() {
  return this.nome + ' Pessoa nadou';
}
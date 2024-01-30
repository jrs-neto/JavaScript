let div = document.querySelector('div');
// Ambos os valores selecionam a mesma div acima
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

div.dataset.height = 1000; // cria a propiedade

delete div.dataset.width; // deleta a propriedade

div.dataset.totalHeight = 2000;
console.log(div.dataset);

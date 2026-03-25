const inputDesc = document.querySelector('#desc-despesa');
const inputValor = document.querySelector('#valor-gringo');
const inputCotacao = document.querySelector('cotacao');
const btnAdicionar = document.querySelector('#btn-adicionar');
const listasDespesasDOOM = document.querySelector('#listas-despesas');
const totalBrlDOOM = document.querySelector('#total-brl');


let despesas = JSON.parse(localStorage.getItem('viagem-despesas')) || [];


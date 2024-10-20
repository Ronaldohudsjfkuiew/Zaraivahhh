const acaoButton = document.getElementById('acao');
const romanceButton = document.getElementById('romance');
const suspenseButton = document.getElementById('suspense');
const terrorButton = document.getElementById('terror');

acaoButton.addEventListener('click', function() {
  location.href = 'acao.html';
});

romanceButton.addEventListener('click', function() {
  location.href = 'romance.html';
});

suspenseButton.addEventListener('click', function() {
  location.href = 'suspense.html';
});

terrorButton.addEventListener('click', function() {
  location.href = 'terror.html';
});

document.getElementById('voltar').addEventListener('click', function() {
  location.href = 'index.html'; 
});

document.getElementById("alugar1").addEventListener('click', function() {
  location.href = 'alugar.html'; 
});
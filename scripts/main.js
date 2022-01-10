const meuCabecalho = document.querySelector('h1');
meuCabecalho.textContent = 'Olá mundo!';

const parraf = document.querySelector('p');
parraf.addEventListener("click", atualizarNome);

function atualizarNome(){
    var nome = prompt("insira um nome");
    parraf.textContent = 'Jogador #1: '+nome;
}

// Função: Cria um novo parágrafo e o insere no fim do arquivo HTML.

function criarParagrafo() {
    var para = document.createElement('p');
    para.textContent = 'Você clicou no botão!';
    document.body.appendChild(para);
  }
  
  /*
    1. Captura referências de todos os botões na página e armazena isso em um array.
    2. Vai até todos os botões e adiciona um event listener click a cada um deles.
  
    Quando cada botão é clicado, a função criarParagrafo() será executada.
  */
  
  const botoes = document.querySelectorAll('button');

  
  for(var i = 0; i < botoes.length ; i++) {
    botoes[i].addEventListener('click', criarParagrafo);
  }

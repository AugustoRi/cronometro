const buttonStart = document.querySelector('#start');
const buttonStop = document.querySelector('#stop');
const buttonRestart = document.querySelector('#restart');
const unidades = [1,2,3,4,5,6,7,8,9];

function ligarBotoes(botao) {
  botao.enabled = true;
  botao.disabled = false;

  return botao;
}

function desligarBotoes(botao) {
  botao.enabled = false;
  botao.disabled = true;
}

function comecar() {
  desligarBotoes(buttonStart);
  ligarBotoes(buttonStop);
  desligarBotoes(buttonRestart);
};

function parar() {
  ligarBotoes(buttonStart);
  desligarBotoes(buttonStop);
  ligarBotoes(buttonRestart);
}

function zerar() {
  ligarBotoes(buttonStart);
  desligarBotoes(buttonStop);
  desligarBotoes(buttonRestart);
}


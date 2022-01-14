const buttonStart = document.querySelector('#start');
const buttonStop = document.querySelector('#stop');
const buttonRestart = document.querySelector('#restart');
var minutos = document.querySelector('#minutos');
var segundos = document.querySelector('#segundos');
var milissegundos = document.querySelector('#milissegundos');
var i = 0;

function ligarBotoes(botao) {
  botao.enabled = true;
  botao.disabled = false;

  return botao;
}

function desligarBotoes(botao) {
  botao.enabled = false;
  botao.disabled = true;

  return botao;
}

function botaoComecar() {
  desligarBotoes(buttonStart);
  ligarBotoes(buttonStop);
  desligarBotoes(buttonRestart);

  comecar();
};

setInterval(function comecar(){
  let min = parseInt(minutos.textContent);
  let seg = parseInt(segundos.textContent);
  let mili = parseInt(milissegundos.textContent);

  if (buttonStart.disabled) {
    //estagio inicial = milissegundos
    i += 1;
    //milissegundos -> segundos
    if (i === 100) {
      i = 0;
      mili = 0;
      seg += 1;
      milissegundos.textContent = mili;
      segundos.textContent = seg;
    }
    //segundos -> minutos
    else if (seg === 60) {
      i = 0;
      mili = 0;
      seg = 0;
      min += 1;
      milissegundos.textContent = mili;
      segundos.textContent = seg;
      minutos.textContent = min;
    }
    //inserir milissegundos
    else {
      mili += 1;
      milissegundos.textContent = mili;
    }
  }
}, 10);

function botaoParar() {
  ligarBotoes(buttonStart);
  desligarBotoes(buttonStop);
  ligarBotoes(buttonRestart);
}

function botaoZerar() {
  ligarBotoes(buttonStart);
  desligarBotoes(buttonStop);
  desligarBotoes(buttonRestart);

  minutos.textContent = '00';
  segundos.textContent = '00';
  milissegundos.textContent = '00';
}

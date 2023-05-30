// captura os id
const paleta = document.getElementById('color-palette');
const botao = document.getElementById('button-random-color');

// Função para preencher as cores na paleta
const preencherCores = () => {
  const colors = [];
  colors.push('rgb(0, 0, 0)');

  // Verifica se tem cor nos quadrados, se não adiciona cores aleatórias
  for (let index = 0; index < 4; index += 1) {
    const color = colors[index] || coresRandom();

    // Cria a div chamada "color" e adiciona a cor de fundo
    const div = document.createElement('div');
    div.className = 'color';
    div.style.backgroundColor = color;
    paleta.appendChild(div);

    // Adiciona cores aleatórias e garante que sejam diferentes
    if (!colors[index]) {
      colors.push(color);
    }
  }
};

// Função para selecionar a cor preta inicialmente
const selecionarCorPreta = () => {
  const blackColor = paleta.getElementsByClassName('color')[0];
  blackColor.classList.add('selected');
};

// Função para atribuir o evento de clique às cores
const atribuirEventoClique = () => {
  const selecionarCor = (event) => {
    // Remove a classe "selected" de todas as cores da paleta
    const cores = paleta.getElementsByClassName('color');
    for (let index = 0; index < cores.length; index += 1) {
      cores[index].classList.remove('selected');
    }

    // Adiciona a classe "selected" à cor clicada
    const corClicada = event.target;
    corClicada.classList.add('selected');
  };

  // Atribui o evento de clique a todas as cores da paleta
  const cores = paleta.getElementsByClassName('color');
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].addEventListener('click', selecionarCor);
  }
};

// Chama as três funções separadamente para executar suas respectivas tarefas
const preencher = () => {
  preencherCores();
  selecionarCorPreta();
  atribuirEventoClique();
};

// coresRandom preenche no preencher
const coresRandom = () => {
  const cor1 = Math.floor(Math.random() * 255);
  const cor2 = Math.floor(Math.random() * 255);
  const cor3 = Math.floor(Math.random() * 255);

  return `rgb(${cor1}, ${cor2}, ${cor3})`;  
};
// percorre as div e atualiza as cores aleatorias
const trocarCores = function () {
  const colorPalette = paleta.getElementsByClassName('color');
  const colors = [];

  for (let index = 0; index < colorPalette.length; index += 1) {
    const color = coresRandom();
    colorPalette[index].style.backgroundColor = color;
    colors.push(color);
  }

  localStorage.setItem('colorPalette', JSON.stringify(colors));
};

// chama a funcao depois da pagina carregar
window.addEventListener('DOMContentLoaded', () => {
  preencher();
});
// quando clicar no botao chama a funcao e troca as trocas
botao.addEventListener('click', () => {
  trocarCores();
  if (localStorage.getItem('divs')) {
    const savedColors = JSON.parse(localStorage.getItem('divs'));
    const colorPalette = paleta.getElementsByClassName('color');

    // Atualiza as cores das divs com os valores salvos
    for (let index = 0; index < colorPalette.length; index += 1) {
      colorPalette[index].style.backgroundColor = savedColors[index];
    }
  }
});

const pixelBoard = document.getElementById('pixel-board');

for (let index = 0; index < 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}
// funcao para preencher o pixel com a cor selecionada
const preencherPixel = function(event) {
  const corSelecionada = paleta.querySelector('.selected');
  if (!corSelecionada) return;
// pinta
  const pixel = event.target;
  pixel.style.backgroundColor = corSelecionada.style.backgroundColor;
};
// corre os quadrados e vincula o click a funcao
const pixels = document.getElementsByClassName('pixel');
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', preencherPixel);
}
// funcao que pinta todos quadrados de branco
const limparQuadro = function() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
};
// evento que chama a funcao quando clica no botao limpar
const botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', limparQuadro);
// Função para salvar o desenho atual no localStorage

function adicionarTarefa() {
  const textoTarefa = document.getElementById('texto-tarefa').value;
  const novaTag = criarNovaTag(textoTarefa);
  adicionarEventoClique(novaTag);
  adicionarTarefaNaLista(novaTag);
  limparCampoTexto();
}

function criarNovaTag(texto) {
  const novaTag = document.createElement('li');
  novaTag.textContent = texto;
  return novaTag;
}

function removerDestaqueTodasTarefas() {
  const elementosLista = document.getElementsByTagName('li');
  for (let index = 0; index < elementosLista.length; index += 1) {
    elementosLista[index].style.backgroundColor = '';
  }
}

function adicionarEventoClique(tag) {
  tag.addEventListener('click', () => {
    removerDestaqueTodasTarefas();
    tag.style.backgroundColor = 'gray';
  });

  let clicks = 0;
  const tempoDuploClique = 300;
  let timeoutId;

  tag.addEventListener('click', () => {
    clicks++;
    if (clicks === 1) {
      timeoutId = setTimeout(() => {
        clicks = 0;
      }, tempoDuploClique);
    } else if (clicks === 2) {
      clearTimeout(timeoutId);
      clicks = 0;
      if (tag.classList.contains('completed')) {
        tag.classList.remove('completed');
      } else {
        tag.classList.add('completed');
      }
    }
  });
}

function adicionarTarefaNaLista(tag) {
  const lista = document.getElementById('lista-tarefas');
  lista.appendChild(tag);
}

function limparCampoTexto() {
  document.getElementById('texto-tarefa').value = '';
}

function apagarTodasTarefas() {
  const lista = document.getElementById('lista-tarefas');
  lista.innerHTML = '';
}

function removerFinalizados() {
  const lista = document.getElementById('lista-tarefas');
  const tarefasFinalizadas = lista.getElementsByClassName('completed');
  while (tarefasFinalizadas.length > 0) {
    tarefasFinalizadas[0].remove();
  }
}

const botao = document.getElementById('criar-tarefa');
botao.addEventListener('click', adicionarTarefa);

const botaoApagar = document.getElementById('apaga-tudo');
botaoApagar.addEventListener('click', apagarTodasTarefas);

const botaoRemoverFinalizados = document.getElementById('remover-finalizados');
botaoRemoverFinalizados.addEventListener('click', removerFinalizados);

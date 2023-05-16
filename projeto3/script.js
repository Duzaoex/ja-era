const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const days = document.querySelector('#days');

for (let index = 0; index < decemberDaysList.length; index += 1) {
  const element = decemberDaysList[index];

  const criandoLi = document.createElement('li');
  criandoLi.className = 'day';
  criandoLi.innerText = element;
  days.appendChild(criandoLi);

  if (element === 24 || element === 31 || element === 25) {
    criandoLi.classList.add('holiday');
  }

  if (element === 4 || element === 11 || element === 18 || element === 25) {
    criandoLi.classList.add('friday');
  }
}

const coresFds = () => {
  const btholiday = document.querySelector('#btn-holiday');
  const hooliday = document.querySelectorAll('.holiday');
  const backgroundColor = 'rgb(238,238,238)';
  const newBackGroundColor = 'green';

  btholiday.addEventListener('click', () => {
    for (let index = 0; index < hooliday.length; index += 1) {
      const feriado = hooliday[index];
      const corFeriado = feriado.style.backgroundColor === newBackGroundColor;
      if (corFeriado) {
        hooliday[index].style.backgroundColor = backgroundColor;
      } else {
        hooliday[index].style.backgroundColor = newBackGroundColor;
      }
    }
  });
};

coresFds();


const displayFridays = (sextas) => {
  const playSexta = document.querySelector('#btn-friday');
  const sexta = document.querySelectorAll('.friday');
  const comemoracao = 'SEXTOU o/';

  playSexta.addEventListener('click', () => {
    for (let index = 0; index < sexta.length; index += 1) {
      if (sexta[index].innerText !== comemoracao) {
        sexta[index].innerText = comemoracao;
      } else {
        sexta[index].innerText = sextas[index];
      }
    }
  });
}
const sextou = [4, 11, 18, 25];
displayFridays(sextou);

function zoomIn(event) {
  event.target.style.fontSize = '30px';
}

function zoomOut(event) {
  event.target.style.fontSize = '20px';
}

const calendarDaysList = document.querySelectorAll('.day');

for (let index = 0; index < calendarDaysList.length; index += 1) {
  const day = calendarDaysList[index];
  day.addEventListener('mouseover', zoomIn);
  day.addEventListener('mouseout', zoomOut);
}

function selectTask(event) {
  const tasks = document.querySelectorAll('.task');
  tasks.forEach(task => task.classList.remove('selected'));
  event.target.classList.add('selected');
}

function assignColorToDay(event) {
  const selectedTask = document.querySelector('.selected');
  const selectedColor = window.getComputedStyle(selectedTask).backgroundColor;
  const day = event.target;

  if (day.style.color === selectedColor) {
    day.style.color = 'rgb(119, 119, 119)';
  } else {
    day.style.color = selectedColor;
  }
}

const taskItems = document.querySelectorAll('.task');
const daysList = document.querySelectorAll('.day');

taskItems.forEach(task => {
  task.addEventListener('click', selectTask);
});

daysList.forEach(day => {
  day.addEventListener('click', assignColorToDay);
});
function selectTask(event) {
  const taskItems = document.querySelectorAll('.task');
  const clickedTask = event.target;

  taskItems.forEach(task => {
    if (task === clickedTask && !task.classList.contains('selected')) {
      task.classList.add('selected');
    } else {
      task.classList.remove('selected');
    }
  });
}

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Por favor, insira um texto para o compromisso.');
    return;
  }

  const taskList = document.getElementById('task-list');
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;
  taskList.appendChild(taskItem);

  taskInput.value = '';
}

const addButton = document.getElementById('btn-add');
addButton.addEventListener('click', addTask);

const taskInput = document.getElementById('task-input');
taskInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Поиск элементов на страницы
const form =  document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');

let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

tasks.forEach((task) => renderTask(task));

checkEmptyList();

form.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);
tasksList.addEventListener('click', doneTask);

// Функции
function addTask(e) {
    // Отмена отправки формы
    e.preventDefault();


    // Вытаскивание текста задачи из поля ввода
    const taskText = taskInput.value

    // Описание задачи в виде объекта
    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false
    };

    // Добавление задачи в массив с задачами
    tasks.push(newTask)

    // сохранение списка задач
    saveLocalStorage();

    // Рендеринг задачи на страницу
    renderTask(newTask);

    // Очистка input и возврат фокуса
    taskInput.value = "";
    taskInput.focus();

    checkEmptyList();
    
}

function deleteTask(e) {
    // Клик не по кнопке "удалить задачу"
    if(e.target.dataset.action !== 'delete') return;

    // Клик точно по кнопке "удалить задачу"
    const parentNode =  e.target.closest('li');


    // Определение ID задачи
    const id = Number(parentNode.id);

    // Удаляем задачу через фильтрацию массива
    tasks = tasks.filter((task) => task.id !== id);

   // сохранение списка задач
   saveLocalStorage();

    // Удаление задачи из разметки
    parentNode.remove();

    checkEmptyList()
}

function doneTask(e) {
    // Клик не по кнопке "выполнить задачу"
    if(e.target.dataset.action !== 'done') return;

    // Клик точно по кнопке "выполнить задачу"
    const parentNode =  e.target.closest('li');

    // Определение ID задачи
    const id = Number(parentNode.id);

    const task = tasks.find((task) => task.id === id);
    task.done = !task.done;

    // сохранение списка задач
    saveLocalStorage();

    const taskTitle = parentNode.querySelector('.task-title');
    taskTitle.classList.toggle('task-title--done')

}

function checkEmptyList() {
    if(tasks.length === 0) {
        const emptyListHTML = `
        <li id="emptyList" class="list-group-item empty-list">
        <img src="./img/leaf.svg" alt="empty" width="48" class="leaf">
        <div class="empty-list_title">Пустой список задач</div>
        </li>`

        tasksList.insertAdjacentHTML('afterbegin', emptyListHTML);
    } 

    if (tasks.length > 0) {
        const emptyListEl = document.querySelector('#emptyList');
        emptyListEl ? emptyListEl.remove() : null;
    }
}

function saveLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTask(task) {
      // Формирование CSS класса
    const newClass = task.done ? "task-title task-title--done" : "task-title";

    // Разметка для новой задачи
    const taskHTML = 
    `
    <li id="${task.id}" class="list-group-item task-item d-flex justify-content-between">
        <span class="${newClass}">${task.text}</span>
        <div class="task-title_buttons">
            <button type="button" data-action="done" class="btn-action">
                <img src="./img/tick.svg" alt="Done" width="18" height="18">
            </button>
            <button type="button" data-action="delete" class="btn-action">
                <img src="./img/cross.svg" alt="Delete" width="18" height="18">
            </button>
        </div>
    </li>`;

    // Добавление задачи на страницу
    tasksList.insertAdjacentHTML('beforeend', taskHTML);
}
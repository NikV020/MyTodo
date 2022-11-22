// Поиск элементов на страницы
const form =  document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');


form.addEventListener('submit', (e) => {
    // Отмена отправки формы
    e.preventDefault();


    // Вытаскивание текста задачи из поля ввода
    const taskText = taskInput.value

    // Разметка для новой задачи
    const taskHTML = 
    `
    <li class="list-group-item task-item d-flex justify-content-between">
        <span class="task-title">${taskText}</span>
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

})

// Поиск элементов на страницы
const form =  document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');

// Добавление задачи
form.addEventListener('submit', addTask);

// Удаление задачи
tasksList.addEventListener('click', deleteTask)

// Функции
function addTask(e) {
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
 tasksList.insertAdjacentHTML('beforeend', taskHTML);

 // Очистка input и возврат фокуса
 taskInput.value = "";
 taskInput.focus();

 // Скрытие emptyList
 if(tasksList.children.length > 1) {
     emptyList.classList.add('none');
 }
}

function deleteTask(e) {
   
}
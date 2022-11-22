// Поиск элементов на страницы
const form =  document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');


form.addEventListener('submit', (e) => {
    // Отмена отправки формы
    e.preventDefault();


    // Вытаскивание текста задачи из поля ввода
    const taskText = taskInput.value

})

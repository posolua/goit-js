// Task-4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
let counterValue = document.querySelector('#value');

const increment = () =>
  (counterValue.textContent = +counterValue.textContent + 1);
const decrement = () => (counterValue.textContent -= 1);
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

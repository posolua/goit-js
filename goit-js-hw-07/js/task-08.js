// Task 8
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

const ref = {
  numbers: document.querySelector('input[type="number"]'),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};
ref.renderBtn.addEventListener('click', getNumber);
ref.destroyBtn.addEventListener('click', destroyBoxes);

function randomColor() {
  const r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
function getNumber() {
  const amount = ref.numbers.value;
  createBoxes(amount);
}
function createBoxes(amount) {
  const arr = [];
  let sizeBox = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    const color = randomColor();
    div.style.width = `${sizeBox}px`;
    div.style.height = `${sizeBox}px`;
    div.style.backgroundColor = color;
    sizeBox += 10;
    arr.push(div);
  }
  ref.boxes.append(...arr);
}
function destroyBoxes() {
  ref.boxes.innerHTML = '';
}

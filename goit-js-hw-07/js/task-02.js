// Task 2
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const items = ingredients.map(el => {
  const item = document.createElement('li');
  item.textContent = el;
  return item;
});
const ingredientsRef = document.querySelector('#ingredients').append(...items);

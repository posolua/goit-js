// Task 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('change', onInputChange);

function validColor(target) {
  target.classList.remove('invalid');
  target.classList.add('valid');
}
function invalidColor(target) {
  target.classList.remove('valid');
  target.classList.add('invalid');
}

function onInputChange(event) {
  Number(event.target.dataset.length) === event.target.value.length
    ? validColor(event.target)
    : invalidColor(event.target);
}

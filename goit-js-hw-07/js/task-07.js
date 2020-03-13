// Task 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//  и изменяет инлайн-стиль span#text обновляя свойство font-size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

const inputChange = {
  inputRef: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};
inputChange.inputRef.addEventListener('input', changeTextSize);
function changeTextSize(event) {
  inputChange.text.style.fontSize = `${event.target.value}px`;
}

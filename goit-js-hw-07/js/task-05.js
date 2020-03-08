// Task 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
const textEdit = () =>
  textInput.value == ''
    ? (textOutput.textContent = 'незнакомец')
    : (textOutput.textContent = textInput.value);
textInput.addEventListener('input', textEdit);

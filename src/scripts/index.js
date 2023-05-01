// input eventHandle
const insertInTextarea = (event) => {
  const textArea = document.querySelector('.textarea__input');
  let content = '';

  if (event.target.classList.contains('keyboard__button')) {
    content = event.target.querySelector('.button__content').innerHTML;
  } else if (event.target.classList.contains('button__additional-content')) {
    content = event.target.nextSibling.innerHTML;
  } else if (event.target.classList.contains('button__content')) {
    content = event.target.innerHTML;
  }
  let position = null;
  switch (content) {
    case 'Tab':// need to rework
      textArea.value += '    ';
      break;

    case 'Del': // need to rework
      position = textArea.selectionStart;
      textArea.value = textArea.value.slice(0, position) + textArea.value.slice(position + 1);
      break;

    case 'Enter':
      position = textArea.selectionStart;
      textArea.value += '\n';
      break;

    case 'Shift':// need to impliment
      break;

    case 'Backspace':
      position = textArea.selectionStart;
      if (position !== 0) {
        textArea.value = textArea.value.slice(0, position - 1) + textArea.value.slice(position);
      }
      break;

    case 'CapsLock':// need to impliment
      break;

    case ' ':// need to rework
      textArea.value += ' ';
      break;

    case 'Alt':
    case 'Ctrl':
    case 'Win':
      break;

    default:
      textArea.value += content;
      break;
  }
  textArea.selectionStart = position;
  textArea.selectionEnd = position;
};

const buttonClickEventHandler = () => {
  const keyboard = document.querySelector('.keyboard');
  keyboard.addEventListener('click', insertInTextarea);
};

buttonClickEventHandler();

// activate eventHandle
const activateButton = (event) => {
  if (event.target.classList.contains('keyboard__button')) {
    event.target.classList.toggle('keyboard__button_active');
  } else if (event.target.classList.contains('button__additional-content')) {
    event.target.parentNode.classList.toggle('keyboard__button_active');
  } else if (event.target.classList.contains('button__content')) {
    event.target.parentNode.classList.toggle('keyboard__button_active');
  }
};

const buttonActivateOnClickEventHandler = () => {
  const keyboard = document.querySelector('.keyboard');
  keyboard.addEventListener('mousedown', activateButton);
};

const buttonDisactivateOnClickEventHandler = () => {
  const keyboard = document.querySelector('.page');
  keyboard.addEventListener('mouseup', activateButton);
};

buttonClickEventHandler();
buttonActivateOnClickEventHandler();
buttonDisactivateOnClickEventHandler();

document.addEventListener('keydown', (event) => {
  const button = document.querySelector(`[data-type = ${event.code}]`);
  if (!button.classList.contains('keyboard__button_active')) {
    button.classList.add('keyboard__button_active');
  }
});

document.addEventListener('keyup', (event) => {
  const button = document.querySelector(`[data-type = ${event.code}]`);
  button.classList.toggle('keyboard__button_active');
});

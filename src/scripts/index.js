// input eventHandle
const insertInTextarea = (event) => {
  console.log(event);
  const textArea = document.querySelector('.textarea__input');
  let content = '';

  if (event.target.classList.contains('keyboard__button')) {
    content = event.target.querySelector('.button__content_active').innerHTML;
  } else if (event.target.classList.contains('button__content_active')) {
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

    case 'Shift':
      break;

    case 'Backspace':
      position = textArea.selectionStart;
      if (position !== 0) {
        textArea.value = textArea.value.slice(0, position - 1) + textArea.value.slice(position);
        position -= 1;
      } else if (textArea.value !== 0) {
        textArea.value = textArea.value.slice(0, textArea.value.length - 1);
      }
      break;

    case 'CapsLock': {
      const buttonsContent = document.querySelectorAll('.button__content');
      for (let i = 0; i < buttonsContent.length; i += 1) {
        buttonsContent[i].classList.toggle('button__content_disabled');
        buttonsContent[i].classList.toggle('button__content_active');
      }
      if (event.type === 'click') {
        if (event.target.classList.contains('button__content')) {
          event.target.parentNode.classList.toggle('keyboard__button_active');
        } else {
          event.target.classList.toggle('keyboard__button_active');
        }
      }
      break;
    }

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
  const keyboard = document.querySelectorAll('.keyboard');
  for (let i = 0; i < 2; i += 1) {
    keyboard[i].addEventListener('click', insertInTextarea);
  }
};

buttonClickEventHandler();

// activateButton  eventHandler
let eventContainer = null;
const activateButton = (event) => {
  if (event.target.classList.contains('keyboard__button')) {
    eventContainer = event.target;
    event.target.classList.toggle('keyboard__button_active');
  } else if (event.target.classList.contains('button__content')) {
    eventContainer = event.target.parentNode;
    event.target.parentNode.classList.toggle('keyboard__button_active');
  }
};

const buttonActivateOnClickEventHandler = () => {
  const keyboard = document.querySelectorAll('.keyboard');
  for (let i = 0; i < 2; i += 1) {
    keyboard[i].addEventListener('mousedown', activateButton);
  }
};

// disactivateButton  eventHandler
const disactivateButton = () => {
  if (eventContainer) {
    eventContainer.classList.toggle('keyboard__button_active');
  }
  eventContainer = null;
  // if (event.target.classList.contains('keyboard__button')) {
  //   event.target.classList.toggle('keyboard__button_active');
  // } else if (event.target.classList.contains('button__content')) {
  //   event.target.parentNode.classList.toggle('keyboard__button_active');
  // }
};

const buttonDisactivateOnClickEventHandler = () => {
  const keyboard = document.querySelector('.page');
  keyboard.addEventListener('mouseup', disactivateButton);
};

buttonClickEventHandler();
buttonActivateOnClickEventHandler();
buttonDisactivateOnClickEventHandler();

// keyup and keydown eventHandler

const keyUpAndDownContainer = {};

const changeLanguege = () => {
  if (keyUpAndDownContainer.ShiftLeft && keyUpAndDownContainer.ControlLeft) {
    const keyboardsBody = document.querySelectorAll('.keyboard');

    // set localStorage language
    if (localStorage.lang === 'ru' || !localStorage.lang) {
      localStorage.lang = 'en';
    } else {
      localStorage.lang = 'ru';
    }

    // activate keyboard with another language
    for (let i = 0; i < 2; i += 1) {
      keyboardsBody[i].classList.toggle('keyboard_active');
      keyboardsBody[i].classList.toggle('keyboard_hidden');
    }
  }
};

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const keyboard = document.querySelector('.keyboard_active');
  const button = keyboard.querySelector(`[data-type=${event.code}]`);
  keyUpAndDownContainer[event.code] = true;
  changeLanguege();
  if (button) { // NEED REFACTOR
    button.classList.toggle('keyboard__button_active');
    const myEvent = { target: button };
    insertInTextarea(myEvent);
  }
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  keyUpAndDownContainer[event.code] = false;
  const keyboard = document.querySelector('.keyboard_active');
  const button = keyboard.querySelector(`[data-type=${event.code}]`);
  if (event.code !== 'CapsLock' && button && button.classList.contains('keyboard__button_active')) {
    button.classList.toggle('keyboard__button_active');
  }
});

// shift eventHandler
const shiftButtonMouseDownEventHandler = () => {
  const shiftButton = document.querySelector('[data-type="ShiftLeft"]');
  shiftButton.addEventListener('mousedown', () => {
    const keyboard = document.querySelector('.keyboard_active');
    const buttonsContent = keyboard.querySelectorAll('.button__content');
    for (let i = 0; i < buttonsContent.length; i += 1) {
      buttonsContent[i].classList.toggle('button__content_disabled');
      buttonsContent[i].classList.toggle('button__content_active');
    }
  });
};

const shiftButtonMouseUpEventHandler = () => {
  const shiftButton = document.querySelector('[data-type="ShiftLeft"]');
  shiftButton.addEventListener('mouseup', () => {
    const keyboard = document.querySelector('.keyboard_active');
    const buttonsContent = keyboard.querySelectorAll('.button__content');
    for (let i = 0; i < buttonsContent.length; i += 1) {
      buttonsContent[i].classList.toggle('button__content_disabled');
      buttonsContent[i].classList.toggle('button__content_active');
    }
  });
};

shiftButtonMouseDownEventHandler();
shiftButtonMouseUpEventHandler();

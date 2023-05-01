// input eventHandle
const insertInTextarea = (event) => {
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
      }
      if (textArea.value !== 0) {
        textArea.value = textArea.value.slice(0, textArea.value.length - 1);
      }
      break;

    case 'CapsLock': {
      const buttonsContent = document.querySelectorAll('.button__content');
      for (let i = 0; i < buttonsContent.length; i += 1) {
        buttonsContent[i].classList.toggle('button__content_disabled');
        buttonsContent[i].classList.toggle('button__content_active');
      }
      if (event.target.classList.contains('button__content')) {
        event.target.parentNode.classList.toggle('keyboard__button_active');
      }
      event.target.classList.toggle('keyboard__button_active');
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
  const keyboard = document.querySelector('.keyboard_active');
  keyboard.addEventListener('click', insertInTextarea);
};

buttonClickEventHandler();

// activate eventHandle
const activateButton = (event) => {
  if (event.target.classList.contains('keyboard__button')) {
    event.target.classList.toggle('keyboard__button_active');
  } else if (event.target.classList.contains('button__content')) {
    event.target.parentNode.classList.toggle('keyboard__button_active');
  }
};

const buttonActivateOnClickEventHandler = () => {
  const keyboard = document.querySelector('.keyboard_active');
  keyboard.addEventListener('mousedown', activateButton);
};

const buttonDisactivateOnClickEventHandler = () => {
  const keyboard = document.querySelector('.page');
  keyboard.addEventListener('mouseup', activateButton);
};

buttonClickEventHandler();
buttonActivateOnClickEventHandler();
buttonDisactivateOnClickEventHandler();

// keyup and keydown eventHandler
document.addEventListener('keydown', (event) => {
  const button = document.querySelector(`[data-type=${event.code}]`);
  if (!button.classList.contains('keyboard__button_active')) {
    button.classList.add('keyboard__button_active');
  }
});

document.addEventListener('keyup', (event) => {
  const button = document.querySelector(`[data-type=${event.code}]`);
  button.classList.toggle('keyboard__button_active');
});

// shift alt+shift eventHandler
const shiftButtonMouseDownEventHandler = () => {
  const shiftButton = document.querySelector('[data-type="ShiftLeft"]');
  shiftButton.addEventListener('mousedown', () => {
    const buttonsContent = document.querySelectorAll('.button__content');
    for (let i = 0; i < buttonsContent.length; i += 1) {
      buttonsContent[i].classList.toggle('button__content_disabled');
      buttonsContent[i].classList.toggle('button__content_active');
    }
    // const altButton = document.querySelector('[data-type="AltLeft"]');
    // console.log(altButton);
    // altButton.addEventListener('click', () => {
    // });
  });
};

const shiftButtonMouseUpEventHandler = () => {
  const shiftButton = document.querySelector('[data-type="ShiftLeft"]');
  shiftButton.addEventListener('mouseup', () => {
    const buttonsContent = document.querySelectorAll('.button__content');
    for (let i = 0; i < buttonsContent.length; i += 1) {
      buttonsContent[i].classList.toggle('button__content_disabled');
      buttonsContent[i].classList.toggle('button__content_active');
    }
    // const altButton = document.querySelector('[data-type="AltLeft"]');
    // console.log(altButton);
    // altButton.addEventListener('click', () => {
    // });
  });
};

shiftButtonMouseDownEventHandler();
shiftButtonMouseUpEventHandler();

// document.addEventListener('keyup', (event) => {
//   const button = document.querySelector(`[data-type = ${event.code}]`);
//   button.classList.toggle('keyboard__button_active');
// });

// CapsLock eventHandler
// const activateCapsButton = (e) => {
//   const buttonsContent = document.querySelectorAll('.button__content');
//   for (let i = 0; i < buttonsContent.length; i += 1) {
//     buttonsContent[i].classList.toggle('button__content_disabled');
//   }
//   if (e.target.classList.contains('button__content')) {
//     e.target.parentNode.classList.toggle('keyboard__button_active');
//   }
//   e.target.classList.toggle('keyboard__button_active');
// };

// const capsButtonEventHandler = () => {
//   const capsButton = document.querySelector('[data-type="CapsLock"]');
//   capsButton.addEventListener('click', activateCapsButton);
// };

// capsButtonEventHandler();

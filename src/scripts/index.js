const insertInTextarea = (event) => {
  console.log(event.target);
  const textArea = document.querySelector('.textarea__input');
  if (event.target.classList.contains('keyboard__button')) {
    textArea.innerHTML += event.target.querySelector('.button__content').innerHTML;
  } else if (event.target.classList.contains('button__additional-content')) {
    textArea.innerHTML += event.target.nextSibling.innerHTML;
  } else if (event.target.classList.contains('button__content')) {
    textArea.innerHTML += event.target.innerHTML;
  }
};

const buttonClickEventHandler = () => {
  const keyboard = document.querySelector('.keyboard');
  keyboard.addEventListener('click', insertInTextarea);
};

buttonClickEventHandler();

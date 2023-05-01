// eslint-disable-next-line no-unused-vars
class Keyboard {
  constructor(buttonNames) {
    this.buttonNames = buttonNames;
    this.keyboardContainer = document.createElement('div');
    this.keyboardWrapper = document.createElement('div');
    this.keyboardBody = document.createElement('div');
    this.textareaContainer = document.createElement('div');
    this.keyboardDiscriptionContainer = document.createElement('div');
    this.buttonsInRow = 15;
    this.buttonsInColumn = 5;
    this.language = 'ru';
  }

  createKeyboard() {
    this.keyboardContainer.classList.add('keyboard__container');
    this.keyboardWrapper.classList.add('keyboard__wrapper');

    this.keyboardContainer.append(this.createTextarea());
    this.keyboardWrapper.append(this.createKeyboardBody());
    this.keyboardContainer.append(this.keyboardWrapper);
    this.keyboardContainer.append(this.createDiscription());
    return this.keyboardContainer;
  }

  createKeyboardBody() {
    this.keyboardBody.classList.add('keyboard');
    let button = NaN;
    Object.keys(this.buttonNames).forEach((element) => {
      switch (element) {
        case 'Tab':
        case 'Delete':
          // eslint-disable-next-line no-undef
          button = new Button('semi-wide', this.buttonNames[element], element, '');
          break;

        case 'Enter':
        case 'ShiftRight':
          // eslint-disable-next-line no-undef
          button = new Button('wide', this.buttonNames[element], element, '');
          break;

        case 'Backspace':
        case 'CapsLock':
        case 'ShiftLeft':
          // eslint-disable-next-line no-undef
          button = new Button('large', this.buttonNames[element], element, '');
          break;

        case 'Space':
          // eslint-disable-next-line no-undef
          button = new Button('space', this.buttonNames[element], element, '');
          break;

        default:
          // eslint-disable-next-line no-undef
          button = new Button('normal', this.buttonNames[element], element, '');
          break;
      }
      this.keyboardBody.append(button.createKey());
    });
    return this.keyboardBody;
  }

  createDiscription() {
    this.keyboardDiscriptionContainer.classList.add('keyboard__discription');

    const discriptionOs = document.createElement('p');
    discriptionOs.innerHTML = 'Keyboard created in Windows OS';

    const discriptionLanguage = document.createElement('p');
    discriptionLanguage.innerHTML = 'To switch the language combination: ctrl + shift';

    this.keyboardDiscriptionContainer.append(discriptionOs);
    this.keyboardDiscriptionContainer.append(discriptionLanguage);

    return this.keyboardDiscriptionContainer;
  }

  createTextarea() {
    this.textareaContainer.classList.add('textarea__container');

    const textareaLabel = document.createElement('label');
    textareaLabel.setAttribute('for', 'textarea');
    textareaLabel.classList.add('textarea__label');
    textareaLabel.innerHTML = 'RSSchool Keyboard';

    const textarea = document.createElement('textarea');
    textarea.setAttribute('id', 'textarea');
    textarea.setAttribute('maxlength', '300');
    textarea.setAttribute('rows', '5');
    textarea.setAttribute('cols', '60');
    textarea.classList.add('textarea__input');

    this.textareaContainer.append(textareaLabel);
    this.textareaContainer.append(textarea);

    return this.textareaContainer;
  }
}
// eslint-disable-next-line no-undef
const myKeyboard = new Keyboard(buttonNames);
document.body.append(myKeyboard.createKeyboard());

// const buttonsNameRu = { {name: 'ё', type: 'noramal'}, }

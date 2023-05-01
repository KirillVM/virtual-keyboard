class Keyboard {
  constructor() {
    this.buttonNames = null;
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
    for (let i = 0; i < this.buttonsInColumn; i += 1) {
      for (let j = 0; j < this.buttonsInRow; j += 1) {
        let button = new Button('normal', '1', '!');
        this.keyboardBody.append(button.createKey());
      }
    }

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
    textareaLabel.classList.add('textarea__label');
    textareaLabel.innerHTML = 'RSSchool Keyboard';

    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea__input');

    this.textareaContainer.append(textareaLabel);
    this.textareaContainer.append(textarea);

    return this.textareaContainer;
  }
}

const myKeyboard = new Keyboard();
document.body.append(myKeyboard.createKeyboard());

// const buttonsNameRu = { {name: 'ё', type: 'noramal'}, }

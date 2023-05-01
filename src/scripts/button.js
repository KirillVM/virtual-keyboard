class Button {
  constructor(btnType, btnName, shiftSymbol = null) {
    this.btnConatiner = 0;
    this.btnType = btnType;
    this.btnName = btnName;
    this.btnEventName = '';
    this.shiftSymbol = shiftSymbol;
  }

  createKey() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('keyboard__button', `keyboard__button_${this.btnType}`);

    const buttonContent = document.createElement('span');
    buttonContent.classList.add('button__content');
    buttonContent.innerHTML = this.btnName;
    buttonContainer.append(buttonContent);

    if (this.shiftSymbol) {
      const buttonContentAdditional = document.createElement('span');
      buttonContentAdditional.classList.add('button__additional-content');
      buttonContentAdditional.innerHTML = this.shiftSymbol;
      buttonContainer.prepend(buttonContentAdditional);
    }
    return buttonContainer;
  }
}

// const button = new Button('normal', '9', '(');
// document.body.append(button.createKey());

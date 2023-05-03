// eslint-disable-next-line no-unused-vars
class Button {
  constructor(btnType, btnName, btnEventName, shiftSymbol = null) {
    this.btnConatiner = 0;
    this.btnType = btnType;
    [this.btnName, this.btnNameShift] = btnName;
    this.btnEventName = btnEventName;
    this.shiftSymbol = shiftSymbol;
  }

  createKey() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('keyboard__button', `keyboard__button_${this.btnType}`);
    buttonContainer.setAttribute('data-type', `${this.btnEventName}`);

    const buttonContent = document.createElement('span');
    buttonContent.classList.add('button__content', 'button__content_active');
    buttonContent.innerHTML = this.btnName;
    buttonContainer.append(buttonContent);

    const buttonContentAdditional = document.createElement('span');
    buttonContentAdditional.classList.add('button__content', 'button__content_disabled');
    buttonContentAdditional.innerHTML = this.btnNameShift;
    buttonContainer.prepend(buttonContentAdditional);

    return buttonContainer;
  }
}

// const button = new Button('normal', '9', '(');
// document.body.append(button.createKey());

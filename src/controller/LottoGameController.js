const InputValidator = require('../validator/InputValidator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class LottoGameController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.inputValidator = new InputValidator();
  }

  start() {
    const userInput = (input) => {
      this.inputValidator.checkValidMoney(input);
    };
    this.#inputView.readMoney(userInput);
  }
}

module.exports = LottoGameController;

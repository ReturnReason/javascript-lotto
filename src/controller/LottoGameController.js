const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class LottoGameController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  start() {
    const userInput = (input) => {
      console.log(input);
    };
    this.#inputView.readMoney(userInput);
  }
}

module.exports = LottoGameController;

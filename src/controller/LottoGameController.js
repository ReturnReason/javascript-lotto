const InputValidator = require('../validator/InputValidator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { countLottoQuantity } = require('../utils/calculator');

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
      const lottoQuantity = countLottoQuantity(input);
      this.#outputView.printLottoQuantity(lottoQuantity);
    };
    this.#inputView.readMoney(userInput);
  }
}

module.exports = LottoGameController;

const OutputView = require('../view/OutputView');

class LottoGameController {
  #inputView;
  #outputView;

  constructor() {
    this.#outputView = new OutputView();
  }

  start() {
    this.#outputView.printPurchaseAmount();
  }
}

module.exports = LottoGameController;

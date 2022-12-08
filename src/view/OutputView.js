const { print } = require('../utils/missionUtils');
const { MESSAGES } = require('../constants/outputMessages');

class OutputView {
  printPurchaseAmount() {
    const { purchaseAmount } = MESSAGES;
    print(purchaseAmount);
  }
}

module.exports = OutputView;

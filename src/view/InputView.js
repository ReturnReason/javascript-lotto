const { readLine } = require('../utils/missionUtils');
const { MESSAGES } = require('../constants/messages');

class InputView {
  readMoney(callback) {
    const { purchaseAmount } = MESSAGES;
    readLine(purchaseAmount, callback);
  }
}

module.exports = InputView;

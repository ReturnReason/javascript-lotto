const { readLine } = require('../utils/missionUtils');
const { MESSAGES } = require('../constants/gameMessages');

class InputView {
  readMoney(callback) {
    const { purchaseAmount } = MESSAGES;
    readLine(purchaseAmount, callback);
  }

  readWinningNumbers(callback) {
    const { winningNumbers } = MESSAGES;
    readLine(winningNumbers, callback);
  }
}

module.exports = InputView;

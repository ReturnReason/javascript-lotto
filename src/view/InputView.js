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

  readBonusNumber(callback) {
    const { bonusNumber } = MESSAGES;
    readLine(bonusNumber, callback);
  }
}

module.exports = InputView;

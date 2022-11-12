const { rest } = require('./utils/calculator');
const { ERROR_MESSAGES } = require('./common/messages');
const { LOTTO_INFO } = require('./common/constants');

class Validator {
  static checkValidMoney(money) {
    if (rest(money) > 0) {
      throw new Error(`${ERROR_MESSAGES.INVALID_MONEY}`);
    }
  }

  static checkValidLottoLength(lotto) {
    if (lotto.length > `${LOTTO_INFO.COUNT}`) {
      throw new Error(`${ERROR_MESSAGES.INVALID_LOTTO_COUNT}`);
    }
  }

  static checkDuplicateNumber(lotto) {
    const removalDuplicateNumber = [...new Set(lotto)];
    if (String(removalDuplicateNumber.length) !== `${LOTTO_INFO.COUNT}`) {
      throw new Error(`${ERROR_MESSAGES.DUPLICATE_NUMBER}`);
    }
  }
}

module.exports = Validator;

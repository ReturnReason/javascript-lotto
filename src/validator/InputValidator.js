const { LOTTO } = require('../constants/lotto');
const { ERROR } = require('../constants/errorMessages');

class InputValidator {
  checkValidMoney(input) {
    const { amount } = LOTTO;
    const { invalidRangeMoney } = ERROR;
    if (input % amount) {
      throw invalidRangeMoney;
    }
    return true;
  }
}

module.exports = InputValidator;

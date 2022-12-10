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

  checkValidInput(input) {
    const { invalidMoney } = ERROR;
    const isValidNumber = Number.isNaN(Number(input));
    if (input.includes('.') || isValidNumber) {
      throw invalidMoney;
    }
    return true;
  }

  checkEmptyInput(input) {
    const { emptyInput } = ERROR;
    if (!input.length || input === ' ') {
      throw emptyInput;
    }
    return true;
  }
}

module.exports = InputValidator;

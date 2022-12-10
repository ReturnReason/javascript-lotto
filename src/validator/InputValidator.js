const { LOTTO } = require('../constants/lotto');
const { ERROR } = require('../constants/errorMessages');

class InputValidator {
  checkValidMoney(money) {
    const { amount } = LOTTO;
    const { invalidRangeMoney } = ERROR;
    if (money % amount) {
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

  checkValidWinningNumbersSeparator(winningNumbers) {
    const { invalidWinningNumbersSeparator } = ERROR;
    const removeNumber = winningNumbers.replace(/[0-9]/gi, '');
    if (removeNumber.split(',').join('').length) {
      throw invalidWinningNumbersSeparator;
    }
    return true;
  }

  checkValidWinningNumbersLenght(winningNumbers) {
    const { count } = LOTTO;
    const { invalidWinningNumbersLength } = ERROR;
    if (winningNumbers.split(',').length !== count) {
      throw invalidWinningNumbersLength;
    }
    return true;
  }

  checkValidLottoNumbersRange(lottoNumbers) {}
}

module.exports = InputValidator;

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

  checkValidWinningNumbersLenght(winningNumber) {
    // 로또 번호 6개 입력했는지 확인
    // const { count } =LOTTO;
    // const {invalidWinningNumbersLength } =ERROR;
    // const lottoNumbers = winningNumber.split(',');
    // if(lottoNumbers.length !== count) throw invalidWinningNumbersLength;
    // lottoNumbers.forEach(())
  }

  checkValidLottoNumbersRange(lottoNumber) {
    // 로또 번호가 1~45 사이 숫자인지 확인
  }
}

module.exports = InputValidator;

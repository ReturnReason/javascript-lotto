const { ERROR } = require('./constants/errorMessages');
const { LOTTO } = require('./constants/lotto');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;

    this.validate(numbers);
    this.checkDuplicateNumber(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  checkDuplicateNumber(numbers) {
    const deduplicationLottoNumbers = [...new Set([...numbers])];
    if (deduplicationLottoNumbers.length !== LOTTO.count) {
      throw ERROR.duplicateNumber;
    }
    return true;
  }
}

module.exports = Lotto;

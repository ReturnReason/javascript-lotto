const { LOTTO_COUNT } = require('../constants/lotto');

class LottoComparator {
  compareLottoNumbers(lottoNumbers, bonusNumber, userLottos) {
    let counter = { three: 0, four: 0, five: 0, bonus: 0, six: 0 };
    userLottos.forEach((userLotto) => {
      const hasBonus = this.hasBonusNumber(userLotto, bonusNumber);
      const matchCount = this.countMatchNumbers(userLotto, lottoNumbers);
      counter = { ...counter, ...this.countTotalMatchLottoNumbers(counter, matchCount, hasBonus) };
    });

    return counter;
  }

  countMatchNumbers(userLotto, lottoNumbers) {
    return userLotto.filter((number) => {
      return lottoNumbers.includes(number);
    }).length;
  }

  hasBonusNumber(userLotto, bonusNumber) {
    if (userLotto.includes(bonusNumber)) {
      return true;
    }
    return false;
  }

  countTotalMatchLottoNumbers(counter, matchCount, hasBonus) {
    if (matchCount === LOTTO_COUNT.three) {
      counter['three'] += 1;
    }
    if (matchCount === LOTTO_COUNT.four) {
      counter['four'] += 1;
    }
    if (matchCount === LOTTO_COUNT.five && !hasBonus) {
      counter['five'] += 1;
    }
    if (matchCount === LOTTO_COUNT.five && hasBonus) {
      counter['bonus'] += 1;
    }
    if (matchCount === LOTTO_COUNT.six) {
      counter['six'] += 1;
    }
    return counter;
  }
}

module.exports = LottoComparator;

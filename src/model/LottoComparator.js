class LottoComparator {
  compareLottoNumbers(lottoNumbers, bonusNumber, userLottos) {
    const lottoResult = userLottos.map((userLotto) => {
      const hasBonus = this.hasBonusNumber(userLotto, bonusNumber);
      const matchCount = this.countMatchNumbers(userLotto, lottoNumbers);
      console.log(hasBonus, matchCount);
    });
    // 일치 개수 객체로 리턴{}
    // return this.countTotalMatchLottoNumbers();
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

  countTotalMatchLottoNumbers() {
    const counter = { three: 0, four: 0, five: 0, bonus: 0, six: 0 };
    return counter;
  }
}

module.exports = LottoComparator;

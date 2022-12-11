const LottoComparator = require('../src/model/LottoComparator');

describe('🚀 LottoComparator 클래스 테스트', () => {
  test('countMatchNumbers: 유저의 로또 번호와 당첨 로또 번호가 3개 일치하면 3을 반환한다.', () => {
    const lottoComparator = new LottoComparator();
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    const userLotto = [1, 2, 3, 10, 11, 12];
    const result = lottoComparator.countMatchNumbers(userLotto, lottoNumbers);

    expect(result).toBe(3);
  });

  test('countMatchNumbers: 유저의 로또 번호와 당첨 로또 번호가 4개 일치하면 4를 반환한다.', () => {
    const lottoComparator = new LottoComparator();
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    const userLotto = [1, 2, 3, 4, 11, 12];
    const result = lottoComparator.countMatchNumbers(userLotto, lottoNumbers);

    expect(result).toBe(4);
  });

  test('hasBonusNumber: 유저의 로또 번호에 보너스 번호가 포함되어 있으면 true를 반환한다. ', () => {
    const lottoComparator = new LottoComparator();
    const userLotto = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 6;

    const result = lottoComparator.hasBonusNumber(userLotto, bonusNumber);
    expect(result).toBeTruthy();
  });

  test('hasBonusNumber: 유저의 로또 번호에 보너스 번호가 포함되어 있지 않으면 false를 반환한다. ', () => {
    const lottoComparator = new LottoComparator();
    const userLotto = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 6;

    const result = lottoComparator.hasBonusNumber(userLotto, bonusNumber);
    expect(result).toBeFalsy();
  });

  test('countTotalMatchLottoNumbers: 유저의 로또 번호가 3개 일치하는 경우 반환된 오브젝트 three 키 값의 value는 1이다. ', () => {
    const lottoComparator = new LottoComparator();
    let counter = { three: 0, four: 0, five: 0, bonus: 0, six: 0 };
    const matchCount = 3;
    const hasBonus = false;

    const result = lottoComparator.countTotalMatchLottoNumbers(counter, matchCount, hasBonus);

    expect(result).toEqual({
      three: 1,
      four: 0,
      five: 0,
      bonus: 0,
      six: 0,
    });
  });
});

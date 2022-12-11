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
});

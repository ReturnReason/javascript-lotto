const MESSAGES = Object.freeze({
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
});

const buyLottos = (count) => {
  return `\n${count}개를 구매했습니다.`;
};

const countLottoMatch = ({ three, four, five, bonus, six }) => {
  return `당첨 통계
---
3개 일치 (5,000원) - ${three}개
4개 일치 (50,000원) - ${four}개
5개 일치 (1,500,000원) - ${five}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${bonus}개
6개 일치 (2,000,000,000원) - ${six}개`;
};

const profitRate = (rate) => {
  return `총 수익률은 ${[rate].toLocaleString()}%입니다.`;
};

module.exports = {
  MESSAGES,
  buyLottos,
  countLottoMatch,
  profitRate,
};

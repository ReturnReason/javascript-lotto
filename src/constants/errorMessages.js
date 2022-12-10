const ERROR = Object.freeze({
  invalidRangeMoney: '[ERROR] 구입금액은 1,000 단위로만 입력할 수 있습니다.',
  emptyInput: '[ERROR] 입력 값이 비어있습니다.',
  invalidMoney: '[ERROR] 구입금액은 숫자(1,000원 단위)로만 입력할 수 있습니다.',
  invalidLottoNumber: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  duplicateNumber: '[ERROR] 중복된 번호는 입력할 수 없습니다.',
  invalidBonusNumber: '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
  invalidWinningNumbersSeparator: '[ERROR] 구분자는 띄어쓰기 없이 콤마(,) 만 사용할 수 있습니다.',
  invalidWinningNumbersLength: '[ERROR] 당첨 번호는 6개 입력해야 합니다',
});

module.exports = {
  ERROR,
};

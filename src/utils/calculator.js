const { LOTTO, PRIZE_MONEY } = require('../constants/lotto');

const countLottoQuantity = (money) => {
  const { amount } = LOTTO;
  return money / amount;
};

const calculatorProfitRate = (totalCounter, money) => {
  let result = 0;
  Object.entries(totalCounter).forEach(([match, count]) => {
    result += ((PRIZE_MONEY[match] * count) / money) * 100;
  });

  return result.toFixed(1).toLocaleString();
};

module.exports = {
  countLottoQuantity,
  calculatorProfitRate,
};

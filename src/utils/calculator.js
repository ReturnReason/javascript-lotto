const { LOTTO } = require('../constants/lotto');

const countLottoQuantity = (money) => {
  const { amount } = LOTTO;
  return money / amount;
};

const calculatorProfitRate = (profitRate) => {};

module.exports = {
  countLottoQuantity,
  calculatorProfitRate,
};

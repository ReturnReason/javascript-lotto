const LOTTO = Object.freeze({
  amount: 1_000,
  startNum: 1,
  endNum: 45,
  count: 6,
  totalCount: 7,
});

const LOTTO_COUNT = Object.freeze({
  three: 3,
  four: 4,
  five: 5,
  six: 6,
});

const PRIZE_MONEY = Object.freeze({
  three: 5_000,
  four: 50_000,
  five: 1_500_000,
  bonus: 30_000_000,
  six: 2_000_000_000,
});

module.exports = {
  LOTTO,
  LOTTO_COUNT,
  PRIZE_MONEY,
};

const { print } = require('../utils/missionUtils');
const { buyLottos, countLottoMatch, profitRate } = require('../constants/gameMessages');

class OutputView {
  printLottoQuantity(quantity) {
    print(buyLottos(quantity));
  }

  printLotto(lotto) {
    print(`[${lotto.join(', ')}]`);
  }

  printWinningStatistics({ three, four, five, bonus, six }) {
    print(countLottoMatch({ three, four, five, bonus, six }));
    // print(profitRate()); 수익률
  }
}

module.exports = OutputView;

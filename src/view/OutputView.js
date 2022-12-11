const { print, close } = require('../utils/missionUtils');
const { buyLottos, countLottoMatch, profitRate } = require('../constants/gameMessages');

class OutputView {
  printLottoQuantity(quantity) {
    print(buyLottos(quantity));
  }

  printLotto(lotto) {
    print(`[${lotto.join(', ')}]`);
  }

  printMatchCount({ three, four, five, bonus, six }) {
    print(countLottoMatch({ three, four, five, bonus, six }));
  }

  printStats(rate) {
    print(profitRate(rate));
  }

  quit() {
    close();
  }
}

module.exports = OutputView;

const { print } = require('../utils/missionUtils');
const { buyLottos } = require('../constants/gameMessages');

class OutputView {
  printLottoQuantity(quantity) {
    print(buyLottos(quantity));
  }

  printLotto(lotto) {
    print(`[${lotto.join(', ')}]`);
  }
}

module.exports = OutputView;

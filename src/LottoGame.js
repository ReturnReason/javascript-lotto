const { LOTTO_INFO } = require('./common/constants');
const { lottoCount } = require('./utils/calculator');
const { Random } = require('./utils/missionUtil');
const { INPUT_MESSAGES } = require('./common/messages');
const LottoView = require('./LottoView');
const User = require('./User');
const Lotto = require('./Lotto');
const Validator = require('./Validator');

class LottoGame {
  #winNumbers;
  #bonusNumber;

  constructor() {
    this.lottoView = new LottoView();
    this.user = new User();
  }

  start() {
    this.lottoView.getUserInput(`${INPUT_MESSAGES.AMOUNT}\n`, (money) => {
      this.countLottos(money);
    });
  }

  static generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_INFO.BEGIN_NUMBER,
      LOTTO_INFO.END_NUMBER,
      LOTTO_INFO.COUNT
    ).sort((a, b) => a - b);
  }

  craeteLottos(lottoCount) {
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const lotto = new Lotto(LottoGame.generateLottoNumbers());
      lottos.push(lotto.getLotto());
    }
    return lottos;
  }

  countLottos(money) {
    this.user.setLottoCount(lottoCount(money));
    this.user.setLottos(this.craeteLottos(this.user.getLottoCount()));
    this.lottoView.printLottoCount(this.user.getLottoCount());
    this.lottoView.printUserLottos(this.user.getLottos());

    this.lottoView.getUserInput(`\n${INPUT_MESSAGES.WINNER_NUMBER}\n`, (winNumbers) => {
      Validator.checkWinNumbers(winNumbers);
      this.#winNumbers = winNumbers;
    });
  }
}

module.exports = LottoGame;

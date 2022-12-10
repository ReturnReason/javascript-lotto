const { pickUniqueNumbersInRange } = require('../utils/missionUtils');
const { LOTTO } = require('../constants/lotto');

class LottoMachine {
  makeLottoNumbers() {
    const { startNum, endNum, count } = LOTTO;
    return pickUniqueNumbersInRange(startNum, endNum, count);
  }
}

module.exports = LottoMachine;

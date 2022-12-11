const { LOTTO } = require('../constants/lotto');
const { amount } = LOTTO;

class User {
  #lottos = [];

  addLotto(lotto) {
    this.#lottos.push(lotto);
  }

  getLottos() {
    return [...this.#lottos];
  }

  getMoney() {
    return this.#lottos.length * amount;
  }
}

module.exports = User;

class User {
  #lottos = [];

  addLotto(lotto) {
    this.#lottos.push(lotto);
  }

  getLottos() {
    return [...this.#lottos];
  }
}

module.exports = User;

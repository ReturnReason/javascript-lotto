class User {
  #lottos = [];

  addLotto(lotto) {
    this.#lottos.push(lotto);
  }
}

module.exports = User;

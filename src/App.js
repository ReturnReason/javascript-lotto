const LottoGameController = require('./controller/LottoGameController');

class App {
  play() {
    const lottoGameController = new LottoGameController();
    lottoGameController.start();
  }
}

const app = new App();
app.play();

module.exports = App;

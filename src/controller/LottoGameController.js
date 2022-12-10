const InputValidator = require('../validator/InputValidator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const Lotto = require('../Lotto');

const { countLottoQuantity } = require('../utils/calculator');
const LottoMachine = require('../model/LottoMachine');
const User = require('../model/User');

class LottoGameController {
  #inputView;
  #outputView;
  #lottoMachine;
  #user;
  #lotto;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#lottoMachine = new LottoMachine();
    this.#user = new User();
    this.inputValidator = new InputValidator();
  }

  start() {
    const userInput = (input) => {
      this.validate(input);
      const lottoQuantity = countLottoQuantity(input);
      this.#outputView.printLottoQuantity(lottoQuantity);
      this.pickedLottoNumbers(lottoQuantity);
    };
    this.#inputView.readMoney(userInput);
  }

  validate(input) {
    this.inputValidator.checkValidMoney(input);
    this.inputValidator.checkValidInput(input);
  }

  pickedLottoNumbers(lottoQuantity) {
    // 구매한 로또 개수만큼 로또 번호 뽑기
    for (let i = 0; i < lottoQuantity; i++) {
      const lotto = this.#lottoMachine.makeLottoNumbers();
      this.#lotto = new Lotto(lotto);
    }
    console.log(this.#lotto.getNumbers());
  }
}

module.exports = LottoGameController;

const InputValidator = require('../validator/InputValidator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const Lotto = require('../Lotto');

const { countLottoQuantity, calculatorProfitRate } = require('../utils/calculator');
const LottoMachine = require('../model/LottoMachine');
const User = require('../model/User');
const WinningLottoNumbers = require('../model/WinningLottoNumbers');
const LottoComparator = require('../model/LottoComparator');

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
    this.winningLottoNumbers = new WinningLottoNumbers();
  }

  start() {
    const userInput = (input) => {
      this.validateMoney(input);
      const lottoQuantity = countLottoQuantity(input);
      this.#outputView.printLottoQuantity(lottoQuantity);
      this.pickedLottoNumbers(lottoQuantity);
      this.printLottos();
      this.getWinningNumbers();
    };
    this.#inputView.readMoney(userInput);
  }

  validateMoney(input) {
    this.inputValidator.checkEmptyInput(input);
    this.inputValidator.checkValidMoney(input);
    this.inputValidator.checkValidInput(input);
  }

  pickedLottoNumbers(lottoQuantity) {
    for (let i = 0; i < lottoQuantity; i++) {
      const lotto = this.#lottoMachine.makeLottoNumbers();
      this.#lotto = new Lotto(lotto);
      this.#user.addLotto(this.#lotto.getNumbers().sort((a, b) => a - b));
    }
  }

  printLottos() {
    this.#user.getLottos().forEach((lotto) => {
      this.#outputView.printLotto(lotto);
    });
  }

  getWinningNumbers() {
    const userInput = (input) => {
      this.validateWinningNumbers(input);
      this.winningLottoNumbers.setWinningNumbers(input.split(',').map(Number));
      this.getBonusNumber();
    };

    this.#inputView.readWinningNumbers(userInput);
  }

  validateWinningNumbers(input) {
    this.inputValidator.checkEmptyInput(input);
    this.inputValidator.checkValidWinningNumbersSeparator(input);
    this.inputValidator.checkValidWinningNumbersLenght(input);
    this.inputValidator.checkValidLottoNumbersRange(input);
  }

  getBonusNumber() {
    const userInput = (input) => {
      this.inputValidator.checkValidBonusNumberRange(input);
      this.winningLottoNumbers.setBonusNumber(Number(input));
      this.compare();
    };

    this.#inputView.readBonusNumber(userInput);
  }

  compare() {
    const winningNumbers = this.winningLottoNumbers.getWinningNumbers();
    const bonusNumber = this.winningLottoNumbers.getBonusNumber();
    const userLottos = this.#user.getLottos();

    const lottoComparator = new LottoComparator();
    const result = lottoComparator.compareLottoNumbers(winningNumbers, bonusNumber, userLottos);
    this.gameResult(result);
  }

  gameResult(result) {
    this.#outputView.printMatchCount(result);
    this.#outputView.printStats(calculatorProfitRate(result, this.#user.getMoney()));
  }
}

module.exports = LottoGameController;

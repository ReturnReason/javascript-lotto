const { Console, Random } = require('@woowacourse/mission-utils');

const readLine = (query, callback) => {
  return Console.readLine(query, callback);
};

const print = (message) => {
  return Console.print(message);
};

const close = () => {
  return Console.close();
};

const pickUniqueNumbersInRange = (start, end, count) => {
  return Random.pickUniqueNumbersInRange(start, end, count);
};

module.exports = {
  readLine,
  print,
  close,
  pickUniqueNumbersInRange,
};

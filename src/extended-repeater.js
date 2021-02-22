const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' } = options;
  const addRepeaterArr = [];
  if (typeof additionRepeatTimes === 'undefined') {
    additionRepeatTimes = 1;
  }
  if (addition === null) {
    addition = 'null';
  }
  for (let i = additionRepeatTimes; i > 0; i--) {
    addRepeaterArr.push(addition);
  }
  const addRepeaterStr = addRepeaterArr.join(additionSeparator);
  const stringPlusRepeater = str + addRepeaterStr;
  const resultArr = [];
  if (typeof repeatTimes === 'undefined') {
    repeatTimes = 1;
  }
  for (let i = repeatTimes; i > 0; i--) {
    resultArr.push(stringPlusRepeater);
  }
  const result = resultArr.join(separator);
  return result;
};
  
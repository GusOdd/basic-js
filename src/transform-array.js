const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  const newArr = [];
  function bypass(element, index, array) {
    const isPrevContainsControlSequences = (array[index - 1] === '--discard-next') ||
                                           (array[index - 1] === '--double-next');
    const isElementControlSequences = (element === '--discard-next') ||
                                      (element === '--discard-prev') ||
                                      (element === '--double-next') ||
                                      (element === '--double-prev');
    const isNextContainsControlSequences = (array[index + 1] === '--discard-prev') ||
                                           (array[index + 1] === '--double-prev');
    if ((!isPrevContainsControlSequences && !isElementControlSequences && !isNextContainsControlSequences) ||
        (array[index - 1] === '--double-next' && !isElementControlSequences && array[index + 1] === '--discard-prev')) {
      newArr.push(element);
    }
    if ((array[index - 1] === '--double-next' && !isElementControlSequences && !isNextContainsControlSequences) ||
        (!isPrevContainsControlSequences && !isElementControlSequences && array[index + 1] === '--double-prev')) {
      newArr.push(element);
      newArr.push(element);
    }
    if (array[index - 1] === '--double-next' && !isElementControlSequences && array[index + 1] === '--double-prev') {
      newArr.push(element);
      newArr.push(element);
      newArr.push(element);
    }
  }
  arr.map(bypass);
  return newArr;
};

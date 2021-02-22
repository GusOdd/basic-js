const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let cats = 0;
  array.flat().forEach(element => {
    if (element === '^^') {
      cats++;
    }
  });
  return cats;
};

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  arrDepth = 1;
  calculateDepth(arr) {
    function isArray(element) {
      return Array.isArray(element);
    }
    if (arr.findIndex(isArray) === -1) {
      const result = this.arrDepth;
      this.arrDepth = 1
      return result;
    } else {
      this.arrDepth++;
      return this.calculateDepth(arr.flat());
    }
  }
};

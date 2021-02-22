const CustomError = require("../extensions/custom-error");

const chainMaker = {
  objLength: 0,
  currentResult: '',
  getLength() {
    return this.objLength;
  },
  addLink(value = '') {
    if (this.currentResult.toString().length !== 0) {
      this.currentResult += '~~';
    }
    this.currentResult += `( ${value} )`;
    this.objLength++;
    return this;
  },
  removeLink(position) {
    const array = this.currentResult.toString().split('~~');
    if (typeof position !== 'number' || !Number.isInteger(position) || position <= 0 || position > array.length) {
      this.currentResult = '';
      throw new Error();
    }
    array.splice((position - 1), 1);
    this.currentResult = array.join('~~');
    this.objLength--;
    return this;
  },
  reverseChain() {
    const array = this.currentResult.toString().split('~~');
    array.reverse();
    this.currentResult = array.join('~~');
    return this;
  },
  finishChain() {
    this.objLength = 0;
    const result = this.currentResult;
    this.currentResult = '';
    return result;
  }
};

module.exports = chainMaker;

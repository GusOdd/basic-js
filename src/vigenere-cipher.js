const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machine = true) {
    if (machine === true) {
      this.typeOfMachine = 'direct';
    } else if (machine === false) {
      this.typeOfMachine = 'reverse';
    }
  }
  _keyFill(message, key) {
    let tempKey = key.toUpperCase();
    for (let i = 0; i < key.length && tempKey.length < message.split(' ').join('').length; i++) {
      tempKey += key[i].toUpperCase();
      if (i === key.length - 1) {
        i = -1;
     }
    }
    return tempKey;
  }
  _calculateResultForEncrypt(newMessage, newKey) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const resultArr = [];
    for (let i = 0, symbols = 0; i < newMessage.length; i++) {
      if (newMessage[i].search(/[A-Z]/) === -1) {
        resultArr.push(newMessage[i]);
        symbols++;
      } else {
        let index = alphabet.indexOf(newMessage[i]) + alphabet.indexOf(newKey[i - symbols]);
        if (index >= alphabet.length) {
          index = index - alphabet.length;;
        };
        resultArr.push(alphabet.charAt(index));
      }
    }
    return resultArr.join('');
  }
    _calculateResultForDecrypt(newMessage, newKey) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const resultArr = [];
    for (let i = 0, symbols = 0; i < newMessage.length; i++) {
      if (newMessage[i].search(/[A-Z]/) === -1) {
        resultArr.push(newMessage[i]);
        symbols++;
      } else {
        let index = alphabet.indexOf(newMessage[i]) - alphabet.indexOf(newKey[i - symbols]);
        if (index < 0) {
          index = index + alphabet.length;;
        };
        resultArr.push(alphabet.charAt(index));
      }
    }
    return resultArr.join('');
  }
  encrypt(message, key) {
    const newMessage = message.toUpperCase();
    const newKey = this._keyFill(message, key);
    const result = this._calculateResultForEncrypt(newMessage, newKey);
    if (this['typeOfMachine'] === 'direct') {
      return result;
    } else if (this['typeOfMachine'] === 'reverse') {
      return result.split('').reverse().join('');
    }
  }
  decrypt(message, key) {
    const newMessage = message.toUpperCase();
    const newKey = this._keyFill(message, key);
    const result = this._calculateResultForDecrypt(newMessage, newKey);
    if (this['typeOfMachine'] === 'direct') {
      return result;
    } else if (this['typeOfMachine'] === 'reverse') {
      return result.split('').reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;

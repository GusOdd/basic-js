const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const SECONDS_IN_HOUR = 3600;
  const turns = 2 ** disksNumber - 1;
  const seconds = Math.floor(SECONDS_IN_HOUR / turnsSpeed * turns);
  return { turns: turns, seconds: seconds }
};

const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof sampleActivity !== 'string') || Number.isNaN(+sampleActivity)) {
    return false;
  }
  const result = Math.log(MODERN_ACTIVITY / +sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD);
  if (!Number.isFinite(result) || result < 0) {
    return false;
  };
  return Math.ceil(result);
};

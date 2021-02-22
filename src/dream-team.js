const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const membersFirstLetters = [];
  members.forEach(element => {
    if (typeof element === 'string') {
      const trimmedElement = element.trim();
      membersFirstLetters.push(trimmedElement[0].toUpperCase());
    }
  });
  return membersFirstLetters.sort().join('');
};

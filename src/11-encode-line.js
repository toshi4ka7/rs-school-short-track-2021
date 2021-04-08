/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';
  let res = '';

  let symbol = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === symbol) {
      count++;
    } else {
      res += (count === 1 ? '' : count) + symbol;
      symbol = str[i];
      count = 1;
    }

    if (i === str.length - 1) {
      res += (count === 1 ? '' : count) + symbol;
    }
  }

  return res;
}

module.exports = encodeLine;

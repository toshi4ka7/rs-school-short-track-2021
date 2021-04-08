/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  if (array[0] === value) return 0;
  if (array[array.length - 1] === value) return array.length - 1;

  let res;

  function find(index) {
    if (array[index] === value) {
      res = index;
    } else if (array[index] > value) {
      find(Math.ceil(index / 2));
    } else if (array[index] < value) {
      find(Math.ceil(index + index / 2));
    }
  }

  find(Math.ceil((array.length - 1) / 2));

  return res;
}

module.exports = findIndex;

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const array = [];
  matrix.forEach(() => array.push([]));

  function getCount(arr, i, j) {
    const res = [];

    for (let row = i - 1; row <= i + 1; row++) {
      if (!(row < 0 || row > arr.length - 1)) {
        for (let col = j - 1; col <= j + 1; col++) {
          if (
            !(col < 0 || col > arr[row].length - 1)
            || !(row === i && col === j)
          ) {
            res.push(arr[row][col]);
          }
        }
      }
    }

    return res.reduce((acum, elem) => (elem ? acum + 1 : acum), 0);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      array[i][j] = matrix[i][j] ? 1 : getCount(matrix, i, j);
    }
  }

  return array;
}

module.exports = minesweeper;

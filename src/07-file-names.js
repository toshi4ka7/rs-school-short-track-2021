/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) return [];
  const res = [names[0]];

  for (let i = 1; i < names.length; i++) {
    if (res.includes(names[i])) {
      const reg = new RegExp(`${names[i]}\\((\\d+)\\)`);
      let add = false;

      for (let j = res.length - 1; j >= 0; j--) {
        const found = res[j].match(reg);
        if (found) {
          const count = Number(found[1]) + 1;
          res.push(`${names[i]}(${count})`);
          add = true;
          break;
        }
      }

      if (!add) {
        res.push(`${names[i]}(1)`);
      }
    } else {
      res.push(names[i]);
    }
  }

  return res;
}

module.exports = renameFiles;

/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const args = path.split('.');
  return function (obj) {
    for (const arg of args) {
      let objElement = obj[arg];
      if (objElement === undefined) {
        return;
      }
      obj = objElement;
    }
    return obj;
  };
}

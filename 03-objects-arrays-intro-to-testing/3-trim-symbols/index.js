/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) {
    return '';
  } else if (size === undefined) {
    return string;
  }

  let out = '';

  for (let i = 0, sl = string.length; i < sl; i++) {

    let ch = string[i];
    let buf = ch;

    for (++i; i < sl; i++) {

      if (string[i] !== ch) {
        --i;
        break;
      }

      if (buf.length < size) {
        buf += ch;
      }

    }
    out += buf;
  }
  return out;
}

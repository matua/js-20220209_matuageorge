/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let result = arr.slice().sort((a, b) => {
    return new Intl.Collator(['ru', 'en'], {caseFirst: 'upper'}).compare(a, b);
  });
  return (param === 'desc') ? result.reverse() : result;
}

/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
    current = arr[0].flags;
    for (i = 1; i < arr.length; i++) {
      current = current.concat(arr[i].flags);
    }
    return current;
};

export default getFlags;

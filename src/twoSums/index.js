/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  for (i = 0; i < arr.length; i++) {
    let sum = [];
    let temp1 = arr[i];
    sum.push(arr[i]);
    for (y = 0; i < arr.length; i++) {
      if (temp1 + arr[y] == base) return sum.push(arr[y]);
    }
  }
  sum = [];
};

export default twoSums;

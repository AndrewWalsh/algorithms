/**
* @function mergeSort
* @param {array} arr - a 2d array of integers
* @return {array} - A sorted array
*/

function mergeSort(arr, count) {
  if (arr.length <= 1) {
    return arr[0];
  }

  const left = mergeSort(arr.slice(0, Math.floor((arr.length) / 2)));
  const right = mergeSort(arr.slice(Math.floor((arr.length) / 2), arr.length));

  // If the left or right item doesn't exist, return its opposite to avoid wasted work.
  if (!left) return right;
  if (!right) return left;

  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // Terminating condition is that the final array is of length left + right
  while (merged.length !== left.length + right.length) {
    if (left.length <= leftIndex) {
      merged = merged.concat(right.slice(rightIndex));
    }
    else if (right.length <= rightIndex) {
      merged = merged.concat(left.slice(leftIndex));
    }

    else {
      if (left[leftIndex] < right[rightIndex]) {
        merged.push(left[leftIndex]);
        leftIndex++;
      } else {
        merged.push(right[rightIndex]);
        rightIndex++;
      }
    }
  }

  return merged;
}

module.exports = arr => mergeSort(arr.map(x => [x]));

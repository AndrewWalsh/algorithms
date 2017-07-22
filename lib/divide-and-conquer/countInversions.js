/**
* @function countInversions
* @param {array} arr - a 2d array of integers
* @param {number} count - the current no. of inversions
* @return {object} - { arr: {array}, count: {number} } Sorted array & inverison count
*/

function countInversions(arr, count = 0) {
  if (arr.length <= 1) {
    return {
      arr: arr[0],
      count,
    };
  }

  const { arr: left, count: leftCount } = countInversions(arr.slice(0, Math.floor((arr.length) / 2)));
  const { arr: right, count: rightCount } = countInversions(arr.slice(Math.floor((arr.length) / 2), arr.length));
  // Increment count
  count += leftCount + rightCount;

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
        count += left.slice(leftIndex).length;
        rightIndex++;
      }
    }
  }

  return {
    arr: merged,
    count,
  };
}

module.exports = arr => countInversions(arr.map(x => [x]));

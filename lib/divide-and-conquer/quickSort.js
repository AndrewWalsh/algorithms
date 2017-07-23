/**
* @function quickSort
* @param {array} arr - an array of integers
* @return {array} - A sorted array
*/

function quickSort(arr) {
  // Base case is arr.length <=1
  if (arr.length <= 1) {
    return arr;
  }
  //  Pivot is the first element
  const PIVOT_INDEX = 0;
  const pivot = arr[0]; // {number}

  const leftArray = [];
  const rightArray = [];

  // Loop over the array, starting at index PIVOT_INDEX + 1
  for (let i = PIVOT_INDEX + 1; i < arr.length; i++) {
    const number = arr[i];
    if (number <= pivot) {
      leftArray.push(number);
    } else {
      rightArray.push(number);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

module.exports = quickSort;

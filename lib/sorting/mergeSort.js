/**
* @function mergeSort
* @description Prepares arrays, in a basic fashion, for a merge sort.
* @param {array} arr - The array to sort. Must be a flattened array of numbers e.g. [1, 3, 2].
* @return {array} - Sorted array from recursiveMergeSort return value
*/

function mergeSort(arr) {
  // If the array length is 1 or 0, there is nothing to sort.
  if (arr.length <= 1) {
    return arr;
  }

  // Ensure that the array to be sorted is 2d.
  let twoDimensionalArray = [];

  const ARR_LENGTH = arr.length;
  const ARR_IS_ODD = ARR_LENGTH % 2 !== 0;
  for (let i = 0; i < ARR_LENGTH; i++) {
    const number = arr[i];
    // For the last item of an array with odd length, push the value to the most recent array
    // This ensure that the final array is always of even length
    if (ARR_IS_ODD && i === ARR_LENGTH - 1) {
      // If the item at twoDimensionalArray[i-1][0] is <= number, push to the end of the array. Otherise, unshift
      if (twoDimensionalArray[i-1][0] <= number) {
        twoDimensionalArray[i-1].push(number);
      } else {
        twoDimensionalArray[i-1].unshift(number);
      }
    } else {
      twoDimensionalArray.push([number]);
    }
  }

  return recursiveMergeSort(twoDimensionalArray);
}

/**
* @function Recursive merge sort
* @description Sorts a 2d array of even length.
* @param {array} arr - A 2d array of even length.
* @return {array} - Sorted array with length arr.length / 2.
*/
function recursiveMergeSort(arr) {
  // Base case is an array of length 1, where arr[0] is an array.
  if (arr.length <= 1) {
    return arr[0];
  }

  const newArray = [];
  for (let i = 0; i < arr.length; i += 2) {
    // Iterate over the larger of the two arrays
    let theLargeArray;
    let theSmallArray;
    if (arr[i].length >= arr[i+1].length) {
      theLargeArray = arr[i];
      theSmallArray = arr[i+1];
    } else {
      theLargeArray = arr[i+1];
      theSmallArray = arr[i];
    }

    // Prepare an array that we will push to newArray
    const sortedArray = [];
    while (theSmallArray.length || theLargeArray.length) {
      // If theSmallArray.length === 0, push items in theLargeArray
      if (theSmallArray.length === 0) {
          sortedArray.push(...theLargeArray);
          theLargeArray = [];
      }
      // If theLargeArray.length === 0, push items in theSmallArray
      else if (theLargeArray.length === 0) {
        sortedArray.push(...theSmallArray);
        theSmallArray = [];
      }
      else {
        if (theLargeArray[0] <= theSmallArray[0]) {
          sortedArray.push(theLargeArray.shift());
        } else {
          sortedArray.push(theSmallArray.shift());
        }
      }
    }

    newArray.push(sortedArray);
  }

  // If the length of arr is odd, push an empty array to newArray.
  if (newArray.length > 1 && newArray.length % 2 !== 0) {
    newArray.push([]);
  }

  return recursiveMergeSort(newArray);
}

module.exports = mergeSort;

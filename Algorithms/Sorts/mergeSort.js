// Merging Two Sorted Arrays

let arr1 = [1, 5, 10, 15];
let arr2 = [0, 2, 3, 7, 10];
// merge(arr1, arr2); // => [0, 1, 2, 3, 5, 7, 10, 10, 15] // ideally


function merge(arr1, arr2) {
  let merged = [];

  while (arr1.length || arr2.length) { // while either array has a length >0 (since 0 is falsey)
    // if the array has a length, pick the first element. If an array is empty, we still need a # to compare which is why we have Infinity.
    // By picking infinity, the other # will always be less so we can push that first
    let ele1 = arr1.length ? arr1[0] : Infinity;
    let ele2 = arr2.length ? arr2[0] : Infinity;

    let next;
    // Whichever # is smaller, shift it off that array and push it into merged
    if (ele1 < ele2) {
      next = arr1.shift();
    } else {
      next = arr2.shift();
    }
    merged.push(next);
  }

  return merged;
}

// Recursion
function mergeSort(arr) {
  // Base Case: Array is 1 number or empty, return it.
  if (arr.length <= 1) {
    return arr;
  }

  // Split arrays in half
  let midIdx = Math.floor(arr.length / 2); // find midpoint
  let leftArr = arr.slice(0, midIdx);
  let rightArr = arr.slice(0, midIdx);

  // Recursive Call: Let's call mergeSort so we keep splitting the array into individual components
  let leftSorted = mergeSort(leftArr);
  let rightSorted = mergeSort(rightArr);

  // At the end after everything's been split as far as possible, start joining arrays
  return merge(leftSorted, rightSorted);
}
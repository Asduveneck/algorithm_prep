Bubble Sort is inefficient, rarely used, but provides a decent foundation to build upon.

When we state an object *bubbles up*, we imply the item is in motion, is moving in a direction, and has a final destination.

## How does the algorithm work?

We pass through the array, and take each element and compare it to its right neighbor.
If current element is larger, we swap. We repeat this indefinitely until all elements are sorted.

To see if we're done, we check if we've made a swap in our last *pass* through the array. IF we didn't have to make any swaps, that implies we have a sorted array.

## Code:

<details>
<summary>Helper function: swap </summary>
We write a function to effectively swap two elements positions...

```js
const swap = (arr, idx1, idx2) {
  let tmp = arr[idx1]
  arr[idx1] = arr[idx2]; // replace 1st position's value w/ 2nd position's
  arr[idx2] = tmp; // vice versa
}
```
</details>

```js
const bubbleSort = (arr) => {
  let swapped = true;

  while (swapped) { // if we had to make a swap
    swapped = false; // assume we didn't make any swaps

    for (let i = 0; i < arr.length-1; i++) { // iterate to just b4 last ele
      if (arr[i] > arr[i+1]) { // If we have to swap
        swap(arr, i, i+1); // helper function to swap the two positions
        swapped = true // flip switch to say we had to swap.
      }
    }
  }
  return true;
}

```

Worst case scenario, if the array is sorted in decreasing order, we run through the loop n times, and each nth time we iterate through the whole array to put it in the proper place. Thus, O(n*n) or O(n^2) time complexity. But we don't store anything to memory, so space is simply O(1).
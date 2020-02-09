Selection Sort is just like bubble sort, but done in reverse, selecting the smallest element. Kinda like *bubbling down*.

<details>
  We maintain a sorted region on the left, which grows by one element each time we pass through the unsorted original array. 

  Each time we pass, we take the smallest element and move it to the end of the sorted region.
</details>

### How does the algorithm work?

  You always select the next smallest element, and move it to the end of a sorted area.

### Code

#### Helper Functions:
<details>
<summary>Helper: Finding min val</summary>

```js
function minValIdx(arr) {
  let minIdx = 0;

  for (let i=0; i < arr.length; i++) {
    if (arr[minIdx] > arr[j]) minIdx = j; // update minIdx if there's a lower val
  }

  return minIdx;
}
```

</details>

<details>
<summary>Helper: swap.</summary>
Same as in bubble sort

```js
const swap = (arr, idx1, idx2) {
  let tmp = arr[idx1]
  arr[idx1] = arr[idx2]; // replace 1st position's value w/ 2nd position's
  arr[idx2] = tmp; // vice versa
}
```

</details>

#### Selection Sort Code.

  We use a nested loop to serve as a placeholder, then the inner loop finds the min val, and then once we've confirmed we have the new minVal, we swap the two (forcing that minVal to be in the sorted area). 

  The inner loop then progresses, so we are now out of the sorted loop.

```js

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i; // place we're trying to swap
    // start unsorted area OUTSIDE the sorted region:
    for (let j = i+1; j < arr.length; j++) { 
      if (arr[minIdx] > arr[j]) minIdx = j;
    }

    swap(arr, i, minIdx);
  }
  return arr;
}

```

#### Performance

Time is O(n^2). Technically the nested loop decreases each time, so on average, for each loop in the outer, it's n/2 . It's a little faster than bubble, especially when writes/swaps are expensive, but other than that, it's still in the same (expensive) order of magnitude for time complexity.
Space: O(1). Duh.

#### Refactoring selectionSort

I did this independently to utilize the two above helper functions. In the code I wrote, I kinda deconstructed the second function (as the inner loop). 

Below, I keep the functions seperate (which lets me reuse `findMinIdx` elsewhere as well).

<details>
<summary>Both Helpers as refresher:</summary>

```js
function swap(arr, index1, index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
    return arr;
}

const findMinIdx = (arr) => {
    let minIdx = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[minIdx] > arr[i]) minIdx = i;
    }
    return minIdx;
}
```

</details> 

```js
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        let newMinIdx = i+1 + findMinIdx(arr.slice(i+1));
        if (arr[minIdx] > arr[newMinIdx]) swap(arr, minIdx, newMinIdx);
    }    
    return arr;
}

```

<!-- 

<details>
<summary></summary>
</details> 

-->

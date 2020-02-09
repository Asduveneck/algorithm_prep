Selection Sort is just like bubble sort, but done in reverse, selecting the smallest element. Kinda like *bubbling down*.

<details>
  We maintain a sorted region on the left, which grows by one element each time we pass through the unsorted original array. 

  Each time we pass, we take the smallest element and move it to the end of the sorted region.
</details>

### How does the algorithm work?

  You always select the next smallest element, and move it to the end of a sorted area.

### Code

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

<details>
<summary></summary>
</details>

### How can we implement heaps?

Heaps can be implemented using an array and carefully indexing them.

For example, the following heap, <br>

![Max Heap](Images/max_heap_ex.png)
can be represented as:
```js
[null, 42, 32, 24, 30, 9, 20, 18, 2, 7]
```

How do we get find children or the general structure via indexing?
  * index `i` represents a node
  * node `i`'s left child: `2i`
  * node `i`'s right child: `2i+1`

Code:

```js
class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    // ...
}

```

### How do we insert?
We'll need a method to add a new value into the heap without breaking our heap property.

```js

class MaxHeap {
  // ...
  insert(val) {
    this.array.push(val); // bottom far left...

    // sift value up.
    this.siftUp(this.array.length - 1);
  }

  siftUp(idx) {
    // if we're at root
    if (idx === 1) return;

    // Else, find the parent index to swap if needed.
    let parentIdx = this.getParent(idx);

    if ( this.array[idx] > this.array[parentIdx] ){
      // swap node with parent
      [ this.array[parentIdx], this.array[idx] ] = [ this.array[idx], this.array[parentIdx] ]; // swaps
    }

    // keep sifting up until thing is in place/
    this.siftUp(parentIdx);

  }
}
```

### How do we delete?

  Sifting down is like sifting up in reverse. However, we have options since we have to consider children (swapping with the larger child).
  What if our node doesn't have children too? We'll need to consider those as well.

```js

class MaxHeap() {
  deleteMax() {
    // base cases:
    if (this.array.length === 2) return this.array.pop(); // 1st ele null...
    if (this.array.length === 1) return null; // no ele: return nothing

    // More than 1 ele, so
    let max = this.array[1]; // the max value
    // remove last element and set as root (temporarily) to keep balance
    this.array[1] = this.array.pop();

    // sift new root down to keep > order going
    this.siftDown(1);

    // Return our final value
    return max;
  }

  siftDown(idx) {
    let arr = this.array;

    let lftIdx = this.getLeftChild(idx);
    let rhtIdx = this.getRightChild(idx);

    let lftVal = arr[lftIdx];
    let rhtVal = arr[rhtIdx];

    // if node missing children, turn that null into -inf so we don't swap.
    if (lftVal === undefined) lftVal = -Infinity;
    if (rhtVal === undefined) rhtVal = -Infinity;

    // if node is bigger than children, or no children (both -inf) heap satisfied. BASE CASE
    if (arr[idx] > lftVal && arr[idx] > rhtVal) return;

    // else, we need to sift down. swap with bigger child
    if (lftVal < rhtVal) {
      var swapIdx = rhtIdx
    } else {
      var swapIdx = lftIdx;
    }

    /*
    let swapIdx = lftIdx; // assume left > right

    if (lftVal < rhtVal) { // if assumed wrong, reassign...
      swapIdx = rhtIdx
    } 
    */

    [ arr[idx], arr[swapIdx] ] = [ arr[swapIdx], arr[idx] ]; // swaps

    this.siftDown(swapIdx); // recursively keep sifting, on new position
  }
}
```

### Cost?

Time cost for insert/delete is always O(log(n)) because balanced.
Space: O[n] since we have an array of length n.

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

  insert(val) {
    this.array.push(val); // bottom far left...
    this.siftUp(this.array.length - 1);
  }

  deleteMax() {
    // base cases:
    if (this.array.length === 2) return this.array.pop(); // 1st ele null...
    if (this.array.length === 1) return null; // no ele: return nothing

    // More than 1 ele, so
    let max = this.array[1]; // the max value
    this.array[1] = this.array.pop();

    // sift new root down to keep > order going
    this.siftDown(1);

    return max; // our goal!
  }

  // ===== HELPERS =====
  // Helper for inserting
  siftUp(idx) {
    // if we're at root
    if (idx === 1) return;

    // Else, find the parent index to swap if needed.
    let parentIdx = this.getParent(idx);

    if (this.array[idx] > this.array[parentIdx]) {
      // swap node with parent
      [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]]; // swaps
    }

    // keep sifting up until thing is in place/
    this.siftUp(parentIdx);

  }
  // Helper for popping up
  siftDown(idx) {
    let arr = this.array;

    let lftIdx = this.getLeftChild(idx);
    let rhtIdx = this.getRightChild(idx);

    let lftVal = arr[lftIdx];
    let rhtVal = arr[rhtIdx];

    // if node missing children, turn that null into -inf so it always gets swapped
    if (lftVal === undefined) lftVal = -Infinity;
    if (rhtVal === undefined) rhtVal = -Infinity;

    // if node is bigger than children, heap satisfied
    if (arr[idx] > lftVal && arr[idx] > rhtVal) return;

    // else, we need to sift down. swap with bigger child
    let swapIdx = lftIdx; // assume left > right

    if (lftVal < rhtVal) { // if assumed wrong, reassign...
      swapIdx = rhtIdx
    } 

    [arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]]; // swaps

    this.siftDown(swapIdx); // recursively keep sifting
  }

}
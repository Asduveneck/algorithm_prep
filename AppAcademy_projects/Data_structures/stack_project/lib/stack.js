// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }

}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {

  }

  pop() {

  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;

Our tree:
<br/>
![Binary Tree Example](Images/graph_a.png)

<details>
<summary>Code to make Tree</summary>

```js
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
```
</details>

### Common terms:
* B and C are siblings; D & E are siblings
* D & E are descendents of B; B - F are descents of A;

### Goal:

A depth first search recursively travels deeper into a tree before switching branches; descendants before siblings. 

A DFS of our above tree will hit A, B, D, E, C, F (self, left, right).
It's the same as our `preOrderPrint` in `p_03`.

### Code Implementation:

#### First approach:
```js
function depthFirst(root) {
  // set an array to represent a stack: LIFO
  let stack = [ root ];

  // While there's stuff in the stack
  while (stack.length) {
    let node = stack.pop(); // pop off the top
    console.log(node.val); // do something with it

    if (node.right) stack.push(node.right); // if right child exists, push it in.
    if (node.left) stack.push(node.left); //   "" but for left
      // left will naturally go on top of right

      // Nothing with children yet because we do that above when we pop it.
  }
}

```

#### Recursive Approach.
Call Stacks are actually recursive. So we can use recursion to utilize our call stack.

```js
function depthFirstRecur(root) {
    if (!root) return; // If there is no root return nothing.
    console.log(root.val); // the do something step.
    depthFirstRecur(root.left); // put the left into the call stack.
    depthFirstRecur(root.right); // put the right in the call stack.
}
```

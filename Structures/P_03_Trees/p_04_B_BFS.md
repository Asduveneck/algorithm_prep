Our tree:
<br/>
![Binary Tree Example](Images/graph_a.png)

<details>
<summary>Code to make tree</summary>

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

### Goal:

  We start from each `level` of the tree. Level 1 has A, 2 has B, C; 3 has D, E, F

  We hit all nodes across a level before moving to the next. 

  A, B, C, D, E, F

### Code Implementation:

```js

function breadthFirst(root) {
  let queue = [ root ];

  while (queue.length) {
    let node = queue.shift(); // first out

    console.log(node.val); // where we do stuff. Visiting the node.

    if (node.left) queue.push(node.left); // first in, first out. gets the order
    if (node.right) queue.push(node.right);

  }
}

```
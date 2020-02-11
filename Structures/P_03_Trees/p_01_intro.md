Trees are perhaps the most commonly used data structure in CS.

A Binary Tree is a type of Tree, and trees are a type of graph.

### What are graphs?

Graphs are basically points (nodes) connected in one or two directions (uni/bidirectional) by lines (edges).

### What are trees?

A tree is a graph where a node's children will not loop back to itself in a cycle. 
In short, a tree is a graph without cycles!

### What is a binary tree?

  A binary tree is a tree where each node has 2 children at most! binary! 

### Ex: Tree Node
A tree node may or may not have children; if it has children, it's an internal node. If it doesn't, it's a leaf node.

Implementing a tree node in JS:
```js
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
```
And an example of building a binary tree:

```js
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
returns:
<br>
![Binary Tree Example](Images/graph_a.png)

And a quick (ugly) way to view this is as simple as
```js
console.log(a);
```

Returns:
```js
TreeNode {val: "a", left: TreeNode, right: TreeNode}
```

<details>
<summary>Expanded</summary>
```
TreeNode {val: "a", left: TreeNode, right: TreeNode}
  val: "a"
  left: TreeNode
    val: "b"
      left: TreeNode {val: "d", left: null, right: null}
      right: TreeNode {val: "e", left: null, right: null}
  right: TreeNode
    val: "c"
      left: null
      right: TreeNode {val: "f", left: null, right: null}
```
 </details>


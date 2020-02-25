

In-order: left, self, right.

Node Diagram:
![Binary Tree Example](Images/graph_a.png)


InOrder. We pass in A first.
Left, self, right. 
D, B, E; A; C, F;

PreOrder: self, left, right. 

A;B; D; (back to B), E. (Back to A). C; F;


### Code?

```js
function inOrderPrint(root) {
    if (!root) return;

    inOrderPrint(root.left);
    console.log(root.val);
    inOrderPrint(root.right);
}
```
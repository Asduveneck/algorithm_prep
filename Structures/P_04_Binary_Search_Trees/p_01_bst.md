Following: https://open.appacademy.io/learn/full-stack-online/data-structures-and-algorithms/binary-search-tree-notes

### What is a Binary Search Tree?

A Binary Search Tree is a binary tree, where:
  - values in left subtree must all be less than node's given value
  -  values in right subtree >= node's value

**A recursivel definition**

   - the left subtree contains values less than the root
   - right subtree contains values >= root
   - left subtree is a BST
   - right subtree is a BST

  And base cases:
  - A tree with 0 nodes is a BST.

**Examples**

![Example Binary Search Trees](Images/bsts.png)

### What makes BSTs important?

  They're sorted, and can get the order via our print in order function (from trees p_03).

### Naive BST Implementation
  
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val, root=this.root) {
    
    // If there is no root, make this val the new root
    if(!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    // If the val < root,
    if (!root.left)

  }
}
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

    // If the val < root, place on left side
    if (val < root.val) {
      if (!root.left) { // nothing on left side yet
        root.left = new TreeNode(val);
      } else { // call again recursively moving down a level on left side
        this.insert(val, root.left);
      }
    } else { // val > root, so place on right side
      if (!root.right) {
        root.right = new TreeNode(val)
      } else {
        this.insert(val, root.right);
      }
    }

  }
}
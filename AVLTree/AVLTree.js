const BinaryTree = require('../BinaryTree/binaryTree');

class AVLTree extends BinaryTree{

    // Node Height
    leftHeight(node){
        return this.maxChildHeight(node);
    }
    rightHeight(node) {
        return this.maxChildHeight(node);
    }
    maxChildHeight(node) {
        if (node != null) {
            return 1 + Math.max(this.maxChildHeight(node.left), this.maxChildHeight(node.right))
        }
        return 0; 
    }

    // Balance factor
    balanceFactor(right, left) {
        return (
          this.rightHeight(right) - this.leftHeight(left)
        );
    }

    // heavy or balanced
    checkState(right, left) {
        const bf = this.balanceFactor(right, left);
        if (bf > 1) {
            return "rightHeavy";
        }
        if (bf < 0) {
            return "leftHeavy";
        }
        else {
            return "balanced";
        }
    }

    // choosing right rotation

    // insertion
    insert(value) {
        super.add(value);
    }
    
    leftRotation() {
       
    }
    rightRotation() {
        
    }
    rightLeftRotation() {
        
    }
    leftRightRotation() {
        
    }
}

const tree = new AVLTree()
tree.insert(1)
tree.insert(2)
tree.insert(3);
tree.insert(4);
console.log(tree.checkState(tree.root.right, tree.root.left));
// console.log(tree)        
        
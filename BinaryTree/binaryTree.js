
class Node{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor() {
        this.root = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this._addTo(this.root, newNode);
        }
    }

    _addTo(rootNode, newNode) {
        if (newNode.data < rootNode.data) {
            if (rootNode.left === null) {
                rootNode.left = newNode;
            } else {
                this._addTo(rootNode.left, newNode);
            }
        } else {
            if (rootNode.right === null) {
                rootNode.right = newNode;
            } else {
                this._addTo(rootNode.right, newNode);
            }
            
        }
    }

    //try find data in tree
    contains(data) {
        let current = this.root;
        let parent = null

        //while we don't have a match
        while (current !== null) {
            if (data < current.data) {
                //if value is less than current, go left
                parent = current;
                current = current.left;
            } else if (data > current.data) {
                //if value is greater than current, go right
                parent = current;
                current = current.right;
            } else {
                //we have a match
                break;
            }
        }
        return[ current, parent];
    }

    find(data) {
        return this.contains(data)[0];
    }

    remove(data) {
        let parent = this.contains(data)[1];
        let current = this.find(data);

        if (current === null) {
            return false;
        }

        //CASE 1
        //removing node with no right child
        //its left child replaces the removed node
        if (current.right === null) {
            if (parent === null) {
                //we are removing root node
                this.root = current.left;
            } else {
                if (parent.data > current.data) {
                    //make current left child, left child of parent
                    parent.left = current.left;
                } else if (parent.data < current.data) {
                    //make current left child, right child of parent
                    parent.right = current.left;
                }
            }
        }

        //CASE 2
        //removing node whose right child has no left child
        //right child replaces the removed node
        else if (current.right.left === null) {
            current.right.left = current.left;
            if (parent === null) {
                this.root = current.right;
            } else {
                if (parent.data > current.data) {
                    //make current right child a left child of parent
                    parent.left = current.right;
                } else if (parent.data < current.data) {
                    //make current right child a right child of parent
                    parent.right = current.right;
                }
            }
            
        }
        
        //CASE 3
        //if removed node's right child has a left child
        //replace removed with it's right child's left most node
        else {
            //find right leftmost child
            let leftMost = current.right.left;
            let leftMostParent = current.right;
            while (leftMost.left != null) {
                leftMostParent = leftMost;
                leftMost = leftMost.left;
            }
            //the parent's left subtree becomes the leftmost's right subtree
            leftMostParent.left = leftMost.right;
            //assign leftmost's left n right to current's left n right
            leftMost.left = current.left;
            leftMost.right = current.right;
            if (parent === null) {
                this.root = leftMost;
            }
            else {
                if (parent.data > current.data) {
                    //make leftmost the parent's left child
                    parent.left = leftMost;
                } else if (parent.data < current.data) {
                    //make leftmost the parent's right child
                    parent.right = leftMost
                }
            }
        }
        return true;

    }

}

const tree = new BinaryTree();
tree.add(4);
tree.add(2);
tree.add(1);
tree.add(3);
tree.add(6);
tree.add(5);
tree.add(7);
tree.remove(4)
console.log(tree.find(6));
 console.log(tree);


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

    _addTo(currentNode, newNode) {
        if (newNode.data < currentNode.data) {
            if (currentNode.left === null) {
                //if new node is less than the current node
                //add to left
                currentNode.left = newNode;
            } else {
                this._addTo(currentNode.left, newNode);
            }
        } else {
            //if new node is greater than/ equal to the current node
            //add to right
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this._addTo(currentNode.right, newNode);
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
        return[ current, parent ];
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
                //if we are removing root node
                this.root = current.left;
            } else {
                if (parent.data > current.data) {
                    //make current left child, left child of parent
                    //rare case
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
            //move removed node left child to the left of removedd's right
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
        //replace removed with its right child's left most node
        else {
            //find right leftmost child
            let leftMost = current.right.left;
            let leftMostParent = current.right;
            while (leftMost.left != null) {
                //move to the left most node of the right child
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

    //TREE TRAVERSAL
    preorder(current) {
        if (current === null) {
            return;
        }
        console.log(current.data);
        this.preorder(current.left);
        this.preorder(current.right);
    }

    postorder(current) {
        if (current === null) {
            return;
        }
        this.postorder(current.left);
        this.postorder(current.right);
        console.log(current.data);
    }

    inorder(current) {
        if (current === null) {
            return;
        }
        this.inorder(current.left);
        console.log(current.data);
        this.inorder(current.right);
    }

}

// const tree = new BinaryTree();
// tree.add(4);
// tree.add(2);
// tree.add(1);
// tree.add(3);
// tree.add(6);
// tree.add(5);
// tree.add(7)
// tree.find(6);
// tree.remove(6)
 
// tree.postorder(tree.root) // 1 3 2 5 7 6 4
// tree.preorder(tree.root) // 4 2 1 3 6 5 7
// tree.inorder(tree.root) // 1 2 3 4 5 6 7

module.exports = BinaryTree;

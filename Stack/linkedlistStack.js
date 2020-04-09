class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    
    //add data to stack
    //adds on top of stack
    push(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //remove data on top of stack
    //returns removed data
    pop() {
        if (this.size === 0) {
            return;
        } else {
            //select top node
            let poppedNode = this.head;
            //make second data in stack top node
            this.head = this.head.next;
            //clear popped node's link
            poppedNode.next = null;
            this.size--;
            // console.log(poppedNode);
            return poppedNode.data;
        }
    }

    //return head node data
    peek() {
        if (this.size === 0) {
            return;            
        } else {
            // console.log(this.head.data)
            return this.head.data; 
        }
        
    }

    //print data in stack
    printStackData() {
        //set current to first node
        let top = this.head;
        if (this.size === 0) {
            console.log("Stack Underflow")
        } else {
            //iterate over list
            while (top) {
                console.log(top.data);
                top = top.next;
            }
            return;
        }
        
    }

    clear() {
        this.head = null;
        this.size = 0;
    }
}

let stack = new Stack();
stack.push(70);
stack.push(80);
stack.push(90);
stack.pop();
stack.peek();
stack.printStackData();

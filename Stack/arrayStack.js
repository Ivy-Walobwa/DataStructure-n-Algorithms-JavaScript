class Stack {
    constructor() {
        this.items = [];
        this.size = -1;
    }

    push(data) {
        if (data) {
            this.items.push(data);
            this.size++;
        }
        return;        
    }

    pop() {
        if (this.items.length === 0) {
            return "UnderFlow";
        } else {
            this.size--;
           return this.items.pop();
        }
    }

    peek() {
        if (this.size === -1) {
            return "Empty stack";
        }
        return this.items[this.size];        
    }
}


// let stack = new Stack();
// stack.push();
// stack.push();
// stack.push();
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack)

module.exports = Stack;

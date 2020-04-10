class Stack {
  constructor() {
    this.items = [];
    this.size = -1;
  }

  push(data) {
    //if an item is provided
    if (data) {
      //add item to array
      this.items.push(data);
      //increase size
      this.size++;
    }
    return;
  }

  pop() {
    //if empty
    if (this.size === -1) {
      return "UnderFlow";
    } else {
      this.size--;
      //return top item in stack
      return this.items.pop();
    }
  }

  peek() {
    //if empty
    if (this.size === -1) {
      return "Empty stack";
    }
    //return top item in stack
    return this.items[this.size];
  }
}

// let stack = new Stack();
// stack.push(3);
// stack.push(5);
// stack.push(7);
// console.log(stack.pop());//7
// console.log(stack.peek());//5
// console.log(stack)//[3, 5]

module.exports = Stack;

class Item {
  constructor(data, number) {
    this.data = data;
    this.number = number;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(data, number) {
    let item = new Item(data, number);
    let addedFlag = false;

      //loop through array
      for (let idx = 0; idx < this.items.length; idx++) {
        //if new item has a higher priority
        //add new item before current item
        if (this.items[idx].number > item.number) {
            this.items.splice(idx, 0, item);
            addedFlag = true;
            break;
        }
    }
//default action is to add item at the end of queue
    if (!addedFlag) {
      this.items.push(item);
    }
    }
    
    dequeue() {
        //if empty do nothing else remove first item
        if (this.items.length === 0) {
            return;
        }
        this.items.shift()
    }

    peek() {
        //if not empty return first item
        if (this.items.length === 0) {
            return "Empty queue";
        }
        return this.items[0].data;
    }
}

const queue = new PriorityQueue();
queue.enqueue(3, 4);
queue.enqueue(6, 5);
queue.enqueue(7, 3);
queue.enqueue(8, 1);
queue.dequeue()
console.log(queue.peek())

console.log(queue);

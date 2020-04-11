class Queue{
    constructor() {
        this.items = [];
    }
    
    enqueue(data) {
        //add data to end of queue
        this.items.push(data);
    }

    dequeue() {
        if (this.items.length === 0) {
            return;
        }
        this.items.shift()
    }

    peek() {
        if (this.items.length === 0) {
            return "Empty queue";
        }
        return this.items[0];
    }
}

let queue = new Queue();
queue.enqueue(5);
queue.enqueue(8);
queue.enqueue(10);
queue.dequeue();
console.log(queue.peek());
console.log(queue)
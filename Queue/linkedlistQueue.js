class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //add item to queue
    enqueue(data) {
        let node = new Node(data);
        //if empty, set new node as head and tail
        if (this.tail == null) {
            this.head = node;
            this.tail = node;
            return;
        }
        //add node as last item in queue
        this.tail.next = node;
        //set node as tail
        this.tail = node;
    }

    //remove item from queue
    dequeue() {
        //if empty, do nothing
        if (this.head == null) {
            return;
        }
        //remove cureent head and set head to next item in queue
        this.head = this.head.next;

        // set tail to null if queue is emptied
        if (this.head == null) {
            this.tail = null;
        }
    }

    //return first item in queue
    peek() {
        if (this.head == null) {
            return "Queue is empty";
        }
        return this.head.data;
    }
}

// let queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(8);
// queue.enqueue(10);
// queue.enqueue(29);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// console.log(queue.peek());
// console.log(queue)
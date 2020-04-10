class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Add to start of list
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Add to end of list
  insertLast(data) {
    let node = new Node(data);
    let current;
    //if list is empty, make new node the head
    if (this.size === 0) {
      this.head = node;
    } else {
      //select head as current
      current = this.head;
      //go to end of list
      while (current.next) {
        current = current.next;
      }
      //add new node as next value of the last node
      current.next = node;
    }
    this.size++;
  }

  //Remove first item in list
  removeFirst() {
    if (this.size !== 0) {
      this.head = this.head.next;
      this.size--;

      if (this.size === 0) {
        this.head = null;
      }
    }
  }

  //Remove last item in list
  removeLast() {
    let current, previous;
    if (this.size !== 0) {
      if (this.size === 1) {
        this.head = null;
      } else {
         current = this.head;
        //go to end of list
        while (current.next) {
          previous = current;
          current = current.next;
        }   
        //remove last node (sets pre)
        previous.next = null;       
      }
      this.size--;
    }
  }

  //Find index of item in list
  findIndexOf(data) {
    let idx = 0;
    //set current to first node
    let current = this.head;
    //iterate over list
    while (current) {
      if (current.data === data) {
        console.log(idx)
        //return index of item
        return idx;
      }
      //increase index by one 
      idx++;
      //move to next node and recheck
      current = current.next;
    }
    console.log(-1);
    //not found
    return -1;
  }

  //Print Linked list data
  printListData() {
    //set current to first node
    let current = this.head;
    //iterate over list
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  //clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }
}

const list = new LinkedList();

list.insertLast(400);
list.insertLast(500);
list.insertFirst(600);
list.findIndexOf(500)


console.log(list);

list.printListData();


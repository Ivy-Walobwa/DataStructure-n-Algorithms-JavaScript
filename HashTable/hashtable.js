class Node {
    constructor(key, data) {
        this.key = key;
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

class HashTable{
    constructor() {
        this.buckets = [];
        this.maxBucketCount = 100;
    }
    
    hashCode(val) {
        let i;
        let hashCode = 0;
        let character;

        // If value to be hashed is already an integer, return it.
        if (val.length === 0 || val.length === undefined) {
            return val;
        }

        for (i = 0; i < val.length; i++) {
            character = val.charCodeAt(i);
            hashCode = ((hashCode << 5) - hashCode) + character;
            hashCode = hashCode & hashCode;
        }

        return hashCode % this.maxBucketCount;
    };

 // add key/data pair to bucket
    add(key, data) {
        let newNode = new Node(key, data);
        let hashCode = this.hashCode(key); // get hashcode of key

        // if no element exists at hashcode of key, add to table
        if (this.buckets[hashCode] === undefined) {
            this.buckets[hashCode] = newNode;
            return;
        } 

        // if an element exists at hashcode of key, but keys are same
        // update key with given data
        if (this.buckets[hashCode].key === key) {
            this.buckets[hashCode].data = data;
            return;
        }

        // if an element exists at hashcode of key, but keys are different
        // collision has occured
        // store in linked list
        let current = this.buckets[hashCode];
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
        newNode.previous = current
    }

    remove(key) {
        let hashCode = this.hashCode(key); // get hashcode of key
        let first = this.buckets[hashCode] //select key/data pair at index

        if (first !== undefined) {
            // if it exists and no has linked list at index
            // (A)
            if (first.next === null) {
                this.buckets[hashCode] = undefined; // remove item
                return;
            } else {
                while (first !== null && first.next !== null && first.key !== key) {
                    first = first.next;
                }
                // if removed is first node in list
                // (A) - B - C - D
                if (first.previous === null && first.next !==null) {
                    while (first.next !== null) {
                        first.key = first.next.key;
                        first.data = first.next.data;
                        first.next.previous.data = first.data
                        first.next.previous.key = first.key
                        first = first.next;
                    }
                }

                // if removed is last node in list
                // A - B - (C)
                if (first.previous !== null && first.next === null) {
                    first.previous.next = null
                    first = null
                    return;
                }
                
                // if removed is middle node
                // A - (B) - C
                if (first.previous !== null && first.next !== null) {
                    first.previous.next = first.next;
                    first.next.previous = first.previous;
                    first = null;
                    return;
                }
                return;
            }
        }
        return undefined;
    }

    find(key) {
        let hashCode = this.hashCode(key);
        let current = this.buckets[hashCode];
        if (current !== undefined) {
            if (current.next === null && current.key === key) {
                return current.data;
            } else {
                while (current != null && current.next != null && current.key !== key) {
                    current = current.next;
                }
                if (current.key === key) {
                    return current.data;
                }
                return undefined;
            }

        }
        return undefined;
        
    }
}

const hashTable = new HashTable();

hashTable.add('foo', '2')
hashTable.add(2, '3')
hashTable.add(2, '4')
hashTable.add(2, '5')
hashTable.add(2, '6')
hashTable.add(2, '7')
console.log(hashTable.find(2))

while (array[index] !== null)
    index++
array[index] = item    
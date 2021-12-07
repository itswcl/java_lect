class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Queue
// FIFO (First in, first out)

// - enqueue
// - dequeue
// - peek
// - isEmpty
// - count

class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
    }

    // add nodes to the back of the queue
    enqueue(node) {
        if (this.isEmpty()) {
            this.back = node;
            this.front = node;
        } else {
            this.back.next = node;
            this.back = node;
        }
    }

    // remove from the front
    dequeue() {
        if(this.isEmpty()) {
            return;
        } else if(this.front === this.back) {
            var temp = this.front;
            this.front = null;
            this.back = null;
            temp;
        }

        var temp = this.front;
        this.front = this.front.next;
        return temp;
        // temp = null;
    }

    // check the front of the queue
    peek() {
        return this.front ? this.front.data : this.front;
    }

    // return true / false if queue is empty
    isEmpty() {
        return this.front === null
    }

    // return length
    count() {
        if (this.isEmpty()) return;

        var temp = this.front;
        var count = 0;

        while(temp) {
            count++;
            temp = temp.next;
        }

        return count;
    }
    // count() {
    //     var counter = 0;
    //     if (this.isEmpty()) {
    //         return counter;
    //     }
    //     let tempQueue = new Queue();
    //     var tempNode = new Node(this.peek());
    //     while (!this.isEmpty()) {
    //         counter++;
    //         this.dequeue();
    //         tempQueue.enqueue(tempNode);
    //         tempNode = new Node(this.peek());
    //     }
    //     tempNode = new Node(tempQueue.peek());
    //     while (!tempQueue.isEmpty()) {
    //         tempQueue.dequeue();
    //         this.enqueue(tempNode);
    //         tempNode = new Node(tempQueue.peek());
    //     }
    //     return counter;
    // }
}

// NINJA BONUS:
// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue(), dequeue(), peek(), isEmpty(), and count()
function readQueue(queue) {}

var queue1 = new Queue();

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);

queue1.enqueue(node1);
queue1.enqueue(node2);

console.log(queue1);

queue1.dequeue();
console.log(queue1);

console.log(queue1.count());
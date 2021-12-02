class Node {
    constructor(value) {
        this.value= value;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    addToFront(node) {
      // if (this.isEmpty()) {
      //   this.head = node;
      // } else {
          // }
        node.next = this.head;
        this.head = node;
    }

    addDataToFront(data) {
        // initial new node from data because only receive data
        var newNode = new Node(data);
        // assign new node's next as linklist.head
        newNode.next = this.head;
        // assign linklist.head is the new node we made
        this.head = newNode;
    }

}

var mySll = new SLL();
mySll.isEmpty();
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);

mySll.addToFront(node1);
mySll.addToFront(node2);
mySll.addToFront(node3);
mySll.addToFront(node4);
console.log(mySll);
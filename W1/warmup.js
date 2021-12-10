// without note
// class Node(value) {
//     this.value = value;
// }
// class SLL {
    //     constructor(node) {
        //         this.head = null;
        //         this.next = node;
        //     }
        // }

class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
}

// instantiate new empty SLL
var newLinkList = new SLL();

var namesList = new SLL();
var bobNode = new Node("Bob");
namesList.head = bobNode;
bobNode.next = new Node("Alice");
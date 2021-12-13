// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

     // == Main Methods ==

    // push to head
    // myDll.addHead(new DLLNode(33));
    // push to head
    addHead(node) {
        if (this.head == null && this.tail == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }


    }

    // pop from tail
    removeTail() {
        if (this.tail === null) {
            return null;
        }

        var removedNode = this.tail;

        this.tail = this.tail.prev;
        this.tail.next = null;

        return removedNode;
    }

    // return is empty
    isEmpty() { }

    // return length
    size() { }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) { }

    // pop from head
    removeHead() { }
}
// Remember to instantiate the DLL!!
// add a few nodes ex. // myDll.addHead(new DLLNode(33));
// print the DLL -> console.log(myDll) did the nodes get added?
// remove a few nodes from tail
// print the DLL -> did the correct nodes get removed?

var myDLL = new DLList();
myDLL.addHead(new DLLNode(33));
myDLL.addHead(new DLLNode(44));
myDLL.addHead(new DLLNode(55));
console.log(myDLL);
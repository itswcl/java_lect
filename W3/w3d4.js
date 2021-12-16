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

    // return true or false if t a node exists with data === val
    exists(val) {
        var forwardRunner = this.head;
        var backwardRunner = this.tail;
        var count = Math.ceil(this.length / 2);
        while (count) {
            if (forwardRunner.data === val || backwardRunner.data === val) {
                return true;
            }
            forwardRunner = forwardRunner.next;
            backwardRunner = backwardRunner.prev;
            count--;
        }
        return false;
    }

    // remove and return the first node with data === val, if it exists
    // what if the list is empty?
    // what if the target val is the head?
    // what if the target val is the tail?
    // what if the target val is the only node in the list?
    removeVal(val) {
        var runner = this.head;

        // totally empty
        if (!runner) {
            return runner;
        }

        // remove head and tail
        if (runner === this.tail && runner.data === val) {
            this.head = null;
            this.tail = null;
            return runner;
        }

        // remove just head
        if (runner.data === val) {
            this.head = runner.next;
            this.head.prev = null;
            runner.next = null;
            return runner;
        }

        // okay everything else now
        while (runner) {
            if (runner.data !== val) {
                runner = runner.next; // if not val, keep moving runner
            } else {
                // we have now found the value

                // remove the tail
                if (runner === this.tail) {
                    this.tail = runner.prev;
                    runner.prev.next = null;
                    runner.prev = null;
                    return runner;
                }

                // all other cases
                runner.prev.next = runner.next;
                runner.next.prev = runner.prev;
                runner.next = null;
                runner.prev = null;
                return runner;
            }
        }
    }

    // add node before target
    // target is the value of a node in the list
    // consider the edge case where you may have to move the head
    // consider the edge case where you do not find the target
    prepend(target, node) {
        if (this.head !== null) { // Must have at least one node
            var curNode = this.head;
            if (curNode.data === target) { // Edge case: first node only
                node.next = curNode; // Connect nodes
                curNode.prev = node;
                this.head = node; // Move this.head to new node
            } else {
                while (curNode.next !== null) {
                    curNode = curNode.next; // Move to next node
                    if (curNode.data === target) {
                        // Link this new node to the others
                        node.next = curNode;
                        node.prev = curNode.prev;
                        // Link other nodes to this new node
                        curNode.prev.next = node;
                        curNode.prev = node;
                        return; // Exit while loop assuming only before first instance of target
                    }
                }
            }
        }
    }

    // 1. readability
    // 2. correct output
    // 3. performance
    // 4. refactoring/code cleaniness

    // cleaner, less indented
    prependClean(target, node) {
        var runner = this.head; // set a runner
        if (runner.data === target) {
            this.addHead(node);
            return;
        }
        while (runner) { // loop
            if (runner.data !== target) { // check runner data against the target
                runner = runner.next;     // move forward if no match
            } else {                      // else we found a match
                node.next = runner;       // point the node at the matched runner
                node.prev = runner.prev;  // point the node's prev to the matched runner's prev
                node.prev.next = node;    // link previous node next
                runner.prev = node;       // link runner to node
                return;
            }
        }
    }

    // push to head
    addHead(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;

            // this.tail.next = node;
            // node.prev = this.tail;
            // this.tail = node;
        }
    }

    // pop from tail
    removeTail() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            var temp = this.tail; // set a temp
            this.head = null; // disconnect the head
            this.tail = null; // disconnect the tail
            return temp;
        }
        var temp = this.tail; // set a temp
        this.tail = tail.prev; // move the tail back
        this.tail.next = null; // null out the new tail's next
        temp.prev = null; // null out the temp's prev
        return temp;
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) { }

    // pop from head
    removeHead() { }

    // BONUS
    append(target, node) { }
}
// instantiate the DLL()
var myCoolDLL = new DLList();

// add a few DLLNodes:
myCoolDLL.addHead(new DLLNode(40))
myCoolDLL.addHead(new DLLNode(30))
myCoolDLL.addHead(new DLLNode(20))
myCoolDLL.addHead(new DLLNode(10))
console.log(myCoolDLL);

// ---- test new methods:
console.log(myCoolDLL.exists(30));  // return true
console.log(myCoolDLL.exists(99));  // return false

console.log(myCoolDLL.removeVal(10));
console.log(myCoolDLL.removeVal(9001));

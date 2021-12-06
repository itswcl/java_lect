/* Stacks
A stack is a LIFO data structure
LAST IN, FIRST OUT
LIFO / FILO
push - add to top
pop - remove from top
peek - check the top
isEmpty - check if the stack is empty, true/false
length - return size of stack
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
    }

    // add to top
    push(newNode) {}

    // remove from top
    pop() {   }

    // aka check top
    peek() {}

    // check if empty
    isEmpty() {}

    // "1" == 1 true
    // "1" === 1 false

    // length getter
    getLength() {}
}

// don't forget to instantiate the slStack!
// add a few nodes first
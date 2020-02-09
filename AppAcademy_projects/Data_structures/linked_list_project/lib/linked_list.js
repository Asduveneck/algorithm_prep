// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        // Initial approach wrong because I didn't take the value and put it inside a NODE
        // I assumed the val was a node.

        const newNode = new Node(val);

        // if there is a tail.
        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else { // no tail so we had an empty list
            this.head = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() { // my forLoop was quite off and hard to track. Using aA solution as a start...
        if (!this.head) return undefined; // If there is no head
        // Set the new Tail and current position to be head
        let current = this.head;
        let newTail = current;
        // while you can keep proceeding or iterating forward
        while (current.next) {
            newTail = current; // always one before the end here... creates the stagger
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length += -1;

        if (this.length === 0) {
            this.tail = null;
            this.head = null;
            // this.length += -1;
        }
        // current is set to the very end, or the removedNode.
        return current;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);

        if (!this.head) { // this.length === 0 not working?!?
            newNode.next = null;
            this.head = newNode;
            this.tail = newNode;
        } else {
            // We need to put everything at the start.
            let oldHead = this.head;
            newNode.next = oldHead;
            this.head = newNode;
        }

        length += 1;
        return this;
        }

    // TODO: Implement the removeHead method here
    removeHead() {

    }

    // TODO: Implement the contains method here
    contains(target) {

    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;

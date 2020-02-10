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

        this.length += 1; // bug was here
        return this;
        }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) return undefined; // If there is no head
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length += -1;
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let foundTarget = false;
        if (!this.head) return foundTarget;
        let current = this.head;
        while (current) { // keep iterating through until end
            if (current.value === target) {
                foundTarget = true;
                break;
            }
            current = current.next; // should stop once it's undefined in the next round...
        }
        return foundTarget;
    }

    // TODO: Implement the get method here
    get(index) {
        // index has to be a positive integer < length in-between value...
        if (index >= this.length || index < 0) return null;
        let node = this.head;
        while (index > 0) {
            node = node.next;
            index += -1;
        }
        return node;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let target = this.get(index);
        if (target) {
            target.value = val;
            return true;
        }
         return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index >= this.length || index < 0) return false;
        let newNode = new Node(val);
        // I should have used methods we defined previously...
        // check if we're inserting at tail or head

        if (index === 0) {
            this.addToHead(val); // won't this return the list itself...
            return true;
            // that's why you can simply reutrn !! this.addToHead(val)
        }
        if (index === this.length) !!this.addToTail(val); // automatically increases length

        // Otherwise, just reset the paths leading to this
        let prevNode = this.get(index - 1);
        newNode.next = this.get(index);
        prevNode.next = newNode;

        this.length += 1;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index >= this.length || index < 0) return undefined;
        // removing heads or tails
        if (index === 0) return this.removeHead();
        if (index === this.length) return this.removeTail();

        let removedNode = this.get(index);
        let prevNode = this.get(index-1);
        let nextNode = this.get(index+1);
        prevNode.next = nextNode;

        this.length += -1;
        return removedNode;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;

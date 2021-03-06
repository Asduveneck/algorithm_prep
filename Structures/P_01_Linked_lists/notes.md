### What is a linked list?

  It's a linear sequence of `nodes` (or `vertices`) (ordered data).

A linked list has a `head`, `tail`, and `length`. The data tracked by a Linked List doesn't live inside the Linked List instance itself.

Each vertex is an instance of a simpler, smaller data structure, known as a node. (or vertex?)

Depending on the type of Linked List, Nodes can track its:
  1. `value`, the value the node represents
  2. `next` node: the next node in the list (relative to current node),
  3. `previous` node: ...

Because linked lists proceed from node to node, the linked list contains *ordered* data (like arrays).

### Arrays and Linked Lists include ordered data. How are they different?

Linked Lists, like arrays, are implementations of the list abstract data type. 
What makes linked lists different from arrays is how they *physically* store the data.

Arrays contain elements, where each element is stored *next* to its neighboring element in hardware (as a single continuous block of memory). Storing the data next to each other in hardware is known as *contiguous* data.

Linked Lists, however, represent data that's ordered linearly, and represent data that way. The data isn't necessarily stored in that order.

**So what does this mean?**
Linked lists have no indices, and no random access. We cannot look up an individual node in constant time, and to find something in the middle, we have to start at the `head` or `tail` and iterate one at a time until we find what we're looking for.

So, when making a Linked List, we must also create a Node class.

### What are the types of Linked Lists?

  - Singly Linked:  Nodes have one pointer, proceed in a single direction, head to tail
  - Doubly Linked:  Nodes have two pointers connecting them in two directions (forward and back), head to tail and tail to head
  - Multiply Linked: Nodes have two or more pointers
  - Circularly Linked. Final node's `next` pointer points to first node. A circular version. 


### What methods wil we use?

| Type      	| Name         	| Description                                                         	| Returns             	|
|-----------	|--------------	|---------------------------------------------------------------------	|---------------------	|
| Insertion 	| `addToTail`  	| Adds a new node to the tail of the Linked List.                     	| Updated Linked List 	|
| Insertion 	| `addToHead`  	| Adds a new node to the head of the Linked List.                     	| Updated Linked List 	|
| Insertion 	| `insertAt`   	| Inserts a new node at the "index", or position, specified.          	| Boolean             	|
| Deletion  	| `removeTail` 	| Removes the node at the tail of the Linked List.                    	| Removed node        	|
| Deletion  	| `removeHead` 	| Removes the node at the head of the Linked List.                    	| Removed node        	|
| Deletion  	| `removeFrom` 	| Removes the node at the "index", or position, specified.            	| Removed node        	|
| Search    	| `contains`   	| Searches the Linked List for a node with the value specified.       	| Boolean             	|
| Access    	| `get`        	| Gets the node at the "index", or position, specified.               	| Node at index       	|
| Access    	| `set`        	| Updates the value of a node at the "index", or position, specified. 	| Boolean             	|
| Meta      	| `size`       	| Returns the current size of the Linked List.                        	| Integer             	|

### How expensive will the operations be for singly and doubly linked lists?

Accessing and Searching will always take O(n) on average.
Insertion and deletion on average will be O(1). We typically already have a reference to a node we want to insert at, so we formally state insertion and deletion are constant time.

Space Complexity in the worst case will always be O(n)...
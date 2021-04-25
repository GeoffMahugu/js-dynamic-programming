### DATA STRUCTURES

This doc contains a summary of Data Structures.

**Random Access Data Structure:** - [Arrays & ArrayLists] Obtaining a certain element can be accessed independent of other data elements by calling its index location.

**Sequential Access Data Structure:** - Data can only be accessed in a particular order; Each element is dependent on each other.

### Arrays
A list of similar values.

Attributes of an array include:
 - Name: Has to have a name
 - Type: You store similar data types (boolean,int,str)
 - Size: arrays have a fix size.

### Array Lists
A growing Array. The size of array increases as the data increases.

Has predefined methods:
 - Add Method
 - Remove Method
 - Get Method
 - Set Method
 - Clear Method
 - toArray Method


### Stacks
A sequential access data structure in which we add elemnts and remove elements according to the **LIFO** principle.

Methods on stack include:
 - **Push**: Adds elent to the start of the stack
 - **Pop**: Removes elemnts and returns it from the top of the stack.
 - **Peek**: Looks at the first element in the stack without modifying the stack.
 - **Contains**: Searches through the stack and **returns a boolean**.


### Queues
A sequential access data structure which follows the **FIFO** methodology.
Elements are added from the back and removed from the front (Sort of a waiting list)

methods on Que include:
 - **Enqueue**: Adds elements to the end of the Queue.( enqueue(object) )
 - **Dequeue**: Takes no elemnets and removes and returns the fist element from the queue.
 - **Peek**: returns the first element of the queue without modifying the queue.
 - **Contains:** - traverses the Queue in search of an object and returns a boolean of presence of object.

### Linked List
Its a **sequential access linear data structure** in which every element is a seperate object called a **Node** which has 2 parts:

- Data
- Pointer -> references the next node. 

Node

[data(int,str,boolean) | pointer]
 
The chain of nodes is referenced as the LinkedList.

### Doubly-Linked List
Its a **sequential access linear data structure** in which every element is a seperate object called a **Node** and the chain can be traversed both **forwards** and **backwards** using pointers.

Node

[prev-pointer | data(int,str,boolean) | next-pointer]

### Dictionaries / Maps /Associative Arrays
Abstruct data structure which stores data in the form of key/value pairs:

{ key:value }

- Every Key should be unique
- Every Key contains one value


### Hash Table
An abstruct data structure that stores keys of dictionaries in an array.

**Hash function:** takes all keys for a given dictionary and strategically maps them to a certain index location in an array to be retrieved easily.

**Hash Collision:** When Hash function produces similar indexes to store data in for multiple values. Can be resolved in 2 ways: 

i) Open Addressing: We place the key on another index adjuscent to the referenced index. (can look at next index, also leads to other collisions thats why we resol)

ii) Closed Addressing: Uses Linked Lists to cjain together keys which result in the same value.


### Trees.

An abstruct data structure which contains a series of linked nodes connected together to form a hierarchical representation of data.
The nodes in the tree can aslo be called **Verticies** and the connectionions to nodes called **Edges.**

 - **Parent Node:** A node that has 1 or more child nodes
 - **Child Node:** A node which has an edge connecting it to a parent node
 - **Leaf Node:** A node in a tree which does not have any child nodes.

i) Binary Search Tree.
A variation of the standard tree with these three restrictions;
 - A node can have at most 2 child nodes.
 - The left node should be <= the right node
 - Nodes cant contain same value 

Advantage is that the search improves with the increase in data, **O(log n)**
  
### Tries
Its a tree-like data structure whose nodes store letters of an alphabet.

Are usefull in retrieval of words by traversing down a path os strings.

### Heaps

A special tree where all parent nodes compare to their children Node's in some specific way (Max Heap/ Min Heap) by being more or less extreme.

**Max Heap:** - Parent node holds the greastes value in comparison to child nodes.
 - This fact must be true recursively for all parent nodes within the heap.
**Min Heap:** - Parent node holds least value in comparison to child nodes.
 - This fact must be true recursively for all parent nodes within the heap.

Use full in implementing **Heap Sort** algorythm where we continuously remove the root node to create a new array of sorted list.


### Graphs

Nonlinear data structure containing **Nodes** and **Edges.**

{(node_value, edge_value)}--- {(5,6),{10,3},{4,2}

- **Undirected Graphs:** - The direction you traverse the nodes isn't important.(lacks arrows)
- **A Cyclic Graph:** - Graph that contains paths with at least one node leading back to itself.(All undirecteed graphs are cyclic)
- **An Acyclic Graph:** - Graph that contains no path from any one Node which leads back in on itself.
- **Weighted Graphs:** - Associating a numerical value with each edge (Cost).

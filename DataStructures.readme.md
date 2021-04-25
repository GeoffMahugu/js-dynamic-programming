### DATA STRUCTURES

This doc will contain summary of Data Structures. 

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

**Hash function:** takes all keys for a given dictionary and strategically maps them to a certain index location in an array to be retrieved easily.

**Hash Collision:** When Hash function produces similar indexes to store data in for multiple values. Can be resolved in 2 ways: 

i) Open Addressing: We place the key on another index adjuscent to the referenced index. (can look at next index, also leads to other collisions thats why we resol)

ii) Closed Addressing: Uses Linked Lists to cjain together keys which result in the same value.
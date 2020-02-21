# Linked Lists in JavaScript (ES6 code)

## What is a linked list?

A linked list is an ordered collection of data elements. A data element can be represented as a node in a linked list. Each node consists of two parts: data & pointer to the next node.
Unlike arrays, data elements are not stored at contiguous locations. The data elements or nodes are linked using pointers, hence called a linked list.

## A linked list has the following properties:

- Successive nodes are connected by pointers.
- The last node points to null.
- A head pointer is maintained which points to the first node of the list.
- A linked list can grow and shrink in size during execution of the program.
- It can be made just as long as required.
- It allocates memory as the list grows. Unlike arrays, which have a fixed size. Therefore, the upper limit on the number of elements must be known in advance. Generally, the allocated memory is equal to the upper limit irrespective of the usage. This is one the key advantages of using a linked list over an array.

## Another advantage of a linked list

- In contrast to an array, which stores data contiguously in memory, a linked list can easily insert or remove nodes from the list without reorganization of the entire data structure.

## Few drawbacks:

- Random access of data elements is not allowed. Nodes must be accessed sequentially starting from the first one. Therefore, search operation is slow on a linked list.
- It uses more memory than arrays because of the storage used by their pointers.

## Types of Linked lists

There are a few different types of linked lists. But the most popular ones are: singly, doubly and circular.

## Singly linked list

A singly linked list is collection of nodes wherein each node has 2 parts: data and a pointer to the next node. The list terminates with a node pointing at null.

....

Nguồn: [KaTeX](https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3):

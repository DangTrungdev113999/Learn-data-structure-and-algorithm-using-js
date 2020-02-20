const Note = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.insertAtBeginning = function(data) {
  // A newNode object is created with property data and next  = null
  let newNode = new Note(data);
  // The pointer next is assaigned the head next so that both pointer new point at the same node.
  newNode.next = this.head;
  // As we are instering at the beginning the pointer head needs to new point the new node.
  this.head = newNode;

  return this.head;
};

LinkedList.prototype.insertAtEnd = function(data) {
  // A newNode object is created with two property data and next = null
  let newNode = new Note(data);

  // When this.head = null, the list is empty , then head itself
  if (!this.head) {
    this.head = newNode;
    return this.head;
  }

  // Else , Traverse the list to find the tail ( the tail nude will initially be pointing at null), and update the tail's next pointer
  let tail = this.head;
  while (tail.next !== null) {
    tail = tail.next;
  }
  tail.next = newNode;
  return this.head;
};

// A helper funciton  getAt() is defined to get to the desired position.  this function can also be later used for performing delete from a given positin
LinkedList.prototype.getAt = function(index) {
  let counter = 0;
  let node = this.head;
  while (node) {
    if (counter === index) {
      return node;
    }
    counter++;
    node = node.next;
  }
  return null;
};

// The insertAt() function contains the steps to insert a node at a given index.
LinkedList.prototype.insertAt = function(data, index) {
  // if the list is empty i.e. head = null
  if (!this.head) {
    this.head = new Node(data);
    return;
  }
  // if new node needs to be inserted at the front of the list i.e. before the head.
  if (index === 0) {
    this.head = new Node(data, this.head);
    return;
  }
  // else, use getAt() to find the previous node.
  const previous = this.getAt(index - 1);
  let newNode = new Node(data);
  newNode.next = previous.next;
  previous.next = newNode;

  return this.head;
};

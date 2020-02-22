class Stack {
  constructor() {
    this.storage = [];
    this.currentSize = -1;
    this.maxSize = 100;
  }

  isEmpty() {
    return this.currentSize === -1;
  }

  isFull() {
    return this.currentSize === this.maxSize;
  }

  top() {
    if (!this.isEmpty()) {
      return this.storage[this.currentSize];
    }
    return "Stack is empty !";
  }

  push(item) {
    if (!this.isFull()) {
      this.currentSize++;
      this.storage[this.currentSize] = item;
      return this.storage;
    }
    return "Stack is full !";
  }

  pop() {
    if (!this.isEmpty()) {
      let result = this.storage[this.currentSize];
      // delete this.storage[this.currentSize]
      this.currentSize--;
      this.storage.length = this.currentSize === -1 ? 0 : this.currentSize + 1;
      return result;
    }

    return "Stack is empty";
  }

  size() {
    return this.currentSize;
  }

  logStack() {
    return this.storage;
  }
}

module.exports = Stack;

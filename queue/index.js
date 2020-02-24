// pseudoclassical pattern
class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  isEmpty() {
    return this.count - this.lowestCount;
  }

  enqueue(value) {
    if (value) {
      this.storage[this.count] = value;
      this.count++;
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      return "Queue is empty.";
    }
    let result = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  size() {
    return this.count - this.lowestCount;
  }

  logQueue() {
    return this.storage;
  }
}

let instante = new Queue();

instante.enqueue(1);
instante.enqueue(2);
instante.enqueue(3);
instante.enqueue(4);

instante.dequeue();
instante.dequeue();

console.log(instante.logQueue());

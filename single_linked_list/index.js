const Note = require("./Node");
const LinkedList = require("./LinkedList");

let list = new LinkedList();

list.insertAtBeginning(0);
list.insertAtEnd(5);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);

list.deleteFirstNode();
list.deleteLastNodde();
list.deleteAt(2);

console.log(list.logList());

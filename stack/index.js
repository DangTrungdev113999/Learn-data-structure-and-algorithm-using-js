const StackByArray = require("./by_array");

const stack1 = new StackByArray();

stack1.push(0);
stack1.push(1);
stack1.push(2);
stack1.push(3);

console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.logStack());
console.log(stack1.size());

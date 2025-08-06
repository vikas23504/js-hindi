// A variable declared outside any function or block has global scope.

// It can be accessed anywhere in the code, including inside functions or blocks.

// Example:
javascript
Copy
Edit
let globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar); // Accessible here
}

showGlobal();
console.log(globalVar); // Also accessible here

// local scope
// Local scope is further divided into:

// a) Function Scope
// Variables declared inside a function (using var, let, or const) are only accessible within that function.

//  Example:
javascript
Copy
Edit
function showMessage() {
  let message = "Hello from function";
  console.log(message); // Accessible here
}

showMessage();
// console.log(message); //  Error: message is not defined
// b) Block Scope
// Variables declared using let or const inside a block ({}) are only accessible within that block.

// Example:
javascript
Copy
Edit
{
  let blockVar = "Inside block";
  console.log(blockVar); // Accessible here
}
// console.log(blockVar); //  Error: blockVar is not defined
//  var does not have block scope, only function scope.

// Example:
javascript
Copy
Edit
if (true) {
  var test = "Using var";
}
console.log(test); //  Accessible (bad practice)


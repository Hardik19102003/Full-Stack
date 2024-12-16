// Comments in JS
// This is a single-line comment
/* This is a 
   multi-line comment */

console.log("Comments demo completed.");

// Arithmetic Operators
let a = 10, b = 5;
console.log("Addition: ", a + b);
console.log("Subtraction: ", a - b);
console.log("Multiplication: ", a * b);
console.log("Division: ", a / b);
console.log("Modulus: ", a % b);

// Unary Operators
console.log("Unary plus: ", +a);
console.log("Unary minus: ", -b);
console.log("Increment: ", ++a);
console.log("Decrement: ", --b);

// Assignment Operators
let x = 10;
x += 5;
console.log("x after x += 5: ", x);
x *= 2;
console.log("x after x *= 2: ", x);

// Comparison Operators
console.log("a == b: ", a == b);
console.log("a != b: ", a != b);
console.log("a > b: ", a > b);
console.log("a < b: ", a < b);
console.log("a >= b: ", a >= b);
console.log("a <= b: ", a <= b);

// Logical Operators
let c = true, d = false;
console.log("c && d: ", c && d);
console.log("c || d: ", c || d);
console.log("!c: ", !c);

// Ternary Operators
let age = 20;
let isAdult = age >= 18 ? "Yes" : "No";
console.log("Is Adult: ", isAdult);

// Conditional Statements (if)
if (age > 18) {
    console.log("You are an adult.");
}

// if-else Statement
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}

// else-if Statement
if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age < 20) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}

// Print Statements
console.log("Hello World");
console.log("My name is Hardik");

// Variables
let age=21;     //Variables declared with let cannot be Redeclared in the same scope
console.log("age");

const PI = 3.14; //Variables defined with const cannot be Reassigned


// Block Scope
{
    let a=1;
    console.log(a);
}
{
    let a=5;
    console.log(a);
}

// Data Types (Primitive:can't Break Further, Non-primitive)
typeof a   //write in Console on Browser

//Object (key:value pairs)
const student={
    fullName : "Hardik",
    age: 21
};
console.log(typeof student);
console.log(typeof student.fullName);

console.log(student);
console.log(student.fullName);
console.log(student["fullName"]);

console.log("Age:" + student.age);
student.age = student.age + 1;
console.log("Age:" + student.age);
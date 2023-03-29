console.log("hello world!");

// to run this is vscode just right click the file name

const xX = 5;
//x = 10; // Error! constant cannot be changed.
// console.log(xX);

const number1 = 3 / 0;
console.log(number1); // Infinity

const number2 = -3 / 0;
console.log(number2); // -Infinity

let Y = Infinity;
console.log(Y);

const name = "ram";
// prettier-ignore
console.log(typeof(name)); // returns "string"

const number = 4;
console.log(typeof number); //returns "number"

const valueChecked = true;
console.log(typeof valueChecked); //returns "boolean"
const a = null;
console.log(typeof a); // returns "object"

let value = Symbol("hello");
console.log(value);
console.log(value.description);

let id = Symbol("id");

let person = {
	name: "Jack",
	age: 25,
	[id]: 12,
};

// using for...in
for (let key in person) {
	console.log(key);
	console.log(person[key]);
}

//strings example
const name1 = "ram";
const name2 = "hari";
const result = `The names are ${name1} and ${name2}`;
console.log(result);

const name3 = "ram";
typeof name3; // returns "string"

const number3 = 4;
typeof number3; //returns "number"

const valueChecked1 = true;
typeof valueChecked1; //returns "boolean"

const g = null;
console.log(typeof g); // returns "object"
let x = 5;
let y = 3;

// addition
console.log("x + y = ", x + y); // 8

// subtraction
console.log("x - y = ", x - y); // 2

// multiplication
console.log("x * y = ", x * y); // 15

// division
console.log("x / y = ", x / y); // 1.6666666666666667

// remainder
console.log("x % y = ", x % y); // 2

// increment
console.log("++x = ", ++x); // x is now 6
console.log("x++ = ", x++); // prints 6 and then increased to 7
console.log("x = ", x); // 7

// decrement
console.log("--x = ", --x); // x is now 6
console.log("x-- = ", x--); // prints 6 and then decreased to 5
console.log("x = ", x); // 5

//exponentiation
console.log("x ** y =", x ** y);

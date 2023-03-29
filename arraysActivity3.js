let myArray = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49];
let lowestEntry = Infinity; // compare with infinity it can only go lower
let highestEntry = 0; // compare with 0 it can only go higher
let displayArray = "Original Array: ["; // we need to construct the output of the array dynamically incase input changes
let arrayDelimiter = ", ";
let arrayEnd = "]";

for (let i = 0; i <= myArray.length - 1; i++) {
	if (myArray[i] > highestEntry) {
		highestEntry = myArray[i]; // determin highest
	}
	if (myArray[i] < lowestEntry) {
		lowestEntry = myArray[i]; // determin lowest
	}
	displayArray = displayArray + myArray[i];
	if (i != myArray.length - 1) {
		displayArray = displayArray + arrayDelimiter; // if we still have more entries in array use delimiter
	} else {
		displayArray = displayArray + arrayEnd; // if its the last element in array use square bracket
	}
}
console.log(displayArray);
console.log("the highest in the array was " + highestEntry);
console.log("the lowest in the array was " + lowestEntry);

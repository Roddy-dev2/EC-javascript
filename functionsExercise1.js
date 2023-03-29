let myArray = [10, 2, 3, 4, 7]; // global scope variable

function displayArray() {
	return "The content of the array is: [".concat(myArray) + "]"; //global accessable here
}

function findMaxValue() {
	let maxValue = 0; // local scope variable

	for (let i = 0; i <= myArray.length - 1; i++) {
		if (myArray[i] > maxValue) {
			maxValue = myArray[i]; // determin highest
		}
	}
	return "The max value in the array is: " + maxValue;
}

console.log(displayArray());

console.log(findMaxValue()); // we can only see maxValue as it has been returned, if it was
// written here it would be out of scope.

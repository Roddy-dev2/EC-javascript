let myArray = [20, 30, 25, 35, -16, 60, -100]; // the array to loop over
let sumOfArray = 0; // initialise running total

for (let i = 0; i <= myArray.length - 1; i++) {
	sumOfArray += myArray[i]; // look at value at that position in array and add to running total
}

console.log(
	"Average value of elements in the array is " +
		(sumOfArray / myArray.length).toFixed(1)
); // once the loop has ended calc average and log to 1 decimal point

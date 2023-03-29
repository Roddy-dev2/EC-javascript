let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // the array to loop over
let sumOfArray = 0; // initialise running total

for (let i = 0; i <= myArray.length - 1; i++) {
	sumOfArray += myArray[i]; // look at value at that position in array and add to running total
}
console.log(sumOfArray); // once the loop has ended log the total

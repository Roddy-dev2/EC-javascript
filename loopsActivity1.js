for (let i = 0; i < 16; i++) {
	// set up a loop to run from 0 to 15
	if (i % 2 == 1) {
		// test for odd/even if you divide by 2 and have zero remainder
		// its even, otherwise odd
		console.log(i, "is odd");
	} else if (i % 2 == 0) {
		console.log(i, "is even");
	}
}

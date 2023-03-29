let inputNumber = prompt("Enter a number to find if it has a factoral");

function getFactorOf(inputNumber) {
	let factoralResult = 1; //use 1 as 1*1 = 1 and factoral of 0 = 1 otherwise we always get 0 output
	for (let i = 1; i <= inputNumber; i++) {
		factoralResult = i * factoralResult;
	}
	return factoralResult;
}

if (inputNumber < 0) {
	// test for neg numbers
	document.getElementById(
		"displayResult"
	).innerHTML = `You cant have a factoral of negative numbers`;
} else {
	document.getElementById("displayResult").innerHTML =
		"The factoral of your number is " + getFactorOf(inputNumber); // call function and get the returned result
}

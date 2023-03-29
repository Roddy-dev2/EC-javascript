// get the number you want to multiply
let timesMultiplier = prompt("Enter a number to get a times table");
// target the list you want to loop round
let list = document.getElementById("myList");
// itterate 10 times and create list items for each calculation and add to the unordered list
for (let i = 1; i <= 10; i++) {
	let li = document.createElement("li");
	li.innerText = timesMultiplier + " x " + i + " = " + timesMultiplier * i;
	list.appendChild(li);
}

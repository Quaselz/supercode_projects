let counter = 0;

function doMath(value) {
	if (value != 2) {
		counter += value;
	} else {
		counter *= value;
	}
	writeMe(counter);
}

function resetMe() {
	counter = 0;
	writeMe(counter);
}

function writeMe(counter) {
	const myDiv = document.querySelector("p");
	myDiv.innerHTML = counter;
}

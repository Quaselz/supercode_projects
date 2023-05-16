const outputDisplay = document.querySelector("#demo");
const inputs = document.querySelectorAll("input");

let counter = 0;

function changeHandle() {
	counter++;
	let inputValues = [];
	inputs.forEach((input, i) => {
		inputValues[i] = Number(input.value).toString(16);
	});
	console.log(inputValues);
	document.body.style.backgroundColor = `#${inputValues[0]}${inputValues[1]}${inputValues[2]}`;

	outputDisplay.innerHTML = `Du hast die Farbe ${counter} mal geändert und zur Farbe #${inputValues[0]}${inputValues[1]}${inputValues[2]}`;
}

function changeBackground(color) {
	counter++;
	document.body.style.backgroundColor = color;
	outputDisplay.innerHTML = `Du hast die Farbe ${counter} mal geändert`;
}

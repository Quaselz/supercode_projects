// level3_2
console.log("Level3_2");
console.log("========");

let numArr = [5, 22, 15, 100, 55];
const outputDisplay = document.querySelector("#output");

numArr.forEach((ele) => {
	for (let index = 1; index < ele; index++) {
		if (ele % index) {
		} else {
			outputDisplay.innerHTML += `<p> ${ele} lässt sich  durch ${index} teilen! Das Ergebnis ist ${
				ele / index
			}`;
		}
	}
});

// level3_3
console.log("Level3_3");
console.log("========");

const outputLoopDisplay = document.querySelector("#output-loop");

document.querySelector("#loop-btn").addEventListener("click", (e) => {
	e.preventDefault();
	const loopCount = document.querySelector("#number").value;
	let oSize = "";
	if (Number(loopCount) <= 0) {
		outputLoopDisplay.innerHTML = `Error ${loopCount} not valid`;
		return;
	}
	for (let index = 0; index < loopCount; index++) {
		if (index % 2) {
			oSize += "0";
		} else {
			oSize += "o";
		}
	}
	outputLoopDisplay.innerHTML = `L${oSize}p`;
});

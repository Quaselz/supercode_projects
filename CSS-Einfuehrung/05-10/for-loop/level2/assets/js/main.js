//level2_1
console.log("Level2_1");
console.log("========");

function imageArray() {
	let returnArray = [],
		newIndex;
	for (let index = 1; index < 101; index++) {
		if (index.toString().length === 1) {
			newIndex = "00" + index;
		} else if (index.toString().length === 2) {
			newIndex = "0" + index;
		} else {
			newIndex = index;
		}
		returnArray.push(`image_${newIndex}.jpg`);
	}
	console.log(returnArray);
}
imageArray();

//level2_2
console.log("Level2_2");
console.log("========");

const outputDisplay = document.querySelector("#output");

document.querySelector("#loop-btn").addEventListener("click", (e) => {
	e.preventDefault();
	const loopCount = document.querySelector("#number").value;
	let oSize = "";

	for (let index = 0; index < loopCount; index++) {
		oSize += "o";
	}
	outputDisplay.innerHTML = `L${oSize}p`;
});

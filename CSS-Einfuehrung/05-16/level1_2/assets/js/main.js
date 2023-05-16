//level1_2
const myExampleElements = document.getElementsByClassName("example");
let change = false;
function myFunction() {
	const myExampleElements = document.getElementsByClassName("example");

	if (change) {
		for (let i = 0; i < myExampleElements.length; i++) {
			myExampleElements[i].style.backgroundColor = "black";
			myExampleElements[i].style.color = "white";
		}
		change = false;
	} else {
		for (let i = 0; i < myExampleElements.length; i++) {
			myExampleElements[i].style.backgroundColor = "white";
			myExampleElements[i].style.color = "black";
		}
		change = true;
	}
}

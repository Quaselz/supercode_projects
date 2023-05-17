const submitButton = document.querySelector("#enter");
const outputUl = document.querySelector("ul");

submitButton.addEventListener("click", () => {
	const userInputText = document.querySelector("#userinput").value;
	const newLi = document.createElement("li");

	const text = document.createTextNode(userInputText);

	newLi.appendChild(text);
	outputUl.appendChild(newLi);
});
document.addEventListener("keydown", (e) => {
	console.log(e.which);
	if (e.which === 13) {
		//const userInputText = document.querySelector("#userinput").value;
		const newLi = document.createElement("li");
		const text = "ich wurde durch enter erstellt.";
		const textNode = document.createTextNode(text);
		newLi.appendChild(textNode);
		outputUl.appendChild(newLi);
	}
});

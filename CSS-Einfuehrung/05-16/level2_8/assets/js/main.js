const submitButton = document.querySelector("#enter");
const outputUl = document.querySelector("ul");

submitButton.addEventListener("click", () => {
	const userInputText = document.querySelector("#userinput").value;
	const newLi = document.createElement("li");

	const text = document.createTextNode(userInputText);

	newLi.appendChild(text);
	outputUl.appendChild(newLi);
});

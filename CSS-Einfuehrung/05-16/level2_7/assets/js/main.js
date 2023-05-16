const button = document.querySelector("button");
const outputContainer = document.querySelector(".umwickeln");
let counter = 0;

button.addEventListener("click", (e) => {
	const newDiv = document.createElement("div");
	newDiv.textContent = counter;
	if (!counter % 10) {
		newDiv.setAttribute("class", "rechteck weiss");
	} else {
		newDiv.setAttribute("class", "rechteck");
	}
	outputContainer.appendChild(newDiv);
	counter++;
});

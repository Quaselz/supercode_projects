const buttonArray = document.querySelectorAll("button");
const ul = document.body.firstElementChild;
const output = document.querySelector("output");

buttonArray.forEach((button, index) => {
	button.addEventListener("click", (e) => {
		e.preventDefault();
		console.log(index);
		let textContent;

		if (index === 0) {
			textContent = ul.firstElementChild.textContent;
		} else if (index === 1) {
			textContent = ul.lastElementChild.textContent;
		} else if (index === 2) {
			textContent = ul.firstElementChild.nextElementSibling.textContent;
		} else if (index === 3) {
			textContent = ul.lastElementChild.previousElementSibling.textContent;
		}
		output.innerHTML = textContent;
	});
});

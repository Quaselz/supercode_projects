const outputZahl = document.body.firstElementChild.firstElementChild;
const outputSection = document.querySelector("#output");
const outputKey = outputSection.firstElementChild.nextSibling;
const outputKeyCode =
	outputSection.firstElementChild.nextSibling.nextSibling.nextSibling;
const outputCode = outputSection.lastElementChild;

document.addEventListener("keydown", (e) => {
	e.preventDefault();

	outputZahl.innerHTML = e.which;
	outputKey.innerHTML = e.key;
	outputKeyCode.innerHTML = e.which;
	outputCode.innerHTML = e.code;
});

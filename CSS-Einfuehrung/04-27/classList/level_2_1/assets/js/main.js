// level 1_1
const headline = document.querySelector("h2");

function changeHeadline() {
	headline.classList.add("blue");
}

function resetHeadline() {
	// enterfernt nur class im selector
	headline.classList.remove("blue");

	// entfernt alle classen
	//headline.removeAttribute("class");
}

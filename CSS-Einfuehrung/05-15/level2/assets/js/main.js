document.querySelector("#button").addEventListener("click", (e) => {
	e.preventDefault();

	let option = document
		.querySelector("#farbeAuswahlen")
		.value.replace(/\s+/g, "");
	document.querySelector("body").style.backgroundColor = option;

	let index = document.querySelector("#farbeAuswahlen").selectedIndex + 1;

	document.getElementById(`${index}`).style.background = option;
});

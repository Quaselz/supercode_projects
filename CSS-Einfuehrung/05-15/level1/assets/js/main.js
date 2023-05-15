//level1_5
let count = 0;

document.querySelector("#clickMe").addEventListener("click", (e) => {
	e.preventDefault();
	count++;
	document.querySelector("#clickMe").innerHTML = `Click me: ${count}`;
});

//level1_6
document.querySelector("#my-select").addEventListener("change", (e) => {
	e.preventDefault();
	document.querySelector("#outputSelect").innerHTML =
		document.querySelector("#my-select").value;
});

//level1_9
document.querySelector("#button").addEventListener("click", (e) => {
	e.preventDefault();
	document
		.querySelector("#farbeAuswahlen")
		.remove(document.querySelector("#farbeAuswahlen").selectedIndex);
});

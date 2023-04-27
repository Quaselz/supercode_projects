function changeBG() {
	const red = document.querySelector("#red").value;
	const green = document.querySelector("#green").value;
	const blue = document.querySelector("#blue").value;

	document.querySelector("body").style.background =
		"rgb(" + red + ", " + green + ", " + blue + ")";
}

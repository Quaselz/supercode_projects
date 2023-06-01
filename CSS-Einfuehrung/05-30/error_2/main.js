const submitBtn = document.getElementById("submit-btn");
let age;

submitBtn.addEventListener("click", (event) => {
	event.preventDefault();
	const inputAge = document.getElementById("input-age").value;
	age = inputAge;
	if (age >= 18) {
		console.log(true);
		document.getElementById("output").innerHTML = "over 18";
	} else {
		console.log(false);
		document.getElementById("output").innerHTML = "under 18";
	}
});

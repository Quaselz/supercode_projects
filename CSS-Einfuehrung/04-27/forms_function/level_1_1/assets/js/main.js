// level 1_1

function doubleMe() {
	const outPut = document.querySelector(".level1_1");
	let number = document.querySelector("#number").value;

	console.log(outPut);

	outPut.innerHTML += "<p>" + number * 2 + "</p>";
}

// level 1_2
function ageMe() {
	const outPut = document.querySelector(".level1_2");
	const date = new Date();
	let birthYear = document.querySelector("#year").value;

	let age = date.getFullYear() - birthYear;

	outPut.innerHTML += "<p>Dein Alter: " + age + ".</p>";
}

// level 1_3

function diffUs() {
	const outPut = document.querySelector(".level1_3");
	let age1 = document.querySelector("#alter1").value;
	let age2 = document.querySelector("#alter2").value;

	let diff = age1 - age2;

	outPut.innerHTML += "<p>Die Differenz ist: <br/>" + diff + ".</p>";
}

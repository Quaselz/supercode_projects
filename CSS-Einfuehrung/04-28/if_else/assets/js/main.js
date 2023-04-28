// Level1_1
const outPut = document.querySelector(".outputLevel1_1");
const outPut1 = document.querySelector(".outputLevel1_3");

function ageCheck() {
	event.preventDefault();
	let age = document.querySelector("#age").value;

	if (age >= 18) {
		outPut.innerHTML = "Du bist Volljährig";
	} else {
		outPut.innerHTML = "Du bist Minderjährig";
	}
}

// level1_3
document.getElementById("submit1").addEventListener("click", function (event) {
	event.preventDefault();
	console.log(event);
	if (document.getElementById("age1").value >= 18) {
		outPut1.innerHTML = "Ja, Du kannst Shisha rauchen";
	} else {
		outPut1.innerHTML = "Du darfst noch nicht Shisha rauchen";
	}
});

// level1_2
function weatherCheck() {
	let weather = document.querySelector("#weather").value;
	let quali;

	if (weather >= 0 && weather <= 2) {
		quali = "schlecht";
	} else if (weather >= 3 && weather <= 5) {
		quali = "okay";
	} else if (weather >= 6 && weather <= 7) {
		quali = "gut";
	} else if (weather >= 8 && weather <= 10) {
		quali = "super";
	}

	document.querySelector(".outputLevel1_2").innerHTML =
		"Das Wetter ist" + quali;
}

// level 2_3
function doMath() {
	let number = document.querySelector("#number").value;
	let zwischenSum = number - 27;

	if (zwischenSum > 27) {
		zwischenSum *= 2;
		console.log("multiplizieren:" + zwischenSum);
	}
}

// level2_2

function qualiCheck() {
	let qualiValue = document.querySelector("#range").value;
	let quali;
	let qualiPub;
	let color;

	if (qualiValue <= 50) {
		quali = "good";
		qualiPub = "Little or no risk";
		color = "green";
	} else if (qualiValue > 50 && qualiValue <= 100) {
		quali = "Moderate";
		qualiPub = "Acceptable quality";
		color = "yellow";
	} else {
		quali = "Unhealthy for sensitive groups";
		qualiPub = "Generable publics not liky affected";
		color = "red";
	}
	document.querySelector("body").style.backgroundColor = color;
	document.querySelector(".outputLevel2_2").innerHTML =
		quali + "<br /> " + qualiPub;
}

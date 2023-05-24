// level3_2
console.log("level3_2");
console.log("========");

//getting output/inputs
const timeInput = document.querySelector("#minutes");
const outputCountdown = document.querySelector("#time");

//setting global vars
let timeDifference = 0;
let timerInterval = null;

const startMinCountdown = () => {
	//clear interval (better with chekc if it is there)
	clearInterval(timerInterval);
	let minutes = timeInput.value;
	const regex = /^[0-9]+$/;
	if (!minutes.match(regex)) {
		alert("Enter a Number in please");
		return;
	} else {
		//calc some date time magic
		const minutesInMillsec = minutes * 60 * 1000;
		const date = new Date().getTime();
		const countDown = new Date(date - minutesInMillsec).getTime();
		timeDifference = date - countDown;

		//starting timer
		timerInterval = setInterval(timer, 1000);
	}
};
const pauseMinCountdown = () => {
	//clear interval from timer
	clearInterval(timerInterval);
};
const restartMinCountdown = () => {
	//restart timer
	timerInterval = setInterval(timer, 1000);
};

const timer = () => {
	//get minutes and second from time
	let minutesLeft = Math.floor(
		(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
	);
	let secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
	timeDifference -= 1000;

	//display time
	outputCountdown.innerHTML = `${minutesLeft}:${secondsLeft}`;

	if (timeDifference <= 0) {
		clearInterval(timerInterval);
		console.log("check");
	}
};

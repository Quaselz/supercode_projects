// level1_1
console.log("level1_1");
console.log("========");

setTimeout(() => {
	console.log("text kam nach 3sec");
}, 3000);

let counter = 10;
let myInterval = setInterval(() => {
	counter--;
	console.log(counter);
	if (counter === 0) {
		clearTimeout(myInterval);
	}
}, 1000);

// level1_2
console.log("level1_2");
console.log("========");

const outputTimePercent = document.querySelector(".zeit");
let counterPercent = 100;

document.querySelector("#btn").addEventListener("click", () => {
	let myPercentInterval = setInterval(() => {
		counterPercent--;
		outputTimePercent.innerHTML = `${counterPercent}%`;
	}, 100);

	if (counterPercent === 0) {
		clearInterval(myPercentInterval);
		counterPercent = 100;
	}
});

// level1_9
console.log("level1_9");
console.log("========");

const date = new Date();
const outputDate = document.querySelector("#txt");
const startTime = () => {
	const date = new Date();
	const hours = date.getHours();
	const min = date.getMinutes();
	const sec = date.getSeconds();

	outputDate.innerHTML = `${hours}:${min}:${sec}`;
	setInterval(startTime, 1000);
};

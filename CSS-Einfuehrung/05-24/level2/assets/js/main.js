// level1_1
console.log("level2_1");
console.log("========");

const outputCountDown = document.querySelector("#count");
const divMessege = document.querySelector(".message");
let count = 10;

window.addEventListener("load", (e) => {
	const countDownInterval = setInterval(() => {
		count--;
		outputCountDown.innerHTML = count;
		if (count <= 0) {
			divMessege.classList.add("remove");
			clearInterval(countDownInterval);
		}
	}, 1000);
});

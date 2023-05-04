// Level 1_1
console.log("Level1_1");
console.log("=======");

const roundedPI = Number(Math.PI.toFixed(2));
console.log(roundedPI);

// Level 1_2
console.log("Level1_2");
console.log("========");

let array = [3.14, 193.4464, 0.8596433607, -2.940629089];
let newArray = [];

array.forEach((element, index) => {
	newArray[index] = Math.round(element);
});

console.log({ newArray });

// Level 1_3
console.log("Level1_3");
console.log("========");

let randomNum = Math.random();
let randomNum1_10 = Math.floor(Math.random() * 10) + 1;
let randomNum1_100 = Math.floor(Math.random() * 100) + 1;

// Level 2_1
console.log("Level2_1");
console.log("========");

function roundTo(number, praesition) {
	let num = Number(number.toFixed(praesition));
	return num;
}

console.log(roundTo(3.1415926535, 5)); // 3.14159

// Level 2_2
console.log("Level2_2");
console.log("========");

const inputBtn = document.querySelector("#checkBtn");

inputBtn.addEventListener("click", (event) => {
	event.preventDefault();
	const value = document.querySelector("#number").value;
	const npcNum = Math.floor(Math.random() * 10) + 1;
	let text;

	if (value == npcNum) {
		text = "you win";
	} else {
		text = "you lose";
	}
	console.log(`Npc:${npcNum} vs Your:${value}`);
	console.log(`${text}`);
});

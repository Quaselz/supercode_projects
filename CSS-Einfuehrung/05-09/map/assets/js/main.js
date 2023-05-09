// level1_2
console.log("Level1_2");
console.log("========");

let getraenke = [
	"Coca-Cola",
	"Apfelsaft",
	"Pepsi",
	"Traubensaft",
	"Sprite",
	"Orangensaft",
	"Red Bull Energy Drink",
	"Fanta",
];

let upperDrinks = getraenke.map((ele) => ele.toUpperCase());

console.log(upperDrinks);

// level1_3
console.log("Level1_3");
console.log("========");

let array = [
	18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
	74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

let newArray = array.map((ele) => ele * 2).sort((a, b) => a - b);

// level1_4
console.log("Level1_4");
console.log("========");
let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let celsius = fahrenheit.map((ele) => {
	return (ele = Math.round((ele - 32) / 1.8));
});

console.log(celsius);

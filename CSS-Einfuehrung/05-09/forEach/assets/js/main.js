// level1_1
console.log("Level1_1");
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
getraenke.sort();
getraenke.forEach((ele) => {
	console.log(ele);
	document.write(`<br>${ele}`);
});

// level1_5
console.log("Level1_5");
console.log("========");

let checkNumber = [
	18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
	74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

let numbers = checkNumber.map((ele, index) =>
	ele % 3 ? (this[index] = ele) : (this[index] = ele + 100)
);

console.log(numbers);

// level1_6
console.log("Level1_6");
console.log("========");

let albumArray = [
	"holidays.jpg",
	"Restaurant.jpg",
	"desktop",
	"rooms.GIF",
	"DOGATBEACH.jpg",
];

let albums = albumArray.map((album, index) => {
	let indexOf = album.indexOf(".");

	if (indexOf === -1) {
		return (album = "invalied");
	} else {
		return album.slice(0, indexOf).toLocaleLowerCase();
	}
});

console.log({ albums });

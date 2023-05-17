//level1_2
console.log("level1_2");
console.log("========");
const person = {
	name: "Paul",
	alter: 28,
	sagNameAlter: function () {
		return console.log(`${this.name}, ${this.alter}`); // eig mit alert
	},
};

console.log(person["name"], person["alter"]);

person.sagNameAlter();

//level1_4
console.log("level1_4");
console.log("========");
let unsereHaustiere = [
	{
		tiertyp: "Katze",
		names: ["Gipsy", "Nala", "Dinky"],
	},
	{
		tiertyp: "Hunde",
		names: ["Knöpfchen", "Pinselchen", "Droopy"],
	},
];

console.log(unsereHaustiere[0]["names"][1]);
console.log(unsereHaustiere[1]["names"][2]);

let newDogNames = (name) => {
	return (unsereHaustiere[1]["names"] = name);
};

newDogNames("klaus");

console.log(unsereHaustiere[1]["names"]);

// level1_5
console.log("level1_5");
console.log("========");

let unserLager = {
	schreibtisch: {
		schublade: "Hefter",
	},
	schrank: {
		"Obere Schublade": {
			Ordner1: "Dokumente",
			Ordner2: "Geheimnisse",
		},
		"Untere Schublade": "Cola",
	},
};

console.log(unserLager["schrank"]["Obere Schublade"]["Ordner2"]);
console.log(unserLager["schrank"]["Untere Schublade"]);
console.log(unserLager["schreibtisch"]["schublade"]);

// level1_7
console.log("level1_7");
console.log("========");

let myMusic = [
	{
		artist: "The Beatles",
		title: "Abbey Road",
		release_year: 1969,
		medium: ["LP", "CD", "MC", "Download"],
		gold: true,
	},
	{
		artist: "Pink Floyd",
		title: "Dark Side of the Moon",
		release_year: 1978,
		medium: ["CS", "CD", "LP", "Download"],
		gold: true,
	},
	{
		artist: "Led Zeppelin",
		title: "Led Zeppelin IV",
		release_year: 1971,
		medium: ["CS", "LP", "Download"],
		gold: true,
	},
	{
		artist: "Metallica",
		title: "Kill ’Em All und Ride the Lightning",
		release_year: 1983,
		medium: ["LP", "CD", "MC", "Download"],
		gold: true,
	},
];

myMusic.forEach((music) => {
	console.log("%c " + music["artist"], "color: #bada55");
	console.log("%c " + music["title"], "color: #23d623");
	console.log("%c " + music["medium"], "color: #3356cc");

	//let relases = Object.entries(music).filter
	if (music["release_year"] > 1975) {
		console.log(music["release_year"]);
	} else {
		console.log("releaseyear is under 1975");
	}
});

let release_year = myMusic
	.filter((artist) => artist["release_year"] > 1975)
	.forEach((artist) => {
		console.log(
			`%c ${artist["release_year"]}`,
			"background-color: black; color: white"
		);
	});
//console.log(release_year);

// level1_8
console.log("level1_8");
console.log("========");

let studentData = [
	{
		name: "Alex",
		age: 23,
		coop: false,
		address: {
			street: "Don Valley Business Park",
			city: "Toronto",
			postalCode: "ONM3C3E5",
		},
		emails: ["alex69@gmail.com", "alex123@yahoo.com"],
	},
	{
		name: "Sandra",
		age: 22,
		coop: true,
		address: {
			street: "34 Lawrence Ave",
			city: "Toronto",
			postalCode: "ONM3C0E5",
		},
		emails: ["sandra@gmail.com", "sandra@yahoo.com"],
	},
];
let array = [];
studentData.map((student) => {
	console.log(`%c ${student["name"]}`, "color: #bada55");
	console.log(`%c ${student["coop"]}`, "color: #23d623");
	//console.log(`%c ${student["address"]["city"]}`, "color: #3356cc");
	console.log(`%c ${student["emails"]}`, "color: #3356cc");

	console.log("===================");
	for (const key in student) {
		if (key === "name" || key === "coop" || key === "emails") {
			const element = student[key];
			console.log(`%c ${element}`, "background-color: green; color: black");
		}
	}
	array.push(student["address"]["city"]);
});

console.log({ array });
console.log(
	` ${studentData[0]["address"]["city"]},${studentData[0]["address"]["city"]}`
);

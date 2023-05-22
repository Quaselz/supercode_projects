//level2_1
console.log("level2_1");
console.log("========");

let edelMetallPreise = [
	{ name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
	{ name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
	{ name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
	{ name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
	{ name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
	{ name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
	{ name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
	{ name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
	{ name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

let nameArray = [],
	preiseGramEuroArray = [],
	veraenderungArray = [];

edelMetallPreise.forEach((metall) => {
	nameArray.push(metall["name"]);
	preiseGramEuroArray.push(metall["preiseGramEuro"]);
	veraenderungArray.push(metall["veraenderung"]);
});

let nameMapArray = edelMetallPreise.map((metall) => metall["name"]);
let preiseGramEuroMapArray = edelMetallPreise.map(
	(metall) => metall["preiseGramEuro"]
);
let veraenderungMapArray = edelMetallPreise.map(
	(metall) => metall["veraenderung"]
);
console.log(nameArray);
console.log(nameMapArray);
console.log(preiseGramEuroArray);
console.log(veraenderungArray);

let filterMetall = edelMetallPreise.filter(
	(metall) => metall["preiseGramEuro"] > 50
);
console.log(filterMetall);

const table = document.createElement("table");
edelMetallPreise.unshift(["name", "preiseGramEuro", "veraenderung"]);
edelMetallPreise.forEach((metall, index) => {
	const tr = document.createElement("tr");
	for (const key in metall) {
		const cellValue = metall[key];
		let cell;
		if (index === 0) {
			zelle = document.createElement("th");
		} else {
			zelle = document.createElement("td");
		}
		zelle.textContent = cellValue;
		tr.appendChild(cell);
	}
	table.appendChild(tr);
});

document.body.appendChild(table);

//level2_2
console.log("level2_2");
console.log("========");

const singers = [
	{
		name: "The Beatles",
		country: "United Kingdom",
		period_active: { start: 1960, end: 1970 },
		genre: "Rock / Pop",
	},
	{
		name: "Elvis Presley",
		country: "United States",
		period_active: { start: 1954, end: 1977 },
		genre: "Rock and roll",
	},
	{
		name: "Michael Jackson",
		country: "United States",
		period_active: { start: 1964, end: 2009 },
		genre: "Pop / Rock / Dance / Soul / R&B",
	},
	{
		name: "Elton John",
		country: "United Kingdom",
		period_active: { start: 1964, end: "present" },
		genre: "Pop / Rock",
	},
	{
		name: "Madonna",
		country: "United States",
		period_active: { start: 1979, end: "present" },
		genre: "Pop / Dance / Electronica",
	},
	{
		name: "Led Zeppelin",
		country: "United Kingdom",
		period_active: { start: 1968, end: 1980 },
		genre: "Hard rock / Blues rock / Folk rock",
	},
	{
		name: "Rihanna",
		country: "United States",
		period_active: { start: 2005, end: "present" },
		genre: "R&B / Pop / Dance / Hip-hop",
	},
	{
		name: "Pink Floyd",
		country: "United Kingdom",
		period_active: { start: 1965, end: 1996, extra: 2014 },
		genre: "Progressive rock / Psychedelic rock",
	},
];

let sortSinger = singers.sort((firstSinger, secondSinger) =>
	firstSinger["name"] > secondSinger["name"]
		? 1
		: firstSinger["name"] < secondSinger["name"]
		? -1
		: 0
);

console.log(sortSinger);

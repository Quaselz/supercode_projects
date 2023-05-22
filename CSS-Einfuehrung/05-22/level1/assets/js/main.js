//level1_1
console.log("level1_1");
console.log("========");
let date1 = new Date("September 2, 2019 09:00:00");
let date2 = new Date(0);
let date3 = new Date(31556908800);
let date4 = new Date(86400000);

document.body.innerHTML = "<br>" + date1;
document.body.innerHTML += "<br>" + date2;
document.body.innerHTML += "<br>" + date3;
document.body.innerHTML += "<br>" + date4;

//level1_2
console.log("level1_2");
console.log("========");

let monate = [
	"Januar",
	"Februar",
	"März",
	"April",
	"Mai",
	"Juni",
	"Juli",
	"August",
	"September",
	"Oktober",
	"November",
	"Dezember",
];

let wochenTag = [
	"Sonntag",
	"Montag",
	"Dienstag",
	"Mittwoch",
	"Donnerstag",
	"Freitag",
	"Samstag",
];

const date5 = new Date();

document.body.innerHTML += `<br> ${date5}`;
document.body.innerHTML += `<br> ${date5.getFullYear()}`;
document.body.innerHTML += `<br> ${date5.getMonth()} Monat`;
document.body.innerHTML += `<br> ${date5.getDay()} Tag`;
document.body.innerHTML += `<br> ${date5.getHours()} Stunde`;
document.body.innerHTML += `<br> ${date5.getMinutes()} Minute`;
document.body.innerHTML += `<br> ${wochenTag[date5.getDay()]}`;
document.body.innerHTML += `<br> ${monate[date5.getMonth()]} `;
//level1_3
console.log("level1_3");
console.log("========");

let lvl3Date = new Date();

document.body.innerHTML += `<br><br><br> ${lvl3Date}`;

lvl3Date.setDate(24);
lvl3Date.setFullYear(2123);
lvl3Date.setMonth(1);
document.body.innerHTML += `<br> ${lvl3Date}`;

lvl3Date.setMonth(2);
document.body.innerHTML += `<br> ${lvl3Date}`;

lvl3Date.setDate(lvl3Date.getDate() + 30);
document.body.innerHTML += `<br> ${lvl3Date}`;

//level1_5
console.log("level1_5");
console.log("========");
const list = [
	"Januar",
	"Februar",
	"März",
	"April",
	"Mai",
	"Juni",
	"Juli",
	"August",
	"September",
	"Oktober",
	"November",
	"Dezember",
];

function monatsName(date) {
	const date1 = new Date(date);
	const month = list[date1.getMonth()];
	return month;
}

console.log(monatsName("2001,3,4"));
console.log(monatsName("2019,12,24"));
console.log(monatsName("1410,07,15"));

//level1_6
console.log("level1_6");
console.log("========");

function chooseAM(testDate) {
	console.log(testDate);
	console.log(testDate.getHours());
	if (testDate.getHours() >= 12) {
		return "pm";
	} else {
		return "am";
	}
}

date1 = new Date(1999, 10, 5, 15); //PM
date2 = new Date();
date3 = new Date(2019, 12, 3, 12); //PM
date4 = new Date(2000, 1, 1, 11); //AM

console.log(chooseAM(date1));
console.log(chooseAM(date2));
console.log(chooseAM(date3));
console.log(chooseAM(date4));

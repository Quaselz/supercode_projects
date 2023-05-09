// level1_1
console.log("level1_1");
console.log("========");

let languages = [
	"JavaScript",
	"Python",
	"Java",
	"Ruby",
	"PHP",
	"C++",
	"CSS",
	"C#",
	"Go",
	"C",
	"TypeScript",
	"Swift",
];

languages = languages.sort();

console.log(languages);

// level1_2
console.log("level1_2");
console.log("========");

languages = languages.reverse();

console.log(languages);

// level1_3
console.log("level1_3");
console.log("========");

var numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

numArray1.sort();

console.log(numArray1);

// level1_3
console.log("level2_2");
console.log("========");

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

numArray2.sort((a, b) => a - b);

console.log(numArray2);

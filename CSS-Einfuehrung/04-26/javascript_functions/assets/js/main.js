// level 1_2

console.log("Level 1_2");
console.log("---------");

function intro2(paramName) {
	let varName = "SuperCode";
	console.log("Hi, " + varName + ". Mein Name ist " + paramName + ".");
}

intro2("Paul");

console.log("Level 1_3");
console.log("---------");
//level 1_3
function intro3(name, city, age) {
	console.log(
		"Hallo, mein Name ist " +
			name +
			". Ich bin " +
			age +
			" Jahre alt. Ich komm aus " +
			city +
			"."
	);
}

intro3("name", "city", "4");

console.log("Level 1_5");
console.log("---------");
//level 1_5

function math(x, y) {
	console.log(x * y);
	console.log(x / y);
}

math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);

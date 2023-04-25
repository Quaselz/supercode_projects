// Level 1_1 console.log()
console.log("Level1_1");
console.log("---------");

let firstName = "Anton";
let age = 28;
let job = "Trainer";
let married = true;

console.log(firstName);
console.log(age);
console.log(job);
console.log(married);

console.log(
	firstName +
		"ist " +
		age +
		"Jahre alt, von Beruf " +
		job +
		"und ist verheiratet: " +
		married
);

//Level 1_5 vars
console.log("Level1_5");
console.log("---------");

let carName = "BMW";
console.log(carName);

let x = 150;
let y = 50;
let z = x + y;

console.log({ x }, { y }, { z });

let firstiName = "John";
let lastName = "Doe";
let agy = "35";

console.log({ firstiName }, { lastName }, { agy });

//level 1_6 Let const
console.log("Level1_6");
console.log("---------");

let a = 34;
a = 67;
console.log({ a });

const b = 34;
/* b = 67; */
console.log({ b });

// const kann nicht erneut deklariert werden bzw überschrieben werden
// level1_12 Arithmetische Operatoren
console.log("Level1_12");
console.log("---------");

let score = 5 + 5 * 10;
console.log("Ergebnis" + score);

score = (5 + 5) * 10;
console.log("Ergebnis" + score);

score = score + 10;
console.log("Ergebnis" + score);

score += 10;
console.log("Ergebnis" + score);

let zahl = 1;
zahl = zahl + 1;
zahl += 1;
zahl++;
console.log("increment" + zahl);

zahl--;
console.log("dekrement" + zahl);

//level 1_11 String Methods
console.log("Level1_11");
console.log("---------");

let hello = "Hello";
let world = "World<br>";

let helloWorld = hello + world;

document.write(helloWorld);

let n = hello + "" + world;
document.write(n);

hello += "World";
document.write(hello);

let meinString = "Ich bin Erster";
meinString += " Ich komme auf Platz zwei";
console.log(meinString);

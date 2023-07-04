import { names, numbers } from "./data.js";
import {
	firstEle,
	notLastEle,
	lastEle,
	allButLastEle,
	removeValue,
	uniqueArray,
	sumNumArray,
	randomNumber,
	upperFirstChar,
	stringToUppercase,
	hasIndex,
} from "./function.js";

console.log(firstEle(names));
console.log(notLastEle(names));
console.log(lastEle(names));
console.log(allButLastEle(names));
console.log(removeValue(names, "Ahmed"));
console.log(uniqueArray(names));
console.log(sumNumArray(numbers));
console.log(randomNumber(12, 16));
console.log(upperFirstChar("okdf sdf"));
console.log(stringToUppercase("hehehe"));
console.log(hasIndex("hier ist ein string", "i"));
console.log(hasIndex("hier ist ein string", "x"));

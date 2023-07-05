import { log } from "node:console";
import fs from "node:fs";
import fsPromises from "node:fs/promises";
import { resolve } from "node:path";

const data = fs.readFileSync("input.txt", { encoding: "utf8" });

console.log(data);
console.log("ende");
/* 
fs.readFile("./input.txt", { encoding: "utf-8" }, (err, data) => {
	err ? console.error(err) : console.log(data);
});
 */
const fsPromise = (filePath) =>
	new Promise((resolve, reject) => {
		fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
			err ? reject(err) : resolve(data);
		});
	});

fsPromise("./input.txt").then((data) => console.log("eee:", data));

const fsPromisesData = fsPromises
	.readFile("./input.txt", { encoding: "utf-8" })
	.then((fsData) => console.log("fsData:", { fsData }));

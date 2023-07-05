import fs from "node:fs";
import fsPromises from "node:fs/promises";

try {
	const url = new URL("./data.json", import.meta.url);
	const data = await fsPromises
		.readFile(url, { encoding: "utf8" })
		.then((fsData) => JSON.parse(fsData));
	const newPath = new URL("./data.txt", import.meta.url);

	const newData = data.map((item) => {
		return `${item.id} - ${item.title},\n ${item.description}\n\n`;
	});
	await fsPromises.writeFile(newPath, newData);
} catch (err) {
	console.error("err:", err);
}

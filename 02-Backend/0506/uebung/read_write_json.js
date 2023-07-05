import fs from "node:fs/promises";
try {
	const filePath = new URL("./package.json", import.meta.url);
	const contents = await fs.readFile(filePath, { encoding: "utf8" });
	const myJson = JSON.parse(contents);
	myJson.author = "Phew Mhew";

	await fs.writeFile(filePath, JSON.stringify(myJson, null, 2), {
		encoding: "utf8",
	});
} catch (err) {
	console.error(err.message);
}

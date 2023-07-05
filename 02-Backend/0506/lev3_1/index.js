import fs from "node:fs";
import fsPromise from "node:fs/promises";

try {
	const dirPath = new URL("./myDir", import.meta.url);
	await fsPromise.mkdir(dirPath, { recursive: true, encoding: "utf8" });

	const textPath = new URL("./myDir/text.txt", import.meta.url);
	const myFunction = (param) => {
		if (fs.existsSync(textPath)) {
			fs.appendFileSync(textPath, "\n" + param, { encoding: "utf8" });
		} else {
			fs.writeFileSync(textPath, param, { encoding: "utf8" });
		}
	};
	myFunction("heöo");
} catch (err) {
	console.error(err);
}

import fsPromise from "node:fs/promises";
import fs from "node:fs";

try {
	const filePath = new URL("./blog1.txt", import.meta.url);
	const filePath2 = new URL("./blog2.txt", import.meta.url);

	const contents = await fsPromise.readFile(filePath, { encoding: "utf8" });

	//1
	const newContent = "Ich bin ein Webdeveloper";
	await fsPromise.writeFile(filePath, newContent, { encoding: "utf8" });

	//2
	const favText = "woopwoop";
	await fsPromise.writeFile(filePath2, favText, { encoding: "utf8" });

	//3&4
	const dirPath = new URL("./assets", import.meta.url);
	fs.existsSync(dirPath)
		? await fsPromise.rmdir(dirPath)
		: await fsPromise.mkdir(dirPath);

	// 5&6
	const txtPath = new URL("./delete.txt", import.meta.url);
	fs.existsSync(txtPath)
		? await fsPromise.unlink(txtPath)
		: await fsPromise.writeFile(txtPath, "", { encoding: "utf8" });

	//7
	const oldtxtPath = new URL("./Hello.txt", import.meta.url);
	const newtxtPath = new URL("./Klaus.txt", import.meta.url);
	await fsPromise.writeFile(oldtxtPath, "hehehehe", { encoding: "utf8" });
	await fsPromise.rename(oldtxtPath, newtxtPath);
} catch (err) {
	console.error("err:", err);
}

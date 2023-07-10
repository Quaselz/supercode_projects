import { log } from "node:console";
import fs from "node:fs";
import fsPromise from "node:fs/promises";
const folder = new URL("./data", import.meta.url);

export const saveData = async (data) => {
	await setupData();

	const dataFile = new URL("./data/post.json", import.meta.url);

	const newData = await getComments(data);
	await fsPromise.writeFile(dataFile, JSON.stringify(newData, null, 4));
};

let weSetup = false;
const setupData = async (data) => {
	if (weSetup) return;
	const folderExists = await exists(folder);

	if (!folderExists) {
		await fsPromise.mkdir(folder);
	}

	weSetup = true;
};

const exists = async (folder) => {
	let exists;

	try {
		await fsPromise.access(folder, fs.constants.W_OK);
		exists = true;
	} catch (err) {
		exists = false;
	}
	return exists;
};

const getComments = async (data) => {
	const dataMap = await Promise.all(
		data.map(async (dataEle, i) => {
			const url = `https://jsonplaceholder.typicode.com/posts/${dataEle.id}/comments`;
			await fetch(url)
				.then((res) => res.json())
				.then((dataComments) => {
					dataEle["comments"] = [];
					for (const ele of dataComments) {
						dataEle["comments"].push(ele);
					}
				});
			return dataEle;
		})
	);
	return dataMap;
};

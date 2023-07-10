import fsPromises from "node:fs/promises";
import { saveData } from "./saveData.js";
const fetchURL = "https://jsonplaceholder.typicode.com/posts";

fetch(fetchURL)
	.then((res) => res.json())
	.then((data) => saveData(data));

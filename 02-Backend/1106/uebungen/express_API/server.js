import express from "express";
import fsPromise from "node:fs/promises";

const app = express();
const port = 9898;

let isSetup = false;
let posts, id;

const dataFolder = new URL("./data", import.meta.url);
const dataFile = new URL("./data/posts.json", import.meta.url);
app.listen(port, async () => {
	await setup();
	console.log("tschuuu tschuuu");
});

const setup = async () => {
	if (isSetup) return;

	const hasFolder = await exists(dataFolder);
	const hasFile = await exists(dataFile);
	if (!hasFolder) {
		await fsPromise.mkdir(dataFolder);
	}
	if (!hasFile) {
		const url = "https://jsonplaceholder.typicode.com/posts";
		await fetch(url)
			.then((response) => response.json())
			.then((data) => (posts = [...data]));
		await fsPromise.writeFile(dataFile, JSON.stringify(posts, null, 4));
	} else {
		const rawData = await fsPromise.readFile(dataFile);
		posts = JSON.parse(rawData);
	}
	id = posts.length;
	isSetup = true;
};

const getId = (ele) => (ele.id = id & id++);

const exists = async (path) => {
	let exists;
	try {
		await fsPromise.access(path, fs.constants.W_OK);
		exists = true;
	} catch (err) {
		exists = false;
	}

	return exists;
};

app.use(express.json());
app.use(async (req, res, next) => {
	//await setup();

	next();
});

app.get("/status", (req, res) => {
	res.json(res.statusCode, ": OK");
});

app.get("/posts", (req, res) => {
	res.json(posts);
});

app.get("/posts/:id", (req, res) => {
	const id = Number(req.params.id);
	const selectedPosts = posts.find((post) => post.id === id);
	res.json(selectedPosts);
});

app.post("/posts", async (req, res, next) => {
	const post = req.body;
	getId(post);
	post.userid = 1;
	console.log(post);
	const checkArray = ["userid", "id", "title", "body"];
	const checks = checkArray.map((check, i) => {
		return post.hasOwnProperty(check);
	});
	if (checks.includes(false)) {
		next("Your Input doesnt have userid, id, title or body");
	} else {
		posts.push(post);
		await fsPromise.writeFile(dataFile, JSON.stringify(posts, null, 4));
	}
	res.json(posts);
});

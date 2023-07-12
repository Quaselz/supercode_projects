import express from "express";
import fs from "node:fs";
import fsPromise from "node:fs/promises";
import bodyParser from "body-parser";

const app = express();
const port = 9898;

const contacts = [];
let id = 0;
let myUrlId,
	isSetup = false;
const getId = (ele) => (ele.id = id & id++);
const dataFolder = new URL("./data", import.meta.url);
const dataFile = new URL("./data/contacts.json", import.meta.url);
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
		await fsPromise.writeFile(dataFile, JSON.stringify(contacts, null, 4));
	} else {
		const rawData = await fsPromise.readFile(dataFile);
		contacts = JSON.parse(rawData);
	}
	id = contacts.length;
	isSetup = true;
};

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
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	const indexUrl = new URL("index.html", import.meta.url);
	res.sendFile(indexUrl.pathname);
});

app.get("/contacts", (req, res) => {
	res.json(contacts);
});

app.get("/contacts/:id", (req, res) => {
	const id = req.params.id;
	const selectedContact = contacts.find(
		(contact) => contact.id.toString() === id
	);
	res.json(selectedContact);
});

app.post("/contacts", async (req, res) => {
	const contact = {
		name: req.body.name,
		color: req.body.color,
		tele: req.body.tele,
	};
	//const contact = { name: "klaus", color: "blue", tele: "tolongtodisplay" };
	getId(contact);
	contacts.push(contact);
	await fsPromise.writeFile(dataFile, JSON.stringify(contacts, null, 4));
	res.json(contacts);
});

app.put("/contacts/:id", async (req, res) => {
	const id = Number(req.params.id);
	const { name, farbe, tele } = req.body;
	const index = contacts.findIndex((contact) => {
		return contact.id === id;
	});
	if (index !== -1) {
		contacts[index].name = name ? name : contacts[index.name];
		contacts[index].farbe = farbe ? farbe : contacts[index.name];
		contacts[index].tele = tele ? tele : contacts[index.name];
	}
	await fsPromise.writeFile(dataFile, JSON.stringify(contacts, null, 4));
	res.json(contacts);
});

app.delete("/contacts/:id", async (req, res) => {
	const id = Number(req.params.id);
	contacts.map((item, key, arr) =>
		item.id === id ? arr.splice(key, 1) : null
	);
	await fsPromise.writeFile(dataFile, JSON.stringify(contacts, null, 4));
	res.json(contacts);
});

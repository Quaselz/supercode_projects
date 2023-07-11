import express from "express";
import fs from "node:fs";
import bodyParser from "body-parser";

const app = express();
const port = 9898;

const contacts = [];
let id = 0;
let myUrlId;
const getId = (ele) => (ele.id = id & id++);

//app.use(express.json());
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

app.post("/contacts", (req, res) => {
	const contact = {
		name: req.body.name,
		color: req.body.tele,
		tele: req.body.tele,
	};
	//const contact = { name: "klaus", color: "blue", tele: "tolongtodisplay" };
	getId(contact);
	contacts.push(contact);
	res.json(contacts);
});

app.put("/contacts/:id", (req, res) => {
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

	res.json(contacts);
});

app.delete("/contacts/:id", (req, res) => {
	const id = Number(req.params.id);
	contacts.map((item, key, arr) =>
		item.id === id ? arr.splice(key, 1) : null
	);
	res.json(contacts);
});

app.listen(port, () => {
	console.log("tschuuu tschuuu");
});

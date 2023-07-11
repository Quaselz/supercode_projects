import express from "express";

const app = express();
const port = 9898;

const posts = [];

app.listen(port, () => {
	console.log("tschuuu tschuuu");
});

app.get("/status", (req, res) => {
	res.json(res.statusCode, ": OK");
});

app.get("posts", (req, res) => {
	res.json(posts);
});

app.use((req, res, next) => {});

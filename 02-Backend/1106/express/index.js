import express, { request, response } from "express";

const app = express();

app.use((request, response, next) => {
	console.log(request.method, request.url);
	next();
});

app.get("/", (request, response) => {
	response.send("Hello World");
});

app.get("/cars", (request, response) => {
	response.send("Hello cars");
});

app.post("/cars", (request, response) => {
	response.send("Danke für das neue Auto");
});

app.use((request, response, next) => {
	response.send("keiner will dich haben");
});

app.listen(9898, () => console.log("tschuuu tschuuuu"));

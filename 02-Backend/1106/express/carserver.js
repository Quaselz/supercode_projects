import express, { request } from "express";

const app = express();
const port = 9898;

/*
    wir wollen einen Autohandel simulieren
    wir brauchen folgende Routen 
    a wir wollen alle autos
    b wir erzeugen ein neues auto
    c wir wollen ein bestimmtes auto

*/

const cars = [];
let id = 0;
const getId = (car) => (car.id = id & id++);

const getIdbyLength = (car) => (car.id = cars.length);

//middleware zum auslesen des bodys, wenn diese daten im json format beinhaltet
app.use(express.json());

app.get("/cars", (request, response) => {
	response.json(cars);
});

app.post("/cars", (request, response) => {
	const car = { modell: "bmw", color: "blue", price: "tomuch" };
	getId(car);
	cars.push(car);
	response.json(cars);
});

app.delete("/cars", (request, response) => {
	const { something, id } = request.body;
	cars.map((item, key, arr) => (item.id === id ? arr.splice(key, 1) : null));
	response.json(cars);
});

app.listen(port, () => {
	id = 0;
	console.log("tschuu tschuu");
});

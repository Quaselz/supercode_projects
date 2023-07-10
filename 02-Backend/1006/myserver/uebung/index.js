import http from "http";
import fs from "fs";

const sendFile = (path, response) => {
	fs.readFile(path, (err, data) => {
		if (err) {
			response.writeHead(500);
			response.end();
			return;
		}
		response.write(data.toString());
		response.end();
	});
};

const server = http.createServer((request, response) => {
	switch (request.url) {
		case "/":
			sendFile("./index.html", response);
			break;
		case "/contact":
			sendFile("./contact.html", response);
			break;
		case "/about":
			sendFile("./about.html", response);
			break;
		case "/faq":
			sendFile("./faq.html", response);
			break;
		default:
			sendFile("." + request.url, response);
			break;
	}
});

server.listen(9898, () => console.log("Ich laufe.."));

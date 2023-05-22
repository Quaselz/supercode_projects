const outputDivDate = document.querySelector("#date");

setInterval(() => {
	const date = new Date();
	outputDivDate.innerHTML = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  Uhrzeit: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);

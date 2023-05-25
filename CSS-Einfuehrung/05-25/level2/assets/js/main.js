const output = document.querySelector("section");

fetch("https://picsum.photos/v2/list")
	.then((res) => res.json())
	.then((data) => {
		//console.log(data);
		data.forEach((person) => {
			console.log(person);
			const figure = document.createElement("figure");
			const img = document.createElement("img");
			img.setAttribute("src", `${person["download_url"]}`);
			img.setAttribute("alt", `"${person["author"]}-Picture"`);
			const figcaption = document.createElement("figcaption");
			figcaption.textContent = person["author"];

			figure.appendChild(img);
			figure.appendChild(figcaption);
			output.appendChild(figure);
		});
	})
	.catch((error) => console.log(error));

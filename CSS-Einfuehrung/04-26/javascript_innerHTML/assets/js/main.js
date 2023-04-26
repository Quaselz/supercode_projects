const info = document.getElementById("info");

info.innerHTML += "<h1> Hello World </h1>";
info.innerHTML += "<p> How are you? </p>";

const gallery = document.querySelector("#gallery");

for (let index = 0; index < 3; index++) {
	gallery.innerHTML +=
		'<figure> <img src="https://unsplash.it/300" alt=""><figcaption>Fig ' +
		index +
		"</figcaption></figure>";
}

gallery.style.display = "flex";

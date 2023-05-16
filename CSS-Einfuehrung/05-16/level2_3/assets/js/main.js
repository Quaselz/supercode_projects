const button = document.querySelector("#navChange");
const firstUlEle = document.querySelector("#navHome");

const liElements = document.getElementsByTagName("li");

button.addEventListener("click", (e) => {
	const colors = ["#f6c89f", "#ffe7d1", "#4b8e8d", "#396362", "#333"];

	for (let i = 0; i < liElements.length; i++) {
		const element = liElements[i].firstChild;
		element.style.backgroundColor = colors[i];
		element.style.color = "#333";
	}
});

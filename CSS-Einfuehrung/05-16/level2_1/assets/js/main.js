const button = document.querySelector("#navChange");
const firstUlEle = document.querySelector("#navHome");

button.addEventListener("click", (e) => {
	let textHome = firstUlEle.textContent;
	textHome = textHome.split("").reverse().join("");

	firstUlEle.style.backgroundColor = "pink";
	firstUlEle.style.padding = "20px";
	firstUlEle.style.margin = "10px";
	firstUlEle.style.fontFamily = "Arial";
	firstUlEle.style.innerHTML = textHome;
});

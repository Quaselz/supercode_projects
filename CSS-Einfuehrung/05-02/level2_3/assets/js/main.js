const textElement = document.querySelector('article');
const searchElement = document.getElementById("search-input");
const text = textElement.innerHTML;

searchElement.addEventListener("input", (event) => {
    event.preventDefault();
    let search = searchElement.value;

    if (search !== null && search !== "" && search !== undefined) {
        let change = text.replaceAll(search, '<span class="textElement">' + search + "</span>");
        textElement.innerHTML = change;
    } else {
        textElement.innerHTML = text;
    }
});

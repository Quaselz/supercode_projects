const textElement = document.querySelector('article');
const searchElement = document.getElementById("search-input");
//set baseText global
const text = textElement.innerHTML;

searchElement.addEventListener("input", (event) => {
    event.preventDefault();
    //get value of input field
    let search = searchElement.value;

    //check if input isnt empty
    if (search !== null && search !== "" && search !== undefined) {

        //replace text parts with spans input value
        let change = text.replaceAll(search, '<span class="textElement">' + search + "</span>");

        //set new text
        textElement.innerHTML = change;
    } else {
        // set normal baseText
        textElement.innerHTML = text;
    }
});

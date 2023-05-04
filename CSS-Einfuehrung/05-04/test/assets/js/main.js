const myForm = document.querySelector("form");
const radioBrutto = document.querySelector("#brutto");
const radioNetto = document.querySelector("#netto");
const outputOptionBruttoDisplay = document.querySelector("#outputOptionBrutto");
const outputTaxRateResultDisplay = document.querySelector("#outputBeitrag");
const outputResultDisplay = document.querySelector("#outputEndpreis");

//Text ändern hier optionBrutto für Brutto
radioBrutto.addEventListener("change", (event) => {
	event.preventDefault();
	outputOptionBruttoDisplay.innerHTML =
		"Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro<span>*</span>";
});

//Text ändern hier optionBrutto für Netto
radioNetto.addEventListener("change", (event) => {
	event.preventDefault();
	outputOptionBruttoDisplay.innerHTML =
		"Nettobetrag (Preis ohne Mehrwertsteuer) in Euro<span>*</span>";
});

// Berechnungen hier
myForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const whoChecked = document.querySelector(
		'input[name="optionBrutto"]:checked'
	);
	const taxRateCheck = document.querySelector(
		'input[name="steuersatz"]:checked'
	);
	const amount = Number(document.querySelector("#number").value);
	let taxRate = Number(taxRateCheck.value);
	let result, taxRateResult;

	if (whoChecked.value === "netto" && typeof taxRate == "number") {
		taxRateResult = (amount * taxRate) / 100;
		result = amount + taxRateResult;
	} else if (whoChecked.value === "brutto" && typeof taxRate == "number") {
		result = (amount * 100) / (100 + taxRate);
		taxRateResult = amount - result;
	} else {
		alert("Hier ist ein unerwarteter Fehler aufgetreten");
		return;
	}

	outputTaxRateResultDisplay.innerHTML = taxRateResult.toFixed(2) + "€";
	outputResultDisplay.innerHTML = result.toFixed(2) + "€";
});

//validate textfield for numbers
const inputTextNumber = document.querySelector("#number");

inputTextNumber.addEventListener("input", () => {
	inputTextNumber.value = inputTextNumber.value.replace(/[^0-9 \,]/g, "");
});

const quiz = {
	quiz: {
		title: "JavaScript Essentials Quiz",
		questions: [
			{
				question: "What is the correct way to define a JavaScript variable?",
				options: {
					A: "variable x = 1;",
					B: "let x = 1;",
					C: "var x == 1;",
					D: "x := 1",
				},
				answer: "B",
			},
			{
				question:
					"Which of the following is a correct way to define a JavaScript function?",
				options: {
					A: "function myFunction() {}",
					B: "myFunction() = function;",
					C: "define myFunction() {}",
					D: "function:myFunction() {}",
				},
				answer: "A",
			},
			{
				question: "How do you add a comment in JavaScript?",
				options: {
					A: "# This is a comment",
					B: "// This is a comment",
					C: "<!-- This is a comment -->",
					D: "/* This is a comment */",
				},
				answer: "B",
			},
			{
				question: "Which built-in method returns the length of the string?",
				options: {
					A: "length()",
					B: "size()",
					C: "index()",
					D: "count()",
				},
				answer: "A",
			},
			{
				question:
					"Which of the following is not a reserved word in JavaScript?",
				options: {
					A: "interface",
					B: "throws",
					C: "program",
					D: "short",
				},
				answer: "C",
			},
			{
				question:
					"What method can be used to decode a JSON string in JavaScript?",
				options: {
					A: "JSON.parse()",
					B: "JSON.delete()",
					C: "JSON.decode()",
					D: "JSON.remove()",
				},
				answer: "A",
			},
			{
				question:
					"Which operator is used to assign a value to a JavaScript variable?",
				options: {
					A: "-",
					B: "*",
					C: "=",
					D: "+",
				},
				answer: "C",
			},
			{
				question:
					"What is the correct syntax for referring to an external script called 'script.js'?",
				options: {
					A: "<script src='script.js'>",
					B: "<script href='script.js'>",
					C: "<script link='script.js'>",
					D: "<script url='script.js'>",
				},
				answer: "A",
			},
			{
				question: "How do you declare a JavaScript array?",
				options: {
					A: "var array = {}",
					B: "var array = []",
					C: "var array = <>",
					D: "var array = ()",
				},
				answer: "B",
			},
			{
				question:
					"Which JavaScript method can be used to check if an array includes a particular value?",
				options: {
					A: "contains()",
					B: "has()",
					C: "include()",
					D: "includes()",
				},
				answer: "D",
			},
		],
	},
};

const main = document.createElement("main");
const mainSection = document.createElement("section");
const mainForm = document.createElement("form");
mainForm.setAttribute("submit", "return false");
const headline = document.createElement("h1");
const submitBtn = document.createElement("input");
submitBtn.setAttribute("id", "submit");
submitBtn.setAttribute("value", "Abschicken");
submitBtn.setAttribute("type", "submit");
headline.textContent = quiz["quiz"]["title"];
mainForm.appendChild(headline);
mainSection.appendChild(mainForm);
main.appendChild(mainSection);
document.body.appendChild(main);

questions = quiz["quiz"]["questions"];
let questionCounter = 0;

for (const key in questions) {
	const divQuestion = document.createElement("div");
	const question = questions[key];

	for (const ke in question) {
		if (ke === "question") {
			const questionHeadline = document.createElement("h2");
			questionHeadline.textContent = question[ke];
			divQuestion.appendChild(questionHeadline);
		} else if (ke === "options") {
			const options = question[ke];
			for (const k in options) {
				const option = options[k];
				const radioBtn = document.createElement("input");
				const labelRadioBtn = document.createElement("label");
				radioBtn.setAttribute("type", "radio");
				radioBtn.setAttribute("id", k);
				radioBtn.setAttribute("name", ke + questionCounter);
				//radioBtn.required = true;
				labelRadioBtn.textContent = option;

				divQuestion.appendChild(labelRadioBtn);
				divQuestion.appendChild(radioBtn);
			}
		}
	}
	questionCounter++;
	mainForm.appendChild(divQuestion);
}
mainForm.appendChild(submitBtn);

submitBtn.addEventListener("submit", (e) => {
	e.preventDefault();

	console.log("hellow world");
});

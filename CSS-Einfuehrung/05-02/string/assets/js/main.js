
const string = "Hier ist ein langer langer text";

let resultReplaceAll = string.replaceAll("langer", "kurzer");
//replaceAll()
//slice()
//substring()



// Hier ist ein langer langer text
let resultSlice = string.slice(5,6);
let resultSubString = string.substring("",6);




// our string
console.log("Unser String: " + string);
console.log("============================");

// our replaceAll("screach", "value") 
console.log("Replace: " + resultReplaceAll);
console.log("============================");

// our silce(start, end)
console.log("Slice: " + resultSlice);
console.log("============================");

// our substring(start, end)
console.log("String: " + resultSubString);
console.log("============================");




// slice works with array substring not
let arrayTest = ["1", "2", "3", "4"];
let resultSubStringArray = arrayTest.slice(0,1);
console.log("StringArray: " + resultSubStringArray);
//level1_1
console.log("Level1_1");
console.log("========");
let firstName = "Paul";
let secondName = "Geppert";
let rndName = "bob";

console.log("Firstname lenght: " + firstName);
console.log("Secondname lenght: " + secondName);
console.log("Randomname lenght: " + rndName);

//level1_2
console.log("Level1_2");
console.log("========");
const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log("h: " + txt.indexOf("h"));
console.log("Earth: " + txt.indexOf("Earth"));
console.log("Moon: " + txt.indexOf("Moon"));

//level1_3
console.log("Level1_3");
console.log("========");

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log(";: " + txt2.search(";"));
console.log("green: " + txt2.search("green"));
console.log("blue: " + txt2.search("blue"));

//level1_4
console.log("Level1_4");
console.log("========");

const a = 'Susi is going to codingschool';
let text = a.slice(0,4);
let text1 = a.slice(5,7);
let text2 = a.slice(5,14) + a.slice(-6);
let text3 = a.slice(-6);
let text4 = a.slice(0,5) + a.slice(5,8) + a.slice(-6);

document.write("<br>Level 1_4<br>");
document.write("=========<br>");
document.write(text+"<br>");
document.write(text1+"<br>");
document.write(text2+"<br>");
document.write(text3+"<br>");
document.write(text4+"<br>");

//level1_7
console.log("Level1_7");
console.log("========");

const sentence = "Sam is good at codingschool";
let sentence1 = sentence.replace("good", "bad").replace("codingschool", "school");
let sentence2 = sentence.replace("Sam", "Susi").replace("codingschool", "school");
let sentence3 = sentence.replace("codingschool", "tennis");

document.write("<br>Level 1_7<br>");
document.write("=========<br>");
document.write(sentence1+"<br>");
document.write(sentence2+"<br>");
document.write(sentence3+"<br>");

//level1_8
console.log("Level1_8");
console.log("========");

const anotherText = "sam is going to codingschool";
let anotherText1 = anotherText.toUpperCase();
let anotherText2 = anotherText.toLowerCase();
let anotherText3 = anotherText.slice(0, 4).toUpperCase() + anotherText.slice(4,16) + anotherText.slice(-6).toUpperCase();
let anotherText4 = anotherText.slice(0, 4) + anotherText.slice(4,16).toUpperCase() + anotherText.slice(-6);

const anotherText5Array = anotherText.split(" ");
for (var i = 0; i < anotherText5Array.length; i++) {
    console.log(anotherText5Array);
    anotherText5Array[i] = anotherText5Array[i].charAt(0).toUpperCase() + anotherText5Array[i].slice(1);
}
const anotherText5 = anotherText5Array.join(" ");


console.log(anotherText1);
console.log(anotherText2);
console.log(anotherText3);
console.log(anotherText4);
console.log(anotherText5);


//level1_9
console.log("Level1_9");
console.log("========");

const fake = "";
const levelTxt = "Sam is going to codingschool";
const levelTxt1 = "Susi";
const levelTxt2 = "and";


let result1 = fake.concat(levelTxt.slice(0,15)," ", levelTxt.slice(-6), " ", levelTxt2, " ", levelTxt.slice(13,16), "the movie theater.");
let result2 = fake.concat(levelTxt.slice(0,15), " movie theater");
let result3 = fake.concat(levelTxt1, " ", levelTxt2, " ", levelTxt.slice(0,4), "are ", levelTxt.slice(7,15),);
let result4 = levelTxt1.concat(" ", levelTxt2, " ", levelTxt.slice(0,15), " gym ", levelTxt2, " ", levelTxt.slice(13,16), "the movie theater.");
let result5 = levelTxt1.concat(" ", levelTxt.slice(7,15), " ", levelTxt.slice(-6), " ", levelTxt2, " ", levelTxt.slice(13,16), "the movie theater.");

document.write("<br>Level 1_9<br>");
document.write("=========<br>");
document.write(result1+"<br>");
document.write(result2+"<br>");
document.write(result3+"<br>");
document.write(result4+"<br>");
document.write(result5+"<br>");


//level1_11
console.log("Level1_11");
console.log("========");
let x = "Hello ";
let y = "World<br>";
let z = x + y;


//1
document.write("<br>Level 1_9<br>");
document.write("=========<br>");
document.write("z: " + z);

//2 
let n = x + " " + y;
document.write("<br>n: " + n);

//3 + 4
let m = x + "World";
document.write("<br>m: " + m);

//last

let meinString = "Ich bin Erster";
meinString += " Ich komme auf Platz zwei";

console.log(meinString);



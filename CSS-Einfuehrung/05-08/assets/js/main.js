//Level1_1
console.log("Level1_1");
console.log("========");
let person = ["One", "Zwo", "Three"],
	friends = ["1", "2", "3"],
	favoriteFood = ["foo", "bar", "foobar"];

console.log({ person }, { friends }, { favoriteFood });

//Level1_2
console.log("Level1_2");
console.log("========");
console.log(
	person[0],
	person[1],
	person[2],
	friends[0],
	friends[1],
	friends[2],
	favoriteFood[0],
	favoriteFood[1],
	favoriteFood[2]
);

//Level1_3
console.log("Level1_3");
console.log("========");

console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);

//Level1_4
console.log("Level1_4");
console.log("========");
// fügt array hinten hinzu

person.push("four");
person.push("five");
console.log(`Person: ${person.length}`);
console.log(`Person: ${person}`);

friends.push("4", "5");
console.log(`Friends: ${friends.length}`);
console.log(`Friends: ${friends}`);

favoriteFood.push("pi", "5pa");
console.log(`favoriteFood: ${favoriteFood.length}`);
console.log(`favoriteFood: ${favoriteFood}`);

//Level1_5
console.log("Level1_5");
console.log("========");
//pop entfernt ersten Wert

let soloPersonPop = person.pop();
console.log(`soloPersonPop: ${soloPersonPop}`);

let soloFriendPop = friends.pop();
console.log(`soloFriendPop: ${soloFriendPop}`);

let soloFavoriteFoodPop = favoriteFood.pop();
console.log(`soloFavoriteFoodPop: ${soloFavoriteFoodPop}`);

//Level1_6
console.log("Level1_6");
console.log("========");
//shift entfernt ersten Wert

let soloPersonShift = person.shift();
console.log(`soloPersonShift: ${soloPersonShift}`);

let soloFriendShift = friends.shift();
console.log(`soloFriendShift: ${soloFriendShift}`);
let soloFavoriteFoodShift = favoriteFood.shift();
console.log(`soloFavoriteFoodShift: ${soloFavoriteFoodShift}`);

//Level1_7
console.log("Level1_7");
console.log("========");
//unshift gegenteil von push fügt vorne hinzu

person.unshift("four");
person.unshift("five");
console.log(`Person: ${person.length}`);
console.log(`Person: ${person}`);

friends.unshift("4", "5");
console.log(`Friends: ${friends.length}`);
console.log(`Friends: ${friends}`);

favoriteFood.unshift("pi", "5pa");
console.log(`favoriteFood: ${favoriteFood.length}`);
console.log(`favoriteFood: ${favoriteFood}`);

//Level1_9
console.log("Level1_9");
console.log("========");

let holidayDestination = ["Japan", "Scotland", "Ireland", "China", "yes"];
let holidayDestinationResult = holidayDestination.slice(1, 3);
console.log(holidayDestinationResult);

//Level1_9
console.log("Level1_10");
console.log("========");

let text =
	"It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

let newText = text.split(" ");

console.log({ newText });

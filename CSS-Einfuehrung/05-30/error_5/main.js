console.log("JS works");

let batContact = {
	user: "Batman",
	email: "batman@batCave.batmail",
	logIn() {
		console.log(`${this.user} ist eingeloggt`);
	},
};

batContact.logIn();

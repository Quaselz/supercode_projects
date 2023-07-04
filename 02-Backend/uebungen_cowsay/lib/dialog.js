import cowsay from "cowsay";

export const hello = () => {
	console.log(
		cowsay.say({ text: "Should i get up today?" }),
		cowsay.think({ text: "but i hate monday?" }),
		cowsay.say({ text: "you hate the world too" }),
		cowsay.say({ text: "yeah you're right." })
	);
};

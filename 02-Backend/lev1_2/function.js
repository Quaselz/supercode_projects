export const firstEle = (array) => {
	const newArray = [...array];
	return newArray[0];
};

export const notLastEle = (array) => {
	const newArray = [...array];
	newArray.pop();
	return newArray;
};

export const lastEle = (array) => {
	const newArray = [...array];
	return newArray.pop();
};

export const allButLastEle = (array) => {
	const newArray = [...array];

	newArray.slice();
	return newArray;
};

export const removeValue = (array, value) => {
	const newArray = [...array];
	const index = array.indexOf(value);
	if (index > -1) {
		newArray.splice(index, 1);
	}
	return newArray;
};

export const uniqueArray = (array) => {
	const newArray = [...array];
	return newArray.filter(
		(value, index, array) => array.indexOf(value) === index
	);
};

export const sumNumArray = (array) => {
	const newArray = [...array];
	return newArray.reduce((a, b) => a + b, 0);
};

export const randomNumber = (a, b) => {
	return Math.floor(Math.random() * (b - a) + a);
};

export const upperFirstChar = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const stringToUppercase = (string) => {
	return string.toUpperCase();
};

export const hasIndex = (string, value) => {
	return string.includes(value);
};

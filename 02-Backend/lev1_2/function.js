export const firstEle = (array) => {
	return array[0];
};

export const notLastEle = (array) => {
	array.pop();
	return array;
};

export const lastEle = (array) => {
	return array.pop();
};

export const allButLastEle = (array) => {
	array.slice();
	return array;
};

export const removeValue = (array, value) => {
	const index = array.indexOf(value);
	if (index > -1) {
		array.splice(index, 1);
	}
	return array;
};

export const uniqueArray = (array) => {
	return array.filter((value, index, array) => array.indexOf(value) === index);
};

export const sumNumArray = (array) => {
	return array.reduce((a, b) => a + b, 0);
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

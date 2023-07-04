export const filterMore = (array) => {
	return array.filter((ele) => ele.population >= 100000);
};

export const filterLess = (array) => {
	return array.filter((ele) => ele.population <= 100000);
};

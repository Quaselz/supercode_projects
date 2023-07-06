const arrayMap = (...args) => {
	const [arr, mapFn] = [...args];
	for (let index = 0; index < arr.length; index++) {
		arr[index] = mapFn(arr[index]);
	}
	return arr;
};

const result = arrayMap([1, 2, 3], (num) => num * 2);

result
	? result[0] === 2 && result[1] === 4 && result[2] === 6
		? console.log("yeet")
		: console.log("neeee")
	: console.log("wrong");

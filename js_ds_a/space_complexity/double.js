function double(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i] * 2);
	}
	return newArr;
}

console.log(double([3, 4, 5]));

function sum(arr) {
	let total = 0;
	// one number at a time
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}

console.log(sum([1, 2, 3]));

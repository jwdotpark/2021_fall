function logAtMost5(n) {
	for (var i = 1; i <= Math.min(5, n); i++) {
		console.log(i);
	}
}

logAtMost5(10);

// big-o: O(1)
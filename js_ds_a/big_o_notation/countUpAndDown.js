function countUpAndDown(n) {
	console.log("going up");
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
	console.log("At the top! \nGoing down");
	for (let j = n - 1; j >= 0; j--) {
		console.log(j);
	}
	console.log("Back to the ground. bye");
}

countUpAndDown(100);

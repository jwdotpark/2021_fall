/*
Suppose we want to write a function that
calculatesd the sum of all numbers from 1
up to (and including) a given number n.
*/

// 1
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

// set performance timer
let t1 = process.uptime();
addUpTo(1000000000);
let t2 = process.uptime();
console.log("Time Elapsed: " + (t2 - t1) + " seconds.");

//2
function addUpTo2(n) {
	return (n * (n + 1)) / 2;
}

let t3 = process.uptime();
addUpTo2(1000000000);
let t4 = process.uptime();
console.log("Time Elapsed: " + (t4 - t3) + " seconds.");

/* 
The problem with time
- different machines will record different times
- same machine will record different times
- for fast algorithms, speed measurements may not be precise enough
*/
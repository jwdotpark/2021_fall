str =
	"Can you check the result? Can you derive the result differently? Can you understand it at a glance? Can you use the result or method for some other problem? Can you improve the performance of your solution? Can you think of other ways to refactor? How have other people solved this problem?";

function charCount1(str) {
	let obj = {};
	for (let i = 0; i < str.length; i++) {
		let char = str[i].toLowerCase();
		if (/[a-z0-9]/.test(char)) {
			if (obj[char] > 0) {
				obj[char]++;
			} else {
				obj[char] = 1;
			}
		}
	}
	return obj;
}

function charCount2(str) {
	let obj = {};
	for (var char of str) {
		char = char.toLowerCase();
		if (/[a-z0-9]/.test(char)) {
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}

// charCodeAt() returns the ASCII value of the character at the given index.

console.log(charCount2(str));

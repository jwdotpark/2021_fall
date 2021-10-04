// write a function which takes in a string and
// returns counts of each character in the string

function charCount() {
	const str = prompt("Enter a string and I will count each character. ");
	for (i = 0; i < str.length; i++) {
		console.log(str[i]);
	}
}

charCount();

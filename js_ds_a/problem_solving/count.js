// write a function which takes in a string and
// returns counts of each character in the string

/*
charChount("aaaa") // {a:4}
charCount("hello") // {h:1, e:1, l:2, o:1}
*/

function charCount(str) {
	// make object to return at end
	let result = {};
	// loop over string, for each char
	for (let i = 0; i < str.length; i++) {
		var char = str[i].toLowerCase();
		// if char is a key/num/letter in Object, add one to count
		if (result[char] > 0) {
			result[char]++;
			// if char is not a key/num/letter in object, add and set value to 1
		} else {
			result[char] = 1;
		}
	}
	// return object at end
	return result;
}

const testStr = "hi there";
const testing = charCount(testStr);
console.log(testing);

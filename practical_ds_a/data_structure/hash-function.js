// function that take the string and length of the array
// hash("pink", 100)

let total = 0;
total += "hello".charCodeAt(0) - 96
// h = 8
//

//  hash function with string

function hash(key, arrayLength) {
  let total = 0;
  for (let char of key) {
    // a = 1, b = 2..
    let value = char.charCodeAt(0) - 96;
    // remainder of total of position num divided by length
    total = (total + value) % arrayLength;
  }
  return total;
}

function hash(key, arrayLength) {
  let total = 0;
  // prime number for reducing collision
  let WEIRD_PRIME = 31;
  // loop based smaller value of length of key or 100 
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLength;
  }
}

const hello = hash("hello", 5);
const world = hash("world", 5);
const okja = hash("okja", 5);
console.log(hello);
console.log(world);
console.log(okja);
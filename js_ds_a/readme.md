# Big O Notation

- motivation of the need for Big O Notation
- definition of Big O Notation
  - a way of generalizing code and talking about it and comparing its performance to other pieces of code
- simplify Big O Notation
- define "time complexity" and "space complexity"
- evaluate the time complexity and space complexity of different algorithms using Big O Notation
- define what a "logarithm" is

- Big O Notation is a way to formalize fuzzy counting
- It allows us to talk formally a bout how to runtime of an algorithm grows as the inputs grow
- don't care about the deatils, only the trends

## Big O Definition

- We say that an algorithm is `O(f(n))` if the number of simple operations the computer has to do is eventually less than a constant times f(n), as `n` increases

```BigONotation
f(n) could be linear (f(n) = n)
f(n) could be quadratic (f(n) = n^2)
f(n) could be constant (f(n) = 1)
f(n) could be something entirely different!
```

### Example

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

> Always 3 operations

- O(1)

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

> number of operations is (eventually) bounded by a multiple of n(say, 10n)

- O(n)

### Example2

```js
function countUpAndDown(n) {
  console.log("going up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top! \n Going down");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back to the ground. bye");
}
```
- O(n), linear graph
### Example 3
```js
function printAllPairs(n) {
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
}
printAllPairs(10);
```
- O(n) operation inside of an O(n) operation
- O(n^2), exponential curve graph

## Simplifying Big O Expressions
- When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressionss
- These rule of thumb are consequence of the definition of big O notation

### constants don't matter
``` 
O(2n)       // wrong
O(n)        // right

O(500)      // wrong
O(1)        // right

O(13n^2)    // wrong
O(n^2)      // right
```
- proportional input doesn't affect the graph

***
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11070006#overview
***
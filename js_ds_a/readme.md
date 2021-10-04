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

---

https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11070006#overview

---

### Smaller terms don't matter

```
O(n+10)        // wrong
O(n)           // right
O(100n + 50)   // wrong
O(n)           // right
O(n^2 + 5n + 8)// wrong
O(n^2)     // right
```

## Big O Shorthands

- arithmetic operations are constant
- variable assignment is constant
- accessing elements in an array (by index) or object(by key) is constant
- in a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

## A couple more examples

![big o graph](https://i.imgur.com/pRab1sg.png)

### exercise

1. O(n + 10) -> O(n)
2. O(100\*n) -> O(n)
3. O(25) -> O(1)
4. O(n^2 + n^3) -> O(n^3)
5. O(n + n + n + n) -> O(n)

# Space complexity

- **공간 복잡도(Space Complexity)란, 프로그램을 실행시킨 후 완료하는 데 필요로 하는 자원 공간의 양을 말합니다.**
- space complexity is a way to formalize the amount of space taken up by an algorithm
- auxilary space complexity
  - space required by the algorithm, not including space taken up by the inputs
  - unless otherwise noted, when talk about space complexity, technically it's about auxilary space complexity
- Rules of thumb
  - most primitives(bool, numbers, undefined, null) are constant space
  - string require O(n) space(where n is the string length)
  - reference types are generally O(n), where n is the length for arrays or the number of keys for objects

```javascript
function sum(arr) {
  let total = 0;
  // one number at a time
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// big O: O(n)
// O(1) space
```

```javascript
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
// O(n) space
```

# Logarithms

- logarithm is the inverse of exponentiation
- $log{_2}{(8)} = 3$
- $log{_2}{(value)} = exponent$
- $2^{exponent} = value$
- we can omit the base `2` ($log$ === $log{_2}$)

- the logarithm of a number roughly measures the number of times you can divide that number by 2 **before you get a value that's less than or equal to one**
- certain searching algorithms have logarithmic time complexity
- efficient sorting algorithms involve log
- recursion sometimes involves logarithmic space complexity

## Recap

- to analyze the performace of an algorithm, we use Big O Notation
- Big O Notation is a way to formalize the time complexity of an algorithm
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends(linear? quadratic? constant?)
- the time or space complexity(as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm

# Objects

- adding elements to the beginning of an array is costly

```js
let instructor = {
  firstName: "John",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4, 5],
};
```

## when to use objects

- when you don't need **order**
- when you need fast access/insertion and removal

### Big O of objects

```
Insertion: O(1)
Removal: O(1)
Searching: O(n)
Access: O(1)
```

### Big O of object methods

```js
Object.keys; // O(n)
Object.values; // O(n)
Object.entries; // O(n)
hasOwnProperty; // O(1)
```

# Arrays

- **ordered list**

```js
let names = ["Michael", "Melissa", "Andrea"];
let valaues = [true, {}, [], 2, "awesome"];
```

- when you need fast access/insertion and removal(sort of?)

```
Insertion: depends
Removal: depends
Searching: O(n)
Access: O(1)
```

- adding/removing index at the beginning is expensive
  - `push/pop` is always fater than `unshift/shift`

## Array methods

```
- push: O(1)
- pop: O(1)
  - both are basic accessing

- shift: O(n)
- unshift: O(n)
  - basic accessing with shifting all the indexes afterwards

- concat: O(n)
  - merge two or more array into one
- slice: O(n)
  - returns a shallow copy of a portion of an array into a new array that is selected from begin to end, original array will not be modified
- splice: O(n)
  - changes the content of an array by removing existing elements and/or adding new elements

- sort: O(n*log N)
  - slowest among all the array methods

- forEach/map/filter/reduce: O(n)
  - whatever methods doing, it involves on each element
```

# Problem solving approach

- a process or set of steps to accomplish a certain task
- the steps are usually small and easy to understand

## Understand the problem

- can I restate the problem in my own words?
- checking out what's in and out
  - what are the inputs that go into the problem?
  - what are the outputs that should come from the solution to the problem?
- can the outputs be determined from the inputs?
- = do I have enough information to solve the problem?


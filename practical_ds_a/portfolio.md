> Table of Contents
- [Data structure & Algorithm](#data-structure--algorithm)
  - [Algorithm theory & Application](#algorithm-theory--application)
    - [What's the goal of the algorithm?](#whats-the-goal-of-the-algorithm)
    - [Time and Space Complexity Theory](#time-and-space-complexity-theory)
      - [Time Complexity](#time-complexity)
      - [Space Complexity](#space-complexity)
    - [Big O Notation](#big-o-notation)
      - [Definition](#definition)
        - [Example 1](#example-1)
        - [Example 2](#example-2)
        - [Example 3](#example-3)
      - [Constants don't matter](#constants-dont-matter)
      - [Smaller terms don't matter](#smaller-terms-dont-matter)
      - [Best, average and worst case](#best-average-and-worst-case)
      - [Shorthands for Big O Notation](#shorthands-for-big-o-notation)
      - [Logarithms](#logarithms)
      - [Visualizing complexities](#visualizing-complexities)
    - [Problem solving approach](#problem-solving-approach)
      - [Understand the problem](#understand-the-problem)
      - [Refactoring questions](#refactoring-questions)
    - [Recursion](#recursion)
    - [Searching Algorithms](#searching-algorithms)
      - [Linear Search](#linear-search)
      - [Binary Search](#binary-search)
      - [Naive String Search](#naive-string-search)
    - [Bubble Sort](#bubble-sort)
    - [Selection Sort](#selection-sort)
    - [Insertion Sort](#insertion-sort)
    - [Comparing Bubble, Selection and Insertion Sort](#comparing-bubble-selection-and-insertion-sort)
    - [Merge Sort](#merge-sort)
    - [Quick Sort](#quick-sort)
    - [Radix Sort](#radix-sort)
  - [Data structures](#data-structures)
    - [Arrays](#arrays)
      - [Traversing](#traversing)
      - [Searching](#searching)
      - [Insertion](#insertion)
      - [Deletion](#deletion)
      - [Size](#size)
    - [Stacks](#stacks)
      - [push](#push)
      - [pop](#pop)
      - [isEmpty](#isempty)
      - [top](#top)
    - [Queues](#queues)
    - [Linked Lists](#linked-lists)
    - [Hash Tables](#hash-tables)
    - [Graphs](#graphs)
    - [Trees](#trees)
    - [Tries](#tries)


# Data structure & Algorithm

## Algorithm theory & Application
### What's the goal of the algorithm?

The scale of the program grows over time and the amount of data that needs to be processed increases. If the amount of input data is small, ignoring it may not matter much. But if the amount of it is large, the difference in efficiency between algorithms will inevitably increase.

Below code is famous example of necessity of good algorithm, the [fast inverse square root implementation from Quake 3 Arena(1999)](https://www.wikiwand.com/en/Fast_inverse_square_root#/Aliasing_to_an_integer_as_an_approximate_logarithm), which was used in lighting effect part in the game. The purpose of this function was used in digital signal processing for computing the reflection of lighting and shading, expecting to have a return of normalized vector.

```cpp
float Q_rsqrt( float number )
{
 long i;
 float x2, y;
 const float threehalfs = 1.5F;

 x2 = number * 0.5F;
 y  = number;
 i  = * ( long * ) &y;                       // evil floating point bit level hacking
 i  = 0x5f3759df - ( i >> 1 );               // what the fuck? 
 y  = * ( float * ) &i;
 y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration
// y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed

 return y;
}
```

I still don't fully understand the implementation detail of this function but the the gist of it is, the programmer tried to simplify the existing algorithm to be more efficient with pointer reference, shifiting bit, deduction and multiplication. The function didn't necessarily need to calculate the precise float values, rather a approximation of a certain duducted constant which in this case was `0x5f3759df`. The result was a very fast function that allows a bit of margin of error but much faster performance.

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Invsqrt0-10000.svg/440px-Invsqrt0-10000.svg.png" alt="Fast InvSqrt() approximation"/>
  <center>The difference between fast InvSqrt() and the original libstdc direct inversison of square root</center>
</p>



### Time and Space Complexity Theory


#### Time Complexity

- Time Complexity refers to the time it takes to solve a problem and a function of the input.
- It quantifies the amount of time by taking an algorithm that works as a function of the length of the represented input.
- It is usually expressed using Big O Notation, which is a method of excluding coefficient and low-order terms from a mathematical expression.
- It doesn't indicate the absolute execution time of an algorithm, rather indicates how many operations are performed to execute an algorithm. 

#### Space Complexity

- Space Complexity refers to the amount of resource space required to complete a program after running it. 
- Total space requirement can be fixed and variable space.
- Fixed space refers to the requirement for space regardless of the number or size of input and output.
- Variable space is the space required for structured variables that its size depends on the particular instance of the calculation, i.e. the dynamic space.

To my understanding, time and space tend to be inversly proportional, the algorithm's quality is usually basaed on time complexity. But it'll depend on the problem.

### Big O Notation

#### Definition

- Big O Notation is a way of generalizing code and comparing its performance to other pieces of code regardless of machine/runtime it is running on.
- It is way to formalize the time and space complexity of an algorithm. 
- It cares about trend, not the detail(constant) inside.
- Big O Notation can be expressed as `O(n)`.

Let's say make a function that takes an array of integers and returns the sum of all the integers in the array.

##### Example 1

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```
The number of operation is eventually bounded by a multiple of n. this function takes an argument of interger `n` and returns the sum of all the integers from 1 to `n`. In this case, Big O of this function is `O(n)`. 

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

This function has always 3 operations no matter what argument is, so Big O of this function is `O(1)`. 

##### Example 2
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
`countUpAndDown()` prints out the message n times, then prints out the message at exact n, and it goes down till it reaches the baseline 0. This functions has n + n + 1 operations, so Big O of this function is `O(n)`.

##### Example 3
```js
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```
`printAllPairs()` is consist of O(n) operation inside of an O(n) operation, so Big O is O(n^2), a exponential growth of calculation.

#### Constants don't matter

- In general, proportional input of constant doesn't affect the time complexity much. 
```
O(2n)       // wrong
O(n)        // right

O(500)      // wrong
O(1)        // right

O(13n^2)    // wrong
O(n^2)      // right
```

#### Smaller terms don't matter

```
O(n+10)        // wrong
O(n)           // right

O(100n + 50)   // wrong
O(n)           // right

O(n^2 + 5n + 8)// wrong
O(n^2)         // right
```

#### Best, average and worst case

Asymptotic notations can be refered to best, average and worst case. In reality, Big O notation is often used because many times algorithms can be O(1) if a specific data or edge case is considered. 
- Big O Notation
  - Worst, it gives a lower bound  for the time complexity.
- Big Theta Notation
  - Average of big O and big Omega, it gives a middle bound for the time complexity.
- Big Omega Notation
  - Best case, any algorithm for same problem can't be faster than Big Omega Notation.


#### Shorthands for Big O Notation
- Arithmetic operations(addition, subtraction, multiplication, division) are usually constant
- Variable assignment is usually constant.
- Accessing elements in an array (by index) or object(by key) is constant.
- In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop.

```
1. O(n + 10) -> O(n)
2. O(100\*n) -> O(n)
3. O(25) -> O(1)
4. O(n^2 + n^3) -> O(n^3)
5. O(n + n + n + n) -> O(n)
```


#### Logarithms
- Logarithm is the inverse of exponentiation
- $log{_2}{(8)} = 3$
- $log{_2}{(value)} = exponent$
- $2^{exponent} = value$
- We can omit the base `2` ($log$ === $log{_2}$)

- The logarithm of a number roughly measures the number of times you can divide that number by 2 **before you get a value that's less than or equal to one**
- Certain searching algorithms have logarithmic time complexity
- Efficient sorting algorithms involve log
- Recursion sometimes involves logarithmic space complexity
#### Visualizing complexities 
![big o graph](https://i.imgur.com/pRab1sg.png)

### Problem solving approach

- A process or set of steps to accomplish a certain task
- The steps are usually small and easy to understand

#### Understand the problem

- Can I restate the problem in my own words?
- Checking out what's in and out
  - what are the inputs that go into the problem?
  - what are the outputs that should come from the solution to the problem?
- Can the outputs be determined from the inputs?
- Do I have enough information to solve the problem?

#### Refactoring questions

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?


### Recursion

### Searching Algorithms

#### Linear Search
#### Binary Search

#### Naive String Search

### Bubble Sort

### Selection Sort

### Insertion Sort

### Comparing Bubble, Selection and Insertion Sort

### Merge Sort

### Quick Sort

### Radix Sort




## Data structures
### Arrays
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
#### Traversing
#### Searching
#### Insertion
#### Deletion
#### Size

### Stacks
#### push
#### pop
#### isEmpty
#### top

### Queues

### Linked Lists
### Hash Tables
### Graphs
### Trees
### Tries

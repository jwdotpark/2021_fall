# Algorithms and Data Structures

## Why do we need algorithms?

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

This example was a good inspiration for me to understand why it is important to have good algorithms. Precision is important but sometimes efficiency is more important and good algorithms are the key to achieve that.


## Time and Space Complexity

### Time Complexity

- Time Complexity refers to the time it takes to solve a problem and a function of the input.
- It quantifies the amount of time by taking an algorithm that works as a function of the length of the represented input.
- It is usually expressed using Big O Notation, which is a method of excluding coefficient and low-order terms from a mathematical expression.
- It doesn't indicate the absolute execution time of an algorithm, rather indicates how many operations are performed to execute an algorithm. 

### Space Complexity

- Space Complexity refers to the amount of resource space required to complete a program after running it. 
- Total space requirement can be fixed and variable space.
- Fixed space refers to the requirement for space regardless of the number or size of input and output.
- Variable space is the space required for structured variables that its size depends on the particular instance of the calculation, i.e. the dynamic space.

To my understanding, time and space tend to be inversly proportional, the algorithm's quality is usually basaed on time complexity. But it'll depend on the problem.

## Big O Notation

## Motivation for Big O Notation

- Big O Notation is a way of generalizing code and comparing its performance to other pieces of code regardless of machine/runtime it is running on.
- It is way to formalize the time and space complexity of an algorithm. 
- It cares about trend, not the detail(constant) inside.
- An algorithm is `O(f(n))` if the number of simple operations the computer has to do is eventually less than a constant times f(n), as `n` increases



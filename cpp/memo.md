https://www.notion.so/Follow-C-course-from-university-of-bonn-a8f39c64ecb14c819932e6c16eca6a81

# lecture 0: https://www.youtube.com/watch?v=F_vIB3yjxaM

## main

- is a function that returns an error code
- error 0 === okay
- error can be in range [1, 255]

## include directive

- #include <file> - system include files
- #include "file" - local include files

## compilers

- gcc
- clang

---

# lecture 1: https://www.youtube.com/watch?v=k290gC3eP44

## declaring variables

type name [ = value];

- usually_snake_case
- every var has a type
- var cannot change their type
- always initialize var if you can
- use descriptive and long name if possible for preventing confusion

```cpp
int sad_uninitialized_var; // bad
bool intializing_is_good = true; // good
```

## built-in types

- bool: true or false
- char: single character
- int: integer
- short: short num
- long: long num
- float: single precision float
- double: double precision float
- auto: automatic type based on var declaration
- [cpp type reference](https://en.cppreference.com/w/cpp/language/types)

```cpp
bool is_happy = (!is_hungry && is_warm) || is_rich
```

## Operators

- ||, &&, !, /, %, a++, a--
- don't use de/increment operators within another expression

```
a = (a++) + ++b
//bad
```

## Strings

- `#include string` to use std::string
- concatenate strings with `+`
- check if `str` is empty with `str.empty()`
- works out of the box with I/O streams

## Use std::array for fixed sized collections of items

- `#include <array>` to use `std::array`
- store a collection of items of _same type_
- create from data:
  `array<float, 3> arr = {1.0f, 2.0f, 3.0f}`
- access items with `arr[i]`
- indexing starts with 0
- number of stored items: `arr.size()`
- remove all elements: `arr.clear()`
- useful access aliases:
  - first item: `arr.front() == arr[0]`
  - last item: `arr.back() == arr[size() - 1]`

## Use std::vector when number of items is unknown before-wise

- `#include <vector>` to use `std::vector`
- vector is implemented as a _dynamic table_
- access stored item just like in `std::array`
- add a new item in one of two ways
  - `vec.emplace_back(value)` [preferedm c++11]
  - vec.push_back(value) [histroically better known]
- **use it! it's fast and flexible!**
- consider it to be a default container to store colletions of items of any same type

## Optimizing vector resizing

- many `push_back/emplace_back` operations force vector to change its size many times
- `reserve(n)` ensures that the vector has enough memory to store `n` items
- this parameter `n` can even be approximate
- this is a very important optimization
- use reserver() when change is big
- if it's a couple of change, it isn't needed much

```cpp
std::vector<stdLLstring> vec;
const int kIterNum = 100;
// always call reserver when you know the size
vec.reserve(kIterNum);
for (int i = 0; i < kIterNum; i++) {
  vec.emplace_back("hello);
}
```

### example vector

- vec_example.cpp

### how to compile and execute

- `g++ -o <name> <source>`

## Variables live in scopes

- there is a single global scope
- local scopes start with { and ends with }
- all variables _belong to the scope_ where they have been declared
- all variables die in the end of _their_ scope
- this is the core of c++ memory system

```cpp
int main() { // start of main scope
  float some_float = 13.13f; // create var
  { // new inner scope
    auto another_float = some_float; // copy variable
  } //another_float dies
  return 0;
} // some_float dies
```

## Const

- use `const` to declare a variable that cannot be changed
- the compiler will guard it from any changes
- keyword `const` can be used with `any` type
- `GOOGLE-STYLE` name constants in _CamelCase_ starting with a small letter k:
  - `const float kImportantFloat = 20.0f;`
  - `const int kSomeInt = 20;`
  - `const std::string kHello = "Hello";`
- `const` is part of type: variable `kSomeInt` has type `const` int
- TIP: declare everything `const` unless it MUST be changed

## Reference to variables (doesn't exist in JS?)

- we can create a reference to a any variable
- use & to state that a variable is a reference
  - `float& ref = original_variable;`
  - `std::string& hello_ref = hello;`
- if ref variable is changed, original variable is also changed; it's identical but it's not copy of original
- Reference is part of type: variable `ref` has type `float&`
- whatever happens to a reference happens to the variable and vice versa
- yields performance gain as references - **avoid copying data**

### rvalue:

- right-hand side of an assignment

## Const with references

- references are fast but **reduce control**
- to avoid unwanted changes, use const with references
  - `const float& ref = original_variable;`
  - `const std::string& hello_ref = hello;`
- fastest way to ref var without remains read-only

> ### return 0 vs return 1

- https://www.geeksforgeeks.org/return-0-vs-return-1-in-c/
- return 0: A return 0 means that the program will execute successfully and did what it was intended to do
- return 1: A return 1 means that there is some error while executing the program and it is not performing what it was intended to do

# Control flow

## if statement

## switch statement

## while loop

```cpp
while (statement) {
  // loop while statement == true
}
```

- usually used when the exact number of iterations is unknown beforehand
- easy to form an endless loop by mistake

## for loop

```cpp
for (initial_condition; end_condition; increment) {
  // loop while end_condition == true
}
```

```cpp
for (int i = 0; i < count; i++) {
  // this happens till count times
}
```

- in c++ `for` loops are very fast
- less flexible than `while` but less error-prone
- use `for` when number of iterations is fixed and `while` otherwise

## Range for loop

- iterating over a standard containers like `array` or `vector` has simpler syntax
- avoid mistakes with indices
- show intent with the syntax
- has been added in c++ 11

```cpp
for (const auto& value: container) {
  // this happens for each value in the container
}
```

## Exit loops and iterations

- we have control over loop iterations
- use `break` to exit a loop
- use `continue` to skip to next iteration

```cpp
while (true) {
  int i = // magically get new int
  if (i % 2 == 0) {
    cerr << i << endl;
  } else {
    break;
  }
}
```

---

# lecture2: Compilation, Debugging, Functions, Header/Source, Libraries, CMake https://www.youtube.com/watch?v=7e71KWARrNQ

## Compilation flag

- there is a lot of flags that can be passed while compiling the code
- we have seen some already: `-std=c++11, -o`, etc

### other useful options

- enable all warnings, treat them as errors: `-Wall -Wextra -Werror`
- optimization options:
  - `-O0`: no optimization
  - `-O1`: default optimization
  - `-O2`: more optimization
  - `-Ofast`: maximum optimization
- keep debugging symbols: `-g`

## Debugging tools

- the best option is to use `gdb`
- insanely polular and powerful
- no build-in gui
- use `gdbgui` for a user-friendly gui
- install gdbgui from pip:
  `sudo pip3 install --upgrade gdbgui`

## Functions

```cpp
ReturnType FuncName(ParamType1 in_1, PramType2 in_2) {
  // some code
  return return_value;
}
```

- code can be organized into functions
- functions create a scope
- single return value from a function
- any number of input variables of any types
- should do only one thing and do it right
- name must show what the function does
- `GOOGLE-STYLE` name functions in `CamelCase`
- `GOOGLE-STYLE` write small functions

### good function example

```cpp
#include <vector>
using namespace std;

vector<int> CreateVectorFOfFullSquare(int size) {
  vector<int> result(size); // vector of size 'size'
  for (int i = 0; i < size; i++) {
    result[i] = i * i;
    return result;
  }

  int main() {
    auto squares = CreateVectorFOfFullSquare(10);
    return 0;
  }
}
```

- is small enough to see all the code at once
- name clearly states what the function does
- function does a _single_ thing

### bad function example

```cpp
#include <vector>
using namespace std;
vector<int> Func(int a, bool b) {
  if (b) {
    return vector<int>(10, a);
  }
  vector<int> vec(a);
  for (int i = 0; i < a; ++i) { vec[i] = a * i; }
  if (vec.size() > a * 2) { vec[a] /= 2.0f; }
  return vec;
}
```

- name of the function means nothing
- names of variables mean nothing
- function does not have a single purpose

## Declaration and definition

- function declaration can be separated from the implementation details
- function declaration sets up an interface

```cpp
void FuncName(int param)
```

- function definition holds the implementataion of the function that can even be hidden from the user

```cpp
void Funcname(int param) {
  // implementation details
  cout << "this function is called FuncName! ";
  cout << "did you expect anything useful from it? ";
}
```

## Passing big objects

- by default in c++, objects are copied when passed into functions
- if objects are big, it might be slow
- **Pass by reference** to avoid copy

```cpp
void DoSmth(std::string huge_string); // slow
void DoSmth(std::string& huge_string); // faster
```

### Is the string still same?

```cpp
string hello = "some_importanat_long+string";
DoSmth(hello);
```

## Pass by reference intuition

![pass by reference intuition](https://i.imgur.com/Yyl0ZMh.png)

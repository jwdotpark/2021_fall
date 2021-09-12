# lecture 0

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

# lecture 1: https://www.youtube.com/watch?v=k290gC3eP44

## declaring variables

type name [ = value];

- usually_snake_case
- every var has a type
- var cannot change their type
- always initialize var if you can
- use descriptive and long name if possible for preventing confusion

i.e.

```
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

```
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
- __use it! it's fast and flexible!__
- consider it to be a default container to store colletions of items of any same type

## Optimizing vector resizing
- many `push_back/emplace_back` operations force vector to change its size many times
- `reserve(n)` ensures that the vector has enough memory to store `n` items
- this parameter `n` can even be approximate
- this is a very important optimization

```
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


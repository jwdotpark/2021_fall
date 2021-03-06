<https://www.notion.so/Follow-C-course-from-university-of-bonn-a8f39c64ecb14c819932e6c16eca6a81>

# lecture 0: <https://www.youtube.com/watch?v=F_vIB3yjxaM>

## main

- is a function that returns an error code
- error 0 === okay
- error can be in range [1, 255]

## include directive

- #include `<file>` - system include files
- #include "file" - local include files

## compilers

- gcc
- clang

---

# lecture 1: <https://www.youtube.com/watch?v=k290gC3eP44>

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

### rvalue

- right-hand side of an assignment

## Const with references

- references are fast but **reduce control**
- to avoid unwanted changes, use const with references
  - `const float& ref = original_variable;`
  - `const std::string& hello_ref = hello;`
- fastest way to ref var without remains read-only

> ### return 0 vs return 1

- <https://www.geeksforgeeks.org/return-0-vs-return-1-in-c/>
- <https://en.cppreference.com/w/cpp/language/return>
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

# lecture2: Compilation, Debugging, Functions, Header/Source, Libraries, CMake <https://www.youtube.com/watch?v=7e71KWARrNQ>

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

<https://www.youtube.com/watch?v=7e71KWARrNQ>

### solution: use const reference

- pass `const` reference to the function
- great speed as we pass a reference
  passed object statys intact

```cpp
void DoSmth(const std::string& huge_string); // fast
```

- use snake_case for all function arguments
- non-const refs are used in older code written before c++ 11
- they can be useful but destroy readability
- `GOOGLE-STYLE` avoid using non-const refs

## Function overloading

- compiler infers a function from arguments
- cannot overload based on return type
- return type plays no role at all
- `GOOGLE-STYLE` avoid non-obvious overloads

```cpp
include <iostream>
#include <iostream>
#include <string>
using namespace std;

string Func(int num) { return "int"; }

string Func(const string& str)
{
 return "string";
}

int main() {
 cout << Func(1) << endl;
 cout << Func("hello") << endl;
 return 0;
}
```

## Default arguments

- functions can accept default arguments
- only set in declaration not in definition
- PRO: simplifyf function calls
- CONS:
  - evaluated upon every call
  - values are hidden in declaration
  - can lead to unexpected behavior when overused
- `GOOGLE-STYLE` only use them when readability gets much better

## Don't reinvent the wheel

- when using `std::vector, std::array` etc, try to avoid writing your own functions
- use #include <algorithm>
- there is aa lot of functions in std which are at least as fast as hand-written ones

## Header / Source separation

- move all declarations to header files(\*.h)
- implementation goes to _.cpp or_.cc

```cpp
// some_file.h
Type Somefunc(... args ...);

// some_file.cpp
#include "some_file.h"
Type SomeFunc(... args ...) { /* some code */ }

// program.cpp
#include "some_file.h"
int main() {
 SomeFunc( /* some code */ );
 return 0;
}
```

## How to build this?

```cpp
folder/
  --- tools.h
  --- tools.cpp
  --- main.cpp
```

- short: we separate the code into modules

- declaration: tools.h

```cpp
#pragma once // ensure file is included only once
void MakeItSunny();
void MakeitRain();
```

- definition: tools.cpp

```cpp
#include <iostream>
#include "tools.h"

void MakeItRain() {
 // important weather manipulation code
 std::cout << "here now it rains";
}

void MakeItSunny() {
 std::cerr << "not available..";
}
```

- calling: main.cpp

```cpp
#include "tools.h"
int main() {
 MakeItRain();
 MakeItSunny();
 return 0;
}
```

## Just build it as before?

```cpp
c++ -std=c++11 main.cpp -o main
```

## Use modules and libraries

- compile modules:

```cpp
c++ -std=c++11 -c tools.cpp -o tools.o
```

- organize modules into libraries:

```cpp
ar rcs libtools.a tools.o <other_modules>
```

- link libraries when building code:

```cpp
c++ -std=c++11 main.cpp -L . -ltools -o main
```

- run the code

```cpp
./main
```

## Libraries

- library: multiple object files that are logically connected
- types of library:
  - static: faster, take a lot of space, become part of the end binary, named: `lib*.a`
  - dynamic: slower, take less space, not part of the end binary, named: `lib*.so`
- create a static library with

```cpp
ar rcs libname.a module.o module.o ...
```

- static libraries are just archives just like `zip/tar/...`

## What is linking?

- the library is a binary object that containts the compiled implemenation of some methods
- linking maps a function declaration to its compiled implementation
- to use a library, we need a header and the compliled library object

## Use CMake to simplify the build

- one of the most popular build tools
- does not build the code, generates files to feed into a build system
- cross-platform
- very powerful, still build receipt is readable
- the library creation and linking can be rewritten as follows:

```cpp
add_library(tools tools.cpp)
add_executable(main main.cpp)
target_link_libraries(main tools)
```

## Typical project structure

```
1  |-- project_name/
2  |  |-- CMakeLists.txt
3  |  |-- build/ # All generated build files
4  |  |-- bin/
5  |  |   |-- tools_demo
6  |  |-- lib/
7  |  |   |-- libtools.a
8  |  |-- src/
9  |  |   |-- CMakeLists.txt
10 |  |   |-- project_name
11 |  |   |-- CMakeLists.txt
12 |  |   |-- tools.h
13 |  |   |-- tools.cpp
14 |  |   |-- tools_demo.cpp
15 |  |-- tests/ # Tests for your code
16 |  |   |-- test_tools.cpp
17 |  |   |-- CMakeLists.txt
18 |  |-- readme.md # How to use your code
```

## Build process

- `CMakeLists.txt` defines the whole build
- CMake reads `CMakeLists.txt` **sequentially**
- Build Process:

```bash
 1. cd <projejct_folder>
 2. mkdir build
 3. cd build
 4. cmake ..
 5. make -j2 # pass your number of cores here
```

## First working CMakeLists.txt

```CMake
1  project(first_project) # Mandatory.
2  cmake_minimum_required(VERSION 3.1) # Mandatory.
3  set(CMAKE_CXX_STANDARD 11) # Use c++11.
4  # tell cmake to output binaries here:
5  set(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)
6  set(LIBRARY_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/lib)
7  # tell cmake where to look for *.h files
8  include_directories(${PROJECT_SOURCE_DIR}/src)
9  # create library "libtools"
10 add_library(tools src/tools.cpp)
11 # add executable main
12 add_executable(main src/tools_main.cpp)
13 # tell the linker to bind these objects together
14 target_link_libraries(main tools)
```

## Useful commands in CMake

- just a scripting language
- has features of a scripiting language, i.e. functions, control structures, variables, etc
- all variables are string
- set variables with `set(VAR VALUE)`
- get value of a variable with `${VAR}`
- show a message `message(STATUS "hello world")`
- also possible `WARNING, FATAL_ERROR`

## Use CMake in your builds

- build process is standard and simple
- no need to remember sequence of commands
- all generated builds files are in one place
- CMake detects changes to the files
- Do this after changing files:

```bash
1. cd project/build
2. make -j2 # pass your number of cores here
```

## Set compilation options in CMake

```CMake
1 set (CMAKE_CXX_STANDARD 14)
2 # Set build type if not set.
3 if(NOT CMAKE_BUILD_TYPE)
4 set(CMAKE_BUILD_TYPE Release)
5 endif()
6 # Set additional flags.
7 set(CMAKE_CXX_FLAGS "-Wall -Wextra")
8 set(CMAKE_CXX_FLAGS_DEBUG "-g -O0")
9 set(CMAKE_CXX_FLAGS_RELEASE "-O3")
```

- -Wall -Wextra: show all warnings
- -g: keep debug information in binary
- 0`<num>`: optimization level in {0, 1, 2, 3}
  - 0: no optimization
  - 3: full optimization

## Remove build folder for performing a clean build

- sometimes you want a clean build
- it is very easy to do with CMake

```CMake
1. cd projejct/build
2. make clean #remove generated binaries
3. rm -r * #make sure you are in build folder
```

## Use pre-compiled library

- sometimes you get a compiled library
- you can use it in your build
- for example, given `libtools.so` it can be used in the project as follows:

```CMake
1 find_library(TOOLS
2 NAMES tools
3 PATHS ${LIBRARY_OUTPUT_PATH})
4 # Use it for linking:
5 target_link_libraries(<some_binary > ${TOOLS})
```

- <https://docs.microsoft.com/en-us/cpp/cpp/declarations-and-definitions-cpp?view=msvc-160>

- cmake tutorial: <https://code.visualstudio.com/docs/cpp/cmake-linux>

# Lecture 3, Google Test, Namespaces, Classes

## Google Test

### Use GTest to test your functions

- catch bugs earlier
- testing is crucial to catch bugs early
- tested functions are easier to trust
- for every function write at least **two tests**
  - one for normal cases
  - one for edge cases
- **Make writing tests a habit**

### How do tests look?

- A single dummy google test looks like:

```cpp
Test(TestModule, FunctionName) {
 EXPECT_EQ(4, FunctionName());
}
```

- ssuccessful output looks like:

```zsh
Running main() from gtest_main.cc
[==========] Running 1 test from 1 test case.
[----------] Global test environment set-up.
[----------] 1 test from TesModule
[ RUN      ] TesModule.FunctionName
[ OK       ] TesModule.FunctionName (0 ms)
[----------] 1 test from TesModule (0 ms total)
[----------] Global test environment tear-down
[==========] 1 test from 1 test case ran.
[ PASSED ] 1 test.
```

### Add GTests with Cmake

- install GTest source files(build them later):
  `sudo apt install libgtst-dev`
- add folder `tests` to your CMake project:

```cpp
# Must be in the top-most CMakelists.txt file.
enable_testing()
# outsource tests to another folder
addLsubdirectory(tests)
```

### configure test

```cpp
# Add gtest sources folder. Provides gtest, gtest_main.
add_subdirectory(/usr/src/gtest
${PROJECT_BINARY_DIR}/gtest)
include(CTest) # Include testing cmake package.
# Set binary name for convenience.
set(TEST_BINARY ${PROJECT_NAME}_test)
# This is an executable that runs the tests.
add_executable(${TEST_BINARY} test_tools.cpp)
# Link the executable to needed libraries.
target_link_libraries(${TEST_BINARY}
tools # Library we are testing
gtest gtest_main # GTest libraries
)
# Add gtest to be able to run ctest
add_test(
NAME ${TEST_BINARY}
COMMAND ${EXECUTABLE_OUTPUT_PATH}/${TEST_BINARY})
```

- <https://www.youtube.com/watch?v=q8xO2eJijy4&list=PLgnQpQtFTOGR50iIOtO36nK6aNPtVq98C&index=4>
- <https://www.ipb.uni-bonn.de/wp-content/uploads/2018/05/lecture_3.pdf>

### Run your tests

- build your code just like before
- add one **additional step** after building

```bash
1. cd <project_folder>
2. mkdir build
3. cd build
4. cmake ..
5. make
6. __ctest -VV
```

## Namespaces

```cpp
1 #include <iostream>
2
3 namespace fun {
4   int GetMeaningOfLife() { return 42; }
5 } // namespace fun
6
7 namespace boring {
8   int GetMeaningOfLife() { return 0; }
9 } // namespace boring
10
11 int main() {
12  std::cout << "The answer to everything is not "
13  << boring::GetMeaningOfLife() << " but "
14  << fun::GetMeaningOfLife() << std::endl;
15  return 0;
16 }
```

### Only use what you need

### Namespaces wrap up

- use namespaces to avoid name conflicts

```cpp
namespace some_name {
 <your_code>
} // namespace some_name
```

- use using correctly
- GOOD
  - `using my_namespace::myFunc;`
  - my_namespace::myFunc();
- NEVER use `using name space name` in \*.h files
- PREFER using explicit `using` even in \*.cpp files

### Nameless namespaces

- If you find yourself relying on some constants in aa file and these constants should not be seen in any other file, put them into a nameless namespace on top of this file.
- To avoid hard coded value

```cpp
namespace {
 const  int kLocalImportantInt = 13;
 const float kLocalImportantFloat = 13.0f;
} // namespace
```

## Classes

### Create new types with classes and structs

- classes are used to encapsulate data along with methods to process them
- evry `class` or `struct` defines a new type
- **Terminology**:
  - `type` or `class` to talk about the defined type
  - a variable of such type is an `instance of class` or an `object`
- classes allow c++ to be used as an Object Oriented Programming language
- `string, vector`, etc arer all classes

```cpp
// Example class definition

class Image
{
public:
  Image(const std::string& file_name);
  void Draw();
private:
  int rows_ = 0;
  int cols_ = 0;
};

//implementation omitted here

int main() {
  Image image("some_image.pgm");
  image.Draw();
  return 0;
}
```

### Classes syntax

- definition starts with the keyword `class`
- classes have three access modifiers: `private, protected` and `public`
- by default, everything is private
- classes can contain data and functions
- access members with a "."
- have two types of special functions:
  - constructors: called upon creation of an instance of the class
  - descructors: called upon destruction of an instance of the class
- `GOOGLE-STYLE` use `CamelCase` for class name

### What about structs?

- definition starts with the keyword `struct`:

```cpp
struct ExampleStruct {
 Type value;
 Type valaue;
 Type value;
 // no funcitons!
}
```

- `struct` is a class where everything is `public`
- `GOOGLE-STYLE` use `struct` as a simple **data container**, if it needs a function it should be a `class` instead

### Always initialize structs using braced initialization

- <https://youtu.be/q8xO2eJijy4?t=5282>
- order in struct matters!

### Data stored in a class

- classes can store data of any type
- `GOOGLE-STYLE` all data must be `private`
- `GOOGLE-STYLE` use `snake_case` with a trailing "\_" for `private` data members
- data should be set in the constructor
- clean up data in the destructor if needed

### Constructors and Destructors

- classes always have **at least one constructor** and **exactly one destructor**
- constructors crash course:
  - are functions with no return type
  - named exactly as the class
  - there can be many constructors
  - if there is no explicit constructor, an implicit default constructor will be generated
- destructors for class `SomeClass()`
  - is a function named `~SomeClass()`
  - last function called in the lifetime of an object
  - generated automatically if not explicitly defined

### Many ways to create instances of a classes

```cpp
class SomeClass {
 public:
  SomeClass();                 // default constructor
  SomeClass(int a);            // custom constructor
  SomeClass(int a, float b);   // custom cunstructor
  ~SomeClass();                // destructor
};

// how to use them?
int main() {
 SomeClass var_1;               // default constructor
 SomeClass var_2(10);      // custom constructor

 // type is checked when using {} braces. use them!

 SomeClass var_3{10};        // custom constructor
 SomeClass var_4 = {10};        // same as var_3
 SomeClass var_5{10, 10.0};     // custom constructor
 SomeClass var_6 = {10, 10.0};  // same as var_5
 return 0;
}
```

### Setting and getting data

- Use **initializer list** to set data
- name getter functions as the private member they return
- make getters `const`
- _Avoid setters_, set data in the constructor

```cpp
class Student {
 public:
   Student(int id, string  name): id_{id}, naame_{name} {}
  // initializer
  int id() const { return id_; } // return getter
  const string& name() const { return name_;}
                       // this function will never change the object
 private:
  int id_;
  string name_;
};
```

### Const correctness

- `const` after function states that this function _does not change the object_
- mark all functions that _should not_ change the state of the object as `const`
- ensures that we can pass objects by a `const` reference and still call their functions
- substantially reduces number of errors
- <https://isocpp.org/wiki/faq/const-correctness>

### Typical const error

```cpp
#include <string>
#include <iostream>

using namespace std;

class Student {
 public:
  Student(string, name): name_{name} {}
  const string& name() /* const */ { return name_; }
 private:
  string name_;
};

void Print(const Student& student) {
 cout << "Student: " << student.name() << endl;
}
```

- `error: discards qualifiers` meaning that the function doesn't return const

### Declaration and definition

- data members belong to declaration
- class methods can be defined elsewhere
- class name becomes a part of function name

```cpp
// declare class
class SomeClass {
 public:
  SomeClass();
  int var() const;
 private:
  void DoSmth();
  int var_ = 0;
};

// define all methods
SomeClass::SomeClass() {}
int SomeClass::var() const { return var_; }
void SomeClass::DoSmth() {}
```

### Always initialize members for classes

- c++11 allows to initialize variables in-place
- do not initialize them in the constructor
- noneed for an explicit default constructor

```cpp
class Student {
 public:
  // no need for default constructor
  // getters and functions omitted
 private:
  int earned_points_ = 0;
  float happiness_ = 1.0f;
};
```

- **NOTE**: leave the members of `structs` uninitialized as defining them forbids using brace initialization

### Classes as modules

- prefer encapsulating information that belongs together into a class
- separate declaration and definition of the class into header rand source files
- typically, class `SomeClass` is declared in `some_class.h` and is defined in `some_class.cpp`

# Lecture 4: Move Sematics, Classes: <https://www.youtube.com/watch?v=Et2I5zKqAk0&t=32s>

## Move Semantics

## Intuition lvalues, rvalues

- every expression is an `lvalue` or an `rvalue`
- `lvalues` can be written on the left of assignment operator(=)
- `rvalues` are all the other expressions
- explicit `rvalue` defined using `&&`
- use `std::move(...)` to explicitly convert an `lvalue` to `rvalue`

```cpp
int a;           // "a" is an lvalue
int& a_ref = a;  // "a" is an lvalue
                 // "a_ref" is a reference to an lvalue
a = 2 + 2;       // "a" is an lvalue
                 // "2+2" is an rvalue
int b = a + 2;   // "b" is an rvalue
                 // "a + 2" is an rvalue
int&& c = std::move(a); // "c" is an rvalue
```

- generally after move, the object is no longer a value
- always consider a ownership of an object

## Never access values after move

- the value after `move` is undefined

```cpp
#include <iostream>
#include <string>
#include <vector>
using namespace std;
int main() {
 string hello = "hello";
 vector<string> owner;
 owner.emplace_back(hello);         // copy
 owner.emplace.back(move(hello))    // move
 cout << hello endl;                // undefined
 return 0;
```

## How to think about std::move

- think about **ownership**
- entity **owns** a variable if it deletes
  - a function scope owns a variable defined in it
  - an object of a class owns its data members
- **moving a variable transfers ownership**
- when designing, your program think **"who should own this thing?"**
- **runtime:** better than copying, worse than passing by reference

# Class

## Custom operator for class

- operators are functions with a signature:
  - `<RETURN_TYPE> operator<NAME>(<PARAMS>)`
- `<NAME>` represents the target operation, e.g. `>, <, =, ==, <<` etc
- have all attributes of functions
- always contain word `operator` in name
- all available operators: <https://en.cppreference.com/w/cpp/language/operators>

## Copy constructor

- **called automatically** when the object is **copied**
- for a class `MyClass` has the signature: `MyClass(const MyClass& other)`

```cpp
MyClass a;      // calling default constructor
MyClass b(a);   // calling copy constructor
MyClass c = a;  // calling copy constructor
```

## Copy assignment operator

- copy assignment operator is `called automatically` when the object is **assigned a new value** from _L_ value
- for a class `MyClass` has the signature: `MyClass& operator=(const MyClass& other)`
- **Returns a reference** to the changed object
- use `*this` from within a function of a class to get a reference to the current object

```cpp
MyClass a;      // calling default constructor
MyClass b(a);   // calling copy constructor
MyClass c = a;  // calling copy constructor
a = b;          // calling copy assignment operator
```

### this
- reference this.cpp file for more information

## Move constructor

- Called __automatically__ when the object is moved
- For a class `MyClass` has the signature: `MyClass(MyClass&& other)`

```cpp
MyClass a;                 // default constructor
MyClass b(std::move(a));   // move constructor
MyClass c = std::move(a);  // move constructor
```

## Move assignment operator
- called __automatically__ when the object is __assigned a new value__ from an Rvalue
- for class `MyClass` has the signature: `MyClass& operator=(MyClass&& other)`
- __returns a reference__ to the changed object
```cpp
MyClass a;                  // default constructor
MyClass b(std::move(a));    // move constructor 
MyClass c = std::move(a);   // move constructor
b = std::move(c);           // move assignment operator
```
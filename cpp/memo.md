## Headers

- `<iostream>` header defines the standard stream objects that input and output data
- `#inlcude` is used for adding a standard or user-defined header files to the program

## Namespaces

- A `namespace` is a declarative region that provides a scope to the identifiers(names of elements) inside it

```cpp
using namespace std;
```

- `std` namespace includes feature of the c++ standard library

## Variables

- creating a variable reserves a memory location, or a space in memory for storing values.The compiler requires that you provide a data type for each variable you declare
- c++ requires that you specify the type and the identifier for each variable defined
- an `identifier` is a name for a vriable, function, etc etc
- define all var with a name and type before using them
- In case where you have multiple variable of the same type, it's possible to define them in one declaration, separating them with commas

```cpp
int a, b;
// defines two variables of type int
```

- A variable can be assigned a value, and can be used to perform operations. e.g. we can create an additional varriable `sum`, and add tow variables together

```cpp
int a = 30;
int b = 15;
int sum = a + b;
// sum = 45
```

## Declaring variables

- you have the option to assign a value to the variable at the time you declare the variable or to declare it and assign a value later

```cpp
int a;
int b = 42;

a = 10;
b = 3;'
```

- variable can be used without referring to type after the initial declaration
- **`auto`** allows you to automatically deduct the type of the variable being declared. It infers the type from its value

## Basic arithmetic

- dividing by 0 will crash the program!

## Assignment/increment operator

- the increment operator has two forms, **\_prefix** and **postfix**

```cpp
++x; // prefix
x++; // postfix
```

- **prefix** increments the value, and then proceeds with the expression
- **postfix** evaluates the expression and then performs the incrementing
- prefix example

```cpp
int x = 5;
y = ++x;
// x = 6, y = 6
```

- postfix example

```cpp
int x = 5;
y + x++;
// x = 6, y = 5
```

---

while

---

## For loop

```cpp
for (init; condition; increment) {
  statement(s);
}
```

## Multi-dimensional arrays

- a multu-dimensional array holds one or more arrays

```cpp
type name[size1][size2]...[sizeN];
```

- create a two-dimensional 3x4 integer array

```cpp
int x[3][4]
```

## Pointers

- every variable is a memory location
- it has its address defined
- address can be accessed using the ampersand operator(&) which denotes an address in memory

```cpp
int score = 5;
cout << &score << endl;

// 0x7ffeefdabaa4
```

- pointer is a variable and it is needed to be declared before using it
- asterisk sign \* is used to declare a pointer

```cpp
int *ip       // pointer to integer
double *dp    // pointer to double
float *fp     // pointer to float
char *ch      // pointer to character
```

- The asterisk sign can be placed next to the data type, or the variable name, or in the middle. (??)

```cpp
  int score = 5;
  int *scorePtr;
  scorePtr = &score;
  cout << scorePtr << endl;
```
- the code above declares a pointer to an int `scorePtr`
- and assigns it to memory location of the `score` variable using & operator
- Now, scorePtr's value is the memory location of score.
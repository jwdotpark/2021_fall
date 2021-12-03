# Concepts of Programming

## General Concepts

### Variables and scoping

#### Primitive data types

- (In JS) a primitive data type is data that is not an object and has no methods. There are 7 primitive data types:
  - string
  - number
  - [bigint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
  - boolean
  - undefined
  - null
  - [symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- Most of time its value is represented directly at the lowerest level of the language implementation.
- Primitives are immutable i.e. they cannot be altered.
- It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value cannot be changed in the ways that objects, arrays, and fuunctions can be altered.

### Type Systems

- Type is an attribute of data that signifies properties of the data.
- A tyype is defined in terms of its physical representation and composition.
  - int8: 8 buts thaht represent a natural number
  - float32: 32bits that represents a real number
  - bool: a value that can represent the two logical states of true or false
  - grapheme: a single valid unicode grapheme / glyph?
  - pair: a pair of values `<int, int>`
  - union: value that may have several formats within the same positionh in memory: `{int, float, string, array, object}`

#### Static/dynamic typing

-

### Type inference

## Object-oriented concepts

- Classes and objects
- Inheritance (single/multiple inheritance, interface inheritance, abstract classes, prototype-based / class-based inheritance)
- Polymorphism (incl. dynamic dispatch and late binding)

## Functional concepts

- Pure functions and referential transparency
- Anonymous functions and lambda expressions
- Higher-order functions (e.g., map, filter, reduce)

## Advanced Topics

- Memory Management
  - Heap and stack
  - Manual cleanup vs. garbage collection
- Reflection
- Generics
- Language Implementation (Compilers/Interpreters)
  - Lexical analysis
  - Parsing
  - Semantic analysis (type checking, static analysis)
  - Code optimization
  - Code generation

# JavaScript Mastery Roadmap

## 1. JavaScript Basics
- `var`, `let`, `const`
- Data Types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- Operators: Arithmetic, Assignment, Comparison, Logical, Ternary
- Type Coercion & Conversion
- Conditional Statements: `if`, `else`, `switch`
- Loops: `for`, `while`, `do-while`, `for...of`, `for...in`
- Functions: Declaration, Expression, Arrow Functions
- Scope: Local, Global, Block-level
- Hoisting
- Strict Mode (`"use strict"`)
- Template Literals
- Comments: Single-line, Multi-line

## 2. Intermediate JavaScript
- Arrays & Methods: `map`, `filter`, `reduce`, `forEach`, `find`, etc.
- Objects & Object Methods
- Destructuring: Arrays & Objects
- Spread and Rest Operators
- Callback Functions
- Closures
- The `this` Keyword
- Constructor Functions
- Prototypes & Inheritance
- ES6+ Features

## 3. Asynchronous JavaScript
- Event Loop & Call Stack
- `setTimeout`, `setInterval`
- Callbacks
- Promises
- `async/await`
- Error Handling: `try`, `catch`, `finally`
- Fetch API
- XMLHttpRequest

## 4. JavaScript in the Browser
- DOM Manipulation: `querySelector`, `getElementById`, `innerHTML`, etc.
- Event Handling: Listeners, Bubbling, Delegation
- Forms & Validation
- BOM: `Window`, `Navigator`, `Location`, `History`
- Local Storage, Session Storage, Cookies
- Web APIs
- Debouncing & Throttling

## 5. Advanced JavaScript
- Lexical Environment & Scope Chain
- Execution Context & Call Stack
- Closures (in depth)
- Currying
- Memoization
- Module Pattern
- IIFE
- Garbage Collection
- JavaScript Engines
- Tail Call Optimization
- Event Loop (in depth)
- Polyfills
- Service Workers
- Web Workers
- Memory Management (Leaks, GC, WeakMap/WeakSet)

## 6. Object-Oriented Programming (OOP)
- Classes and Objects
- Constructor, Methods, Inheritance
- Encapsulation, Abstraction
- Static Properties & Methods
- Private Fields
- `super`, `extends`
- Composition vs Inheritance
- 📌 Project Idea: Blog Manager using OOP Concepts

## 7. Modules and Tooling
- ES Modules: `import/export`
- CommonJS vs ES Modules
- Bundlers: Webpack, Vite, Parcel
- Transpilers: Babel
- NPM/Yarn
- `package.json`
- Module Resolution
- Tree Shaking

## 8. Testing in JavaScript
- Unit Testing: Jest, Mocha
- Assertion Libraries: Chai, Expect
- Test Coverage
- TDD (Test-Driven Development)
- Mocking APIs/Functions
- Integration Testing

## 9. Functional Programming (FP)
- Pure Functions
- Immutability
- First-Class Functions
- Higher-Order Functions
- Recursion
- Function Composition
- Partial Application
- Lazy Evaluation
- 📌 Project Idea: Functional Data Pipeline

## 10. Error Handling and Debugging
- Debugging using DevTools
- Try/Catch
- Stack Trace Analysis
- Custom Errors
- Logging
- Breakpoints & Watches
- Common JS Pitfalls

## 11. JavaScript Security
- XSS (Cross-Site Scripting)
```html
<input value="<script>alert('xss')</script>">
```
- CSRF (Cross-Site Request Forgery)
- Content Security Policy (CSP)
- Input Sanitization
- Secure JS Practices

## 12. JavaScript Projects for Practice
- To-Do List App
- Weather App (API Integration)
- Quiz App
- Infinite Scroll Blog
- E-commerce Cart
- Form Validator
- Notes App with Search
- Custom Modal / Tooltip / Toast
- GitHub User Search (API)
- Joke Generator (Public API)
- Movie Search with TMDB API
- Real-time Clock App

---

## 🔍 JavaScript Interview & Concept Cheatsheet

### ✅ Type Coercion Examples
```js
1 + false       // 1
1 + true        // 2
1 + null        // 1
1 - false       // 1
```

### ✅ Array vs String Comparison
```js
[1,2,3] == "1,2,3"     // true
[1,2,3] === "1,2,3"    // false
```

### ✅ Loose vs Strict
```js
"5" == 5    // true
"5" === 5   // false
```

### ✅ typeof & Truthy/Falsy
```js
typeof null        // "object"
typeof undefined   // "undefined"
typeof NaN         // "number"

Boolean([])        // true
Boolean({})        // true
Boolean("")        // false
Boolean("false")   // true
```

### ✅ Weird Coercion Cases
```js
"1" - -"1"     // 2
1 + 2 + "3"     // "33"
"abc" + +"def" // "abcNaN"
```

### ✅ Logical Operators
```js
false || null || "hello"   // "hello"
false && null && "hello"   // false
0 || 1                     // 1
1 && 2                     // 2
```

### ✅ Hoisting
```js
console.log(a); // undefined
var a = 10;
```

### ✅ Sparse Array
```js
const arr = [1, 2, 3];
arr[5] = 9;
console.log(arr.length); // 6
```

### ✅ typeof with Objects
```js
typeof []        // "object"
typeof {}        // "object"
typeof null      // "object"
```

### ✅ NaN Checks
```js
NaN == NaN       // false
NaN === NaN      // false
NaN != NaN       // true
```

### ✅ Postfix vs Prefix
```js
let num = 0;
console.log(num++);  // 0
console.log(++num);  // 2
```

### ✅ Object Duplicate Keys
```js
const obj = { a: "one", a: "two" };
console.log(obj); // { a: "two" }
```

### ✅ const Arrays/Objects Mutation
```js
const arr = [1,2,3];
arr[0] = 99;     // OK
arr = [4,5];     // ❌ Error
```

### ✅ JSON.stringify
```js
JSON.stringify({ a: undefined, b: null }); // {"b":null}
```

### ✅ [] == ![] Confusion
```js
[] == ![]   // true
{} == !{}   // true
```

### ✅ Modern JavaScript Tricks
```js
const name = obj?.user?.name;
const isAdmin = value ?? false;
await fetch("/api"); // Top-level await (in modules)
```

Let me know if you'd like this exported as a README.md file or converted to a downloadable PDF cheat sheet!


# Top JavaScript Interview Questions 

**Updated for 2025!** This repository contains a few hundred curated JavaScript interview questions with high quality answers for acing your Front End Engineer interviews. The questions are divided into two sections:

1. [**Top questions**](#table-of-contents-top-questions): List of the most important JavaScript interview questions that are commonly-asked during Front End Developer interviews. This README displays the concise version of the answers and links are provided to the full version of answers for further learning. If you are are short on time, start with this section.
2. [**All questions**](#table-of-contents-all-questions): Comprehensive and elaborate list of JavaScript interview questions that ranges from basic to advanced topics. The answers in this section are more concise. This section is useful if you rusty with JavaScript concepts and need a refresher.
3. [**Questions by difficulty**](#questions-by-difficulty): Questions categorized by difficulty – basic, intermediate, advanced.

---

<div>
<p align="center">
  <a href="https://www.greatfrontend.com/questions/js?utm_source=github&utm_medium=referral&utm_campaign=top-js-qns&gnrs=yangshun">
    <img src="./images/greatfrontend-js-banner4x.png" alt="GreatFrontEnd JavaScript Interview Questions" width="100%">
  </a>
</p>
</div>

> 💡 Nail JavaScript interviews with questions and solutions from ex-interviewers! [Try GreatFrontEnd →](https://www.greatfrontend.com/questions/js?utm_source=github&utm_medium=referral&utm_campaign=top-js-qns&gnrs=yangshun) 💡

---

## Table of Contents (Top Questions)

This list contains the top essential questions that are frequently-asked during Front End Engineer interviews. Concise versions of the answers are presented here with links to elaborate versions for further reading. This section is great if you need a quick refresher of the most important concepts.

<!-- TABLE_OF_CONTENTS:TOP:START -->

| No. | Questions | Level |
| --- | :-- | :-- |
| 1 | [Explain the concept of "hoisting" in JavaScript](#explain-the-concept-of-hoisting-in-javascript) | Basic |
| 2 | [What are the differences between JavaScript variables created using `let`, `var` or `const`?](#what-are-the-differences-between-javascript-variables-created-using-let-var-or-const) | Basic |
| 3 | [What is the difference between `==` and `===` in JavaScript?](#what-is-the-difference-between--and--in-javascript) | Basic |
| 4 | [What is the event loop in JavaScript runtimes?](#what-is-the-event-loop-in-javascript-runtimes) | Basic |
| 5 | [Explain event delegation in JavaScript](#explain-event-delegation-in-javascript) | Basic |
| 6 | [Explain how `this` works in JavaScript](#explain-how-this-works-in-javascript) | Basic |
| 7 | [Describe the difference between a cookie, `sessionStorage` and `localStorage` in browsers](#describe-the-difference-between-a-cookie-sessionstorage-and-localstorage-in-browsers) | Basic |
| 8 | [Describe the difference between `<script>`, `<script async>` and `<script defer>`](#describe-the-difference-between-script-script-async-and-script-defer) | Basic |
| 9 | [What's the difference between a JavaScript variable that is: `null`, `undefined` or undeclared?](#whats-the-difference-between-a-javascript-variable-that-is-null-undefined-or-undeclared) | Basic |
| 10 | [What's the difference between `.call` and `.apply` in JavaScript?](#whats-the-difference-between-call-and-apply-in-javascript) | Basic |
| 11 | [Explain `Function.prototype.bind` in JavaScript](#explain-functionprototypebind-in-javascript) | Basic |
| 12 | [What advantage is there for using the JavaScript arrow syntax for a method in a constructor?](#what-advantage-is-there-for-using-the-javascript-arrow-syntax-for-a-method-in-a-constructor) | Basic |
| 13 | [Explain how prototypal inheritance works in JavaScript](#explain-how-prototypal-inheritance-works-in-javascript) | Basic |
| 14 | [Difference between: `function Person(){}`, `const person = Person()`, and `const person = new Person()` in JavaScript?](#difference-between-function-person-const-person--person-and-const-person--new-person-in-javascript) | Basic |
| 15 | [Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}` in JavaScript](#explain-the-differences-on-the-usage-of-foo-between-function-foo--and-var-foo--function--in-javascript) | Basic |
| 16 | [What's a typical use case for anonymous functions in JavaScript?](#whats-a-typical-use-case-for-anonymous-functions-in-javascript) | Intermediate |
| 17 | [What are the various ways to create objects in JavaScript?](#what-are-the-various-ways-to-create-objects-in-javascript) | Basic |
| 18 | [What is a closure in JavaScript, and how/why would you use one?](#what-is-a-closure-in-javascript-and-howwhy-would-you-use-one) | Intermediate |
| 19 | [What is the definition of a higher-order function in JavaScript?](#what-is-the-definition-of-a-higher-order-function-in-javascript) | Basic |
| 20 | [What are the differences between JavaScript ES2015 classes and ES5 function constructors?](#what-are-the-differences-between-javascript-es2015-classes-and-es5-function-constructors) | Basic |
| 21 | [Describe event bubbling in JavaScript and browsers](#describe-event-bubbling-in-javascript-and-browsers) | Basic |
| 22 | [Describe event capturing in JavaScript and browsers](#describe-event-capturing-in-javascript-and-browsers) | Basic |
| 23 | [What is the difference between `mouseenter` and `mouseover` event in JavaScript and browsers?](#what-is-the-difference-between-mouseenter-and-mouseover-event-in-javascript-and-browsers) | Basic |
| 24 | [What is `'use strict';` in JavaScript for?](#what-is-use-strict-in-javascript-for) | Advanced |
| 25 | [Explain the difference between synchronous and asynchronous functions in JavaScript](#explain-the-difference-between-synchronous-and-asynchronous-functions-in-javascript) | Basic |
| 26 | [What are the pros and cons of using Promises instead of callbacks in JavaScript?](#what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks-in-javascript) | Intermediate |
| 27 | [Explain AJAX in as much detail as possible](#explain-ajax-in-as-much-detail-as-possible) | Basic |
| 28 | [What are the advantages and disadvantages of using AJAX?](#what-are-the-advantages-and-disadvantages-of-using-ajax) | Basic |
| 29 | [What are the differences between `XMLHttpRequest` and `fetch()` in JavaScript and browsers?](#what-are-the-differences-between-xmlhttprequest-and-fetch-in-javascript-and-browsers) | Basic |
| 30 | [How do you abort a web request using `AbortController` in JavaScript?](#how-do-you-abort-a-web-request-using-abortcontroller-in-javascript) | Intermediate |
| 31 | [What are JavaScript polyfills for?](#what-are-javascript-polyfills-for) | Advanced |
| 32 | [Why is extending built-in JavaScript objects not a good idea?](#why-is-extending-built-in-javascript-objects-not-a-good-idea) | Intermediate |
| 33 | [Why is it, in general, a good idea to leave the global JavaScript scope of a website as-is and never touch it?](#why-is-it-in-general-a-good-idea-to-leave-the-global-javascript-scope-of-a-website-as-is-and-never-touch-it) | Intermediate |
| 34 | [Explain the differences between CommonJS modules and ES modules in JavaScript](#explain-the-differences-between-commonjs-modules-and-es-modules-in-javascript) | Intermediate |
| 35 | [What are the various data types in JavaScript?](#what-are-the-various-data-types-in-javascript) | Basic |
| 36 | [What language constructs do you use for iterating over object properties and array items in JavaScript?](#what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items-in-javascript) | Basic |
| 37 | [What are the benefits of using spread syntax in JavaScript and how is it different from rest syntax?](#what-are-the-benefits-of-using-spread-syntax-in-javascript-and-how-is-it-different-from-rest-syntax) | Basic |
| 38 | [What are iterators and generators in JavaScript and what are they used for?](#what-are-iterators-and-generators-in-javascript-and-what-are-they-used-for) | Advanced |
| 39 | [Explain the difference between mutable and immutable objects in JavaScript](#explain-the-difference-between-mutable-and-immutable-objects-in-javascript) | Intermediate |
| 40 | [What is the difference between a `Map` object and a plain object in JavaScript?](#what-is-the-difference-between-a-map-object-and-a-plain-object-in-javascript) | Basic |
| 41 | [What are the differences between `Map`/`Set` and `WeakMap`/`WeakSet` in JavaScript?](#what-are-the-differences-between-mapset-and-weakmapweakset-in-javascript) | Basic |
| 42 | [Why might you want to create static class members in JavaScript?](#why-might-you-want-to-create-static-class-members-in-javascript) | Intermediate |
| 43 | [What are `Symbol`s used for in JavaScript?](#what-are-symbols-used-for-in-javascript) | Intermediate |
| 44 | [What are server-sent events?](#what-are-server-sent-events) | Advanced |
| 45 | [What are JavaScript object property flags and descriptors?](#what-are-javascript-object-property-flags-and-descriptors) | Advanced |
| 46 | [What are JavaScript object getters and setters for?](#what-are-javascript-object-getters-and-setters-for) | Intermediate |
| 47 | [What are proxies in JavaScript used for?](#what-are-proxies-in-javascript-used-for) | Advanced |
| 48 | [What tools and techniques do you use for debugging JavaScript code?](#what-tools-and-techniques-do-you-use-for-debugging-javascript-code) | Intermediate |
| 49 | [What are workers in JavaScript used for?](#what-are-workers-in-javascript-used-for) | Advanced |
| 50 | [How does JavaScript garbage collection work?](#how-does-javascript-garbage-collection-work) | Advanced |

<!-- TABLE_OF_CONTENTS:TOP:END -->

## Table of Contents (All Questions)

This list contains a longer list of important JavaScript questions. Not all of them will be asked during Front End Engineer interviews but they provide a well-rounded review of JavaScript concepts ranging from beginner to advanced topics.

<!-- TABLE_OF_CONTENTS:ALL:START -->

| No. | Questions | Level |
| --- | :-- | :-- |
| 1 | [What are the various data types in JavaScript?](#what-are-the-various-data-types-in-javascript) | Basic |
| 2 | [How do you check the data type of a variable?](#how-do-you-check-the-data-type-of-a-variable) | Basic |
| 3 | [What's the difference between a JavaScript variable that is: `null`, `undefined` or undeclared?](#whats-the-difference-between-a-javascript-variable-that-is-null-undefined-or-undeclared) | Basic |
| 4 | [What are the differences between JavaScript variables created using `let`, `var` or `const`?](#what-are-the-differences-between-javascript-variables-created-using-let-var-or-const) | Basic |
| 5 | [Why is it, in general, a good idea to leave the global JavaScript scope of a website as-is and never touch it?](#why-is-it-in-general-a-good-idea-to-leave-the-global-javascript-scope-of-a-website-as-is-and-never-touch-it) | Intermediate |
| 6 | [How do you convert a string to a number in JavaScript?](#how-do-you-convert-a-string-to-a-number-in-javascript) | Basic |
| 7 | [What are template literals and how are they used?](#what-are-template-literals-and-how-are-they-used) | Basic |
| 8 | [Explain the concept of tagged templates](#explain-the-concept-of-tagged-templates) | Intermediate |
| 9 | [What is the spread operator and how is it used?](#what-is-the-spread-operator-and-how-is-it-used) | Basic |
| 10 | [What are `Symbol`s used for in JavaScript?](#what-are-symbols-used-for-in-javascript) | Intermediate |
| 11 | [What are proxies in JavaScript used for?](#what-are-proxies-in-javascript-used-for) | Advanced |
| 12 | [Explain the concept of "hoisting" in JavaScript](#explain-the-concept-of-hoisting-in-javascript) | Basic |
| 13 | [Explain the difference in hoisting between `var`, `let`, and `const`](#explain-the-difference-in-hoisting-between-var-let-and-const) | Basic |
| 14 | [How does hoisting affect function declarations and expressions?](#how-does-hoisting-affect-function-declarations-and-expressions) | Advanced |
| 15 | [What are the potential issues caused by hoisting?](#what-are-the-potential-issues-caused-by-hoisting) | Intermediate |
| 16 | [How can you avoid problems related to hoisting?](#how-can-you-avoid-problems-related-to-hoisting) | Basic |
| 17 | [What is the difference between `==` and `===` in JavaScript?](#what-is-the-difference-between--and--in-javascript) | Basic |
| 18 | [What language constructs do you use for iterating over object properties and array items in JavaScript?](#what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items-in-javascript) | Basic |
| 19 | [What is the purpose of the `break` and `continue` statements?](#what-is-the-purpose-of-the-break-and-continue-statements) | Basic |
| 20 | [What is the ternary operator and how is it used?](#what-is-the-ternary-operator-and-how-is-it-used) | Basic |
| 21 | [How do you access the index of an element in an array during iteration?](#how-do-you-access-the-index-of-an-element-in-an-array-during-iteration) | Basic |
| 22 | [What is the purpose of the `switch` statement?](#what-is-the-purpose-of-the-switch-statement) | Basic |
| 23 | [What are rest parameters and how are they used?](#what-are-rest-parameters-and-how-are-they-used) | Basic |
| 24 | [Explain the concept of the spread operator and its uses](#explain-the-concept-of-the-spread-operator-and-its-uses) | Basic |
| 25 | [What are the benefits of using spread syntax in JavaScript and how is it different from rest syntax?](#what-are-the-benefits-of-using-spread-syntax-in-javascript-and-how-is-it-different-from-rest-syntax) | Basic |
| 26 | [What are iterators and generators in JavaScript and what are they used for?](#what-are-iterators-and-generators-in-javascript-and-what-are-they-used-for) | Advanced |
| 27 | [Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}` in JavaScript](#explain-the-differences-on-the-usage-of-foo-between-function-foo--and-var-foo--function--in-javascript) | Basic |
| 28 | [What is the difference between a parameter and an argument?](#what-is-the-difference-between-a-parameter-and-an-argument) | Basic |
| 29 | [Explain the concept of hoisting with regards to functions](#explain-the-concept-of-hoisting-with-regards-to-functions) | Basic |
| 30 | [What's the difference between `.call` and `.apply` in JavaScript?](#whats-the-difference-between-call-and-apply-in-javascript) | Basic |
| 31 | [Can you offer a use case for the new arrow => function syntax?](#can-you-offer-a-use-case-for-the-new-arrow--function-syntax) | Basic |
| 32 | [Difference between: `function Person(){}`, `const person = Person()`, and `const person = new Person()` in JavaScript?](#difference-between-function-person-const-person--person-and-const-person--new-person-in-javascript) | Basic |
| 33 | [What is the definition of a higher-order function in JavaScript?](#what-is-the-definition-of-a-higher-order-function-in-javascript) | Basic |
| 34 | [What are callback functions and how are they used?](#what-are-callback-functions-and-how-are-they-used) | Basic |
| 35 | [What's a typical use case for anonymous functions in JavaScript?](#whats-a-typical-use-case-for-anonymous-functions-in-javascript) | Intermediate |
| 36 | [What is recursion and how is it used in JavaScript?](#what-is-recursion-and-how-is-it-used-in-javascript) | Basic |
| 37 | [What are default parameters and how are they used?](#what-are-default-parameters-and-how-are-they-used) | Basic |
| 38 | [Explain why the following doesn't work as an IIFE: `function foo(){}();`. What needs to be changed to properly make it an IIFE?](#explain-why-the-following-doesnt-work-as-an-iife-function-foo-what-needs-to-be-changed-to-properly-make-it-an-iife) | Advanced |
| 39 | [What are the various ways to create objects in JavaScript?](#what-are-the-various-ways-to-create-objects-in-javascript) | Basic |
| 40 | [Explain the difference between dot notation and bracket notation for accessing object properties](#explain-the-difference-between-dot-notation-and-bracket-notation-for-accessing-object-properties) | Basic |
| 41 | [What are the different methods for iterating over an array?](#what-are-the-different-methods-for-iterating-over-an-array) | Basic |
| 42 | [How do you add, remove, and update elements in an array?](#how-do-you-add-remove-and-update-elements-in-an-array) | Basic |
| 43 | [What are the different ways to copy an object or an array?](#what-are-the-different-ways-to-copy-an-object-or-an-array) | Basic |
| 44 | [Explain the difference between shallow copy and deep copy](#explain-the-difference-between-shallow-copy-and-deep-copy) | Basic |
| 45 | [What are the advantages of using the spread operator with arrays and objects?](#what-are-the-advantages-of-using-the-spread-operator-with-arrays-and-objects) | Basic |
| 46 | [How do you check if an object has a specific property?](#how-do-you-check-if-an-object-has-a-specific-property) | Basic |
| 47 | [Explain the difference between mutable and immutable objects in JavaScript](#explain-the-difference-between-mutable-and-immutable-objects-in-javascript) | Intermediate |
| 48 | [Explain the concept of destructuring assignment for objects and arrays](#explain-the-concept-of-destructuring-assignment-for-objects-and-arrays) | Basic |
| 49 | [What is `Object.freeze()` for?](#what-is-objectfreeze-for) | Intermediate |
| 50 | [What is `Object.seal()` for?](#what-is-objectseal-for) | Intermediate |
| 51 | [What is `Object.preventExtensions()` for?](#what-is-objectpreventextensions-for) | Intermediate |
| 52 | [What are JavaScript object getters and setters for?](#what-are-javascript-object-getters-and-setters-for) | Intermediate |
| 53 | [What are JavaScript object property flags and descriptors?](#what-are-javascript-object-property-flags-and-descriptors) | Advanced |
| 54 | [How do you reliably determine whether an object is empty?](#how-do-you-reliably-determine-whether-an-object-is-empty) | Basic |
| 55 | [What is the event loop in JavaScript runtimes?](#what-is-the-event-loop-in-javascript-runtimes) | Basic |
| 56 | [Explain the difference between synchronous and asynchronous functions in JavaScript](#explain-the-difference-between-synchronous-and-asynchronous-functions-in-javascript) | Basic |
| 57 | [Explain the concept of a callback function in asynchronous operations](#explain-the-concept-of-a-callback-function-in-asynchronous-operations) | Basic |
| 58 | [What are Promises and how do they work?](#what-are-promises-and-how-do-they-work) | Basic |
| 59 | [Explain the different states of a Promise](#explain-the-different-states-of-a-promise) | Intermediate |
| 60 | [What are the pros and cons of using Promises instead of callbacks in JavaScript?](#what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks-in-javascript) | Intermediate |
| 61 | [What is the use of `Promise.all()`](#what-is-the-use-of-promiseall) | Basic |
| 62 | [How is `Promise.all()` different from `Promise.allSettled()`?](#how-is-promiseall-different-from-promiseallsettled) | Intermediate |
| 63 | [What is async/await and how does it simplify asynchronous code?](#what-is-asyncawait-and-how-does-it-simplify-asynchronous-code) | Intermediate |
| 64 | [How do you handle errors in asynchronous operations?](#how-do-you-handle-errors-in-asynchronous-operations) | Basic |
| 65 | [Explain the concept of a microtask queue](#explain-the-concept-of-a-microtask-queue) | Intermediate |
| 66 | [What is the difference between `setTimeout()`, `setImmediate()`, and `process.nextTick()`?](#what-is-the-difference-between-settimeout-setimmediate-and-processnexttick) | Intermediate |
| 67 | [Explain how prototypal inheritance works in JavaScript](#explain-how-prototypal-inheritance-works-in-javascript) | Basic |
| 68 | [What is the prototype chain and how does it work?](#what-is-the-prototype-chain-and-how-does-it-work) | Intermediate |
| 69 | [Explain the difference between classical inheritance and prototypal inheritance](#explain-the-difference-between-classical-inheritance-and-prototypal-inheritance) | Basic |
| 70 | [Explain the concept of inheritance in ES2015 classes](#explain-the-concept-of-inheritance-in-es2015-classes) | Basic |
| 71 | [What is the purpose of the `new` keyword?](#what-is-the-purpose-of-the-new-keyword) | Basic |
| 72 | [How do you create a constructor function?](#how-do-you-create-a-constructor-function) | Basic |
| 73 | [What are the differences between JavaScript ES2015 classes and ES5 function constructors?](#what-are-the-differences-between-javascript-es2015-classes-and-es5-function-constructors) | Basic |
| 74 | [What advantage is there for using the JavaScript arrow syntax for a method in a constructor?](#what-advantage-is-there-for-using-the-javascript-arrow-syntax-for-a-method-in-a-constructor) | Basic |
| 75 | [Why might you want to create static class members in JavaScript?](#why-might-you-want-to-create-static-class-members-in-javascript) | Intermediate |
| 76 | [What is a closure in JavaScript, and how/why would you use one?](#what-is-a-closure-in-javascript-and-howwhy-would-you-use-one) | Intermediate |
| 77 | [Explain the concept of lexical scoping](#explain-the-concept-of-lexical-scoping) | Basic |
| 78 | [Explain the concept of scope in JavaScript](#explain-the-concept-of-scope-in-javascript) | Basic |
| 79 | [How can closures be used to create private variables?](#how-can-closures-be-used-to-create-private-variables) | Basic |
| 80 | [What are the potential pitfalls of using closures?](#what-are-the-potential-pitfalls-of-using-closures) | Intermediate |
| 81 | [Explain the difference between global scope, function scope, and block scope](#explain-the-difference-between-global-scope-function-scope-and-block-scope) | Basic |
| 82 | [Explain how `this` works in JavaScript](#explain-how-this-works-in-javascript) | Basic |
| 83 | [Explain `Function.prototype.bind` in JavaScript](#explain-functionprototypebind-in-javascript) | Basic |
| 84 | [Explain the different ways the `this` keyword can be bound](#explain-the-different-ways-the-this-keyword-can-be-bound) | Intermediate |
| 85 | [What are the common pitfalls of using the `this` keyword?](#what-are-the-common-pitfalls-of-using-the-this-keyword) | Basic |
| 86 | [Explain the concept of `this` binding in event handlers](#explain-the-concept-of-this-binding-in-event-handlers) | Basic |
| 87 | [What is the DOM and how is it structured?](#what-is-the-dom-and-how-is-it-structured) | Basic |
| 88 | [What's the difference between an "attribute" and a "property" in the DOM?](#whats-the-difference-between-an-attribute-and-a-property-in-the-dom) | Intermediate |
| 89 | [Explain the difference between `document.querySelector()` and `document.getElementById()`](#explain-the-difference-between-documentqueryselector-and-documentgetelementbyid) | Basic |
| 90 | [How do you add, remove, and modify HTML elements using JavaScript?](#how-do-you-add-remove-and-modify-html-elements-using-javascript) | Basic |
| 91 | [What are event listeners and how are they used?](#what-are-event-listeners-and-how-are-they-used) | Basic |
| 92 | [Explain the event phases in a browser](#explain-the-event-phases-in-a-browser) | Intermediate |
| 93 | [Describe event bubbling in JavaScript and browsers](#describe-event-bubbling-in-javascript-and-browsers) | Basic |
| 94 | [Describe event capturing in JavaScript and browsers](#describe-event-capturing-in-javascript-and-browsers) | Basic |
| 95 | [Explain event delegation in JavaScript](#explain-event-delegation-in-javascript) | Basic |
| 96 | [How do you prevent the default behavior of an event?](#how-do-you-prevent-the-default-behavior-of-an-event) | Basic |
| 97 | [What is the difference between `event.preventDefault()` and `event.stopPropagation()`?](#what-is-the-difference-between-eventpreventdefault-and-eventstoppropagation) | Intermediate |
| 98 | [What is the difference between `mouseenter` and `mouseover` event in JavaScript and browsers?](#what-is-the-difference-between-mouseenter-and-mouseover-event-in-javascript-and-browsers) | Basic |
| 99 | [What is the difference between `innerHTML` and `textContent`?](#what-is-the-difference-between-innerhtml-and-textcontent) | Intermediate |
| 100 | [How do you manipulate CSS styles using JavaScript?](#how-do-you-manipulate-css-styles-using-javascript) | Basic |
| 101 | [Describe the difference between `<script>`, `<script async>` and `<script defer>`](#describe-the-difference-between-script-script-async-and-script-defer) | Basic |
| 102 | [What is the difference between the Window object and the Document object?](#what-is-the-difference-between-the-window-object-and-the-document-object) | Intermediate |
| 103 | [Describe the difference between a cookie, `sessionStorage` and `localStorage` in browsers](#describe-the-difference-between-a-cookie-sessionstorage-and-localstorage-in-browsers) | Basic |
| 104 | [How do you make an HTTP request using the Fetch API?](#how-do-you-make-an-http-request-using-the-fetch-api) | Basic |
| 105 | [What are the different ways to make an API call in JavaScript?](#what-are-the-different-ways-to-make-an-api-call-in-javascript) | Basic |
| 106 | [Explain AJAX in as much detail as possible](#explain-ajax-in-as-much-detail-as-possible) | Basic |
| 107 | [What are the advantages and disadvantages of using AJAX?](#what-are-the-advantages-and-disadvantages-of-using-ajax) | Basic |
| 108 | [What are the differences between `XMLHttpRequest` and `fetch()` in JavaScript and browsers?](#what-are-the-differences-between-xmlhttprequest-and-fetch-in-javascript-and-browsers) | Basic |
| 109 | [How do you abort a web request using `AbortController` in JavaScript?](#how-do-you-abort-a-web-request-using-abortcontroller-in-javascript) | Intermediate |
| 110 | [Explain how JSONP works (and how it's not really Ajax)](#explain-how-jsonp-works-and-how-its-not-really-ajax) | Intermediate |
| 111 | [What are workers in JavaScript used for?](#what-are-workers-in-javascript-used-for) | Advanced |
| 112 | [Explain the concept of the Web Socket API](#explain-the-concept-of-the-web-socket-api) | Intermediate |
| 113 | [What are JavaScript polyfills for?](#what-are-javascript-polyfills-for) | Advanced |
| 114 | [How do you detect if JavaScript is disabled on a page?](#how-do-you-detect-if-javascript-is-disabled-on-a-page) | Intermediate |
| 115 | [What is the `Intl` namespace object for?](#what-is-the-intl-namespace-object-for) | Intermediate |
| 116 | [How do you validate form elements using the Constraint Validation API?](#how-do-you-validate-form-elements-using-the-constraint-validation-api) | Advanced |
| 117 | [How do you use `window.history` API?](#how-do-you-use-windowhistory-api) | Basic |
| 118 | [How do `<iframe>` on a page communicate?](#how-do-iframe-on-a-page-communicate) | Intermediate |
| 119 | [Difference between document `load` event and document `DOMContentLoaded` event?](#difference-between-document-load-event-and-document-domcontentloaded-event) | Intermediate |
| 120 | [How do you redirect to a new page in JavaScript?](#how-do-you-redirect-to-a-new-page-in-javascript) | Basic |
| 121 | [How do you get the query string values of the current page in JavaScript?](#how-do-you-get-the-query-string-values-of-the-current-page-in-javascript) | Basic |
| 122 | [What are server-sent events?](#what-are-server-sent-events) | Advanced |
| 123 | [What are Progressive Web Applications (PWAs)?](#what-are-progressive-web-applications-pwas) | Intermediate |
| 124 | [What are modules and why are they useful?](#what-are-modules-and-why-are-they-useful) | Basic |
| 125 | [Explain the differences between CommonJS modules and ES modules in JavaScript](#explain-the-differences-between-commonjs-modules-and-es-modules-in-javascript) | Intermediate |
| 126 | [How do you import and export modules in JavaScript?](#how-do-you-import-and-export-modules-in-javascript) | Basic |
| 127 | [What are the benefits of using a module bundler?](#what-are-the-benefits-of-using-a-module-bundler) | Intermediate |
| 128 | [Explain the concept of tree shaking in module bundling](#explain-the-concept-of-tree-shaking-in-module-bundling) | Intermediate |
| 129 | [What are the metadata fields of a module?](#what-are-the-metadata-fields-of-a-module) | Intermediate |
| 130 | [What do you think of AMD vs CommonJS?](#what-do-you-think-of-amd-vs-commonjs) | Basic |
| 131 | [What are the different types of errors in JavaScript?](#what-are-the-different-types-of-errors-in-javascript) | Intermediate |
| 132 | [How do you handle errors using `try...catch` blocks?](#how-do-you-handle-errors-using-trycatch-blocks) | Basic |
| 133 | [What is the purpose of the `finally` block?](#what-is-the-purpose-of-the-finally-block) | Basic |
| 134 | [How can you create custom error objects?](#how-can-you-create-custom-error-objects) | Intermediate |
| 135 | [Explain the concept of error propagation in JavaScript](#explain-the-concept-of-error-propagation-in-javascript) | Intermediate |
| 136 | [What is currying and how does it work?](#what-is-currying-and-how-does-it-work) | Intermediate |
| 137 | [Explain the concept of partial application](#explain-the-concept-of-partial-application) | Intermediate |
| 138 | [What are the benefits of using currying and partial application?](#what-are-the-benefits-of-using-currying-and-partial-application) | Intermediate |
| 139 | [Provide some examples of how currying and partial application can be used](#provide-some-examples-of-how-currying-and-partial-application-can-be-used) | Basic |
| 140 | [How do currying and partial application differ from each other?](#how-do-currying-and-partial-application-differ-from-each-other) | Intermediate |
| 141 | [What are `Set`s and `Map`s and how are they used?](#what-are-sets-and-maps-and-how-are-they-used) | Basic |
| 142 | [What are the differences between `Map`/`Set` and `WeakMap`/`WeakSet` in JavaScript?](#what-are-the-differences-between-mapset-and-weakmapweakset-in-javascript) | Basic |
| 143 | [How do you convert a `Set` to an array in JavaScript?](#how-do-you-convert-a-set-to-an-array-in-javascript) | Basic |
| 144 | [What is the difference between a `Map` object and a plain object in JavaScript?](#what-is-the-difference-between-a-map-object-and-a-plain-object-in-javascript) | Basic |
| 145 | [How do `Set`s and `Map`s handle equality checks for objects?](#how-do-sets-and-maps-handle-equality-checks-for-objects) | Basic |
| 146 | [What are some common performance bottlenecks in JavaScript applications?](#what-are-some-common-performance-bottlenecks-in-javascript-applications) | Intermediate |
| 147 | [Explain the concept of debouncing and throttling](#explain-the-concept-of-debouncing-and-throttling) | Basic |
| 148 | [How can you optimize DOM manipulation for better performance?](#how-can-you-optimize-dom-manipulation-for-better-performance) | Advanced |
| 149 | [What are some techniques for reducing reflows and repaints?](#what-are-some-techniques-for-reducing-reflows-and-repaints) | Advanced |
| 150 | [Explain the concept of lazy loading and how it can improve performance](#explain-the-concept-of-lazy-loading-and-how-it-can-improve-performance) | Basic |
| 151 | [What are Web Workers and how can they be used to improve performance?](#what-are-web-workers-and-how-can-they-be-used-to-improve-performance) | Advanced |
| 152 | [Explain the concept of caching and how it can be used to improve performance](#explain-the-concept-of-caching-and-how-it-can-be-used-to-improve-performance) | Basic |
| 153 | [What are some tools that can be used to measure and analyze JavaScript performance?](#what-are-some-tools-that-can-be-used-to-measure-and-analyze-javascript-performance) | Advanced |
| 154 | [How can you optimize network requests for better performance?](#how-can-you-optimize-network-requests-for-better-performance) | Advanced |
| 155 | [What are the different types of testing in software development?](#what-are-the-different-types-of-testing-in-software-development) | Intermediate |
| 156 | [Explain the difference between unit testing, integration testing, and end-to-end testing](#explain-the-difference-between-unit-testing-integration-testing-and-end-to-end-testing) | Intermediate |
| 157 | [What are some popular JavaScript testing frameworks?](#what-are-some-popular-javascript-testing-frameworks) | Basic |
| 158 | [How do you write unit tests for JavaScript code?](#how-do-you-write-unit-tests-for-javascript-code) | Intermediate |
| 159 | [Explain the concept of test-driven development (TDD)](#explain-the-concept-of-test-driven-development-tdd) | Intermediate |
| 160 | [What are mocks and stubs and how are they used in testing?](#what-are-mocks-and-stubs-and-how-are-they-used-in-testing) | Advanced |
| 161 | [How can you test asynchronous code in JavaScript?](#how-can-you-test-asynchronous-code-in-javascript) | Intermediate |
| 162 | [What are some best practices for writing maintainable and effective tests in JavaScript?](#what-are-some-best-practices-for-writing-maintainable-and-effective-tests-in-javascript) | Intermediate |
| 163 | [Explain the concept of code coverage and how it can be used to assess test quality](#explain-the-concept-of-code-coverage-and-how-it-can-be-used-to-assess-test-quality) | Intermediate |
| 164 | [What are some tools that can be used for JavaScript testing?](#what-are-some-tools-that-can-be-used-for-javascript-testing) | Basic |
| 165 | [What are design patterns and why are they useful?](#what-are-design-patterns-and-why-are-they-useful) | Basic |
| 166 | [Explain the concept of the Singleton pattern](#explain-the-concept-of-the-singleton-pattern) | Basic |
| 167 | [What is the Factory pattern and how is it used?](#what-is-the-factory-pattern-and-how-is-it-used) | Intermediate |
| 168 | [Explain the Observer pattern and its use cases](#explain-the-observer-pattern-and-its-use-cases) | Intermediate |
| 169 | [What is the Module pattern and how does it help with encapsulation?](#what-is-the-module-pattern-and-how-does-it-help-with-encapsulation) | Intermediate |
| 170 | [Explain the concept of the Prototype pattern](#explain-the-concept-of-the-prototype-pattern) | Basic |
| 171 | [What is the Decorator pattern and how is it used?](#what-is-the-decorator-pattern-and-how-is-it-used) | Intermediate |
| 172 | [Explain the concept of the Strategy pattern](#explain-the-concept-of-the-strategy-pattern) | Intermediate |
| 173 | [What is the Command pattern and how is it used?](#what-is-the-command-pattern-and-how-is-it-used) | Intermediate |
| 174 | [Why is extending built-in JavaScript objects not a good idea?](#why-is-extending-built-in-javascript-objects-not-a-good-idea) | Intermediate |
| 175 | [What is Cross-Site Scripting (XSS) and how can you prevent it?](#what-is-cross-site-scripting-xss-and-how-can-you-prevent-it) | Intermediate |
| 176 | [Explain the concept of Cross-Site Request Forgery (CSRF) and its mitigation techniques](#explain-the-concept-of-cross-site-request-forgery-csrf-and-its-mitigation-techniques) | Intermediate |
| 177 | [How can you prevent SQL injection vulnerabilities in JavaScript applications?](#how-can-you-prevent-sql-injection-vulnerabilities-in-javascript-applications) | Intermediate |
| 178 | [What are some best practices for handling sensitive data in JavaScript?](#what-are-some-best-practices-for-handling-sensitive-data-in-javascript) | Intermediate |
| 179 | [Explain the concept of Content Security Policy (CSP) and how it enhances security](#explain-the-concept-of-content-security-policy-csp-and-how-it-enhances-security) | Intermediate |
| 180 | [What are some common security headers and their purpose?](#what-are-some-common-security-headers-and-their-purpose) | Intermediate |
| 181 | [How can you prevent clickjacking attacks?](#how-can-you-prevent-clickjacking-attacks) | Advanced |
| 182 | [Explain the concept of input validation and its importance in security](#explain-the-concept-of-input-validation-and-its-importance-in-security) | Intermediate |
| 183 | [What are some tools and techniques for identifying security vulnerabilities in JavaScript code?](#what-are-some-tools-and-techniques-for-identifying-security-vulnerabilities-in-javascript-code) | Intermediate |
| 184 | [How can you implement secure authentication and authorization in JavaScript applications?](#how-can-you-implement-secure-authentication-and-authorization-in-javascript-applications) | Advanced |
| 185 | [Explain the same-origin policy with regards to JavaScript](#explain-the-same-origin-policy-with-regards-to-javascript) | Intermediate |
| 186 | [What is `'use strict';` in JavaScript for?](#what-is-use-strict-in-javascript-for) | Advanced |
| 187 | [What tools and techniques do you use for debugging JavaScript code?](#what-tools-and-techniques-do-you-use-for-debugging-javascript-code) | Intermediate |
| 188 | [How does JavaScript garbage collection work?](#how-does-javascript-garbage-collection-work) | Advanced |
| 189 | [Explain what a single page app is and how to make one SEO-friendly](#explain-what-a-single-page-app-is-and-how-to-make-one-seo-friendly) | Intermediate |
| 190 | [How can you share code between JavaScript files?](#how-can-you-share-code-between-javascript-files) | Basic |
| 191 | [How do you organize your code?](#how-do-you-organize-your-code) | Intermediate |
| 192 | [What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?](#what-are-some-of-the-advantagesdisadvantages-of-writing-javascript-code-in-a-language-that-compiles-to-javascript) | Advanced |
| 193 | [When would you use `document.write()`?](#when-would-you-use-documentwrite) | Advanced |

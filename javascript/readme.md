# JavaScript Interview Questions & Answers

## Overview

This repository contains a collection of essential JavaScript interview questions and answers, designed to help you prepare for interviews. The questions range from basic to advanced levels, covering key JavaScript concepts, as well as practical scenario-based questions that reflect real-world challenges. Whether you're just starting out or preparing for a senior developer role, this guide will equip you with the knowledge and insights needed for success.

## Table of Contents

- [Basic Concepts](#basic-concepts)
- [Advanced Concepts](#advanced-concepts)
- [DOM Manipulation](#dom-manipulation)
- [Asynchronous JavaScript](#asynchronous-javascript)
- [JavaScript Design Patterns](#javascript-design-patterns)
- [Scenario-Based Questions](#scenario-based-questions)
- [How to Use](#how-to-use)
- [Contributing](#contributing)

---

## PDF Download

If you prefer to have the questions and answers in a PDF format, you can download it by clicking the link below:

[Download PDF Version](./JavaScript_Interview_Questions_and_Answers.pdf)

---

## Basic Concepts

### 1. What is the difference between `let`, `const`, and `var` in JavaScript?

**Answer:**
- **`var`**: Function-scoped (or globally scoped if declared outside a function). Variables declared with `var` can be re-declared and updated.
- **`let`**: Block-scoped. Variables declared with `let` can be updated but not re-declared within the same scope.
- **`const`**: Block-scoped. Constants declared with `const` cannot be updated or re-declared and must be initialized at the time of declaration.

### 2. What is a closure in JavaScript?

**Answer:**
A **closure** is a function that retains access to its lexical scope, even when the function is executed outside that scope. Closures are useful for data encapsulation and creating private variables.

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const increment = outer();
increment(); // Output: 1
increment(); // Output: 2

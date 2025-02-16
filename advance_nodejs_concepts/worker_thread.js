// Worker Threads in Node.js: Why, When, and How to Use?
// 📌 What are Worker Threads in Node.js?
// Node.js is single-threaded and uses an event loop to handle asynchronous tasks. However, for CPU-intensive tasks like image processing, encryption, and complex calculations, the Worker Threads module allows you to run JavaScript in multiple threads.

// 🧵 Worker Threads create real threads, unlike clustering, which spawns new processes.
// 🏎 Faster execution for CPU-bound tasks.
// 🔄 Share memory between threads using SharedArrayBuffer.
// ✅ Why Use Worker Threads?
// Worker threads are useful when you need to handle:

// CPU-intensive tasks (e.g., cryptography, AI processing).
// Data processing (e.g., parsing large files).
// Background tasks (e.g., scheduled jobs).
// Real-time applications (e.g., video processing).
// 💡 Node.js's event loop struggles with CPU-heavy tasks → Using worker threads allows Node.js to continue handling requests efficiently.



const {parentPort} = require('worker_threads');
  let counter = 0;
for(let i = 0; i < 20000000000; i++){
     counter ++;

}

 parentPort.postMessage(counter);

  



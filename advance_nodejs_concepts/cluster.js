// What is the Cluster Module in Node.js?
// Node.js is single-threaded, meaning it can only use one CPU core at a time. However, modern servers have multiple CPU cores. The Cluster module allows Node.js to fork child processes and utilize multiple cores efficiently.

// ✅ Why Use Clustering?
// Better Performance → Handles more requests per second.
// Multi-core Utilization → Uses all CPU cores, not just one.
// Load Balancing → Distributes requests among worker processes.
// Fault Tolerance → If a worker crashes, another one takes over.



// When to Use Clustering?
// ✅ Use Cluster when:

// Handling high traffic (e.g., APIs, real-time apps).
// CPU-intensive tasks (e.g., data processing).
// Improving performance for web servers.
// ❌ Don’t use Cluster when:

// Your app is lightweight and doesn’t need multiple cores.
// Your app relies on shared state (use Redis/DB for shared data).



// Common Interview Questions on Clustering

// 💡 Basic Questions

// What is the Cluster module in Node.js?
// Why do we use clustering in Node.js?
// How does clustering improve performance?
// 💡 Intermediate Questions
// 4. How does the master-worker model work in clustering?
// 5. What happens if a worker process crashes?
// 6. How do you manage worker processes in a cluster?

// 💡 Advanced Questions
// 7. How do you share state between cluster workers? (Hint: Use Redis, databases, or IPC).
// 8. Can we use cluster with PM2? (Yes, PM2 has built-in clustering).
// 9. What is the difference between cluster and child_process in Node.js?


const cluster = require('cluster');
 const os = require('os').cpus();

 if (cluster.isMaster) {
     console.log(`Master ${process.pid} is running`);
 
     // Fork workers.
     for (let i = 0; i < os.length; i++) {
         console.log(`Forking worker ${i + 1}`);
         cluster.fork();
     }
 
     cluster.on('exit', (worker, code, signal) => {
         console.log(`Worker ${worker.process.pid} died with code ${code} and signal ${signal}`);
         console.log('Starting a new worker');
         cluster.fork();
     });
 } else {
     // Exporting the cluster file for use in other files
     require('./index');
 }
 
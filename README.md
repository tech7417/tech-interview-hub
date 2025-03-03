
# 🚀 Advanced Node.js Concepts

## 📜 Table of Contents

1. 🏭 [Cluster Module](#cluster-module)
2. 🧵 [Worker Threads](#worker-threads)
3. 🔁 [Streams](#streams)
4. ⚠️ [Error Handling](#error-handling)
5. 🔐 [Security Best Practices](#security-best-practices)
6. 🧒 [Child Processes](#child-processes)
7. ⚡ [Optimizing Node.js Performance](#optimizing-nodejs-performance)

---

## 🏭 Cluster Module

### 🤔 What is Clustering?

Node.js runs on a single-threaded event loop, but with the `cluster` module, we can create multiple worker processes that share the same server port, utilizing multi-core CPUs efficiently.

### 📌 When to Use Clustering?

- 🖥️ High CPU-bound applications
- ⏳ Applications that require parallel request processing

### 🛠️ Example:

```javascript
const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end("Hello from Worker " + process.pid);
    }).listen(3000);
}
```

### 🎤 Interview Questions:

- ❓ How does the `cluster` module work in Node.js?
- ❓ What is the difference between `cluster` and `worker_threads`?
- ❓ Can a clustered process share memory?

---

## 🧵 Worker Threads

### 🤔 What are Worker Threads?

Unlike the `cluster` module, `worker_threads` allow true multithreading within a single Node.js process.

### 📌 When to Use?

- 🧮 CPU-intensive operations
- 📊 Large data computations

### 🛠️ Example:

```javascript
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
    const worker = new Worker(__filename);
    worker.on('message', msg => console.log('Message from worker:', msg));
} else {
    parentPort.postMessage('Hello from Worker!');
}
```

### 🎤 Interview Questions:

- ❓ What is the difference between `worker_threads` and `cluster`?
- ❓ When should you use worker threads in a Node.js application?

---

## 🔁 Streams

### 🤔 What are Streams?

Streams handle data chunk by chunk instead of loading everything into memory at once.

### 🏗️ Types of Streams:

- 📖 **Readable Stream** (e.g., `fs.createReadStream`)
- ✍️ **Writable Stream** (e.g., `fs.createWriteStream`)
- 🔄 **Duplex Stream** (e.g., TCP Sockets)
- 🔧 **Transform Stream** (e.g., `zlib.createGzip`)

### 🛠️ Example:

**📖 Readable Stream:**

```javascript
const fs = require('fs');
const readStream = fs.createReadStream('file.txt');
readStream.on('data', chunk => console.log(chunk.toString()));
```

**✍️ Writable Stream:**

```javascript
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Hello, Stream!');
```

**🔧 Transform Stream (Compression):**

```javascript
const zlib = require('zlib');
const fs = require('fs');
const gzip = zlib.createGzip();
fs.createReadStream('input.txt').pipe(gzip).pipe(fs.createWriteStream('output.gz'));
```

### 🎤 Interview Questions:

- ❓ What are the benefits of using Streams in Node.js?
- ❓ How does backpressure work in Streams?

---

## ⚠️ Error Handling

### 🛑 Types of Errors:

1. ⚡ **Operational Errors** (e.g., failed database connection)
2. 🛠️ **Programmer Errors** (e.g., `null` reference errors)

### 🛠️ Custom Error Handling:

```javascript
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

throw new AppError("Not Found", 404);
```

### 🎤 Interview Questions:

- ❓ How do you handle asynchronous errors in Node.js?
- ❓ How does `process.on('uncaughtException')` work?

---

## 🔐 Security Best Practices

1. 🛡️ Use `helmet` for setting security headers:

```javascript
const helmet = require('helmet');
app.use(helmet());
```

2. ✅ Validate user inputs to prevent SQL Injection and XSS.
3. 🚫 Avoid using `eval()` and `exec()`.
4. 🔑 Use environment variables securely.

### 🎤 Interview Questions:

- ❓ How can you prevent CSRF attacks in Node.js?
- ❓ Why is `eval()` dangerous in Node.js?

---

## 🧒 Child Processes

### 🤔 What are Child Processes?

Allows running external scripts or commands in a separate process.

### 🛠️ Example:

```javascript
const { exec } = require('child_process');
exec('ls', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log(stdout);
});
```

### 🎤 Interview Questions:

- ❓ What is the difference between `exec` and `spawn` in Node.js?
- ❓ How do you communicate between the main process and child processes?

---

## ⚡ Optimizing Node.js Performance

1. 🚀 **Use Asynchronous APIs:** Avoid blocking the event loop.
2. 📊 **Optimize Database Queries:** Use indexing and pagination.
3. 🗄️ **Use Caching:** Store frequent data in Redis or memory cache.
4. 📦 **Enable Compression:** Use `zlib` or `gzip` for smaller response payloads.
5. 🌐 **Load Balancing with Clusters:** Utilize multiple CPU cores.

### 🛠️ Example: Caching with Redis

```javascript
const redis = require('redis');
const client = redis.createClient();
client.set("key", "value", 'EX', 3600);
client.get("key", (err, data) => console.log(data));
```

### 🎤 Interview Questions:

- ❓ How does event loop optimization improve performance?
- ❓ How do you prevent memory leaks in Node.js?

---



# 📌 **NestJS Deep Dive: Questions, Answers, and Advanced Concepts**

![NestJS Logo](https://nestjs.com/img/logo_text.svg)

## **📖 Table of Contents**
1. Introduction to NestJS
2. Core Concepts
3. Dependency Injection & Providers
4. Module System (Import, Export, ForwardRef)
5. Lifecycle Hooks
6. Middleware, Guards, and Interceptors
7. Exception Handling
8. Circular Dependencies and Fixes
9. Advanced Request Handling
10. Database Integration with TypeORM
11. Testing Strategies
12. Deployment Best Practices

---

## **1️⃣ Introduction to NestJS**
### ❓ **Q: What is NestJS and why use it?**
✅ **A:** NestJS is a **progressive Node.js framework** for building scalable server-side applications. It uses **TypeScript** by default and follows the **modular architecture** inspired by Angular.

### ❓ **Q: What are the key features of NestJS?**
✅ **A:**
- TypeScript support
- Dependency Injection
- Modular Architecture
- Built-in Middleware, Guards, Pipes, and Interceptors
- Support for WebSockets, GraphQL, and Microservices
- Easy Database Integration
- Scalable and Maintainable Codebase

---

## **2️⃣ Core Concepts**
### ❓ **Q: What are controllers in NestJS?**
✅ **A:** Controllers handle incoming HTTP requests and return responses.

```ts
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.findAll();
  }
}
```

### ❓ **Q: What are services in NestJS?**
✅ **A:** Services contain **business logic** and can be injected into controllers.

```ts
@Injectable()
export class UserService {
  findAll() {
    return [{ id: 1, name: 'John Doe' }];
  }
}
```

---

## **3️⃣ Dependency Injection & Providers**
### ❓ **Q: What is Dependency Injection (DI) in NestJS?**
✅ **A:** Dependency Injection is a **design pattern** where NestJS **automatically provides instances** of dependencies to classes that require them.

### ❓ **Q: What are providers in NestJS?**
✅ **A:** Providers are **classes that can be injected** into other components using DI.

```ts
@Injectable()
export class UserService {}
```

---

## **4️⃣ Module System (Import, Export, ForwardRef)**
### ❓ **Q: What is a module in NestJS?**
✅ **A:** Modules are used to **group related components** (controllers, providers, etc.) together.

```ts
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
```

### ❓ **Q: How do import and export work in NestJS modules?**
✅ **A:**
- If a module **needs a service from another module**, it **must import that module**.
- The other module must **export the service** so that it can be used.

```ts
@Module({
  imports: [UserModule],
  providers: [TaskService],
})
export class TaskModule {}
```

---

## **5️⃣ Lifecycle Hooks**
### ❓ **Q: What are NestJS lifecycle hooks?**
✅ **A:** Lifecycle hooks allow developers to execute logic at **specific points** in a service's lifecycle.

| Hook | Description |
|------|------------|
| `onModuleInit()` | Called when a module is initialized |
| `onModuleDestroy()` | Called when a module is destroyed |
| `beforeApplicationShutdown()` | Called before the app shuts down |

Example:
```ts
@Injectable()
export class UserService implements OnModuleInit {
  onModuleInit() {
    console.log('UserService initialized');
  }
}
```
With spec files (for testing)
sh
Copy
Edit
nest g module users
nest g service users
nest g controller users


without spec


nest g module users --no-spec
nest g service users --no-spec
nest g controller users --no-spec


---

This README provides a **comprehensive deep dive into NestJS**, covering **fundamental concepts, dependency injection, module systems, lifecycle hooks, and more**. 🚀 Let me know if you want further enhancements or additional sections!



## 🎯 Conclusion

This document covered advanced Node.js topics, including 🏭 clustering, 🧵 worker threads, 🔁 streams, ⚠️ error handling, 🔐 security, and ⚡ optimization techniques. Mastering these concepts will significantly enhance your Node.js development skills. 🚀


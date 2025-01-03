# Top 100 Interview Questions for MongoDB and MySQL

## Table of Contents
- [Top 100 Interview Questions for MongoDB and MySQL](#top-100-interview-questions-for-mongodb-and-mysql)
  - [Table of Contents](#table-of-contents)
  - [MongoDB Questions](#mongodb-questions)
    - [Basic MongoDB Questions](#basic-mongodb-questions)
    - [Intermediate MongoDB Questions](#intermediate-mongodb-questions)
    - [Advanced MongoDB Questions](#advanced-mongodb-questions)
  - [MySQL Questions](#mysql-questions)
    - [Basic MySQL Questions](#basic-mysql-questions)
    - [Intermediate MySQL Questions](#intermediate-mysql-questions)
  - [Theoretical Questions](#theoretical-questions)
- [SQL and MongoDB Query Guide](#sql-and-mongodb-query-guide)
  - [Table of Contents](#table-of-contents-1)
  - [SQL vs MongoDB Queries](#sql-vs-mongodb-queries)
    - [Terminology Comparison](#terminology-comparison)
    - [Query Comparison](#query-comparison)
  - [Basic SQL Queries](#basic-sql-queries)
  - [Intermediate SQL Queries](#intermediate-sql-queries)
  - [Advanced SQL Queries](#advanced-sql-queries)
  - [MongoDB Queries](#mongodb-queries)
  - [Aggregation Queries](#aggregation-queries)
  - [Theoretical Questions](#theoretical-questions-1)
  - [Interview Questions](#interview-questions)
  - [Conclusion](#conclusion)

## MongoDB Questions

### Basic MongoDB Questions

1. What is MongoDB?
2. What are the key features of MongoDB?
3. Explain the difference between MongoDB and a relational database.
4. What is a document in MongoDB?
5. What is a collection in MongoDB?
6. How do you create a database in MongoDB?
7. How do you insert a document in MongoDB?
8. How do you retrieve all documents from a collection in MongoDB?
9. What is the purpose of the `_id` field in MongoDB?
10. How do you update a document in MongoDB?
11. How do you delete a document in MongoDB?
12. What is the use of the `find` method in MongoDB?
13. Explain the concept of indexing in MongoDB.
14. How do you create an index in MongoDB?
15. What are the different types of indexes in MongoDB?
16. How does the aggregation framework in MongoDB work?
17. How do you use the `$match` stage in an aggregation pipeline?
18. What is the `$group` stage in an aggregation pipeline?
19. How do you perform a text search in MongoDB?
20. What is a replica set in MongoDB?

### Intermediate MongoDB Questions

21. Explain the concept of sharding in MongoDB.
22. What is the purpose of the `mongod` process in MongoDB?
23. How do you perform a backup and restore in MongoDB?
24. What are MongoDB's data types?
25. Describe the use of `$lookup` in MongoDB.
26. How do you handle schema design in MongoDB?
27. What is the difference between `update` and `updateOne` in MongoDB?
28. How do you perform pagination in MongoDB?
29. Explain the concept of geospatial indexes in MongoDB.
30. How do you handle transactions in MongoDB?
31. What is the use of the `$unwind` stage in an aggregation pipeline?
32. How do you use the `$addFields` stage in an aggregation pipeline?
33. Explain the concept of capped collections in MongoDB.
34. How do you create a capped collection in MongoDB?
35. What is GridFS in MongoDB?
36. How do you use GridFS to store and retrieve files in MongoDB?
37. What are the advantages and disadvantages of using embedded documents in MongoDB?
38. How do you use the `$project` stage in an aggregation pipeline?
39. Explain the concept of reference relationships in MongoDB.
40. How do you perform a bulk write operation in MongoDB?

### Advanced MongoDB Questions

41. How do you optimize a MongoDB query?
42. What is the use of the `explain` method in MongoDB?
43. How do you handle concurrency in MongoDB?
44. What is a time-to-live (TTL) index in MongoDB?
45. How do you create and use a TTL index in MongoDB?
46. Explain the concept of change streams in MongoDB.
47. How do you use change streams to track changes in a collection?
48. How do you monitor the performance of a MongoDB instance?
49. What are the common causes of performance issues in MongoDB?
50. How do you perform query profiling in MongoDB?
51. What is the WiredTiger storage engine in MongoDB?
52. How do you configure and use the WiredTiger storage engine?
53. Explain the concept of journaling in MongoDB.
54. How do you ensure data consistency in a distributed MongoDB environment?
55. What are the best practices for schema design in MongoDB?
56. How do you use the `$merge` stage in an aggregation pipeline?
57. Explain the concept of MongoDB Atlas.
58. How do you deploy and manage a MongoDB instance on MongoDB Atlas?
59. What are the security features available in MongoDB?
60. How do you implement authentication and authorization in MongoDB?

## MySQL Questions

### Basic MySQL Questions

61. What is MySQL?
62. What are the key features of MySQL?
63. Explain the difference between MySQL and other relational databases.
64. How do you create a database in MySQL?
65. How do you create a table in MySQL?
66. How do you insert data into a table in MySQL?
67. How do you retrieve data from a table in MySQL?
68. What is the purpose of the `PRIMARY KEY` constraint in MySQL?
69. How do you update data in a table in MySQL?
70. How do you delete data from a table in MySQL?
71. What is the use of the `SELECT` statement in MySQL?
72. Explain the concept of indexing in MySQL.
73. How do you create an index in MySQL?
74. What are the different types of indexes in MySQL?
75. How do you use the `JOIN` clause in MySQL?
76. What is the difference between `INNER JOIN` and `LEFT JOIN` in MySQL?
77. How do you perform a group by operation in MySQL?
78. What is the use of the `HAVING` clause in MySQL?
79. How do you perform a subquery in MySQL?
80. What are the different storage engines available in MySQL?

### Intermediate MySQL Questions

81. Explain the concept of transactions in MySQL.
82. How do you handle transactions in MySQL?
83. What is the purpose of the `COMMIT` and `ROLLBACK` statements in MySQL?
84. How do you perform a backup and restore in MySQL?
85. What are MySQL's data types?
86. How do you handle schema design in MySQL?
87. What is the use of the `EXPLAIN` statement in MySQL?
88. How do you optimize a MySQL query?
89. How do you use the `LIMIT` clause in MySQL?
90. What is the difference between `CHAR` and `VARCHAR` in MySQL?
91. How do you handle stored procedures in MySQL?
92. What is the use of triggers in MySQL?
93. How do you create and use a trigger in MySQL?
94. Explain the concept of views in MySQL.
95. How do you create and use a view in MySQL?
96. What are the advantages and disadvantages of using views in MySQL?
97. How do you perform a full-text search in MySQL?
98. What is the use of the `UNION` clause in MySQL?
99. How do you perform a join operation on multiple tables in MySQL?
100. What are the best practices for database security in MySQL?

## Theoretical Questions

1. **What is a Collection in MongoDB and a Table in SQL?**
    - A **Collection** in MongoDB is a grouping of MongoDB documents. It is the equivalent of a table in relational databases.
    - A **Table** in SQL is a collection of rows and columns where data is stored. Each row represents a unique record, and each column represents a field in the record.

2. **What is a Primary Key in SQL and _id in MongoDB?**
    - A **Primary Key** in SQL is a unique identifier for each record in a table. It ensures that each record can be uniquely identified.
    - **_id** in MongoDB is a unique identifier for each document in a collection. MongoDB automatically creates an _id field for each document if it is not provided.

3. **What are Joins in SQL and $lookup in MongoDB?**
    - **Joins** in SQL are used to combine rows from two or more tables based on a related column between them.
    - **$lookup** in MongoDB is an aggregation stage that performs a left outer join to another collection in the same database and adds the joined documents to the output.

4. **What are Indexes in SQL and MongoDB?**
    - **Indexes** in SQL and MongoDB are special data structures that improve the speed of query operations. They work by providing efficient access to records and reducing the need to scan the entire table or collection.

5. **What is a View in SQL?**
    - A **View** in SQL is a virtual table based on the result set of an SQL query. It can include rows and columns from one or more tables and does not store data physically.



# SQL and MongoDB Query Guide

## Table of Contents
- [SQL vs MongoDB Queries](#sql-vs-mongodb-queries)
- [Basic SQL Queries](#basic-sql-queries)
- [Intermediate SQL Queries](#intermediate-sql-queries)
- [Advanced SQL Queries](#advanced-sql-queries)
- [MongoDB Queries](#mongodb-queries)
- [Aggregation Queries](#aggregation-queries)
- [Theoretical Questions](#theoretical-questions)
- [Interview Questions](#interview-questions)

## SQL vs MongoDB Queries

### Terminology Comparison

| Concept      | SQL               | MongoDB          |
|--------------|-------------------|------------------|
| Database     | Database          | Database         |
| Table        | Table             | Collection       |
| Row          | Row/Record        | Document         |
| Column       | Column/Field      | Field            |
| Primary Key  | Primary Key       | _id              |
| Joins        | JOIN              | $lookup          |
| Index        | Index             | Index            |
| Aggregate    | GROUP BY          | Aggregation      |

### Query Comparison

1. **Find All Records**

    **SQL:**
    ```sql
    SELECT * FROM table_name;
    ```

    **MongoDB:**
    ```javascript
    db.collection.find({});
    ```

2. **Find Records with a Condition**

    **SQL:**
    ```sql
    SELECT * FROM table_name WHERE field_name = 'value';
    ```

    **MongoDB:**
    ```javascript
    db.collection.find({ field_name: 'value' });
    ```

3. **Insert a Record**

    **SQL:**
    ```sql
    INSERT INTO table_name (column1, column2) VALUES ('value1', 'value2');
    ```

    **MongoDB:**
    ```javascript
    db.collection.insertOne({ field1: 'value1', field2: 'value2' });
    ```

4. **Update a Record**

    **SQL:**
    ```sql
    UPDATE table_name SET column1 = 'new_value' WHERE column2 = 'value';
    ```

    **MongoDB:**
    ```javascript
    db.collection.updateOne({ field2: 'value' }, { $set: { field1: 'new_value' } });
    ```

5. **Delete a Record**

    **SQL:**
    ```sql
    DELETE FROM table_name WHERE column1 = 'value';
    ```

    **MongoDB:**
    ```javascript
    db.collection.deleteOne({ field1: 'value' });
    ```

6. **Aggregate Functions**

    **SQL:**
    ```sql
    SELECT column, COUNT(*) FROM table_name GROUP BY column;
    ```

    **MongoDB:**
    ```javascript
    db.collection.aggregate([
        { $group: { _id: "$column", count: { $sum: 1 } } }
    ]);
    ```

## Basic SQL Queries

1. **Find All Records**

    ```sql
    SELECT * FROM employees;
    ```
    **Explanation**: This query retrieves all records from the `employees` table.

2. **Find Records with a Specific Field Value**

    ```sql
    SELECT * FROM employees WHERE department = 'Sales';
    ```
    **Explanation**: This query retrieves records from the `employees` table where the department is 'Sales'.

3. **Projection (Select Specific Fields)**

    ```sql
    SELECT name, age FROM employees WHERE department = 'Sales';
    ```
    **Explanation**: This query retrieves the `name` and `age` fields from the `employees` table where the department is 'Sales'.

4. **Query with Comparison Operators**

    ```sql
    SELECT * FROM employees WHERE age > 30;
    ```
    **Explanation**: This query retrieves records from the `employees` table where the age is greater than 30.

5. **Query with Logical Operators**

    ```sql
    SELECT * FROM employees WHERE age > 30 AND department = 'Sales';
    ```
    **Explanation**: This query retrieves records from the `employees` table where the age is greater than 30 and the department is 'Sales'.

## Intermediate SQL Queries

6. **Insert a Record**

    ```sql
    INSERT INTO employees (name, age, department) VALUES ('John', 30, 'Sales');
    ```
    **Explanation**: This query inserts a new record into the `employees` table.

7. **Update a Record**

    ```sql
    UPDATE employees SET age = 31 WHERE name = 'John';
    ```
    **Explanation**: This query updates the age field to 31 for the record with the name 'John'.

8. **Delete a Record**

    ```sql
    DELETE FROM employees WHERE name = 'John';
    ```
    **Explanation**: This query deletes the record from the `employees` table where the name is 'John'.

9. **Join Tables**

    ```sql
    SELECT employees.name, departments.department_name
    FROM employees
    JOIN departments ON employees.department_id = departments.id;
    ```
    **Explanation**: This query joins the `employees` and `departments` tables on the `department_id` field and retrieves the employee names and department names.

10. **Sorting Results**

    ```sql
    SELECT * FROM employees ORDER BY age ASC;
    ```
    **Explanation**: This query retrieves all records from the `employees` table and sorts them by the age field in ascending order.

## Advanced SQL Queries

11. **Creating an Index**

    ```sql
    CREATE INDEX idx_name ON employees (name);
    ```
    **Explanation**: This query creates an index on the `name` field of the `employees` table to improve query performance.

12. **Using Subqueries**

    ```sql
    SELECT name FROM employees WHERE age > (SELECT AVG(age) FROM employees);
    ```
    **Explanation**: This query retrieves the names of employees whose age is greater than the average age of all employees.

13. **Window Functions**

    ```sql
    SELECT name, department, salary, 
           RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rank
    FROM employees;
    ```
    **Explanation**: This query retrieves the name, department, salary, and rank of employees within each department, ordered by salary in descending order.

14. **Common Table Expressions (CTEs)**

    ```sql
    WITH DepartmentSales AS (
        SELECT department_id, SUM(sales) as total_sales
        FROM sales
        GROUP BY department_id
    )
    SELECT departments.name, DepartmentSales.total_sales
    FROM departments
    JOIN DepartmentSales ON departments.id = DepartmentSales.department_id;
    ```
    **Explanation**: This query uses a Common Table Expression (CTE) to calculate total sales by department and then joins it with the `departments` table to display department names and their total sales.

15. **Recursive Queries**

    ```sql
    WITH RECURSIVE EmployeeHierarchy AS (
        SELECT id, name, manager_id
        FROM employees
        WHERE manager_id IS NULL
        UNION ALL
        SELECT e.id, e.name, e.manager_id
        FROM employees e
        INNER JOIN EmployeeHierarchy eh ON e.manager_id = eh.id
    )
    SELECT * FROM EmployeeHierarchy;
    ```
    **Explanation**: This query uses a recursive Common Table Expression (CTE) to retrieve an employee hierarchy starting from employees with no manager and recursively finding their subordinates.

## MongoDB Queries

1. **Find All Documents in a Collection**

    ```javascript
    db.collection.find({})
    ```
    **Explanation**: This query retrieves all documents from the specified collection.

2. **Find Documents with a Specific Field Value**

    ```javascript
    db.collection.find({ field: value })
    ```
    **Explanation**: This query retrieves documents where the specified field matches the given value.

3. **Projection (Select Specific Fields)**

    ```javascript
    db.collection.find({ field: value }, { field1: 1, field2: 1 })
    ```
    **Explanation**: This query retrieves documents where the specified field matches the given value and only returns the specified fields.

4. **Query with Comparison Operators**

    ```javascript
    db.collection.find({ age: { $gt: 25 } })
    ```
    **Explanation**: This query retrieves documents where the age field is greater than 25. `$gt` is a comparison operator.

5. **Query with Logical Operators**

    ```javascript
    db.collection.find({ $and: [{ age: { $gt: 25 } }, { status: 'active' }] })
    ```
    **Explanation**: This query retrieves documents where the age is greater than 25 and the status is 'active'. `$and` is a logical operator.

## Aggregation Queries

1. **$match**: Filters the documents to pass only those that match the specified condition(s).

    ```javascript
    db.collection.aggregate([
        { $match: { status: "active" } }
    ])
    ```
    **Explanation**: This stage filters the documents to include only those with status 'active'.

2. **$group**: Groups input documents by a specified identifier expression and applies the accumulator expressions.

    ```javascript
    db.collection.aggregate([
        { $group: { _id: "$status", count: { $sum: 1 } } }
    ])
    ```
    **Explanation**: This stage groups the documents by the status field and counts the number of documents in each group.

3. **$project**: Passes along the documents with only the specified fields.

    ```javascript
    db.collection.aggregate([
        { $project: { name: 1, age: 1, status: 1 } }
    ])
    ```
    **Explanation**: This stage includes only the name, age, and status fields in the output documents.

4. **$sort**: Sorts all input documents and returns them in sorted order.

    ```javascript
    db.collection.aggregate([
        { $sort: { age: -1 } }
    ])
    ```
    **Explanation**: This stage sorts the documents by the age field in descending order.

5. **$limit**: Limits the number of documents passed to the next stage in the pipeline.

    ```javascript
    db.collection.aggregate([
        { $limit: 5 }
    ])
    ```
    **Explanation**: This stage limits the output to the first 5 documents.

6. **$lookup**: Performs a left outer join to another collection in the same database.

    ```javascript
    db.orders.aggregate([
        {
            $lookup: {
                from: "customers",
                localField: "customerId",
                foreignField: "_id",
                as: "customerDetails"
            }
        }
    ])
    ```
    **Explanation**: This stage performs a join to the customers collection and adds customer details to the orders collection.

## Theoretical Questions

1. **What is a Collection in MongoDB and a Table in SQL?**

    **Answer**: 
    - A **Collection** in MongoDB is a grouping of MongoDB documents. It is the equivalent of a table in relational databases.
    - A **Table** in SQL is a collection of rows and columns where data is stored. Each row represents a unique record, and each column represents a field in the record.

2. **What is a Primary Key in SQL and _id in MongoDB?**

    **Answer**: 
    - A **Primary Key** in SQL is a unique identifier for each record in a table. It ensures that each record can be uniquely identified.
    - **_id** in MongoDB is a unique identifier for each document in a collection. MongoDB automatically creates an _id field for each document if it is not provided.

3. **What are Joins in SQL and $lookup in MongoDB?**

    **Answer**: 
    - **Joins** in SQL are used to combine rows from two or more tables based on a related column between them.
    - **$lookup** in MongoDB is an aggregation stage that performs a left outer join to another collection in the same database and adds the joined documents to the output.

4. **What are Indexes in SQL and MongoDB?**

    **Answer**: 
    - **Indexes** in SQL and MongoDB are special data structures that improve the speed of query operations. They work by providing efficient access to records and reducing the need to scan the entire table or collection.

5. **What is a View in SQL?**

    **Answer**: 
    - A **View** in SQL is a virtual table based on the result set of an SQL query. It can include rows and columns from one or more tables and does not store data physically.

## Interview Questions

1. **Explain the difference between `find` and `aggregate` in MongoDB.**

    **Answer**: `find` is used for simple queries and retrieval of documents from a collection, while `aggregate` is used for more complex data processing and transformation using an aggregation pipeline.

2. **How does MongoDB handle indexing, and why is it important?**

    **Answer**: MongoDB uses indexing to improve query performance by allowing the database to quickly locate and access the data. Indexes are created on fields that are frequently queried, reducing the need to scan the entire collection.

3. **What are the benefits and drawbacks of using embedded documents versus references in MongoDB?**

    **Answer**: Embedded documents provide faster read operations and atomic updates since related data is stored within a single document. However, they can lead to larger document sizes and duplication of data. References, on the other hand, normalize data and reduce duplication, but require additional queries to retrieve related data, potentially impacting performance.

4. **Describe a use case where you would use MongoDB's `text` index and `text` search.**

    **Answer**: A use case for `text` index and `text` search is implementing a search functionality in an e-commerce application, where users can search for products by keywords in the product descriptions.

5. **How would you optimize a MongoDB query that is performing slowly?**

    **Answer**: To optimize a slow MongoDB query, you can:
    - Ensure proper indexing on the fields being queried.
    - Analyze query performance using `explain` to identify bottlenecks.
    - Refactor the query to reduce complexity.
    - Use aggregation pipelines for complex data processing.
    - Optimize schema design for read-heavy or write-heavy workloads.

6. **What is the difference between SQL and NoSQL databases?**

    **Answer**: SQL databases are relational and use structured query language (SQL) for defining and manipulating data. They are table-based and are best suited for complex queries and transactions. NoSQL databases are non-relational and can be document-based, key-value pairs, wide-column stores, or graph databases. They are more flexible in terms of schema design and are better suited for large-scale data storage and real-time web applications.

## Conclusion

This guide covers a range of SQL and MongoDB queries from basic to advanced, along with explanations and interview questions to help you prepare for senior-level positions. Understanding these concepts and practicing these queries will strengthen your database skills and help you excel in interviews.
---
layout: answered-question
title: "AWS A Company Is Using A SQL Database Question"
meta: "AWS Exam Question: A company using Amazon RDS Single-AZ for movie data needs a solution to improve performance during script execution with minimal overhead. Answer: AWS Lambda."
slug: "q-42-sql-database-store-movie-data-AWS"
certification: "AWS Solution Architect Associate Exam"
---


 A company utilizes a SQL database for publicly accessible movie data, hosted on an Amazon RDS Single-AZ DB instance. A script executes queries at unpredictable times throughout the day to track the number of new movies added to the database, and it needs to provide a final tally during business hours. However, the development team has observed that database performance suffers during the script's execution, impacting their development tasks. A solutions architect is tasked with proposing a solution that minimizes operational overhead while addressing this performance issue. What would be the most effective recommendation?
{: .query}

- [ ] A. Change the DB instance to operate as a Multi-AZ deployment.
{: .option}
- [x] B. Set up a read replica of the database and adjust the script to query exclusively from this read replica.
{: .option}
- [ ] C. Direct the development team to perform a manual export of the database entries at the conclusion of each day.
{: .option}
- [ ] D. Utilize Amazon ElastiCache to store cached results for the frequently executed queries that the script performs on the database.
{: .option}

B
{: .answer}

The correct answer to the problem described is **B. Set up a read replica of the database and adjust the script to query exclusively from this read replica.** Here’s a detailed explanation of why this is the best solution and an analysis of the incorrect options.

### Why Option B is Correct

1. **Performance Improvement**: A read replica allows you to offload read traffic from the primary database instance. Since the script runs queries to count new movies, it can use the read replica without impacting the performance of the primary instance, which is needed for development tasks.

2. **Low Operational Overhead**: Setting up a read replica in Amazon RDS is a straightforward process and can be accomplished with minimal configuration. Once the read replica is established, the primary instance automatically replicates data to the read replica, requiring little maintenance from the development team.

3. **Scalability**: If the read load increases in the future, additional read replicas can be created easily, ensuring that the solution can grow with the needs of the application.

4. **Availability**: Although the read replica is not a replacement for a Multi-AZ deployment in terms of failover capabilities, it does provide a level of redundancy for read operations. If the primary instance is under heavy load, the read replica will still be available for read queries.

### Why the Other Options are Incorrect

**A. Change the DB instance to operate as a Multi-AZ deployment.**
- **Increased Costs**: Multi-AZ deployments are primarily for high availability and failover rather than performance improvement for read-heavy workloads. They create a synchronous standby instance in another Availability Zone, which does not directly alleviate the read load on the primary instance and can increase costs.
- **Operational Overhead**: While Multi-AZ provides automatic failover, it does not provide a dedicated instance for read operations. This means that it would not effectively solve the performance issues during development tasks.

**C. Direct the development team to perform a manual export of the database entries at the conclusion of each day.**
- **Manual Process**: This approach introduces significant manual overhead and is not scalable. It requires human intervention and could lead to errors or omissions if not performed consistently.
- **Data Freshness**: Manual exports would not provide real-time data for the script, which would need to run at random intervals throughout the day. This approach would lead to stale data being used for reporting.

**D. Utilize Amazon ElastiCache to store cached results for the frequently executed queries that the script performs on the database.**
- **Complexity**: While caching can improve performance, implementing ElastiCache introduces additional complexity. You would need to manage cache invalidation and ensure that the cached data is fresh and consistent with the database.
- **Not a Direct Solution**: This option does not address the core issue of the read load affecting the primary database. It may help with performance for specific queries but does not alleviate the overall pressure on the primary instance.

### Technical Details for AWS Solution Architect Associate Exam

When preparing for the AWS Solution Architect Associate Exam, it is beneficial to understand the following concepts:

1. **AWS RDS Read Replicas**: Understand how read replicas work, their limitations (e.g., eventual consistency), and scenarios where they can be beneficial for scaling read workloads.

2. **Multi-AZ Deployments**: Know the differences between Multi-AZ and read replicas, particularly in relation to failover and high availability versus scalability for read operations.

3. **Caching Strategies**: Familiarize yourself with caching strategies using ElastiCache, including Redis and Memcached, and when to use caching effectively to reduce database load.

4. **Database Performance Diagnostics**: Be aware of how to monitor database performance using Amazon CloudWatch and RDS Performance Insights to understand the load on your instances and when to scale.

5. **Operational Overhead**: Recognize the importance of minimizing operational overhead and how certain solutions require ongoing management versus being more self-sufficient.

By understanding these topics, candidates can make informed decisions in exam scenarios similar to the one presented.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is using a SQL database to store movie data that is publicly accessible. The database runs on an Amazon RDS Single-AZ DB instance. A script runs queries at random intervals each day to record the number of new movies that have been added to the database. The script must report a final total during business hours.
The company's development team notices that the database performance is inadequate for development tasks when the script is running. A solutions architect must recommend a solution to resolve this issue.
Which solution will meet this requirement with the LEAST operational overhead?
{: .original-query}

### Original Questions

- [ ] A. Modify the DB instance to be a Multi-AZ deployment.
{: .originaloption}
- [ ] B. Create a read replica of the database. Configure the script to query only the read replica.
{: .originaloption}
- [ ] C. Instruct the development team to manually export the entries in the database at the end of each day.
{: .originaloption}
- [ ] D. Use Amazon ElastiCache to cache the common queries that the script runs against the database.
{: .originaloption}


### Comments


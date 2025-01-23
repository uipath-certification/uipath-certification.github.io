---
layout: answered-question
title: "AWS Company Runs An On-Premises Application Question"
meta: "AWS Exam Question: A company migrates an on-premises MySQL database to AWS for better elasticity and availability. What solution alleviates latency? Answer: RDS, EC2."
slug: "q-27-migrating-on-premises-application-AWS"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates an on-premises application backed by a MySQL database and is in the process of migrating it to AWS to enhance the application's elasticity and availability. Currently, the architecture experiences significant read activity on the database during normal operations. Every four hours, the development team conducts a full export of the production database to populate the staging environment, which leads to unacceptable latency for users during this time. As a result, the development team cannot utilize the staging environment until the export process is finished. 

A solutions architect is tasked with recommending a new architecture that not only addresses the application latency issue but also allows the development team to work in the staging environment without interruptions. What solution would satisfy these requirements?
{: .query}

- [ ] A. For production, utilize Amazon Aurora MySQL with Multi-AZ Aurora Replicas. To fill the staging database, set up a backup and restore procedure that employs the mysqldump tool.
{: .option}
- [x] B. For production, utilize Amazon Aurora MySQL with Multi-AZ Aurora Replicas. Implement database cloning to generate the staging database as needed.
{: .option}
- [ ] C. For production, implement Amazon RDS for MySQL with a Multi-AZ setup and utilize read replicas. Reserve the standby instance for the staging database.
{: .option}
- [ ] D. For production, utilize Amazon RDS for MySQL with a Multi-AZ setup and read replicas. To fill the staging database, establish a backup and restore procedure utilizing the mysqldump tool.
{: .option}

B
{: .answer}

The correct choice for this scenario is **B. For production, utilize Amazon Aurora MySQL with Multi-AZ Aurora Replicas. Implement database cloning to generate the staging database as needed.**

### Explanation of the Correct Answer (B)

1. **Amazon Aurora MySQL**: Aurora is a fully managed relational database service that is compatible with MySQL. It offers better performance and availability than standard MySQL on RDS. It is designed for higher throughput and lower latency, which helps to alleviate the application latency issues during peak read times.

2. **Multi-AZ Aurora Replicas**: This feature helps to improve availability and read scalability. In a Multi-AZ deployment, data is automatically replicated across multiple Availability Zones, which provides fault tolerance. The read replicas can handle read traffic, reducing the load on the primary database and improving performance during peak usage.

3. **Database Cloning**: Aurora supports fast database cloning, which allows you to create copies of your database with minimal performance impact on the primary database. This means that the development team can create a staging environment without waiting for a full export/import process. The cloning process is efficient and allows immediate access to the staging environment, meeting the requirement for the development team to work without delay.

### Why the Other Options Are Incorrect

**A. For production, utilize Amazon Aurora MySQL with Multi-AZ Aurora Replicas. To fill the staging database, set up a backup and restore procedure that employs the mysqldump tool.**

- **Backup and Restore Latency**: Using `mysqldump` for backup and restore can be a time-consuming process, especially for large databases. This can lead to significant application latency during the export period, which does not resolve the issue of unacceptable latency during the staging database population.

**C. For production, implement Amazon RDS for MySQL with a Multi-AZ setup and utilize read replicas. Reserve the standby instance for the staging database.**

- **Standby Instance Limitation**: In this option, the standby instance is typically not used for read traffic; it is mainly for failover purposes. While read replicas can be used for improving read scalability, reserving an instance for staging does not address the need for a quick and efficient way to populate the staging database without impacting production performance.

**D. For production, utilize Amazon RDS for MySQL with a Multi-AZ setup and read replicas. To fill the staging database, establish a backup and restore procedure utilizing the mysqldump tool.**

- **Similar Issues as Option A**: This option also suffers from the same drawbacks as Option A, where using `mysqldump` for backup and restore can lead to application latency issues. Moreover, RDS for MySQL does not offer the same cloning capabilities that Aurora does, making it less efficient for quickly creating a staging environment.

### Technical Details for AWS Solutions Architect Associate Exam

1. **Amazon Aurora Features**: Understand the benefits of using Amazon Aurora, including its high availability, durability, and fast performance. Be familiar with its architecture, including the separation of storage and compute, which allows for scaling independently.

2. **Cloning**: Be aware of how Aurora supports fast, space-efficient database cloning, which can be created in seconds and does not impact the performance of the source database. This is particularly useful for staging environments.

3. **Multi-AZ and Read Replicas**: Know the differences between Multi-AZ deployments (for high availability) and read replicas (for read scalability). Multi-AZ uses synchronous replication for failover, while read replicas can be used for offloading read traffic from the primary instance.

4. **Backup Strategies**: Understand the different backup strategies available in AWS services, including automated backups and manual snapshots, and how they can impact performance.

By understanding these concepts, candidates can effectively answer similar questions in the AWS Solutions Architect Associate Exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company runs an on-premises application that is powered by a MySQL database. The company is migrating the application to AWS to increase the application's elasticity and availability.
The current architecture shows heavy read activity on the database during times of normal operation. Every 4 hours, the company's development team pulls a full export of the production database to populate a database in the staging environment. During this period, users experience unacceptable application latency. The development team is unable to use the staging environment until the procedure completes.
A solutions architect must recommend replacement architecture that alleviates the application latency issue. The replacement architecture also must give the development team the ability to continue using the staging environment without delay.
Which solution meets these requirements?
{: .original-query}

### Original Questions

- [ ] A. Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.
{: .originaloption}
- [ ] B. Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Use database cloning to create the staging database on-demand.
{: .originaloption}
- [ ] C. Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Use the standby instance for the staging database.
{: .originaloption}
- [ ] D. Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.
{: .originaloption}


### Comments

--- 
The optimal solution involves utilizing Amazon Aurora MySQL with Multi-AZ Aurora Replicas for the production environment, combined with the implementation of database cloning to create the staging database as needed.

This approach effectively addresses the application latency issue by allowing the production database to handle heavy read operations efficiently. Additionally, it enables the development team to access and utilize the staging environment without interruptions, thereby maintaining productivity. The use of Aurora’s architecture enhances the application's elasticity and availability, ensuring that performance requirements are met during peak operational periods.

Consequently, Options A, C, and D are not advisable.
{: .comment}
--- 
Option A: Let’s harness the power of Amazon Aurora MySQL with Multi-AZ Aurora Replicas for our production needs! 🚀 However, attempting to fill the staging database using a backup and restore process with the mysqldump tool is like trying to fit a square peg in a round hole. Why? Because taking a full export of the production database can lead to some serious application latency—nobody wants their app moving at a snail’s pace! 🐌

Option C: For production, let’s go with Amazon RDS for MySQL, featuring a Multi-AZ setup and read replicas—sounds fancy, right? 😎 But here’s the catch: using the standby instance for the staging database is a recipe for disaster! The standby is meant for failover during production hiccups, not for letting our development team play in the staging environment. So, unfortunately, it doesn’t help them keep the fun going without interruptions. 🎢 

In summary, let’s opt for solutions that keep our users happy and our developers dancing in the staging environment! 💃
{: .comment}
--- 
Option D: Leverage Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for your production environment. While the idea of filling the staging database through a backup and restore process using the mysqldump utility sounds appealing, it’s not the most efficient choice. Why? Because performing a full export of the production database can lead to frustrating application latency that no one wants to deal with. It’s akin to trying to enjoy a refreshing swim while someone keeps draining the pool. Instead, consider approaches that enable your development team to work seamlessly without interrupting the experience for your users.
{: .comment}
--- 
Absolutely! The second option is indeed the most suitable solution.

1) The company's goal of achieving "elasticity and availability" strongly suggests a preference for Aurora, making the RDS for MySQL options less favorable in this scenario.
2) According to AWS documentation, "Aurora cloning is particularly effective for rapidly establishing test environments using production data, all while minimizing the risk of data corruption." This feature empowers the development team to create a staging database quickly and efficiently, ensuring that they can continue their work without interruption. 

This approach not only addresses the latency issues but also enhances the overall efficiency of the development process.
{: .comment}
--- 
Amazon Aurora MySQL offers a delightful advantage over RDS when it comes to creating database clones. Its cloning feature is remarkably speedy, allowing you to generate a clone of a database in no time at all! Even better, you can create additional clones while working on your existing one. This means the development team can merrily continue their tasks without a hitch during the cloning process. It's a win-win situation! 🌟 

For more details on this fantastic feature, check out the [AWS blog post on fast database cloning](https://aws.amazon.com/blogs/aws/amazon-aurora-fast-database-cloning/).
{: .comment}

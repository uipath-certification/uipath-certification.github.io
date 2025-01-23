---
layout: answered-question
title: "AWS A Company Maintains A Searchable Repository Question"
meta: "AWS Exam Question: A company struggles with insert performance on its Amazon RDS for MySQL database. What solution addresses this performance issue? Answer: Amazon Aurora."
slug: "q-54-searchable-repository-database-RDS"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates a searchable repository of items on its website, utilizing an Amazon RDS for MySQL database that holds over 10 million rows and has 2 TB of General Purpose SSD storage. With millions of updates occurring daily through the website, the company has observed that certain insert operations are taking 10 seconds or more to complete. Upon investigation, it has been concluded that the performance of the database storage is to blame. What solution can be implemented to resolve this performance issue?
{: .query}

- [x] A. Switch the storage type to Provisioned IOPS SSD.
{: .option}
- [ ] B. Switch the database instance to a memory-optimized instance class.
{: .option}
- [ ] C. Modify the DB instance to utilize a burstable performance instance class.
{: .option}
- [ ] D. Activate Multi-AZ RDS read replicas utilizing MySQL's built-in asynchronous replication.
{: .option}

A
{: .answer}

To address the performance issue of slow insert operations in an Amazon RDS for MySQL database, the correct solution is **A. Switch the storage type to Provisioned IOPS SSD**. 

### Explanation of the Correct Answer:

**A. Switch the storage type to Provisioned IOPS SSD.**

- **Provisioned IOPS SSD (io1 or io2)** storage is designed for workloads that require high input/output operations per second (IOPS). This type of storage allows you to provision a specific number of IOPS, which can greatly improve performance for databases with heavy read and write operations.
- In the case of the company, with millions of updates occurring daily, the bottleneck is likely due to the General Purpose SSD storage, which provides a baseline performance but may not sustain the high IOPS needed for such a workload. Provisioned IOPS SSD can provide much higher and consistent performance, thus reducing the latency of insert operations significantly.

### Explanation of the Wrong Answers:

**B. Switch the database instance to a memory-optimized instance class.**

- Memory-optimized instances (like the R5 instances) are beneficial for workloads that require high memory throughput and low-latency access to data in memory, such as in-memory databases or cache systems. However, if the database performance issue is primarily due to storage IOPS and not memory constraints, changing the instance class may not directly resolve the slow insert performance. While it can improve overall database performance, it won't specifically address the underlying issue of IOPS.

**C. Modify the DB instance to utilize a burstable performance instance class.**

- Burstable performance instances (like T3 or T4 instances) are designed to provide a baseline level of CPU performance with the ability to burst above that level for short periods. They are suitable for workloads that have variable CPU usage but are not ideal for high-throughput applications. Given that the problem is related to storage performance and not CPU capacity, this change would not resolve the insert performance issue.

**D. Activate Multi-AZ RDS read replicas utilizing MySQL's built-in asynchronous replication.**

- Multi-AZ deployments offer high availability and failover support by synchronously replicating data to a standby instance in another Availability Zone. While this configuration can improve read performance (through read replicas), it does not directly address the performance issue related to write operations (inserts). Moreover, the nature of asynchronous replication in read replicas means they do not help with improving write performance, which is the core issue here.

### Technical Details for AWS Solution Architect Associate Exam:

- **I/O Operations**: Understand the difference between General Purpose SSD and Provisioned IOPS SSD. General Purpose SSD has a baseline performance and can burst, while Provisioned IOPS allows you to provision specific IOPS levels, which is critical for write-heavy applications.
  
- **Instance Types**: Familiarize yourself with the different types of instance classes (standard, memory-optimized, burstable), and their use cases. Memory-optimized instances can help with data-heavy applications but do not inherently improve I/O performance.
  
- **Read Replicas**: Know the purpose of read replicas, their benefits, and limitations, especially in terms of asynchronous versus synchronous replication and how they impact write operations.
  
- **Performance Tuning**: Be aware of the various strategies for database optimization including choosing the right database engine, instance classes, storage types, and configurations to ensure optimal performance for specific workloads.

By understanding these concepts, you will be better prepared for questions related to database performance and RDS on the AWS Solution Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company maintains a searchable repository of items on its website. The data is stored in an Amazon RDS for MySQL database table that contains more than 10 million rows. The database has 2 TB of General Purpose SSD storage. There are millions of updates against this data every day through the company's website.
The company has noticed that some insert operations are taking 10 seconds or longer. The company has determined that the database storage performance is the problem.
Which solution addresses this performance issue?
{: .original-query}

### Original Questions

- [ ] A. Change the storage type to Provisioned IOPS SSD.
{: .originaloption}
- [ ] B. Change the DB instance to a memory optimized instance class.
{: .originaloption}
- [ ] C. Change the DB instance to a burstable performance instance class.
{: .originaloption}
- [ ] D. Enable Multi-AZ RDS read replicas with MySQL native asynchronous replication.
{: .originaloption}


### Comments

--- 
A: This option is designed to provide a high level of input/output operations per second (IOPS) for consistent and reliable performance, specifically optimized for demanding workloads.

B: While this option can enhance the performance of insert operations, it primarily addresses processing power rather than the underlying storage performance issue.

C: This solution is suitable for workloads with moderate CPU usage, offering cost-effective performance enhancements without significantly increasing resource allocation.

D: This approach is beneficial for scaling read-only replicas, but it does not enhance the performance of insert operations on the primary database instance.
{: .comment}
--- 
Option B, which suggests switching to a memory-optimized instance class, is like trying to fit a lion into a kitten's bed. Sure, you’ll have plenty of memory, but it won't really solve those storage performance hiccups! 🦁➡️🐱

As for Option C, upgrading to a burstable performance instance class sounds fun and flexible—like a surprise party for your database! 🎉 But when the workload gets heavy with all those updates, you might find it's more like a piñata that refuses to burst. It just won't deliver the reliable performance you need for those intense write sessions. 

Now, Option D is all about high availability and read scaling with Multi-AZ RDS read replicas using MySQL’s asynchronous replication. It’s like having a backup dancer for your lead singer—great for support, but it won’t fix that sluggish storage issue on its own! 💃🎤 

In the end, Option A comes to the rescue! By switching to Provisioned IOPS SSD storage, you'll be giving your Amazon RDS for MySQL database the turbo boost it needs. 🚀 This option offers the consistent and predictable I/O performance that will make those pesky insert operations a breeze. No more waiting around for 10-second inserts—your database will be singing a much snappier tune! 🎶
{: .comment}
--- 
The clue is in the fact that insert operations are dragging on for 10 seconds or more, which is a telltale sign that the current General Purpose SSD storage isn’t cutting it in terms of IOPS for the workload at hand. Enter Provisioned IOPS SSD, the knight in shining armor for storage performance woes. 

Provisioned IOPS SSDs are crafted to deliver rapid, reliable, and consistent input/output performance, which is essential for databases that endure a high volume of transactions and frequent updates. This storage option allows users to specify a desired level of IOPS, tailoring performance to their workload's unique demands. In short, if your database is feeling sluggish, this is the upgrade that could bring it back to life.
{: .comment}
--- 
Absolutely! Let's enhance that response with a more positive and professional tone while maintaining its essence:

"Opting for Provisioned IOPS SSD is an excellent choice! This type of storage is engineered to provide rapid, reliable, and consistent I/O performance—essential for databases that experience high transaction volumes and frequent updates. By allowing you to specify a targeted level of IOPS, it ensures that your workload's performance needs are met with precision, significantly enhancing the efficiency of your database operations."
{: .comment}
--- 
A. Switch to Provisioned IOPS SSD storage! 🎉

Why, you ask? Well, let me paint you a picture! Provisioned IOPS SSD is like a superhero for your database, designed to deliver lightning-fast and reliable I/O performance. This is especially important for environments with a whirlwind of transactions and constant updates. With this storage option, you can specify the exact level of IOPS you need to keep your operations zipping along smoothly.

Current Challenge: The sluggish insert operations—taking a whopping 10 seconds or more—suggest that the current General Purpose SSD just can’t keep up with the demands of your bustling workload. By making the switch to Provisioned IOPS SSD, you can dramatically enhance storage performance and trim down those pesky latencies, helping your database soar to new heights! 🌟
{: .comment}

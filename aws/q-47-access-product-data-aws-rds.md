---
layout: answered-question
title: "AWS An Application Allows Users At A Company's Question"
meta: "AWS Exam Question: What should the solutions architect recommend to optimize application performance by separating read and write traffic using Amazon RDS? Answer: Amazon Read Replicas."
slug: "q-47-access-product-data-aws-rds"
certification: "AWS Solution Architect Associate Exam"
---


 A company's headquarters utilizes an application to access product data, which is stored in an Amazon RDS MySQL database instance. The operations team has identified a performance slowdown in the application and aims to distinguish between read and write traffic. To enhance the application's performance swiftly, what recommendations should the solutions architect provide?
{: .query}

- [ ] A. Modify the current database to a Multi-AZ setup. Direct the read requests to the primary Availability Zone.
{: .option}
- [ ] B. Modify the current database to a Multi-AZ setup. Handle read requests from the secondary Availability Zone.
{: .option}
- [ ] C. Set up read replicas for the database, allocating half of the compute and storage resources compared to the source database.
{: .option}
- [x] D. Establish read replicas for the database. Set up the read replicas using the same compute and storage resources as the primary database.
{: .option}

D
{: .answer}

The correct answer to the question is **D. Establish read replicas for the database. Set up the read replicas using the same compute and storage resources as the primary database.** 

### Explanation of Correct Answer (D)

1. **Separation of Read and Write Traffic**: By establishing read replicas, the application can direct read requests to these replicas, while the primary database instance handles write operations. This effectively distributes the workload, reducing the performance impact on the primary database and enhancing the overall application performance.

2. **Same Resources**: Setting up read replicas with the same compute and storage resources as the primary database ensures that these replicas can handle a significant amount of read traffic. This is crucial for performance, as read replicas must be adequately provisioned to serve the expected load without becoming a bottleneck.

3. **Scalability**: Read replicas can be added as needed, allowing for easy scaling of read capacity without affecting write performance on the primary database. In a scenario where read traffic increases, additional replicas can be created to handle the load.

4. **Automatic Replication**: Amazon RDS automatically handles the replication process between the primary instance and the read replicas, which simplifies the management of the database architecture.

### Why the Other Answers Are Incorrect

#### A. Modify the current database to a Multi-AZ setup. Direct the read requests to the primary Availability Zone.
- **Multi-AZ Purpose**: A Multi-AZ deployment is primarily designed for high availability and disaster recovery. It provides a synchronous standby replica in a different Availability Zone for failover purposes but does not support read scaling. All read and write traffic is directed to the primary instance, which does not alleviate performance issues.

#### B. Modify the current database to a Multi-AZ setup. Handle read requests from the secondary Availability Zone.
- **Misunderstanding of Multi-AZ**: Similar to option A, while this setup provides a standby instance for failover, it does not allow read traffic to be directed to the secondary instance. The secondary instance in a Multi-AZ setup is not accessible for read operations; it is there solely for redundancy and failover.

#### C. Set up read replicas for the database, allocating half of the compute and storage resources compared to the source database.
- **Insufficient Resources**: While this option correctly identifies the need for read replicas to handle read traffic, allocating only half the resources may not be sufficient to handle the expected read load. If the read traffic is high, under-provisioning the read replicas can lead to performance degradation instead of improvement.

### Technical Details for AWS Solution Architect Associate Exam

1. **Amazon RDS Read Replicas**:
   - Read replicas are designed to offload read traffic from the primary database instance, improving performance.
   - They are asynchronously replicated, which means there may be a slight lag between the primary instance and its replicas.
   - You can create multiple read replicas for scalability.

2. **Multi-AZ vs. Read Replicas**:
   - Multi-AZ is for high availability; it does not allow read traffic from the standby.
   - Read replicas can be used for both read scalability and performance optimization.

3. **Database Instance Types**:
   - Ensure proper instance types are chosen based on your workload. For example, RDS provides various instance classes optimized for memory, compute, or I/O operations.

4. **Monitoring and Performance**:
   - Use Amazon CloudWatch to monitor database performance metrics (CPU usage, read/write latency, etc.) to make informed decisions about scaling resources.

5. **Replication Lag**:
   - Understand that read replicas may have replication lag, which is the delay between when data is written to the primary database and when it is available on the replicas.

By understanding these concepts and options, candidates preparing for the AWS Solution Architect Associate Exam can make informed decisions regarding database performance optimization and architecture design.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

An application allows users at a company's headquarters to access product data. The product data is stored in an Amazon RDS MySQL DB instance. The operations team has isolated an application performance slowdown and wants to separate read traffic from write traffic. A solutions architect needs to optimize the application's performance quickly.
What should the solutions architect recommend?
{: .original-query}

### Original Questions

- [ ] A. Change the existing database to a Multi-AZ deployment. Serve the read requests from the primary Availability Zone.
{: .originaloption}
- [ ] B. Change the existing database to a Multi-AZ deployment. Serve the read requests from the secondary Availability Zone.
{: .originaloption}
- [ ] C. Create read replicas for the database. Configure the read replicas with half of the compute and storage resources as the source database.
{: .originaloption}
- [ ] D. Create read replicas for the database. Configure the read replicas with the same compute and storage resources as the source database.
{: .originaloption}


### Comments

--- 
The solutions architect should recommend establishing read replicas for the database, ensuring that these replicas are provisioned with identical compute and storage resources as the primary database.

Implementing read replicas enables the application to distribute read requests away from the primary database, which enhances overall performance by alleviating the load on the source instance. Configuring the read replicas with equivalent resources ensures they can efficiently manage the read operations, thereby optimizing response times and maintaining a consistent user experience. Additionally, this architecture supports scalability, allowing for future growth in read traffic without impacting the performance of the primary database.
{: .comment}
--- 
A. Picture this: in a Multi-AZ setup, a trusty standby replica of your database is created in a different Availability Zone, ready to save the day in case of a failover. However, if you’re still sending all those read requests to the primary AZ, it’s like trying to get your favorite pizza delivered to a deserted island—no one’s getting fed! This approach won’t really separate your read and write traffic, and performance might still be a bit sluggish. 🍕🚫

B. Now, about that secondary instance in a Multi-AZ deployment—it’s more of a backup buddy than a frontline fighter. It’s there for failover and backup, hanging out in standby mode like a couch potato, not really ready to take on read traffic. So, it’s not the best option for handling those queries efficiently. 🥔🛋️

C. Setting up read replicas with only half the compute and storage resources of the main database? That’s like trying to run a marathon with one shoe! 🏃‍♂️👟 While it may seem like a cost-saving move, it’s usually better to match the compute and storage resources of the read replicas to the primary database. This way, they can effectively tackle the read workload without breaking a sweat. 

D. On the bright side, if you set up those read replicas with the same compute and storage resources as your primary database, you’re in for a treat! 🎉 They’ll be more than capable of handling the read traffic and can give your application the performance boost it desperately needs. Think of it as giving your database a power-up! ⚡️
{: .comment}
--- 
Creating read replicas with identical compute and storage resources as the primary database is a clever solution for addressing performance issues. Here’s why:

Separation of Read Traffic:

By directing read traffic to the replicas, you alleviate the strain on the primary instance, thereby enhancing overall performance. It’s like letting the primary database take a breather while the replicas handle the heavy lifting.

Performance Maintenance:

Ensuring that the replicas are equipped with the same resources prevents bottlenecks, even when the system is under substantial load. This way, no single database gets overwhelmed while others kick back and relax.

Quick Implementation:

Setting up read replicas in Amazon RDS is a straightforward and managed process, allowing for a near-instantaneous solution. It’s a bit like flipping a switch—turn it on, and voila!

This strategy effectively meets the company's urgent need to boost application performance in a swift and scalable manner. It’s a smart move to keep things running smoothly without breaking a sweat.
{: .comment}
--- 
Multi-AZ configurations enhance availability, while Read Replicas significantly boost read performance. By implementing Read Replicas, you can effectively distribute read traffic, which will help alleviate the performance bottlenecks currently being experienced. This approach not only optimizes the application's responsiveness but also improves the overall user experience. Embracing Read Replicas is a proactive step toward achieving a more efficient and scalable database architecture!
{: .comment}
--- 
The best choice here would be to go with option D! While option C might seem attractive, we really can’t determine how much CPU is being used for reading versus writing just yet. We need to keep an eye on those metrics to uncover the truth! 🌈 So, let’s set up those read replicas with the same compute and storage resources as the primary database to ensure everything runs smoothly and efficiently. Happy optimizing! 🎉
{: .comment}

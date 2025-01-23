---
layout: answered-question
title: "AWS A Company Runs An Ecommerce Application Question"
meta: "AWS Exam Question: A company runs an ecommerce app on EC2 with an ALB and Auto Scaling. It needs a scalable, high-availability solution for MySQL. Answer: RDS."
slug: "q-42-ecommerce-application-ec2-aws"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates an ecommerce application utilizing Amazon EC2 instances, which are managed by an Application Load Balancer. These instances are part of an Auto Scaling group that spans multiple Availability Zones and adjusts based on CPU utilization metrics. The application relies on a MySQL 8.0 database hosted on a large EC2 instance to store its transaction data. However, as the load on the application increases, the database's performance deteriorates rapidly. Given that the application experiences a higher volume of read requests compared to write transactions, the company seeks a solution that will automatically scale the database in response to unpredictable read workloads while ensuring high availability. What solution would effectively address these requirements?
{: .query}

- [ ] A. Utilize Amazon Redshift with a single node for both leader and compute operations.
{: .option}
- [ ] B. Utilize Amazon RDS with a Single-AZ setup. Set up Amazon RDS to incorporate reader instances in another Availability Zone.
{: .option}
- [x] C. Implement Amazon Aurora utilizing a Multi-AZ deployment. Set up Aurora Auto Scaling alongside Aurora Replicas.
{: .option}
- [ ] D. Utilize Amazon ElastiCache for Memcached in conjunction with EC2 Spot Instances.
{: .option}

C
{: .answer}

The correct answer to the problem described is **C. Implement Amazon Aurora utilizing a Multi-AZ deployment. Set up Aurora Auto Scaling alongside Aurora Replicas.**

### Why Option C is Correct

1. **Performance and Scalability**: Amazon Aurora is designed for high performance and can automatically scale based on the workload. It supports up to 15 read replicas that can share the read load, which is beneficial since the application handles more read requests than write transactions.

2. **High Availability**: By utilizing a Multi-AZ deployment, Aurora automatically replicates data across multiple Availability Zones. This not only ensures high availability and durability but also provides failover capabilities if one Availability Zone becomes unavailable.

3. **Auto Scaling**: Aurora Auto Scaling allows you to automatically adjust the number of Aurora Replicas based on the traffic, which is essential for unpredictable workloads. This means that during peak times, additional replicas can be added to handle the load without manual intervention.

4. **Cost-Effective**: Since Aurora is a managed database service, it reduces the operational overhead associated with self-managing databases on EC2 instances, including patching, backups, and scaling.

### Why the Other Options are Incorrect

**A. Utilize Amazon Redshift with a single node for both leader and compute operations.**
- **Inappropriate Use Case**: Amazon Redshift is primarily designed for data warehousing and analytics, not for transactional workloads like those typical of an eCommerce application. It is optimized for read-heavy analytical queries rather than real-time transactional processing.
- **Single Node Limitation**: Using a single node configuration does not provide the required high availability or scalability needed for the unpredictable workloads of an eCommerce application.

**B. Utilize Amazon RDS with a Single-AZ setup. Set up Amazon RDS to incorporate reader instances in another Availability Zone.**
- **Single-AZ Limitation**: While adding read replicas in another Availability Zone can help with read scaling, using a Single-AZ setup does not provide the high availability needed for mission-critical applications. If the AZ goes down, the database will be unavailable.
- **Less Efficient Scaling**: Unlike Aurora, RDS does not provide automatic scaling for read replicas, requiring manual intervention to add or remove replicas as load changes.

**D. Utilize Amazon ElastiCache for Memcached in conjunction with EC2 Spot Instances.**
- **Inappropriate for Primary Data Storage**: ElastiCache is a caching service and is used to reduce the load on databases by caching frequently accessed data. However, it does not replace the need for a primary database and does not provide durable storage for transaction data.
- **Complexity of Management**: Using Spot Instances for the database is not ideal due to their potential for termination. Also, this solution does not directly address the scaling and performance issues of a transactional database.

### Technical Details for AWS Solution Architect Associate Exam

- **Amazon Aurora**: It is a MySQL and PostgreSQL-compatible relational database built for the cloud, providing high performance, scalability, and availability. Aurora automatically creates six copies of your data and spreads them across three Availability Zones.
  
- **Auto Scaling**: This feature allows you to automatically adjust the capacity of your database based on the current load. Aurora Replicas can be added or removed automatically based on performance metrics.

- **Multi-AZ vs. Single-AZ**: Understand the differences between these deployment options. Multi-AZ deployments replicate your database synchronously across multiple Availability Zones, while Single-AZ deployments run in one zone, making them less resilient.

- **Read Replicas**: They allow you to scale out read traffic from your database. In RDS, you can create read replicas, but they do not automatically scale like Aurora’s read replicas.

- **Caching Strategies**: Know how caching (ElastiCache) can be used to enhance database performance but is not a substitute for a robust database solution.

By understanding these concepts, you can effectively determine the right AWS services to meet specific application requirements and be better prepared for the AWS Solution Architect Associate Exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company runs an ecommerce application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales based on CPU utilization metrics. The ecommerce application stores the transaction data in a MySQL 8.0 database that is hosted on a large EC2 instance.
The database's performance degrades quickly as application load increases. The application handles more read requests than write transactions. The company wants a solution that will automatically scale the database to meet the demand of unpredictable read workloads while maintaining high availability.
Which solution will meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Use Amazon Redshift with a single node for leader and compute functionality.
{: .originaloption}
- [ ] B. Use Amazon RDS with a Single-AZ deployment Configure Amazon RDS to add reader instances in a different Availability Zone.
{: .originaloption}
- [ ] C. Use Amazon Aurora with a Multi-AZ deployment. Configure Aurora Auto Scaling with Aurora Replicas.
{: .originaloption}
- [ ] D. Use Amazon ElastiCache for Memcached with EC2 Spot Instances.
{: .originaloption}


### Comments


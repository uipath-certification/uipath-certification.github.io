---
layout: answered-question
title: "AWS A Company Is Running A Business Critical Question"
meta: "AWS Exam Question: A company needs a highly available web app on EC2 with ALB and Auto Scaling, using Amazon Aurora. Find the best answer."
slug: "q-42-business-critical-application-ec2"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates a business-critical web application on Amazon EC2 instances that are managed by an Application Load Balancer and are part of an Auto Scaling group. The application relies on an Amazon Aurora PostgreSQL database, which is currently deployed in a single Availability Zone. To ensure high availability with minimal downtime and data loss, what solution would require the least operational effort to achieve these goals?
{: .query}

- [ ] A. Distribute the EC2 instances across various AWS Regions. Implement Amazon Route 53 health checks for traffic redirection. Utilize Cross-Region Replication with Aurora PostgreSQL.
{: .option}
- [x] B. Set up the Auto Scaling group to operate across multiple Availability Zones. Configure the database to be Multi-AZ. Also, establish an Amazon RDS Proxy instance for the database.
{: .option}
- [ ] C. Set up the Auto Scaling group to operate within a single Availability Zone. Create hourly backups of the database. In case of a failure, restore the database using these backups.
{: .option}
- [ ] D. Set up the Auto Scaling group to operate across multiple AWS Regions. Store the application data in Amazon S3. Utilize S3 Event Notifications to trigger an AWS Lambda function that will save the data to the database.
{: .option}

B
{: .answer}

The correct answer to the question is **B**: "Set up the Auto Scaling group to operate across multiple Availability Zones. Configure the database to be Multi-AZ. Also, establish an Amazon RDS Proxy instance for the database." 

### Why Answer B is Correct:

1. **High Availability**: By distributing the EC2 instances across multiple Availability Zones (AZs), you achieve fault tolerance. If one AZ becomes unavailable, the Auto Scaling group can automatically launch new instances in another AZ, ensuring minimal downtime.

2. **Database Reliability**: Configuring the Amazon Aurora PostgreSQL database in a Multi-AZ deployment provides automatic failover capabilities. In the event of an outage in the primary instance, Amazon RDS will automatically switch to the standby, which is in a different AZ, thus minimizing data loss and downtime.

3. **Operational Efficiency**: Using Amazon RDS Proxy allows you to manage database connections more efficiently, which can help with scaling and improve application performance. It also provides an additional layer of security and connection management, reducing operational overhead.

### Why the Other Answers Are Incorrect:

- **A. Distribute the EC2 instances across various AWS Regions. Implement Amazon Route 53 health checks for traffic redirection. Utilize Cross-Region Replication with Aurora PostgreSQL.**
  - **Complexity**: Running across multiple AWS Regions significantly increases the complexity of the architecture. This can introduce latency and complicate data consistency and failover processes. 
  - **Cost**: Cross-region replication incurs additional costs, and managing applications across regions adds operational overhead.
  - **Health Checks**: While Route 53 can provide health checks, managing failover across regions requires more intricate routing policies and might not provide the immediate failover needed.

- **C. Set up the Auto Scaling group to operate within a single Availability Zone. Create hourly backups of the database. In case of a failure, restore the database using these backups.**
  - **Single Point of Failure**: Operating within a single AZ means that if that AZ goes down, the entire application becomes unavailable, which does not meet the requirement for high availability.
  - **Backup Recovery**: Relying on hourly backups for disaster recovery introduces a risk of data loss—any data written between the last backup and the failure would be lost. This approach is reactive rather than proactive.

- **D. Set up the Auto Scaling group to operate across multiple AWS Regions. Store the application data in Amazon S3. Utilize S3 Event Notifications to trigger an AWS Lambda function that will save the data to the database.**
  - **Data Consistency**: Using S3 for application data storage complicates data consistency and latency for database operations. This is not ideal for a database-centric application like the one described.
  - **Operational Overhead**: The reliance on S3 Event Notifications and Lambda to manage data interactions adds unnecessary complexity and potential failure points to the architecture.

### Technical Details for AWS Solution Architect Associate Exam:

- **Multi-AZ Deployments**: Understand how Multi-AZ deployments work, including automatic failover and data replication methods.
  
- **Auto Scaling**: Be familiar with how Auto Scaling works and the best practices for setting it up across multiple AZs to ensure high availability.

- **RDS Proxy**: Know the benefits of using RDS Proxy, including connection pooling, improved application scalability, and reduced database load.

- **High Availability Strategies**: Be able to articulate the differences between designing for high availability vs. disaster recovery, and the implications of using different AWS services (like Route 53, S3, etc.) in these strategies.

- **AWS Regions and AZs**: Understand the AWS global infrastructure, including the distinction between Regions and Availability Zones, and how they impact application design.

By focusing on these concepts, you can better understand the rationale behind the correct answer and be prepared for related questions on the AWS Solution Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is running a business-critical web application on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances are in an Auto Scaling group. The application uses an Amazon Aurora PostgreSQL database that is deployed in a single Availability Zone. The company wants the application to be highly available with minimum downtime and minimum loss of data.
Which solution will meet these requirements with the LEAST operational effort?
{: .original-query}

### Original Questions

- [ ] A. Place the EC2 instances in different AWS Regions. Use Amazon Route 53 health checks to redirect traffic. Use Aurora PostgreSQL Cross-Region Replication.
{: .originaloption}
- [ ] B. Configure the Auto Scaling group to use multiple Availability Zones. Configure the database as Multi-AZ. Configure an Amazon RDS Proxy instance for the database.
{: .originaloption}
- [ ] C. Configure the Auto Scaling group to use one Availability Zone. Generate hourly snapshots of the database. Recover the database from the snapshots in the event of a failure.
{: .originaloption}
- [ ] D. Configure the Auto Scaling group to use multiple AWS Regions. Write the data from the application to Amazon S3. Use S3 Event Notifications to launch an AWS Lambda function to write the data to the database.
{: .originaloption}


### Comments

--- 
Configuring the Auto Scaling group to span multiple Availability Zones enhances the application's resilience, allowing it to maintain functionality even if one Availability Zone experiences an outage. Additionally, setting up the database in a Multi-AZ configuration guarantees continuous availability, as it provides automatic failover capabilities in the event of an Availability Zone failure. Implementing an Amazon RDS Proxy instance further optimizes database connectivity by intelligently routing traffic to operational database instances, thereby bolstering the overall availability of the application. This approach effectively addresses the need for high availability while minimizing operational overhead.
{: .comment}
--- 
To ensure your application is as reliable as a Swiss watch ⏱️, consider using an Auto Scaling group that spans multiple Availability Zones. This way, if one zone decides to take a nap 😴, your application can keep running smoothly in another zone. Plus, configuring your database for Multi-AZ deployment will provide failover support, so your data is as safe as a squirrel's nut stash 🐿️. 

And let’s not forget about the magic of Amazon RDS Proxy! This nifty little tool helps manage database connections and improves the efficiency of your application. It's like having a bouncer at a club—keeping things orderly and ensuring your database doesn’t get overwhelmed when the party gets too wild 🍾. 

So, by spreading your EC2 instances across different Availability Zones, setting up Multi-AZ for your database, and employing RDS Proxy, you’re not just planning for success; you’re throwing a highly available bash with minimal downtime and data loss. Cheers to that! 🥳
{: .comment}
--- 
When it comes to achieving high availability, the golden rule is to embrace Multi-AZ configurations. After all, who wants a single point of failure? If you’re aiming for disaster recovery, then it’s time to think bigger—like multiple AWS Regions. Because let’s face it, no one wants their application to go belly up just because of an unexpected hiccup in one location. So, for maximum uptime and minimal data loss, spreading your resources across various Availability Zones and Regions is the way to go. It’s a no-brainer!
{: .comment}
--- 
Conclusion:  
Option B provides exceptional high availability for both the EC2 instances and the Aurora PostgreSQL database while requiring minimal operational effort. This solution effectively addresses the need for minimal downtime and ensures the least possible data loss, making it an outstanding choice for maintaining the reliability of the web application.
{: .comment}
--- 
Option B is the way to go! 🎉 The Auto Scaling group will happily span across multiple Availability Zones, ensuring a robust and resilient setup. By configuring the database to be Multi-AZ, you’re adding a delightful layer of high availability that can withstand unexpected hiccups. And let’s not forget about the Amazon RDS Proxy instance—it’s a fantastic addition that helps manage database connections efficiently, reducing the operational burden. This solution strikes a perfect balance between reliability and ease of management! 🌟
{: .comment}

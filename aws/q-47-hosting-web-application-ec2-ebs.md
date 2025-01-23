---
layout: answered-question
title: "AWS A Company Is Hosting A Web Application Question"
meta: "AWS Exam Question: A company uses EC2 and EBS for a web app. Users see subsets of documents. What solution ensures all documents are visible? Answer: Application Load Balancer."
slug: "q-47-hosting-web-application-ec2-ebs"
certification: "AWS Solution Architect Associate Exam"
---


 A company has set up a web application on AWS, utilizing a single Amazon EC2 instance to manage user-uploaded documents stored in an Amazon EBS volume. To improve scalability and availability, they replicated the setup by creating a second EC2 instance and EBS volume in a different Availability Zone, both of which are configured behind an Application Load Balancer. Following this implementation, users experienced an issue where refreshing the website displayed only one subset of their documents at a time, rather than showing all documents simultaneously. What solution should a solutions architect recommend to resolve this issue and ensure users can view all their documents at once?
{: .query}

- [ ] A. Duplicate the data so that each EBS volume holds all the documents.
{: .option}
- [ ] B. Set up the Application Load Balancer to route a user to the server containing the documents.
{: .option}
- [x] C. Transfer the data from both EBS volumes to Amazon EFS. Update the application to store new documents in Amazon EFS.
{: .option}
- [ ] D. Set up the Application Load Balancer to route the requests to both servers, ensuring that each document is returned from the appropriate server.
{: .option}

C
{: .answer}

The correct answer to the problem is **C. Transfer the data from both EBS volumes to Amazon EFS. Update the application to store new documents in Amazon EFS.**

### Explanation of the Correct Answer

**Amazon EFS (Elastic File System)** is a fully managed file storage service that can be mounted on multiple EC2 instances simultaneously. This means that it can serve as a shared storage solution, allowing all EC2 instances to access the same set of documents regardless of which instance the user connects to. By using EFS, all instances behind the Application Load Balancer can read and write from a common storage location, ensuring that all users see the same set of documents at all times.

#### Key Benefits of Using Amazon EFS:
1. **Shared Access:** EFS allows multiple EC2 instances to access the same files simultaneously, which is essential for your application to show all documents to users regardless of which instance they hit.
2. **Elasticity:** EFS automatically scales as you add and remove files, making it a great solution for fluctuating workloads.
3. **High Availability and Durability:** EFS is designed to be highly available and durable, replicating data across multiple Availability Zones.

### Why the Other Options are Incorrect

**A. Duplicate the data so that each EBS volume holds all the documents.**
- **Issues:**
  - This approach requires manual synchronization of the documents between the two EBS volumes. It introduces complexity in managing data consistency and can lead to issues with versioning or stale data.
  - EBS volumes cannot be attached to multiple EC2 instances simultaneously (with the exception of specific use cases like EBS Multi-Attach for certain instance types), which makes concurrent access difficult.

**B. Set up the Application Load Balancer to route a user to the server containing the documents.**
- **Issues:**
  - This solution does not resolve the issue of document visibility across instances. Users would still only see the documents stored on the single EC2 instance they are routed to, leading to the same problem as before.
  - It also does not provide any form of fault tolerance; if the instance that a user is routed to goes down, they would lose access to their documents.

**D. Set up the Application Load Balancer to route the requests to both servers, ensuring that each document is returned from the appropriate server.**
- **Issues:**
  - This option suggests a routing mechanism that would need to manage which document is on which server, complicating the application logic.
  - It still doesn't solve the core issue of users seeing a subset of documents since the documents would still be split across instances. Users could end up connecting to different servers for different requests, leading to an inconsistent view of their documents.

### Technical Details for AWS Solution Architect Associate Exam Preparation

When preparing for the AWS Solution Architect Associate exam, it is crucial to understand key AWS services and their use cases:

1. **Amazon EBS (Elastic Block Store)**:
   - Used for block storage, typically attached to a single EC2 instance. Not suitable for shared access across multiple instances.

2. **Amazon EFS**:
   - Provides a shared file system that can be accessed by multiple instances. Learn about how EFS can scale and its integration with other AWS services.

3. **Application Load Balancer (ALB)**:
   - Understand routing mechanisms, including path-based and host-based routing. Recognize the limitations and appropriate use cases for ALBs.

4. **High Availability and Fault Tolerance**:
   - Familiarize yourself with AWS best practices for designing applications that are resilient and highly available, such as using multiple Availability Zones, load balancing, and shared storage solutions.

5. **Data Consistency and Management**:
   - Know the pros and cons of different data storage options (EBS, EFS, S3) and the implications of each in terms of availability, performance, and consistency.

By understanding these concepts, you'll be better prepared to answer similar scenario-based questions on the AWS Solution Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that, each time they refreshed the website, they could see one subset of their documents or the other, but never all of the documents at the same time.
What should a solutions architect propose to ensure users see all of their documents at once?
{: .original-query}

### Original Questions

- [ ] A. Copy the data so both EBS volumes contain all the documents
{: .originaloption}
- [ ] B. Configure the Application Load Balancer to direct a user to the server with the documents
{: .originaloption}
- [ ] C. Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS
{: .originaloption}
- [ ] D. Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server
{: .originaloption}


### Comments

--- 
To ensure that users can access all of their documents simultaneously, it is critical to implement a shared file storage solution. Amazon Elastic File System (EFS) provides a scalable and highly available file storage option that can be mounted by multiple EC2 instances concurrently. By migrating the data from the existing EBS volumes to EFS, all EC2 instances can access the same set of documents, thus eliminating the inconsistency users experience when refreshing the website.

Using EFS allows for seamless access to files from multiple instances, ensuring that any uploaded document is immediately available to all users regardless of which instance they are routed to through the Application Load Balancer. Moreover, EFS supports automatic scaling, which means it can grow and shrink as needed, providing cost-effective storage that meets changing demand.

Additionally, updating the application to write new documents directly to EFS will streamline the process and enhance overall performance. This architecture not only improves user experience by providing consistent access to documents but also enhances the system's scalability and resilience.
{: .comment}
--- 
Amazon EBS volumes are like exclusive clubhouses; they only hang out in one Availability Zone. 🎉 On the other hand, Amazon EFS is the ultimate party that spans multiple zones, allowing everyone to join in regardless of where they are. 🥳 That's why the solution lies in transferring the data to Amazon EFS! By doing this, all users can access their documents simultaneously, and no one has to feel left out in the document-sharing fiesta! 📂✨ It's all about ensuring that everyone gets to see the full picture—literally!
{: .comment}
--- 
Just to clear the air for anyone who might be confused: while it is indeed possible to create copies of an EBS volume in different Availability Zones using EBS Snapshots, let's not mix that up with the notion of having a global solution that allows for simultaneous data synchronization across multiple locations. That’s a whole different ball game!
{: .comment}
--- 
Amazon S3 is the ideal solution for this situation. It offers centralized, scalable, and highly available storage, allowing all users to access their complete set of documents no matter which instance they connect to. This approach enhances user experience by ensuring consistent access to all documents across different instances.
{: .comment}
--- 
The best solution is to transfer the data from both EBS volumes to Amazon EFS and update the application to store new documents there. 🌟

Right now, the setup features two distinct EBS volumes, each linked to an individual EC2 instance. This separation means that each instance only contains a portion of the documents. When users refresh the website, the Application Load Balancer whimsically directs them to one of the two instances. If their documents happen to be on the instance they weren't guided to, poof! They can't see them! By consolidating the document storage into Amazon EFS, all users will have access to the complete set of documents, regardless of which instance they land on. 🎉
{: .comment}

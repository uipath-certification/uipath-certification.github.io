---
layout: answered-question
title: "AWS A Company Is Implementing A Shared Storage Question"
meta: "AWS Exam Question: A company needs a fully managed shared storage solution for a gaming app, using Lustre clients in an on-premises data center. Answer: FSx for Lustre."
slug: "q-42-shared-storage-solution-lc"
certification: "AWS Solution Architect Associate Exam"
---


 A company is looking to implement a shared storage solution for a gaming application hosted in an on-premises data center. They require the use of Lustre clients for data access, and the solution must be fully managed. What solution would best fulfill these criteria?
{: .query}

- [ ] A. Set up an AWS Storage Gateway file gateway. Establish a file share that utilizes the necessary client protocol. Link the application server to the file share.
{: .option}
- [ ] B. Set up a Windows instance on Amazon EC2. Install and set up a file share role on that instance. Link the application server to the file share.
{: .option}
- [ ] C. Set up an Amazon Elastic File System (Amazon EFS) that is configured to work with Lustre. Link the file system to the origin server and connect the application server to the file system.
{: .option}
- [x] D. Set up an Amazon FSx for Lustre file system and link it to the origin server. Then, connect the application server to the file system.
{: .option}

D
{: .answer}

The correct answer is **D. Set up an Amazon FSx for Lustre file system and link it to the origin server. Then, connect the application server to the file system.** Here's why this is the most suitable solution, along with an analysis of why the other options do not meet the requirements.

### Why Option D is Correct

1. **Lustre Support**: Amazon FSx for Lustre is a fully managed service that provides a high-performance file system optimized for workloads that require fast storage, making it ideal for gaming applications. It is specifically designed to support applications that utilize the Lustre file system, allowing for efficient access to shared data.

2. **Fully Managed Service**: Amazon FSx for Lustre is fully managed, meaning that AWS handles the infrastructure, including setup, maintenance, patching, and backups. This allows the company to focus on developing their gaming application rather than managing the underlying file system.

3. **Integration**: FSx for Lustre can be integrated with other AWS services and on-premises data sources, allowing for seamless data access and management.

4. **Performance**: It provides high throughput and low-latency access to data, which is critical for gaming applications where performance can significantly impact user experience.

### Why the Other Options are Incorrect

#### A. Set up an AWS Storage Gateway file gateway. Establish a file share that utilizes the necessary client protocol. Link the application server to the file share.

- **Not Lustre-Compatible**: AWS Storage Gateway is primarily designed for hybrid cloud storage solutions and does not support the Lustre file system. It is more suited for applications that require file shares or block storage rather than high-performance computing workloads that require Lustre.

- **Performance Limitations**: Storage Gateway is not optimized for the high-performance requirements of gaming applications, which typically require low latency and high throughput.

#### B. Set up a Windows instance on Amazon EC2. Install and set up a file share role on that instance. Link the application server to the file share.

- **Manual Management**: While this option could technically work for file sharing, it requires significant manual setup and management. The user would need to maintain the Windows server, including updates and scaling, which contradicts the requirement for a fully managed solution.

- **Lustre Compatibility**: This option does not utilize the Lustre file system, making it unsuitable for the needs specified in the question.

#### C. Set up an Amazon Elastic File System (Amazon EFS) that is configured to work with Lustre. Link the file system to the origin server and connect the application server to the file system.

- **Misleading Configuration**: Amazon EFS is a fully managed file storage service for use with Amazon EC2. However, it does not support the Lustre file system. EFS is designed for general-purpose workloads and would not provide the specific performance benefits required for a gaming application that needs Lustre.

- **Not Fully Optimized**: While EFS is a good solution for many use cases, it does not match the performance characteristics of FSx for Lustre for high-performance computing or gaming workloads.

### Technical Details for AWS Solution Architect Associate Exam

When preparing for the AWS Solution Architect Associate exam, it’s important to understand the following concepts:

1. **File Systems in AWS**:
   - Know the differences between Amazon FSx (specifically FSx for Lustre and FSx for Windows File Server) and Amazon EFS.
   - Understand the use cases for each type of file storage solution.

2. **Performance Characteristics**:
   - Familiarize yourself with performance metrics such as throughput, IOPS, and latency, and how different services measure and provide these metrics.

3. **Managed Services**:
   - Recognize the importance of using fully managed services to reduce operational overhead and focus on developing applications.

4. **Integration with Other Services**:
   - Understand how AWS services can be integrated and the implications of those integrations on architecture design and performance.

5. **Deployment and Configuration**:
   - Be prepared to explain how to set up and configure various AWS services, including networking considerations, IAM roles, and security settings.

By mastering these concepts, you'll be well-prepared to answer similar questions on the AWS Solution Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is implementing a shared storage solution for a gaming application that is hosted in an on-premises data center. The company needs the ability to use Lustre clients to access data. The solution must be fully managed.
Which solution meets these requirements?
{: .original-query}

### Original Questions

- [ ] A. Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.
{: .originaloption}
- [ ] B. Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.
{: .originaloption}
- [ ] C. Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system.
{: .originaloption}
- [ ] D. Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system.
{: .originaloption}


### Comments

--- 
The correct solution is D. 

Amazon FSx for Lustre is the only option that provides a fully managed Lustre file system. This service is specifically designed for high-performance workloads and is optimized for data-intensive applications. It seamlessly integrates with other AWS services and allows for efficient data access by Lustre clients. By connecting the FSx for Lustre file system to the origin server, the application server can interact with the file system effectively, ensuring high throughput and low latency for data access. For more information, refer to the Amazon FSx for Lustre documentation: https://aws.amazon.com/fsx/lustre/.
{: .comment}
--- 
Option D: Whip up an Amazon FSx for Lustre file system! 🎉 Just attach this snazzy file system to your origin server and connect your application server, and voilà! 

Amazon FSx for Lustre is like the superhero of file systems, specially designed for high-performance tasks—think gaming applications that need to zoom at lightning speed. ⚡ With its fully managed capabilities, you can kick back and relax while it takes care of the heavy lifting, providing a robust, scalable solution that plays nicely with Lustre clients. Plus, it integrates seamlessly with Amazon EC2, making it the obvious choice for your needs. So, if you want to keep things smooth and hassle-free, this is the way to go! 🚀
{: .comment}
--- 
Certainly! Here’s a reworked and improved version of the text you provided, infused with a hint of cynicism while maintaining professionalism:

---

Not exactly a best practice:

In the world of asynchronous systems using SQS and Lambda, the golden rule is to remove the message only after it has been processed successfully. This little gem ensures that if something goes awry, the message can be retried, keeping the chaos at bay. 

Doesn't truly tackle duplication:

Now, even if you’re quick on the draw and delete that message right away, the pesky issue of duplicate messages can still rear its ugly head. This typically happens because of duplicate send logic in S3 or redundant notifications triggered by object creation events. So, guess what? The original problem might just hang around like an unwanted guest at a party.

--- 

This version retains the core ideas while enhancing readability and adding a touch of wit.
{: .comment}
--- 
Option D may initially seem like a straightforward solution, but it carries significant risks that could compromise system reliability. Let's delve into the details:

What Option D proposes:
It suggests modifying the Lambda function to delete each message from the SQS queue immediately after reading it, prior to processing.

Concerns with Option D:
Risk of message loss in the event of failures:

If a message is deleted from SQS before it has been processed, any issues that arise—such as a Lambda function failure or an error in processing logic—will result in the permanent loss of that message.
SQS is designed to ensure that a message is safely processed before it is removed. Deleting a message before it has been fully processed undermines this critical guarantee. 

In summary, while the approach may appear efficient, it's essential to prioritize the integrity and reliability of message handling to avoid unintended data loss.
{: .comment}
--- 
When it comes to managing Lustre clients, Amazon FSx for Lustre shines as the ideal choice! 🌟 It’s a fully managed service that’s perfect for your gaming application’s shared storage needs. With this delightful solution, you can link your application server directly to the file system, ensuring everything runs smoothly and efficiently. Enjoy the seamless integration and let your creativity flow! 🎮
{: .comment}

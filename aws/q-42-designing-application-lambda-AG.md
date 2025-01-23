---
layout: answered-question
title: "AWS A Company Is Designing An Application Question"
meta: "AWS Exam Question: A company designs an app using AWS Lambda, Amazon API Gateway, and Amazon Aurora PostgreSQL. What solution improves scalability and minimizes effort? Answer: Amazon DynamoDB."
slug: "q-42-designing-application-lambda-AG"
certification: "AWS Solution Architect Associate Exam"
---


 A company is in the process of developing an application that utilizes an AWS Lambda function to gather data via Amazon API Gateway and subsequently store it in an Amazon Aurora PostgreSQL database. During the proof-of-concept phase, the company has encountered the need to significantly raise the Lambda quotas due to the large volumes of data being loaded into the database. To enhance scalability while reducing the effort required for configuration, a solutions architect must propose an alternative design. What solution would best address these requirements?
{: .query}

- [ ] A. Convert the Lambda function code into Apache Tomcat code that operates on Amazon EC2 instances. Establish a connection to the database using native Java Database Connectivity (JDBC) drivers.
{: .option}
- [ ] B. Transition the platform from Aurora to Amazon DynamoDB. Set up a DynamoDB Accelerator (DAX) cluster and utilize the DAX client SDK to redirect the current DynamoDB API requests to the DAX cluster.
{: .option}
- [ ] C. Create two Lambda functions. Set up the first function to handle incoming information, and the second function to insert that information into the database. Connect the two Lambda functions using Amazon Simple Notification Service (Amazon SNS).
{: .option}
- [x] D. Create two Lambda functions. Set up one function to accept the data, and configure the second function to insert the data into the database. Link the Lambda functions using an Amazon Simple Queue Service (Amazon SQS) queue.
{: .option}

D
{: .answer}

### Correct Answer: D

**Explanation of Correct Answer:**

Option D proposes creating two separate AWS Lambda functions: one to accept incoming data and another to process that data and insert it into the Amazon Aurora PostgreSQL database. These two functions are interconnected via Amazon Simple Queue Service (Amazon SQS). 

1. **Decoupling:** By using SQS, you decouple the data ingestion process from the data processing and database insertion process. This helps manage varying loads more effectively. If the first function receives data faster than the second function can process it, the queue can buffer the requests, preventing data loss and reducing the risk of overwhelming the database.

2. **Scalability:** Each Lambda function can scale independently. If the rate of incoming data spikes, the first Lambda function can scale up to handle the load, and the second function can also scale according to the processing capacity needed. SQS can handle a large number of messages, allowing for high throughput.

3. **Error Handling and Retries:** SQS provides built-in mechanisms for handling failures. If the second Lambda function fails to process a message, the message remains in the queue until it is successfully processed, allowing for robust error handling.

4. **Configuration Effort:** Using Lambda and SQS minimizes the configuration effort typically required for setting up and managing infrastructure, such as EC2 instances.

### Why the Other Options Are Incorrect:

**A. Convert the Lambda function code into Apache Tomcat code that operates on Amazon EC2 instances. Establish a connection to the database using native Java Database Connectivity (JDBC) drivers.**
- **Overhead and Management:** This option introduces additional complexity and management overhead associated with EC2 instances. You would need to manage the server's availability, scaling, and patching, which negates the serverless benefits of using Lambda.
- **Configuration Effort:** It requires significant configuration and maintenance effort compared to using Lambda functions.
- **Scalability:** EC2 instances require manual scaling, which can lead to difficulties in handling sudden spikes in traffic.

**B. Transition the platform from Aurora to Amazon DynamoDB. Set up a DynamoDB Accelerator (DAX) cluster and utilize the DAX client SDK to redirect the current DynamoDB API requests to the DAX cluster.**
- **Database Change:** This option suggests changing the database from Aurora to DynamoDB. While DynamoDB is highly scalable, migrating to a different database can involve significant changes in data access patterns, schema design, and application logic. 
- **Proof of Concept Requirements:** Since the question specifies a proof-of-concept stage, the company may prefer to work with existing technologies rather than overhauling their database solution.

**C. Create two Lambda functions. Set up the first function to handle incoming information, and the second function to insert that information into the database. Connect the two Lambda functions using Amazon Simple Notification Service (Amazon SNS).**
- **Overhead with SNS:** While SNS can be used to trigger the second function, it is not as suitable as SQS for scenarios where you want to ensure that messages are processed in order or where you need to handle message retries. SNS is more suited for pub/sub patterns rather than message queuing, leading to potential data loss if the second function fails to process messages successfully.

### Technical Details for AWS Solution Architect Associate Exam:

1. **AWS Lambda:** Understand how Lambda works, its limits (such as timeout and memory), and how to manage concurrency, especially with high-volume data processing.
  
2. **Amazon SQS:** Learn about SQS concepts, including message retention, visibility timeout, dead-letter queues, and how to use it for decoupling components in serverless architectures.

3. **Amazon Aurora vs. DynamoDB:** Be familiar with the differences between relational databases like Aurora and NoSQL databases like DynamoDB, including their use cases, scaling characteristics, and data modeling approaches.

4. **Event-Driven Architectures:** Grasp the principles of event-driven architectures, including how to handle asynchronous processing and the benefits of decoupling systems for scalability and reliability.

5. **Best Practices:** Familiarize yourself with best practices for designing serverless applications, including the use of AWS services to minimize latency, optimize costs, and ensure high availability. 

By focusing on these topics, individuals preparing for the AWS Solutions Architect Associate exam can gain a deeper understanding of how to effectively design scalable and efficient applications on AWS.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database.
During the proof-of-concept stage, the company has to increase the Lambda quotas significantly to handle the high volumes of data that the company needs to load into the database. A solutions architect must recommend a new design to improve scalability and minimize the configuration effort.
Which solution will meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the database by using native Java Database Connectivity (JDBC) drivers.
{: .originaloption}
- [ ] B. Change the platform from Aurora to Amazon DynamoDProvision a DynamoDB Accelerator (DAX) cluster. Use the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster.
{: .originaloption}
- [ ] C. Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using Amazon Simple Notification Service (Amazon SNS).
{: .originaloption}
- [ ] D. Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using an Amazon Simple Queue Service (Amazon SQS) queue.
{: .originaloption}


### Comments

--- 
Option A involves refactoring the Lambda function into an Apache Tomcat application running on Amazon EC2 instances. While this approach could potentially work, it entails significant effort in terms of development, deployment, and ongoing maintenance, making it an impractical solution for this scenario.

Option B proposes transitioning from Amazon Aurora to Amazon DynamoDB. Since Aurora is a relational SQL database and DynamoDB is a NoSQL database, this would necessitate a comprehensive database migration, which is also a labor-intensive process. Therefore, this option is not feasible.

Options C and D share a similar architectural framework, but there are key differences. Option C utilizes Amazon Simple Notification Service (SNS) to trigger the second Lambda function. This method could lead to the same bottleneck issue, as both functions would still be tightly coupled during execution, which does not alleviate the load problem.

In contrast, Option D employs Amazon Simple Queue Service (SQS) to facilitate the interaction between the two Lambda functions. By allowing the first function to queue incoming data and the second function to process that data asynchronously, it effectively decouples the components of the application. This decoupling enhances performance by distributing the load and managing the throughput to the database, ultimately addressing the bottleneck more efficiently. Therefore, Option D is the most suitable solution for improving scalability and minimizing configuration effort.
{: .comment}
--- 
Let's dive into the world of AWS solutions with a sprinkle of humor! 🌟 

When it comes to handling those hefty data loads, the company has found itself in quite the pickle, needing to crank up the Lambda quotas to keep things running smoothly. But fear not! We’re on a quest for a solution that not only boosts scalability but also keeps configuration as easy as pie. 🥧

So, let’s break down the options, shall we? 

A: Nope! While converting Lambda functions to run on Apache Tomcat with EC2 might sound like a grand adventure, it's more like a wild goose chase! 🦆 You'd have to juggle load balancers and auto-scaling groups, and honestly, who has time for that? Plus, using JDBC drivers won’t exactly win any speed races.

B: Not quite! Swapping Aurora for DynamoDB might seem like a fresh start, but it's a big ol' hassle. Plus, the DynamoDB Accelerator (DAX) is all about caching for reads, not writes—so it’s like bringing a butter knife to a sword fight! 🗡️ 

C: Close, but no cigar! While creating two Lambda functions sounds clever, using Amazon Simple Notification Service (SNS) is like sending out party invitations instead of actually throwing the party. It’s great for notifications, but not quite what we need here! 🎉

D: Ding, ding, ding! We have a winner! By utilizing Amazon Simple Queue Service (SQS), we can gracefully scale our application. It’s like having a charming butler who queues up the data, ensuring everything flows smoothly into the database without breaking a sweat. 🥳 

So there you have it—a delightful journey through options, with the right choice to make life easier and more scalable. Cheers to that! 🍻
{: .comment}
--- 
It seems we're caught in a classic debate between options C and D, but let's give D the crown for a couple of compelling reasons. 

With Amazon Simple Notification Service (SNS), you have a push mechanism that unceremoniously shoves messages to the other Lambda function, whether it's ready to receive them or not. Talk about pressure! On the other hand, Amazon Simple Queue Service (SQS) operates on a pull mechanism, allowing that second Lambda function to gracefully pick up the next message only when it’s fully prepared to handle it. 

SQS not only simplifies the workflow but also enhances decoupling between the functions, making your architecture more resilient. So, if you’re looking for a more relaxed and efficient way to manage your messages, option D is the way to go.
{: .comment}
--- 
A company is developing an application that leverages an AWS Lambda function for data reception via Amazon API Gateway, with the intention of storing this data in an Amazon Aurora PostgreSQL database. During the proof-of-concept phase, the company encountered the need to significantly increase the Lambda quotas to manage the high data volumes being loaded into the database. To enhance scalability while minimizing configuration complexity, a solutions architect must propose an optimized design.

One effective approach is to implement two distinct Lambda functions. The first function would be responsible for receiving the incoming data, while the second function would handle the task of inserting that data into the database. By connecting these Lambda functions through an Amazon Simple Queue Service (Amazon SQS) queue, the design can efficiently manage and decouple the data processing workflow. This setup not only streamlines the data ingestion process but also enhances the system's overall scalability and reliability, ensuring that the application can handle increased loads with ease.
{: .comment}
--- 
When the data flow becomes so robust that Lambda's concurrency surpasses 1000, it's time to embrace a queue to gracefully manage and throttle the incoming requests. This delightful approach ensures that everything runs smoothly and efficiently, allowing your application to shine! 🌟
{: .comment}

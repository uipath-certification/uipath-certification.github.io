---
layout: answered-question
title: "AWS Solutions Architect Is Designing The Cloud Question"
meta: "AWS Exam Question: A solutions architect designs a cloud architecture on AWS, ensuring stateless, loosely coupled applications with durable job storage. Answer: S3, EC2."
slug: "q-42-design-cloud-architecture-AWS"
certification: "AWS Solution Architect Associate Exam"
---


 A solutions architect is tasked with creating a cloud architecture for a new application set to be deployed on AWS. This architecture needs to operate concurrently, allowing for the dynamic addition and removal of application nodes in response to the volume of jobs being processed. Given that the processor application is stateless, the solutions architect must prioritize a design that maintains loose coupling and ensures durable storage of job items. What design approach should the solutions architect consider?
{: .query}

- [ ] A. Set up an Amazon SNS topic to dispatch the jobs requiring processing. Develop an Amazon Machine Image (AMI) that includes the processing application. Establish a launch configuration that utilizes this AMI. Formulate an Auto Scaling group based on the launch configuration. Configure the scaling policy for the Auto Scaling group to increase or decrease nodes according to CPU utilization.
{: .option}
- [ ] B. Set up an Amazon SQS queue to manage the jobs awaiting processing. Generate an Amazon Machine Image (AMI) that contains the application for processing. Develop a launch configuration that utilizes this AMI. Establish an Auto Scaling group based on the launch configuration. Configure the scaling policy for the Auto Scaling group to adjust the number of nodes according to network traffic.
{: .option}
- [x] C. Set up an Amazon SQS queue to store the jobs requiring processing. Develop an Amazon Machine Image (AMI) that includes the processing application. Create a launch template that utilizes this AMI. Establish an Auto Scaling group based on the launch template. Configure the scaling policy for the Auto Scaling group to adjust the number of nodes according to the volume of items in the SQS queue.
{: .option}
- [ ] D. Set up an Amazon SNS topic for dispatching jobs that require processing. Develop an Amazon Machine Image (AMI) that includes the processing application. Establish a launch template that incorporates the AMI. Form an Auto Scaling group utilizing the launch template. Configure the scaling policy for the Auto Scaling group to increase or decrease the number of nodes according to the volume of messages sent to the SNS topic.
{: .option}

C
{: .answer}

The correct answer to the question is **C**: "Set up an Amazon SQS queue to store the jobs requiring processing. Develop an Amazon Machine Image (AMI) that includes the processing application. Create a launch template that utilizes this AMI. Establish an Auto Scaling group based on the launch template. Configure the scaling policy for the Auto Scaling group to adjust the number of nodes according to the volume of items in the SQS queue."

### Why Answer C is Correct

1. **Durable Job Storage**: Amazon SQS (Simple Queue Service) is a fully managed message queuing service that enables decoupling and scaling microservices, distributed systems, and serverless applications. SQS ensures that job items are durably stored and can be processed asynchronously. This is crucial for handling jobs that may have varying processing times and loads.

2. **Stateless Processing**: The application is stateless, meaning it does not retain any data between executions. This characteristic fits well with a queue-based architecture, where multiple instances of the processing application can pull jobs from the SQS queue without needing to share state information.

3. **Auto Scaling Based on Queue Length**: In the proposed architecture, the Auto Scaling group is configured to adjust the number of processing nodes based on the number of items in the SQS queue. This allows the system to scale out when there are more jobs to process and scale back in when jobs are completed, thus optimizing resource utilization effectively.

4. **Use of Launch Template**: Using a launch template (instead of a launch configuration) is a recommended best practice in AWS, as it offers more flexibility, including versioning and additional options for configuring the EC2 instances.

### Why the Other Answers are Incorrect

**A. Set up an Amazon SNS topic to dispatch the jobs requiring processing.**
- **Problem**: Amazon SNS (Simple Notification Service) is designed for pub/sub messaging and does not provide durable storage for messages. If the subscribers are not available at the time the message is published, they might miss the messages. This does not meet the requirement of "durably stored" job items.

**B. Set up an Amazon SQS queue to manage the jobs awaiting processing.**
- **Problem**: While using SQS is a good approach, the answer mentions adjusting the scaling policy based on network traffic instead of the volume of items in the SQS queue. This does not directly relate to the jobs that need processing and could lead to over-provisioning or under-provisioning of resources based on irrelevant metrics.

**D. Set up an Amazon SNS topic for dispatching jobs that require processing.**
- **Problem**: Similar to option A, using SNS does not provide durable storage for jobs. SNS is intended for real-time notifications and broadcasting messages to multiple subscribers, but it lacks the queuing capability that SQS provides, which is essential for ensuring that jobs are processed reliably.

### Technical Details for AWS Solutions Architect Associate Exam

- **Amazon SQS**:
  - **Queue Types**: Familiarize yourself with the difference between Standard Queues (at-least-once delivery, unordered) and FIFO Queues (exactly-once processing, ordered).
  - **Visibility Timeout**: Understand how the visibility timeout works, which prevents other consumers from processing a message while it’s being processed.
  - **Long Polling**: Know how to implement long polling to reduce the number of empty responses and improve efficiency.

- **Auto Scaling Groups**:
  - **Scaling Policies**: Different types of scaling policies (target tracking, step scaling, and scheduled scaling) and how they can be configured based on specific metrics.
  - **Launch Templates vs. Launch Configurations**: Understand the advantages of using launch templates, such as versioning and the ability to specify multiple instance types.

- **Amazon SNS**:
  - **Use Cases**: Recognize suitable use cases for SNS, such as sending notifications, alerts, and broadcasting messages to multiple endpoints.

Understanding these components and how they interact is essential for designing scalable, resilient applications on AWS, which is a key focus of the AWS Solutions Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A solutions architect is designing the cloud architecture for a new application being deployed on AWS. The process should run in parallel while adding and removing application nodes as needed based on the number of jobs to be processed. The processor application is stateless. The solutions architect must ensure that the application is loosely coupled and the job items are durably stored.
Which design should the solutions architect use?
{: .original-query}

### Original Questions

- [ ] A. Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on CPU usage.
{: .originaloption}
- [ ] B. Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on network usage.
{: .originaloption}
- [ ] C. Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of items in the SQS queue.
{: .originaloption}
- [ ] D. Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of messages published to the SNS topic.
{: .originaloption}


### Comments

--- 
To achieve a loosely coupled architecture for the application, Amazon Simple Queue Service (SQS) is the ideal solution for managing the job processing workflow. By implementing SQS, the application can handle job items asynchronously, allowing for better scalability and reliability.

The application should be packaged in an Amazon Machine Image (AMI), which will encapsulate the necessary processing logic. Instead of using a launch configuration, a launch template should be employed. Launch templates provide enhanced features such as versioning and parameter specification, which are beneficial for managing EC2 instances.

An Auto Scaling group will be established based on the launch template. This group will dynamically adjust the number of EC2 instances in response to the volume of messages in the SQS queue. By configuring the scaling policy to consider the number of items waiting in the queue, the architecture can efficiently scale resources up or down, ensuring that processing capacity aligns with demand while maintaining a stateless design.

This setup not only guarantees that job items are durably stored in SQS but also ensures that the processor application remains stateless and highly available, facilitating efficient job handling and resource optimization.
{: .comment}
--- 
This design is a shining example of best practices for creating a flexible and scalable architecture! 🌟 By utilizing SQS, we ensure that jobs are safely stored in the queue, so they don’t vanish into the digital abyss. Plus, since our processor application is stateless, it fits perfectly into the design requirements—like a key finding its lock! 🔑

The Amazon Machine Image (AMI) guarantees that the application is deployed consistently every time. With the launch template and Auto Scaling Group (ASG), we can dynamically scale the application based on the number of items in the SQS queue, allowing for the seamless parallel processing of jobs—like a well-choreographed dance! 💃🕺

Now, let’s take a quick look at the alternatives: Options A and D propose using SNS for job dispatching. While SNS is great for a publish/subscribe setup, it might not provide the durability needed for job storage—think of it as a party invitation that gets lost in the mail! 📬🚫 

Option B suggests scaling based on network traffic, which is a bit like measuring how busy a restaurant is by counting the number of people outside rather than checking how many tables are occupied inside. The number of items in the SQS queue is a much more accurate reflection of the workload, ensuring that scaling decisions are as precise as a chef’s knife! 🔪👨‍🍳

In summary, embracing SQS and the stateless design allows for a robust, flexible architecture that can handle the ebb and flow of job processing with ease! 🎉
{: .comment}
--- 
Answer: Option C is the winner here—it's the champion of decoupling and durability with SQS. By using an Amazon SQS queue, you can efficiently manage jobs waiting for processing while ensuring that they are safely stored. Plus, the auto-scaling feature based on the number of messages in the queue means your application can flexibly adapt to the workload without breaking a sweat. It's like having a well-oiled machine that knows just when to rev up or slow down, all while keeping your processing application stateless and easy to maintain.
{: .comment}
--- 
Option C is the clear choice! By setting up an Amazon SQS queue to manage the jobs that need processing, you ensure a reliable and durable storage solution. Developing an Amazon Machine Image (AMI) for the processing application allows for efficient scaling. Utilizing a launch template with this AMI provides flexibility, enabling the formation of an Auto Scaling group that can dynamically adjust based on the number of items in the SQS queue. This approach not only maintains a stateless architecture but also promotes loose coupling, ensuring that the application can seamlessly scale to meet demand. It's an excellent strategy for optimizing resource utilization and enhancing application performance!
{: .comment}
--- 
When it comes to processing jobs, relying on SNS can lead to some hiccups, especially in the event of a processing failure, making those options less dependable. On the bright side, SQS shines in this scenario! It enables parallel processing of messages while ensuring the utmost reliability and durability—just what we need! Using an AMI with EC2 for scaling is a fantastic choice, and it's best to base the scaling adjustments on the number of messages in the queue. Therefore, option "C" is the way to go! 🌟
{: .comment}

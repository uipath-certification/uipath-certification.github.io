---
layout: answered-question
title: "AWS A Company Has A Data Ingestion Workflow Question"
meta: "AWS Exam Question: A company’s data ingestion workflow uses Amazon SNS and AWS Lambda. What actions ensure data ingestion reliability? Find the answer, including AWS Step Functions and Amazon S3."
slug: "q-12-data-ingestion-workflow-SNS-LF"
certification: "AWS Solution Architect Associate Exam"
---


 A company utilizes a data ingestion workflow that includes:
- An Amazon Simple Notification Service (Amazon SNS) topic for alerts regarding new data deliveries
- An AWS Lambda function designed to process the data and log metadata

However, the company has noticed that this ingestion workflow sometimes fails due to network connectivity problems. When these failures happen, the Lambda function does not ingest the associated data unless the company intervenes and manually reruns the job.

What combination of measures should a solutions architect implement to guarantee that the Lambda function successfully ingests all data moving forward? (Select two options.)
{: .query}

- [ ] A. Implement the Lambda function across several Availability Zones.
{: .option}
- [ ] B. Set up an Amazon Simple Queue Service (Amazon SQS) queue and link it to the SNS topic.
{: .option}
- [ ] C. Boost the CPU and memory resources assigned to the Lambda function.
{: .option}
- [ ] D. Boost the allocated throughput for the Lambda function.
{: .option}
- [ ] E. Adjust the Lambda function to retrieve messages from an Amazon Simple Queue Service (Amazon SQS) queue.
{: .option}

BE
{: .answer}

To ensure that the Lambda function ingests all data in the future, the correct actions are:

**B. Set up an Amazon Simple Queue Service (Amazon SQS) queue and link it to the SNS topic.**  
**E. Adjust the Lambda function to retrieve messages from an Amazon Simple Queue Service (Amazon SQS) queue.**

### Explanation for Correct Answers:

1. **Setting up an Amazon SQS Queue (Answer B)**:
   - By introducing SQS into the workflow, you create a buffer that allows for message retention even when there are network connectivity issues or when the Lambda function fails to process the message.
   - SNS can publish messages to the SQS queue whenever there is new data, and SQS will store these messages until the Lambda function can successfully process them. This mechanism ensures that no data is lost and the workflow is more resilient to failures.

2. **Adjusting the Lambda Function to Retrieve Messages from SQS (Answer E)**:
   - By configuring the Lambda function to poll messages from the SQS queue, you create a more reliable integration. The Lambda function can automatically retry processing messages that fail, and SQS has built-in mechanisms for message visibility timeouts and dead-letter queues to handle failures.
   - This setup helps in managing the processing load and ensures that messages are processed asynchronously, thus improving the overall reliability of the ingestion workflow.

### Reasons Why the Other Options Are Incorrect:

1. **Implement the Lambda function across several Availability Zones (Answer A)**:
   - While implementing the Lambda function across multiple Availability Zones (AZs) can enhance availability and fault tolerance, it does not address the core issue of message ingestion and handling failures due to network connectivity. The Lambda function can still miss messages if they are not retried properly after a failure. SQS is the more effective solution for ensuring that messages are not lost.

2. **Boost the CPU and memory resources assigned to the Lambda function (Answer C)**:
   - Increasing CPU and memory resources might improve the performance of the Lambda function, but it does not resolve issues related to network connectivity or ensure that all messages are processed. If the function fails due to connectivity issues, simply allocating more resources will not handle message retention or retries.

3. **Boost the allocated throughput for the Lambda function (Answer D)**:
   - Similar to increasing CPU and memory, boosting throughput might help with performance, but it doesn't solve the core problem of missed messages due to failures. Lambda's concurrency limits and the nature of the events are not directly tied to the ability to handle failures related to connectivity.

### Technical Details for AWS Solution Architect Associate Exam:

- **Amazon SQS**: A fully managed message queuing service that enables decoupling and scaling microservices, distributed systems, and serverless applications. SQS offers two types of queues: Standard and FIFO (First-In-First-Out). Standard queues offer high throughput, while FIFO queues ensure the order of message processing.
  
- **Amazon SNS**: A fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication. SNS can be used to fan out messages to multiple subscribers, including SQS queues, HTTP endpoints, Lambda functions, etc.

- **AWS Lambda**: A serverless compute service that runs code in response to events and automatically manages the compute resources required. Lambda functions are stateless and scale automatically based on the number of incoming requests, but they can be statically configured with timeout and memory limits.

- **Retries and Error Handling**: When integrating Lambda with SQS, Lambda automatically retries processing messages that fail to process initially. If the message fails after a specified number of retries, it can be sent to a dead-letter queue (DLQ) for further investigation.

Understanding these concepts and how they interrelate is crucial for passing the AWS Certified Solutions Architect – Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company has a data ingestion workflow that consists of the following:
• An Amazon Simple Notification Service (Amazon SNS) topic for notifications about new data deliveries
• An AWS Lambda function to process the data and record metadata
The company observes that the ingestion workflow fails occasionally because of network connectivity issues. When such a failure occurs, the Lambda function does not ingest the corresponding data unless the company manually reruns the job.
Which combination of actions should a solutions architect take to ensure that the Lambda function ingests all data in the future? (Choose two.)
{: .original-query}

### Original Questions

- [ ] A. Deploy the Lambda function in multiple Availability Zones.
{: .originaloption}
- [ ] B. Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic.
{: .originaloption}
- [ ] C. Increase the CPU and memory that are allocated to the Lambda function.
{: .originaloption}
- [ ] D. Increase provisioned throughput for the Lambda function.
{: .originaloption}
- [ ] E. Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue.
{: .originaloption}


### Comments

--- 
Options A, C, and D can be ruled out because AWS Lambda is a fully managed service that inherently provides high availability and scalability. Therefore, the focus should be on improving the data ingestion reliability.

The appropriate actions to take are options B and E. By setting up an Amazon Simple Queue Service (Amazon SQS) queue linked to the Amazon SNS topic, you can ensure that incoming messages are reliably stored until the Lambda function is ready to process them. Additionally, configuring the Lambda function to retrieve messages from the SQS queue allows for handling retries and ensures that no data is lost during network connectivity issues. This combination enhances the resilience of the data ingestion workflow, enabling it to effectively manage transient failures.
{: .comment}
--- 
Sometimes, giving Lambda a little extra memory can work wonders for its performance! 🚀 However, in this particular scenario, that’s not the solution we're looking for. Instead, let's think about making sure our data ingestion process runs as smoothly as a well-oiled machine, even when the network decides to take a coffee break! ☕️✨
{: .comment}
--- 
To ensure the Lambda function doesn’t miss a beat (or a byte) when the network decides to play hard to get, it’s essential to route messages through an SQS queue. This way, even if the Lambda function is having an off day due to connectivity hiccups, the data will patiently wait in the queue until it’s ready to be processed. Think of it as giving your data a comfy waiting room while the Lambda function gets its act together. 

By implementing this strategy, you can say goodbye to the days of manually rescheduling data ingestion. After all, who has time to babysit a workflow when there are better things to do? With SQS in the mix, you can ensure that no data is left behind, making your ingestion process more resilient and reliable.
{: .comment}
--- 
A highly effective approach is to decouple the applications by utilizing an Amazon Simple Queue Service (SQS) queue. This strategy not only enhances the reliability of the data ingestion workflow but also ensures that data is processed seamlessly, even in the event of network connectivity issues. By introducing SQS, you can create a buffer that allows the Lambda function to retrieve messages asynchronously, ensuring that no data is lost and that processing continues smoothly. This solution empowers your system to handle interruptions gracefully and maintains the integrity of data ingestion.
{: .comment}
--- 
🌟 Explanation:

Setting up an SQS queue and subscribing it to the SNS topic (Option B) is a stellar move! When the SNS topic sends out notifications, they get nicely tucked away in the SQS queue. This clever arrangement ensures that messages are safely stored, even if the Lambda function isn't available to process them right away.

Next, by adjusting the Lambda function to pull messages from the SQS queue (Option E), we create a harmonious flow! The Lambda function can be triggered by messages waiting in the SQS queue. Should any connectivity hiccups or function failures occur, those messages will patiently remain in the SQS queue until they're successfully processed. This delightful setup prevents message loss and eliminates the need for manual intervention. With this cheerful duo, the data ingestion workflow can continue to shine bright and operate smoothly! 🌈
{: .comment}

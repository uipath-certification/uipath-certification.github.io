---
layout: answered-question
title: "AWS An Image-Processing Company Has A Web Application Question"
meta: "AWS Exam Question: An image-processing company using Amazon S3, SQS, and AWS Lambda faces issues with multiple email notifications for uploaded images. Find the answer."
slug: "q-42-image-processing-upload-s3-sqs"
certification: "AWS Solution Architect Associate Exam"
---


 An image-processing company operates a web application that allows users to upload images, which are then stored in an Amazon S3 bucket. To manage this process, the company has configured S3 event notifications to send object creation events to an Amazon Simple Queue Service (Amazon SQS) standard queue. This queue acts as the event source for an AWS Lambda function responsible for processing the images and emailing the results to users. However, users have reported receiving multiple email notifications for each uploaded image. Upon investigation, a solutions architect discovers that the SQS messages are triggering the Lambda function multiple times, leading to the repeated emails. What steps should the solutions architect take to address this issue while minimizing operational overhead?
{: .query}

- [ ] A. Configure long polling in the SQS queue by extending the ReceiveMessage wait duration to 30 seconds.
{: .option}
- [ ] B. Convert the SQS standard queue into an SQS FIFO queue. Utilize the message deduplication ID to eliminate any duplicate messages.
{: .option}
- [x] C. Set the visibility timeout in the SQS queue to a value that exceeds the combined total of the function timeout and the batch window timeout.
{: .option}
- [ ] D. Adjust the Lambda function to remove each message from the SQS queue right after it is read, prior to processing.
{: .option}

C
{: .answer}

The correct answer to resolve the issue of users receiving multiple email messages for every uploaded image is **C. Set the visibility timeout in the SQS queue to a value that exceeds the combined total of the function timeout and the batch window timeout.**

### Explanation of the Correct Answer (C)

Setting the visibility timeout in the SQS queue to a value that exceeds the combined total of the function timeout and the batch window timeout ensures that once a message is received by the Lambda function, it remains invisible to other consumers for the duration of processing. If the Lambda function takes longer than expected to process the message and complete the task, the message will become visible again in the queue if the visibility timeout expires, leading to the same message being processed multiple times. Therefore, by extending the visibility timeout, you reduce the risk of duplicate processing of messages, thus avoiding multiple email notifications.

### Why the Other Options Are Incorrect

**A. Configure long polling in the SQS queue by extending the ReceiveMessage wait duration to 30 seconds.**
- Long polling helps to reduce the number of empty responses and can improve the efficiency of message retrieval. However, it does not address the underlying issue of multiple invocations of the Lambda function due to message visibility timeout. Thus, while it can be beneficial for reducing costs and improving latency, it does not prevent duplicate messages from being processed.

**B. Convert the SQS standard queue into an SQS FIFO queue. Utilize the message deduplication ID to eliminate any duplicate messages.**
- While converting to a FIFO queue can help avoid processing duplicates, it introduces additional complexity and overhead, such as managing deduplication IDs and ensuring that messages are processed in order. This solution may also require changes to the application design and architecture, which would not have the least operational overhead. Therefore, for a quick fix with minimal changes, option C is preferable.

**D. Adjust the Lambda function to remove each message from the SQS queue right after it is read, prior to processing.**
- This option is fundamentally flawed because it defeats the purpose of SQS, which is to ensure that messages are only removed after successful processing. If the message is deleted before processing and an error occurs, the message is lost, leading to data loss. Additionally, this would not solve the problem of multiple invocations if the Lambda function is invoked more than once for the same message due to visibility timeout issues.

### Technical Details for AWS Solution Architect Associate Exam

1. **SQS Visibility Timeout**: This is the duration that the message remains invisible after being read by a consumer. If the consumer does not delete the message within this period, it becomes visible again and may be reprocessed. Setting this timeout appropriately is crucial to avoid duplicate processing.

2. **Lambda Function Timeout**: This is the maximum duration that a Lambda function can run before it is forcibly terminated. It's vital to configure the visibility timeout in SQS to be longer than the Lambda timeout to prevent messages from becoming visible again while the function is still processing.

3. **SQS Standard vs. FIFO Queues**: Standard queues offer at-least-once delivery and may result in duplicate messages, while FIFO queues ensure exactly-once processing but at the cost of throughput and increased complexity.

4. **Long Polling**: This feature allows SQS to wait for a message to arrive or for the long polling timeout to expire. It can improve efficiency but does not solve duplication issues.

5. **Lambda Event Source Mapping**: Understand how Lambda functions are triggered by SQS messages, including the batch size and how multiple messages can be processed in one invocation.

By understanding these concepts, candidates can better prepare for the AWS Solutions Architect Associate Exam and make informed architectural decisions when dealing with AWS services.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

An image-processing company has a web application that users use to upload images. The application uploads the images into an Amazon S3 bucket. The company has set up S3 event notifications to publish the object creation events to an Amazon Simple Queue Service (Amazon SQS) standard queue. The SQS queue serves as the event source for an AWS Lambda function that processes the images and sends the results to users through email.
Users report that they are receiving multiple email messages for every uploaded image. A solutions architect determines that SQS messages are invoking the Lambda function more than once, resulting in multiple email messages.
What should the solutions architect do to resolve this issue with the LEAST operational overhead?
{: .original-query}

### Original Questions

- [ ] A. Set up long polling in the SQS queue by increasing the ReceiveMessage wait time to 30 seconds.
{: .originaloption}
- [ ] B. Change the SQS standard queue to an SQS FIFO queue. Use the message deduplication ID to discard duplicate messages.
{: .originaloption}
- [ ] C. Increase the visibility timeout in the SQS queue to a value that is greater than the total of the function timeout and the batch window timeout.
{: .originaloption}
- [ ] D. Modify the Lambda function to delete each message from the SQS queue immediately after the message is read before processing.
{: .originaloption}


### Comments


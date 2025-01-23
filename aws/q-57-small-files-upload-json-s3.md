---
layout: answered-question
title: "AWS A Company Is Designing An Application Question"
meta: "AWS Exam Question: A company needs to process files uploaded to Amazon S3 with minimal overhead. What is the best solution? Find the answer using AWS Lambda and JSON."
slug: "q-57-small-files-upload-json-s3"
certification: "AWS Solution Architect Associate Exam"
---


 A company is developing an application that allows users to upload small files to Amazon S3. Once a file is uploaded, it needs to undergo a one-time, straightforward processing step to convert the data into JSON format for future analysis. It's important that each file is processed promptly after the upload. The volume of uploads will fluctuate; some days may see a surge in file submissions, while other days may have only a few or even none at all. What solution would effectively meet these needs while minimizing operational overhead?
{: .query}

- [ ] A. Set up Amazon EMR to access text files stored in Amazon S3. Execute processing scripts to convert the data. Save the resulting JSON file in an Amazon Aurora database cluster.
{: .option}
- [ ] B. Set up Amazon S3 to trigger an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Utilize Amazon EC2 instances to retrieve messages from the queue and handle the data. Save the generated JSON file in Amazon DynamoDB.
{: .option}
- [x] C. Set up Amazon S3 to trigger an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Utilize an AWS Lambda function to retrieve messages from the queue and handle the data. Save the generated JSON file in Amazon DynamoDB.
{: .option}
- [ ] D. Set up Amazon EventBridge (formerly known as Amazon CloudWatch Events) to trigger an event to Amazon Kinesis Data Streams upon the upload of a new file. Employ an AWS Lambda function to read the event from the stream and handle the data processing. Save the resulting JSON file in an Amazon Aurora DB cluster.
{: .option}

C
{: .answer}

The correct answer is **C**: Set up Amazon S3 to trigger an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Utilize an AWS Lambda function to retrieve messages from the queue and handle the data. Save the generated JSON file in Amazon DynamoDB.

### Explanation of the Correct Answer (C)

1. **Event-Driven Architecture**: By using Amazon S3 event notifications, the architecture becomes event-driven. Once a file is uploaded to S3, it triggers an event that sends a message to the SQS queue. This ensures that the processing starts as soon as the file is uploaded, which meets the requirement for quick processing.

2. **AWS Lambda**: Utilizing AWS Lambda allows for serverless execution of the processing code. This approach eliminates the need to manage servers or instances, thereby reducing operational overhead. Lambda scales automatically based on the number of events (file uploads) and is billed based on the actual compute time used, making it cost-effective.

3. **DynamoDB**: Saving the processed JSON file to Amazon DynamoDB is suitable because it is a fully managed NoSQL database that can handle varying workloads. It provides low-latency data access and scales automatically, fitting the requirement for handling varying demands.

4. **Operational Overhead**: This solution has the least operational overhead because it leverages managed services (S3, SQS, Lambda, DynamoDB) that require minimal maintenance and operational management, allowing the company to focus on the application rather than infrastructure.

### Breakdown of the Wrong Answers

**A. Set up Amazon EMR to access text files stored in Amazon S3. Execute processing scripts to convert the data. Save the resulting JSON file in an Amazon Aurora database cluster.**

- **Overhead**: Amazon EMR is a big data processing service that can handle large-scale processing but comes with significant operational overhead. It requires cluster management, configuration, and tuning.
- **Latency**: EMR is not optimized for quick, one-off processing of small files. It is better suited for large-scale batch processing and can introduce delays in processing time.
- **Complexity**: This option is more complex than necessary for simple file processing, which could be efficiently handled by serverless architectures.

**B. Set up Amazon S3 to trigger an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Utilize Amazon EC2 instances to retrieve messages from the queue and handle the data. Save the generated JSON file in Amazon DynamoDB.**

- **Operational Overhead**: This solution requires maintaining EC2 instances, which increases operational overhead. You would need to manage scaling, instance health, and availability.
- **Cost**: Running EC2 instances incurs costs even when idle, unlike Lambda, which only charges for execution time. Thus, this option is likely to be more expensive.

**D. Set up Amazon EventBridge (formerly known as Amazon CloudWatch Events) to trigger an event to Amazon Kinesis Data Streams upon the upload of a new file. Employ an AWS Lambda function to read the event from the stream and handle the data processing. Save the resulting JSON file in an Amazon Aurora DB cluster.**

- **Unnecessary Complexity**: Using Kinesis Data Streams adds unnecessary complexity for simple file processing. Kinesis is best used for streaming data and real-time processing scenarios, which is overkill for the described use case.
- **Operational Overhead**: Aurora is a relational database service that may introduce more operational overhead compared to DynamoDB, especially for simple JSON storage needs. If the application does not require relational database features, DynamoDB is a better choice.

### Technical Details for AWS Solution Architect Associate Exam

1. **AWS Lambda**: Understand the concepts of event sources, triggers, and how Lambda scales automatically. Familiarize yourself with the pricing model based on request and execution duration.

2. **Amazon S3 Event Notifications**: Know how to configure S3 to send notifications to SQS, SNS, or Lambda. Understand the types of events that can trigger notifications (e.g., file uploads).

3. **Amazon SQS**: Understand the purpose of SQS, how it decouples components, and the benefits of using a queue in an event-driven architecture.

4. **Amazon DynamoDB**: Be familiar with NoSQL concepts, the advantages of using DynamoDB (such as auto-scaling and managed service features), and how to interact with it programmatically.

5. **Comparison of Services**: Be prepared to compare services based on use cases, operational overhead, scalability, and cost implications, as demonstrated in the analysis of each option. 

By understanding these concepts, you'll be better equipped for the AWS Solutions Architect Associate exam and real-world AWS implementations.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is designing an application where users upload small files into Amazon S3. After a user uploads a file, the file requires one-time simple processing to transform the data and save the data in JSON format for later analysis.
Each file must be processed as quickly as possible after it is uploaded. Demand will vary. On some days, users will upload a high number of files. On other days, users will upload a few files or no files.
Which solution meets these requirements with the LEAST operational overhead?
{: .original-query}

### Original Questions

- [ ] A. Configure Amazon EMR to read text files from Amazon S3. Run processing scripts to transform the data. Store the resulting JSON file in an Amazon Aurora DB cluster.
{: .originaloption}
- [ ] B. Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use Amazon EC2 instances to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB.
{: .originaloption}
- [ ] C. Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB.
{: .originaloption}
- [ ] D. Configure Amazon EventBridge (Amazon CloudWatch Events) to send an event to Amazon Kinesis Data Streams when a new file is uploaded. Use an AWS Lambda function to consume the event from the stream and process the data. Store the resulting JSON file in an Amazon Aurora DB cluster.
{: .originaloption}


### Comments


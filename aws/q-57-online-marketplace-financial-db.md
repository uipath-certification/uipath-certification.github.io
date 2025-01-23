---
layout: answered-question
title: "AWS A Company Runs An Online Marketplace Question"
meta: "AWS Exam Question: A company needs a scalable solution for sharing financial transactions in real-time while ensuring data privacy. The answer includes AWS Lambda and Amazon DocumentDB."
slug: "q-57-online-marketplace-financial-db"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates an online marketplace web application on AWS that caters to hundreds of thousands of users during peak periods. To effectively manage the details of millions of financial transactions, the company requires a scalable solution that can share this information in near-real-time with various internal applications. Additionally, it is essential that the transactions are processed to eliminate sensitive data prior to being stored in a document database for quick retrieval. What recommendations should a solutions architect provide to address these needs?
{: .query}

- [ ] A. Save the transaction data in Amazon DynamoDB. Configure a rule in DynamoDB to eliminate sensitive information from each transaction during the write process. Utilize DynamoDB Streams to distribute the transaction data to other applications.
{: .option}
- [ ] B. Send the transaction data to Amazon Kinesis Data Firehose for storage in Amazon DynamoDB and Amazon S3. Utilize AWS Lambda in conjunction with Kinesis Data Firehose to eliminate any sensitive information. Other applications can access the data saved in Amazon S3.
{: .option}
- [x] C. Stream the transaction data into Amazon Kinesis Data Streams. Integrate AWS Lambda to eliminate sensitive information from each transaction before storing the transaction data in Amazon DynamoDB. Other applications can access the transaction data from the Kinesis data stream.
{: .option}
- [ ] D. Save the batched transaction data as files in Amazon S3. Utilize AWS Lambda to handle each file and eliminate any sensitive information before refreshing the files in Amazon S3. Subsequently, the Lambda function uploads the data to Amazon DynamoDB. Other applications can access the transaction files housed in Amazon S3.
{: .option}

C
{: .answer}

The correct answer to the question is **C: Stream the transaction data into Amazon Kinesis Data Streams. Integrate AWS Lambda to eliminate sensitive information from each transaction before storing the transaction data in Amazon DynamoDB. Other applications can access the transaction data from the Kinesis data stream.**

### Why Option C is Correct

1. **Scalability**: Amazon Kinesis Data Streams is designed to handle large volumes of streaming data in real time. It can easily scale to accommodate hundreds of thousands of transactions during peak hours, which is essential for the company’s needs.

2. **Real-time Processing**: Kinesis Data Streams allows you to process data in near-real-time by integrating with AWS Lambda. The Lambda function can be triggered for each record in the stream, allowing for immediate processing and transformation of the data (e.g., removing sensitive information).

3. **Data Storage in DynamoDB**: After processing the transactions, the cleaned data can be stored in Amazon DynamoDB, which is a fully managed NoSQL database service that provides low-latency access to data. This is suitable for applications that require quick retrieval of transaction data.

4. **Flexibility**: By using Kinesis Data Streams, multiple applications can consume the transaction data simultaneously. This makes it easier to share data across various internal applications without affecting the performance of the primary transaction processing system.

### Why the Other Options Are Incorrect

**A. Save the transaction data in Amazon DynamoDB. Configure a rule in DynamoDB to eliminate sensitive information from each transaction during the write process. Utilize DynamoDB Streams to distribute the transaction data to other applications.**
- **Limitation on Processing**: DynamoDB is not designed for complex data transformations during the write process. While DynamoDB Streams can forward changes to other applications, it doesn’t allow real-time processing of the data before it is written, which is crucial for sensitive data handling.
- **Performance Concerns**: Writing to DynamoDB with sensitive data and then trying to clean it up afterward using streams could lead to performance bottlenecks.

**B. Send the transaction data to Amazon Kinesis Data Firehose for storage in Amazon DynamoDB and Amazon S3. Utilize AWS Lambda in conjunction with Kinesis Data Firehose to eliminate any sensitive information. Other applications can access the data saved in Amazon S3.**
- **Latency**: Kinesis Data Firehose is optimized for data delivery rather than real-time processing. While it can batch and deliver data to destinations like S3 and DynamoDB, the focus here is on data storage rather than immediate processing, which does not meet the near-real-time requirement.
- **Data Transformation**: While you can use Lambda with Firehose, the primary use case of Firehose is for loading data rather than on-the-fly processing, which makes it less suitable than Kinesis Data Streams for this scenario.

**D. Save the batched transaction data as files in Amazon S3. Utilize AWS Lambda to handle each file and eliminate any sensitive information before refreshing the files in Amazon S3. Subsequently, the Lambda function uploads the data to Amazon DynamoDB. Other applications can access the transaction files housed in Amazon S3.**
- **Batch Processing**: This option implies a batch processing model, which introduces latency. It is not suitable for a near-real-time solution where immediate processing of each transaction is required.
- **Complexity**: Handling files in S3 for transaction data increases complexity, as it would require additional logic for file handling, monitoring, and updating, which is not ideal for high-throughput environments needing immediate access to transaction details.

### Technical Details Relevant for the AWS Solutions Architect Associate Exam

1. **Kinesis Data Streams**: Understand how to create a stream, how data is partitioned, and how to manage consumers and producers. Know the limits on shard throughput and how to scale streams.

2. **AWS Lambda**: Familiarize yourself with Lambda triggers, the execution model, and how to manage dependencies. Understand how Lambda integrates with other services like Kinesis and DynamoDB.

3. **DynamoDB**: Learn about DynamoDB data modeling, partition keys, sort keys, and how to optimize read/write performance. Understand how to implement DynamoDB Streams and its use cases.

4. **Data Processing Patterns**: Recognize the differences between real-time data processing (using Kinesis) versus batch processing (using S3) and the trade-offs involved.

5. **Security and Compliance**: Be aware of the importance of removing sensitive information, and understand AWS services that help with data encryption and compliance.

By understanding these concepts, candidates can better evaluate the architecture needed for a solution that meets specific business requirements while preparing effectively for the AWS Solutions Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval.
What should a solutions architect recommend to meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications.
{: .originaloption}
- [ ] B. Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.
{: .originaloption}
- [ ] C. Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every transaction and then store the transactions data in Amazon DynamoDB. Other applications can consume the transactions data off the Kinesis data stream.
{: .originaloption}
- [ ] D. Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB. Other applications can consume transaction files stored in Amazon S3.
{: .originaloption}


### Comments

--- 
The most suitable option is C. The phrase "near-real-time solution" indicates a requirement for a streaming approach, which aligns with the capabilities of Kinesis Data Streams. While Kinesis Data Firehose is an effective service for delivering data to certain destinations, it does not support direct integration with DynamoDB, making option C the most viable choice.

Kinesis Data Firehose currently supports multiple destinations, including Amazon S3, Amazon Redshift, Amazon OpenSearch Service, Splunk, Datadog, New Relic, Dynatrace, Sumo Logic, LogicMonitor, MongoDB, and HTTP Endpoints. This flexibility is beneficial for various analytics and monitoring use cases, but for this scenario where DynamoDB is essential, Kinesis Data Streams paired with AWS Lambda provides the required functionality to process and sanitize transaction data in real-time before storing it in DynamoDB. This architecture ensures that sensitive information is removed efficiently, allowing other applications to access the processed data seamlessly.
{: .comment}
--- 
Wow, this one really had me scratching my head! 🤔 But fear not, I’ve found the shining star in this constellation of options! 🌟 After diving into the details, I’m leaning towards answer C. It strikes the perfect balance of scalability and security, plus it’s got that real-time flair! Let’s kick those sensitive details to the curb with AWS Lambda and keep everything running smoother than a freshly buttered slide! 🛝 Thanks for all the great insights!
{: .comment}
--- 
When it comes to choosing between Firehose and Kinesis Data Streams, it’s like picking your favorite flavor of ice cream—both can do the job, but they have their quirks. You really need to dive into the details of both options to make an informed choice. Understanding their unique features will help you navigate through the complexities of data streaming and processing. So, don’t just skim the surface; get familiar with the ins and outs to find the best fit for your needs. Thanks for breaking it down!
{: .comment}
--- 
Using Kinesis Data Streams is ideal for scenarios where real-time results are essential. In contrast, Kinesis Data Firehose is typically employed for storing data for later use, which may not align with immediate processing needs. Therefore, when the requirement emphasizes "real-time" processing, it is likely that Kinesis Data Streams is the most appropriate choice.
{: .comment}
--- 
Oh, I totally understand your concern! While it may seem a bit tricky at first glance, Kinesis Data Streams is indeed designed with scalability in mind. You do need to specify the number of shards upfront, but here’s the delightful twist: you can adjust the number of shards dynamically! This means that as your data flow increases or decreases, you can scale up or down accordingly. This flexibility ensures that your streaming application can handle varying workloads without a hitch! 🌟
{: .comment}

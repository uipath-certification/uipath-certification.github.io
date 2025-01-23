---
layout: answered-question
title: "AWS A Company Needs To Configure A Question"
meta: "AWS Exam Question: A company needs to configure a real-time data ingestion architecture with an API, data transformation, and storage solution. Get the answer using AWS technologies like Kinesis and Lambda."
slug: "q-45-real-time-data-ingestion-API"
certification: "AWS Solution Architect Associate Exam"
---


 A company is looking to set up a real-time data ingestion architecture for its application. This setup requires an API, a mechanism to transform the data during streaming, and a storage solution for the incoming data. What solution would fulfill these needs while minimizing operational overhead?
{: .query}

- [ ] A. Set up an Amazon EC2 instance to run an API that transmits data to an Amazon Kinesis data stream. Establish an Amazon Kinesis Data Firehose delivery stream that utilizes the Kinesis data stream as its source. Implement AWS Lambda functions for data transformation. Finally, use the Kinesis Data Firehose delivery stream to transfer the data to Amazon S3.
{: .option}
- [ ] B. Launch an Amazon EC2 instance to operate an API that transmits data to AWS Glue. Disable source/destination checking on the EC2 instance. Utilize AWS Glue to process the data and transfer it to Amazon S3.
{: .option}
- [x] C. Set up an Amazon API Gateway API to transmit data to an Amazon Kinesis data stream. Establish an Amazon Kinesis Data Firehose delivery stream that utilizes the Kinesis data stream as its source. Employ AWS Lambda functions for data transformation. Utilize the Kinesis Data Firehose delivery stream to transfer the data to Amazon S3.
{: .option}
- [ ] D. Set up an Amazon API Gateway API to transmit data to AWS Glue. Utilize AWS Lambda functions for data transformation. Leverage AWS Glue to transfer the data to Amazon S3.
{: .option}

C
{: .answer}

The correct answer to the question is **C**: "Set up an Amazon API Gateway API to transmit data to an Amazon Kinesis data stream. Establish an Amazon Kinesis Data Firehose delivery stream that utilizes the Kinesis data stream as its source. Employ AWS Lambda functions for data transformation. Utilize the Kinesis Data Firehose delivery stream to transfer the data to Amazon S3."

### Why Option C is Correct

1. **API Management**: Using **Amazon API Gateway** allows for easy management of the API, including features like throttling, authorization, and monitoring. It provides the necessary infrastructure to create, publish, maintain, monitor, and secure APIs at any scale.

2. **Real-time Data Ingestion**: **Amazon Kinesis Data Streams** is designed for real-time data ingestion and processing. It can handle large streaming data from various sources effectively, making it a suitable choice for real-time applications.

3. **Data Transformation**: **AWS Lambda** is a serverless compute service that can be triggered by events. You can set up Lambda functions to process and transform the data as it flows through the Kinesis data stream, providing powerful and flexible transformation capabilities.

4. **Storage Solution**: **Amazon Kinesis Data Firehose** automatically handles the data buffering and transfer to **Amazon S3**, which is an efficient and cost-effective storage solution. Firehose can also handle the compression and encryption of the data, reducing operational overhead.

By combining these services, Option C provides a cohesive solution that minimizes operational complexity while meeting all the requirements of real-time data ingestion, transformation, and storage.

### Why the Other Options are Incorrect

- **Option A**: "Set up an Amazon EC2 instance to run an API..." 
  - **Operational Overhead**: Running an EC2 instance introduces more operational overhead compared to using API Gateway. You need to manage the server, including scaling, patching, and availability.
  - **Complexity**: The configuration of Kinesis Data Streams and Firehose with an EC2 instance is more complex and less efficient than using API Gateway.

- **Option B**: "Launch an Amazon EC2 instance to operate an API that transmits data to AWS Glue..."
  - **AWS Glue Limitations**: AWS Glue is primarily designed for ETL (Extract, Transform, Load) jobs and may not be the best choice for real-time data processing. It has a higher latency compared to Kinesis, which is specifically designed for streaming data.
  - **Operational Overhead**: Similar to Option A, using EC2 introduces more management overhead.

- **Option D**: "Set up an Amazon API Gateway API to transmit data to AWS Glue..."
  - **Not Ideal for Real-Time**: While API Gateway is a good choice, sending data directly to AWS Glue for processing does not facilitate real-time data handling. Glue is not optimized for streaming data; it is more suited for batch processing.
  - **Complexity and Latency**: Using Glue would introduce unnecessary complexity and latency, making it less suitable for real-time applications compared to Kinesis.

### Technical Details for AWS Solutions Architect Associate Exam

1. **Amazon API Gateway**: Understand its features, such as rate limiting, authorization (using IAM roles or Lambda authorizers), and the integration with other AWS services.
  
2. **Amazon Kinesis**: Know the differences between Kinesis Data Streams, Kinesis Data Firehose, and Kinesis Data Analytics. Understand how to configure streams, shards, and the scaling aspects.

3. **AWS Lambda**: Be familiar with how to create, deploy, and manage Lambda functions. Understand how they can be triggered by Kinesis streams and how to handle errors and retries.

4. **Amazon S3**: Learn about S3 storage classes, lifecycle policies, and how to configure Kinesis Data Firehose to write to S3, including options for buffering and data transformation.

5. **Overall Architecture**: Understand the concepts of event-driven architecture and how to design systems that can scale automatically, handle failures gracefully, and maintain low operational overhead.

By mastering these services and their interactions, you will be well-prepared for the AWS Solutions Architect Associate exam and designing efficient architectures in AWS.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company needs to configure a real-time data ingestion architecture for its application. The company needs an API, a process that transforms data as the data is streamed, and a storage solution for the data.
Which solution will meet these requirements with the LEAST operational overhead?
{: .original-query}

### Original Questions

- [ ] A. Deploy an Amazon EC2 instance to host an API that sends data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.
{: .originaloption}
- [ ] B. Deploy an Amazon EC2 instance to host an API that sends data to AWS Glue. Stop source/destination checking on the EC2 instance. Use AWS Glue to transform the data and to send the data to Amazon S3.
{: .originaloption}
- [ ] C. Configure an Amazon API Gateway API to send data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.
{: .originaloption}
- [ ] D. Configure an Amazon API Gateway API to send data to AWS Glue. Use AWS Lambda functions to transform the data. Use AWS Glue to send the data to Amazon S3.
{: .originaloption}


### Comments

--- 
Option A involves deploying an Amazon EC2 instance to host an API, which introduces unnecessary operational overhead for managing the instance. 

Option B presents a similar issue, as it also requires an EC2 instance, leading to comparable operational challenges.

Option C is the most suitable solution. It utilizes Amazon API Gateway for data transmission to an Amazon Kinesis data stream, which is efficient for real-time data ingestion. Additionally, it incorporates an Amazon Kinesis Data Firehose delivery stream to facilitate data transfer to Amazon S3, along with AWS Lambda functions for data transformation. This architecture minimizes operational complexity while effectively meeting the requirements.

Option D inaccurately suggests using AWS Glue to retrieve data directly from API Gateway. AWS Glue is primarily designed for ETL processes and typically pulls data from sources such as Amazon S3, rather than serving as a direct endpoint for API Gateway. Furthermore, since AWS Glue can handle ETL tasks independently, the inclusion of AWS Lambda for data transformation is unnecessary in this context. For more information on AWS Glue and its capabilities, refer to the official documentation: [AWS Glue](https://aws.amazon.com/glue/).
{: .comment}
--- 
I’m a bit puzzled as to why we’d throw Lambda into the mix for data transformation. It seems to me that Kinesis Data Firehose is already a superstar on its own, serving as an excellent extract, transform, and load (ETL) service. Just think of it as the Swiss Army knife of data streaming! 🛠️ So why complicate things when we can keep it simple and let Firehose shine? 🎉
{: .comment}
--- 
The assumption here seems to be that the built-in transformations provided by Kinesis Data Firehose just won't cut it. That's why you might find yourself reaching for those specialized Lambda transformations instead. For more details, you can check out this link: [Kinesis Data Firehose](https://aws.amazon.com/kinesis/data-firehose/#:~:text=Amazon%20Kinesis%20Data%20Firehose%20is,data%20stores%2C%20and%20analytics%20services).
{: .comment}
--- 
To meet the requirements of a real-time data ingestion architecture, the company can leverage several powerful AWS services. First, utilizing Amazon API Gateway will allow for the creation of a robust API to facilitate data transmission. For real-time streaming, Amazon Kinesis Data Streams can efficiently handle the incoming data flow. 

To transform the data on the fly, AWS Lambda functions can be employed, providing a serverless solution that automatically scales and processes the data as it streams in. Finally, to store the processed data, utilizing the Kinesis Data Firehose delivery stream will seamlessly transfer the data into Amazon S3, ensuring a reliable and cost-effective storage solution. This combination of services minimizes operational overhead while maximizing performance and efficiency.
{: .comment}
--- 
Option C is the way to go! 🎉 With the API already in place, you can simply set up the Kinesis stream and Firehose to work seamlessly together. This combination will allow you to process and store your data efficiently, while keeping operational overhead to a minimum. Happy data streaming! 🌟
{: .comment}

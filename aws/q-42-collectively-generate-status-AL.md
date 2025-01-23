---
layout: answered-question
title: "AWS A Company Has Thousands Of Edge Devices Question"
meta: "AWS Exam Question: A company generates 1 TB of alerts daily needing a cost-effective, highly available solution for 14 days of immediate analysis. Explore the answer with AWS Lambda and S3."
slug: "q-42-collectively-generate-status-AL"
certification: "AWS Solution Architect Associate Exam"
---


 A company generates 1 TB of status alerts daily from thousands of edge devices, with each alert averaging around 2 KB. A solutions architect is tasked with developing a solution to ingest and store these alerts for future analysis. The company prioritizes high availability while also aiming to keep costs low and avoid managing extra infrastructure. They require that data be readily accessible for immediate analysis for 14 days, after which it should be archived. What would be the most operationally efficient solution to satisfy these criteria?
{: .query}

- [x] A. Set up an Amazon Kinesis Data Firehose delivery stream to collect the alerts. Configure this stream to send the alerts to an Amazon S3 bucket. Additionally, establish an S3 Lifecycle configuration to move data to Amazon S3 Glacier after a period of 14 days.
{: .option}
- [ ] B. Deploy Amazon EC2 instances in two Availability Zones and configure them behind an Elastic Load Balancer to handle the incoming alerts. Develop a script on the EC2 instances to save the alerts in an Amazon S3 bucket. Implement an S3 Lifecycle policy to move the data to Amazon S3 Glacier after 14 days.
{: .option}
- [ ] C. Set up a delivery stream in Amazon Kinesis Data Firehose to capture the alerts. Configure this stream to send the alerts to an Amazon OpenSearch Service (formerly known as Amazon Elasticsearch Service) cluster. Additionally, configure the Amazon OpenSearch Service (formerly Amazon Elasticsearch Service) cluster to create manual snapshots on a daily basis and to remove any data that is older than 14 days.
{: .option}
- [ ] D. Set up a standard queue in Amazon Simple Queue Service (Amazon SQS) to receive the alerts, ensuring that the message retention period is configured for 14 days. Enable consumers to poll the SQS queue, assess the message's age, and process the message data as necessary. Once a message reaches 14 days, the consumer should transfer it to an Amazon S3 bucket and remove it from the SQS queue.
{: .option}

A
{: .answer}

The correct answer is **A**: Set up an Amazon Kinesis Data Firehose delivery stream to collect the alerts. Configure this stream to send the alerts to an Amazon S3 bucket. Additionally, establish an S3 Lifecycle configuration to move data to Amazon S3 Glacier after a period of 14 days.

### Explanation of the Correct Answer:

1. **Operational Efficiency**: Amazon Kinesis Data Firehose is a fully managed service that automatically scales to match the volume of incoming data. This means the company doesn't need to manage any servers or scaling mechanisms, which aligns with their requirement for minimizing infrastructure management.

2. **Cost-Effectiveness**: Storing data in Amazon S3 is typically more cost-effective than using other storage solutions like Amazon OpenSearch Service or EC2 instances. Additionally, moving data to S3 Glacier after 14 days for archiving further reduces costs, as Glacier is designed for long-term storage of infrequently accessed data.

3. **High Availability**: Amazon S3 is designed for 99.999999999% (11 nines) durability and offers high availability. This ensures that the data is safely stored and can be accessed when necessary.

4. **Data Retention**: By utilizing S3 Lifecycle policies, the company can easily manage the data retention strategy, automatically transferring data older than 14 days to Glacier without manual intervention.

### Why the Other Options Are Incorrect:

**B. Deploy Amazon EC2 instances in two Availability Zones and configure them behind an Elastic Load Balancer to handle the incoming alerts. Develop a script on the EC2 instances to save the alerts in an Amazon S3 bucket. Implement an S3 Lifecycle policy to move the data to Amazon S3 Glacier after 14 days.**

- **Infrastructure Management**: This solution requires setting up and managing EC2 instances and an Elastic Load Balancer, which contradicts the requirement of not wanting to manage additional infrastructure.
- **Cost**: EC2 instances incur costs for uptime and resources, making this solution more expensive than using Kinesis Data Firehose.

**C. Set up a delivery stream in Amazon Kinesis Data Firehose to capture the alerts. Configure this stream to send the alerts to an Amazon OpenSearch Service (formerly known as Amazon Elasticsearch Service) cluster. Additionally, configure the Amazon OpenSearch Service cluster to create manual snapshots on a daily basis and to remove any data that is older than 14 days.**

- **Operational Complexity**: Although Kinesis Data Firehose is used, integrating it with Amazon OpenSearch Service requires additional management of the OpenSearch cluster. This adds operational overhead and complexity compared to directly using S3.
- **Cost and Maintenance**: OpenSearch Service can be more costly and requires maintenance, including managing cluster health and scaling.

**D. Set up a standard queue in Amazon Simple Queue Service (Amazon SQS) to receive the alerts, ensuring that the message retention period is configured for 14 days. Enable consumers to poll the SQS queue, assess the message's age, and process the message data as necessary. Once a message reaches 14 days, the consumer should transfer it to an Amazon S3 bucket and remove it from the SQS queue.**

- **Manual Processing**: This solution requires consumers to manually poll and process the messages, which adds complexity and operational burden. 
- **Message Retention Limitation**: While SQS can retain messages for up to 14 days, it is not designed for long-term data storage and analysis, which is essential for the company's use case.

### Technical Details for AWS Certified Solutions Architect - Associate Exam:

1. **Amazon Kinesis**: Understand how Kinesis Data Streams and Kinesis Data Firehose work. Kinesis Data Firehose allows for real-time data ingestion and can directly deliver data to services like S3, Redshift, and Elasticsearch.

2. **Amazon S3 Lifecycle Policies**: Learn how to configure lifecycle policies to transition objects between storage classes, such as from S3 Standard to S3 Glacier, based on object age.

3. **Amazon S3**: Familiarize yourself with the durability and availability of S3, as well as how to manage data access, storage classes, and lifecycle policies.

4. **Cost Optimization**: Know the pricing models for different AWS services and how to choose services that balance performance and cost (e.g., S3 for storage vs. EC2 for compute).

By understanding these concepts, candidates will be better prepared to answer similar questions on the AWS Certified Solutions Architect - Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company has thousands of edge devices that collectively generate 1 TB of status alerts each day. Each alert is approximately 2 KB in size. A solutions architect needs to implement a solution to ingest and store the alerts for future analysis.
The company wants a highly available solution. However, the company needs to minimize costs and does not want to manage additional infrastructure. Additionally, the company wants to keep 14 days of data available for immediate analysis and archive any data older than 14 days.
What is the MOST operationally efficient solution that meets these requirements?
{: .original-query}

### Original Questions

- [ ] A. Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.
{: .originaloption}
- [ ] B. Launch Amazon EC2 instances across two Availability Zones and place them behind an Elastic Load Balancer to ingest the alerts. Create a script on the EC2 instances that will store the alerts in an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.
{: .originaloption}
- [ ] C. Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster. Set up the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster to take manual snapshots every day and delete data from the cluster that is older than 14 days.
{: .originaloption}
- [ ] D. Create an Amazon Simple Queue Service (Amazon SQS) standard queue to ingest the alerts, and set the message retention period to 14 days. Configure consumers to poll the SQS queue, check the age of the message, and analyze the message data as needed. If the message is 14 days old, the consumer should copy the message to an Amazon S3 bucket and delete the message from the SQS queue.
{: .originaloption}


### Comments


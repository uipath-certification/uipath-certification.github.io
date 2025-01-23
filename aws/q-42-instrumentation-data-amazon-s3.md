---
layout: answered-question
title: "AWS A Company Receives 10 TB Of Instrumentation Data Question"
meta: "AWS Exam Question: A company needs to transfer 10 TB of sensitive data daily to Amazon S3 for analytics. What is the MOST reliable data transfer answer? Technologies: S3, SAN."
slug: "q-42-instrumentation-data-amazon-s3"
certification: "AWS Solution Architect Associate Exam"
---


 A company generates 10 TB of instrumentation data daily from multiple machines within a single factory. This data is composed of JSON files and is currently stored on a storage area network (SAN) in an on-premises data center at the factory. To facilitate access for several additional systems that deliver essential near-real-time analytics, the company aims to transfer this data to Amazon S3. Given that the data is sensitive, ensuring a secure transfer is crucial. What solution would provide the MOST reliable method for this data transfer?
{: .query}

- [ ] A. AWS DataSync via the public internet
{: .option}
- [x] B. AWS DataSync utilizing AWS Direct Connect
{: .option}
- [ ] C. AWS Database Migration Service (AWS DMS) via the public internet
{: .option}
- [ ] D. AWS Direct Connect in conjunction with AWS Database Migration Service (AWS DMS)
{: .option}

B
{: .answer}

The correct answer to the question is **B. AWS DataSync utilizing AWS Direct Connect**. Let’s break down why this option is the best and analyze the other options in detail.

### Why B is Correct: AWS DataSync utilizing AWS Direct Connect

1. **High Throughput**: AWS DataSync is designed for high-speed transfers of large amounts of data. It can transfer data at speeds up to 10 times faster than traditional methods. Coupled with AWS Direct Connect, which provides a dedicated network connection from the on-premises data center to AWS, this option can handle the transfer of 10 TB of data daily efficiently.

2. **Secure Transfer**: AWS Direct Connect establishes a private connection between the on-premises data center and AWS, which eliminates exposure to the public internet. This is crucial for sensitive data, as it reduces the risk of interception or data breaches.

3. **Reliability**: AWS DataSync provides built-in error handling and automatic retries, which enhances the reliability of data transfers. Using Direct Connect further ensures that the connection is stable and consistent, reducing the likelihood of data transfer interruptions.

4. **Simplicity**: DataSync simplifies the process of moving data to S3 by handling tasks such as data validation, encryption, and transfer management in a streamlined manner.

### Why the Other Options are Incorrect:

**A. AWS DataSync via the public internet**
- **Security Risks**: Transferring sensitive data over the public internet exposes the data to potential interception and attacks. This option does not provide the secure transfer needed for sensitive data.
- **Potential Bottlenecks**: Public internet connections can be variable in terms of speed and reliability. This could lead to delays or interruptions in data transfer, which is not ideal for near-real-time analytics.

**C. AWS Database Migration Service (AWS DMS) via the public internet**
- **Not Designed for File Transfers**: AWS DMS is primarily used for migrating databases and is not optimized for transferring large files like the JSON files mentioned in the scenario. This makes it less efficient for the given use case.
- **Security Risks**: Similar to option A, using the public internet exposes sensitive data to security vulnerabilities.

**D. AWS Direct Connect in conjunction with AWS Database Migration Service (AWS DMS)**
- **Not Ideal for File Transfers**: While AWS Direct Connect provides a secure and reliable connection, combining it with AWS DMS is not optimal for file transfers. DMS is not designed for handling large file movements like those of JSON files. This could lead to inefficiencies and unnecessary complexity in the data transfer process.

### Technical Details for AWS Solutions Architect Associate Exam

1. **AWS DataSync**: Understand its role in automating data transfer, its capabilities for data validation, encryption, and scheduling. Familiarize yourself with how it can integrate with other AWS services like S3.

2. **AWS Direct Connect**: Learn about how it establishes a dedicated connection, the benefits of using it for sensitive data, and how it can provide consistent bandwidth levels, low latency, and reduced costs compared to using the public internet.

3. **AWS DMS**: While it is essential for migrating databases, know the limitations regarding file transfers and the scenarios in which it is best utilized.

4. **Data Security Best Practices**: Understand AWS security features such as encryption in transit and at rest, and the importance of using VPCs and private connections for sensitive data.

5. **Networking Concepts**: Familiarize yourself with how on-premises networks connect to AWS, including VPNs and Direct Connect, and the trade-offs of each method.

By using this knowledge, you can effectively approach AWS architectural questions, particularly those focused on data transfer and security strategies.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company receives 10 TB of instrumentation data each day from several machines located at a single factory. The data consists of JSON files stored on a storage area network (SAN) in an on-premises data center located within the factory. The company wants to send this data to Amazon S3 where it can be accessed by several additional systems that provide critical near-real-time analytics. A secure transfer is important because the data is considered sensitive.
Which solution offers the MOST reliable data transfer?
{: .original-query}

### Original Questions

- [ ] A. AWS DataSync over public internet
{: .originaloption}
- [ ] B. AWS DataSync over AWS Direct Connect
{: .originaloption}
- [ ] C. AWS Database Migration Service (AWS DMS) over public internet
{: .originaloption}
- [ ] D. AWS Database Migration Service (AWS DMS) over AWS Direct Connect
{: .originaloption}


### Comments


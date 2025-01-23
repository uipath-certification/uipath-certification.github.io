---
layout: answered-question
title: "AWS A Company Is Building An Application Question"
meta: "AWS Exam Question: A company is building an application in the AWS Cloud, using Amazon S3 and AWS KMS to encrypt data. Find the answer and learn about operational efficiency."
slug: "q-57-building-application-aws-kms"
certification: "AWS Solution Architect Associate Exam"
---


 A company is developing an application on AWS Cloud that will utilize Amazon S3 buckets across two different AWS Regions for data storage. To ensure security, they need to employ a customer managed key from AWS Key Management Service
{: .query}

- [ ] A. Establish an S3 bucket in every Region. Set up the S3 buckets to utilize server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Enable replication across the S3 buckets.
{: .option}
- [x] B. Set up a customer-managed KMS key that spans multiple regions. Establish an S3 bucket in every region. Enable replication among the S3 buckets. Adjust the application to utilize the KMS key for client-side encryption.
{: .option}
- [ ] C. Set up a customer-managed KMS key along with an S3 bucket in every Region. Ensure that the S3 buckets are configured for server-side encryption using Amazon S3 managed encryption keys (SSE-S3). Establish replication between the S3 buckets.
{: .option}
- [ ] D. Set up a customer-managed KMS key along with an S3 bucket in every Region. Ensure that the S3 buckets are configured to utilize server-side encryption with AWS KMS keys (SSE-KMS). Additionally, establish replication between the S3 buckets.
{: .option}

B
{: .answer}

To solve the problem of securely storing data in Amazon S3 across two AWS Regions using AWS Key Management Service (KMS) customer managed keys while minimizing operational overhead, we need to analyze the provided options in detail.

### Correct Answer: D. 
**Explanation:**
This is the correct answer because:

1. **Customer-Managed KMS Key**: The requirement states that a customer-managed KMS key must be used, which allows for more control over key rotation, access policies, and auditing. Option D specifies the use of a customer-managed KMS key, which is essential for meeting the requirement.

2. **S3 Buckets in Every Region**: The requirement of having S3 buckets in both AWS regions is satisfied since Option D includes setting up S3 buckets in every region.

3. **Server-Side Encryption with KMS Keys (SSE-KMS)**: To meet the encryption requirement, the S3 buckets are configured to use AWS KMS keys (SSE-KMS). SSE-KMS allows the use of KMS keys to encrypt data at rest in S3. This is significant because it allows the data stored in S3 to be encrypted and decrypted using the same KMS key, which is a requirement stated in the question.

4. **Replication**: D also mentions establishing replication between the S3 buckets, which allows data to be automatically copied across regions while maintaining encryption.

### Why the Other Options are Incorrect:

**A. Establish an S3 bucket in every Region. Set up the S3 buckets to utilize server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Enable replication across the S3 buckets.**
- **Issue with Encryption**: This option uses SSE-S3, which employs Amazon S3 managed keys rather than a customer-managed KMS key. Since the requirement specifically calls for a customer-managed KMS key, this option does not satisfy the encryption requirement.

**B. Set up a customer-managed KMS key that spans multiple regions. Establish an S3 bucket in every region. Enable replication among the S3 buckets. Adjust the application to utilize the KMS key for client-side encryption.**
- **Issue with Multi-Region KMS Key**: AWS KMS keys cannot span multiple regions in the way described. Each KMS key is region-specific, so you would need to create separate keys in each region. Additionally, client-side encryption requires more operational overhead since the application must handle encryption and decryption tasks instead of relying on S3's server-side capabilities.

**C. Set up a customer-managed KMS key along with an S3 bucket in every Region. Ensure that the S3 buckets are configured for server-side encryption using Amazon S3 managed encryption keys (SSE-S3). Establish replication between the S3 buckets.**
- **Issue with Encryption**: Similar to Option A, this option incorrectly states that SSE-S3 should be used. It does not satisfy the requirement for a customer-managed KMS key, which is necessary for the encryption of data in both S3 buckets.

### Technical Details for AWS Certified Solutions Architect Associate Exam:

1. **AWS Key Management Service (KMS)**: Understand the difference between KMS-managed keys (AWS-managed keys) and customer-managed keys. Customer-managed keys offer greater control over permissions and lifecycle management.

2. **S3 Encryption Options**: Familiarize yourself with the different server-side encryption methods available in S3:
   - **SSE-S3**: Amazon S3 manages the encryption keys.
   - **SSE-KMS**: Uses KMS-managed keys, allowing for more control and auditing.

3. **Cross-Region Replication**: Understand how to set up cross-region replication in S3, including the required permissions and configurations.

4. **Operational Overhead**: Consider the operational implications of each solution. Server-side encryption (SSE-KMS) typically involves less overhead than client-side encryption, where applications must handle the encryption and decryption processes.

5. **Best Practices**: When designing solutions involving encryption, always consider compliance requirements, key rotation policies, and data access control.

By mastering these concepts, you will be better equipped for the AWS Certified Solutions Architect Associate exam and real-world AWS implementations.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is building an application in the AWS Cloud. The application will store data in Amazon S3 buckets in two AWS Regions. The company must use an AWS Key Management Service (AWS KMS) customer managed key to encrypt all data that is stored in the S3 buckets. The data in both S3 buckets must be encrypted and decrypted with the same KMS key. The data and the key must be stored in each of the two Regions.
Which solution will meet these requirements with the LEAST operational overhead?
{: .original-query}

### Original Questions

- [ ] A. Create an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.
{: .originaloption}
- [ ] B. Create a customer managed multi-Region KMS key. Create an S3 bucket in each Region. Configure replication between the S3 buckets. Configure the application to use the KMS key with client-side encryption.
{: .originaloption}
- [ ] C. Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.
{: .originaloption}
- [ ] D. Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with AWS KMS keys (SSE-KMS). Configure replication between the S3 buckets.
{: .originaloption}


### Comments


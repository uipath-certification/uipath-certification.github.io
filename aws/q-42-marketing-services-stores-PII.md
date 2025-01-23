---
layout: answered-question
title: "AWS A Company Has An Application That Provides Question"
meta: "AWS Exam Question: A company needs to alert admins on PII sharing and automate remediation for marketing services using SFTP. Find the answer: AWS Lambda, Amazon S3."
slug: "q-42-marketing-services-stores-PII"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates an application that delivers marketing services to retail stores, leveraging transaction data from customers' previous purchases. Stores send this data to the company via SFTP, where it is processed and analyzed to create new marketing offers, with some files reaching sizes over 200 GB.

Recently, the company found that certain stores uploaded files containing personally identifiable information (PII) that should not have been included. To address this issue, the company seeks a solution that alerts administrators if PII is shared again and also automates the remediation process.

What steps should a solutions architect take to fulfill these requirements while minimizing development effort?
{: .query}

- [ ] A. Utilize an Amazon S3 bucket as a secure transfer location. Employ Amazon Inspector to examine the objects within the bucket. If any objects are found to hold PII, activate an S3 Lifecycle policy to delete those objects containing PII.
{: .option}
- [x] B. Utilize an Amazon S3 bucket as a secure transfer location. Employ Amazon Macie to analyze the items stored in the bucket. If any items are found to contain personally identifiable information (PII), leverage Amazon Simple Notification Service (Amazon SNS) to alert the administrators for the removal of those PII-containing items.
{: .option}
- [ ] C. Develop personalized scanning algorithms within an AWS Lambda function. Activate the function whenever objects are uploaded to the bucket. If any objects are found to contain PII, utilize Amazon Simple Notification Service (Amazon SNS) to send a notification to the administrators, prompting them to delete the PII-containing objects.
{: .option}
- [ ] D. Create tailored scanning algorithms within an AWS Lambda function. Activate the function whenever objects are added to the bucket. If any objects include personally identifiable information (PII), utilize Amazon Simple Email Service (Amazon SES) to notify the administrators and initiate an S3 Lifecycle policy to delete the items containing PII.
{: .option}

B
{: .answer}

The correct answer to the given scenario is **B**: Utilize an Amazon S3 bucket as a secure transfer location. Employ Amazon Macie to analyze the items stored in the bucket. If any items are found to contain personally identifiable information (PII), leverage Amazon Simple Notification Service (Amazon SNS) to alert the administrators for the removal of those PII-containing items.

### Explanation of the Correct Answer (B)

1. **Amazon S3 as a Secure Transfer Location**: This part of the solution uses Amazon S3, a scalable and durable object storage service, which is ideal for storing large files such as transaction data. S3 provides built-in security features to manage data access.

2. **Amazon Macie for PII Detection**: Amazon Macie is a fully managed data security and privacy service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS. It specializes in identifying PII, making it a suitable choice for the company's needs to alert administrators when PII is detected.

3. **Integration with Amazon SNS**: After Macie identifies any PII, it can trigger notifications through Amazon Simple Notification Service (SNS). This allows the company to alert administrators promptly to take action, ensuring compliance with privacy requirements efficiently.

4. **Least Development Effort**: Compared to other options, B minimizes the need for custom development. Macie is a managed service that provides built-in capabilities specifically designed for this use case, reducing the burden on developers to create and maintain custom algorithms.

### Why the Other Options Are Incorrect

**A**: Utilize an Amazon S3 bucket as a secure transfer location. Employ Amazon Inspector to examine the objects within the bucket. If any objects are found to hold PII, activate an S3 Lifecycle policy to delete those objects containing PII.
- **Incorrect Service**: Amazon Inspector is primarily used for assessing the security of applications and does not analyze data within S3 for PII detection. This makes it unsuitable for the company's requirements regarding PII detection.

**C**: Develop personalized scanning algorithms within an AWS Lambda function. Activate the function whenever objects are uploaded to the bucket. If any objects are found to contain PII, utilize Amazon Simple Notification Service (Amazon SNS) to send a notification to the administrators, prompting them to delete the PII-containing objects.
- **High Development Effort**: This option requires custom development of scanning algorithms for PII detection, which increases complexity and maintenance overhead. It lacks the efficiency of using a managed service like Macie.

**D**: Create tailored scanning algorithms within an AWS Lambda function. Activate the function whenever objects are added to the bucket. If any objects include personally identifiable information (PII), utilize Amazon Simple Email Service (Amazon SES) to notify the administrators and initiate an S3 Lifecycle policy to delete the items containing PII.
- **Complexity and Redundancy**: This option also involves custom development for scanning algorithms and uses SES, which is not as suitable for alerting in this context as SNS. Moreover, initiating a lifecycle policy to delete objects would not be as straightforward without manual review.

### Technical Details for AWS Certified Solutions Architect - Associate Exam

1. **Amazon S3**: Know how to configure S3 buckets, manage access controls, and implement security features like encryption and versioning.

2. **Amazon Macie**: Understand how Macie works, including its classification of data, alerting mechanisms, and integration with other AWS services like SNS.

3. **AWS Lambda**: Familiarize yourself with serverless architecture, event-driven programming, and how Lambda can be used for data processing, though it’s not the best solution in this context.

4. **Amazon SNS**: Learn how SNS can be used for sending notifications and its integration capabilities with other AWS services.

5. **Privacy Compliance**: Be aware of regulations such as GDPR and CCPA that require the handling of PII to ensure compliance.

6. **Cost Considerations**: Understand the cost implications of using various AWS services and how they can impact the architecture of a solution.

By focusing on these areas, candidates can prepare effectively for the AWS Solutions Architect - Associate exam and understand the rationale behind selecting managed services like Macie over custom solutions.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company has an application that provides marketing services to stores. The services are based on previous purchases by store customers. The stores upload transaction data to the company through SFTP, and the data is processed and analyzed to generate new marketing offers. Some of the files can exceed 200 GB in size.
Recently, the company discovered that some of the stores have uploaded files that contain personally identifiable information (PII) that should not have been included. The company wants administrators to be alerted if PII is shared again. The company also wants to automate remediation.
What should a solutions architect do to meet these requirements with the LEAST development effort?
{: .original-query}

### Original Questions

- [ ] A. Use an Amazon S3 bucket as a secure transfer point. Use Amazon Inspector to scan the objects in the bucket. If objects contain PII, trigger an S3 Lifecycle policy to remove the objects that contain PII.
{: .originaloption}
- [ ] B. Use an Amazon S3 bucket as a secure transfer point. Use Amazon Macie to scan the objects in the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.
{: .originaloption}
- [ ] C. Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.
{: .originaloption}
- [ ] D. Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Email Service (Amazon SES) to trigger a notification to the administrators and trigger an S3 Lifecycle policy to remove the meats that contain PII.
{: .originaloption}


### Comments


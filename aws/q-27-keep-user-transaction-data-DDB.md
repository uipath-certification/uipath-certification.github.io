---
layout: answered-question
title: "AWS A Company Needs To Keep User Transaction Data Question"
meta: "AWS Exam Question: A company needs to retain user transaction data in DynamoDB for 7 years. What is the MOST operationally efficient solution? Answer: S3, Lambda."
slug: "q-27-keep-user-transaction-data-DDB"
certification: "AWS Solution Architect Associate Exam"
---


 What is the most operationally efficient solution for a company that needs to store user transaction data in an Amazon DynamoDB table for a duration of 7 years?
{: .query}

- [ ] A. Enable point-in-time recovery for DynamoDB to ensure continuous backups of the table.
{: .option}
- [x] B. Utilize AWS Backup to establish backup schedules and retention policies for the table.
{: .option}
- [ ] C. Utilize the DynamoDB console to generate an on-demand backup of the table. Save the backup in an Amazon S3 bucket and establish an S3 Lifecycle configuration for that bucket.
{: .option}
- [ ] D. Set up a rule in Amazon EventBridge (formerly Amazon CloudWatch Events) to trigger an AWS Lambda function. Configure this Lambda function to perform a backup of the table and save the backup to an Amazon S3 bucket. Additionally, establish an S3 Lifecycle configuration for the bucket.
{: .option}

B
{: .answer}

The correct answer to the question is **B. Utilize AWS Backup to establish backup schedules and retention policies for the table.** Here’s why this option is the most operationally efficient solution, along with an analysis of the other options.

### Why Option B is Correct

1. **Centralized Management**: AWS Backup provides a centralized solution for managing backups across AWS services, including Amazon DynamoDB. It allows you to create backup plans that can include multiple resources, which simplifies management.

2. **Scheduled Backups**: AWS Backup allows you to set up backup schedules, meaning that backups can be automated without manual intervention, ensuring that data is consistently backed up.

3. **Retention Policies**: With AWS Backup, you can define retention policies that ensure backups are kept for the required duration (in this case, 7 years). This aligns perfectly with the company's requirement to retain user transaction data for this period.

4. **Compliance and Reporting**: AWS Backup also provides features that help with compliance and auditing. This is essential for organizations that have strict data retention policies.

5. **Operational Efficiency**: Utilizing AWS Backup reduces the operational overhead associated with managing backups manually or through scripts, making it more efficient.

### Why the Other Options Are Incorrect

#### Option A: Enable point-in-time recovery for DynamoDB
- **Point-in-Time Recovery (PITR)** allows you to restore the table to any second within the last 35 days. While this provides recovery options for recent data, it does not fulfill the requirement to retain data for 7 years. Additionally, PITR does not provide a way to manage retention policies for long-term storage.

#### Option C: Utilize the DynamoDB console to generate an on-demand backup of the table
- Generating an on-demand backup can be useful for immediate needs, but it does not provide a scheduled or automated solution. This would require manual intervention to create backups regularly, which is not operationally efficient. Additionally, saving backups to an S3 bucket would not automatically manage retention; it would require additional setup for lifecycle management.

#### Option D: Set up a rule in Amazon EventBridge to trigger a Lambda function
- While this option could be automated, it introduces more complexity and operational overhead. You would have to manage the Lambda function, the logic for backups, and the lifecycle of the backups in S3. Setting up a Lambda function to perform backups and manage storage could lead to additional potential points of failure, making it less efficient than using AWS Backup.

### Technical Details for AWS Solution Architect Associate Exam

- **DynamoDB Backup and Restore**: Understand how DynamoDB backups work, including on-demand backups and point-in-time recovery. Know the limitations of each and when to use them.
  
- **AWS Backup Service**: Familiarize yourself with AWS Backup, its features, and how to configure backup plans, schedules, and retention policies for AWS resources, including DynamoDB.

- **EventBridge**: Learn about Amazon EventBridge and how it can be used in event-driven architectures, but understand its limitations in automating resource backups without additional complexity.

- **S3 Lifecycle Policies**: Understand how S3 lifecycle policies work for managing data retention and transitioning data to lower-cost storage classes over time.

By focusing on AWS Backup, candidates can demonstrate a clear understanding of operational efficiency, data retention, and AWS's best practices for backup and recovery strategies.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company needs to keep user transaction data in an Amazon DynamoDB table. The company must retain the data for 7 years.
What is the MOST operationally efficient solution that meets these requirements?
{: .original-query}

### Original Questions

- [ ] A. Use DynamoDB point-in-time recovery to back up the table continuously.
{: .originaloption}
- [ ] B. Use AWS Backup to create backup schedules and retention policies for the table.
{: .originaloption}
- [ ] C. Create an on-demand backup of the table by using the DynamoDB console. Store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.
{: .originaloption}
- [ ] D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function. Configure the Lambda function to back up the table and to store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.
{: .originaloption}


### Comments


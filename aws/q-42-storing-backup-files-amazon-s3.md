---
layout: answered-question
title: "AWS A Company Is Storing Backup Files Question"
meta: "AWS Exam Question: A company uses Amazon S3 Standard for frequent file access. What is the most cost-effective storage solution for indefinite retention? Answer: S3 Glacier."
slug: "q-42-storing-backup-files-amazon-s3"
certification: "AWS Solution Architect Associate Exam"
---


 A company is utilizing Amazon S3 Standard storage to store backup files that are frequently accessed for the first month. After this initial period, the files are no longer accessed, but the company needs to retain them indefinitely. What would be the most cost-effective storage solution to meet these needs?
{: .query}

- [ ] A. Set up S3 Intelligent-Tiering to automatically move objects.
{: .option}
- [x] B. Set up an S3 Lifecycle configuration to move objects from S3 Standard to S3 Glacier Deep Archive after a period of one month.
{: .option}
- [ ] C. Set up an S3 Lifecycle configuration to move objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after a period of 1 month.
{: .option}
- [ ] D. Set up an S3 Lifecycle configuration to move objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) following a period of 1 month.
{: .option}

B
{: .answer}

The correct answer to the question regarding the most cost-effective storage solution for the company's backup files is **B. Set up an S3 Lifecycle configuration to move objects from S3 Standard to S3 Glacier Deep Archive after a period of one month**. Here's a detailed analysis of why this option is the best choice, along with explanations of why the other options are less suitable.

### Explanation of the Correct Answer: B

1. **Lifecycle Configuration**: Amazon S3 allows users to set up lifecycle rules that automatically transition objects between different storage classes based on their age. This means that after the files have been accessed frequently for one month, they can be automatically moved to a more cost-effective storage class.

2. **S3 Glacier Deep Archive**: This storage class is designed for long-term archival storage of infrequently accessed data. It is the lowest-cost storage option in S3, making it ideal for data that needs to be retained indefinitely but is not accessed regularly. The retrieval times can be hours, but since the files are not accessed after the first month, this is acceptable.

3. **Cost-Effectiveness**: By transitioning to Glacier Deep Archive, the company saves significantly on storage costs compared to keeping the data in S3 Standard, which is designed for frequently accessed data and incurs higher costs.

### Why the Other Options are Incorrect

**A. Set up S3 Intelligent-Tiering to automatically move objects.**
- **Cost**: Although S3 Intelligent-Tiering automatically moves objects between two access tiers (frequent and infrequent) based on usage patterns, it incurs additional costs for monitoring and automation. Since the files are not accessed after the first month, using Intelligent-Tiering is generally not as cost-effective as transitioning to Glacier Deep Archive, especially for data that will be retained indefinitely.

**C. Set up an S3 Lifecycle configuration to move objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after a period of 1 month.**
- **Cost**: S3 Standard-IA is designed for infrequently accessed data but is still more expensive than Glacier Deep Archive. The company is looking for a solution that minimizes costs for data that is not accessed at all after one month, making this option less optimal.

**D. Set up an S3 Lifecycle configuration to move objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) following a period of 1 month.**
- **Cost and Durability**: While S3 One Zone-IA is a lower-cost option compared to S3 Standard-IA, it stores data in a single Availability Zone, which means it does not provide the same level of durability as the other options. If there is a failure in that Availability Zone, the data could be lost. Given the company's requirement to keep files indefinitely, this presents a risk that is not present with Glacier Deep Archive.

### Technical Details for AWS Solution Architect Associate Exam Preparation

1. **S3 Storage Classes**:
   - **S3 Standard**: Best for frequently accessed data.
   - **S3 Standard-IA**: Lower-cost option for infrequently accessed data with a retrieval fee.
   - **S3 One Zone-IA**: Similar to Standard-IA but stored in a single Availability Zone, cheaper but riskier in terms of durability.
   - **S3 Glacier**: Designed for archival storage with retrieval times ranging from minutes to hours.
   - **S3 Glacier Deep Archive**: Lowest-cost option for long-term storage with retrieval times of hours.

2. **Lifecycle Policies**: Understand how to create and manage lifecycle policies to transition objects between different storage classes based on their age and access patterns.

3. **Cost Considerations**: Be familiar with the pricing structure for each storage class, including storage costs, retrieval costs, and data transfer costs.

4. **Data Durability and Availability**: Know the differences in durability and availability between the various S3 storage classes, especially when it comes to long-term data retention requirements.

By understanding these concepts and the reasoning behind the correct answer, you'll be better prepared for questions related to storage solutions on the AWS Solution Architect Associate Exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1 month. However, the files are not accessed after 1 month. The company must keep the files indefinitely.
Which storage solution will meet these requirements MOST cost-effectively?
{: .original-query}

### Original Questions

- [ ] A. Configure S3 Intelligent-Tiering to automatically migrate objects.
{: .originaloption}
- [ ] B. Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month.
{: .originaloption}
- [ ] C. Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 month.
{: .originaloption}
- [ ] D. Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 month.
{: .originaloption}


### Comments

--- 
The most cost-effective storage solution for this scenario is to implement an S3 Lifecycle configuration that transitions objects from S3 Standard to S3 Glacier Deep Archive after one month.

Amazon S3 Glacier Deep Archive is designed for secure and durable long-term data retention, particularly for data that is infrequently accessed. It offers the most economical storage option within the S3 ecosystem, making it ideal for storing backup files that will not be accessed after the initial month.

By leveraging an S3 Lifecycle configuration, you can automate the transition of objects from S3 Standard to S3 Glacier Deep Archive after a specified period of one month. This approach effectively reduces storage costs for files that are infrequently accessed, ensuring that the company can maintain its backup files indefinitely while optimizing expenses.
{: .comment}
--- 
Option A, which involves setting up S3 Intelligent-Tiering for automatic object migration, isn't the best fit for this scenario. Why, you ask? Because it’s more of a short-term friend and doesn’t offer the wallet-friendly vibes of S3 Glacier Deep Archive for long-term storage. 💸

Now, let’s have a chat about Option C. Moving objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after a month might sound tempting, but it’s not the champion of cost-effectiveness. It may save a few pennies, but it won’t match the savings you’d get by cozying up with S3 Glacier Deep Archive. 🏦

As for Option D, the idea of transitioning objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after a month also falls short in the cost department. While it’s a decent option, it doesn’t compete with the budget-friendly allure of S3 Glacier Deep Archive. So, let’s save those coins for something more exciting! 🪙✨
{: .comment}
--- 
Choosing the One Zone-IA option is a bit like putting all your eggs in one basket—if that availability zone goes offline, you're likely to lose your data. It's a risk that's hard to justify, especially when so many alternatives exist.
{: .comment}
--- 
It's important to note that both S3 Standard-IA and S3 One Zone-IA are designed for data that is accessed less frequently, but they only store data for a maximum of 30 days, which does not meet the requirement for indefinite storage. Therefore, these options would not be suitable for long-term retention of the backup files.
{: .comment}
--- 
When it comes to finding the most budget-friendly solution, the S3 Glacier Deep Archive shines as the most economical option for long-term storage! 🌟 It's perfect for keeping those backup files safe and sound without breaking the bank. So, let’s embrace the magic of efficient storage!
{: .comment}

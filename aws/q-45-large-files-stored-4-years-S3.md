---
layout: answered-question
title: "AWS A Company Has An Application That Generates Question"
meta: "AWS Exam Question: A company needs to store 5 MB files in Amazon S3 for 4 years with frequent access initially. What is the most cost-effective storage solution? Answer: S3 Intelligent-Tiering."
slug: "q-45-large-files-stored-4-years-S3"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates an application that produces numerous files, with each file roughly 5 MB in size, which are stored in Amazon S3. According to company policy, these files must be retained for 4 years before they can be deleted. It's essential that the files are readily accessible at all times, as they contain vital business information that is difficult to recreate. While the files see frequent access during the initial 30 days after creation, they are seldom accessed thereafter. What would be the most cost-effective storage solution in this scenario?
{: .query}

- [ ] A. Establish a lifecycle policy for the S3 bucket to transition files from S3 Standard to S3 Glacier 30 days after they are created. Remove the files 4 years following their creation date.
{: .option}
- [ ] B. Establish a lifecycle policy for the S3 bucket that transitions files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days after they are created. Additionally, remove the files 4 years post-creation.
{: .option}
- [x] C. Establish a lifecycle policy for the S3 bucket to transition files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days after they are created. Remove the files 4 years following their creation date.
{: .option}
- [ ] D. Establish a lifecycle policy for the S3 bucket to transition files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days after they are created. Additionally, transfer the files to S3 Glacier 4 years following their creation.
{: .option}

C
{: .answer}

To determine the most cost-effective storage solution for the scenario described, let's analyze the options provided in detail, focusing on the requirements and cost implications associated with each storage class in Amazon S3.

### Requirements Recap
1. **File Size**: Approximately 5 MB.
2. **Storage Duration**: Required to store files for 4 years.
3. **Accessibility**: Immediate accessibility is always required.
4. **Access Patterns**: Files are frequently accessed in the first 30 days, rarely accessed afterward.

### Option Analysis

**A. Transition to S3 Glacier after 30 days**  
- **S3 Glacier** is designed for data that is rarely accessed and has retrieval times ranging from minutes to hours. While it is the cheapest storage option, it does not meet the requirement of immediate accessibility. Therefore, this option is not valid.

**B. Transition to S3 One Zone-IA after 30 days**  
- **S3 One Zone-IA** is less expensive than S3 Standard but is designed for infrequent access. It also does not replicate data across multiple availability zones, which could be a risk for critical business data. While this option meets the immediate accessibility requirement, it does not provide the best cost efficiency for long-term storage.

**C. Transition to S3 Standard-IA after 30 days**  
- **S3 Standard-IA** is designed for data that is infrequently accessed but requires immediate access when needed. This option provides a balance between cost and accessibility. It is more cost-effective than S3 Standard for data that is accessed less frequently after the first 30 days while still allowing for immediate retrieval. This makes Option C the optimal choice given the requirements.

**D. Transition to S3 Standard-IA after 30 days, then to S3 Glacier after 4 years**  
- This option initially retains the data in S3 Standard-IA (which is reasonable for the first 30 days) but transitions to S3 Glacier after 4 years. While this might seem cost-effective for long-term storage, it again does not meet the immediate accessibility requirement of critical data since S3 Glacier requires retrieval times that are not instant. This makes it unsuitable for the given use case.

### Conclusion
Given the analysis, **Option C** is the most cost-effective solution for the following reasons:
- S3 Standard-IA provides immediate access while being cheaper than S3 Standard for infrequently accessed data.
- It aligns with the use case of frequent access in the first month and infrequent access thereafter for the remaining storage duration.
- It ensures compliance with company policy regarding data retention for 4 years.

### Technical Details for AWS Solution Architect Associate Exam
When preparing for the AWS Solution Architect Associate Exam, it's important to understand the following key points:

1. **S3 Storage Classes**:
   - **S3 Standard**: General-purpose storage for frequently accessed data.
   - **S3 Standard-IA**: Lower-cost option for infrequently accessed data that requires immediate access.
   - **S3 One Zone-IA**: Lower-cost storage for infrequently accessed data that is stored in a single availability zone.
   - **S3 Glacier**: Low-cost storage for archival data with retrieval times of minutes to hours.
   - **S3 Glacier Deep Archive**: Very low-cost storage for rarely accessed data that can take several hours to retrieve.

2. **Lifecycle Policies**: Understanding how to create and manage lifecycle policies is crucial for automating the transition of objects between storage classes based on access patterns.

3. **Cost Management**: Familiarize yourself with the pricing structures of S3 storage classes, including data retrieval fees and minimum storage duration charges.

4. **Data Retrieval Needs**: Always assess the accessibility requirements of the data and the potential impact of retrieval times on business operations.

5. **Best Practices**: Consider factors like data durability, availability, and compliance when choosing storage solutions.

By mastering these concepts, you'll be well-prepared to tackle questions related to S3 storage options and lifecycle management on the exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company has an application that generates a large number of files, each approximately 5 MB in size. The files are stored in Amazon S3. Company policy requires the files to be stored for 4 years before they can be deleted. Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce. The files are frequently accessed in the first 30 days of the object creation but are rarely accessed after the first 30 days.
Which storage solution is MOST cost-effective?
{: .original-query}

### Original Questions

- [ ] A. Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Glacier 30 days from object creation. Delete the files 4 years after object creation.
{: .originaloption}
- [ ] B. Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days from object creation. Delete the files 4 years after object creation.
{: .originaloption}
- [ ] C. Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Delete the files 4 years after object creation.
{: .originaloption}
- [ ] D. Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Move the files to S3 Glacier 4 years after object creation.
{: .originaloption}


### Comments


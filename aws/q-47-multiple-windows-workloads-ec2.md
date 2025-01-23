---
layout: answered-question
title: "AWS Company Runs Multiple Windows Workloads Question"
meta: "AWS Exam Question: A company seeks a highly available and durable storage solution for Windows workloads on AWS using EC2 instances and Windows file shares. Answer: Amazon FSx."
slug: "q-47-multiple-windows-workloads-ec2"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates several Windows workloads on AWS and its employees rely on Windows file shares hosted on two Amazon EC2 instances. These file shares synchronize data with each other while keeping duplicate copies. To ensure high availability and durability in their storage solution, while maintaining the current user access methods for the files, what steps should a solutions architect take to fulfill these requirements?
{: .query}

- [ ] A. Transfer all data to Amazon S3 and configure IAM authentication for user access to the files.
{: .option}
- [ ] B. Configure an Amazon S3 File Gateway and connect it to the current EC2 instances.
{: .option}
- [x] C. Expand the file sharing setup to include Amazon FSx for Windows File Server using a Multi-AZ configuration. Transfer all data to FSx for Windows File Server.
{: .option}
- [ ] D. Expand the file sharing setup to include Amazon Elastic File System (Amazon EFS) configured for Multi-AZ. Transfer all data to Amazon EFS.
{: .option}

C
{: .answer}

The correct answer to the problem presented is **C. Expand the file sharing setup to include Amazon FSx for Windows File Server using a Multi-AZ configuration. Transfer all data to FSx for Windows File Server.** Here's a detailed explanation of why this solution meets the requirements, along with insights into why the other options are less suitable:

### Why Option C is Correct:
1. **Compatibility with Windows Workloads**: Amazon FSx for Windows File Server is a fully managed native Windows file system that supports the SMB protocol, which is commonly used for Windows file shares. This makes it easy for users to access files in a familiar way without requiring significant changes to their workflows.

2. **High Availability and Durability**: By configuring FSx for Windows File Server in a Multi-AZ setup, the solution automatically replicates data across multiple Availability Zones (AZs). This ensures high availability and durability, reducing the risk of data loss or downtime due to an AZ failure.

3. **Managed Service**: FSx is a managed service, which means the company does not need to worry about the underlying infrastructure, patching, or maintenance, allowing them to focus on their core business functions.

4. **Scalability**: FSx can dynamically scale storage capacity and throughput as needed, accommodating growth in the company's data.

5. **Data Synchronization**: Transitioning to FSx provides a single source of truth for file shares, eliminating the need for synchronization between EC2 instances and reducing complexity.

### Why Other Options Are Incorrect:

**A. Transfer all data to Amazon S3 and configure IAM authentication for user access to the files.**
- **Incompatible Access Method**: Amazon S3 is an object storage service, not a file system. While it can be accessed via APIs, it does not support the SMB protocol natively, which is essential for Windows workloads. This would require significant changes to how users access their files, resulting in a poor user experience.
- **User Experience**: Employees are accustomed to accessing files through Windows file shares. Moving to S3 would require them to use different interfaces or applications, disrupting their workflow.

**B. Configure an Amazon S3 File Gateway and connect it to the current EC2 instances.**
- **Increased Complexity**: While an S3 File Gateway enables integration between on-premises applications and Amazon S3, it introduces additional complexity. It serves as a cache and requires users to adapt to an S3-based workflow, which may not align with their current use of traditional file shares.
- **Same Limitations as Option A**: This option still relies on S3 for storage, which does not support an SMB interface directly and would require users to access files in a manner that is different from what they are accustomed to.

**D. Expand the file sharing setup to include Amazon Elastic File System (Amazon EFS) configured for Multi-AZ. Transfer all data to Amazon EFS.**
- **Not Windows Native**: Amazon EFS is a file system primarily designed for Linux workloads and uses the NFS protocol. While it provides high availability and durability in a Multi-AZ configuration, it lacks native Windows support (SMB), which could complicate integration with Windows-based applications.
- **User Experience**: Similar to options A and B, transitioning to EFS would require users to access files differently from their current SMB-based workflow, which could lead to confusion and inefficiencies.

### Technical Details for AWS Solution Architect Associate Exam:
When preparing for the AWS Solutions Architect Associate exam, candidates should understand the following concepts related to file storage solutions:

1. **Amazon FSx**: Know the differences between FSx for Windows File Server and FSx for Lustre, including use cases, protocols supported (e.g., SMB for Windows), and scalability features.

2. **Amazon S3 vs. EFS**: Understand that S3 is an object storage service while EFS is a file storage service. Be familiar with use cases for each and the differences in access methods (API for S3 vs. NFS for EFS).

3. **Multi-AZ Deployments**: Be aware of how Multi-AZ configurations work, their benefits (high availability, data redundancy), and the types of services that support them.

4. **User Access and Authentication**: Recognize the importance of access protocols (like SMB and NFS) and user authentication/authorization methods (IAM roles/policies, Active Directory integration with FSx).

5. **Data Migration Strategies**: Understand different strategies for migrating data to AWS services, including direct transfers, using AWS DataSync, or setting up gateways.

By mastering these concepts, candidates will be better prepared to tackle questions related to AWS storage solutions on the exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company runs multiple Windows workloads on AWS. The company's employees use Windows file shares that are hosted on two Amazon EC2 instances. The file shares synchronize data between themselves and maintain duplicate copies. The company wants a highly available and durable storage solution that preserves how users currently access the files.
What should a solutions architect do to meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Migrate all the data to Amazon S3. Set up IAM authentication for users to access files.
{: .originaloption}
- [ ] B. Set up an Amazon S3 File Gateway. Mount the S3 File Gateway on the existing EC2 instances.
{: .originaloption}
- [ ] C. Extend the file share environment to Amazon FSx for Windows File Server with a Multi-AZ configuration. Migrate all the data to FSx for Windows File Server.
{: .originaloption}
- [ ] D. Extend the file share environment to Amazon Elastic File System (Amazon EFS) with a Multi-AZ configuration. Migrate all the data to Amazon EFS.
{: .originaloption}


### Comments


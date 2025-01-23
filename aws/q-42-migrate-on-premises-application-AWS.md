---
layout: answered-question
title: "AWS Company Wants To Migrate Its Application Question"
meta: "AWS Exam Question: A company seeks to migrate its app to AWS with auto-scaling, high availability, and minimal overhead. What is the answer? Consider S3 and EFS."
slug: "q-42-migrate-on-premises-application-AWS"
certification: "AWS Solution Architect Associate Exam"
---


 A company is looking to transition its on-premises application to AWS. This application generates output files ranging in size from tens of gigabytes to hundreds of terabytes, and the data needs to be stored in a conventional file system format. The ideal solution should offer automatic scalability, high availability, and minimal operational overhead. What solution would best fulfill these criteria?
{: .query}

- [ ] A. Transition the application to operate as containers on Amazon Elastic Container Service (Amazon ECS) and utilize Amazon S3 for storage.
{: .option}
- [ ] B. Transition the application to operate within containers on Amazon Elastic Kubernetes Service (Amazon EKS). Utilize Amazon Elastic Block Store (Amazon EBS) for storage solutions.
{: .option}
- [x] C. Transition the application to Amazon EC2 instances within a Multi-AZ Auto Scaling group. Utilize Amazon Elastic File System (Amazon EFS) for storage solutions.
{: .option}
- [ ] D. Transition the application to Amazon EC2 instances within a Multi-AZ Auto Scaling group. Utilize Amazon Elastic Block Store (Amazon EBS) for storage needs.
{: .option}

C
{: .answer}

The correct answer to the question is **C**: Transition the application to Amazon EC2 instances within a Multi-AZ Auto Scaling group. Utilize Amazon Elastic File System (Amazon EFS) for storage solutions.

### Why Option C is Correct

1. **Scalability**: Amazon EFS is designed to scale automatically as you add or remove files, making it a perfect fit for applications that need to handle output files ranging from tens of gigabytes to hundreds of terabytes. It can scale to petabytes of data and supports a large number of concurrent connections.

2. **File System Structure**: EFS provides a standard file system interface and file system semantics (e.g., strong consistency, file locking), which aligns perfectly with the requirement to store data in a standard file system structure.

3. **High Availability**: EFS is a managed service that is highly available and durable. It automatically replicates data across multiple Availability Zones (AZs) within a region, ensuring that the data is resilient to AZ failures.

4. **Minimum Operational Overhead**: EFS is a fully managed service, meaning that you don’t need to provision or manage the underlying storage infrastructure. This reduces operational overhead significantly compared to managing your own file storage solutions.

5. **Integration with EC2**: By deploying the application on EC2 instances within an Auto Scaling group, the application can scale up and down based on demand, ensuring efficient use of resources while still maintaining high availability.

### Why the Other Options are Incorrect

**A. Transition the application to operate as containers on Amazon Elastic Container Service (Amazon ECS) and utilize Amazon S3 for storage**:
- **File System Structure**: While S3 is excellent for object storage and can handle large files, it does not provide a traditional file system interface. This means that the application may need significant re-engineering to interact with S3, as it doesn't support file system semantics like directories, file locking, etc.
- **Operational Overhead**: Although ECS is a managed service, the need to adapt the application to work with S3 can increase operational complexity.

**B. Transition the application to operate within containers on Amazon Elastic Kubernetes Service (Amazon EKS). Utilize Amazon Elastic Block Store (Amazon EBS) for storage solutions**:
- **Storage Limitations**: EBS volumes are attached to individual EC2 instances, which limits their usability in a containerized environment where multiple containers might need to access the same data concurrently. EBS does not support shared access across multiple instances without complex configuration (like using EBS Multi-Attach or a clustered file system).
- **Operational Complexity**: Running EKS introduces additional complexity in managing the Kubernetes environment, which may not be necessary for the application if simpler solutions are available.

**D. Transition the application to Amazon EC2 instances within a Multi-AZ Auto Scaling group. Utilize Amazon Elastic Block Store (Amazon EBS) for storage needs**:
- **Scalability and Accessibility**: EBS volumes are not designed to be shared across multiple EC2 instances. If the application requires multiple instances to access the same data, this would lead to bottlenecks and complexity in data management.
- **Operational Overhead**: Managing EBS snapshots, scaling EBS volumes, and ensuring high availability across instances would add operational overhead compared to using EFS.

### Key Technical Details for AWS Solution Architect Associate Exam

- **Amazon EFS**: Understand that EFS is a managed file storage service that supports NFS (Network File System) protocols, providing a shared file system for multiple EC2 instances. It automatically scales and replicates across multiple AZs.
  
- **Amazon EC2 and Auto Scaling**: Be familiar with how to set up EC2 instances in an Auto Scaling group to ensure high availability and scalability. Know how to configure launch templates and scaling policies.

- **Storage Options**:
  - **Amazon S3**: Object storage with a flat namespace; not a file system.
  - **Amazon EBS**: Block storage that can be attached to one EC2 instance at a time (with some exceptions). Good for high-performance needs but requires management for scale and availability.
  
- **Multi-AZ Deployments**: Understand how deploying applications across multiple AZs can enhance availability and fault tolerance.

By understanding these concepts and the reasons behind the correct answer, candidates can better prepare for the AWS Solution Architect Associate Exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company wants to migrate its on-premises application to AWS. The application produces output files that vary in size from tens of gigabytes to hundreds of terabytes. The application data must be stored in a standard file system structure. The company wants a solution that scales automatically. is highly available, and requires minimum operational overhead.
Which solution will meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Migrate the application to run as containers on Amazon Elastic Container Service (Amazon ECS). Use Amazon S3 for storage.
{: .originaloption}
- [ ] B. Migrate the application to run as containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Block Store (Amazon EBS) for storage.
{: .originaloption}
- [ ] C. Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic File System (Amazon EFS) for storage.
{: .originaloption}
- [ ] D. Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic Block Store (Amazon EBS) for storage.
{: .originaloption}


### Comments


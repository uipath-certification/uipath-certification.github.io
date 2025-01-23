---
layout: answered-question
title: "AWS A Company's Website Uses An Amazon EC2 Question"
meta: "AWS Exam Question: A company's website uses an Amazon EC2 instance store for its catalog and needs high availability and durability. What is the answer? Consider S3 and EBS."
slug: "q-72-company-website-amazon-ec2"
certification: "AWS Solution Architect Associate Exam"
---


 A company is utilizing an Amazon EC2 instance store to host its item catalog on its website. To ensure that the catalog is both highly available and stored in a durable location, what steps should a solutions architect take to fulfill these needs?
{: .query}

- [ ] A. Transfer the catalog to Amazon ElastiCache for Redis.
{: .option}
- [ ] B. Launch a bigger EC2 instance that comes with an expanded instance store.
{: .option}
- [ ] C. Transfer the catalog from the instance store to Amazon S3 Glacier Deep Archive.
{: .option}
- [x] D. Transfer the catalog to an Amazon Elastic File System (Amazon EFS) storage solution.
{: .option}

D
{: .answer}

To ensure that a catalog of items stored on an Amazon EC2 instance is highly available and durable, the best option among the provided choices is **D: Transfer the catalog to an Amazon Elastic File System (Amazon EFS) storage solution**. Here’s a detailed explanation of why this is the correct choice and why the other options are not suitable.

### Explanation of the Correct Answer (D: Amazon EFS)

1. **Durability and Availability**:
   - Amazon EFS is a fully managed, scalable, and elastic file storage solution that is designed to be highly available and durable. It automatically replicates data across multiple Availability Zones (AZs) within a region, which provides high durability and availability.
   - EFS is suitable for use cases where you need shared access to data across multiple EC2 instances, which is ideal for a catalog that may be accessed by multiple services or applications.

2. **Scalability**:
   - EFS can automatically scale from gigabytes to petabytes of data without the need for pre-provisioning. It can grow and shrink as you add or remove files, making it a flexible solution for a catalog that may change over time.

3. **File System Semantics**:
   - EFS provides a POSIX-compliant file system, which means it supports standard file system operations, such as file locking and hierarchical directory structures, making it easier to use for applications that expect a traditional file system interface.

4. **Performance**:
   - EFS offers different performance modes (General Purpose and Max I/O) that can be selected based on the application's needs, allowing for optimized performance for various workloads.

### Explanation of the Wrong Answers

- **A: Transfer the catalog to Amazon ElastiCache for Redis**:
  - Amazon ElastiCache is primarily used for caching data to improve the performance of applications by reducing database load. While it can provide fast access to data, it is not designed for durable storage. Data in ElastiCache can be ephemeral and is typically lost if the cache node fails or is restarted unless configured for persistence, which is not its primary use case. Therefore, it does not meet the requirement for high durability or long-term storage of a catalog.

- **B: Launch a bigger EC2 instance that comes with an expanded instance store**:
  - Instance store volumes are ephemeral, meaning that data stored in them will be lost if the instance is stopped or terminated. While this option may provide more storage capacity, it does not meet the durability or availability requirements, as the data is not redundantly stored or backed up.

- **C: Transfer the catalog from the instance store to Amazon S3 Glacier Deep Archive**:
  - Amazon S3 Glacier Deep Archive is designed for long-term archival storage, not for data that needs to be frequently accessed. While it offers high durability, the retrieval times can take hours, making it impractical for a catalog that needs to be readily available. This option does not align with the requirement for high availability.

### Technical Details for AWS Solution Architect Associate Exam

When preparing for the AWS Solution Architect Associate Exam, it is essential to understand the characteristics and use cases of AWS storage options:

1. **Amazon EFS**:
   - File storage that supports NFS (Network File System).
   - Automatically scales and provides redundancy across AZs.
   - Ideal for shared storage among multiple EC2 instances.

2. **Amazon ElastiCache**:
   - In-memory caching solution.
   - Use for caching frequently accessed data to enhance performance.
   - Not intended for durable data storage.

3. **Instance Store vs. EBS**:
   - Instance store: Ephemeral storage, data is lost on instance termination.
   - EBS (Elastic Block Store): Persistent block storage for EC2 instances; data persists even when instances are stopped.

4. **Amazon S3 and S3 Glacier**:
   - S3: Highly durable and available object storage for frequently accessed data.
   - S3 Glacier: Low-cost archival storage; retrieval can take from minutes to hours.

When designing architectures on AWS, understanding the storage solutions, their durability, availability, and performance characteristics is critical to meet business requirements.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company's website uses an Amazon EC2 instance store for its catalog of items. The company wants to make sure that the catalog is highly available and that the catalog is stored in a durable location.
What should a solutions architect do to meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Move the catalog to Amazon ElastiCache for Redis.
{: .originaloption}
- [ ] B. Deploy a larger EC2 instance with a larger instance store.
{: .originaloption}
- [ ] C. Move the catalog from the instance store to Amazon S3 Glacier Deep Archive.
{: .originaloption}
- [ ] D. Move the catalog to an Amazon Elastic File System (Amazon EFS) file system.
{: .originaloption}


### Comments


---
layout: answered-question
title: "AWS Solutions Architect Is Using Amazon S3 Question"
meta: "AWS Exam Question: A solutions architect designs a resilient storage architecture using Amazon S3 for a digital media application. What storage option meets the requirements? Answer: Amazon S3 Glacier."
slug: "q-42-solutions-architect-amazon-s3"
certification: "AWS Solution Architect Associate Exam"
---


 A solutions architect is tasked with designing the storage architecture for a new digital media application using Amazon S3. The requirements include ensuring that media files are resilient against the loss of an Availability Zone. Additionally, the application features a mix of frequently accessed files and others that are infrequently accessed in unpredictable patterns. The architect's goal is to reduce the costs associated with both storing and retrieving these media files. What storage option would best satisfy these needs?
{: .query}

- [ ] A. S3 Standard Storage
{: .option}
- [x] B. S3 Intelligent Tiering
{: .option}
- [ ] C. S3 Standard - Infrequent Access (S3 Standard-IA)
{: .option}
- [ ] D. S3 One Zone - Infrequent Access (S3 One Zone-IA)
{: .option}

B
{: .answer}

The correct answer to the question is **B. S3 Intelligent Tiering**. Let's break down why this option is the best fit for the requirements and also analyze why the other options are not ideal.

### Explanation of the Correct Answer: S3 Intelligent Tiering

1. **Resilience to Loss of an Availability Zone**: S3 Intelligent Tiering is designed to store objects across multiple Availability Zones within a region. This ensures high durability and availability, aligning with the requirement for resilience against the loss of an Availability Zone.

2. **Cost Efficiency**: S3 Intelligent Tiering automatically moves objects between two access tiers—frequent access and infrequent access—based on changing access patterns. This means that if a file becomes frequently accessed, it will be stored in the frequent access tier, and if it becomes less frequently accessed, it will automatically move to the infrequent access tier. This dynamic optimization helps minimize costs without requiring manual intervention.

3. **Unpredictable Access Patterns**: Given that the access patterns are unpredictable, S3 Intelligent Tiering is ideal because it adapts automatically. Users do not need to worry about classifying their files upfront; S3 handles it behind the scenes.

4. **No Retrieval Fees for Tier Transitions**: With S3 Intelligent Tiering, there are no retrieval fees when objects move between tiers, which is a significant benefit when dealing with unpredictable access patterns.

### Why the Other Options are Incorrect:

- **A. S3 Standard Storage**: 
  - While S3 Standard provides high durability and availability across multiple Availability Zones, it does not optimize costs for objects that may have infrequent access. Users will incur higher storage costs for rarely accessed files because all stored objects are charged at the standard rate, regardless of access frequency. This makes it less cost-effective for the use case described.

- **C. S3 Standard - Infrequent Access (S3 Standard-IA)**:
  - S3 Standard-IA is also designed for durability and availability across multiple Availability Zones, but it is intended for data that is infrequently accessed. While it reduces storage costs compared to S3 Standard, it charges retrieval fees when accessing data, which could become expensive if access patterns are unpredictable. Therefore, for objects that may fluctuate between being frequently and infrequently accessed, Standard-IA can lead to higher costs in the long run compared to Intelligent Tiering.

- **D. S3 One Zone - Infrequent Access (S3 One Zone-IA)**:
  - This option stores data in a single Availability Zone, which does not meet the requirement for resilience to the loss of an Availability Zone. Although it is cheaper than Standard-IA, it sacrifices durability and availability, making it unsuitable for applications where data loss is a concern.

### Technical Details for AWS Solution Architect Associate Exam

1. **Storage Classes**: Understand the different S3 storage classes, their use cases, and cost structures. Be familiar with terms like "durability" (99.999999999% for all classes) and "availability" (which varies by class).

2. **Access Patterns**: Know how to analyze and manage access patterns. S3 Intelligent Tiering is specifically designed for unpredictable patterns, while other classes may require more manual management.

3. **Cost Management**: Be aware of the pricing models associated with different S3 storage classes, including storage costs and retrieval fees.

4. **Data Protection**: Understand the implications of data being stored in multiple Availability Zones versus a single zone, particularly in terms of disaster recovery and durability.

5. **Best Practices**: Familiarize yourself with best practices for using S3, such as lifecycle policies, access control, and optimizing cost through the appropriate use of storage classes.

By understanding these concepts, candidates can effectively prepare for the AWS Solution Architect Associate exam and make informed decisions when designing storage architectures in AWS.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The media files must be resilient to the loss of an Availability Zone. Some files are accessed frequently while other files are rarely accessed in an unpredictable pattern. The solutions architect must minimize the costs of storing and retrieving the media files.
Which storage option meets these requirements?
{: .original-query}

### Original Questions

- [ ] A. S3 Standard
{: .originaloption}
- [ ] B. S3 Intelligent-Tiering
{: .originaloption}
- [ ] C. S3 Standard-Infrequent Access (S3 Standard-IA)
{: .originaloption}
- [ ] D. S3 One Zone-Infrequent Access (S3 One Zone-IA)
{: .originaloption}


### Comments


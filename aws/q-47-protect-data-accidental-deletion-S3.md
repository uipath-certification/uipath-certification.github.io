---
layout: answered-question
title: "AWS A Company Has An Amazon S3 Bucket Question"
meta: "AWS Exam Question: A company has an Amazon S3 bucket with critical data. What steps should a solutions architect take to protect it from accidental deletion? Answer: S3 lifecycle policies, versioning."
slug: "q-47-protect-data-accidental-deletion-S3"
certification: "AWS Solution Architect Associate Exam"
---


 A company stores critical data in an Amazon S3 bucket and needs to safeguard this information against unintentional deletion. What steps should a solutions architect implement to achieve this goal? (Select two options.)
{: .query}

- [ ] A. Activate versioning for the S3 bucket.
{: .option}
- [ ] B. Activate MFA Delete for the S3 bucket.
{: .option}
- [ ] C. Establish a bucket policy for the S3 bucket.
{: .option}
- [ ] D. Activate the default encryption feature for the S3 bucket.
{: .option}
- [ ] E. Establish a lifecycle policy for the items within the S3 bucket.
{: .option}

AB
{: .answer}

To protect critical data in an Amazon S3 bucket from accidental deletion, the best combination of steps is to **activate versioning for the S3 bucket (A)** and **activate MFA Delete for the S3 bucket (B)**. Here's a detailed breakdown of why these options are correct, as well as explanations for why the other options are not suitable for this specific requirement.

### Correct Answers

**A. Activate versioning for the S3 bucket.**
- **Why it's correct:** Enabling versioning on an S3 bucket allows you to keep multiple versions of an object. When versioning is enabled, if an object is accidentally deleted, the object is not actually removed; instead, a delete marker is added. You can easily retrieve the previous versions of the object, thus protecting against accidental deletions. This is a crucial feature for maintaining data integrity, especially for critical data.

**B. Activate MFA Delete for the S3 bucket.**
- **Why it's correct:** MFA Delete adds an additional layer of security by requiring multi-factor authentication (MFA) to perform delete operations on versioned objects. This means that even if a user has permission to delete objects, they cannot do so unless they provide an MFA code. This significantly reduces the risk of accidental or malicious deletions, as it adds a human verification step.

### Incorrect Answers

**C. Establish a bucket policy for the S3 bucket.**
- **Why it's wrong:** While bucket policies can control access to the S3 bucket and specify who can perform actions on the objects within it, they do not inherently protect against accidental deletions. Bucket policies can restrict access to certain users or actions but do not provide a mechanism to recover deleted objects. Therefore, while important for security and access control, a bucket policy alone does not meet the requirement of protecting data from accidental deletion.

**D. Activate the default encryption feature for the S3 bucket.**
- **Why it's wrong:** Default encryption is designed to protect the data at rest by ensuring that all new objects are automatically encrypted when they are uploaded to S3. While encryption is essential for data security, it does not protect against accidental deletions. If a user deletes an object, it is still deleted regardless of whether the object was encrypted. This option does not address the requirement of preventing accidental deletions.

**E. Establish a lifecycle policy for the items within the S3 bucket.**
- **Why it's wrong:** Lifecycle policies are used to manage the lifecycle of objects in S3, such as transitioning them to different storage classes or deleting them after a specified period. While this can help in managing costs and optimizing storage, it does not prevent accidental deletion. In fact, a lifecycle policy could lead to the automatic deletion of objects if not configured correctly, which goes against the requirement of protecting data from accidental deletion.

### Technical Details for AWS Solution Architect Associate Exam

1. **Versioning**: Understand how versioning works in S3, including how to retrieve previous versions and how delete markers function.
  
2. **MFA Delete**: Know the requirements for enabling MFA Delete, including that it can only be enabled via the AWS Management Console or AWS CLI, and that it requires the use of AWS Identity and Access Management (IAM) policies.

3. **Bucket Policies**: Familiarize yourself with the structure of bucket policies, as well as their capabilities and limitations regarding access control.

4. **S3 Encryption**: Understand the types of encryption available in S3 (like SSE-S3, SSE-KMS, and client-side encryption) and their benefits, but also recognize that they do not prevent deletions.

5. **Lifecycle Policies**: Know how to configure lifecycle policies and their effects on object storage, including transitioning to lower-cost storage and deleting objects after a defined period.

By focusing on options A and B, a solutions architect can ensure that the S3 bucket is well-protected against accidental deletions, which is crucial for maintaining the integrity and availability of critical data.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company has an Amazon S3 bucket that contains critical data. The company must protect the data from accidental deletion.
Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)
{: .original-query}

### Original Questions

- [ ] A. Enable versioning on the S3 bucket.
{: .originaloption}
- [ ] B. Enable MFA Delete on the S3 bucket.
{: .originaloption}
- [ ] C. Create a bucket policy on the S3 bucket.
{: .originaloption}
- [ ] D. Enable default encryption on the S3 bucket.
{: .originaloption}
- [ ] E. Create a lifecycle policy for the objects in the S3 bucket.
{: .originaloption}


### Comments


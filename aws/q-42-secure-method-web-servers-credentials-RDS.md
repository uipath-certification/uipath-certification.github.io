---
layout: answered-question
title: "AWS A Company Has Several Web Servers Question"
meta: "AWS Exam Question: A company needs a secure way for web servers to frequently access an Amazon RDS MySQL Multi-AZ DB instance while rotating user credentials. Answer: AWS IAM."
slug: "q-42-secure-method-web-servers-credentials-RDS"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates multiple web servers that regularly connect to a shared Amazon RDS MySQL Multi-AZ database instance. To ensure secure connections, the company is looking for a solution that allows the web servers to access the database while also fulfilling a security mandate to frequently rotate user credentials. What solution would best satisfy these needs?
{: .query}

- [x] A. Save the database user credentials in AWS Secrets Manager and provide the required IAM permissions to enable the web servers to access it.
{: .option}
- [ ] B. Save the database user credentials in AWS Systems Manager OpsCenter. Provide the required IAM permissions to enable the web servers to access OpsCenter.
{: .option}
- [ ] C. Keep the database user credentials in a secure Amazon S3 bucket. Provide the required IAM permissions to enable the web servers to fetch the credentials and connect to the database.
{: .option}
- [ ] D. Save the database user credentials in files that are encrypted using AWS Key Management Service (AWS KMS) on the web server's file system. The web server must have the capability to decrypt these files in order to access the database.
{: .option}

A
{: .answer}

The correct answer to the question is **A: Save the database user credentials in AWS Secrets Manager and provide the required IAM permissions to enable the web servers to access it.**

### Explanation of the Correct Answer (A)

**AWS Secrets Manager** is a fully managed service that helps you protect access to your applications, services, and IT resources without the upfront investment and on-going maintenance costs of operating your own infrastructure. It is specifically designed for managing sensitive information like database credentials, API keys, and other secrets.

1. **Security and Encryption**: Secrets Manager automatically encrypts secrets at rest with AWS KMS (Key Management Service) and provides seamless integration with IAM to control access. This ensures that only authorized resources (e.g., the web servers) can retrieve the credentials.

2. **Automatic Rotation**: Secrets Manager allows you to configure automatic rotation of credentials. You can set up a Lambda function to manage the rotation process for your database credentials, ensuring that the credentials can be updated frequently without manual intervention.

3. **Ease of Integration**: Web servers can easily fetch the credentials using the AWS SDK, which provides a simple API for retrieving secrets, making it straightforward for developers.

4. **Auditing**: Secrets Manager integrates with AWS CloudTrail for auditing access to secrets, which is essential for compliance and security governance.

### Why the Other Options Are Incorrect

**B: Save the database user credentials in AWS Systems Manager OpsCenter.**
- **Wrong Use Case**: OpsCenter is primarily used for managing operational issues and incidents, rather than securely storing secrets. While Systems Manager does have a Parameter Store feature that can be used for storing parameters and secrets, it lacks the automated rotation and management capabilities that Secrets Manager provides.
- **Limited Functionality**: OpsCenter is not the right tool for managing sensitive secrets as it does not offer the same level of security and automation features that Secrets Manager does.

**C: Keep the database user credentials in a secure Amazon S3 bucket.**
- **Increased Complexity**: While you can store credentials in S3 with proper IAM policies, managing access and ensuring encryption is more complex than using Secrets Manager. You would need to implement your own rotation mechanism, which adds overhead and potential security risks.
- **Direct Access Risks**: Storing credentials in S3 requires careful IAM policy management to ensure that only authorized entities can access them, increasing the risk of exposure compared to Secrets Manager.

**D: Save the database user credentials in files that are encrypted using AWS Key Management Service (AWS KMS) on the web server's file system.**
- **Security Risks**: Storing secrets on the web server's file system, even if encrypted, poses risks such as key management complexity, potential exposure of the decryption keys, and the possibility of misconfigurations leading to unauthorized access.
- **Manual Management**: This approach requires manual management of the encryption keys and the files, which is less efficient and more error-prone than using a managed service like Secrets Manager.

### Technical Details for AWS Solutions Architect Associate Exam

- **AWS Secrets Manager**:
  - Use for storing sensitive information.
  - Provides automatic rotation of secrets.
  - Integrates with AWS Lambda for custom rotation logic.
  - Supports fine-grained IAM policies for access control.
  - Offers automatic encryption with AWS KMS.

- **AWS IAM (Identity and Access Management)**:
  - Understand how to create policies that grant permissions for AWS resources.
  - Know how to use IAM roles to grant permissions to EC2 instances or Lambda functions.

- **AWS KMS (Key Management Service)**:
  - Know how KMS integrates with other AWS services for encryption and key management.
  - Understand how to manage keys and access controls for encrypted data.

- **AWS CloudTrail**:
  - Understand how to use CloudTrail for monitoring and auditing API calls to AWS services, including access to secrets.

By understanding these concepts and the reasons why Secrets Manager is the best option for managing database credentials, you will be better prepared for the AWS Solutions Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company has several web servers that need to frequently access a common Amazon RDS MySQL Multi-AZ DB instance. The company wants a secure method for the web servers to connect to the database while meeting a security requirement to rotate user credentials frequently.
Which solution meets these requirements?
{: .original-query}

### Original Questions

- [ ] A. Store the database user credentials in AWS Secrets Manager. Grant the necessary IAM permissions to allow the web servers to access AWS Secrets Manager.
{: .originaloption}
- [ ] B. Store the database user credentials in AWS Systems Manager OpsCenter. Grant the necessary IAM permissions to allow the web servers to access OpsCenter.
{: .originaloption}
- [ ] C. Store the database user credentials in a secure Amazon S3 bucket. Grant the necessary IAM permissions to allow the web servers to retrieve credentials and access the database.
{: .originaloption}
- [ ] D. Store the database user credentials in files encrypted with AWS Key Management Service (AWS KMS) on the web server file system. The web server should be able to decrypt the files and access the database.
{: .originaloption}


### Comments


---
layout: answered-question
title: "AWS Company's Containerized Application Question"
meta: "AWS Exam Question: A company's containerized application on Amazon EC2 needs secure, real-time certificate encryption and highly available storage. Answer: AWS KMS, S3."
slug: "q-57-containerized-application-ec2"
certification: "AWS Solution Architect Associate Exam"
---


 A company's containerized application operates on an Amazon EC2 instance and requires the downloading of security certificates to facilitate communication with other business applications. The company seeks a secure method for encrypting and decrypting these certificates in near real-time. Additionally, the solution must ensure that the data is stored in a highly available storage system after encryption. What is the optimal solution that fulfills these criteria while minimizing operational overhead?
{: .query}

- [ ] A. Generate secrets in AWS Secrets Manager for encrypted certificates. Update the certificates manually when necessary. Manage data access through detailed IAM permissions.
{: .option}
- [ ] B. Develop an AWS Lambda function that leverages the Python cryptography library to handle encryption tasks. Save the function in an Amazon S3 bucket.
{: .option}
- [x] C. Set up a customer-managed key using AWS Key Management Service (AWS KMS). Grant the EC2 role permission to utilize the KMS key for encryption tasks. Save the encrypted data in Amazon S3.
{: .option}
- [ ] D. Generate a customer-managed key using the AWS Key Management Service (AWS KMS). Grant the EC2 role permission to utilize the KMS key for encryption tasks. Save the encrypted information on Amazon Elastic Block Store (Amazon EBS) volumes.
{: .option}

C
{: .answer}

The correct answer to the question is **C: Set up a customer-managed key using AWS Key Management Service (AWS KMS). Grant the EC2 role permission to utilize the KMS key for encryption tasks. Save the encrypted data in Amazon S3.**

### Why Option C is Correct:

1. **Security and Encryption**: AWS KMS provides a robust mechanism for managing cryptographic keys with high security. By creating a customer-managed key, you have full control over the key usage, including permissions and access policies.

2. **Near Real-Time Encryption and Decryption**: AWS KMS is optimized for low-latency operations, making it suitable for near real-time encryption and decryption of the certificates required by the application.

3. **Highly Available Storage**: Storing the encrypted certificates in Amazon S3 provides high availability and durability. S3 is designed to provide 99.999999999% durability and can be accessed globally.

4. **Least Operational Overhead**: Using AWS KMS minimizes operational overhead because you don’t need to manage the underlying encryption libraries or handle the cryptographic processes manually. AWS KMS handles the key management and security for you.

5. **IAM Integration**: With AWS IAM, you can easily manage permissions for the EC2 instance to use the KMS key, ensuring secure access to the encrypted data.

### Why the Other Options are Incorrect:

**A. Generate secrets in AWS Secrets Manager for encrypted certificates. Update the certificates manually when necessary. Manage data access through detailed IAM permissions.**
- **Operational Overhead**: While AWS Secrets Manager can store sensitive information like secrets and certificates, it is primarily designed for secrets management rather than efficient encryption/decryption processes. This would require more operational overhead to manage updates manually.
- **Lack of Efficient Encryption**: Secrets Manager does not provide direct encryption capabilities like AWS KMS, making it less suitable for the real-time encryption requirement.

**B. Develop an AWS Lambda function that leverages the Python cryptography library to handle encryption tasks. Save the function in an Amazon S3 bucket.**
- **Increased Complexity**: This option involves developing and maintaining custom code, which increases operational overhead. You would need to manage the Lambda function, handle updates, and ensure proper error handling and logging.
- **Performance Issues**: Using a Lambda function for encryption can introduce latency, especially if the function needs to be invoked frequently. Furthermore, managing the cryptography library and ensuring its security adds complexity.

**D. Generate a customer-managed key using the AWS Key Management Service (AWS KMS). Grant the EC2 role permission to utilize the KMS key for encryption tasks. Save the encrypted information on Amazon Elastic Block Store (Amazon EBS) volumes.**
- **Storage Limitations**: While EBS can provide block-level storage with high availability, it is not as scalable or cost-effective as S3 for storing large amounts of data, especially if you need to frequently access or update the certificates.
- **Higher Operational Overhead**: Managing EBS volumes can involve more operational tasks compared to S3, such as volume snapshots and monitoring EBS performance.

### Technical Details for AWS Solution Architect Associate Exam:

1. **AWS KMS**: Understand how to create customer-managed keys, manage key policies, and integrate KMS with other AWS services for encryption and decryption purposes.

2. **IAM Policies**: Familiarize yourself with creating IAM policies that allow or restrict access to KMS keys and S3 buckets.

3. **Amazon S3**: Learn about S3 storage classes, lifecycle policies, and versioning, as well as how to securely access and manage data in S3.

4. **Encryption at Rest**: Know the different encryption options available in AWS, including server-side encryption with KMS keys.

5. **Secrets Management**: While AWS Secrets Manager is a valuable service for storing sensitive information, understand when it is appropriate to use it versus using KMS and S3 for encryption tasks.

By understanding these concepts, you will be better prepared for the AWS Solution Architect Associate Exam and for designing secure, efficient solutions on AWS.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company's containerized application runs on an Amazon EC2 instance. The application needs to download security certificates before it can communicate with other business applications. The company wants a highly secure solution to encrypt and decrypt the certificates in near real time. The solution also needs to store data in highly available storage after the data is encrypted.
Which solution will meet these requirements with the LEAST operational overhead?
{: .original-query}

### Original Questions

- [ ] A. Create AWS Secrets Manager secrets for encrypted certificates. Manually update the certificates as needed. Control access to the data by using fine-grained IAM access.
{: .originaloption}
- [ ] B. Create an AWS Lambda function that uses the Python cryptography library to receive and perform encryption operations. Store the function in an Amazon S3 bucket.
{: .originaloption}
- [ ] C. Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon S3.
{: .originaloption}
- [ ] D. Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon Elastic Block Store (Amazon EBS) volumes.
{: .originaloption}


### Comments


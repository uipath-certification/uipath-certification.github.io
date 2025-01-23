---
layout: answered-question
title: "AWS A Company Has An Application Question"
meta: "AWS Exam Question: A company wants to minimize credential management overhead for an app on EC2 with an Aurora database. What is the best answer? Consider AWS Secrets Manager."
slug: "q-57-minimize-operational-overhead-EC"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates an application on Amazon EC2 instances, utilizing an Amazon Aurora database. Currently, the EC2 instances connect to the database using usernames and passwords stored in a local file. To reduce the operational burden associated with credential management, what steps should a solutions architect take to achieve this objective?
{: .query}

- [x] A. Utilize AWS Secrets Manager and enable automatic rotation.
{: .option}
- [ ] B. Utilize AWS Systems Manager Parameter Store and enable automatic rotation.
{: .option}
- [ ] C. Set up an Amazon S3 bucket for storing objects that utilize an AWS Key Management Service (AWS KMS) encryption key. Transfer the credential file to the S3 bucket. Configure the application to reference the S3 bucket.
{: .option}
- [ ] D. For each EC2 instance, generate an encrypted Amazon Elastic Block Store (Amazon EBS) volume. Connect the newly created EBS volume to each EC2 instance. Transfer the credential file to this new EBS volume. Direct the application to utilize the new EBS volume.
{: .option}

A
{: .answer}

The correct answer is **A. Utilize AWS Secrets Manager and enable automatic rotation.**

### Explanation of the Correct Answer:

1. **AWS Secrets Manager**: This service is specifically designed for managing secrets, such as database credentials, API keys, and other sensitive information. It provides a secure way to store, retrieve, and manage these secrets, which significantly reduces the operational overhead associated with credential management.

2. **Automatic Rotation**: AWS Secrets Manager can automatically rotate secrets on a specified schedule without requiring any human intervention. This means that your EC2 instances can always access up-to-date credentials without manual updates, enhancing security and reducing the risk of credential exposure.

3. **Integration with AWS Services**: Secrets Manager integrates easily with other AWS services, including Amazon Aurora. Applications running on EC2 can retrieve secrets through the AWS SDKs or the AWS CLI, which simplifies the development process.

4. **Audit and Compliance**: Secrets Manager provides access logs through AWS CloudTrail, allowing for easy tracking of access and modifications to secrets, which is essential for compliance and security audits.

### Why the Other Options are Incorrect:

**B. Utilize AWS Systems Manager Parameter Store and enable automatic rotation.**
- **Limitations**: While AWS Systems Manager Parameter Store can store sensitive information and supports encryption, it does not have built-in automatic rotation for secrets. You would need to implement your own mechanism for rotating credentials, which adds complexity and operational overhead.
- **Use Case**: Parameter Store is more suitable for storing configuration data or less sensitive information rather than for managing critical secrets.

**C. Set up an Amazon S3 bucket for storing objects that utilize an AWS Key Management Service (AWS KMS) encryption key. Transfer the credential file to the S3 bucket. Configure the application to reference the S3 bucket.**
- **Security Concerns**: Storing credentials in S3, even with KMS encryption, is not a recommended best practice for managing secrets. It requires additional management for access control, and there’s a risk of exposing the credentials if the S3 bucket permissions are misconfigured.
- **Operational Overhead**: This solution does not provide automatic rotation of secrets and requires the application to manage the retrieval of the credentials, which increases complexity.

**D. For each EC2 instance, generate an encrypted Amazon Elastic Block Store (Amazon EBS) volume. Connect the newly created EBS volume to each EC2 instance. Transfer the credential file to this new EBS volume. Direct the application to utilize the new EBS volume.**
- **Complexity and Management**: This approach increases operational overhead as it requires managing EBS volumes for each EC2 instance. Each instance would need to be configured to mount the volume, adding complexity to the deployment process.
- **Lack of Rotation**: Like the other options, this method does not support automatic rotation of credentials, which is a key benefit that AWS Secrets Manager provides.

### Key Technical Details for AWS Solution Architect Associate Exam:

- **AWS Secrets Manager**: Understand its features, such as secret versioning, automatic rotation, and integration with AWS services.
- **AWS Systems Manager Parameter Store**: Know the differences between parameter types (SecureString vs. String), and use cases.
- **S3 Bucket Security**: Be aware of IAM policies and bucket policies that govern access to S3 objects, and understand best practices for storing sensitive data.
- **Amazon EBS**: Familiarize yourself with EBS volume types, encryption options, and management practices.

For the AWS Solutions Architect Associate Exam, be prepared to discuss best practices for managing secrets in AWS and the trade-offs of different approaches, particularly focusing on security, operational overhead, and compliance.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company has an application that runs on Amazon EC2 instances and uses an Amazon Aurora database. The EC2 instances connect to the database by using user names and passwords that are stored locally in a file. The company wants to minimize the operational overhead of credential management.
What should a solutions architect do to accomplish this goal?
{: .original-query}

### Original Questions

- [ ] A. Use AWS Secrets Manager. Turn on automatic rotation.
{: .originaloption}
- [ ] B. Use AWS Systems Manager Parameter Store. Turn on automatic rotation.
{: .originaloption}
- [ ] C. Create an Amazon S3 bucket to store objects that are encrypted with an AWS Key Management Service (AWS KMS) encryption key. Migrate the credential file to the S3 bucket. Point the application to the S3 bucket.
{: .originaloption}
- [ ] D. Create an encrypted Amazon Elastic Block Store (Amazon EBS) volume for each EC2 instance. Attach the new EBS volume to each EC2 instance. Migrate the credential file to the new EBS volume. Point the application to the new EBS volume.
{: .originaloption}


### Comments

--- 
Option B is incorrect because AWS Systems Manager Parameter Store does not natively support automatic rotation of credentials unless the user implements a custom solution. Option A is the preferred approach, as it leverages AWS Secrets Manager, which provides built-in functionality for automatic rotation of secrets, thereby reducing the operational overhead associated with credential management. Utilizing AWS Secrets Manager enhances security by allowing the application to retrieve credentials dynamically while minimizing the risks associated with hardcoding sensitive information. This solution not only streamlines the management of database credentials but also adheres to best practices for security and compliance in cloud environments.
{: .comment}
--- 
AWS Secrets Manager is your go-to buddy for keeping those pesky access credentials safe and sound! 🎉 This nifty service allows you to effortlessly manage, rotate, and retrieve your database credentials, API keys, and other sensitive information throughout their entire lifecycle. Think of it as your personal security guard, ensuring your applications and IT resources stay secure while you focus on the fun stuff! 🔐✨ Plus, with automatic rotation features, you can say goodbye to the hassle of manual updates—it's like having a magic wand for credential management! 🪄 So go ahead, let AWS Secrets Manager do the heavy lifting while you kick back and enjoy the show!
{: .comment}
--- 
A - On top of that, Amazon Aurora takes the wheel when it comes to managing secret settings and, by default, performs a delightful little dance of automatic rotation every seven days. So, while you kick back and enjoy your coffee, Aurora ensures your credentials stay fresh and secure.
{: .comment}
--- 
Thank you for your clarification! I was a bit puzzled at first, but you really highlighted the crucial point. It's important to note that option B does not facilitate automatic rotation of credentials. Your explanation really helped clear things up for me!
{: .comment}
--- 
Opting for AWS Secrets Manager with automatic rotation is a fantastic way to lighten the load of managing credentials! 🎉 Secrets Manager offers a secure, centralized platform for safely storing and handling sensitive information, like database credentials. With this delightful service, your application can effortlessly fetch these credentials at runtime, freeing you from the hassle of keeping them in a local file. Plus, by enabling automatic rotation, you'll ensure that your database credentials are updated regularly without lifting a finger, boosting both security and compliance. What a win-win! 🌟
{: .comment}

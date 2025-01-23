---
layout: answered-question
title: "AWS A Company Performs Monthly Maintenance On Its Question"
meta: "AWS Exam Question: A company needs to rotate credentials for Amazon RDS for MySQL databases across AWS Regions with the least operational overhead. Answer: AWS Secrets Manager."
slug: "q-42-monthly-maintenance-aws-rds-mysql"
certification: "AWS Solution Architect Associate Exam"
---


 A company conducts monthly maintenance on its AWS infrastructure, which includes rotating credentials for its Amazon RDS for MySQL databases across various AWS Regions. What solution would achieve this with minimal operational overhead?
{: .query}

- [x] A. Save the credentials as secrets in AWS Secrets Manager. Implement multi-Region secret replication for the necessary Regions. Set up Secrets Manager to periodically rotate the secrets.
{: .option}
- [ ] B. Save the credentials as secrets in AWS Systems Manager by establishing a secure string parameter. Implement multi-Region secret replication for the necessary Regions. Set up Systems Manager to periodically rotate the secrets.
{: .option}
- [ ] C. Save the credentials in an Amazon S3 bucket with server-side encryption (SSE) activated. Utilize Amazon EventBridge (formerly known as Amazon CloudWatch Events) to trigger an AWS Lambda function for rotating the credentials.
{: .option}
- [ ] D. Secure the credentials by encrypting them as secrets with AWS Key Management Service (AWS KMS) multi-Region customer-managed keys. Save the secrets in a global table within Amazon DynamoDB. Employ an AWS Lambda function to access the secrets from DynamoDB. Utilize the RDS API to handle the rotation of the secrets.
{: .option}

A
{: .answer}

The correct answer to the question regarding rotating credentials for Amazon RDS for MySQL databases across multiple AWS Regions with the least operational overhead is **A. Save the credentials as secrets in AWS Secrets Manager. Implement multi-Region secret replication for the necessary Regions. Set up Secrets Manager to periodically rotate the secrets.**

### Explanation of the Correct Answer (A)

1. **AWS Secrets Manager**: This service is specifically designed for managing and rotating secrets such as database credentials. It provides built-in functionality to manage sensitive information securely and efficiently.

2. **Multi-Region Secret Replication**: Secrets Manager supports the replication of secrets across multiple AWS Regions. This feature allows you to maintain the same secret in different regions without manually copying or managing them, which significantly reduces operational overhead.

3. **Automatic Rotation**: AWS Secrets Manager can automatically rotate secrets according to a specified schedule. This means that you can configure it to rotate the RDS credentials automatically without any manual intervention, ensuring that your databases are always using fresh and secure credentials.

4. **Integration with RDS**: Secrets Manager integrates seamlessly with Amazon RDS. This integration simplifies the process of connecting to RDS databases since applications can retrieve the credentials directly from Secrets Manager.

### Why the Other Options Are Incorrect

**B. AWS Systems Manager**: 
- While AWS Systems Manager can store secrets and manage parameters, it is generally less suited for secrets management compared to Secrets Manager. Systems Manager does not have robust features for automated secret rotation and lacks the same level of integration with RDS as Secrets Manager. Additionally, it may not offer multi-region replication as seamlessly.

**C. Amazon S3 with Lambda**:
- Storing credentials in an S3 bucket is not a best practice for security. Even with encryption, managing secrets in S3 requires additional overhead for handling access controls and writing custom Lambda functions to perform rotation. This approach lacks the built-in secret management features, such as automated rotation and multi-region replication, making it a more complex and less secure solution.

**D. DynamoDB with AWS KMS**:
- Although storing secrets in DynamoDB with KMS encryption is a viable method, it involves significant overhead. You would need to create and manage the DynamoDB table, implement access controls, and write Lambda functions to retrieve and rotate secrets. This approach is more complex and less direct than using Secrets Manager, which is purpose-built for secret management.

### Technical Details for AWS Solution Architect Associate Exam

1. **AWS Secrets Manager**: Understand how to create and manage secrets, set up automatic rotation, and the implications of secret replication across regions.

2. **Multi-Region Replication**: Familiarize yourself with the concept of replicating secrets across AWS Regions and the benefits this offers for disaster recovery and system resilience.

3. **RDS Integration**: Know how to configure RDS instances to use Secrets Manager for authentication and the advantages of using IAM roles and policies for secure access.

4. **Security Best Practices**: Understand the security implications of storing sensitive data and the importance of using managed services such as Secrets Manager and KMS for encryption.

5. **Automated Processes**: Be able to discuss the advantages of automating secret rotation and the impact this has on security posture, especially in environments with stringent compliance requirements.

By focusing on these details, you will be well-prepared for questions related to credential management and security in AWS, particularly in the context of the AWS Certified Solutions Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company performs monthly maintenance on its AWS infrastructure. During these maintenance activities, the company needs to rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions.
Which solution will meet these requirements with the LEAST operational overhead?
{: .original-query}

### Original Questions

- [ ] A. Store the credentials as secrets in AWS Secrets Manager. Use multi-Region secret replication for the required Regions. Configure Secrets Manager to rotate the secrets on a schedule.
{: .originaloption}
- [ ] B. Store the credentials as secrets in AWS Systems Manager by creating a secure string parameter. Use multi-Region secret replication for the required Regions. Configure Systems Manager to rotate the secrets on a schedule.
{: .originaloption}
- [ ] C. Store the credentials in an Amazon S3 bucket that has server-side encryption (SSE) enabled. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function to rotate the credentials.
{: .originaloption}
- [ ] D. Encrypt the credentials as secrets by using AWS Key Management Service (AWS KMS) multi-Region customer managed keys. Store the secrets in an Amazon DynamoDB global table. Use an AWS Lambda function to retrieve the secrets from DynamoDB. Use the RDS API to rotate the secrets.
{: .originaloption}


### Comments

--- 
Option A is the optimal solution. By storing the credentials as secrets in AWS Secrets Manager, the company can ensure secure management of sensitive information. Implementing multi-Region secret replication allows the credentials to be consistent and accessible across the necessary AWS Regions. Additionally, configuring Secrets Manager to periodically rotate the secrets automates the credential management process, thereby significantly reducing operational overhead. This approach leverages built-in AWS capabilities designed for security and scalability, making it a highly efficient solution for maintaining secure access to Amazon RDS for MySQL databases across multiple regions.
{: .comment}
--- 
Alright, let’s sprinkle some fun while keeping it professional! 🌟 

When it comes to rotating credentials for your Amazon RDS for MySQL databases across different AWS Regions, you definitely want to keep things light on the operational overhead. After all, who wants to juggle a dozen tasks when you can keep it simple? 

Option A takes the cake! 🎂 With AWS Secrets Manager, you can easily encrypt your credentials for databases like RDS, DocumentDB, and Redshift, not to mention key/value secrets. Plus, it offers handy multi-region replication and can manage remote rotations on a schedule. Talk about a smooth operator! 

Now, let’s chat about the other options. 
- Option B? Not quite right! While Secure String parameters are a thing in Parameter Store, they just don’t have the encryption magic that AWS Secrets Manager brings to the table. 
- Option C? Oh dear, it’s missing the multi-region replication feature for S3, which is a bit of a deal-breaker. 
- And option D? It’s like trying to bake a cake with too many ingredients—too complicated for a simple rotation task! 🎉

So, keep it simple, keep it efficient, and let AWS Secrets Manager do the heavy lifting for your credential rotations! 🎈
{: .comment}
--- 
A: Spot on! AWS Secrets Manager conveniently handles the rotation of credentials without breaking a sweat. 

B: Not quite right—AWS Systems Manager Parameter Store doesn’t actually handle cryptographic functions on its own. It leans on AWS KMS to encrypt and decrypt its secure string parameters. 

C and D: Not the best choices either—while they do employ Lambda for handling tasks, they come with more operational overhead than necessary.
{: .comment}
--- 
AWS Secrets Manager is an exceptional secrets management service designed to securely store, manage, and rotate sensitive information such as database credentials, API keys, and SSH keys. By leveraging Secrets Manager, you can significantly reduce the operational burden associated with rotating credentials for your Amazon RDS for MySQL databases across multiple AWS Regions. 

You can effortlessly save the credentials as secrets and utilize multi-Region secret replication to ensure that these secrets are synchronized across the necessary Regions. Furthermore, you have the capability to configure Secrets Manager to automatically rotate these credentials on a predefined schedule, eliminating the need for manual updates. This proactive approach not only diminishes the risk of credential exposure but also streamlines the overall management of sensitive information, enhancing your operational efficiency.
{: .comment}
--- 
Option A is a delightful solution! By utilizing AWS Secrets Manager to store your credentials as secrets and enabling multi-Region secret replication, you can effortlessly manage and rotate your database credentials across all necessary AWS Regions. 🌈 

AWS Secrets Manager is like a trusty sidekick, helping you store, manage, and rotate your secrets with ease! With the added perk of multi-Region secret replication, your secrets can be seamlessly synchronized across the required Regions, ensuring smooth sailing during maintenance activities. Plus, with automatic rotation on a set schedule, you can wave goodbye to those tedious manual updates and embrace a life of minimal operational overhead. It's a win-win! 🎉
{: .comment}

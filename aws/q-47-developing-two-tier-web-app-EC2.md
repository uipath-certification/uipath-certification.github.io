---
layout: answered-question
title: "AWS A Company Is Developing A Two-Tier Web Application Question"
meta: "AWS Exam Question: A company needs to securely manage database credentials for a web app on Amazon EC2 and RDS. What is the best answer?"
slug: "q-47-developing-two-tier-web-app-EC2"
certification: "AWS Solution Architect Associate Exam"
---


 A company is building a two-tier web application hosted on AWS. The developers have set up the application on an Amazon EC2 instance that has a direct connection to a backend Amazon RDS database. It is crucial for the company to avoid hardcoding database credentials within the application, and they also need a mechanism for automatically rotating these credentials regularly. What solution would fulfill these requirements while minimizing operational overhead?
{: .query}

- [ ] A. Save the database credentials in the instance metadata. Utilize Amazon EventBridge (previously known as Amazon CloudWatch Events) to create rules that trigger a scheduled AWS Lambda function, which will simultaneously refresh the RDS credentials and the instance metadata.
{: .option}
- [ ] B. Save the database credentials in a configuration file located in an encrypted Amazon S3 bucket. Implement Amazon EventBridge (formerly known as Amazon CloudWatch Events) rules to execute a scheduled AWS Lambda function that simultaneously updates both the RDS credentials and those in the configuration file. Enable S3 Versioning to maintain the option to revert to earlier values.
{: .option}
- [x] C. Save the database credentials as a secret in AWS Secrets Manager. Enable automatic rotation for the secret. Assign the necessary permissions to the EC2 role to allow access to the secret.
{: .option}
- [ ] D. Save the database credentials as encrypted parameters in AWS Systems Manager Parameter Store. Enable automatic rotation for these encrypted parameters. Attach the necessary permissions to the EC2 role to allow access to the encrypted parameters.
{: .option}

C
{: .answer}

The correct answer is **C. Save the database credentials as a secret in AWS Secrets Manager. Enable automatic rotation for the secret. Assign the necessary permissions to the EC2 role to allow access to the secret.**

### Explanation of the Correct Answer:

1. **AWS Secrets Manager**:
   - **Purpose**: AWS Secrets Manager is specifically designed for managing sensitive information like database credentials. It provides a centralized and secure way to store secrets.
   - **Automatic Rotation**: AWS Secrets Manager has built-in support for automatic rotation of secrets. This means that you can configure it to change the database credentials on a regular schedule without manual intervention. This reduces the operational overhead of managing credentials.
   - **Access Control**: You can assign IAM roles to your EC2 instances that provide the necessary permissions to retrieve the secret from Secrets Manager securely. This maintains a separation of concerns and enhances security by not hardcoding the credentials.

### Why the Other Options Are Incorrect:

- **A. Save the database credentials in the instance metadata.** 
  - **Weakness**: While instance metadata can be used to store temporary data, it is not designed for storing sensitive information like database credentials. It is accessible from the EC2 instance and can be vulnerable to exposure if the instance is compromised.
  - **Operational Overhead**: Implementing a solution using EventBridge and Lambda to manage instance metadata would require more operational overhead than using Secrets Manager, which is purpose-built for this task.

- **B. Save the database credentials in a configuration file located in an encrypted Amazon S3 bucket.**
  - **Weakness**: Although storing credentials in an encrypted S3 bucket provides some level of security, it is not as convenient as using Secrets Manager. You would still need to manage the decryption and access to the S3 bucket, which adds complexity.
  - **Manual Credential Management**: The need to implement an EventBridge rule and Lambda function for updating the credentials implies more overhead and potential for error compared to the managed solution provided by Secrets Manager.

- **D. Save the database credentials as encrypted parameters in AWS Systems Manager Parameter Store.**
  - **Weakness**: While Parameter Store is a viable option for securely storing configuration data, it does not have the same level of built-in support for automatic rotation of secrets as Secrets Manager does. 
  - **Less Specialized**: Secrets Manager is tailored for secrets management (including automatic rotation), while Parameter Store is more general-purpose. If you need advanced capabilities like automatic rotation, Secrets Manager is the more appropriate choice.

### Technical Details for AWS Solutions Architect Associate Exam:

1. **AWS Secrets Manager**:
   - **Secret Rotation**: You can configure Secrets Manager to automatically rotate your secrets using AWS Lambda functions. You define a Lambda function that is triggered when the secret needs to be rotated.
   - **IAM Policies**: When using Secrets Manager, you must ensure that the EC2 instance has the appropriate IAM role with permissions to access the secret. The policy typically includes actions like `secretsmanager:GetSecretValue`.

2. **AWS Systems Manager Parameter Store**:
   - Useful for storing configuration data, including sensitive data, but lacks built-in rotation features.
   - Requires IAM permissions for access as well, but managing secrets isn't its primary function.

3. **Instance Metadata**:
   - Accessible via a special IP (169.254.169.254) from within the EC2 instance.
   - Not a secure method for storing sensitive data.

4. **EventBridge**:
   - A serverless event bus that makes it easy to connect applications using events. While it can be used for automation, it is not necessary when using Secrets Manager's built-in features.

In summary, **Option C** is the best choice due to its specialized functionality, security, and reduced operational overhead, which are crucial for managing sensitive database credentials in a cloud environment.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is developing a two-tier web application on AWS. The company's developers have deployed the application on an Amazon EC2 instance that connects directly to a backend Amazon RDS database. The company must not hardcode database credentials in the application. The company must also implement a solution to automatically rotate the database credentials on a regular basis.
Which solution will meet these requirements with the LEAST operational overhead?
{: .original-query}

### Original Questions

- [ ] A. Store the database credentials in the instance metadata. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and instance metadata at the same time.
{: .originaloption}
- [ ] B. Store the database credentials in a configuration file in an encrypted Amazon S3 bucket. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and the credentials in the configuration file at the same time. Use S3 Versioning to ensure the ability to fall back to previous values.
{: .originaloption}
- [ ] C. Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the secret. Attach the required permission to the EC2 role to grant access to the secret.
{: .originaloption}
- [ ] D. Store the database credentials as encrypted parameters in AWS Systems Manager Parameter Store. Turn on automatic rotation for the encrypted parameters. Attach the required permission to the EC2 role to grant access to the encrypted parameters.
{: .originaloption}


### Comments

--- 
AWS Secrets Manager offers built-in support for automatic credential rotation, which is not a feature provided by AWS Systems Manager Parameter Store. By leveraging Secrets Manager, organizations can configure automatic rotation policies for their database credentials, ensuring that credentials are regularly updated without manual intervention. This capability not only enhances security by minimizing the risk of credential exposure but also reduces operational overhead associated with managing credential lifecycles. In contrast, while Parameter Store allows for the storage of encrypted parameters, it requires a more manual approach to implement rotation, potentially leading to increased management complexity.
{: .comment}
--- 
Looks like Parameter Store is a bit like that friend who won't remember to change the batteries in your remote—no automatic rotation support here! 😅 So, if you're looking for a solution that keeps your database credentials fresh and fabulous, you might want to consider other options. After all, who wants to be stuck with stale credentials? 🌟
{: .comment}
--- 
The best approach here is option C: stash the database credentials in AWS Secrets Manager. Don't forget to enable automatic rotation for that secret, and make sure to attach the necessary permissions to the EC2 role to allow it access.

AWS Secrets Manager is your trusty sidekick when it comes to managing sensitive information like database credentials, API keys, and other secrets. By keeping your credentials in Secrets Manager, you avoid the rookie mistake of hardcoding them into your application. Plus, with automatic rotation, those secrets get a regular refresh, keeping them safe and sound. Just make sure your EC2 instance has the right permissions to access the secret, and voilà—your application can pull the credentials on demand without breaking a sweat. It's like having your cake and eating it too, but without the calories!
{: .comment}
--- 
Option A, which involves saving the database credentials in the instance metadata and utilizing a Lambda function for updates, does not satisfy the requirement of avoiding hardcoded credentials in the application.

Option B, where the database credentials are stored in an encrypted S3 bucket and updated via a Lambda function, also falls short. This approach still necessitates the application accessing credentials from the configuration file, which doesn't align with the requirement.

Option D, which proposes storing the database credentials as encrypted parameters in AWS Systems Manager Parameter Store, is similarly inadequate. In this case, the application would still need to retrieve the encrypted parameters for utilization, thus not fully adhering to the requirement of not hardcoding credentials. 

In contrast, leveraging AWS Secrets Manager for storing the database credentials and enabling automatic rotation presents an optimal solution. This approach not only ensures that the credentials are securely managed but also automates the rotation process, greatly reducing operational overhead while enhancing security.
{: .comment}
--- 
Automatic credential rotation is a delightful feature offered by AWS Secrets Manager! 🌟 This fantastic tool not only keeps your database credentials secure but also ensures they are regularly updated without any hassle. With Secrets Manager, you can easily manage access to sensitive information, allowing your application to thrive while staying safe and sound!
{: .comment}

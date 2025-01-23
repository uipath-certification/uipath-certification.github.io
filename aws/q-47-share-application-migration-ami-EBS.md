---
layout: answered-question
title: "AWS A Company Recently Signed A Contract Question"
meta: "AWS Exam Question: A solutions architect needs to share an AMI backed by Amazon EBS using AWS KMS. What is the MOST secure way to share the AMI? Answer: AWS Managed Service Provider."
slug: "q-47-share-application-migration-ami-EBS"
certification: "AWS Solution Architect Associate Exam"
---


 A company has recently engaged an AWS Managed Service Provider (MSP) Partner to assist with an application migration project. A solutions architect is tasked with sharing an Amazon Machine Image (AMI) from their current AWS account with the AWS account of the MSP Partner. This AMI is supported by Amazon Elastic Block Store (Amazon EBS) and utilizes a customer-managed key from AWS Key Management Service (AWS KMS) for encrypting EBS volume snapshots. What is the most secure method for the solutions architect to share the AMI with the MSP Partner's AWS account?
{: .query}

- [ ] A. Ensure that the encrypted AMI and snapshots are accessible to the public. Adjust the key policy to permit the MSP Partner's AWS account to utilize the key.
{: .option}
- [x] B. Change the launchPermission attribute of the AMI. Grant access to the AMI exclusively to the MSP Partner's AWS account. Adjust the key policy to permit the MSP Partner's AWS account to utilize the key.
{: .option}
- [ ] C. Adjust the launchPermission attribute of the AMI. Grant access to the AMI solely to the MSP Partner's AWS account. Update the key policy to establish trust in a new KMS key owned by the MSP Partner for encryption purposes.
{: .option}
- [ ] D. Transfer the AMI from the source account to an Amazon S3 bucket in the AWS account of the MSP Partner. Secure the S3 bucket by encrypting it with a KMS key owned by the MSP Partner. Then, copy and initiate the AMI within the MSP Partner's AWS account.
{: .option}

B
{: .answer}

The correct answer to the question is **B**: "Change the launchPermission attribute of the AMI. Grant access to the AMI exclusively to the MSP Partner's AWS account. Adjust the key policy to permit the MSP Partner's AWS account to utilize the key."

### Explanation of the Correct Answer (B)

1. **Launch Permissions**: By changing the launchPermission attribute of the AMI, the solutions architect can explicitly grant access to the MSP Partner's AWS account. This ensures that only the specified account has the ability to launch new instances from the shared AMI.
  
2. **Key Policy Adjustment**: The AMI is backed by EBS snapshots that are encrypted with a KMS customer managed key. To allow the MSP Partner to use the encrypted snapshots, the key policy for the KMS key must be adjusted to include permissions for the MSP Partner's AWS account. This ensures that they have the necessary permissions to decrypt the snapshots when launching instances from the AMI.

3. **Security**: This approach maintains a high level of security by restricting access to the AMI and the KMS key to only the MSP Partner's AWS account. No public access is granted, and permissions are explicitly defined, minimizing the risk of unauthorized access.

### Analysis of Incorrect Answers

- **A**: "Ensure that the encrypted AMI and snapshots are accessible to the public. Adjust the key policy to permit the MSP Partner's AWS account to utilize the key."
  - **Why It's Wrong**: Making the AMI and snapshots public is a significant security risk. Public access allows anyone on the internet to launch instances from the AMI, which could lead to data breaches or misuse of the application. While the key policy adjustment could allow the MSP Partner to use the KMS key, the public accessibility negates the security benefits.

- **C**: "Adjust the launchPermission attribute of the AMI. Grant access to the AMI solely to the MSP Partner's AWS account. Update the key policy to establish trust in a new KMS key owned by the MSP Partner for encryption purposes."
  - **Why It's Wrong**: This answer proposes creating a new KMS key owned by the MSP Partner for encryption purposes, which is unnecessary. The existing KMS key can be used to encrypt the snapshots, and the permissions can simply be adjusted to allow the MSP Partner to access it. Creating a new key introduces additional complexity and does not enhance security.

- **D**: "Transfer the AMI from the source account to an Amazon S3 bucket in the AWS account of the MSP Partner. Secure the S3 bucket by encrypting it with a KMS key owned by the MSP Partner. Then, copy and initiate the AMI within the MSP Partner's AWS account."
  - **Why It's Wrong**: This approach is overly complicated. Transferring the AMI to an S3 bucket introduces unnecessary steps and potential security concerns. Additionally, AMIs can be shared directly between accounts without the need for intermediate storage in S3. Using S3 for this purpose would not only slow down the process but could also expose the AMI to additional risks.

### Technical Details for AWS Solutions Architect Associate Exam

- **Amazon Machine Image (AMI)**: An AMI is a template that contains a software configuration (operating system, application server, and applications). It serves as the basic unit of deployment for Amazon EC2 instances.

- **EBS Snapshots**: EBS snapshots are incremental backups of EBS volumes. They can be used to create new EBS volumes or AMIs.

- **AWS Key Management Service (KMS)**: AWS KMS allows you to create and control the encryption keys used to encrypt your data. KMS keys can be managed through key policies that specify who can use the keys and under what conditions.

- **IAM Policies and Permissions**: Understanding how to properly configure IAM policies, key policies, and resource-based policies is essential for securing access to AWS resources, including AMIs and KMS keys.

- **Sharing AMIs Across Accounts**: You can share AMIs by modifying the launch permissions and ensuring that any KMS keys used for encryption are accessible to the shared account. It's critical to understand the implications of permissions on both AMIs and KMS keys.

Focusing on these areas will help candidates better prepare for the AWS Solutions Architect Associate Exam, particularly in understanding secure architecture and resource sharing in AWS.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company recently signed a contract with an AWS Managed Service Provider (MSP) Partner for help with an application migration initiative. A solutions architect needs ta share an Amazon Machine Image (AMI) from an existing AWS account with the MSP Partner's AWS account. The AMI is backed by Amazon Elastic Block Store (Amazon EBS) and uses an AWS Key Management Service (AWS KMS) customer managed key to encrypt EBS volume snapshots.
What is the MOST secure way for the solutions architect to share the AMI with the MSP Partner's AWS account?
{: .original-query}

### Original Questions

- [ ] A. Make the encrypted AMI and snapshots publicly available. Modify the key policy to allow the MSP Partner's AWS account to use the key.
{: .originaloption}
- [ ] B. Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to allow the MSP Partner's AWS account to use the key.
{: .originaloption}
- [ ] C. Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to trust a new KMS key that is owned by the MSP Partner for encryption.
{: .originaloption}
- [ ] D. Export the AMI from the source account to an Amazon S3 bucket in the MSP Partner's AWS account, Encrypt the S3 bucket with a new KMS key that is owned by the MSP Partner. Copy and launch the AMI in the MSP Partner's AWS account.
{: .originaloption}


### Comments


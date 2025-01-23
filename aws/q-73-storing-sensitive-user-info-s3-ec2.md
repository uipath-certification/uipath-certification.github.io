---
layout: answered-question
title: "AWS A Company Is Storing Sensitive User Information Question"
meta: "AWS Exam Question: A company stores sensitive user info in Amazon S3 and needs secure access from EC2 instances in a VPC. What steps should be taken? Answer: VPC, EC2."
slug: "q-73-storing-sensitive-user-info-s3-ec2"
certification: "AWS Solution Architect Associate Exam"
---


 A company is keeping sensitive user data in an Amazon S3 bucket and aims to ensure secure access to this bucket from its application tier, which operates on Amazon EC2 instances within a VPC. What steps should a solutions architect take to achieve this? (Select two options.)
{: .query}

- [ ] A. Set up a VPC gateway endpoint for Amazon S3 inside the VPC.
{: .option}
- [ ] B. Establish a bucket policy to enable public access to the objects within the S3 bucket.
{: .option}
- [ ] C. Establish a bucket policy that restricts access solely to the application tier operating within the VPC.
{: .option}
- [ ] D. Set up an IAM user with a policy that grants access to S3, and transfer the IAM credentials to the EC2 instance.
{: .option}
- [ ] E. Set up a NAT instance and configure the EC2 instances to utilize the NAT instance for accessing the S3 bucket.
{: .option}

AC
{: .answer}

To provide secure access to an Amazon S3 bucket from Amazon EC2 instances running inside a VPC, the correct combination of steps is **A and C**. Let's break down why these are the correct answers and why the others are not.

### Correct Answers

**A. Set up a VPC gateway endpoint for Amazon S3 inside the VPC.**

- **Explanation**: A VPC Gateway Endpoint allows private connections between your VPC and supported AWS services without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. By setting up a VPC gateway endpoint for S3, EC2 instances can access the S3 bucket securely over the AWS internal network. This also ensures that the data does not traverse the public internet, enhancing security and potentially reducing costs associated with data transfer.

**C. Establish a bucket policy that restricts access solely to the application tier operating within the VPC.**

- **Explanation**: A bucket policy is a resource-based policy that allows you to specify who can access the S3 bucket and what actions they can perform. By establishing a bucket policy that restricts access to only the application tier (the EC2 instances within the VPC), you can ensure that only authorized applications can access sensitive user information stored in the S3 bucket. This adds another layer of security by preventing access from any unauthorized sources.

### Incorrect Answers

**B. Establish a bucket policy to enable public access to the objects within the S3 bucket.**

- **Explanation**: This option is inherently insecure. Enabling public access to an S3 bucket means that anyone on the internet can potentially access the data stored in that bucket. Public access to sensitive user information could result in data breaches and violate compliance requirements. For sensitive information, it's crucial to restrict access and enforce strict security measures.

**D. Set up an IAM user with a policy that grants access to S3, and transfer the IAM credentials to the EC2 instance.**

- **Explanation**: While creating an IAM user with access to S3 is a valid approach, transferring IAM credentials (such as access keys) to the EC2 instance is not a best practice for security. Instead of using IAM users with static credentials, it is recommended to use IAM roles. With IAM roles, you can assign permissions directly to the EC2 instances, allowing them to assume the role and gain the necessary permissions to access S3 without the need for hard-coded credentials. This minimizes the risk of credential leakage.

**E. Set up a NAT instance and configure the EC2 instances to utilize the NAT instance for accessing the S3 bucket.**

- **Explanation**: A NAT instance is typically used to enable instances in a private subnet to initiate outbound traffic to the internet while preventing incoming traffic. However, using a NAT instance to access S3 is unnecessary if a VPC gateway endpoint is configured. Traffic to S3 can be routed directly without needing to go through a NAT instance, thus making this approach less efficient and potentially introducing unnecessary complexity and cost.

### Technical Details for AWS Solutions Architect Associate Exam

1. **VPC Gateway Endpoint**: Understand how to create and configure a VPC endpoint for S3. This includes knowing the steps through the AWS Management Console or AWS CLI, and how it integrates with route tables and security groups.

2. **Bucket Policies**: Be familiar with JSON syntax used in bucket policies, understanding how to specify principals, actions, and resources in the policy statements. Learn how to restrict access by conditions, such as source VPC or VPC endpoint.

3. **IAM Roles**: Know the difference between IAM users and IAM roles, and best practices for managing permissions. IAM roles allow for temporary credentials that can be automatically rotated, enhancing security.

4. **Shared Responsibility Model**: Understand the security responsibility of AWS vs. the customer. While AWS secures the infrastructure, customers must configure their resources securely, including S3 bucket policies and VPC configurations.

5. **Cost Considerations**: Be aware of the cost implications of data transfer, especially when using NAT instances versus VPC endpoints, as VPC endpoints for S3 do not incur data transfer charges.

By focusing on these areas, candidates can better prepare for the AWS Solutions Architect Associate Exam and develop a solid understanding of secure access to AWS resources.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is storing sensitive user information in an Amazon S3 bucket. The company wants to provide secure access to this bucket from the application tier running on Amazon EC2 instances inside a VPC.
Which combination of steps should a solutions architect take to accomplish this? (Choose two.)
{: .original-query}

### Original Questions

- [ ] A. Configure a VPC gateway endpoint for Amazon S3 within the VPC.
{: .originaloption}
- [ ] B. Create a bucket policy to make the objects in the S3 bucket public.
{: .originaloption}
- [ ] C. Create a bucket policy that limits access to only the application tier running in the VPC.
{: .originaloption}
- [ ] D. Create an IAM user with an S3 access policy and copy the IAM credentials to the EC2 instance.
{: .originaloption}
- [ ] E. Create a NAT instance and have the EC2 instances use the NAT instance to access the S3 bucket.
{: .originaloption}


### Comments


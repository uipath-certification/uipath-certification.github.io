---
layout: answered-question
title: "AWS An Application Runs On An Amazon EC2 Instance Question"
meta: "AWS Exam Question: An application on Amazon EC2 in a VPC needs access to an S3 bucket without internet. Which solution ensures secure private connectivity? Answer with VPC endpoints."
slug: "q-42-application-logs-ec2-s3-aws"
certification: "AWS Solution Architect Associate Exam"
---


 An application hosted on an Amazon EC2 instance within a VPC processes logs stored in an Amazon S3 bucket. To ensure that the EC2 instance can access the S3 bucket without relying on internet connectivity, what solution would enable private network connectivity to Amazon S3?
{: .query}

- [x] A. Establish a gateway VPC endpoint for the S3 bucket.
{: .option}
- [ ] B. Send the logs to Amazon CloudWatch Logs and export them to the S3 bucket.
{: .option}
- [ ] C. Set up an instance profile on Amazon EC2 to enable access to S3.
{: .option}
- [ ] D. Set up an Amazon API Gateway API that includes a private link for accessing the S3 endpoint.
{: .option}

A
{: .answer}

The correct answer to the question is **A. Establish a gateway VPC endpoint for the S3 bucket.** Let's break down why this answer is correct and why the other options are not suitable.

### Why A is Correct

**Gateway VPC Endpoint for S3:**

1. **Private Connectivity:** A VPC endpoint allows you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, VPN connection, or AWS Direct Connect connection. This means that the EC2 instance can access the S3 bucket directly through the AWS backbone network.

2. **No Internet Required:** Since the requirement is to access the S3 bucket without internet connectivity, a gateway VPC endpoint is ideal because it enables private communication within the AWS environment.

3. **Security:** By using VPC endpoints, you can control access to S3 using IAM policies, and you can also use VPC endpoint policies to further restrict access to your S3 bucket.

4. **Performance:** Traffic between your VPC and S3 does not leave the AWS backbone network, which can result in lower latency and higher throughput.

### Why the Other Options Are Incorrect

**B. Send the logs to Amazon CloudWatch Logs and export them to the S3 bucket.**

- **Indirect Access:** While this option does allow you to move logs to S3, it does not facilitate direct access to the S3 bucket from the EC2 instance. CloudWatch Logs is a separate service and introduces additional complexity and potential latency in log processing.
- **Internet Requirement:** Depending on your configuration, this might still require internet access or specific permissions, which does not meet the requirement of no internet connectivity.

**C. Set up an instance profile on Amazon EC2 to enable access to S3.**

- **IAM Role:** While an instance profile allows the EC2 instance to assume an IAM role and access S3, it does not provide the required network connectivity to access the S3 bucket directly. The instance still needs a path to S3, which could require internet access if not configured with a VPC endpoint.
- **Not Exclusive:** This solution does not solve the primary requirement of avoiding internet connectivity.

**D. Set up an Amazon API Gateway API that includes a private link for accessing the S3 endpoint.**

- **Overkill and Complexity:** While API Gateway can provide a way to interact with S3, it is unnecessary for simply accessing an S3 bucket from an EC2 instance. Setting up an API Gateway just for this purpose adds unnecessary complexity and cost.
- **Doesn't Directly Meet the Requirement:** This approach does not directly address the need for network connectivity to S3 since it introduces another layer (API Gateway) rather than utilizing the more straightforward approach of a VPC endpoint.

### Technical Details for AWS Solutions Architect Associate Exam

1. **VPC Endpoints:**
   - **Gateway Endpoint:** Specifically for S3 and DynamoDB; it routes traffic from the VPC to the service without using an Internet Gateway.
   - **Interface Endpoint:** Used for services powered by AWS PrivateLink; it creates an elastic network interface in your VPC that serves as an entry point for traffic destined to the service.

2. **IAM Roles and Policies:**
   - Understand how to create and attach IAM roles to EC2 instances, and how to use policies to control access to S3 resources.

3. **S3 Access Control:**
   - Be familiar with S3 bucket policies, IAM policies, and VPC endpoint policies to manage access securely.

4. **Networking Basics:**
   - Know the differences between public and private subnets and how internet gateways, NAT gateways, and VPC endpoints fit into the architecture.

By understanding these concepts, you can design AWS solutions that efficiently and securely connect services while adhering to specific requirements like avoiding internet access.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet.
Which solution will provide private network connectivity to Amazon S3?
{: .original-query}

### Original Questions

- [ ] A. Create a gateway VPC endpoint to the S3 bucket.
{: .originaloption}
- [ ] B. Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.
{: .originaloption}
- [ ] C. Create an instance profile on Amazon EC2 to allow S3 access.
{: .originaloption}
- [ ] D. Create an Amazon API Gateway API with a private link to access the S3 endpoint.
{: .originaloption}


### Comments


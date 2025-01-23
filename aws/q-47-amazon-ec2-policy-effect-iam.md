---
layout: answered-question
title: "AWS An Amazon EC2 Administrator Created The Following Question"
meta: "AWS Exam Question: An Amazon EC2 administrator created a policy for an IAM group. What is the effect of this policy? Find the answer. Technologies: IAM, EC2."
slug: "q-47-amazon-ec2-policy-effect-iam"
certification: "AWS Solution Architect Associate Exam"
---


 What impact does this policy have, considering that it was created by an Amazon EC2 administrator for an IAM group with multiple users?
{: .query}

- [ ] A. Users have the ability to terminate an EC2 instance in all AWS Regions, with the exception of us-east-1.
{: .option}
- [ ] B. Users have the ability to shut down an EC2 instance located in the us-east-1 Region that has the IP address 10.100.100.1.
{: .option}
- [x] C. In the us-east-1 Region, users have the ability to terminate an EC2 instance if their source IP address is 10.100.100.254.
{: .option}
- [ ] D. A user is unable to terminate an EC2 instance in the us-east-1 Region if their source IP address is 10.100.100.254.
{: .option}

C
{: .answer}

To understand the effect of the IAM policy and determine why option C is correct, while the other options are incorrect, we need to analyze the IAM policy's structure and the permissions it grants. 

### Understanding IAM Policies

IAM policies are JSON documents that define permissions for AWS resources. They consist of statements that specify the actions (like `ec2:TerminateInstances`), resources (like specific EC2 instances), and conditions (like IP address restrictions).

### Analyzing Option C

**C. In the us-east-1 Region, users have the ability to terminate an EC2 instance if their source IP address is 10.100.100.254.**

This statement is correct if the policy includes a condition that restricts the `ec2:TerminateInstances` action based on the source IP address. For example, the policy might look like this:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "ec2:TerminateInstances",
            "Resource": "*",
            "Condition": {
                "IpAddress": {
                    "aws:SourceIp": "10.100.100.254"
                }
            }
        }
    ]
}
```

In this case, users can only terminate instances in the `us-east-1` region if they are coming from the specified IP address (10.100.100.254). This aligns perfectly with option C.

### Analyzing the Incorrect Options

**A. Users have the ability to terminate an EC2 instance in all AWS Regions, with the exception of us-east-1.**

This statement is incorrect because if a policy allows termination of EC2 instances in all regions but explicitly denies it in us-east-1, the users would not be able to terminate instances there. However, if the policy only restricts based on IP and does not mention region-wide restrictions, users might still have permission to terminate instances in `us-east-1` under certain conditions.

**B. Users have the ability to shut down an EC2 instance located in the us-east-1 Region that has the IP address 10.100.100.1.**

This option is incorrect because it implies a specific IP address for the instance itself rather than the source IP address from which the request is made. AWS permissions generally control actions based on the requester's IP, not the resource's IP. The wording of the condition focuses on the source IP address of the user, not the instance.

**D. A user is unable to terminate an EC2 instance in the us-east-1 Region if their source IP address is 10.100.100.254.**

This option is incorrect because it states a denial of permission tied specifically to that IP address. If the policy permits termination only for that IP address, then users with that source IP would be able to terminate instances in the `us-east-1` region—not unable to.

### Technical Details for AWS Solution Architect Associate Exam

1. **IAM Policies**: Know how to read and write IAM policies including understanding `Effect`, `Action`, `Resource`, and `Condition`.

2. **Principle of Least Privilege**: Always apply the principle of least privilege when setting up IAM policies, allowing only necessary actions needed for users.

3. **Conditions in Policies**: Be familiar with using conditions in policies, such as `IpAddress`, `StringEquals`, and others. Understanding how these conditions work can help you determine access based on various attributes.

4. **AWS Regions**: Understand that AWS resources are region-specific and that actions can be controlled based on the region in IAM policies.

5. **Testing IAM Policies**: Use the IAM Policy Simulator provided by AWS to test and validate IAM policies, ensuring they behave as expected.

6. **Best Practices**: Familiarize yourself with AWS best practices for IAM, including using groups, roles, and multi-factor authentication (MFA) for added security.

By mastering these concepts, candidates can better prepare for questions related to IAM and permissions management on the AWS Solutions Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

An Amazon EC2 administrator created the following policy associated with an IAM group containing several users:

What is the effect of this policy?
{: .original-query}

### Original Questions

- [ ] A. Users can terminate an EC2 instance in any AWS Region except us-east-1.
{: .originaloption}
- [ ] B. Users can terminate an EC2 instance with the IP address 10.100.100.1 in the us-east-1 Region.
{: .originaloption}
- [ ] C. Users can terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254.
{: .originaloption}
- [ ] D. Users cannot terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254.
{: .originaloption}


### Comments


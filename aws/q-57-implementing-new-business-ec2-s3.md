---
layout: answered-question
title: "AWS A Company Is Implementing A New Business Question"
meta: "AWS Exam Question: A solutions architect needs to ensure that two Amazon EC2 instances can access an Amazon S3 bucket for document storage. Answer: IAM roles."
slug: "q-57-implementing-new-business-ec2-s3"
certification: "AWS Solution Architect Associate Exam"
---


 A company is in the process of deploying a new business application that operates on two Amazon EC2 instances and utilizes an Amazon S3 bucket for storing documents. To ensure that the EC2 instances have access to the S3 bucket, what steps should the solutions architect take to fulfill this requirement?
{: .query}

- [x] A. Establish an IAM role that provides access to the S3 bucket and link this role to the EC2 instances.
{: .option}
- [ ] B. Develop an IAM policy that provides access to the S3 bucket and associate it with the EC2 instances.
{: .option}
- [ ] C. Establish an IAM group that provides access to the S3 bucket. Link this group to the EC2 instances.
{: .option}
- [ ] D. Set up an IAM user that allows access to the S3 bucket, and link this user account to the EC2 instances.
{: .option}

A
{: .answer}

The correct answer is **A. Establish an IAM role that provides access to the S3 bucket and link this role to the EC2 instances.**

### Explanation of the Correct Answer (A)

1. **IAM Role for EC2 Instances**: An IAM role is a set of permissions that can be assumed by AWS services. In this case, you would create an IAM role that grants the necessary permissions to access the S3 bucket, such as `s3:GetObject`, `s3:PutObject`, and other relevant actions.

2. **Linking the Role to EC2 Instances**: When launching or updating EC2 instances, you can associate the IAM role with those instances. This allows the EC2 instances to automatically obtain temporary security credentials that provide the permissions granted by the IAM role. This is the recommended best practice for allowing AWS resources to communicate securely without hardcoding credentials.

3. **Security Best Practices**: Using IAM roles eliminates the need for long-term credentials (like Access Keys) stored on the EC2 instances, reducing the risk of accidental exposure.

### Why the Other Options are Incorrect

**B. Develop an IAM policy that provides access to the S3 bucket and associate it with the EC2 instances.**
- **Incorrect Usage**: IAM policies alone cannot be directly associated with EC2 instances. IAM policies are attached to IAM users, groups, or roles, not to EC2 instances themselves. You could attach the policy to a role and then associate that role with the EC2 instances, but the option does not specify the use of a role, making it incomplete.

**C. Establish an IAM group that provides access to the S3 bucket. Link this group to the EC2 instances.**
- **Groups are for Users**: An IAM group is used to manage permissions for multiple IAM users. You cannot directly associate an IAM group with EC2 instances. Like option B, you would need to create a role and attach the policy to that role, which would be linked to the EC2 instances instead. Therefore, this option does not provide a valid solution.

**D. Set up an IAM user that allows access to the S3 bucket, and link this user account to the EC2 instances.**
- **Not Recommended**: Using IAM users for EC2 instances is against AWS best practices. IAM users have long-term credentials (Access Key ID and Secret Access Key), which could be exposed if not handled properly. Additionally, IAM users cannot be directly linked to EC2 instances. Instead, roles should be used to avoid embedding credentials in the instances.

### Technical Details for AWS Solutions Architect Associate Exam Preparation

- **IAM Roles**: Understand the difference between roles, users, and groups. Roles are used for service-to-service communication and should be preferred for EC2 instances.
  
- **Temporary Credentials**: When an EC2 instance assumes a role, it gets temporary security credentials that are automatically rotated and managed by AWS.

- **IAM Policies**: Familiarize yourself with creating IAM policies in JSON format that specify actions, resources, and conditions.

- **AWS SDKs & CLI**: Know how to use AWS SDKs and CLI to access S3 using IAM roles from EC2 instances. For example, when an instance has an IAM role, AWS SDKs can automatically use the temporary credentials provided by the role.

- **AWS Security Best Practices**: Always follow the principle of least privilege, ensuring that IAM roles and policies grant the minimum permissions necessary for tasks.

By understanding these concepts, candidates can better prepare for scenarios involving IAM in the AWS Certified Solutions Architect - Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is implementing a new business application. The application runs on two Amazon EC2 instances and uses an Amazon S3 bucket for document storage. A solutions architect needs to ensure that the EC2 instances can access the S3 bucket.
What should the solutions architect do to meet this requirement?
{: .original-query}

### Original Questions

- [ ] A. Create an IAM role that grants access to the S3 bucket. Attach the role to the EC2 instances.
{: .originaloption}
- [ ] B. Create an IAM policy that grants access to the S3 bucket. Attach the policy to the EC2 instances.
{: .originaloption}
- [ ] C. Create an IAM group that grants access to the S3 bucket. Attach the group to the EC2 instances.
{: .originaloption}
- [ ] D. Create an IAM user that grants access to the S3 bucket. Attach the user account to the EC2 instances.
{: .originaloption}


### Comments

--- 
It is essential to associate IAM roles with EC2 instances to grant them the necessary permissions for accessing AWS resources such as S3 buckets. IAM roles provide a secure way to assign permissions without the need for managing long-term credentials. When you attach an IAM role to an EC2 instance, the instance can assume that role and obtain temporary security credentials, allowing it to interact with other AWS services seamlessly. This approach not only simplifies access management but also enhances security by ensuring that permissions are granted based on the principle of least privilege.
{: .comment}
--- 
To get those EC2 instances cozy with the S3 bucket, the winning ticket is to whip up an IAM role that grants them access to the bucket and then attach that role to the instances. 🎉 

Think of an IAM role as a VIP pass for your AWS resources—it's a way to delegate permissions without handing out the keys to the kingdom. By creating this role and linking it to your EC2 instances, you’re ensuring they can access all the fabulous documents chilling in the S3 bucket. 📁

Now, let’s take a quick detour through the other options: 

- Option B? Not quite! An IAM policy is like a set of rules for users or groups, but it doesn't work magic for EC2 instances directly. 
- Option C? Close, but no cigar! An IAM group is meant for organizing IAM users and policies, not for granting resource access. 
- And Option D? That one’s a head-scratcher! An IAM user is for individuals or services that want to interact with AWS, not for granting access to resources. 

So, in the quest for S3 access, stick with the IAM role—it’s the true MVP! 🏆
{: .comment}
--- 
The only viable option here is to use an IAM role, since policies are specifically assigned to IAM groups or users. Plus, let’s not forget that IAM groups can’t be directly linked to resources. And while we’re at it, attaching IAM user credentials to an IAM role is a risky endeavor that’s best avoided. So, stick to the IAM role for a smooth and secure connection to the S3 bucket.
{: .comment}
--- 
The best approach is to create an IAM role specifically designed for EC2 instances. This role will grant the necessary permissions to access the S3 bucket, allowing the instances to securely interact with the storage without the hassle of managing long-term credentials.

While IAM policies are essential for defining permissions, they must be attached to roles or users. It's important to note that policies cannot be directly assigned to EC2 instances. Similarly, IAM groups are intended for managing permissions for multiple users, not for instances.

IAM users are designed for individual users or applications rather than EC2 instances, which makes using a role the most suitable option. By implementing an IAM role, you adhere to AWS best practices for both security and manageability.

If you have any further questions or need additional clarification, please don't hesitate to reach out!
{: .comment}
--- 
When it comes to ensuring that your EC2 instances can happily access the S3 bucket, the delightful choice is to create an IAM role! 🌟 By establishing this role with the appropriate permissions for S3, you can seamlessly link it to your EC2 instances. This nifty setup allows your application to interact with the S3 bucket efficiently and securely, making for a smooth sailing experience!
{: .comment}

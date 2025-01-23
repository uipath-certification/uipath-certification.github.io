---
layout: answered-question
title: "AWS A Company Recently Launched A Variety Of New Workloads Question"
meta: "AWS Exam Question: A company launched workloads on EC2 and needs a secure, repeatable strategy for remote access using AWS services. Answer: AWS Well-Architected Framework."
slug: "q-47-variety-new-workloads-amazon-ec2"
certification: "AWS Solution Architect Associate Exam"
---


 A company has recently deployed several new workloads on Amazon EC2 instances within its AWS account and is seeking to establish a secure and efficient strategy for remote access and management of these instances. To ensure compliance with the AWS Well-Architected Framework, the company aims to implement a process that is both repeatable and utilizes native AWS services. What solution would best fulfill these needs while minimizing operational overhead?
{: .query}

- [ ] A. Utilize the EC2 serial console to gain direct access to the terminal interface of each instance for management purposes.
{: .option}
- [x] B. Assign the correct IAM role to both existing and new instances. Utilize AWS Systems Manager Session Manager to initiate a remote SSH session.
{: .option}
- [ ] C. Generate a pair of administrative SSH keys. Upload the public key to every EC2 instance. Set up a bastion host in a public subnet to facilitate a tunnel for managing each instance.
{: .option}
- [ ] D. Set up an AWS Site-to-Site VPN connection. Guide administrators to utilize their local on-premises systems to directly access the instances via SSH keys through the VPN tunnel.
{: .option}

B
{: .answer}

The correct answer to the question is **B. Assign the correct IAM role to both existing and new instances. Utilize AWS Systems Manager Session Manager to initiate a remote SSH session.**

### Explanation of the Correct Answer (B)

**AWS Systems Manager Session Manager** allows secure and auditable access to Amazon EC2 instances without the need to open inbound ports, manage SSH keys, or use bastion hosts. Here's why this option is ideal:

1. **Security**: Session Manager uses IAM roles and policies to control access. By assigning an appropriate IAM role to your EC2 instances, you can manage who can access the instances without exposing them to the internet.
   
2. **No Inbound Ports**: With Session Manager, you do not need to manage SSH access via public IPs or open any ports in the security groups. This reduces the attack surface of your instances.

3. **Auditability**: All actions taken during a Session Manager session can be logged in AWS CloudTrail, providing a clear audit trail for security and compliance purposes.

4. **Operational Overhead**: It significantly reduces operational overhead because you don't need to manage SSH keys or a bastion host, streamlining the process of accessing instances.

5. **Integration with Other AWS Services**: Session Manager integrates with AWS Identity and Access Management (IAM), AWS CloudTrail, and AWS CloudWatch, allowing for comprehensive monitoring and management.

### Reasons Why Other Options Are Incorrect

**A. Utilize the EC2 serial console to gain direct access to the terminal interface of each instance for management purposes.**
- **Limitation**: The EC2 serial console is more suited for troubleshooting and recovery scenarios rather than regular management tasks. It is not meant for routine administrative access and requires specific configurations, which adds operational overhead.

**C. Generate a pair of administrative SSH keys. Upload the public key to every EC2 instance. Set up a bastion host in a public subnet to facilitate a tunnel for managing each instance.**
- **Operational Overhead**: This method involves managing SSH keys, which can lead to complexities such as key rotation and revocation. Additionally, maintaining a bastion host requires ongoing management and increases potential security vulnerabilities due to the need to expose an instance to the internet.

**D. Set up an AWS Site-to-Site VPN connection. Guide administrators to utilize their local on-premises systems to directly access the instances via SSH keys through the VPN tunnel.**
- **Complexity**: While a VPN connection provides secure access, it introduces more complexity and overhead in terms of management, such as configuring the VPN, maintaining the connection, and ensuring that all users have the appropriate setup. It also requires management of SSH keys and access control within the VPN.

### Technical Details for AWS Solution Architect Associate Exam Preparation

When preparing for the AWS Solution Architect Associate Exam, consider the following technical aspects related to the topic:

1. **IAM Roles and Policies**: Understand how to create and assign IAM roles to EC2 instances, and how to use policies to control access to AWS resources.

2. **AWS Systems Manager**:
   - Familiarize yourself with features such as Session Manager, Run Command, and Patch Manager.
   - Know how to set up SSM Agent on EC2 instances and configure instance profiles.

3. **Security Best Practices**:
   - Learn about security group configurations and the principle of least privilege.
   - Understand the importance of logging and monitoring using AWS CloudTrail and CloudWatch.

4. **Networking Concepts**:
   - Be aware of the differences between public and private subnets, NAT gateways, and VPC configurations.

5. **Bastion Hosts vs. VPNs**: Understand the trade-offs between using bastion hosts and VPN for accessing private resources and the implications of each on security and operational overhead.

By focusing on these areas, candidates can gain a strong understanding of AWS best practices related to secure access and management of AWS resources, which is crucial for passing the AWS Solution Architect Associate Exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company recently launched a variety of new workloads on Amazon EC2 instances in its AWS account. The company needs to create a strategy to access and administer the instances remotely and securely. The company needs to implement a repeatable process that works with native AWS services and follows the AWS Well-Architected Framework.
Which solution will meet these requirements with the LEAST operational overhead?
{: .original-query}

### Original Questions

- [ ] A. Use the EC2 serial console to directly access the terminal interface of each instance for administration.
{: .originaloption}
- [ ] B. Attach the appropriate IAM role to each existing instance and new instance. Use AWS Systems Manager Session Manager to establish a remote SSH session.
{: .originaloption}
- [ ] C. Create an administrative SSH key pair. Load the public key into each EC2 instance. Deploy a bastion host in a public subnet to provide a tunnel for administration of each instance.
{: .originaloption}
- [ ] D. Establish an AWS Site-to-Site VPN connection. Instruct administrators to use their local on-premises machines to connect directly to the instances by using SSH keys across the VPN tunnel.
{: .originaloption}


### Comments

--- 
Utilizing Session Manager can greatly enhance your organization's security posture and operational efficiency. It eliminates the need for open inbound ports, which reduces the attack surface for your EC2 instances and enhances overall security. Additionally, it negates the complexities associated with managing bastion hosts and SSH keys, streamlining access management. With Session Manager, administrators can securely connect to instances without the requirement for additional network infrastructure or the risk of key exposure, thereby simplifying the administration process while maintaining robust security controls. For further details, refer to the official documentation on Session Manager. 

[Source: AWS Systems Manager Session Manager Documentation](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html)
{: .comment}
--- 
Ah, the age-old dilemma of accessing EC2 instances! But wait—before we dive into the solutions, let’s clarify something important: are we dealing with Windows or Linux EC2 instances here? 🤔 If it’s Windows, SSH sessions might not be the best approach since they’re more of a Linux thing. So, how do we plan to manage a Windows instance remotely? 

Now, I must say, the best answer here is B! 🎉 It’s neat, it’s tidy, and it keeps operational overhead to a minimum, all while leveraging AWS Systems Manager Session Manager. Voilà! Now you can manage your instances without breaking a sweat. 🌟
{: .comment}
--- 
Session Manager is your one-stop shop for managing EC2 instances, catering to Windows, Linux, and macOS, all from a single interface. It's like having a universal remote for your cloud infrastructure—no need to juggle different tools or worry about compatibility issues. Just fire it up, and voilà! You've got seamless access to all your instances, making remote management feel a whole lot easier and a lot less chaotic.
{: .comment}
--- 
AWS Systems Manager Session Manager is a fantastic tool that supports remote management across various operating systems, including Linux, Windows, and macOS. This versatility enables seamless access and administration of instances, providing a secure and efficient solution for managing workloads in the cloud. With Session Manager, you can take advantage of its features without the need for complex configurations or additional infrastructure, making it an excellent choice for streamlined operations.
{: .comment}
--- 
🌟 Hooray for versatility! Our solution is designed to seamlessly support a delightful array of operating systems, including Windows, Linux, and macOS. This cross-platform compatibility ensures that no matter your preference, you can manage your resources with ease and confidence! 🎉 For more whimsical details, feel free to explore further in the AWS Systems Manager documentation!
{: .comment}

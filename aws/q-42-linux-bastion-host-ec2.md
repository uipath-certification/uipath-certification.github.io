---
layout: answered-question
title: "AWS A Company Recently Launched Linux-based Application Question"
meta: "AWS Exam Question: A company launched Linux-based app instances on Amazon EC2 in a private subnet and a bastion host in a public subnet. Answer: VPC, security groups."
slug: "q-42-linux-bastion-host-ec2"
certification: "AWS Solution Architect Associate Exam"
---


 A company has recently deployed Linux-based application instances in a private subnet on Amazon EC2 and established a Linux-based bastion host in a public subnet of a VPC. A solutions architect is tasked with connecting from the on-premises network, through the company's internet connection, to the bastion host and subsequently to the application servers. It is essential for the solutions architect to ensure that the security groups associated with all EC2 instances permit this access. 

What steps should the solutions architect follow to fulfill these requirements? (Select two.)
{: .query}

- [ ] A. Change the existing security group of the bastion host to one that permits inbound access solely from the application instances.
{: .option}
- [ ] B. Substitute the existing security group of the bastion host with one that permits inbound access solely from the company's internal IP range.
{: .option}
- [ ] C. Update the bastion host's security group to permit inbound access exclusively from the company's external IP range.
{: .option}
- [ ] D. Substitute the existing security group for the application instances with a new one that permits inbound SSH access exclusively from the private IP address of the bastion host.
{: .option}
- [ ] E. Substitute the existing security group for the application instances with a new one that permits inbound SSH access solely from the public IP address of the bastion host.
{: .option}

CD
{: .answer}

To solve the problem of securely allowing access from an on-premises network to a bastion host and then to Linux-based application instances on Amazon EC2, the solutions architect must configure the security groups correctly to enforce the desired access controls. The correct answers are **C** and **D**. Here’s a detailed explanation of why these options are correct and why the others are not.

### Correct Answers:

**C. Update the bastion host's security group to permit inbound access exclusively from the company's external IP range.**

The bastion host is in a public subnet and acts as a bridge between the on-premises network and the private subnet where the application instances reside. To allow users from the on-premises network to connect to the bastion host, its security group must be configured to allow inbound SSH traffic from the company's external IP range. This configuration ensures that only the specified external IPs can access the bastion host, thereby enhancing security.

**D. Substitute the existing security group for the application instances with a new one that permits inbound SSH access exclusively from the private IP address of the bastion host.**

The application instances are located in a private subnet and should only accept SSH connections from the bastion host for security reasons. By configuring the security group of the application instances to allow inbound SSH traffic only from the private IP address of the bastion host, we ensure that these instances are not directly accessible from the internet or any other external sources. This creates a secure environment where the application servers can only be accessed through the bastion host.

### Incorrect Answers:

**A. Change the existing security group of the bastion host to one that permits inbound access solely from the application instances.**

This option is incorrect because it would create a situation where the bastion host cannot be accessed from the on-premises network. The bastion host needs to receive SSH connections from the company's external IP range, not from the application instances. The application instances are in a private subnet and cannot initiate connections to the bastion host without first being accessed.

**B. Substitute the existing security group of the bastion host with one that permits inbound access solely from the company's internal IP range.**

This option is also incorrect because the bastion host needs to allow access from the company's external IP range, not just the internal IP range. If only internal IPs are allowed, users on the on-premises network will not be able to connect to the bastion host over the internet.

**E. Substitute the existing security group for the application instances with a new one that permits inbound SSH access solely from the public IP address of the bastion host.**

This option is incorrect because it would expose the application instances to the public internet. The security group should not allow inbound SSH access from the public IP address of the bastion host, as this would create a security vulnerability by allowing anyone on the internet to attempt to connect to the application instances. Instead, the security group should restrict access to the private IP address of the bastion host.

### Technical Details for AWS Solutions Architect Associate Exam:

1. **Security Groups**: Understand that security groups in AWS function as virtual firewalls for your EC2 instances. They control inbound and outbound traffic at the instance level, and you should always follow the principle of least privilege, allowing only the necessary traffic.

2. **Bastion Hosts**: A bastion host is an instance that is used to access instances in a private subnet. It's crucial to configure its security groups properly to restrict access to only trusted sources.

3. **Private vs. Public Subnets**: Know the distinction between public and private subnets. Public subnets have a direct route to the internet through an Internet Gateway, while private subnets do not.

4. **IP Addressing**: Familiarize yourself with IP addressing concepts, particularly the difference between internal (private) IP addresses and external (public) IP addresses.

5. **Network Access Control Lists (NACLs)**: While security groups are stateful, NACLs are stateless and can also be used to control access to subnets. Understand how to configure both for enhanced security.

By mastering these concepts, you will be well-prepared for questions related to security groups, networking, and architecture design in the AWS Solutions Architect Associate Exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company recently launched Linux-based application instances on Amazon EC2 in a private subnet and launched a Linux-based bastion host on an Amazon EC2 instance in a public subnet of a VPC. A solutions architect needs to connect from the on-premises network, through the company's internet connection, to the bastion host, and to the application servers. The solutions architect must make sure that the security groups of all the EC2 instances will allow that access.
Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)
{: .original-query}

### Original Questions

- [ ] A. Replace the current security group of the bastion host with one that only allows inbound access from the application instances.
{: .originaloption}
- [ ] B. Replace the current security group of the bastion host with one that only allows inbound access from the internal IP range for the company.
{: .originaloption}
- [ ] C. Replace the current security group of the bastion host with one that only allows inbound access from the external IP range for the company.
{: .originaloption}
- [ ] D. Replace the current security group of the application instances with one that allows inbound SSH access from only the private IP address of the bastion host.
{: .originaloption}
- [ ] E. Replace the current security group of the application instances with one that allows inbound SSH access from only the public IP address of the bastion host.
{: .originaloption}


### Comments

--- 
The correct approach involves option C, as the connection from the on-premises network to the bastion host is established through the internet. This necessitates allowing access using the public IP address associated with the on-premises resources. 

Additionally, option D is appropriate because both the bastion host and the application servers reside within the same VPC. This configuration enables the bastion host to communicate with the application servers using their private IP addresses. 

In summary, ensuring that the security groups are properly configured to allow inbound access from the on-premises network to the bastion host via its public IP, and subsequently allowing the bastion host to access the application servers via their private IP addresses, is crucial for maintaining secure and effective connectivity within the architecture.
{: .comment}
--- 
To connect from the on-premises network to the bastion host and then to the application servers, we need to ensure our security groups are properly configured. 🌐💻 

First, when accessing the bastion host, we’ll rely on our company’s external IP range—after all, we’re using the internet, not some secret underground tunnel! 🕵️‍♂️ So, we need to tweak the bastion host's security group to allow inbound connections exclusively from this external range. 

Now, once we’re inside the bastion host, we can waltz right into the private subnet where our application servers are hanging out. Here, we’ll use the bastion host’s private IP to allow SSH access to the application instances—it's like having an all-access pass to the coolest party in town! 🎉 

In summary, it’s all about securing the right doors while keeping the VIP access controlled. So let’s ensure we've got the right security groups in place for a smooth and secure connection! 🔐✨
{: .comment}
--- 
Ah, the classic conundrum of securing access to your precious EC2 instances! To ensure that your bastion host remains the gateway to your application servers while keeping everything secure, you'll want to take a couple of strategic steps. 

First, you should modify the bastion host's security group to allow inbound traffic exclusively from the company’s external IP range. This way, you're granting access only to those who should have it and keeping the digital riffraff at bay. No need to invite the whole world to your private party.

Next, for the application instances, you’ll want to tweak their security group to permit inbound SSH access solely from the bastion host’s private IP address. This ensures that the application servers can only be accessed through the bastion, adding an extra layer of security and keeping everything nice and cozy behind your virtual walls.

So, in a nutshell, tighten the bastion’s security group to just your company’s external IPs and adjust the application servers to only listen to the bastion’s private IP. Voilà! You've just become the digital gatekeeper of your cloud environment.
{: .comment}
--- 
To ensure secure and efficient access from the on-premises network to the bastion host and subsequently to the application servers, the solutions architect can take the following effective steps:

1. Update the security group of the bastion host to allow inbound connections exclusively from the company's internal IP range. This restriction enhances security by limiting access to trusted internal sources.

2. Modify the security group for the application instances to permit inbound SSH access solely from the private IP address of the bastion host. This setup ensures that only connections originating from the bastion host can access the application servers, further reinforcing security while maintaining connectivity.

By implementing these changes, the solutions architect can create a secure and robust network architecture that effectively supports the company's operational needs!
{: .comment}
--- 
It's quite delightful to dive into the intricacies of network security! 🌈 The key here is to maintain a clear focus on the underlying logic of the solution rather than getting lost in the specifics of the services.

In this scenario, the primary objective is to ensure that the application instances are accessible solely through the bastion host while they reside snugly in the private subnet. This inherently indicates that the SSH connection needs to be permitted from the bastion's private IP address, pointing us to option D!

Now, let’s not forget about our friendly bastion host! It should only accept connections from the company's on-premises network, which rules out option A right away. Option B doesn’t fit the bill either, as internal IP addresses are meant for internal communications. Since we're connecting over the internet, we must consider the external IP, leading us to option C as the correct choice. 

By keeping this logical framework in mind, we can ensure a secure and efficient setup! 🎉
{: .comment}

---
layout: answered-question
title: "AWS Solutions Architect Is Designing A Question"
meta: "AWS Exam Question: A solutions architect designs a two-tier web app on Amazon EC2 with a public web tier and a private SQL Server database. Discover the answer, including security groups."
slug: "q-73-designing-two-tier-web-app-EC2"
certification: "AWS Solution Architect Associate Exam"
---


 A solutions architect is tasked with designing a two-tier web application. This application features a public-facing web tier hosted on Amazon EC2 located in public subnets, while the database tier operates on Microsoft SQL Server running on Amazon EC2 within a private subnet. Given that security is a top priority for the organization, what would be the best way to configure security groups in this scenario? (Select two options.)
{: .query}

- [ ] A. Set up the security group for the web tier to permit incoming traffic on port 443 from 0.0.0.0/0.
{: .option}
- [ ] B. Set up the security group for the web tier to permit outbound traffic on port 443 from the IP address range 0.0.0.0/0.
{: .option}
- [ ] C. Set up the security group for the database layer to permit inbound traffic on port 1433 from the security group associated with the web layer.
{: .option}
- [ ] D. Set up the security group for the database tier to permit outbound traffic on ports 443 and 1433 directed towards the security group for the web tier.
{: .option}
- [ ] E. Set up the security group for the database tier to permit incoming traffic on ports 443 and 1433 from the web tier's security group.
{: .option}

AC
{: .answer}

In the scenario described, the application consists of two tiers: a public-facing web tier and a private database tier. Security is a critical concern for the company, so configuring the security groups properly is essential. The correct answers are A and C.

### Correct Answers:

**A. Set up the security group for the web tier to permit incoming traffic on port 443 from 0.0.0.0/0.**
- **Explanation**: This rule allows HTTPS traffic (port 443) from any IP address (0.0.0.0/0) to the web tier. Since the web tier is public-facing, it needs to accept incoming requests over HTTPS for secure communication. Allowing traffic from 0.0.0.0/0 is common for web servers since they need to be accessible to users on the Internet. 

**C. Set up the security group for the database layer to permit inbound traffic on port 1433 from the security group associated with the web layer.**
- **Explanation**: This rule allows the database tier to receive traffic on port 1433 (the default port for Microsoft SQL Server) only from instances associated with the web tier's security group. This is a best practice for security, as it restricts access to the database tier to only those instances that are part of the web tier, preventing unauthorized access from external sources.

### Incorrect Answers:

**B. Set up the security group for the web tier to permit outbound traffic on port 443 from the IP address range 0.0.0.0/0.**
- **Explanation**: Outbound traffic rules define what the instances in the security group can send out. Port 443 is typically used for HTTPS, and it would be unusual to restrict outbound traffic from the web tier to only 0.0.0.0/0. In practice, the web tier may need to communicate with various services over multiple ports, not just 443. By default, all outbound traffic is allowed, so this rule is unnecessary and could lead to misunderstandings about security group configurations.

**D. Set up the security group for the database tier to permit outbound traffic on ports 443 and 1433 directed towards the security group for the web tier.**
- **Explanation**: Outbound rules for the database tier are not needed in this scenario. Typically, the database tier does not need to initiate connections to the web tier. Instead, it should only accept inbound requests from the web tier. Therefore, this rule does not adhere to the principle of least privilege and adds unnecessary complexity.

**E. Set up the security group for the database tier to permit incoming traffic on ports 443 and 1433 from the web tier's security group.**
- **Explanation**: This rule is incorrect because the database tier should only allow incoming traffic on port 1433 for SQL Server requests. Port 443 is for HTTPS traffic, which the database does not need to listen for. Allowing incoming traffic on port 443 to the database tier would introduce unnecessary attack vectors and is not aligned with the intended architecture.

### Technical Details for AWS Solution Architect Associate Exam:

1. **Security Groups**: These are virtual firewalls that control inbound and outbound traffic to and from EC2 instances. They are stateful, meaning if you allow incoming traffic, the response is automatically allowed, regardless of outbound rules.

2. **Port Numbers**: Different applications use different ports. For example, HTTP uses port 80, HTTPS uses port 443, and SQL Server uses port 1433. Understanding which ports to allow for which services is crucial.

3. **Principle of Least Privilege**: This security principle states that each part of your system should only have the minimum access necessary to perform its function. Applying this principle through security groups helps to minimize potential attack surfaces.

4. **CIDR Notation**: Understanding CIDR (Classless Inter-Domain Routing) notation (like 0.0.0.0/0) is important for defining IP address ranges. 0.0.0.0/0 means all IP addresses.

5. **Private vs Public Subnets**: Instances in a public subnet can communicate directly with the internet, while instances in a private subnet cannot. This affects how you configure security groups and network access.

By understanding these key concepts and the specifics of security group configuration, candidates will be better prepared for the AWS Solution Architect Associate Exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A solutions architect is designing a two-tier web application. The application consists of a public-facing web tier hosted on Amazon EC2 in public subnets. The database tier consists of Microsoft SQL Server running on Amazon EC2 in a private subnet. Security is a high priority for the company.
How should security groups be configured in this situation? (Choose two.)
{: .original-query}

### Original Questions

- [ ] A. Configure the security group for the web tier to allow inbound traffic on port 443 from 0.0.0.0/0.
{: .originaloption}
- [ ] B. Configure the security group for the web tier to allow outbound traffic on port 443 from 0.0.0.0/0.
{: .originaloption}
- [ ] C. Configure the security group for the database tier to allow inbound traffic on port 1433 from the security group for the web tier.
{: .originaloption}
- [ ] D. Configure the security group for the database tier to allow outbound traffic on ports 443 and 1433 to the security group for the web tier.
{: .originaloption}
- [ ] E. Configure the security group for the database tier to allow inbound traffic on ports 443 and 1433 from the security group for the web tier.
{: .originaloption}


### Comments


---
layout: answered-question
title: "AWS A Company Has A Website Hosted On AWS Question"
meta: "AWS Exam Question: A company wants to forward all requests to its website hosted on AWS behind an ALB to use HTTPS. What’s the solution? Answer: ALB, HTTPS."
slug: "q-37-website-hosted-application-load-alb"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates a website on AWS, utilizing an Application Load Balancer (ALB) that manages HTTP and HTTPS traffic separately. The company aims to ensure that all incoming requests to the website are forwarded using HTTPS. What steps should a solutions architect take to achieve this goal?
{: .query}

- [ ] A. Modify the network ACL of the ALB to permit only HTTPS traffic.
{: .option}
- [ ] B. Establish a rule that substitutes HTTP in the URL with HTTPS.
{: .option}
- [x] C. Set up a listener rule on the ALB to redirect traffic from HTTP to HTTPS.
{: .option}
- [ ] D. Substitute the Application Load Balancer with a Network Load Balancer set up to utilize Server Name Indication (SNI).
{: .option}

C
{: .answer}

To address the scenario where a company wants to ensure that all requests to its website are routed over HTTPS, the correct solution is **C: Set up a listener rule on the ALB to redirect traffic from HTTP to HTTPS**. Here's a detailed explanation as to why this is the right choice and why the other options are not suitable.

### Why Option C is Correct:

**C. Set up a listener rule on the ALB to redirect traffic from HTTP to HTTPS.**

1. **Redirect Mechanism**: Application Load Balancers (ALBs) support listener rules that can be configured to redirect HTTP requests to HTTPS. By setting up a listener on port 80 (HTTP) that issues a 301 or 302 redirect to the same URL on port 443 (HTTPS), you ensure that all traffic is securely routed over HTTPS.
  
2. **User Transparency**: This approach allows seamless user experience as it automatically redirects users navigating to the HTTP version of the website to the HTTPS version without requiring any manual intervention.

3. **Security Best Practices**: For compliance and security best practices, forcing HTTPS is essential to protect data in transit. This method effectively enforces secure connections.

### Why the Other Options are Incorrect:

1. **A. Modify the network ACL of the ALB to permit only HTTPS traffic.**
   - **Limitation**: Network ACLs control traffic at the subnet level and do not have the capability to perform redirections. Even if you were to restrict access to only HTTPS traffic, users who try to access the HTTP version would still receive an error instead of being redirected to the HTTPS version. This does not provide a good user experience.

2. **B. Establish a rule that substitutes HTTP in the URL with HTTPS.**
   - **Misleading**: This option suggests modifying the URL itself, which is not a capability provided by ALBs. URL substitution is not a feature of ALBs. Instead, ALBs allow for redirection based on rules, not URL rewriting.

3. **D. Substitute the Application Load Balancer with a Network Load Balancer set up to utilize Server Name Indication (SNI).**
   - **Irrelevance**: While Network Load Balancers (NLBs) can handle TCP traffic and can be configured to use SNI for SSL termination, they do not provide the same level of HTTP-specific features that ALBs do, such as redirecting HTTP to HTTPS. Moreover, switching to NLB would not address the need for HTTP to HTTPS redirection.

### Technical Details for AWS Solution Architect Associate Exam:

1. **ALB Listener Rules**: Understand how to configure listeners on ALBs. Listeners check for connection requests from clients using the protocol and port specified. You can define rules to forward traffic based on host headers, path patterns, and perform redirects.

2. **Redirect Types**: Be familiar with the types of redirects supported (301 - Permanent, 302 - Temporary) and the implications of each (e.g., SEO considerations).

3. **Security**: Know about TLS/SSL termination at ALBs and the importance of using HTTPS to secure data in transit.

4. **Network ACLs vs. Security Groups**: Understand the difference between network ACLs and security groups in AWS. Security groups act as a virtual firewall for your EC2 instances, allowing you to control inbound and outbound traffic, while network ACLs operate at the subnet level.

5. **Compliance and Security Best Practices**: Be aware of general best practices for web application security, including the use of HTTPS, OWASP Top Ten vulnerabilities, and how to mitigate them.

By understanding these concepts, candidates can better prepare for the AWS Solutions Architect Associate exam and effectively design solutions that meet both functional and security requirements.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company has a website hosted on AWS. The website is behind an Application Load Balancer (ALB) that is configured to handle HTTP and HTTPS separately. The company wants to forward all requests to the website so that the requests will use HTTPS.
What should a solutions architect do to meet this requirement?
{: .original-query}

### Original Questions

- [ ] A. Update the ALB's network ACL to accept only HTTPS traffic.
{: .originaloption}
- [ ] B. Create a rule that replaces the HTTP in the URL with HTTPS.
{: .originaloption}
- [ ] C. Create a listener rule on the ALB to redirect HTTP traffic to HTTPS.
{: .originaloption}
- [ ] D. Replace the ALB with a Network Load Balancer configured to use Server Name Indication (SNI).
{: .originaloption}


### Comments


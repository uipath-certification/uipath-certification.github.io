---
layout: answered-question
title: "AWS A Company Is Preparing To Launch A Question"
meta: "AWS Exam Question: A company is launching a web app in AWS using EC2, VPC, and ELB. What solution protects against DDoS attacks? Find the answer with AWS Shield."
slug: "q-47-launch-public-facing-web-app-ec2"
certification: "AWS Solution Architect Associate Exam"
---


 A company is set to launch a public web application hosted in the AWS Cloud. Its architecture includes Amazon EC2 instances within a VPC, supported by an Elastic Load Balancer (ELB), while a third-party service manages the DNS. The company's solutions architect is tasked with recommending a strategy to identify and safeguard against significant DDoS attacks. What solution would fulfill these requirements?
{: .query}

- [ ] A. Activate Amazon GuardDuty for the account.
{: .option}
- [ ] B. Activate Amazon Inspector on the EC2 instances.
{: .option}
- [ ] C. Activate AWS Shield and link it with Amazon Route 53.
{: .option}
- [x] D. Activate AWS Shield Advanced and associate the ELB with it.
{: .option}

D
{: .answer}

The correct answer to the question is **D. Activate AWS Shield Advanced and associate the ELB with it.** Here’s a detailed explanation of why this solution is the best choice and why the other options are not suitable for protecting against DDoS attacks.

### Correct Answer: D. Activate AWS Shield Advanced and associate the ELB with it.

**Explanation of AWS Shield Advanced:**
- **AWS Shield** is a managed DDoS protection service that safeguards applications running on AWS. AWS Shield Advanced provides enhanced protection against large-scale DDoS attacks, which is essential for a public-facing web application.
- By associating the Elastic Load Balancer (ELB) with AWS Shield Advanced, you ensure that your application is protected from various DDoS attack vectors, including volumetric attacks and application layer attacks. 
- AWS Shield Advanced also includes features such as real-time attack visibility, 24/7 access to the AWS DDoS Response Team (DRT), and detailed attack diagnostics, which are crucial for quickly mitigating threats and understanding attack patterns.
- Moreover, Shield Advanced integrates with other AWS services such as CloudFront and Route 53, providing additional layers of protection.

### Why Other Options Are Incorrect:

**A. Activate Amazon GuardDuty for the account.**
- **Amazon GuardDuty** is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect AWS accounts, workloads, and data stored in Amazon S3. While it is an essential security tool, it does not provide direct protection against DDoS attacks. Instead, it focuses on detecting potential security issues (like compromised instances) rather than mitigating them in real-time.

**B. Activate Amazon Inspector on the EC2 instances.**
- **Amazon Inspector** is a security assessment service that helps improve the security and compliance of applications deployed on Amazon EC2. It assesses applications for vulnerabilities and deviations from best practices but does not offer protection against DDoS attacks. It is more about ensuring that the EC2 instances are secure rather than protecting them from large-scale attacks.

**C. Activate AWS Shield and link it with Amazon Route 53.**
- While **AWS Shield** (the standard version) does provide some basic protection against DDoS attacks, it is not sufficient for large-scale attacks and does not offer the advanced features that Shield Advanced provides. Additionally, linking Shield to Route 53 does not directly protect the ELB or EC2 instances behind it. Shield Advanced is specifically designed to protect AWS resources like ELBs, making option D the more effective choice.

### Technical Details for AWS Solution Architect Associate Exam:

1. **Understanding DDoS Attacks:**
   - DDoS (Distributed Denial of Service) attacks involve overwhelming a target with traffic to render it unavailable to legitimate users. They can target various layers of the OSI model, including the network, transport, and application layers.

2. **AWS Shield:**
   - **Shield Standard**: Provides automatic protection for all AWS customers against the most common types of DDoS attacks. 
   - **Shield Advanced**: Offers enhanced DDoS protection, cost protection against scaling charges due to DDoS activity, and access to the DDoS Response Team.

3. **Elastic Load Balancer (ELB):**
   - ELBs distribute incoming application traffic across multiple targets (e.g., EC2 instances) to ensure high availability and fault tolerance. Associating ELBs with Shield Advanced helps ensure that your application can handle DDoS attacks while maintaining availability.

4. **Integration with Other Services:**
   - AWS Shield Advanced works well with other services like CloudFront (CDN) and Route 53 (DNS) to provide comprehensive protection and reduce latency.

5. **Best Practices:**
   - Use CloudFront in front of your ELB to absorb attacks and cache content.
   - Set up Web Application Firewalls (AWS WAF) to protect against application layer attacks.

In summary, option D is the most appropriate solution for protecting against large-scale DDoS attacks for the specified architecture, while the other options serve different security purposes that do not directly address the DDoS threat. Understanding these distinctions is crucial for passing the AWS Solution Architect Associate Exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for the DNS. The company's solutions architect must recommend a solution to detect and protect against large-scale DDoS attacks.
Which solution meets these requirements?
{: .original-query}

### Original Questions

- [ ] A. Enable Amazon GuardDuty on the account.
{: .originaloption}
- [ ] B. Enable Amazon Inspector on the EC2 instances.
{: .originaloption}
- [ ] C. Enable AWS Shield and assign Amazon Route 53 to it.
{: .originaloption}
- [ ] D. Enable AWS Shield Advanced and assign the ELB to it.
{: .originaloption}


### Comments

--- 
The correct solution is D. Option C is not applicable because it references Amazon Route 53, which is an AWS-managed DNS service. The question specifies that the company is utilizing a third-party DNS provider, making Route 53 unsuitable for this scenario. Therefore, option D, which involves activating AWS Shield Advanced and associating it with the Elastic Load Balancer (ELB), is the most effective choice for detecting and mitigating large-scale Distributed Denial of Service (DDoS) attacks. AWS Shield Advanced provides enhanced DDoS protection and offers additional features such as real-time attack visibility, cost protection, and access to the DDoS Response Team (DRT) for incident management. This level of protection is crucial for maintaining the integrity and availability of public-facing applications in the cloud.
{: .comment}
--- 
Ah, you've got the right idea, but let's spice it up a bit! 🌶️ The key here is to protect against those pesky large-scale DDoS attacks, and while Route 53 is fantastic for handling DNS with a custom domain, it’s not the superhero we need for this situation. 🦸‍♂️

The real champion in our corner is AWS Shield Advanced! 🛡️ By linking it to the Elastic Load Balancer, we can effectively safeguard our application from those overwhelming waves of malicious traffic. 🏄‍♂️ So, while Route 53 is great for delivering your site’s address, AWS Shield Advanced is the bouncer keeping the troublemakers out! 🚫
{: .comment}
--- 
AWS Shield Advanced offers enhanced protection against DDoS attacks for your Amazon EC2 instances, Elastic Load Balancers, CloudFront distributions, Route 53 hosted zones, and AWS Global Accelerator standard accelerators. With this service, you gain access to advanced threat intelligence and real-time attack visibility, allowing you to respond proactively to potential threats. It's like having a security system that not only alerts you when trouble is brewing but also helps you fortify your defenses. So, if you're gearing up for a public-facing web application, Shield Advanced is your best bet for keeping those pesky DDoS attackers at bay, ensuring that your digital fortress remains standing strong.
{: .comment}
--- 
I completely agree! AWS Shield Advanced is the ideal choice, as it offers robust protection for EC2 instances, which is something the Standard tier cannot provide. This advanced tier is specifically designed to defend against large-scale DDoS attacks, ensuring that your application remains secure and resilient in the face of potential threats.
{: .comment}
--- 
The magical powers of AWS Shield Advanced come to the rescue when it comes to defending against those pesky DDoS attacks! 🎉 Since we're using a third-party DNS service, we can't link it to Route 53, but fear not! Shield Advanced is your mighty shield, ready to protect your valuable resources and keep everything running smoothly. Embrace the protection and watch your worries float away!
{: .comment}

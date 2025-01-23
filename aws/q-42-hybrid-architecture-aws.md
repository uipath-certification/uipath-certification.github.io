---
layout: answered-question
title: "AWS Solutions Architect Is Designing A New Hybrid Question"
meta: "AWS Exam Question: A solutions architect designs a hybrid architecture for a highly available, low latency connection to AWS while minimizing costs. Answer: Direct Connect, VPN."
slug: "q-42-hybrid-architecture-aws"
certification: "AWS Solution Architect Associate Exam"
---


 A solutions architect is tasked with designing a new hybrid architecture that integrates a company's on-premises infrastructure with AWS. The key requirements include establishing a highly available connection to an AWS Region that maintains consistent low latency. Additionally, the company aims to minimize costs and is open to tolerating slower traffic in the event of a primary connection failure. What actions should the solutions architect take to fulfill these criteria?
{: .query}

- [x] A. Set up an AWS Direct Connect connection to a specific Region. Additionally, establish a VPN connection to serve as a backup in case the primary Direct Connect connection fails.
{: .option}
- [ ] B. Set up a VPN tunnel connection to a Region for secure private access. Additionally, establish a second VPN tunnel for private connectivity, which will serve as a backup in case the primary VPN connection goes down.
{: .option}
- [ ] C. Set up an AWS Direct Connect connection to a specific Region. Establish an additional Direct Connect connection to the same Region as a backup in case the primary connection encounters a failure.
{: .option}
- [ ] D. Set up an AWS Direct Connect connection to a specific Region. Utilize the Direct Connect failover feature via the AWS CLI to automatically establish a backup connection in the event that the primary Direct Connect connection experiences a failure.
{: .option}

A
{: .answer}

The correct answer to the question is **A**: "Set up an AWS Direct Connect connection to a specific Region. Additionally, establish a VPN connection to serve as a backup in case the primary Direct Connect connection fails." Here's a detailed explanation of why this is the best option and an analysis of why the other options are less suitable.

### Explanation of the Correct Answer (A)

1. **Direct Connect Benefits**: AWS Direct Connect provides a dedicated network connection from the on-premises infrastructure to AWS, offering consistent low latency and high bandwidth. This is ideal for workloads that require a reliable and high-performance connection.

2. **VPN as Backup**: By establishing a VPN connection as a backup, the company can ensure that it has an alternative route for traffic if the Direct Connect link fails. VPN connections use the public internet but can provide sufficient bandwidth, albeit with typically higher latency and lower reliability compared to Direct Connect. Accepting slower traffic in a failover situation aligns with the company's requirement to minimize costs.

3. **Cost-Effectiveness**: Direct Connect can be more cost-effective for high-volume data transfer, but setting up a second Direct Connect connection can be quite expensive. By using a VPN as a backup, the company can take advantage of the cost benefits of Direct Connect while still ensuring availability.

### Analysis of Incorrect Answers

**B. Set up a VPN tunnel connection to a Region for secure private access. Additionally, establish a second VPN tunnel for private connectivity, which will serve as a backup in case the primary VPN connection goes down.**
- **Reason for Incorrectness**: While this solution provides redundancy, it relies solely on VPNs, which are subject to the limitations of the public internet. This means that latency and bandwidth may not be consistent, which contradicts the company's requirement for a low-latency connection. This option does not leverage Direct Connect, which is necessary for the company's needs.

**C. Set up an AWS Direct Connect connection to a specific Region. Establish an additional Direct Connect connection to the same Region as a backup in case the primary connection encounters a failure.**
- **Reason for Incorrectness**: Although this option provides high availability, it does not address cost concerns effectively. Direct Connect connections can be expensive, especially if a second dedicated connection is needed solely for redundancy. This option does not align with the company’s requirement to minimize costs while still ensuring availability.

**D. Set up an AWS Direct Connect connection to a specific Region. Utilize the Direct Connect failover feature via the AWS CLI to automatically establish a backup connection in the event that the primary Direct Connect connection experiences a failure.**
- **Reason for Incorrectness**: Direct Connect does not have a built-in failover feature that automatically establishes a backup connection. If the Direct Connect connection fails, the traffic would not automatically reroute to a second Direct Connect connection in the same way it could be done with a VPN. This option misrepresents the capabilities of Direct Connect and does not fulfill the requirement for a backup option.

### Technical Details for AWS Solution Architect Associate Exam

1. **Direct Connect**: Understand the setup process, including choosing a Direct Connect location and establishing a virtual interface. Know the pricing structure and the benefits of using Direct Connect for high-volume workloads.

2. **VPN Connections**: Familiarize yourself with how VPN tunnels operate, the types of VPNs (site-to-site vs. client-to-site), and the implications of using the public internet for connectivity.

3. **Failover Strategies**: Learn about various failover strategies, including active-active and active-passive configurations. Understand how to implement redundancy in network architecture effectively.

4. **Cost Management**: Be prepared to discuss various AWS pricing models and how to optimize costs while maintaining performance and availability.

5. **Resiliency and Availability**: Know the AWS Well-Architected Framework principles related to reliability and the best practices for designing high-availability architectures.

By understanding these concepts and the reasoning behind the correct answer, candidates can better prepare for the AWS Solution Architect Associate exam and design effective hybrid architectures.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A solutions architect is designing a new hybrid architecture to extend a company's on-premises infrastructure to AWS. The company requires a highly available connection with consistent low latency to an AWS Region. The company needs to minimize costs and is willing to accept slower traffic if the primary connection fails.
What should the solutions architect do to meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Provision an AWS Direct Connect connection to a Region. Provision a VPN connection as a backup if the primary Direct Connect connection fails.
{: .originaloption}
- [ ] B. Provision a VPN tunnel connection to a Region for private connectivity. Provision a second VPN tunnel for private connectivity and as a backup if the primary VPN connection fails.
{: .originaloption}
- [ ] C. Provision an AWS Direct Connect connection to a Region. Provision a second Direct Connect connection to the same Region as a backup if the primary Direct Connect connection fails.
{: .originaloption}
- [ ] D. Provision an AWS Direct Connect connection to a Region. Use the Direct Connect failover attribute from the AWS CLI to automatically create a backup connection if the primary Direct Connect connection fails.
{: .originaloption}


### Comments


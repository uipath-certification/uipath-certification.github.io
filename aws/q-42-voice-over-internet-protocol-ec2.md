---
layout: answered-question
title: "AWS A Company Provides A Voice Over Internet Protocol Question"
meta: "AWS Exam Question: A company uses VoIP with UDP on EC2 in Auto Scaling across multiple Regions. How to route users with low latency and ensure failover? Answer: Amazon Route 53."
slug: "q-42-voice-over-internet-protocol-ec2"
certification: "AWS Solution Architect Associate Exam"
---


 A company offers a Voice over Internet Protocol (VoIP) service utilizing UDP connections, with its infrastructure built on Amazon EC2 instances within an Auto Scaling group. This service is deployed across various AWS Regions. 

To ensure optimal performance, the company seeks a method to direct users to the Region that provides the lowest latency. Additionally, the company requires an automated failover mechanism between Regions. 

What solution would effectively fulfill these needs?
{: .query}

- [x] A. Set up a Network Load Balancer (NLB) along with a corresponding target group. Link the target group to the Auto Scaling group. Utilize the NLB as an endpoint for AWS Global Accelerator in every Region.
{: .option}
- [ ] B. Set up an Application Load Balancer (ALB) along with a corresponding target group. Link the target group to the Auto Scaling group. Utilize the ALB as an endpoint for AWS Global Accelerator in every Region.
{: .option}
- [ ] C. Set up a Network Load Balancer (NLB) along with a corresponding target group. Link the target group to the Auto Scaling group. Establish a latency record in Amazon Route 53 that directs to aliases for each NLB. Create an Amazon CloudFront distribution that utilizes the latency record as its origin.
{: .option}
- [ ] D. Set up an Application Load Balancer (ALB) along with a corresponding target group. Link the target group to the Auto Scaling group. Establish a weighted record in Amazon Route 53 that directs to aliases for each ALB. Launch an Amazon CloudFront distribution that utilizes the weighted record as its origin.
{: .option}

A
{: .answer}

The correct answer to the question is **A**: Set up a Network Load Balancer (NLB) along with a corresponding target group. Link the target group to the Auto Scaling group. Utilize the NLB as an endpoint for AWS Global Accelerator in every Region.

### Explanation of Answer A

1. **Network Load Balancer (NLB):** 
   - NLB operates at the transport layer (Layer 4) and is ideal for handling TCP and UDP traffic, making it suitable for VoIP services, which often use UDP for real-time communication.
   - NLB can manage millions of requests per second while maintaining ultra-low latencies, making it a good fit for applications requiring high throughput and low latency.

2. **AWS Global Accelerator:**
   - Global Accelerator helps improve the availability and performance of your applications with users by routing traffic to the optimal endpoint based on health, geography, and routing policies.
   - It provides static IP addresses that act as a fixed entry point to your application, automatically rerouting traffic to the best-performing region in case of failures or latency issues.

3. **Low Latency Routing:** 
   - By using Global Accelerator with NLBs in multiple regions, users are routed to the NLB with the lowest latency, ensuring an optimal user experience.

4. **Automated Failover:**
   - If an NLB in one region becomes unhealthy, Global Accelerator will automatically reroute traffic to the next best NLB, providing seamless failover across regions.

### Explanation of Why Other Options are Incorrect

**B. Application Load Balancer (ALB):**
- ALBs operate at the application layer (Layer 7) and are designed for HTTP/HTTPS traffic, which is not optimal for real-time communication protocols like VoIP that often utilize UDP.
- Although ALBs can distribute traffic and provide health checks, they are not suitable for VoIP applications primarily based on UDP, making this option inappropriate.

**C. Network Load Balancer with Route 53 and CloudFront:**
- While it uses the correct NLB, establishing a latency record in Route 53 for directing traffic adds unnecessary complexity. Route 53 can indeed route traffic based on latency, but combining it with CloudFront is not needed for VoIP services.
- CloudFront is designed for HTTP content delivery and would not effectively handle UDP traffic, which is central to VoIP services.

**D. Application Load Balancer with Route 53 and CloudFront:**
- Similar to option B, ALB is not suitable for UDP traffic, making this option fundamentally flawed.
- Using weighted records in Route 53 is more suitable for load balancing HTTP traffic rather than low-latency use cases typical of VoIP.

### Technical Details for AWS Solution Architect Associate Exam

1. **Load Balancing Types:**
   - **Network Load Balancer (NLB):** Best for TCP and UDP traffic, high performance, and supports static IP addresses.
   - **Application Load Balancer (ALB):** Best for HTTP/HTTPS traffic, supports path-based routing and host-based routing.

2. **Global Accelerator:**
   - Provides two static IP addresses that act as a fixed entry point to applications.
   - Routes traffic based on health checks and latency, optimizing for performance.

3. **Route 53:**
   - A scalable Domain Name System (DNS) web service that can route users based on latency, geolocation, and health checks.

4. **CloudFront:**
   - A Content Delivery Network (CDN) service that improves the delivery of your web content. Not suitable for UDP traffic.

5. **Auto Scaling:**
   - Automatically adjusts the number of EC2 instances in a group based on demand, ensuring that the application scales appropriately for traffic.

Understanding these concepts is crucial for the AWS Solutions Architect Associate exam, as they cover key AWS services and their appropriate use cases.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company provides a Voice over Internet Protocol (VoIP) service that uses UDP connections. The service consists of Amazon EC2 instances that run in an Auto Scaling group. The company has deployments across multiple AWS Regions.
The company needs to route users to the Region with the lowest latency. The company also needs automated failover between Regions.
Which solution will meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Use the NLB as an AWS Global Accelerator endpoint in each Region.
{: .originaloption}
- [ ] B. Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Use the ALB as an AWS Global Accelerator endpoint in each Region.
{: .originaloption}
- [ ] C. Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 latency record that points to aliases for each NLB. Create an Amazon CloudFront distribution that uses the latency record as an origin.
{: .originaloption}
- [ ] D. Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 weighted record that points to aliases for each ALB. Deploy an Amazon CloudFront distribution that uses the weighted record as an origin.
{: .originaloption}


### Comments

--- 
Option A is the most suitable choice. AWS Global Accelerator provides automatic failover capabilities, making it an ideal solution for scenarios involving Voice over Internet Protocol (VoIP) services. By setting up a Network Load Balancer (NLB) linked to an Auto Scaling group and utilizing Global Accelerator as an endpoint in each AWS Region, the company can effectively route users to the Region with the lowest latency. This approach ensures high availability and resilience, which are critical for maintaining the quality of VoIP communications. For further details, you can refer to the AWS Global Accelerator FAQ page.
{: .comment}
--- 
After checking out that link, I’m totally on board with option A! 🚀 It makes sense to set up a Network Load Balancer (NLB) with a target group tied to the Auto Scaling group. Plus, using the NLB as an endpoint for AWS Global Accelerator in each Region is a smart way to ensure users connect with the lowest latency. It’s like giving them the express lane to VoIP goodness! 🎉

With this setup, you’ll not only achieve efficient routing, but you’ll also have automated failover between Regions. That means if one Region takes a coffee break ☕, the others are ready to keep the conversation flowing smoothly. So, let’s keep those packets zipping along with minimal fuss! 💨
{: .comment}
--- 
Option A is a solid choice for scenarios that go beyond the mundane world of HTTP. Think gaming (UDP), IoT (MQTT), or Voice over IP—basically, anything that thrives on low-latency connections. It also shines in HTTP situations where you need those coveted static IP addresses or a speedy, reliable failover between regions. Plus, both Global Accelerator and Network Load Balancer play nicely with AWS Shield, offering DDoS protection to keep those pesky attackers at bay. It's a robust solution for ensuring your VoIP service runs smoothly, no matter where your users are.
{: .comment}
--- 
Option A presents an excellent solution for the scenario at hand. While CloudFront is a fantastic service, it is primarily optimized for HTTP use cases. In this context, utilizing a Network Load Balancer (NLB) in conjunction with AWS Global Accelerator ensures efficient routing of VoIP traffic with minimal latency. This approach effectively meets the requirements for user traffic management and automated failover between Regions.
{: .comment}
--- 
Thank you for sharing your link! It has helped me solidify my understanding of option A. 🌟
{: .comment}

---
layout: answered-question
title: "AWS A Company Has A Three-Tier Web Application Question"
meta: "AWS Exam Question: A company has a three-tier web application on AWS with public and private subnets. How to integrate a firewall appliance for traffic inspection? Answer: VPC, AWS Marketplace."
slug: "q-42-three-tier-web-application-AWS"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates a three-tier web application hosted on AWS, with web servers located in a public subnet of a VPC, while application and database servers are situated in private subnets within the same VPC. Additionally, the company has implemented a third-party virtual firewall appliance from the AWS Marketplace in a dedicated inspection VPC, equipped with an IP interface designed to accept IP packets. A solutions architect is tasked with integrating this web application with the virtual firewall appliance to ensure that all traffic to the application is inspected prior to reaching the web server. What solution would achieve this goal with the least operational overhead?
{: .query}

- [ ] A. Set up a Network Load Balancer within the public subnet of the application's VPC to direct traffic to the appliance for packet inspection.
{: .option}
- [ ] B. Set up an Application Load Balancer within the public subnet of the application's VPC to direct traffic to the appliance for packet inspection.
{: .option}
- [ ] C. Set up a transit gateway within the inspection VP. Configure the route tables to direct incoming packets through the transit gateway.
{: .option}
- [x] D. Set up a Gateway Load Balancer within the inspection VPC. Establish a Gateway Load Balancer endpoint to accept incoming packets and direct them to the appliance.
{: .option}

D
{: .answer}

To integrate a third-party virtual firewall appliance for inspecting traffic before it reaches the web server in a three-tier web application deployed on AWS, the most effective solution with the least operational overhead is **Option D: Set up a Gateway Load Balancer within the inspection VPC. Establish a Gateway Load Balancer endpoint to accept incoming packets and direct them to the appliance.**

### Explanation of Option D:
1. **Gateway Load Balancer (GWLB)**:
   - A Gateway Load Balancer allows you to deploy, scale, and manage virtual appliances such as firewalls and intrusion detection/prevention systems. It combines a transparent network gateway with a load balancer.
   - By using GWLB, traffic can be seamlessly routed to the inspection appliance while maintaining the appearance of a single endpoint for clients.
   - It simplifies the configuration and management of the integration since AWS handles the scaling of the load balancer and the underlying virtual appliance.

2. **Operational Overhead**:
   - Setting up a GWLB reduces operational overhead as you do not need to manage separate routing configurations or complex networking setups. AWS manages the load balancing and health checks.
   - It allows for easy monitoring and scaling of the firewall appliance as traffic flows can be adjusted based on demand without manual intervention.

### Why the Other Options Are Incorrect:
- **Option A: Set up a Network Load Balancer (NLB) within the public subnet.**
  - A Network Load Balancer is designed to handle high volumes of TCP traffic, but it does not provide the seamless integration for appliances that Gateway Load Balancer does. 
  - Using an NLB would require additional configurations for managing traffic flow and would not provide the same level of integration and operational efficiency as GWLB.

- **Option B: Set up an Application Load Balancer (ALB) within the public subnet.**
  - An ALB is primarily used for HTTP/HTTPS traffic and provides Layer 7 (application layer) features such as content-based routing and SSL termination. However, it would not be ideal for directing traffic to a virtual appliance for inspection as it would not transparently forward all packet types (e.g., non-HTTP traffic).
  - Like the NLB, this option would also increase complexity in routing and configuration.

- **Option C: Set up a transit gateway within the inspection VPC.**
  - A transit gateway is a network transit hub that can connect VPCs and on-premises networks. While it can facilitate traffic flow, it does not inherently provide the capabilities needed for packet inspection. You would still need to configure routing and manage the traffic flow to the inspection appliance, which introduces additional complexity and operational overhead.

### Technical Details for AWS Solutions Architect Associate Exam:
- **Gateway Load Balancer**:
  - Understand how it uses the **GWLBE** (Gateway Load Balancer Endpoint) to direct traffic to the virtual appliance.
  - Know that it supports both Layer 3 (network) and Layer 4 (transport) traffic seamlessly.

- **Network Load Balancer vs. Application Load Balancer**:
  - NLB operates at Layer 4 and is suitable for TCP traffic; it handles millions of requests per second.
  - ALB operates at Layer 7 and is suitable for HTTP/HTTPS and web applications, providing more advanced routing features.

- **Transit Gateway**:
  - It can simplify the management of multiple VPCs and on-premises networks but is not specifically designed for packet inspection.

- **Networking Concepts**:
  - Familiarize yourself with concepts such as subnets, routing tables, VPC peering, and endpoint configurations, which are essential for designing AWS architectures.

By understanding these concepts and the reasoning behind the correct answer, candidates can better prepare for the AWS Solutions Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public subnet in a VPC. The application servers and database servers are deployed in private subnets in the same VPC. The company has deployed a third-party virtual firewall appliance from AWS Marketplace in an inspection VPC. The appliance is configured with an IP interface that can accept IP packets.
A solutions architect needs to integrate the web application with the appliance to inspect all traffic to the application before the traffic reaches the web server.
Which solution will meet these requirements with the LEAST operational overhead?
{: .original-query}

### Original Questions

- [ ] A. Create a Network Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.
{: .originaloption}
- [ ] B. Create an Application Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.
{: .originaloption}
- [ ] C. Deploy a transit gateway in the inspection VPConfigure route tables to route the incoming packets through the transit gateway.
{: .originaloption}
- [ ] D. Deploy a Gateway Load Balancer in the inspection VPC. Create a Gateway Load Balancer endpoint to receive the incoming packets and forward the packets to the appliance.
{: .originaloption}


### Comments

--- 
The optimal solution for integrating the web application with the third-party virtual firewall appliance is to implement a Gateway Load Balancer within the inspection VPC. This approach allows for the establishment of a Gateway Load Balancer endpoint that can receive incoming IP packets and efficiently route them to the firewall appliance for inspection. Utilizing a Gateway Load Balancer streamlines the process of directing traffic, minimizes operational overhead, and enhances the overall security posture of the application by ensuring that all traffic is inspected before reaching the web servers. This solution leverages AWS’s managed services effectively, providing a robust and scalable architecture.
{: .comment}
--- 
It's option D, my friend! 🎉 Why, you ask? Well, the Gateway Load Balancer is like the cool new kid on the block, operating at layer 3 of the OSI model and powered by Hyperplane. It’s a traffic-handling wizard, capable of managing thousands of connections every second—talk about multitasking! 🚀 

By setting up Gateway Load Balancer endpoints in your spoke VPCs, traffic can smoothly flow from or to the Internet. This setup lets you inspect traffic inline from multiple spoke VPCs without breaking a sweat. Plus, it keeps your virtual appliances centralized, making it easy-peasy to scale as needed. Isn’t that just delightful? 😄 So, if you want to keep your web app secure with minimal fuss, this is the way to go!
{: .comment}
--- 
Ah, the joys of juggling network traffic! We can seamlessly route incoming requests through those virtual appliances, allowing them to perform their magic of inspection. 

These appliances can be anything from firewalls to intrusion detection and prevention systems, or even deep packet inspection systems. They operate at Layer 3, meaning they have their ears perked up for all packets across every port—no sneaky data escaping their notice!

Traffic gets forwarded to the target group defined in the listener rules, ensuring that everything flows as it should. The Gateway Load Balancer (GLB) and these virtual appliances communicate using the GENEVE protocol over port 6081, creating a tidy little exchange of information. 

So, with this setup, you can keep an eye on your traffic without breaking a sweat. It’s like having a vigilant security guard that also knows how to juggle!
{: .comment}
--- 
In this scenario, "utilizing the GENEVE protocol" pertains to how the Global Load Balancer (GLB) interacts with virtual appliances such as firewalls and intrusion detection systems to manage and transmit traffic. GENEVE (Generic Network Virtualization Encapsulation) is a versatile protocol designed to encapsulate packets for optimized transport across networks, facilitating flexible and scalable network virtualization solutions. It functions using port 6081, which allows the load balancer to efficiently direct traffic to the designated target groups (TG) according to the established listener rules. This approach enhances the overall efficiency and effectiveness of network traffic management while maintaining a high level of adaptability.
{: .comment}
--- 
The most suitable solution is option D, and here’s why it shines brightly:  
- It boasts minimal operational overhead, making it a breeze to manage! 🌈  
- It allows seamless integration with the AWS Marketplace and the third-party application, ensuring everything works together harmoniously.

Imagine if the question included an additional option for VPC-to-VPC traffic inspection! That would add an exciting twist, as it would provide an alternative for inspecting traffic before it hits the application layer. Traffic forwarding could indeed be a delightful solution to explore!
{: .comment}

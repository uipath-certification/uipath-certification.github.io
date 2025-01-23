---
layout: answered-question
title: "AWS Solutions Architect Is Developing A VPC Question"
meta: "AWS Exam Question: A solutions architect is developing a VPC architecture with multiple subnets hosting applications using Amazon EC2 and RDS. Answer: VPC, Availability Zones."
slug: "q-47-developing-vpc-architecture-ec2-rds"
certification: "AWS Solution Architect Associate Exam"
---


 A solutions architect is designing a VPC architecture comprising several subnets to support applications utilizing Amazon EC2 instances and Amazon RDS database instances. This architecture features six subnets distributed across two Availability Zones, with each zone containing a public subnet, a private subnet, and a dedicated subnet for databases. Access to the RDS databases is restricted solely to EC2 instances operating within the private subnets. What solution would satisfy these criteria?
{: .query}

- [ ] A. Generate a new route table that omits the routes to the CIDR blocks of the public subnets. Link the route table to the database subnets.
{: .option}
- [ ] B. Set up a security group that blocks inbound traffic from the security group assigned to instances located in the public subnets. Apply this security group to the DB instances.
{: .option}
- [x] C. Establish a security group that permits incoming traffic from the security group associated with instances located in the private subnets. Then, link this security group to the DB instances.
{: .option}
- [ ] D. Establish a new peering connection linking the public subnets with the private subnets. Additionally, set up a separate peering connection between the private subnets and the database subnets.
{: .option}

C
{: .answer}

The correct answer to the question is **C. Establish a security group that permits incoming traffic from the security group associated with instances located in the private subnets. Then, link this security group to the DB instances.**

### Explanation of the Correct Answer (C)

1. **Security Groups**: In AWS, security groups act as virtual firewalls that control inbound and outbound traffic to AWS resources. They are stateful, meaning if you allow incoming traffic on a specific port, the response traffic is automatically allowed regardless of outbound rules.

2. **Private Subnets**: The requirement states that only EC2 instances in the private subnets can access the RDS instances. By creating a security group that allows incoming traffic from the security group associated with the private subnets, you ensure that only EC2 instances within those private subnets can communicate with the RDS instances.

3. **Implementation**: 
   - Create a security group for the RDS DB instances.
   - Set an inbound rule in this security group to allow traffic from the security group of the EC2 instances in the private subnets. 
   - This setup ensures that the RDS instances are not exposed to public subnets and are only accessible to the designated private subnet resources.

### Why the Other Options are Incorrect

**A. Generate a new route table that omits the routes to the CIDR blocks of the public subnets. Link the route table to the database subnets.**
- **Reason**: Route tables control the flow of traffic at the network layer (Layer 3) and do not manage access permissions for specific resources. Simply omitting routes does not restrict access; it just affects network connectivity. Database instances need to be reachable by the EC2 instances in the private subnets, and route tables alone cannot enforce that kind of access control.

**B. Set up a security group that blocks inbound traffic from the security group assigned to instances located in the public subnets. Apply this security group to the DB instances.**
- **Reason**: While you could block traffic from public subnets, it is not the most effective way to manage access. Security groups are enabled by default to allow no traffic unless explicitly allowed. Thus, it's better to allow specific traffic from private subnets rather than block traffic from public subnets. This could create confusion and may lead to misconfigurations.

**D. Establish a new peering connection linking the public subnets with the private subnets. Additionally, set up a separate peering connection between the private subnets and the database subnets.**
- **Reason**: VPC peering is used to connect two VPCs, allowing them to route traffic between each other. In this case, all subnets are within the same VPC, so peering is not necessary. The architecture already allows for communication between subnets within the same VPC. Additionally, introducing peering connections creates unnecessary complexity and does not directly relate to the security requirements for database access.

### Technical Details for AWS Certified Solutions Architect - Associate Exam

1. **VPC and Subnets**: Understand how to design a VPC with public, private, and database subnets. Know the role of Internet Gateways, NAT Gateways, and Route Tables.

2. **Security Groups vs. Network ACLs**: Be able to differentiate between these two security mechanisms. Security Groups are stateful and operate at the instance level, while Network ACLs are stateless and operate at the subnet level.

3. **RDS Security**: Know how to secure RDS instances using security groups, IAM roles, and encryption. Understand best practices for managing access to databases in AWS.

4. **Network Design**: Be familiar with AWS best practices for network segmentation, including the use of private subnets for sensitive resources and the importance of limiting public access.

5. **Troubleshooting Connectivity**: Understand how to troubleshoot and analyze connectivity issues using tools like AWS VPC Flow Logs and checking Security Group and NACL configurations.

By focusing on these topics, candidates can better prepare for the AWS Certified Solutions Architect - Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A solutions architect is developing a VPC architecture that includes multiple subnets. The architecture will host applications that use Amazon EC2 instances and Amazon RDS DB instances. The architecture consists of six subnets in two Availability Zones. Each Availability Zone includes a public subnet, a private subnet, and a dedicated subnet for databases. Only EC2 instances that run in the private subnets can have access to the RDS databases.
Which solution will meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Create a new route table that excludes the route to the public subnets' CIDR blocks. Associate the route table with the database subnets.
{: .originaloption}
- [ ] B. Create a security group that denies inbound traffic from the security group that is assigned to instances in the public subnets. Attach the security group to the DB instances.
{: .originaloption}
- [ ] C. Create a security group that allows inbound traffic from the security group that is assigned to instances in the private subnets. Attach the security group to the DB instances.
{: .originaloption}
- [ ] D. Create a new peering connection between the public subnets and the private subnets. Create a different peering connection between the private subnets and the database subnets.
{: .originaloption}


### Comments

--- 
Option A does not adequately configure the traffic flow, as it fails to account for necessary connections between subnets. 

Option B is ineffective since security groups operate on an allow-list basis and do not support deny rules, which means they cannot be utilized to block access from specific sources.

Option D is not suitable because peering connections are primarily intended for linking Virtual Private Clouds (VPCs) rather than managing access between subnets within the same VPC.

The optimal solution is option C, as it establishes a security group that allows incoming traffic exclusively from the security group associated with instances in the private subnets. This ensures that only the intended EC2 instances can communicate with the Amazon RDS database instances, thereby maintaining the required security posture for the architecture.
{: .comment}
--- 
A solutions architect is crafting a VPC architecture featuring multiple subnets to support applications powered by Amazon EC2 instances and Amazon RDS databases. This setup includes six subnets distributed across two Availability Zones. Each Availability Zone is equipped with a public subnet, a private subnet, and a dedicated subnet for databases. The RDS databases are exclusively accessible to EC2 instances located in the private subnets.

Now, let’s break it down with a sprinkle of fun! 🎉 If you want your architecture to play nice and keep things secure, consider this: 

- **Route Tables**: Create a shiny new route table that conveniently forgets about the routes to the public subnets. This way, the database subnets can enjoy a peaceful existence without unwanted guests! 🛡️

- **Security Groups**: Set up a security group that’s like a bouncer at an exclusive club, blocking any uninvited traffic from the public subnet security group. This is the VIP section for your RDS instances! 🎟️

- **Friendly Connections**: Establish a security group that welcomes incoming traffic from the private subnet instances. After all, friends should be allowed to visit! Let this friendly security group guard your precious DB instances. 🤝

- **Peering Connections**: If you really want to spice things up, consider creating peering connections between the public and private subnets, and another between the private and database subnets. Just think of it as a neighborhood watch program, keeping everything safe and sound! 🏡

So there you have it, a fun yet professional approach to building a secure and efficient VPC architecture! Best of luck on your cloud journey! ☁️✨
{: .comment}
--- 
Certainly! Here’s a reworked and improved version of the provided text, infused with a touch of cynicism and quirkiness while maintaining professionalism:

---

So, let me guess, you opted for the deluxe package, didn’t you?
{: .comment}
--- 
The most effective solution is option C. This approach involves creating a security group that specifically permits incoming traffic from the security group associated with instances in the private subnets. The key term here is "permits," which emphasizes the importance of allowing secure communication between the EC2 instances in private subnets and the RDS database instances. By implementing this solution, you can ensure that only the designated EC2 instances have access to the database, enhancing the overall security and integrity of the architecture.
{: .comment}
--- 
A: The idea behind generating a route table that excludes routes to the CIDR blocks of the public subnets is a bit unclear, and it wouldn’t effectively facilitate access to the RDS databases. 

B: Remember, security groups are set to deny all inbound traffic by default, so simply blocking traffic from public subnet instances wouldn’t do the trick!

D: A peering connection between subnets? That sounds intriguing, but I'm not quite sure how that would work in this context! I'm always eager to learn, though! 😊

C: By creating a security group that allows incoming traffic from the instances in the private subnets, you're ensuring that only the necessary access is granted. Attaching this security group to the DB instances means they will block all other traffic, allowing only communication from those essential EC2 instances in the private subnets. Sounds like a solid plan!
{: .comment}

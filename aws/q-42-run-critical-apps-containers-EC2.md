---
layout: answered-question
title: "AWS A Company Wants To Run Its Critical Applications Question"
meta: "AWS Exam Question: A company seeks to run critical applications in containers for scalability and availability without managing infrastructure. What’s the answer? Consider ECS, EKS."
slug: "q-42-run-critical-apps-containers-EC2"
certification: "AWS Solution Architect Associate Exam"
---


 A company aims to run its essential applications in containers to achieve scalability and availability, with a strong preference for concentrating on the maintenance of these critical applications. They wish to avoid the responsibility of provisioning and managing the underlying infrastructure for the containerized workloads. 

What steps should a solutions architect take to address these needs?
{: .query}

- [ ] A. Utilize Amazon EC2 instances and set up Docker on them.
{: .option}
- [ ] B. Utilize Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 worker nodes.
{: .option}
- [x] C. Utilize Amazon Elastic Container Service (Amazon ECS) with AWS Fargate.
{: .option}
- [ ] D. Utilize Amazon EC2 instances that are based on an Amazon Elastic Container Service (Amazon ECS)-optimized Amazon Machine Image (AMI).
{: .option}

C
{: .answer}

The correct answer is **C. Utilize Amazon Elastic Container Service (Amazon ECS) with AWS Fargate.**

### Explanation of the Correct Answer

**AWS Fargate** is a serverless compute engine for containers that works with Amazon ECS and Amazon EKS. Using Fargate allows the company to deploy and manage containerized applications without worrying about the underlying servers or infrastructure. Here’s how it meets the requirements:

1. **Focus on Application Maintenance**: Since Fargate abstracts the underlying infrastructure, the company can concentrate on developing and maintaining their applications rather than managing the servers or scaling the infrastructure.

2. **Scalability and Availability**: Fargate automatically handles scaling and ensures that the containers are highly available. It provisions the necessary compute resources based on the specified requirements of the containerized applications.

3. **No Infrastructure Management**: With Fargate, the company does not need to provision, configure, or manage any EC2 instances. This aligns perfectly with their desire to avoid responsibility for managing the underlying infrastructure.

### Why the Other Options Are Incorrect

**A. Utilize Amazon EC2 instances and set up Docker on them.**
- This option involves managing EC2 instances and installing Docker, which conflicts with the company’s requirement to avoid managing the underlying infrastructure. The company would be responsible for scaling, patching, and maintaining the EC2 instances, which is not what they want.

**B. Utilize Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 worker nodes.**
- While using Amazon ECS with EC2 worker nodes allows for container orchestration, it still requires the company to manage EC2 instances. The company would need to handle provisioning, scaling, and maintaining these instances, which goes against their goal of focusing on application maintenance.

**D. Utilize Amazon EC2 instances that are based on an Amazon Elastic Container Service (Amazon ECS)-optimized Amazon Machine Image (AMI).**
- Similar to option B, this approach still requires the company to manage EC2 instances. Although ECS-optimized AMIs are tailored for running containers, the company would still have to deal with the underlying infrastructure, which they want to avoid.

### Technical Details for AWS Solution Architect Associate Exam

1. **AWS Fargate Overview**: Understand that Fargate is a serverless compute engine that automatically manages the compute resources for containers. It integrates with ECS and EKS, allowing users to run containers without having to manage servers.

2. **ECS vs. EKS**: Know the differences between Amazon ECS (Elastic Container Service) and Amazon EKS (Elastic Kubernetes Service). ECS is a simpler option for container orchestration, while EKS is for those who prefer Kubernetes.

3. **Container Definitions**: Familiarize yourself with how to define containers in ECS, including specifying CPU and memory requirements, networking configurations, and environment variables.

4. **Task Definitions and Services**: Understand the concepts of task definitions (which define how your containers should run) and services (which manage the desired state of your containers).

5. **Scaling**: Learn about ECS service auto-scaling, which allows you to automatically adjust the number of running tasks based on CloudWatch metrics.

6. **Networking and Security**: Be aware of how networking works in ECS, including the use of Virtual Private Cloud (VPC), security groups, and IAM roles for task execution.

7. **Monitoring and Logging**: Understand how to utilize AWS CloudWatch for monitoring container performance and logging.

By focusing on these aspects, you can prepare effectively for the AWS Solution Architect Associate Exam. The key takeaway is to recognize the advantages of serverless architecture with Fargate in contexts where infrastructure management is a concern.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company wants to run its critical applications in containers to meet requirements for scalability and availability. The company prefers to focus on maintenance of the critical applications. The company does not want to be responsible for provisioning and managing the underlying infrastructure that runs the containerized workload.
What should a solutions architect do to meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Use Amazon EC2 instances, and install Docker on the instances.
{: .originaloption}
- [ ] B. Use Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 worker nodes.
{: .originaloption}
- [ ] C. Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.
{: .originaloption}
- [ ] D. Use Amazon EC2 instances from an Amazon Elastic Container Service (Amazon ECS)-optimized Amazon Machine Image (AMI).
{: .originaloption}


### Comments


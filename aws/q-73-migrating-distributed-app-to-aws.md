---
layout: answered-question
title: "AWS A Company Is Migrating A Distributed Application Question"
meta: "AWS Exam Question: A company is migrating a distributed application to AWS for variable workloads, focusing on resiliency and scalability. Find the answer using AWS services like EC2 and Lambda."
slug: "q-73-migrating-distributed-app-to-aws"
certification: "AWS Solution Architect Associate Exam"
---


 A company is transitioning its distributed application to AWS, which handles fluctuating workloads. The existing infrastructure includes a primary server that manages job coordination among several compute nodes. The organization aims to enhance the application by implementing a solution that optimizes both scalability and resilience. What architectural design should a solutions architect create to fulfill these objectives?
{: .query}

- [ ] A. Set up an Amazon Simple Queue Service (Amazon SQS) queue to serve as the destination for the jobs. Deploy the compute nodes using Amazon EC2 instances that are organized within an Auto Scaling group. Adjust EC2 Auto Scaling to incorporate scheduled scaling.
{: .option}
- [x] B. Set up an Amazon Simple Queue Service (Amazon SQS) queue to serve as the target for the jobs. Utilize Amazon EC2 instances for the compute nodes, which should be organized within an Auto Scaling group. Adjust EC2 Auto Scaling according to the queue's length.
{: .option}
- [ ] C. Set up the main server and compute nodes using Amazon EC2 instances that are organized within an Auto Scaling group. Designate AWS CloudTrail as the destination for the jobs. Adjust EC2 Auto Scaling in response to the primary server's load.
{: .option}
- [ ] D. Set up the main server and compute nodes using Amazon EC2 instances organized within an Auto Scaling group. Utilize Amazon EventBridge (formerly known as Amazon CloudWatch Events) to manage job destinations. Adjust EC2 Auto Scaling according to the workload on the compute nodes.
{: .option}

B
{: .answer}

The correct answer to the question about migrating a distributed application to AWS with a focus on maximizing resiliency and scalability is **B**: "Set up an Amazon Simple Queue Service (Amazon SQS) queue to serve as the target for the jobs. Utilize Amazon EC2 instances for the compute nodes, which should be organized within an Auto Scaling group. Adjust EC2 Auto Scaling according to the queue's length."

### Explanation of Why Option B is Correct:

1. **Decoupling with Amazon SQS**: By using Amazon SQS as the job queue, the architecture is decoupled, allowing for more flexible scaling and resiliency. SQS can buffer the jobs and accommodate variable workloads, ensuring that jobs are not lost if there are temporary spikes in demand. This is important for maintaining system performance and reliability.

2. **Dynamic Scaling**: Utilizing an Auto Scaling group for the EC2 instances hosting the compute nodes allows for automatic scaling based on the queue length. This means that as the number of messages in the SQS queue increases (indicating more jobs to process), the Auto Scaling group can automatically launch new EC2 instances to handle the additional load. Conversely, if the queue length decreases, the Auto Scaling group can terminate instances to save costs.

3. **Fault Tolerance**: If a compute node fails, SQS ensures that jobs are not lost, as they can be retried by another instance. This helps achieve high availability and fault tolerance.

4. **Cost Efficiency**: By adjusting the number of EC2 instances based on the actual workload (queue length), the solution can be more cost-effective, as it avoids the need to provision a fixed number of instances regardless of demand.

### Why the Other Options are Incorrect:

- **Option A**: "Set up an Amazon Simple Queue Service (Amazon SQS) queue to serve as the destination for the jobs. Deploy the compute nodes using Amazon EC2 instances that are organized within an Auto Scaling group. Adjust EC2 Auto Scaling to incorporate scheduled scaling."
  - **Issue**: While this option uses SQS for job queuing and EC2 for compute nodes, it suggests using scheduled scaling. Scheduled scaling is not as flexible as dynamic scaling based on queue length. This means it could lead to situations where resources are either underused or overwhelmed, particularly during unpredictable workloads.

- **Option C**: "Set up the main server and compute nodes using Amazon EC2 instances that are organized within an Auto Scaling group. Designate AWS CloudTrail as the destination for the jobs. Adjust EC2 Auto Scaling in response to the primary server's load."
  - **Issue**: AWS CloudTrail is primarily a service for logging and monitoring API calls and account activity; it is not suited for job queuing. This option does not provide a mechanism for decoupling job processing from job generation, which limits scalability and resiliency.

- **Option D**: "Set up the main server and compute nodes using Amazon EC2 instances organized within an Auto Scaling group. Utilize Amazon EventBridge (formerly known as Amazon CloudWatch Events) to manage job destinations. Adjust EC2 Auto Scaling according to the workload on the compute nodes."
  - **Issue**: While EventBridge is useful for event-driven architectures, it is not primarily a job queuing service. Using it to manage job destinations would not provide the same level of job management and durability as SQS. Additionally, scaling based on the workload on the compute nodes may not effectively address the demand for processing jobs, especially during fluctuating workloads.

### Technical Details for AWS Solutions Architect Associate Exam:

1. **Amazon SQS**: Understand the difference between Standard and FIFO queues, how to configure them, and their pricing model. Know how to integrate SQS with other AWS services (like Lambda and EC2).

2. **Auto Scaling Groups**: Familiarize yourself with configuring scaling policies based on CloudWatch metrics. Understand how to set up health checks and instance termination policies.

3. **EC2 Instances**: Know the different instance types and their use cases, pricing models (On-Demand, Reserved, Spot), and how to optimize resources based on the workload.

4. **Fault Tolerance and High Availability**: Understand the concepts of fault tolerance, high availability, and how AWS services such as SQS, Auto Scaling, and Load Balancers contribute to these goals.

5. **AWS Pricing and Cost Management**: Be familiar with how to estimate costs for SQS, EC2, and Auto Scaling, and how scaling impacts costs.

By understanding these concepts, candidates can effectively design resilient, scalable architectures on AWS, which is a core requirement for the AWS Solutions Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to modernize the application with a solution that maximizes resiliency and scalability.
How should a solutions architect design the architecture to meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling to use scheduled scaling.
{: .originaloption}
- [ ] B. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling based on the size of the queue.
{: .originaloption}
- [ ] C. Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure AWS CloudTrail as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the primary server.
{: .originaloption}
- [ ] D. Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure Amazon EventBridge (Amazon CloudWatch Events) as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the compute nodes.
{: .originaloption}


### Comments


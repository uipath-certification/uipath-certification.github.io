---
layout: answered-question
title: "AWS A Company Wants To Reduce The Cost Question"
meta: "AWS Exam Question: A company seeks to optimize costs for its three-tier web architecture using EC2 instances. Discover the most cost-effective purchasing solution. Answer: Savings Plans, Reserved Instances."
slug: "q-45-reduce-cost-existing-three-tier-EC2"
certification: "AWS Solution Architect Associate Exam"
---


 A company aims to lower expenses associated with its current three-tier web architecture, which consists of web, application, and database servers hosted on Amazon EC2 instances across development, testing, and production environments. During peak hours, these EC2 instances typically experience 30% CPU utilization, while non-peak hours see this drop to 10%. The production EC2 instances operate continuously, running 24/7, whereas the development and testing instances are active for at least 8 hours daily. To optimize costs, the company intends to automate the shutdown of development and testing EC2 instances when they are not in use. What EC2 instance purchasing option would be the most cost-effective solution to meet the company's needs?
{: .query}

- [ ] A. Utilize Spot Instances for production EC2 instances and Reserved Instances for development and testing EC2 instances.
{: .option}
- [x] B. Utilize Reserved Instances for the EC2 instances in production, while employing On-Demand Instances for development and testing EC2 instances.
{: .option}
- [ ] C. Utilize Spot blocks for the production EC2 instances, while employing Reserved Instances for the EC2 instances used in development and testing.
{: .option}
- [ ] D. Utilize On-Demand Instances for production EC2 instances, while employing Spot blocks for development and testing EC2 instances.
{: .option}

B
{: .answer}

The correct answer to the question is **B: Utilize Reserved Instances for the EC2 instances in production, while employing On-Demand Instances for development and testing EC2 instances**. Here's a detailed explanation of why this choice is the most cost-effective and how the other options fall short:

### Why Option B is Correct:

1. **Production Environment Needs**:
   - The production EC2 instances run 24/7 and have an average CPU utilization of 30% during peak hours. This consistent usage makes Reserved Instances (RIs) the most cost-effective option. RIs provide a significant discount (up to 75%) compared to On-Demand pricing in exchange for a commitment to use the instances for a one- or three-year term.

2. **Development and Testing Environment Needs**:
   - The development and test EC2 instances run for at least 8 hours each day. Since the usage is not constant and can vary, using On-Demand Instances for this environment allows flexibility. You only pay for what you use and can scale up or down as needed without a long-term commitment.

3. **Cost Efficiency**:
   - By using Reserved Instances for the production environment, the company locks in lower rates, while On-Demand for development and test environments avoids the risk of overcommitting resources that may not be used consistently.

### Why the Other Options Are Incorrect:

1. **Option A: Utilize Spot Instances for production EC2 instances and Reserved Instances for development and testing EC2 instances**:
   - Using Spot Instances for production is risky as they can be terminated by AWS with little notice when demand for capacity rises. This could lead to downtime or degraded performance, which is unacceptable for a production environment.

2. **Option C: Utilize Spot blocks for the production EC2 instances, while employing Reserved Instances for the EC2 instances used in development and testing**:
   - Spot blocks allow you to reserve Spot Instances for a fixed duration but still carry the risk of interruptions. This is unsuitable for production workloads that require high availability. Reserved Instances should be used for production to ensure consistent uptime.

3. **Option D: Utilize On-Demand Instances for production EC2 instances, while employing Spot blocks for development and testing EC2 instances**:
   - While On-Demand Instances provide flexibility, they are generally more expensive than Reserved Instances for environments with consistent usage like production. Using Spot blocks for development and testing could be cost-effective, but it introduces potential disruptions, making it less reliable than simply using On-Demand Instances when the workload is variable.

### Technical Details for AWS Solution Architect Associate Exam:

- **EC2 Pricing Models**:
  - **On-Demand Instances**: Pay for compute capacity by the hour or second, with no long-term commitments. Best for short-term, unpredictable workloads.
  - **Reserved Instances**: Reserve capacity for a one- or three-year term to receive a significant discount compared to On-Demand pricing. Ideal for steady-state usage.
  - **Spot Instances**: Purchase unused EC2 capacity at reduced rates. Cost-effective but can be interrupted if AWS needs the capacity back.
  - **Spot Blocks**: Reserve Spot Instances for a specified duration to minimize interruptions, but still subject to Spot pricing.

- **Capacity Planning**:
  - Understand your workload patterns (steady vs. variable) to choose the right pricing model. For predictable workloads, RIs are typically the best choice.

- **Automation**: 
  - Consider using AWS Lambda or CloudWatch Events to automate starting and stopping of EC2 instances based on usage patterns in non-production environments.

In summary, for the requirements outlined in the scenario, option B is the most logical and cost-efficient choice, balancing the needs for reliability in production with flexibility in development and testing.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company wants to reduce the cost of its existing three-tier web architecture. The web, application, and database servers are running on Amazon EC2 instances for the development, test, and production environments. The EC2 instances average 30% CPU utilization during peak hours and 10% CPU utilization during non-peak hours.
The production EC2 instances run 24 hours a day. The development and test EC2 instances run for at least 8 hours each day. The company plans to implement automation to stop the development and test EC2 instances when they are not in use.
Which EC2 instance purchasing solution will meet the company's requirements MOST cost-effectively?
{: .original-query}

### Original Questions

- [ ] A. Use Spot Instances for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.
{: .originaloption}
- [ ] B. Use Reserved Instances for the production EC2 instances. Use On-Demand Instances for the development and test EC2 instances.
{: .originaloption}
- [ ] C. Use Spot blocks for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.
{: .originaloption}
- [ ] D. Use On-Demand Instances for the production EC2 instances. Use Spot blocks for the development and test EC2 instances.
{: .originaloption}


### Comments


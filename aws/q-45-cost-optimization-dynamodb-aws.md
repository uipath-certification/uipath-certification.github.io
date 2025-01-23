---
layout: answered-question
title: "AWS A Company Is Planning To Use An Amazon Question"
meta: "AWS Exam Question: A company plans to use Amazon DynamoDB for data storage, focusing on cost optimization with unpredictable evening traffic. The answer includes DynamoDB Autoscaling."
slug: "q-45-cost-optimization-dynamodb-aws"
certification: "AWS Solution Architect Associate Exam"
---


 A company intends to utilize an Amazon DynamoDB table for data storage but is focused on optimizing costs. The table is expected to remain idle during most mornings, while the evenings will bring unpredictable fluctuations in read and write traffic, which can spike rapidly. What recommendations should a solutions architect provide in this scenario?
{: .query}

- [x] A. Set up a DynamoDB table using on-demand capacity mode.
{: .option}
- [ ] B. Set up a DynamoDB table that includes a global secondary index.
{: .option}
- [ ] C. Set up a DynamoDB table with provisioned capacity and enable auto scaling.
{: .option}
- [ ] D. Set up a DynamoDB table using provisioned capacity mode and configure it to function as a global table.
{: .option}

A
{: .answer}

The correct answer to the scenario presented is **A. Set up a DynamoDB table using on-demand capacity mode.** Here's an explanation of why this option is the best fit for the company's requirements and why the other options are less suitable.

### Explanation of the Correct Answer (A)

**On-Demand Capacity Mode** is designed to automatically scale to accommodate unpredictable workloads. This is particularly beneficial in the scenario provided, where the company experiences unpredictable read and write traffic, especially during the evenings. Here are the key points:

1. **Cost Efficiency**: In on-demand mode, you only pay for the read and write requests that you use. Since the table is not used most mornings, this means that the company will incur minimal costs during off-peak hours.

2. **Automatic Scaling**: On-demand capacity can handle sudden spikes in traffic without the need for manual intervention. This is crucial since the company expects traffic spikes to occur quickly.

3. **Simplicity**: On-demand capacity mode eliminates the need for capacity planning and scaling management, which is ideal for environments with unpredictable workloads.

### Explanation of the Incorrect Answers

- **B. Set up a DynamoDB table that includes a global secondary index.**
  - While a global secondary index (GSI) can enhance query flexibility by allowing queries on non-primary key attributes, it does not address the core requirement of traffic unpredictability and cost optimization. A GSI still requires a decision on provisioned or on-demand capacity, and in this scenario, it would not alleviate concerns about scaling during traffic spikes.

- **C. Set up a DynamoDB table with provisioned capacity and enable auto scaling.**
  - Provisioned capacity with auto-scaling does allow for scaling based on specific thresholds, but it requires pre-configured settings for minimum and maximum capacities. If the traffic spikes exceed the provisioned capacity quickly, there could be throttling, leading to performance degradation during peak times. This option also requires more management compared to the on-demand model.

- **D. Set up a DynamoDB table using provisioned capacity mode and configure it to function as a global table.**
  - While global tables provide multi-region replication and high availability, this option is overkill for the described scenario and does not specifically address the issue of unpredictable traffic. Additionally, using provisioned capacity may lead to cost inefficiencies and potential throttling during peak load times.

### Technical Details for AWS Solution Architect Associate Exam

1. **DynamoDB Capacity Modes**:
   - **On-Demand Mode**: Automatically scales to accommodate traffic. Ideal for applications with unpredictable workloads. No need to specify read/write capacity units.
   - **Provisioned Mode**: Requires the definition of read/write capacity units. It's suitable for predictable workloads where traffic patterns are known but requires management of scaling.

2. **Global Secondary Indexes (GSI)**:
   - Provides additional access patterns for your data, allowing queries on fields other than the primary key. However, they still rely on the underlying table's capacity mode.

3. **Auto Scaling**:
   - Can be configured for provisioned capacity to adjust read and write capacities based on CloudWatch metrics. However, it has limits and may not respond quickly enough for sudden spikes.

4. **Cost Considerations**:
   - Understanding the billing model for DynamoDB is crucial. With on-demand capacity, you pay per request, while provisioned capacity incurs charges based on allocated throughput, regardless of usage.

5. **Throttling**:
   - When traffic exceeds provisioned capacity, DynamoDB throttles requests, leading to errors and lower application performance. This is an important consideration for any design that involves variable workloads.

By choosing the on-demand capacity model, the company can ensure both cost optimization and performance reliability, especially given the unpredictable nature of their traffic.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is planning to use an Amazon DynamoDB table for data storage. The company is concerned about cost optimization. The table will not be used on most mornings. In the evenings, the read and write traffic will often be unpredictable. When traffic spikes occur, they will happen very quickly.
What should a solutions architect recommend?
{: .original-query}

### Original Questions

- [ ] A. Create a DynamoDB table in on-demand capacity mode.
{: .originaloption}
- [ ] B. Create a DynamoDB table with a global secondary index.
{: .originaloption}
- [ ] C. Create a DynamoDB table with provisioned capacity and auto scaling.
{: .originaloption}
- [ ] D. Create a DynamoDB table in provisioned capacity mode, and configure it as a global table.
{: .originaloption}


### Comments

--- 
On-demand capacity mode is an advantageous choice under certain circumstances, including:

- The establishment of new tables where workload patterns are not yet defined.
- Situations involving variable and unpredictable application traffic.
- A preference for a billing model that allows payment solely based on actual usage, thereby enhancing cost efficiency. 

This mode is particularly beneficial for applications where traffic patterns are inconsistent or subject to sudden changes, as it automatically adjusts to accommodate fluctuating workloads without requiring manual intervention or pre-provisioning of capacity.
{: .comment}
--- 
The best approach here is to go with on-demand capacity mode! 🌟 It’s like having a magic switch that adapts to your traffic needs without breaking the bank. You can find more about it [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand).

Now, let's talk about the other options: 
- **B** isn’t quite fitting since a global secondary index won’t help much with unpredictable traffic. It's like bringing an umbrella on a sunny day—you won’t need it! ☀️
- **C** suggests using provisioned capacity, which is perfect for stable traffic patterns, but that’s not the case here. It’s like trying to use a map in a world where roads change every day—good luck with that! 🗺️
- **D** is pretty much the same story as C; you’d be setting yourself up for a wild ride on the traffic rollercoaster. 🎢 

So, in short, stick with the on-demand option for a smoother, cost-effective journey! 💰🚀
{: .comment}
--- 
Thanks for that! Your reference link undeniably champions option "A." Absolutely spot on.
{: .comment}
--- 
For a scenario with unpredictable traffic patterns, utilizing on-demand mode is an excellent choice. This approach allows the DynamoDB table to automatically adjust to varying workloads without the need for manual intervention. It ensures that the company only pays for the read and write requests it actually uses, making it a cost-effective solution. On-demand capacity mode is particularly advantageous during peak traffic times, as it can seamlessly handle sudden spikes in demand while maintaining performance. This flexibility and efficiency make it an ideal option for managing fluctuating workloads effectively.
{: .comment}
--- 
The on-demand mode of DynamoDB is a fantastic choice for handling those unpredictable workloads with ease and flair! 🌟 It allows your data to dance to the rhythm of varying traffic, effortlessly adjusting to meet your needs without any fuss. This flexibility ensures you only pay for what you use, making it a delightful option for cost-conscious planning!
{: .comment}

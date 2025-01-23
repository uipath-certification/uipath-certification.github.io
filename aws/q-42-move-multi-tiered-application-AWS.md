---
layout: answered-question
title: "AWS A Company Wants To Move A Multi-Tiered Question"
meta: "AWS Exam Question: A company seeks to migrate a multi-tiered application to AWS, enhancing performance and resolving transaction overloads. Find the answer, involving AWS services like EC2 and Elastic Load Balancing."
slug: "q-42-move-multi-tiered-application-AWS"
certification: "AWS Solution Architect Associate Exam"
---


 A company aims to enhance the performance of its multi-tiered application by migrating it from on-premises infrastructure to the AWS Cloud. The application comprises various tiers that interact through RESTful services, but transactions fail when one of the tiers experiences overload. A solutions architect is tasked with designing a solution that addresses these challenges while modernizing the application. 

What solution would best fulfill these requirements and offer the highest level of operational efficiency?
{: .query}

- [x] A. Implement Amazon API Gateway to route transactions to AWS Lambda functions, serving as the application layer. Utilize Amazon Simple Queue Service (Amazon SQS) to facilitate communication between the application services.
{: .option}
- [ ] B. Utilize Amazon CloudWatch metrics to review the historical performance of the application in order to identify the maximum server utilization during periods of performance issues. Scale up the Amazon EC2 instance sizes for the application servers to accommodate the peak demands.
{: .option}
- [ ] C. Utilize Amazon Simple Notification Service (Amazon SNS) to manage communication among application servers operating on Amazon EC2 within an Auto Scaling group. Employ Amazon CloudWatch to keep track of the SNS queue length and adjust the scale as necessary.
{: .option}
- [ ] D. Utilize Amazon Simple Queue Service (Amazon SQS) to manage messaging among application servers operating on Amazon EC2 within an Auto Scaling group. Implement Amazon CloudWatch to keep track of the SQS queue length and increase capacity when any communication issues arise.
{: .option}

A
{: .answer}

The correct answer is **A: Implement Amazon API Gateway to route transactions to AWS Lambda functions, serving as the application layer. Utilize Amazon Simple Queue Service (Amazon SQS) to facilitate communication between the application services.**

### Explanation of the Correct Answer (A):

1. **Serverless Architecture**: By using AWS Lambda through API Gateway, the company can adopt a serverless architecture, which abstracts the infrastructure management. This reduces operational overhead and allows the application to scale automatically in response to demand.

2. **RESTful Services Management**: Amazon API Gateway efficiently manages RESTful APIs, including routing, throttling, and authorization, which are crucial for handling incoming requests and ensuring that the application can manage load effectively without dropping transactions.

3. **Decoupling with SQS**: By using Amazon SQS, the application tiers can communicate asynchronously. This decoupling helps prevent overload on any single tier since messages can be queued and processed at the pace that the receiving service can handle. If one tier is busy or down, messages can still be queued without losing data.

4. **Operational Efficiency**: Overall, this solution minimizes the need for provisioning and managing servers, which is highly beneficial for operational efficiency. The combination of API Gateway and Lambda also results in a cost-effective solution as you pay only for the compute time you consume.

### Why the Other Options Are Incorrect:

**B: Scale Up EC2 Instances**
- **Manual scaling**: This approach involves manually scaling up EC2 instances based on performance metrics. While it can address performance issues, it does not provide the same level of operational efficiency as a serverless model. Additionally, scaling up can lead to increased costs and doesn't resolve the fundamental issue of transaction drops during peak loads.
- **Reactive rather than proactive**: Waiting to analyze historical performance data means the response to high demand is reactive rather than proactive, which could lead to down times and lost transactions.

**C: Use SNS Within an Auto Scaling Group**
- **Not for message queuing**: Amazon Simple Notification Service (SNS) is designed for pub/sub messaging and is not ideal for managing message queues. It does not provide the same level of message durability or visibility into queue length as SQS.
- **Complexity**: While SNS can be useful in some architectures, managing communication among EC2 instances in an Auto Scaling group through SNS can increase complexity and does not directly address the issue of transaction overload.

**D: Use SQS Within an Auto Scaling Group**
- **Lack of API management**: While SQS is a good choice for managing messages, this option lacks the immediate API management that API Gateway provides. It does not directly address routing incoming requests or managing RESTful services.
- **Still requires EC2 management**: Operating within an Auto Scaling group means that the user still has to manage EC2 instances, which adds operational overhead compared to a fully serverless solution.

### Technical Details for AWS Solutions Architect Associate Exam:

1. **AWS Lambda**: Understand how Lambda works, its limits (maximum execution time, memory allocation), and the event-driven nature of serverless architecture.
2. **API Gateway**: Familiarize yourself with API Gateway features like throttling, caching, authorization, and how it integrates with Lambda.
3. **Amazon SQS**: Know the difference between standard and FIFO queues, how message visibility works, and the benefits of decoupling application components.
4. **Auto Scaling**: Learn how Auto Scaling works, how to configure scaling policies, and the metrics that can trigger scaling actions.
5. **Monitoring with CloudWatch**: Understand how to set up CloudWatch alarms, metrics, and logs for monitoring application performance.

By grasping these concepts, candidates can better understand AWS services' capabilities and make informed decisions about application architecture in the cloud.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company wants to move a multi-tiered application from on premises to the AWS Cloud to improve the application's performance. The application consists of application tiers that communicate with each other by way of RESTful services. Transactions are dropped when one tier becomes overloaded. A solutions architect must design a solution that resolves these issues and modernizes the application.
Which solution meets these requirements and is the MOST operationally efficient?
{: .original-query}

### Original Questions

- [ ] A. Use Amazon API Gateway and direct transactions to the AWS Lambda functions as the application layer. Use Amazon Simple Queue Service (Amazon SQS) as the communication layer between application services.
{: .originaloption}
- [ ] B. Use Amazon CloudWatch metrics to analyze the application performance history to determine the servers' peak utilization during the performance failures. Increase the size of the application server's Amazon EC2 instances to meet the peak requirements.
{: .originaloption}
- [ ] C. Use Amazon Simple Notification Service (Amazon SNS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SNS queue length and scale up and down as required.
{: .originaloption}
- [ ] D. Use Amazon Simple Queue Service (Amazon SQS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SQS queue length and scale up when communication failures are detected.
{: .originaloption}


### Comments

--- 
Option A is the most effective solution as it leverages AWS Lambda to provide a serverless architecture that automatically scales based on demand, thus modernizing the application. The use of Amazon API Gateway facilitates the routing of transactions to these Lambda functions, ensuring efficient management of application logic without the need for server provisioning and maintenance. Additionally, incorporating Amazon Simple Queue Service (Amazon SQS) allows for decoupling the application tiers, which mitigates the risk of dropped transactions by buffering requests during peak loads. This design enhances the overall reliability and performance of the application, ensuring seamless communication between the various tiers.
{: .comment}
--- 
The motto here should be "scale up only when communication hiccups are spotted!" 🚀 Relying on communication failures as a trigger for scaling is like trying to fix a leaky faucet after your kitchen's already flooded—definitely not the best approach! 🌊 So, option D isn’t the right fit for this scenario. Let’s aim for proactive solutions instead! 😄
{: .comment}
--- 
Absolutely on target! 

A company is keen on transitioning its multi-tiered application from an on-premises setup to the AWS Cloud, aiming to enhance performance. This application comprises various tiers that interact through RESTful services. Unfortunately, transactions tend to get dropped whenever one of the tiers is overwhelmed. A solutions architect is tasked with crafting a fix that not only addresses these hiccups but also modernizes the application.

To tackle this, the most operationally efficient solution would involve leveraging Amazon Simple Queue Service (Amazon SQS) to handle messaging between the application servers running on Amazon EC2 within an Auto Scaling group. Implementing Amazon CloudWatch would be essential for monitoring the SQS queue length, allowing for timely adjustments when communication issues arise.

Why SQS, you ask? Well, it’s like giving your application a safety net. It ensures that messages are queued up neatly when things get hectic, preventing transaction losses. And with Auto Scaling, your application can flexibly scale its resources based on demand, ensuring smooth sailing even during traffic spikes.

So, while some might suggest simply beefing up EC2 instances or relying on other services, SQS combined with CloudWatch is the secret sauce for both robustness and efficiency. It's like having a steady hand on the wheel while navigating the choppy waters of application performance.
{: .comment}
--- 
A company is transitioning its multi-tiered application from on-premises infrastructure to the AWS Cloud with the goal of enhancing performance. The application consists of various tiers that interact through RESTful services. However, when one of the tiers experiences high demand, transactions can be interrupted. A solutions architect is tasked with creating a strategy that not only addresses these challenges but also modernizes the application.

To achieve the best operational efficiency, the recommended approach involves utilizing Amazon Simple Queue Service (Amazon SQS) to manage messaging between the application servers running on Amazon EC2 instances within an Auto Scaling group. Additionally, implementing Amazon CloudWatch will enable monitoring of the SQS queue length, allowing for adjustments in capacity whenever communication challenges arise. This solution ensures a resilient architecture that can effectively handle variable workloads while maintaining seamless communication across application tiers.
{: .comment}
--- 
D suggests: "Leverage the power of Amazon CloudWatch to keep an eye on the SQS queue length and automatically adjust capacity whenever communication hiccups arise! 🎉"
{: .comment}

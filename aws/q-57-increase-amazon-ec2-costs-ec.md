---
layout: answered-question
title: "AWS A Company Observes An Increase In Amazon EC2 Costs Question"
meta: "AWS Exam Question: A company sees rising Amazon EC2 costs due to unwanted vertical scaling. How can a solutions architect analyze this with minimal overhead? Answer: CloudWatch."
slug: "q-57-increase-amazon-ec2-costs-ec"
certification: "AWS Solution Architect Associate Exam"
---


 A company has noted a rise in its Amazon EC2 expenses on the latest bill. The billing team has identified that a few EC2 instances have undergone unnecessary vertical scaling in their instance types. To investigate the underlying reasons for this vertical scaling, a solutions architect needs to create a graph that compares the EC2 costs over the past two months and conduct a detailed analysis. What is the most efficient way for the solutions architect to obtain this information with minimal operational overhead?
{: .query}

- [ ] A. Utilize AWS Budgets to generate a budget report and analyze EC2 expenses according to instance types.
{: .option}
- [x] B. Utilize the detailed filtering option in Cost Explorer to conduct a thorough analysis of EC2 expenses categorized by instance types.
{: .option}
- [ ] C. Utilize the graphs available in the AWS Billing and Cost Management dashboard to analyze EC2 expenses related to different instance types over the past two months.
{: .option}
- [ ] D. Generate a report using AWS Cost and Usage Reports and upload it to an Amazon S3 bucket. Utilize Amazon QuickSight, sourcing data from Amazon S3, to create an interactive graph that visualizes different instance types.
{: .option}

B
{: .answer}

The correct answer is **B. Utilize the detailed filtering option in Cost Explorer to conduct a thorough analysis of EC2 expenses categorized by instance types.**

### Explanation of the Correct Answer (B):

**Cost Explorer** is a powerful tool provided by AWS that allows users to visualize, understand, and manage their AWS costs and usage. By utilizing the detailed filtering options in Cost Explorer, the solutions architect can:

1. **Filter by Instance Type**: This option allows for a granular view of costs, enabling the identification of specific instances that are contributing to increased costs due to vertical scaling.
   
2. **Time Frame Selection**: Cost Explorer can analyze costs over customized time frames, such as the last two months, which is essential for the task at hand.
   
3. **Visualization Tools**: Cost Explorer includes built-in graphing and visualization options, which simplifies the process of comparing expenses over time without needing additional tools or configurations.

4. **Ease of Use**: Cost Explorer requires minimal setup and maintenance, thus providing the least operational overhead compared to other options.

### Why the Other Options are Incorrect:

**A. Utilize AWS Budgets to generate a budget report and analyze EC2 expenses according to instance types.**

- **Reason**: AWS Budgets is primarily used for tracking spending against predefined budgets. While it can provide insights into overspending, it is not designed for detailed analysis of costs or usage patterns. It lacks the granularity and visualization capabilities necessary for identifying specific instances contributing to cost increases.

**C. Utilize the graphs available in the AWS Billing and Cost Management dashboard to analyze EC2 expenses related to different instance types over the past two months.**

- **Reason**: The AWS Billing and Cost Management dashboard provides high-level insights but does not offer the same level of detail as Cost Explorer. The graphs are more general and lack the filtering options needed to drill down into specific instance types, making it less effective for in-depth analysis.

**D. Generate a report using AWS Cost and Usage Reports and upload it to an Amazon S3 bucket. Utilize Amazon QuickSight, sourcing data from Amazon S3, to create an interactive graph that visualizes different instance types.**

- **Reason**: While this is a valid approach, it involves multiple steps and components (generating reports, uploading to S3, and using QuickSight). This method introduces more operational overhead and complexity compared to using Cost Explorer directly, which is more streamlined and user-friendly for immediate analysis.

### Technical Details for AWS Solution Architect Associate Exam:

1. **AWS Cost Explorer**:
   - Understand how to access and utilize Cost Explorer within the AWS Management Console.
   - Familiarize yourself with the filtering options available, including filtering by linked accounts, services, usage types, and tags.
   - Learn about visualizing cost trends and forecasting future costs based on historical data.

2. **AWS Budgets**:
   - Know how to set up budgets for cost and usage, and understand the different types of budgets available (cost, usage, RI utilization, etc.).

3. **AWS Billing and Cost Management Dashboard**:
   - Recognize the components of the dashboard, including cost and usage reports, but understand its limitations for detailed analysis.

4. **AWS Cost and Usage Reports (CUR)**:
   - Understand how to create and configure CUR for detailed billing insights and how to store and analyze this data using other AWS services like S3 and QuickSight.

5. **Best Practices for Cost Management**:
   - Familiarize yourself with AWS cost management best practices, including utilizing tagging for resource tracking and optimization of instance types based on workload needs.

By mastering these concepts, you will be better prepared to answer questions related to cost management and analysis on the AWS Solution Architect Associate Exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted vertical scaling of instance types for a couple of EC2 instances. A solutions architect needs to create a graph comparing the last 2 months of EC2 costs and perform an in-depth analysis to identify the root cause of the vertical scaling.
How should the solutions architect generate the information with the LEAST operational overhead?
{: .original-query}

### Original Questions

- [ ] A. Use AWS Budgets to create a budget report and compare EC2 costs based on instance types.
{: .originaloption}
- [ ] B. Use Cost Explorer's granular filtering feature to perform an in-depth analysis of EC2 costs based on instance types.
{: .originaloption}
- [ ] C. Use graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance types for the last 2 months.
{: .originaloption}
- [ ] D. Use AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket. Use Amazon QuickSight with Amazon S3 as a source to generate an interactive graph based on instance types.
{: .originaloption}


### Comments


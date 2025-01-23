---
layout: answered-question
title: "AWS A Company Hosts Its Multi-Tier Applications Question"
meta: "AWS Exam Question: A company needs to track configuration changes and API call history for compliance and security on its multi-tier applications hosted on AWS. Answer: AWS CloudTrail, AWS Config."
slug: "q-47-multi-tier-applications-aws-CA"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates its multi-tier applications on AWS and needs to ensure compliance, governance, auditing, and security. To achieve this, they must monitor configuration changes to their AWS resources and maintain a history of the API calls made to these resources. What steps should a solutions architect take to fulfill these requirements?
{: .query}

- [ ] A. Utilize AWS CloudTrail for monitoring configuration changes and employ AWS Config to log API calls.
{: .option}
- [x] B. Utilize AWS Config to monitor configuration modifications and employ AWS CloudTrail to log API requests.
{: .option}
- [ ] C. Utilize AWS Config to monitor configuration alterations and employ Amazon CloudWatch to log API requests.
{: .option}
- [ ] D. Utilize AWS CloudTrail to monitor configuration modifications and employ Amazon CloudWatch to log API requests.
{: .option}

B
{: .answer}

The correct answer is **B. Utilize AWS Config to monitor configuration modifications and employ AWS CloudTrail to log API requests.**

### Explanation of Correct Answer (B)

1. **AWS Config**: This service is designed specifically to track the configuration changes of your AWS resources. It provides a detailed view of the configuration of AWS resources in your account and can notify you of any changes or compliance issues. AWS Config allows you to track changes over time, enabling you to see the history of configuration modifications. This is crucial for compliance, governance, and auditing.

2. **AWS CloudTrail**: This service logs all API calls made within your AWS account. It captures details about the requests made to AWS services, including who made the request, when it was made, and what actions were taken. This logging is critical for security and auditing purposes, as it allows you to track user and service activity across your AWS environment.

In summary, using AWS Config for monitoring configuration changes and AWS CloudTrail for logging API calls meets the company's needs for compliance, governance, auditing, and security.

### Why the Other Options Are Incorrect

1. **Option A (Utilize AWS CloudTrail for monitoring configuration changes and employ AWS Config to log API calls)**:
   - This option reverses the roles of AWS Config and AWS CloudTrail. AWS CloudTrail does not monitor configuration changes; it logs API calls. Therefore, this option does not align with the specific functions of these services.

2. **Option C (Utilize AWS Config to monitor configuration alterations and employ Amazon CloudWatch to log API requests)**:
   - While AWS Config is correctly used to monitor configuration changes, Amazon CloudWatch is not designed to log API requests. CloudWatch is primarily for monitoring metrics and logs for resources and applications. It does not keep a record of API calls in the same way that CloudTrail does.

3. **Option D (Utilize AWS CloudTrail to monitor configuration modifications and employ Amazon CloudWatch to log API requests)**:
   - Similar to Option A, this option incorrectly assigns the function of monitoring configuration changes to AWS CloudTrail. CloudTrail does not monitor configuration changes; it logs API calls. Therefore, this option is also incorrect.

### Technical Details for AWS Solution Architect Associate Exam

- **AWS Config**: Understand how AWS Config rules can be created to check the compliance of resource configurations against a set of predefined or custom rules. Be familiar with the concept of configuration history and snapshot capabilities of AWS Config.

- **AWS CloudTrail**: Know how to enable CloudTrail in your AWS account and what information it logs. Understand the importance of CloudTrail for security audits, including how it can be used to investigate security incidents or unauthorized access.

- **CloudWatch**: While it is not the correct choice for logging API requests in this context, understanding CloudWatch’s role in monitoring resource metrics and setting alarms can still be beneficial.

- **Integration of Services**: Be able to discuss how AWS Config and AWS CloudTrail can work together to provide a comprehensive view of resource configurations and API activity, which is critical for maintaining compliance in cloud environments.

By familiarizing yourself with these services, their capabilities, and their proper use cases, you will be better prepared for the AWS Solutions Architect Associate Exam and real-world scenarios.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its AWS resources and record a history of API calls made to these resources.
What should a solutions architect do to meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Use AWS CloudTrail to track configuration changes and AWS Config to record API calls.
{: .originaloption}
- [ ] B. Use AWS Config to track configuration changes and AWS CloudTrail to record API calls.
{: .originaloption}
- [ ] C. Use AWS Config to track configuration changes and Amazon CloudWatch to record API calls.
{: .originaloption}
- [ ] D. Use AWS CloudTrail to track configuration changes and Amazon CloudWatch to record API calls.
{: .originaloption}


### Comments


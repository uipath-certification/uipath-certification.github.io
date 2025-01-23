---
layout: answered-question
title: "AWS Company Hosts Its Web Applications Question"
meta: "AWS Exam Question: A company uses Elastic Load Balancers and AWS Certificate Manager. How to notify 30 days before certificate expiration? Answer: CloudWatch."
slug: "q-87-company-hosts-web-apps-aws-acm"
certification: "AWS Solution Architect Associate Exam"
---


 A company utilizes AWS Cloud to host its web applications and has configured Elastic Load Balancers with certificates imported into AWS Certificate Manager (ACM). To ensure compliance, the security team needs to receive notifications 30 days prior to the expiration of each certificate. What recommendations should a solutions architect provide to fulfill this requirement?
{: .query}

- [ ] A. Implement a rule in ACM to send a custom message to an Amazon Simple Notification Service (Amazon SNS) topic daily, starting 30 days prior to the expiration of any certificate.
{: .option}
- [x] B. Establish an AWS Config rule to monitor for certificates set to expire in the next 30 days. Set up Amazon EventBridge (formerly Amazon CloudWatch Events) to trigger a custom alert using Amazon Simple Notification Service (Amazon SNS) whenever AWS Config identifies a noncompliant resource.
{: .option}
- [ ] C. Utilize AWS Trusted Advisor to identify any certificates that are set to expire in the next 30 days. Set up an Amazon CloudWatch alarm that monitors Trusted Advisor metrics for any changes in check status. Configure this alarm to dispatch a personalized alert through Amazon Simple Notification Service (Amazon SNS).
{: .option}
- [ ] D. Set up an Amazon EventBridge (formerly known as Amazon CloudWatch Events) rule to identify any certificates set to expire within the next 30 days. Ensure that the rule triggers an AWS Lambda function. Additionally, configure the Lambda function to dispatch a custom notification using Amazon Simple Notification Service (Amazon SNS).
{: .option}

B
{: .answer}

The correct answer to the question is **D. Set up an Amazon EventBridge (formerly known as Amazon CloudWatch Events) rule to identify any certificates set to expire within the next 30 days. Ensure that the rule triggers an AWS Lambda function. Additionally, configure the Lambda function to dispatch a custom notification using Amazon Simple Notification Service (Amazon SNS).** 

### Reasoning for Correct Answer (D)

1. **EventBridge for Monitoring**: Amazon EventBridge is a serverless event bus that enables you to connect application data from various sources. By setting up rules in EventBridge, you can filter for specific events, such as certificate expiration notifications.
   
2. **Lambda for Custom Logic**: AWS Lambda allows you to run code in response to events. In this case, the Lambda function can be triggered by the EventBridge rule when a certificate is detected to be expiring within the next 30 days. You can define specific logic in the Lambda function to format and send the notification.

3. **SNS for Notifications**: Amazon Simple Notification Service (SNS) is a fully managed messaging service that allows you to send notifications to subscribers. By integrating SNS with Lambda, you can ensure that the security team receives timely notifications about the upcoming expirations.

### Reasons Why Other Options Are Incorrect

- **A. Implement a rule in ACM to send a custom message to an Amazon Simple Notification Service (Amazon SNS) topic daily, starting 30 days prior to the expiration of any certificate.**
   - **Why Incorrect**: AWS Certificate Manager (ACM) does not have built-in functionality to send daily notifications or alerts based on certificate expiration. You cannot directly create a rule in ACM that interacts with SNS. Therefore, this option does not fulfill the requirement.

- **B. Establish an AWS Config rule to monitor for certificates set to expire in the next 30 days. Set up Amazon EventBridge (formerly Amazon CloudWatch Events) to trigger a custom alert using Amazon Simple Notification Service (Amazon SNS) whenever AWS Config identifies a noncompliant resource.**
   - **Why Incorrect**: While AWS Config can monitor resources and rules can be set for compliance, it does not directly track certificate expiration dates. This option is overly complex and not the best fit since ACM and EventBridge can handle expiration notifications more effectively.

- **C. Utilize AWS Trusted Advisor to identify any certificates that are set to expire in the next 30 days. Set up an Amazon CloudWatch alarm that monitors Trusted Advisor metrics for any changes in check status. Configure this alarm to dispatch a personalized alert through Amazon Simple Notification Service (Amazon SNS).**
   - **Why Incorrect**: AWS Trusted Advisor does not provide real-time monitoring or notifications specifically for certificate expiration. It is a best practice tool that gives you insights but is not designed for actionable alerts like EventBridge and Lambda. Additionally, the delay in reporting can lead to missed notifications.

### Technical Details for the AWS Solutions Architect Associate Exam

1. **AWS Certificate Manager (ACM)**: Understand how ACM manages SSL/TLS certificates and integrates with other AWS services. Be familiar with how to import and manage certificates and how expiration affects service availability.

2. **Amazon EventBridge**: Know how to create rules that respond to events from AWS services. Understand how to filter events and route them to different targets, such as Lambda functions or SNS topics.

3. **AWS Lambda**: Get comfortable writing simple Lambda functions and deploying them. Understand IAM roles and permissions required for Lambda to execute and to interact with other AWS services like SNS.

4. **Amazon SNS**: Understand how to create topics and subscriptions, and how to send notifications through SNS. Familiarize yourself with different protocols for SNS notifications (e.g., email, SMS, HTTP).

5. **AWS Config**: Know how AWS Config works to record and evaluate the configurations of your AWS resources, though it may not be the most suitable tool for monitoring certificate expirations.

By comprehensively understanding these components and how they interact, you'll be better prepared for the AWS Solutions Architect Associate exam and practical scenarios in AWS environments.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company hosts its web applications in the AWS Cloud. The company configures Elastic Load Balancers to use certificates that are imported into AWS Certificate Manager (ACM). The company's security team must be notified 30 days before the expiration of each certificate.
What should a solutions architect recommend to meet this requirement?
{: .original-query}

### Original Questions

- [ ] A. Add a rule in ACM to publish a custom message to an Amazon Simple Notification Service (Amazon SNS) topic every day, beginning 30 days before any certificate will expire.
{: .originaloption}
- [ ] B. Create an AWS Config rule that checks for certificates that will expire within 30 days. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple Notification Service (Amazon SNS) when AWS Config reports a noncompliant resource.
{: .originaloption}
- [ ] C. Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).
{: .originaloption}
- [ ] D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).
{: .originaloption}


### Comments


---
layout: answered-question
title: "AWS A Company That Hosts Its Web Application Question"
meta: "AWS Exam Question: A company hosting a web app on AWS wants to ensure all EC2, RDS, and Redshift instances are tagged to minimize configuration effort. Answer: AWS Config."
slug: "q-27-hosts-web-application-aws-ec2"
certification: "AWS Solution Architect Associate Exam"
---


 A company hosting its web application on AWS aims to ensure that all Amazon EC2 instances, Amazon RDS DB instances, and Amazon Redshift clusters are properly tagged. To reduce the effort involved in configuring and managing this tagging verification, what steps should a solutions architect take to achieve this goal?
{: .query}

- [x] A. Implement AWS Config rules to identify and monitor resources that lack proper tagging.
{: .option}
- [ ] B. Utilize Cost Explorer to identify resources that lack proper tagging. Manually tag those resources.
{: .option}
- [ ] C. Develop API calls to verify the correct allocation of tags across all resources. Execute the code on an EC2 instance at regular intervals.
{: .option}
- [ ] D. Create API calls to verify that all resources have the correct tags assigned. Set up an AWS Lambda function using Amazon CloudWatch to execute the code at regular intervals.
{: .option}

A
{: .answer}

The correct answer is **A. Implement AWS Config rules to identify and monitor resources that lack proper tagging.**

### Explanation of the Correct Answer (A):
AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. By implementing AWS Config rules, you can automatically check the tagging compliance of your resources, including Amazon EC2 instances, Amazon RDS DB instances, and Amazon Redshift clusters. 

**Key Benefits of Using AWS Config:**
1. **Automation**: AWS Config can continuously monitor your resources and automatically evaluate their configurations against the specified rules. This reduces manual effort significantly.
2. **Compliance Monitoring**: You can set rules to enforce tagging standards, and AWS Config will notify you of any non-compliant resources. This ensures ongoing compliance without needing constant manual checks.
3. **Detailed History**: AWS Config maintains a history of your resource configurations, which is useful for auditing and compliance purposes.
4. **Integrations**: It can easily integrate with AWS Lambda and other AWS services for notifications and remediation actions.

### Why the Other Options are Incorrect:

**B. Utilize Cost Explorer to identify resources that lack proper tagging. Manually tag those resources.**
- **Limitations**: While Cost Explorer can provide insights into resource costs based on tags, it does not automatically identify resources that lack tags. It requires manual intervention to tag resources, which contradicts the requirement to minimize effort. This approach is reactive rather than proactive.
- **Manual Effort**: The need for manual tagging means that there is a significant effort involved to ensure compliance, especially as resources scale.

**C. Develop API calls to verify the correct allocation of tags across all resources. Execute the code on an EC2 instance at regular intervals.**
- **Complexity**: This approach requires custom development and maintenance of code to check tagging compliance. It could lead to operational overhead and complications, especially if the number of resources grows.
- **Scalability**: As your infrastructure grows, maintaining and scaling custom scripts can become cumbersome and error-prone.

**D. Create API calls to verify that all resources have the correct tags assigned. Set up an AWS Lambda function using Amazon CloudWatch to execute the code at regular intervals.**
- **Similar to C**: While this option leverages serverless architecture, it still requires custom development for API calls and tagging verification. This can lead to higher complexity and maintenance burdens.
- **Not Out-of-the-Box**: AWS Config provides built-in capabilities for monitoring resource configurations, including tags, without the need for custom API calls or additional code.

### Technical Details for AWS Solution Architect Associate Exam Preparation:
1. **AWS Config Rules**:
   - Understand how to create and manage AWS Config rules, including managed rules like `required-tags` which ensures that specified tags are present on resources.
   - Familiarize yourself with the concept of non-compliant resources and remediation actions in AWS Config.

2. **AWS Services Integration**:
   - Learn how AWS Config integrates with other AWS services (e.g., AWS Lambda for remediation, SNS for notifications).

3. **Tagging Best Practices**:
   - Understand the importance of tagging for resource management and cost allocation. Tags can provide metadata that helps in identifying resource ownership, environment (production vs. development), and cost centers.

4. **Compliance and Governance**:
   - Know the role of AWS Config in maintaining compliance with organizational policies and regulatory requirements.

By focusing on these details and understanding the benefits of AWS Config, candidates can better prepare for the AWS Solution Architect Associate exam and ensure they can design solutions that meet organizational needs effectively.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances. Amazon RDS DB instances. and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check.
What should a solutions architect do to accomplish this?
{: .original-query}

### Original Questions

- [ ] A. Use AWS Config rules to define and detect resources that are not properly tagged.
{: .originaloption}
- [ ] B. Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.
{: .originaloption}
- [ ] C. Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.
{: .originaloption}
- [ ] D. Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code.
{: .originaloption}


### Comments

--- 
AWS Config is a powerful service designed to assess, audit, and evaluate the configurations of your AWS resources. It allows you to establish rules that can enforce tagging policies automatically. By setting up an AWS Config rule, you can specify the desired tag key and value, along with the resources to which these tags should be applied.

Once you configure the rule, AWS Config will monitor the specified resources. It will automatically apply the designated tags when new resources are created or when existing resources undergo configuration changes. This approach minimizes manual oversight and ensures consistent tagging across your Amazon EC2 instances, Amazon RDS DB instances, and Amazon Redshift clusters. 

Implementing AWS Config not only streamlines the tagging process but also enhances compliance and governance by providing visibility into resource configurations and their associated tags. This automated solution is beneficial for maintaining order and organization within your AWS environment, facilitating better resource management and cost allocation.
{: .comment}
--- 
Well, well, well! It seems like we've stumbled upon a gem of a response! 🎉 It's the first time I've seen ChatGPT actually nail it here on ExamTopics. But let’s not get too cozy—using ChatGPT for this kind of thing can lead to some pretty wild goose chases. 🦆 Why, you ask? Because it essentially just regurgitates what it has come across in the vast ocean of written content, with no real understanding of the context. ChatGPT doesn’t have the insider scoop on AWS services, folks! So, let’s take its "answers" with a pinch of caution—like seasoning on a bland dish! 😄
{: .comment}
--- 
I gave Bing AI a whirl, and let me tell you, it often hit the nail on the head. But, surprise surprise, the accuracy was largely tied to how well I crafted my prompts. Who knew that a little finesse in wording could make such a difference?
{: .comment}
--- 
AWS Config offers a robust set of pre-defined and customizable rules designed to assess the configuration and compliance of AWS resources. By either creating a tailored rule or utilizing the existing tagging rule, you can specify the necessary tags for EC2 instances, RDS database instances, and Redshift clusters. AWS Config continuously monitors these resources, generating configuration change events and evaluation results in real time.

By harnessing the power of AWS Config, you can automatically identify any resources that do not meet the established tagging standards. This proactive approach significantly reduces the need for manual audits or scheduled code executions, ultimately decreasing operational complexity. Moreover, AWS Config has the capability to automatically remediate non-compliant resources by invoking Lambda functions or sending alerts, which further simplifies the configuration management process.

Utilizing Cost Explorer focuses primarily on cost management and does not directly enforce tagging compliance. On the other hand, developing API calls to verify tagging and executing them manually or through scheduled Lambda functions requires more ongoing effort and maintenance than leveraging AWS Config rules. Embracing AWS Config not only enhances efficiency but also ensures that your tagging strategy remains consistent and effective.
{: .comment}
--- 
With the delightful capabilities of AWS Config, we can effortlessly manage our resource tags! 🌟 This wonderful tool allows us to tag all our resources and then filter them to easily identify which ones are tagged and which ones are not. It's like having a magical tagging wand that helps keep everything organized and tidy!
{: .comment}

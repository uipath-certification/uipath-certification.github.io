---
layout: answered-question
title: "AWS A Company Is Launching A New Application Question"
meta: "AWS Exam Question: A company needs to provide the product manager access to an Amazon CloudWatch dashboard following least privilege. What's the answer? IAM roles."
slug: "q-27-launching-new-application-metrics-CW"
certification: "AWS Solution Architect Associate Exam"
---


 A company is set to launch a new application and plans to showcase application metrics on an Amazon CloudWatch dashboard. The product manager, who needs periodic access to this dashboard, currently does not possess an AWS account. A solutions architect is tasked with granting access to the product manager while adhering to the principle of least privilege. What solution would effectively fulfill these requirements?
{: .query}

- [x] A. Distribute the dashboard via the CloudWatch console. Input the email address of the product manager and follow the necessary steps to share it. Send a shareable link of the dashboard to the product manager.
{: .option}
- [ ] B. Set up an IAM user exclusively for the product manager. Assign the AWS managed policy CloudWatchReadOnlyAccess to this user. Provide the product manager with the new login details. Also, share the URL of the appropriate dashboard with them.
{: .option}
- [ ] C. Set up an IAM user for the employees of the company. Assign the ViewOnlyAccess AWS managed policy to this IAM user. Provide the product manager with the new login credentials. Instruct the product manager to access the CloudWatch console and find the dashboard by its name in the Dashboards section.
{: .option}
- [ ] D. Set up a bastion server within a public subnet. When the product manager needs to access the dashboard, activate the server and provide the RDP credentials. Make sure that the browser on the bastion server is set up to access the dashboard URL using cached AWS credentials that possess the necessary permissions for viewing the dashboard.
{: .option}

A
{: .answer}

The correct answer to the question regarding how to provide access to an Amazon CloudWatch dashboard for a product manager who does not have an AWS account, while following the principle of least privilege, is **A. Distribute the dashboard via the CloudWatch console. Input the email address of the product manager and follow the necessary steps to share it. Send a shareable link of the dashboard to the product manager.**

### Explanation of the Correct Answer (A):
1. **CloudWatch Dashboard Sharing**: Amazon CloudWatch allows dashboards to be shared with users who do not have AWS accounts. By using the dashboard sharing feature, the solutions architect can send a shareable link via email. This means the product manager can view the dashboard without needing to log in to the AWS Management Console.
   
2. **Principle of Least Privilege**: This method adheres to the principle of least privilege because it does not grant any unnecessary permissions beyond what is needed to view the specific dashboard. The product manager can view the dashboard without having access to other AWS resources or configurations.

3. **Ease of Access**: This option provides a simple and direct way for the product manager to access the application metrics without the overhead of managing AWS accounts or IAM users.

### Why the Other Answers are Incorrect:

**B. Set up an IAM user exclusively for the product manager. Assign the AWS managed policy CloudWatchReadOnlyAccess to this user. Provide the product manager with the new login details. Also, share the URL of the appropriate dashboard with them.**
- **IAM User Requirement**: This solution involves creating an IAM user, which requires the product manager to have an AWS account. Since the product manager does not have an AWS account, this approach is not valid.
- **Over-Privileged Access**: Even though assigning `CloudWatchReadOnlyAccess` is a step towards least privilege, creating an account for a single dashboard access is unnecessary complexity when the dashboard can be shared directly.

**C. Set up an IAM user for the employees of the company. Assign the ViewOnlyAccess AWS managed policy to this IAM user. Provide the product manager with the new login credentials. Instruct the product manager to access the CloudWatch console and find the dashboard by its name in the Dashboards section.**
- **Shared Account Misuse**: This solution suggests creating a single IAM user for multiple employees, which can lead to security risks and accountability issues. It is not advisable to share credentials among multiple users.
- **Unnecessary Complexity**: Like option B, this solution does not align with the principle of least privilege, as it grants broader access than required for merely viewing the dashboard.

**D. Set up a bastion server within a public subnet. When the product manager needs to access the dashboard, activate the server and provide the RDP credentials. Make sure that the browser on the bastion server is set up to access the dashboard URL using cached AWS credentials that possess the necessary permissions for viewing the dashboard.**
- **Complex and Costly**: This option introduces significant complexity by requiring a bastion server, which incurs additional costs and maintenance overhead. It complicates the access method for the product manager, who would have to connect via RDP to a server just to view a dashboard.
- **Security Risks**: Exposing a bastion host to the internet increases the attack surface for potential security vulnerabilities, which is contrary to best practices in securing AWS environments.

### Technical Details for AWS Solutions Architect Associate Exam Preparation:
- **AWS Identity and Access Management (IAM)**: Understand how to create and manage IAM users, roles, and policies. Focus on the principle of least privilege when granting permissions.
- **Amazon CloudWatch**: Familiarize yourself with CloudWatch features, including dashboards, metrics, and alarms. Know how to share dashboards and the implications of permissions.
- **Security Best Practices**: Learn about best practices for securing AWS accounts, including the use of IAM roles, policies, and the principle of least privilege.
- **AWS Shared Responsibility Model**: Understand how security is a shared responsibility between AWS and the customer, especially in terms of access management.
- **Cost Management**: Be aware of potential costs associated with various AWS services, including the use of EC2 instances for bastion hosts.

By understanding these concepts and the reasoning behind the correct and incorrect answers, candidates can enhance their knowledge and improve their chances of passing the AWS Solutions Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company's product manager needs to access this dashboard periodically. The product manager does not have an AWS account. A solutions architect must provide access to the product manager by following the principle of least privilege.
Which solution will meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Share the dashboard from the CloudWatch console. Enter the product manager's email address, and complete the sharing steps. Provide a shareable link for the dashboard to the product manager.
{: .originaloption}
- [ ] B. Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS managed policy to the user. Share the new login credentials with the product manager. Share the browser URL of the correct dashboard with the product manager.
{: .originaloption}
- [ ] C. Create an IAM user for the company's employees. Attach the ViewOnlyAccess AWS managed policy to the IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to the CloudWatch console and locate the dashboard by name in the Dashboards section.
{: .originaloption}
- [ ] D. Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard, start the server and share the RDP credentials. On the bastion server, ensure that the browser is configured to open the dashboard URL with cached AWS credentials that have appropriate permissions to view the dashboard.
{: .originaloption}


### Comments

--- 
Answer A: According to the AWS documentation, it is possible to share a specific CloudWatch dashboard by designating the email addresses of individuals who are permitted to access it. Each designated user will be required to create their own password to gain entry to the dashboard. For more detailed instructions, refer to the official documentation at [AWS CloudWatch Dashboard Sharing](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-dashboard-sharing.html). 

In this scenario, it is crucial to ensure that the product manager can access the necessary metrics without granting excessive permissions, thus adhering to the principle of least privilege. Sharing the dashboard in this manner allows for a streamlined approach to access while maintaining security protocols.
{: .comment}
--- 
Sharing a dashboard can be a bit tricky! 🌐 When you share a CloudWatch dashboard, everyone with access gets the same permissions for that account. If you choose to go the public route, anyone with the link gains those permissions too—yikes! 😱

Now, here's where it gets a little more complicated: the permissions for `cloudwatch:GetMetricData` and `ec2:DescribeTags` can't be fine-tuned to just certain metrics or EC2 instances. This means anyone who has access can view all CloudWatch metrics and even snoop around the names and tags of every EC2 instance in the account. So, how does the principle of least privilege fit into this scenario? 🤔 

The key takeaway is to ensure that access is granted thoughtfully and only to those who genuinely need it. If the product manager only needs to peek at specific metrics, there are more secure methods to share that information without opening the floodgates! 🚪🔒
{: .comment}
--- 
Thanks for the link! It’s hard to believe that option A is the winning choice here. Sharing the dashboard through the CloudWatch console by simply entering the product manager's email sounds like a quick and easy fix. Just imagine: a few clicks, and voilà! The dashboard is in their hands. But let's not forget to sprinkle in some security measures while we're at it. After all, we wouldn’t want anyone accidentally wandering into our precious metrics without the right permissions, would we?
{: .comment}
--- 
Option B offers an excellent solution for granting the product manager access to the CloudWatch dashboard. By creating an IAM user specifically for this purpose and attaching the CloudWatchReadOnlyAccess policy, the product manager will have tailored access to view the necessary metrics without any unnecessary permissions. This approach adheres to the principle of least privilege, ensuring that the product manager can effectively monitor application performance while maintaining a secure environment. This method not only simplifies access but also reinforces best practices in security management.
{: .comment}
--- 
Option B presents a little hiccup when it comes to the CloudWatchReadOnlyAccess policy. While it does grant read access to the dashboard, it also opens the door to other permissions for logs and insights, which means it strays from the principle of least privilege. On the bright side, option A shines because it focuses solely on providing access to the dashboard. 🌈
{: .comment}

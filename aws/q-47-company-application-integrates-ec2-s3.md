---
layout: answered-question
title: "AWS Company's Application Integrates With Multiple Question"
meta: "AWS Exam Question: A company integrates with SaaS for data collection using Amazon EC2 and S3. Seeking solutions for performance improvement with minimal overhead. Answer: Lambda, CloudWatch."
slug: "q-47-company-application-integrates-ec2-s3"
certification: "AWS Solution Architect Associate Exam"
---


 A company utilizes various software-as-a-service (SaaS) platforms for data collection through its application. To manage this data, the company operates Amazon EC2 instances that collect the data and subsequently upload it to an Amazon S3 bucket for analysis. Additionally, these same EC2 instances are responsible for notifying users upon the completion of an upload. However, the company has observed that the application is experiencing slow performance and seeks to enhance it to the greatest extent possible. 

What solution can address these needs while minimizing operational overhead?
{: .query}

- [ ] A. Set up an Auto Scaling group to enable the scaling out of EC2 instances. Additionally, configure an S3 event notification to dispatch events to an Amazon Simple Notification Service (Amazon SNS) topic once an upload to the S3 bucket is finished.
{: .option}
- [x] B. Set up an Amazon AppFlow flow to facilitate data transfer between each SaaS source and the S3 bucket. Additionally, configure an S3 event notification to trigger events to an Amazon Simple Notification Service (Amazon SNS) topic upon the completion of an upload to the S3 bucket.
{: .option}
- [ ] C. Set up an Amazon EventBridge (formerly Amazon CloudWatch Events) rule for each SaaS source to transmit output data, designating the S3 bucket as the target for the rule. Additionally, establish another EventBridge (CloudWatch Events) rule to trigger events upon the completion of uploads to the S3 bucket. For this second rule, configure an Amazon Simple Notification Service (Amazon SNS) topic as the target.
{: .option}
- [ ] D. Set up a Docker container as an alternative to an EC2 instance. Deploy the containerized application on Amazon Elastic Container Service (Amazon ECS). Configure Amazon CloudWatch Container Insights to trigger events to an Amazon Simple Notification Service (Amazon SNS) topic upon the completion of uploads to the S3 bucket.
{: .option}

B
{: .answer}

The correct answer is **B: Set up an Amazon AppFlow flow to facilitate data transfer between each SaaS source and the S3 bucket. Additionally, configure an S3 event notification to trigger events to an Amazon Simple Notification Service (Amazon SNS) topic upon the completion of an upload to the S3 bucket.**

### Why Option B is Correct:

1. **Amazon AppFlow**: This is a fully managed integration service that allows you to securely transfer data between SaaS applications and AWS services, such as Amazon S3. By using AppFlow, the company can automate the data transfer and minimize the need for manual intervention or custom code, significantly reducing operational overhead. This means the company can focus more on analyzing the data rather than managing the data transfer process.

2. **Performance Improvement**: Since AppFlow is designed for performance and efficiency, it is likely to handle data transfers more effectively than an EC2 instance running custom scripts. This helps improve overall application performance.

3. **Integration with SNS**: Configuring an S3 event notification to trigger an SNS topic upon successful uploads means that the user can receive immediate notifications without needing to manage additional logic within an EC2 instance. SNS can also easily integrate with other services, which enhances the application's capabilities with minimal additional configuration.

### Why the Other Options Are Incorrect:

#### A. Set up an Auto Scaling group to enable the scaling out of EC2 instances.
- **Operational Overhead**: While Auto Scaling can be beneficial, it introduces additional complexity in terms of managing EC2 instances, load balancing, and ensuring that the application behaves correctly when instances scale up or down. This can increase the operational overhead rather than decrease it.
- **Data Transfer**: This option still relies on EC2 instances for data transfer, which does not optimize the process as effectively as AppFlow would.

#### C. Set up an Amazon EventBridge rule for each SaaS source.
- **Complexity**: Creating multiple EventBridge rules for each SaaS source is likely to introduce unnecessary complexity in managing these rules. This can lead to increased operational overhead because you'd need to monitor and maintain each rule.
- **Data Transfer**: Similar to option A, this option does not streamline the data transfer process as effectively as Amazon AppFlow, which is specifically designed for SaaS integrations.

#### D. Set up a Docker container as an alternative to an EC2 instance.
- **Container Management**: While using containers can improve deployment and scaling, it introduces additional complexity in terms of container orchestration and management. Setting up Amazon ECS (Elastic Container Service) may require more operational overhead than using AppFlow, which is a fully managed service.
- **Not directly addressing the problem**: This option still relies on a custom application logic to handle data transfers and notifications, which can be more prone to errors and requires more maintenance.

### Technical Details for AWS Solution Architect Associate Exam Preparation:

- **Amazon AppFlow**: Understand how to set up AppFlow for different data sources (like Salesforce, ServiceNow) and destinations (like S3, Redshift). Familiarize yourself with the data transformation options available within AppFlow.
  
- **Amazon S3 Event Notifications**: Learn how to configure event notifications on S3 buckets. Understand how to use Amazon SNS for notifications and how to integrate it with other AWS services.

- **AWS Lambda**: While not mentioned in this question, knowing how Lambda can be triggered by S3 events can also be beneficial. This ability allows for serverless processing of data without managing servers.

- **SNS**: Study how SNS can be used for messaging and integration with other AWS services. Understand the different protocols supported (HTTP, email, SMS) and how to manage subscriptions.

- **General Best Practices**: Familiarize yourself with best practices for data ingestion, processing, and notification mechanisms within AWS to optimize performance and reduce costs.

By focusing on these components, a candidate can strengthen their understanding of AWS services and improve their chances of passing the AWS Solution Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company's application integrates with multiple software-as-a-service (SaaS) sources for data collection. The company runs Amazon EC2 instances to receive the data and to upload the data to an Amazon S3 bucket for analysis. The same EC2 instance that receives and uploads the data also sends a notification to the user when an upload is complete. The company has noticed slow application performance and wants to improve the performance as much as possible.
Which solution will meet these requirements with the LEAST operational overhead?
{: .original-query}

### Original Questions

- [ ] A. Create an Auto Scaling group so that EC2 instances can scale out. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.
{: .originaloption}
- [ ] B. Create an Amazon AppFlow flow to transfer data between each SaaS source and the S3 bucket. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.
{: .originaloption}
- [ ] C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule for each SaaS source to send output data. Configure the S3 bucket as the rule's target. Create a second EventBridge (Cloud Watch Events) rule to send events when the upload to the S3 bucket is complete. Configure an Amazon Simple Notification Service (Amazon SNS) topic as the second rule's target.
{: .originaloption}
- [ ] D. Create a Docker container to use instead of an EC2 instance. Host the containerized application on Amazon Elastic Container Service (Amazon ECS). Configure Amazon CloudWatch Container Insights to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.
{: .originaloption}


### Comments

--- 
The term "least operational overhead" implies that the solution should require minimal effort and management. Familiarity with Amazon AppFlow suggests that significant time and resources may be necessary for configuration, testing, and troubleshooting potential errors during the data extraction and loading process.

In this scenario, the company already has existing EC2 instances performing the required tasks. The primary concern is the application's performance, which can be enhanced by implementing auto-scaling and incorporating a queuing mechanism, such as Amazon Simple Notification Service (SNS), to decouple the notification process from the data upload. 

The operational burden associated with this approach is considerably lower than that of configuring and managing AppFlow, making it a more efficient option for improving performance while minimizing management efforts.
{: .comment}
--- 
Ah, option B! Let's gently steer away from it. If you take a peek at the AWS website (https://aws.amazon.com/appflow/), you'll find that AppFlow is a delightful, fully managed integration service designed to help you securely transfer data between popular software-as-a-service (SaaS) applications like Salesforce, SAP, Google Analytics, Facebook Ads, and ServiceNow, all while seamlessly connecting to AWS services like Amazon S3 and Amazon Redshift—it's like magic, but with fewer rabbits and more data! 🪄📊

Now, let's not forget, the question is all about finding the solution with "the LEAST operational overhead." While Auto Scaling can definitely boost performance, it still means you have to juggle EC2 instances, which adds a bit of extra management hassle. That’s like trying to keep a dozen plates spinning without dropping one—fun, but a bit chaotic! 🎪 So, when you're looking for simplicity and ease, managed services like AppFlow come out on top, leaving you with more time to sip your coffee and less time managing servers! ☕✨
{: .comment}
--- 
I completely understand the hesitation; I wrestled with this decision for quite a while myself. However, the goal here is to enhance performance to the fullest extent possible. I can't promise that EC2 will deliver the same level of performance as managed services. That's ultimately why I settled on option B. It just makes sense to leverage those managed services for optimal efficiency.
{: .comment}
--- 
"Operational overhead" pertains to the ongoing management and maintenance of a solution after it has been deployed, rather than the initial setup process. Utilizing EC2 instances to fetch data from one source and transfer it to another is inefficient; cloud services are designed to streamline these processes and enhance efficiency. Embracing fully managed solutions can greatly reduce complexity and improve performance while minimizing the resources required for ongoing operations.
{: .comment}
--- 
When it comes to AWS, opting for a managed service means enjoying a delightful reduction in operational overhead, no matter how complex the setup might be. Managing AppFlow is a breeze compared to overseeing EC2 instances, which makes option A less appealing. With EC2, you're dealing with the intricacies of operating systems, application configurations, security measures, and the ongoing tasks of patching and upgrades—definitely more effort than you'd want with a SaaS approach! 🌟 

So, the shining star here is option B!
{: .comment}

---
layout: answered-question
title: "AWS A Company Is Developing An Application Question"
meta: "AWS Exam Question: A company needs to extract shipping statistics via a REST API, format them in HTML, and email reports daily. Find the answer using AWS Lambda and Amazon SES."
slug: "q-42-order-shipping-statistics-API-RA"
certification: "AWS Solution Architect Associate Exam"
---


 A company is creating an application that offers order shipping statistics accessible via a REST API. They aim to gather the shipping statistics, format the data into a user-friendly HTML report, and distribute this report to multiple email addresses consistently every morning. What steps should a solutions architect take to fulfill these requirements? (Select two options.)
{: .query}

- [ ] A. Set up the application to transmit the data to Amazon Kinesis Data Firehose.
{: .option}
- [ ] B. Utilize Amazon Simple Email Service (Amazon SES) to structure the data and dispatch the report via email.
{: .option}
- [ ] C. Set up a scheduled event in Amazon EventBridge (formerly known as Amazon CloudWatch Events) to trigger an AWS Glue job that retrieves data by querying the application's API.
{: .option}
- [ ] D. Set up a scheduled event in Amazon EventBridge (formerly known as Amazon CloudWatch Events) that triggers an AWS Lambda function to retrieve data from the application's API.
{: .option}
- [ ] E. Save the application data in Amazon S3. Set up an Amazon Simple Notification Service (Amazon SNS) topic to serve as an S3 event destination for sending the report via email.
{: .option}

BD
{: .answer}

To meet the requirements of extracting shipping statistics, organizing the data into an HTML format, and emailing it to several addresses every morning, the correct combination of steps would be **B** and **D**.

### Correct Answers:

**B. Utilize Amazon Simple Email Service (Amazon SES) to structure the data and dispatch the report via email.**

- **Explanation**: Amazon SES is a scalable email service designed to help businesses send marketing, notification, and transactional emails. It allows for easy integration into applications for sending emails reliably and at scale. In this case, it will be used to send the daily report to multiple email addresses. The report can be structured in HTML format to make it visually appealing and easy to read.

**D. Set up a scheduled event in Amazon EventBridge (formerly known as Amazon CloudWatch Events) that triggers an AWS Lambda function to retrieve data from the application's API.**

- **Explanation**: Amazon EventBridge can be used to create scheduled events (cron jobs) that trigger actions at specific times. In this scenario, setting up a scheduled event to invoke an AWS Lambda function every morning allows the function to call the REST API, retrieve the shipping statistics, and process the data into the desired format (HTML). AWS Lambda is a serverless compute service that can run code in response to events without provisioning or managing servers, making it ideal for this use case.

### Why the Other Options are Incorrect:

**A. Set up the application to transmit the data to Amazon Kinesis Data Firehose.**

- **Reason**: Amazon Kinesis Data Firehose is primarily used for real-time data streaming and loading into data lakes, data stores, and analytics services. While you could technically use it to collect data, it is not necessary for a scheduled report generation and email dispatch. This option adds unnecessary complexity to the solution as the requirement is to retrieve and process the data on a schedule rather than stream data in real-time.

**C. Set up a scheduled event in Amazon EventBridge (formerly known as Amazon CloudWatch Events) to trigger an AWS Glue job that retrieves data by querying the application's API.**

- **Reason**: While AWS Glue is a powerful tool for ETL (Extract, Transform, Load) processes, it is generally used for large-scale data processing tasks, particularly with data stored in data lakes or warehouses. In this scenario, using AWS Glue is overkill and adds unnecessary complexity, as a simpler AWS Lambda function would suffice for retrieving and formatting the data from the REST API.

**E. Save the application data in Amazon S3. Set up an Amazon Simple Notification Service (Amazon SNS) topic to serve as an S3 event destination for sending the report via email.**

- **Reason**: While Amazon S3 can be used to store reports and Amazon SNS can distribute notifications, this option does not directly address the need to format and send an email report every morning. It introduces additional steps by requiring data to be saved first in S3, which may not be necessary. The requirement specifies that the report should be sent via email, and using SES directly is more straightforward and efficient than first storing data in S3 and then notifying via SNS.

### Technical Notes for AWS Solution Architect Associate Exam:

1. **AWS Lambda**: Understand how to create and configure Lambda functions, including setting up triggers via EventBridge and handling API calls.
2. **Amazon SES**: Familiarize yourself with SES setup, including verifying email addresses, creating email templates, and sending emails with HTML content.
3. **Amazon EventBridge**: Learn how to schedule events and target AWS services, such as Lambda, with proper configuration.
4. **Data Retrieval**: Be able to explain REST API interactions
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is developing an application that provides order shipping statistics for retrieval by a REST API. The company wants to extract the shipping statistics, organize the data into an easy-to-read HTML format, and send the report to several email addresses at the same time every morning.
Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)
{: .original-query}

### Original Questions

- [ ] A. Configure the application to send the data to Amazon Kinesis Data Firehose.
{: .originaloption}
- [ ] B. Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email.
{: .originaloption}
- [ ] C. Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Glue job to query the application's API for the data.
{: .originaloption}
- [ ] D. Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Lambda function to query the application's API for the data.
{: .originaloption}
- [ ] E. Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS) topic as an S3 event destination to send the report by email.
{: .originaloption}


### Comments

--- 
Amazon Simple Email Service (Amazon SES) can be utilized to format and send the report in HTML. This service enables the creation of visually appealing email content, allowing for effective presentation of the shipping statistics. For more details on how to structure and send formatted emails using SES, refer to the official documentation: [Amazon SES Formatted Email Guide](https://docs.aws.amazon.com/ses/latest/dg/send-email-formatted.html).
{: .comment}
--- 
This document is all about the SES API—no, not the overly enthusiastic guy at the party named "Ses." Just to clarify, Amazon Simple Email Service (SES) is focused on sending emails rather than formatting data. So, while SES can help you shoot off those reports like a pro, it won’t be giving your data a makeover before it hits your inbox. 📧✨ 

If you’re looking to whip your order shipping statistics into a delightful HTML presentation before sending them out, you’ll need to pair SES with a tool that can handle the formatting. Think of SES as the trusty delivery driver who doesn’t care if your report is dressed to the nines—he’s just here to make sure it arrives on time! 🚚💨 

So, while SES is fantastic for getting those emails out the door, remember it’s not your stylist! For the formatting magic, you’ll want to leverage something like AWS Lambda or another data processing service to make your stats look sharp before they go out. 🪄📊
{: .comment}
--- 
When utilizing Amazon Simple Email Service (SES) to send out emails, the amount of information you need to provide varies based on your approach. You can opt for a minimalist route, allowing Amazon SES to handle all the formatting for you with just the essentials. On the other hand, if you're feeling a bit more adventurous and wish to include attachments or customize the message, you have the option to craft the raw message yourself. For those who enjoy diving into the nitty-gritty, this gives you the flexibility to tailor your emails exactly as you desire. For more details, check out the Amazon SES documentation.
{: .comment}
--- 
Options B and D are the two correct choices. If you are considering option E, it overlooks the requirement for a daily morning schedule, which cannot be accomplished using S3 events for SNS. Amazon EventBridge is ideal for setting up scheduled events, such as triggering actions every morning. Meanwhile, option B effectively addresses the need to send the report in an HTML format via email using Amazon SES, while option D ensures that the scheduled event is executed each morning, fulfilling the specified timing requirement.
{: .comment}
--- 
Option B lacks a clear mention of an API interface, which is important for effectively structuring and sending the data. 🌟 It’s essential to ensure that the data is properly formatted and linked to the right services, so that the email delivery process can shine!✨
{: .comment}

---
layout: answered-question
title: "AWS A Company Runs Its Infrastructure On AWS Question"
meta: "AWS Exam Question: A company needs a scalable solution for storing original and converted .pdf files for 700,000 users. What is the cost-effective answer? AWS S3, Lambda."
slug: "q-42-document-management-s3"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates its infrastructure on AWS and has a user base of 700,000 for its document management application. They plan to develop a product that converts large .pdf files into .jpg image files, with the average .pdf file size being 5 MB. To fulfill their needs, the company requires storage for both the original and converted files. A solutions architect is tasked with designing a scalable solution that can handle a rapidly increasing demand over time. What is the most cost-effective solution that meets these requirements?
{: .query}

- [x] A. Upload the .pdf files to Amazon S3. Set up an S3 PUT event to trigger an AWS Lambda function that will convert the files into .jpg format and save them back in Amazon S3.
{: .option}
- [ ] B. Store the .pdf files in Amazon DynamoDB. Utilize the DynamoDB Streams capability to trigger an AWS Lambda function that will convert the files to .jpg format and save them back in DynamoDB.
{: .option}
- [ ] C. Transfer the .pdf files to an AWS Elastic Beanstalk application that comprises Amazon EC2 instances, Amazon Elastic Block Store (EBS) storage, and an Auto Scaling group. Utilize a program running on the EC2 instances to convert the files into .jpg format. Store both the .pdf and .jpg files in the EBS storage.
{: .option}
- [ ] D. Upload the .pdf files to an AWS Elastic Beanstalk application that incorporates Amazon EC2 instances, Amazon Elastic File System (Amazon EFS) storage, and an Auto Scaling group. Utilize a program on the EC2 instances to convert the files to .jpg format. Store both the .pdf and .jpg files in the EBS storage.
{: .option}

A
{: .answer}

The correct answer to the question is **A**: 

**A. Upload the .pdf files to Amazon S3. Set up an S3 PUT event to trigger an AWS Lambda function that will convert the files into .jpg format and save them back in Amazon S3.**

### Explanation of the Correct Answer:

1. **Scalability**: Amazon S3 is designed for high durability and scalability. It can handle massive amounts of data and user requests without requiring significant management overhead. As the user base grows, S3 can seamlessly accommodate increased file uploads.

2. **Event-Driven Architecture**: By using S3 event notifications, the solution architect can trigger an AWS Lambda function automatically whenever a new .pdf file is uploaded. This event-driven architecture is efficient as it reduces the need for constantly running servers and only incurs costs based on actual usage.

3. **Cost-Effectiveness**: AWS Lambda is a serverless compute service that charges based on the number of requests and the time it takes to run the code. This can be more cost-effective than maintaining EC2 instances, especially when demand is variable or grows rapidly.

4. **S3 Storage for Original and Converted Files**: Both the original .pdf files and the converted .jpg files can be stored in S3, taking advantage of S3's cost-effective storage options (like S3 Standard and S3 Intelligent-Tiering).

### Why the Other Options are Wrong:

**B. Store the .pdf files in Amazon DynamoDB. Utilize the DynamoDB Streams capability to trigger an AWS Lambda function that will convert the files to .jpg format and save them back in DynamoDB.**

- **Inappropriate Storage Choice**: DynamoDB is a NoSQL database service and is not designed to store large binary files (like .pdfs and .jpgs) efficiently. It is better suited for structured data and key-value types rather than large objects. Storing large files in DynamoDB can lead to higher costs and performance issues.
  
- **Complexity**: The approach using DynamoDB Streams requires additional complexity in managing the streams and may not handle the scale of file conversions as effectively as an S3-based solution.

**C. Transfer the .pdf files to an AWS Elastic Beanstalk application that comprises Amazon EC2 instances, Amazon Elastic Block Store (EBS) storage, and an Auto Scaling group. Utilize a program running on the EC2 instances to convert the files into .jpg format. Store both the .pdf and .jpg files in the EBS storage.**

- **Overhead and Cost**: Elastic Beanstalk and EC2 require provisioning, management, and scaling of instances. This can introduce additional costs and complexity. You would be paying for running instances even when they are idle, which is not cost-effective, especially when demand can be variable.

- **Limited Scalability**: Unlike S3, EBS volumes are tied to specific EC2 instances. If there are more requests than your instances can handle, you may face bottlenecks, leading to delays in processing.

**D. Upload the .pdf files to an AWS Elastic Beanstalk application that incorporates Amazon EC2 instances, Amazon Elastic File System (Amazon EFS) storage, and an Auto Scaling group. Utilize a program on the EC2 instances to convert the files to .jpg format. Store both the .pdf and .jpg files in the EBS storage.**

- **Still Overhead and Cost**: Similar to option C, using Elastic Beanstalk and EC2 introduces management overhead. While EFS provides file storage that can be accessed from multiple EC2 instances, it still incurs higher costs compared to S3, especially considering the large volumes of data.

- **Complexity**: Managing an Elastic Beanstalk environment with EC2, EFS, and Auto Scaling adds complexity that can be avoided with a simpler, serverless architecture using Lambda and S3.

### Key Technical Details for AWS Solutions Architect Associate Exam:

1. **Amazon S3**: Understand the features of S3, including storage classes, event notifications, versioning, and lifecycle policies.

2. **AWS Lambda**: Know how Lambda works, its pricing model, and the benefits of serverless computing. Be familiar with how to set up event triggers for Lambda functions.

3. **DynamoDB**: Have a basic understanding of the use cases for DynamoDB and its limitations regarding file storage.

4. **Elastic Beanstalk**: Understand what Elastic Beanstalk is, how it manages environments, and when to use it versus serverless solutions.

5. **Cost Management**: Be aware of how different AWS services are billed and how to optimize costs based on usage patterns.

6. **Event-Driven Architecture**: Familiarize yourself with the concepts of event-driven architectures and how they can improve scalability and responsiveness in applications.

By knowing these concepts, candidates can effectively choose the right AWS solutions for various
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company runs its infrastructure on AWS and has a registered base of 700,000 users for its document management application. The company intends to create a product that converts large .pdf files to .jpg image files. The .pdf files average 5 MB in size. The company needs to store the original files and the converted files. A solutions architect must design a scalable solution to accommodate demand that will grow rapidly over time.
Which solution meets these requirements MOST cost-effectively?
{: .original-query}

### Original Questions

- [ ] A. Save the .pdf files to Amazon S3. Configure an S3 PUT event to invoke an AWS Lambda function to convert the files to .jpg format and store them back in Amazon S3.
{: .originaloption}
- [ ] B. Save the .pdf files to Amazon DynamoDUse the DynamoDB Streams feature to invoke an AWS Lambda function to convert the files to .jpg format and store them back in DynamoDB.
{: .originaloption}
- [ ] C. Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic Block Store (Amazon EBS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the files to .jpg format. Save the .pdf files and the .jpg files in the EBS store.
{: .originaloption}
- [ ] D. Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic File System (Amazon EFS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the file to .jpg format. Save the .pdf files and the .jpg files in the EBS store.
{: .originaloption}


### Comments

--- 
Option A is the most cost-effective solution. AWS Elastic Beanstalk can be costly due to the overhead of managing EC2 instances, and Amazon DynamoDB has limitations on the maximum item size, which is capped at 400 KB. In contrast, utilizing Amazon S3 for storage allows for the handling of large files, as it can accommodate objects up to 5 TB in size. Additionally, implementing an AWS Lambda function triggered by S3 events provides a serverless architecture that can efficiently convert .pdf files to .jpg format without the need for provisioning or managing servers. This solution scales automatically with demand, ensuring that both the original and converted files are stored cost-effectively in S3.
{: .comment}
--- 
Is Lambda as scalable as EC2? 🤔 Well, let's dive into the cloud pool! ☁️ While both services are designed to handle varying workloads, they each have their unique charms. AWS Lambda is like that super-efficient friend who can whip up a meal for a crowd in no time—scaling automatically to match demand without breaking a sweat! 🍳 Meanwhile, EC2 is more like a dedicated chef who can whip up a gourmet meal but may need a bit of help adjusting the kitchen size when the guest list grows. 🍽️

In short, Lambda shines when it comes to effortless scaling for event-driven tasks, while EC2 offers more customization and control for long-running applications. So, whether you’re throwing a spontaneous party or hosting a formal dinner, there’s a cloud service that’s just right for you! 🎉
{: .comment}
--- 
Lambda offers virtually limitless scalability.
{: .comment}
--- 
Additionally, AWS Lambda operates on a pay-as-you-go model, meaning you only incur costs when the service is actively utilized. This makes it a highly cost-effective solution, especially for variable workloads, as you won't be paying for idle resources. Furthermore, leveraging Lambda allows for seamless scaling, automatically adjusting to meet demand without the need for manual intervention. This ensures that the system remains efficient and economical as usage grows.
{: .comment}
--- 
It seems there might have been a little mix-up! When you mentioned DocumentDB, I believe you were actually referring to DynamoDB, right? 😊 Just a tiny detail, but it makes all the difference! Let me know if there's anything else I can assist you with!
{: .comment}

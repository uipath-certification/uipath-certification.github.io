---
layout: answered-question
title: "AWS An Application Development Team Is Designing A Microservice Question"
meta: "AWS Exam Question: An application team designs a microservice to convert large images using Amazon S3 and AWS Lambda for compression. Find the answer with durable, stateless components."
slug: "q-47-microservice-convert-images-S3-AL"
certification: "AWS Solution Architect Associate Exam"
---


 A development team is working on a microservice aimed at resizing large images into smaller, compressed versions. When a user uploads an image via the web interface, the service should first save the original image to an Amazon S3 bucket. It will then utilize an AWS Lambda function to process and compress the image, finally storing the compressed version in a separate S3 bucket. 

To achieve this, a solutions architect must create a design that incorporates durable, stateless components for the automatic processing of images. 

Which two actions would effectively fulfill these requirements? (Choose two.)
{: .query}

- [ ] A. Set up an Amazon Simple Queue Service (Amazon SQS) queue. Modify the S3 bucket settings to notify the SQS queue whenever an image is uploaded to the S3 bucket.
{: .option}
- [ ] B. Set up the Lambda function to utilize the Amazon Simple Queue Service (Amazon SQS) queue as its source of invocation. Once the SQS message has been processed successfully, remove it from the queue.
{: .option}
- [ ] C. Set up the Lambda function to observe the S3 bucket for any new uploads. Upon detecting an uploaded image, log the file name to an in-memory text file, which will be used to track the images that have been processed.
{: .option}
- [ ] D. Start an Amazon EC2 instance to keep track of an Amazon Simple Queue Service (Amazon SQS) queue. As items are added to the queue, record the file name in a text file on the EC2 instance and trigger the Lambda function.
{: .option}
- [ ] E. Set up an Amazon EventBridge (formerly Amazon CloudWatch Events) event to track the S3 bucket. When an image is uploaded, trigger an alert to an Amazon Simple Notification Service (Amazon SNS) topic that includes the application owner's email address for additional processing.
{: .option}

AB
{: .answer}

To design a microservice for converting large images to smaller, compressed images using AWS services, the correct actions from the provided options are **A** and **B**. Let's delve into why these options are correct and why the others are not suitable for the given requirements.

### Correct Answers:

**A. Set up an Amazon Simple Queue Service (Amazon SQS) queue. Modify the S3 bucket settings to notify the SQS queue whenever an image is uploaded to the S3 bucket.**

- **Reasoning**: This option introduces a durable, decoupled architecture where the uploaded images trigger a message to SQS. Using SQS allows for reliable message delivery even if the Lambda function is temporarily unavailable. This is essential for handling potentially large volumes of image uploads without losing any messages. Additionally, SQS supports message retention, meaning that if the Lambda function can't process messages immediately, they remain in the queue until it can.

**B. Set up the Lambda function to utilize the Amazon Simple Queue Service (Amazon SQS) queue as its source of invocation. Once the SQS message has been processed successfully, remove it from the queue.**

- **Reasoning**: This option complements A by integrating the Lambda function with SQS. Lambda can poll the SQS queue for new messages and process them as they arrive. This means that the Lambda function can be invoked independently of the S3 bucket's upload process, providing a more scalable solution. Once the image processing is complete, the function can delete the message from the queue to prevent reprocessing. This stateless design is ideal for serverless architectures.

### Incorrect Answers:

**C. Set up the Lambda function to observe the S3 bucket for any new uploads. Upon detecting an uploaded image, log the file name to an in-memory text file, which will be used to track the images that have been processed.**

- **Reasoning**: While it's true that you can set up S3 event notifications to invoke a Lambda function, this approach is not as robust as using SQS. If the Lambda function fails or is not available, the event may be lost unless S3 is configured to retry, which can complicate error handling. Additionally, logging to an in-memory text file poses a significant risk, as Lambda functions are stateless and can scale horizontally. In-memory data will not persist across invocations, leading to potential data loss.

**D. Start an Amazon EC2 instance to keep track of an Amazon Simple Queue Service (Amazon SQS) queue. As items are added to the queue, record the file name in a text file on the EC2 instance and trigger the Lambda function.**

- **Reasoning**: This solution introduces unnecessary complexity and does not leverage the benefits of a serverless architecture. Using EC2 to track SQS messages defeats the purpose of using a stateless component like Lambda, which is designed to handle such tasks without managing servers. Additionally, maintaining state (like tracking processed images) on EC2 can lead to issues with reliability and scalability.

**E. Set up an Amazon EventBridge (formerly Amazon CloudWatch Events) event to track the S3 bucket. When an image is uploaded, trigger an alert to an Amazon Simple Notification Service (Amazon SNS) topic that includes the application owner's email address for additional processing.**

- **Reasoning**: While EventBridge can be used for event-driven architectures, sending notifications via SNS does not directly facilitate image processing. This option does not provide an automatic processing workflow for images. It simply alerts someone (the application owner) instead of processing the image, which is not aligned with the requirement of automatically compressing images after upload.

### Technical Details for AWS Solution Architect Associate Exam Preparation:

1. **Understanding SQS**: Amazon SQS is a fully managed message queuing service that enables decoupling of microservices. Familiarize yourself with concepts like FIFO (First-In-First-Out) queues, message visibility timeout, and dead-letter queues.

2. **Lambda Triggers**: Know how to set up AWS Lambda functions to be triggered by SQS or S3 events. Understand how Lambda scales based on the number of incoming requests and how it handles retries.

3. **Event-Driven Architecture**: Get comfortable with the principles of event-driven architecture, including the use of S3 for storage, SQS for message queuing, and Lambda for processing. This knowledge is critical when designing scalable and resilient applications on AWS.

4. **Stateless vs. Stateful**: Recognize the differences between stateless and stateful components in microservices. AWS Lambda is inherently stateless, making it suitable for processing tasks like image compression.

By understanding these principles and the reasoning behind the correct and incorrect answers, you'll be better prepared for both the exam and practical implementation of AWS solutions.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

An application development team is designing a microservice that will convert large images to smaller, compressed images. When a user uploads an image through the web interface, the microservice should store the image in an Amazon S3 bucket, process and compress the image with an AWS Lambda function, and store the image in its compressed form in a different S3 bucket.
A solutions architect needs to design a solution that uses durable, stateless components to process the images automatically.
Which combination of actions will meet these requirements? (Choose two.)
{: .original-query}

### Original Questions

- [ ] A. Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the S3 bucket to send a notification to the SQS queue when an image is uploaded to the S3 bucket.
{: .originaloption}
- [ ] B. Configure the Lambda function to use the Amazon Simple Queue Service (Amazon SQS) queue as the invocation source. When the SQS message is successfully processed, delete the message in the queue.
{: .originaloption}
- [ ] C. Configure the Lambda function to monitor the S3 bucket for new uploads. When an uploaded image is detected, write the file name to a text file in memory and use the text file to keep track of the images that were processed.
{: .originaloption}
- [ ] D. Launch an Amazon EC2 instance to monitor an Amazon Simple Queue Service (Amazon SQS) queue. When items are added to the queue, log the file name in a text file on the EC2 instance and invoke the Lambda function.
{: .originaloption}
- [ ] E. Configure an Amazon EventBridge (Amazon CloudWatch Events) event to monitor the S3 bucket. When an image is uploaded, send an alert to an Amazon ample Notification Service (Amazon SNS) topic with the application owner's email address for further processing.
{: .originaloption}


### Comments


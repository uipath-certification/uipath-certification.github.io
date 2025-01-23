---
layout: answered-question
title: "AWS A Company Is Building An Ecommerce Web Question"
meta: "AWS Exam Question: A company is building an ecommerce web application on AWS. Which solution ensures orders are processed in the order received? Answer: Amazon SQS, Lambda."
slug: "q-47-ecommerce-web-application-api-gw"
certification: "AWS Solution Architect Associate Exam"
---


 A company is developing an ecommerce web application hosted on AWS. This application forwards details of new orders to an Amazon API Gateway REST API for processing. To maintain the sequence of order processing according to their arrival, the company seeks a suitable solution. What would be the best approach to achieve this?
{: .query}

- [ ] A. Implement an API Gateway integration to send a message to an Amazon Simple Notification Service (Amazon SNS) topic upon receiving an order in the application. Attach an AWS Lambda function to the topic for processing tasks.
{: .option}
- [x] B. Implement an API Gateway integration to transmit a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue upon receiving an order in the application. Set up the SQS FIFO queue to trigger an AWS Lambda function for processing.
{: .option}
- [ ] C. Utilize an API Gateway authorizer to prevent any requests from being processed while the application is handling an order.
{: .option}
- [ ] D. Implement an API Gateway integration to dispatch a message to a standard Amazon Simple Queue Service (Amazon SQS) queue upon receiving an order in the application. Set up the SQS standard queue to trigger an AWS Lambda function for processing.
{: .option}

B
{: .answer}

The correct answer to the question is **B. Implement an API Gateway integration to transmit a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue upon receiving an order in the application. Set up the SQS FIFO queue to trigger an AWS Lambda function for processing.**

### Explanation of the Correct Answer (B):

1. **FIFO Guarantees**: Amazon SQS FIFO (First-In-First-Out) queues are specifically designed to ensure that messages are processed in the exact order they are received. This is critical for order processing systems where the sequence of orders must be maintained. When an order is sent to the API Gateway, it can directly place that order into a FIFO queue, ensuring that the order is processed in the same sequence it was received.

2. **Message Grouping**: SQS FIFO queues allow you to group related messages using a Message Group ID. This means that even if multiple consumers are processing messages from the same queue, messages with the same Message Group ID will be processed in order. This feature is beneficial in scenarios where orders belong to different categories or types.

3. **Integration with Lambda**: By setting up the FIFO queue to trigger an AWS Lambda function, the system can ensure that each order is processed by the Lambda function without manual intervention. Lambda can scale automatically in response to the number of messages in the queue, providing a serverless architecture that is efficient and cost-effective.

### Why the Other Answers Are Incorrect:

**A. Implement an API Gateway integration to send a message to an Amazon Simple Notification Service (Amazon SNS) topic upon receiving an order in the application. Attach an AWS Lambda function to the topic for processing.**
- **Order Guarantee**: Amazon SNS does not guarantee the order of message delivery. It is a pub/sub messaging service that distributes messages to multiple subscribers, and the order of processing is not preserved. This is not suitable for an application that requires strict order processing for new orders.

**C. Utilize an API Gateway authorizer to prevent any requests from being processed while the application is handling an order.**
- **Not Applicable**: This option does not address the requirement of processing orders in the order they are received. Instead, it suggests a mechanism to prevent processing requests altogether, which would lead to a backlog of unprocessed orders and is counterproductive for an order processing application.

**D. Implement an API Gateway integration to dispatch a message to a standard Amazon Simple Queue Service (Amazon SQS) queue upon receiving an order in the application. Set up the SQS standard queue to trigger an AWS Lambda function for processing.**
- **Order Guarantee**: While SQS standard queues allow for high throughput and are suitable for many scenarios, they do not guarantee the order of message delivery. Messages can be delivered out of order, which is not acceptable for a system that must process orders sequentially.

### Technical Details for AWS Solution Architect Associate Exam:

1. **SQS FIFO Queues**:
   - **Message Ordering**: FIFO queues preserve the order of messages using a combination of Message Group IDs and sequence numbers.
   - **Throughput**: FIFO queues can support up to 300 transactions per second (TPS) without batching, and up to 3,000 TPS with batching.

2. **Lambda Integration**:
   - **Event-Driven Architecture**: AWS Lambda can be triggered by various AWS services, including SQS. This allows for a seamless and event-driven processing model.
   - **Scaling**: Lambda functions can automatically scale based on the number of messages in the queue, allowing for efficient processing of multiple orders simultaneously.

3. **API Gateway**:
   - **RESTful API**: API Gateway allows developers to create and manage RESTful APIs, providing an interface for clients to interact with backend services.
   - **Integration Types**: It supports various integration types, including AWS Lambda functions, HTTP endpoints, and AWS services like SQS.

By understanding these components, candidates can better prepare for the AWS Solution Architect Associate Exam and make informed decisions when designing AWS solutions involving order processing or similar use cases.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in the order that they are received.
Which solution will meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Use an API Gateway integration to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the application receives an order. Subscribe an AWS Lambda function to the topic to perform processing.
{: .originaloption}
- [ ] B. Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda function for processing.
{: .originaloption}
- [ ] C. Use an API Gateway authorizer to block any requests while the application processes an order.
{: .originaloption}
- [ ] D. Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) standard queue when the application receives an order. Configure the SQS standard queue to invoke an AWS Lambda function for processing.
{: .originaloption}


### Comments


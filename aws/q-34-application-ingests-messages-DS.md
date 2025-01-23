---
layout: answered-question
title: "AWS A Company Has An Application That Ingests Question"
meta: "AWS Exam Question: A company needs to decouple and scale an application that ingests messages for multiple services. What is the best answer? Includes AWS Lambda and Amazon SQS."
slug: "q-34-application-ingests-messages-DS"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates an application that processes incoming messages, which are subsequently consumed rapidly by numerous other applications and microservices. The volume of these messages fluctuates significantly, occasionally surging to as high as 100,000 per second. In pursuit of greater scalability and a more decoupled architecture, what solution would best address these needs?
{: .query}

- [ ] A. Send the messages to Amazon Kinesis Data Analytics for persistence. Set up the consumer applications to read and handle the messages.
{: .option}
- [ ] B. Launch the ingestion application on Amazon EC2 instances within an Auto Scaling group to adjust the number of EC2 instances according to CPU performance metrics.
{: .option}
- [ ] C. Send messages to Amazon Kinesis Data Streams utilizing a single shard. Employ an AWS Lambda function for message preprocessing and store the results in Amazon DynamoDB. Set up the consumer applications to retrieve and process the messages from DynamoDB.
{: .option}
- [x] D. Send the messages to an Amazon Simple Notification Service (Amazon SNS) topic that has several subscriptions to Amazon Simple Queue Service (Amazon SQS). Set up the consumer applications to handle the messages retrieved from the queues.
{: .option}

D
{: .answer}

The correct answer to the problem is **D**, which involves sending messages to an Amazon Simple Notification Service (Amazon SNS) topic with several subscriptions to Amazon Simple Queue Service (Amazon SQS). 

### Explanation of the Correct Answer (D)

1. **Decoupling**: The use of SNS for publishing messages decouples the message producers from consumers. This means that the sending application does not need to know about the recipient applications. It can simply publish messages to an SNS topic.

2. **Scalability**: SQS can handle large volumes of messages, and by utilizing multiple queues (one for each subscription), you can effectively scale the message consumption. Each consumer application can retrieve messages from its own queue independently, allowing for horizontal scaling.

3. **Message Durability and Reliability**: SQS provides durability and can retain messages until they are processed. If a consumer fails, the messages remain in the queue until they are successfully processed, which increases the reliability of the message processing.

4. **Handling High Throughput**: SNS can fan out messages to multiple SQS queues, allowing for high throughput scenarios. Since you can have multiple consumers reading from different queues concurrently, the architecture can effectively handle sudden spikes in message volume.

### Technical Details for AWS Solutions Architect Associate Exam

- **Amazon SNS**: A fully managed service that allows you to send messages or notifications to multiple subscribers. SNS provides features like topic-based publish/subscribe messaging.

- **Amazon SQS**: A fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. It offers two types of queues: Standard queues (unlimited throughput) and FIFO queues (guarantees order and exactly-once processing).

### Why the Other Options Are Incorrect

**A. Send the messages to Amazon Kinesis Data Analytics for persistence. Set up the consumer applications to read and handle the messages.**
- **Reason**: Kinesis Data Analytics is primarily used for processing and analyzing streaming data in real-time rather than serving as a reliable message queue. While it can be used for data analytics, it doesn’t handle message persistence and consumer decoupling as effectively as SQS and SNS can. Additionally, Kinesis Data Streams would be more appropriate for streaming data, but it would not adequately address the need for decoupling and scaling in the context of this question.

**B. Launch the ingestion application on Amazon EC2 instances within an Auto Scaling group to adjust the number of EC2 instances according to CPU performance metrics.**
- **Reason**: While Auto Scaling can help manage the number of EC2 instances based on load, this option does not address message decoupling or the specific problem of varying message loads. The architecture would still tightly couple the message ingestion and processing, making it less scalable in a microservices context. This option also doesn’t provide a built-in mechanism for handling spikes in message traffic effectively.

**C. Send messages to Amazon Kinesis Data Streams utilizing a single shard. Employ an AWS Lambda function for message preprocessing and store the results in Amazon DynamoDB. Set up the consumer applications to retrieve and process the messages from DynamoDB.**
- **Reason**: Using a single shard in Kinesis Data Streams limits the throughput to 1,000 records per second, which is insufficient for scenarios where message rates can spike to 100,000 messages per second. This option would also lead to bottlenecks, as consumers would have to poll DynamoDB for messages rather than directly consuming them from a message queue, making the architecture less efficient and scalable.

In conclusion, option D provides the best solution for decoupling, scalability, and high throughput necessary for handling large spikes in message volume. Understanding these services and their use cases is crucial for passing the AWS Solutions Architect Associate Exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability.
Which solution meets these requirements?
{: .original-query}

### Original Questions

- [ ] A. Persist the messages to Amazon Kinesis Data Analytics. Configure the consumer applications to read and process the messages.
{: .originaloption}
- [ ] B. Deploy the ingestion application on Amazon EC2 instances in an Auto Scaling group to scale the number of EC2 instances based on CPU metrics.
{: .originaloption}
- [ ] C. Write the messages to Amazon Kinesis Data Streams with a single shard. Use an AWS Lambda function to preprocess messages and store them in Amazon DynamoDB. Configure the consumer applications to read from DynamoDB to process the messages.
{: .originaloption}
- [ ] D. Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SOS) subscriptions. Configure the consumer applications to process the messages from the queues.
{: .originaloption}


### Comments

--- 
Option D is the most suitable choice. By utilizing Amazon Simple Notification Service (Amazon SNS) to send messages to a topic with multiple subscriptions to Amazon Simple Queue Service (Amazon SQS), the solution effectively decouples the message ingestion process from the consumer applications. This architecture allows for greater scalability, as SNS can handle a high volume of messages and distribute them across multiple SQS queues. Each consumer application can independently process messages from the queues at its own pace, which helps manage variations in message volume. This design not only enhances the reliability and resilience of the system but also ensures that consumer applications can scale horizontally to accommodate sudden spikes in message traffic. Overall, this approach provides a robust and efficient mechanism for handling large volumes of incoming messages while maintaining flexibility and scalability.
{: .comment}
--- 
By default, an SQS queue can juggle a maximum of 3,000 messages per second—like a circus performer with a few too many balls in the air! 🎪 But if you find yourself needing a little more oomph, you can reach out to AWS Support and request an upgrade. They can boost your queue’s message throughput in increments of 300 messages per second, all the way up to a whopping 10,000 messages per second! 🚀

Now, here’s a fun fact: the maximum messages per second a queue can handle isn’t the same as the number of requests the SQS API can process. The SQS API is built to manage a high volume of requests, so it can keep sending messages to your queue faster than that queue can handle them! Think of it as a speedy delivery service that can drop off packages even when the receiving end is still catching its breath! 📦😄
{: .comment}
--- 
Well, if we’re being honest, the clear winner here is D. Sending messages to an Amazon Simple Notification Service (SNS) topic, where you can have multiple subscriptions to Amazon Simple Queue Service (SQS), is a solid approach. This setup not only decouples your message ingestion from consumption but also scales like a dream. 

With SNS, you can broadcast messages to various SQS queues, allowing your consumer applications to pull messages at their own pace. This way, when that flurry of 100,000 messages per second hits, you won’t be left in the dust. Instead, your architecture will handle it smoothly, ensuring that no message is lost in the chaos. 

While the other options might seem appealing at first glance, they either risk bottlenecks or don’t offer the same level of scalability and separation of concerns that SNS and SQS provide. So, for a solution that’s both efficient and sustainable, option D is the way to go.
{: .comment}
--- 
D. Broadcast the messages to an Amazon Simple Notification Service (Amazon SNS) topic, which has several subscriptions to Amazon Simple Queue Service (Amazon SQS). Set up the consumer applications to retrieve and process the messages from the queues.

This approach leverages Amazon SNS and SQS to create a robust messaging framework that effectively decouples the system, thereby enhancing scalability. By allowing numerous consumer applications to process messages concurrently, this solution optimizes resource utilization and improves overall performance. Furthermore, utilizing Amazon SQS with multiple subscriptions enhances resilience, enabling simultaneous processing of multiple copies of the same message, which is crucial for handling sudden spikes in message volume. This architecture provides a flexible and efficient way to manage high-throughput scenarios.
{: .comment}
--- 
Oh, what a delightful scenario we have here! 🌟 Let’s break it down in a cheerful and professional manner while ensuring we keep our facts straight!

A: Not quite right! While Kinesis Data Analytics is a fantastic tool for analyzing data, it’s a bit of a misunderstanding to mix it up with Kinesis Data Streams. Kinesis Data Analytics relies on data that comes from Kinesis Data Streams, Kinesis Data Firehose, or Managed Streaming for Apache Kafka (MSK) for analytical purposes. It doesn't directly consume messages to send them off to applications.

B: This option misses the mark! Although Auto Scaling groups are wonderful for adjusting EC2 instances based on CPU performance, they may not respond quickly enough for our needs. When messages are fluctuating wildly, especially surging to 100,000 per second, the time it takes to check CPU metrics and spin up new EC2 instances could leave us in a bit of a jam. Imagine trying to scale from 10 to 100 instances—our servers might just take a breather while the scaling happens!

C: Close, but not quite! Kinesis Data Streams is certainly capable of managing high message volumes, but relying on just a single shard won't do the trick. To truly tackle those sudden spikes, we would need to increase the number of shards to accommodate the flow of messages effectively.

D: Bingo! This is the winning solution! By utilizing the fan-out pattern with Amazon Simple Notification Service (SNS) and multiple subscriptions to Amazon Simple Queue Service (SQS), we can gracefully handle the high workload. This setup is perfectly designed to accommodate those drastic variations in message volume, especially when they can surge to an astonishing 100,000 messages each second! 🎉

In summary, the playful combination of SNS and SQS is the way to go when dealing with such dynamic messaging needs!
{: .comment}

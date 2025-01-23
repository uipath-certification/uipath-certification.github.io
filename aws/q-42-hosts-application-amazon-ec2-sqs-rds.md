---
layout: answered-question
title: "AWS A Company Hosts An Application Question"
meta: "AWS Exam Question: A company uses Amazon EC2, SQS, and RDS but faces duplicate records. What solutions architect action ensures single message processing? Answer: Kinesis."
slug: "q-42-hosts-application-amazon-ec2-sqs-rds"
certification: "AWS Solution Architect Associate Exam"
---


 A company runs an application across several Amazon EC2 instances, which processes messages from an Amazon SQS queue. The application writes data to an Amazon RDS table and subsequently removes the messages from the queue. However, there are instances of duplicate records appearing in the RDS table, despite the SQS queue having no duplicate messages. What steps should a solutions architect take to guarantee that each message is processed only once?
{: .query}

- [ ] A. Utilize the CreateQueue API function to establish a new queue.
{: .option}
- [ ] B. Utilize the AddPermission API function to assign the necessary permissions.
{: .option}
- [ ] C. Utilize the ReceiveMessage API function to establish a suitable wait duration.
{: .option}
- [x] D. Utilize the ChangeMessageVisibility API call to extend the visibility timeout.
{: .option}

D
{: .answer}

The correct answer to the question is **D. Utilize the ChangeMessageVisibility API call to extend the visibility timeout.** 

### Explanation of the Correct Answer (D)

When a message is received from an Amazon SQS queue, it becomes "invisible" to other consumers for a specified period known as the visibility timeout. If the processing of that message takes longer than the visibility timeout, and the message is not deleted, it will become visible again in the queue and can be received by another consumer. This could lead to the same message being processed multiple times, resulting in duplicate records being written to the RDS table.

By utilizing the **ChangeMessageVisibility** API call to extend the visibility timeout, you can ensure that the message remains invisible to other consumers for a longer duration while the current instance is still processing it. This significantly reduces the chances of duplicate processing and ensures that each message is processed once only, even if the processing takes longer than expected.

### Explanation of Incorrect Answers

**A. Utilize the CreateQueue API function to establish a new queue.**
- Creating a new queue does not address the issue of duplicate processing. The problem lies in how the messages are being processed and the visibility timeout, not the existence of the queue itself. Creating a new queue would not solve the issue of how messages are handled once they are pulled from the queue.

**B. Utilize the AddPermission API function to assign the necessary permissions.**
- The AddPermission API function is used to grant permissions to other AWS accounts to send messages to the queue or to change the queue's attributes. It does not affect message processing or visibility. Therefore, it is not relevant to resolving the issue of duplicate records in the RDS table caused by message reprocessing.

**C. Utilize the ReceiveMessage API function to establish a suitable wait duration.**
- The ReceiveMessage API function is used to retrieve messages from the queue. While you can control aspects of message retrieval (such as the wait time for long polling), it does not affect how long messages remain invisible after they are received. This option does not address the root cause of duplicate processing due to the message visibility timeout.

### Technical Details for AWS Solutions Architect Associate Exam

1. **Message Visibility Timeout**: Understand that the visibility timeout is a crucial parameter that dictates how long a message remains invisible after being fetched by a consumer. The default timeout is 30 seconds, but this can be configured between 0 seconds to 12 hours.

2. **ChangeMessageVisibility API**: Familiarize yourself with how this API call works, including its parameters (QueueUrl, ReceiptHandle, VisibilityTimeout) and its role in extending the invisibility of a message while it is still being processed.

3. **Idempotency**: Consider implementing idempotency in your message processing logic. This means designing your application to ensure that even if a message is processed more than once, it will not lead to duplicate records. This can often involve using unique identifiers or timestamps.

4. **Error Handling**: Learn about how to implement error handling in message processing. If an error occurs during processing, you may want to handle the message differently, perhaps by sending it to a dead-letter queue instead of allowing it to become visible again.

5. **SQS Queue Types**: Understand the difference between standard queues and FIFO (First-In-First-Out) queues. FIFO queues guarantee that messages are processed exactly once and in the exact order they were sent, which can be beneficial in scenarios where order and duplication are critical.

These concepts are essential for passing the AWS Solutions Architect Associate Exam and for designing robust, scalable applications on AWS.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company hosts an application on multiple Amazon EC2 instances. The application processes messages from an Amazon SQS queue, writes to an Amazon RDS table, and deletes the message from the queue. Occasional duplicate records are found in the RDS table. The SQS queue does not contain any duplicate messages.
What should a solutions architect do to ensure messages are being processed once only?
{: .original-query}

### Original Questions

- [ ] A. Use the CreateQueue API call to create a new queue.
{: .originaloption}
- [ ] B. Use the AddPermission API call to add appropriate permissions.
{: .originaloption}
- [ ] C. Use the ReceiveMessage API call to set an appropriate wait time.
{: .originaloption}
- [ ] D. Use the ChangeMessageVisibility API call to increase the visibility timeout.
{: .originaloption}


### Comments

--- 
In scenarios involving Amazon SQS with multiple consumers, a situation may arise where one consumer begins processing a message while another consumer simultaneously picks up the same message. This can lead to the creation of duplicate records in the target data store. To mitigate this issue, SQS provides a mechanism to make a message invisible for a specified period once it has been received by a consumer. During this visibility timeout, other consumers are unable to access the message. After processing is complete, the consumer should delete the message from the queue. It is essential to configure the visibility timeout appropriately, extending it based on the maximum expected processing time for the message to ensure that no duplicate processing occurs. This approach helps maintain the integrity of the data and ensures that each message is processed only once.
{: .comment}
--- 
To sprinkle a little clarity on this, the Visibility Timeout in SQS is like a secret hide-and-seek timer for your messages! ⏳ It keeps a message under wraps, ensuring that only the first consumer who snags it with the ReceiveMessage API gets to play with it. If others try to peek, they'll be left waiting in suspense! 🎭 If you want to adjust how long a message stays hidden from prying eyes, you can use the ChangeMessageVisibility API. It’s like giving your message a little extra time to chill before anyone else can take a shot at it. So, let’s keep those pesky duplicates at bay! 🦠✨
{: .comment}
--- 
To guarantee that messages are processed just once, a solutions architect should opt for the ChangeMessageVisibility API call to extend the visibility timeout—yes, that's Option D. 

The visibility timeout is essentially a cloak of invisibility for messages drawn from an SQS queue. It keeps them hidden from other consumers while they’re being processed. If the processing takes longer than this timeout, the message reemerges, ready to be gobbled up again, leading to those pesky duplicate records. By extending the visibility timeout, the solutions architect ensures that the message remains off-limits to other consumers until it’s fully processed and can be safely deleted from the queue. 

Now, let’s quickly dismiss the other options: 

Option A, creating a new queue with the CreateQueue API, does little to solve the duplicate processing problem. 

Option B, adding permissions with the AddPermission API, is a red herring in this context—totally irrelevant. 

And Option C, adjusting wait times with the ReceiveMessage API, also misses the mark when it comes to addressing this issue. 

In short, sticking with the visibility timeout tweak is the way to keep those duplicates at bay.
{: .comment}
--- 
To address the occurrence of occasional duplicate records in the RDS table, it's crucial to ensure that messages are processed exactly once. One effective approach is to leverage the ChangeMessageVisibility API call to extend the visibility timeout of the messages. By doing this, you can prevent other instances from processing the same message while it is still being handled. This adjustment allows for a more controlled processing environment, significantly reducing the chances of duplicates. Implementing this strategy will enhance the reliability and integrity of your message processing system, leading to a more seamless experience overall.
{: .comment}
--- 
Oh, what a delightful puzzle we have here! 🌈 Let's sprinkle some clarity on this topic!

The choice of using the AddPermission API call to grant permissions is a bit of a red herring in this scenario. While permissions are important for accessing the SQS queue, they have nothing to do with the pesky issue of duplicate records sneaking into the RDS table. 

As for the ReceiveMessage API call, adjusting the wait time doesn't quite hit the mark either! This option is all about determining how long the call should pause while waiting for new messages from the SQS queue. Unfortunately, it doesn’t tackle the root of our duplicate record conundrum in the RDS table. 

So, let's keep our sights set on solutions that directly address the challenge at hand and ensure each message is processed only once! 🌟
{: .comment}

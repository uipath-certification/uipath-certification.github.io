---
layout: answered-question
title: "AWS A Company Hosts An Application Question"
meta: "AWS Exam Question: A solutions architect needs to design a solution for storing customer data during Aurora MySQL upgrades. What is the answer? Technologies: AWS Lambda, Amazon API Gateway."
slug: "q-34-hosts-application-aws-lambda-api"
certification: "AWS Solution Architect Associate Exam"
---


 A company utilizes AWS Lambda functions, triggered by an Amazon API Gateway API, to manage customer data in an Amazon Aurora MySQL database. However, during database upgrades, the Lambda functions are unable to connect to the database, leading to the loss of some customer data. A solutions architect is tasked with developing a strategy to ensure that customer data generated during these upgrade periods is not lost. What solution effectively addresses this need?
{: .query}

- [ ] A. Set up an Amazon RDS proxy to act as an intermediary between the Lambda functions and the database. Ensure that the Lambda functions are configured to connect to this RDS proxy.
{: .option}
- [ ] B. Extend the execution time of the Lambda functions to the highest limit. Implement a retry system within the code that saves the customer information in the database.
{: .option}
- [ ] C. Store the customer data in the local storage of Lambda. Set up new Lambda functions to access the local storage and transfer the customer data to the database.
{: .option}
- [x] D. Save the customer data in a FIFO queue using Amazon Simple Queue Service (Amazon SQS). Develop a new Lambda function to retrieve data from the queue and insert the customer information into the database.
{: .option}

D
{: .answer}

The correct answer to the question is **D. Save the customer data in a FIFO queue using Amazon Simple Queue Service (Amazon SQS). Develop a new Lambda function to retrieve data from the queue and insert the customer information into the database.**

### Explanation of the Correct Answer (D)

Using Amazon SQS, particularly a FIFO (First-In-First-Out) queue, provides a reliable way to store and process customer data during the database upgrade. Here's why this solution is effective:

1. **Asynchronous Processing**: By saving customer data in SQS, the Lambda functions can continue processing incoming events without being blocked by database upgrades. The data is stored in the queue until it can be processed.

2. **Decoupling of Services**: This solution decouples the data collection process from the data storage process. The first Lambda function collects and sends the data to SQS, while a separate Lambda function can be triggered to read from the queue and insert the data into the database when it is available.

3. **Durability**: SQS ensures that messages (customer data) are retained until they are successfully processed. This means that even if the database is down for an upgrade, no data will be lost.

4. **Scalability**: The architecture can scale effectively. If there is a surge in customer data, SQS can handle a large number of messages, and additional Lambda functions can be invoked to process the queue faster.

### Why the Other Answers Are Incorrect

**A. Set up an Amazon RDS proxy to act as an intermediary between the Lambda functions and the database. Ensure that the Lambda functions are configured to connect to this RDS proxy.**

- **Limitations**: While an RDS proxy can help manage connections to the database and improve connection pooling, it does not solve the problem of data loss during upgrades. If the database is unavailable during an upgrade, the Lambda functions will still fail to connect through the proxy. The proxy does not store messages; it merely serves to manage connections.

**B. Extend the execution time of the Lambda functions to the highest limit. Implement a retry system within the code that saves the customer information in the database.**

- **Ineffectiveness During Downtime**: Extending the execution time of Lambda functions does not address the underlying issue of database unavailability. If the database is down, the function will still fail regardless of the increased timeout. Implementing retries may lead to additional failures and does not ensure data durability.

**C. Store the customer data in the local storage of Lambda. Set up new Lambda functions to access the local storage and transfer the customer data to the database.**

- **Transient Nature of Local Storage**: Lambda functions have ephemeral storage (limited to 512 MB in a `/tmp` directory) that is not persistent and is cleared when the function execution ends. This means that if the function fails or if the execution environment is reused, the data stored locally could be lost. It’s not a reliable method for temporarily storing data during an upgrade.

### Technical Details for AWS Solution Architect Associate Exam

1. **AWS Lambda Limits**: Understand the limits of AWS Lambda, including execution timeout (maximum of 15 minutes) and memory limits (128 MB to 10 GB).

2. **Amazon SQS**: Know how SQS works, including FIFO vs. standard queues, message retention policies, and how to trigger Lambda functions based on SQS events.

3. **Database Upgrades**: Familiarize yourself with the impact of database upgrades on application availability and how various AWS services can help mitigate downtime and data loss.

4. **Decoupling Architecture**: Understand the importance of decoupling in microservices architectures and the benefits of using message queues to handle asynchronous processing.

5. **Design Patterns**: Be aware of common design patterns in AWS, such as event-driven architectures and the use of queues for buffering requests.

By focusing on these areas, candidates can enhance their understanding of the AWS ecosystem and its services, which is crucial for passing the AWS Solution Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company hosts an application on AWS Lambda functions that are invoked by an Amazon API Gateway API. The Lambda functions save customer data to an Amazon Aurora MySQL database. Whenever the company upgrades the database, the Lambda functions fail to establish database connections until the upgrade is complete. The result is that customer data is not recorded for some of the event.
A solutions architect needs to design a solution that stores customer data that is created during database upgrades.
Which solution will meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Provision an Amazon RDS proxy to sit between the Lambda functions and the database. Configure the Lambda functions to connect to the RDS proxy.
{: .originaloption}
- [ ] B. Increase the run time of the Lambda functions to the maximum. Create a retry mechanism in the code that stores the customer data in the database.
{: .originaloption}
- [ ] C. Persist the customer data to Lambda local storage. Configure new Lambda functions to scan the local storage to save the customer data to the database.
{: .originaloption}
- [ ] D. Store the customer data in an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Create a new Lambda function that polls the queue and stores the customer data in the database.
{: .originaloption}


### Comments

--- 
RDS Proxy mitigates application disruptions caused by database availability issues by seamlessly connecting to a new database instance while maintaining existing application connections. During failover events, RDS Proxy intelligently directs requests to the new database instance, significantly reducing failover times for both Aurora and RDS databases by as much as 66%. This capability ensures a more resilient architecture, allowing applications to maintain functionality and continuity even during database upgrades or outages.
{: .comment}
--- 
When the database goes on a little vacation for an upgrade, it’s not exactly a failover scenario; it’s more like the database is taking a coffee break ☕. During this upgrade, the database instance is completely offline, leaving RDS Proxy without a connection to a new instance—the poor thing is just left hanging! 

That's why option D, using Amazon SQS, is a clever choice. It acts like a cozy waiting room for incoming data, ensuring that nothing gets left behind while the database is off getting its makeover. Once the upgrade is done and the database is back in action, all that customer data can be smoothly transferred in. So, no data gets lost in the shuffle, and everyone leaves happy! 🎉
{: .comment}
--- 
Ah, the joys of the internet, where a flood of upvotes can sometimes lead us astray! Let’s take a moment to ponder the situation at hand. The original query doesn’t imply the existence of multiple databases, so the suggestion of using an RDS proxy seems a bit misplaced, doesn't it? After all, if there’s only one database in the equation, how exactly is an intermediary going to save the day? It’s like trying to find a middleman for a one-on-one conversation—unnecessary and, frankly, a bit baffling!
{: .comment}
--- 
The current architecture involves an Amazon Aurora MySQL database that experiences connectivity issues during upgrades, causing customer data to be lost. A robust solution is essential to ensure that customer information is reliably stored, even during database maintenance.

One effective approach is to implement Amazon Simple Queue Service (Amazon SQS) to save customer data in a FIFO (First-In-First-Out) queue. By doing so, you can ensure that all incoming customer data is queued and can be processed later without any loss. After the database upgrade is complete, a dedicated Lambda function can be developed to retrieve the data from the queue and insert it into the database seamlessly. This solution not only maintains data integrity but also enhances the overall reliability of the application during database upgrades.

Alternatively, utilizing an Amazon RDS proxy could streamline the connection management between the Lambda functions and the Aurora MySQL database, improving resilience during upgrades. However, using a queue system provides a proactive way to handle potential data loss and ensures a smooth user experience.

With these strategies in place, you can confidently manage customer data effectively, even in times of database transition.
{: .comment}
--- 
Oh, what a delightful discovery! 🎉 The information shared in the link you’re responding to clearly states that RDS Proxy is indeed available for Aurora MySQL. It’s a fantastic resource that can help streamline connections and enhance your application’s performance. What a wonderful way to ensure seamless database interactions during upgrades!
{: .comment}

---
layout: answered-question
title: "AWS An Ecommerce Company Wants To Launch A Question"
meta: "AWS Exam Question: An ecommerce company seeks to launch a one-deal-a-day website on AWS, managing millions of requests with low latency. Find the answer using AWS technologies like Lambda and DynamoDB."
slug: "q-47-ecommerce-launch-one-deal-a-day-AWS"
certification: "AWS Solution Architect Associate Exam"
---


 An ecommerce company is planning to introduce a one-deal-a-day website hosted on AWS, where a single product will be available for purchase each day for a duration of 24 hours. They aim to manage millions of requests per hour with millisecond latency during peak times. What solution can fulfill these needs while minimizing operational overhead?
{: .query}

- [ ] A. Utilize Amazon S3 to host the complete website across various S3 buckets. Incorporate Amazon CloudFront distributions and designate the S3 buckets as origins for these distributions. Keep the order data stored in Amazon S3.
{: .option}
- [ ] B. Launch the complete website using Amazon EC2 instances configured in Auto Scaling groups spanning multiple Availability Zones. Implement an Application Load Balancer (ALB) to manage the distribution of traffic to the website. Additionally, incorporate a second ALB for the backend APIs. Use Amazon RDS for MySQL to store the data.
{: .option}
- [ ] C. Transition the entire application to operate within containers. Deploy these containers on Amazon Elastic Kubernetes Service (Amazon EKS). Implement the Kubernetes Cluster Autoscaler to adjust the number of pods in response to traffic spikes. Utilize Amazon RDS for MySQL to manage data storage.
{: .option}
- [x] D. Utilize an Amazon S3 bucket to host the website's static assets. Implement an Amazon CloudFront distribution and designate the S3 bucket as the origin. Employ Amazon API Gateway along with AWS Lambda functions for the backend APIs. Save the data in Amazon DynamoDB.
{: .option}

D
{: .answer}

The correct answer to the question is **D**. Let's break down why this solution is the best fit for the ecommerce company's requirements and examine why the other options may not be ideal.

### Why Option D is Correct:

1. **Static Website Hosting**: 
   - **Amazon S3** is well-suited for hosting static websites. It provides high durability and availability, and you can serve static assets (HTML, CSS, JavaScript) directly from S3 buckets. This minimizes operational overhead since S3 is fully managed.

2. **Global Distribution and Low Latency**:
   - **Amazon CloudFront** is a Content Delivery Network (CDN) that caches content at edge locations around the world, which reduces latency for users and improves load times, especially during peak hours.

3. **Serverless Architecture**:
   - **Amazon API Gateway** enables the creation and management of APIs without the need for provisioning servers. It scales automatically based on the number of requests.
   - **AWS Lambda** allows running backend logic without managing servers, further reducing operational overhead. Lambda functions can be triggered by API Gateway, allowing the backend to handle requests in a scalable manner.

4. **Scalable Data Storage**:
   - **Amazon DynamoDB** is a fully managed NoSQL database service designed for high availability and scalability. It automatically scales up and down to adjust for capacity and maintain performance, which is crucial for handling millions of requests during peak hours.

### Why the Other Options are Incorrect:

#### A. Utilize Amazon S3 with CloudFront:
- This option correctly uses S3 and CloudFront for static content, but it mentions storing order data in S3. S3 is not suitable for dynamic data management or transactional data (like order processing) because it lacks the capabilities of a database (like querying, indexing, etc.). This would create significant challenges in managing order data efficiently.

#### B. Launch with EC2 and ALB:
- While this option can handle high traffic volumes, it requires significant operational overhead to manage EC2 instances, configure Auto Scaling groups, and maintain Application Load Balancers (ALBs). This option involves more complexity and operational management compared to serverless architectures (like AWS Lambda), which can automatically scale without manual intervention. Additionally, RDS requires management tasks such as backups, patching, and scaling, which add to the operational burden.

#### C. Deploy Containers with EKS:
- Using Amazon Elastic Kubernetes Service (EKS) can provide scalability, but it introduces complexity in managing the Kubernetes cluster, pods, and networking. It requires knowledge of container orchestration which adds to the operational overhead. Additionally, it may not be necessary for a simple use case like a one-deal-a-day website, where serverless options would suffice.

### Key Technical Concepts for AWS Solutions Architect Associate Exam:

1. **Amazon S3**: Understand how to configure S3 buckets for static website hosting, security (bucket policies), and lifecycle management.

2. **Amazon CloudFront**: Learn about caching strategies, invalidation, and how CloudFront integrates with S3 and other origins.

3. **AWS Lambda**: Familiarize yourself with the event-driven architecture, limits on execution time, and how to manage dependencies.

4. **Amazon API Gateway**: Know how to create RESTful APIs, manage authorization, and enable CORS.

5. **Amazon DynamoDB**: Understand the concepts of tables, items, attributes, and how to use it for high-performance reads/writes.

6. **Serverless vs. Traditional Architectures**: Recognize the trade-offs between operational overhead, scalability, and complexity in various architectures.

By understanding these concepts and the reasoning behind each solution, you will be well-equipped to tackle questions related to building scalable and efficient architectures on AWS for the AWS Solutions Architect Associate Exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one product on sale for a period of 24 hours. The company wants to be able to handle millions of requests each hour with millisecond latency during peak hours.
Which solution will meet these requirements with the LEAST operational overhead?
{: .original-query}

### Original Questions

- [ ] A. Use Amazon S3 to host the full website in different S3 buckets. Add Amazon CloudFront distributions. Set the S3 buckets as origins for the distributions. Store the order data in Amazon S3.
{: .originaloption}
- [ ] B. Deploy the full website on Amazon EC2 instances that run in Auto Scaling groups across multiple Availability Zones. Add an Application Load Balancer (ALB) to distribute the website traffic. Add another ALB for the backend APIs. Store the data in Amazon RDS for MySQL.
{: .originaloption}
- [ ] C. Migrate the full application to run in containers. Host the containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use the Kubernetes Cluster Autoscaler to increase and decrease the number of pods to process bursts in traffic. Store the data in Amazon RDS for MySQL.
{: .originaloption}
- [ ] D. Use an Amazon S3 bucket to host the website's static content. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the origin. Use Amazon API Gateway and AWS Lambda functions for the backend APIs. Store the data in Amazon DynamoDB.
{: .originaloption}


### Comments

--- 
The most suitable solution is option D, as it leverages fully managed services that offer infinite scalability. Amazon DynamoDB provides a highly scalable NoSQL database solution capable of handling large volumes of requests with low latency. By utilizing Amazon API Gateway, you can efficiently manage and scale the backend APIs, while AWS Lambda allows for serverless computing, automatically scaling in response to incoming traffic. Furthermore, hosting the static assets in Amazon S3 and employing Amazon CloudFront as a content delivery network ensures rapid content delivery and scalability for the website. This architecture minimizes operational overhead, allowing the ecommerce company to focus on their core business activities while maintaining high performance and availability.
{: .comment}
--- 
The winning solution for keeping things simple and breezy is option D! 🎉 First off, we’ll host the website's static goodies in an Amazon S3 bucket. Then, we’ll sprinkle some magic with an Amazon CloudFront distribution, making that S3 bucket the main attraction. For the backend APIs, we’ll bring in the dynamic duo: Amazon API Gateway and AWS Lambda functions. 🎈 And let’s not forget to stash all that important data in Amazon DynamoDB.

Why is this a fantastic choice? Well, using Amazon S3 for static content and CloudFront for distribution means your site can handle millions of requests per hour without breaking a sweat. 🏃‍♂️💨 Plus, with API Gateway and Lambda, you’re looking at a super scalable backend that can handle traffic spikes like a champ. And the cherry on top? This setup gives you minimal operational overhead since it leans on fully managed services that automatically adjust to demand. Now that's what we call a win-win! 🎊
{: .comment}
--- 
Option A misses the mark. Relying on multiple S3 buckets to host the entire website simply won’t cut it when it comes to handling millions of requests per hour with the millisecond latency that customers dream of.

As for Option B, while it might seem tempting to go the route of EC2 instances backed by an Application Load Balancer and an RDS database, this setup brings a hefty dose of operational overhead. Managing and scaling such an infrastructure is like trying to juggle flaming torches while riding a unicycle—possible, but definitely not the easiest way to go about it.

Now, Option C, with its allure of containers on Amazon Elastic Kubernetes Service (EKS), does offer the promise of performance and scalability. However, it also drags along a significant burden of operational complexity. Sure, you could go down this path, but why wrestle with all that when there are simpler, fully managed services like S3 and CloudFront that could do the heavy lifting for you?
{: .comment}
--- 
To effectively utilize DynamoDB in an ecommerce transaction environment, particularly when SQL databases are traditionally required, it’s essential to understand the strengths of DynamoDB. This fully managed NoSQL database service offers high performance and scalability, making it an excellent choice for handling large volumes of requests with low latency.

DynamoDB is designed to manage unstructured data and can easily accommodate the rapid read and write operations typical of ecommerce transactions. Its flexible schema allows you to adapt to changing business needs without the complexities associated with traditional SQL databases. Additionally, its built-in support for key-value and document data structures enables efficient data retrieval.

To implement DynamoDB in your ecommerce platform, you can set up tables to store product details, transaction records, and user information. By leveraging features like provisioned throughput and on-demand scaling, you can ensure that your application remains performant during peak traffic times. Furthermore, integrating DynamoDB with other AWS services, such as AWS Lambda for serverless computing, can streamline your backend processes and reduce operational overhead.

Overall, using DynamoDB can significantly enhance your ecommerce application's responsiveness and scalability while simplifying management tasks, allowing you to focus on delivering exceptional customer experiences.
{: .comment}
--- 
When it comes to achieving impressive millisecond latency, Amazon DynamoDB is your go-to option! This fully managed NoSQL database service is designed for high performance and can effortlessly handle a massive number of requests—perfect for those bustling peak hours! With its seamless scalability and low-latency response times, DynamoDB ensures that your one-deal-a-day website runs as smoothly as a well-oiled machine. 🎉
{: .comment}

---
layout: answered-question
title: "AWS A Global Company Hosts Its Web Application Question"
meta: "AWS Exam Question: A global company uses Amazon EC2, ALB, and S3 to host its app. To enhance performance, what solutions are recommended? Answer: CloudFront."
slug: "q-47-global-company-hosts-ec2-alb"
certification: "AWS Solution Architect Associate Exam"
---


 A global organization operates a web application on Amazon EC2 instances, utilizing an Application Load Balancer (ALB). This application consists of both static and dynamic data, with static data stored in an Amazon S3 bucket. To enhance performance and decrease latency for both types of data, the company is employing its own domain name, which is registered with Amazon Route 53. What actions should a solutions architect take to fulfill these objectives?
{: .query}

- [x] A. Set up an Amazon CloudFront distribution with both the S3 bucket and the ALB as its origins. Adjust Route 53 settings to direct traffic to the CloudFront distribution.
{: .option}
- [ ] B. Set up an Amazon CloudFront distribution with the Application Load Balancer (ALB) designated as the origin. Establish a standard accelerator using AWS Global Accelerator, with the S3 bucket serving as an endpoint. Configure Route 53 to direct traffic to the CloudFront distribution.
{: .option}
- [ ] C. Establish an Amazon CloudFront distribution with the S3 bucket serving as the origin. Set up a standard AWS Global Accelerator that includes both the ALB and the CloudFront distribution as its endpoints. Create a custom domain name that directs to the DNS name of the accelerator. Utilize this custom domain name as the endpoint for the web application.
{: .option}
- [ ] D. Set up an Amazon CloudFront distribution with the Application Load Balancer (ALB) as its origin. Establish a standard AWS Global Accelerator that uses the S3 bucket as an endpoint. Create two distinct domain names; direct one of them to the CloudFront DNS name for serving dynamic content, while the other should point to the accelerator DNS name for static content. Utilize these domain names as endpoints for the web application.
{: .option}

A
{: .answer}

The correct answer to the question is **A. Set up an Amazon CloudFront distribution with both the S3 bucket and the ALB as its origins. Adjust Route 53 settings to direct traffic to the CloudFront distribution.**

### Why A is Correct:

1. **CloudFront for Caching**: Amazon CloudFront is a content delivery network (CDN) that caches static content at edge locations close to users. By setting up a CloudFront distribution with the S3 bucket (for static content) and the ALB (for dynamic content) as origins, the solution will leverage the benefits of caching and reduce latency for both types of data.

2. **Single Endpoint**: Using CloudFront allows the application to have a single endpoint for users. Route 53 can then be configured to point to the CloudFront distribution, simplifying DNS management and improving user experience as they access both static and dynamic content seamlessly.

3. **Performance and Scalability**: CloudFront automatically scales to handle traffic spikes and provides better performance through its global network of edge locations, enhancing the user experience for both static and dynamic content.

4. **Cost Efficiency**: By caching static content in CloudFront, the number of requests to the S3 bucket can be reduced, which can lead to lower S3 costs and improved response times.

### Why the Other Options are Incorrect:

**B. Set up an Amazon CloudFront distribution with the Application Load Balancer (ALB) designated as the origin. Establish a standard accelerator using AWS Global Accelerator, with the S3 bucket serving as an endpoint. Configure Route 53 to direct traffic to the CloudFront distribution.**
- **Incorrect Use of Global Accelerator**: This option incorrectly suggests using AWS Global Accelerator with the S3 bucket as an endpoint. Global Accelerator is better suited for improving the availability and performance of applications that are hosted on EC2 or ALB, but using it with S3 doesn’t align with its intended use. The S3 bucket would be better served directly through CloudFront.

**C. Establish an Amazon CloudFront distribution with the S3 bucket serving as the origin. Set up a standard AWS Global Accelerator that includes both the ALB and the CloudFront distribution as its endpoints. Create a custom domain name that directs to the DNS name of the accelerator. Utilize this custom domain name as the endpoint for the web application.**
- **Overcomplicated Architecture**: This option introduces unnecessary complexity by adding AWS Global Accelerator in front of CloudFront. Global Accelerator is typically used for TCP/UDP traffic and can complicate the architecture without providing significant benefits for a web application that primarily serves HTTP/HTTPS traffic through CloudFront.

**D. Set up an Amazon CloudFront distribution with the Application Load Balancer (ALB) as its origin. Establish a standard AWS Global Accelerator that uses the S3 bucket as an endpoint. Create two distinct domain names; direct one of them to the CloudFront DNS name for serving dynamic content, while the other should point to the accelerator DNS name for static content. Utilize these domain names as endpoints for the web application.**
- **Inefficient Use of Resources**: This option unnecessarily splits the architecture into two separate domain names and endpoints, which complicates the setup. The S3 bucket can efficiently serve static content through CloudFront, and dynamic content can be served through the same CloudFront distribution, making this option redundant and less efficient.

### Technical Details for AWS Solution Architect Associate Exam:

- **Amazon S3**: A scalable object storage service, ideal for storing static content (images, videos, etc.).
  
- **Amazon CloudFront**: A global CDN that accelerates the delivery of static and dynamic content by caching it at edge locations. Understanding how to configure origins and cache behaviors is crucial.

- **Application Load Balancer (ALB)**: Used for distributing incoming application traffic across multiple targets (such as EC2 instances) and is optimized for HTTP and HTTPS traffic.

- **Amazon Route 53**: A scalable DNS web service that routes end-users to Internet applications by translating human-friendly names into numeric IP addresses.

- **AWS Global Accelerator**: A networking service that improves the availability and performance of applications with users globally. However, it is typically used for applications requiring TCP/UDP and not directly for serving web content.

In preparation for the AWS Certified Solutions Architect - Associate exam, candidates should focus on understanding how these services interact, best practices for architecture design, and the implications of choosing different configurations based on application requirements.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A global company hosts its web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The web application has static data and dynamic data. The company stores its static data in an Amazon S3 bucket. The company wants to improve performance and reduce latency for the static data and dynamic data. The company is using its own domain name registered with Amazon Route 53.
What should a solutions architect do to meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Create an Amazon CloudFront distribution that has the S3 bucket and the ALB as origins. Configure Route 53 to route traffic to the CloudFront distribution.
{: .originaloption}
- [ ] B. Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint Configure Route 53 to route traffic to the CloudFront distribution.
{: .originaloption}
- [ ] C. Create an Amazon CloudFront distribution that has the S3 bucket as an origin. Create an AWS Global Accelerator standard accelerator that has the ALB and the CloudFront distribution as endpoints. Create a custom domain name that points to the accelerator DNS name. Use the custom domain name as an endpoint for the web application.
{: .originaloption}
- [ ] D. Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Create two domain names. Point one domain name to the CloudFront DNS name for dynamic content. Point the other domain name to the accelerator DNS name for static content. Use the domain names as endpoints for the web application.
{: .originaloption}


### Comments


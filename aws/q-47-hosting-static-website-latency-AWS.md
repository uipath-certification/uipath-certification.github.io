---
layout: answered-question
title: "AWS A Company Is Hosting A Static Website Question"
meta: "AWS Exam Question: A company hosts a static website on S3 with Route 53. How can they reduce latency for global users cost-effectively? Find the answer using CloudFront."
slug: "q-47-hosting-static-website-latency-AWS"
certification: "AWS Solution Architect Associate Exam"
---


 A company is utilizing Amazon S3 to host a static website and is managing its DNS through Amazon Route 53. With a rising global user base leading to increased demand for the site, the company needs to reduce latency for visitors accessing the website. What is the most cost-effective solution to fulfill these requirements?
{: .query}

- [ ] A. Duplicate the S3 bucket housing the website across all AWS Regions. Include Route 53 geolocation routing records.
{: .option}
- [ ] B. Set up accelerators using AWS Global Accelerator. Link the provided IP addresses to the S3 bucket. Update the Route 53 records to direct traffic to the IP addresses of the accelerators.
{: .option}
- [x] C. Set up an Amazon CloudFront distribution in front of the S3 bucket. Modify the Route 53 records to direct traffic to the CloudFront distribution.
{: .option}
- [ ] D. Activate S3 Transfer Acceleration for the bucket. Update the Route 53 records to direct to the new endpoint.
{: .option}

C
{: .answer}

The correct answer to the question is **C. Set up an Amazon CloudFront distribution in front of the S3 bucket. Modify the Route 53 records to direct traffic to the CloudFront distribution.** Here's a detailed explanation of why this solution is the most cost-effective and the best choice for decreasing latency, along with insights into why the other options are less suitable.

### Explanation of the Correct Answer (Option C)

**Amazon CloudFront** is a Content Delivery Network (CDN) that caches copies of your content at edge locations around the world. When a user requests content from your website, CloudFront delivers it from the nearest edge location, significantly reducing latency. 

**Benefits of Using CloudFront:**
1. **Global Distribution**: CloudFront has a large number of edge locations globally, which helps in reducing latency for users regardless of their geographic location.
2. **Caching**: Static content is cached at the edge locations, which reduces the load on the S3 bucket and speeds up content delivery.
3. **Cost-Effectiveness**: While there is a cost associated with using CloudFront, it is generally lower than duplicating S3 buckets in multiple regions or using AWS Global Accelerator, especially for large-scale traffic.
4. **Integration with Route 53**: You can easily update your Route 53 DNS records to point to the CloudFront distribution, ensuring that all traffic is routed efficiently.

### Analysis of the Wrong Answers

**Option A: Duplicate the S3 bucket housing the website across all AWS Regions. Include Route 53 geolocation routing records.**

- **Complexity and Cost**: Duplicating the S3 bucket in multiple regions increases complexity and cost. You would need to manage synchronization of content across multiple buckets, which can lead to potential inconsistencies.
- **Latency Reduction**: While having content in multiple regions can reduce latency for users in those regions, it is not as efficient as using a CDN like CloudFront, which automatically handles requests from the nearest edge location without the need for manual content duplication.

**Option B: Set up accelerators using AWS Global Accelerator. Link the provided IP addresses to the S3 bucket. Update the Route 53 records to direct traffic to the IP addresses of the accelerators.**

- **Higher Cost**: AWS Global Accelerator is designed for improving latency for dynamic applications and can be more expensive than using CloudFront, especially for a static website.
- **Not Optimized for Static Content**: Global Accelerator is not specifically optimized for static content delivery like CloudFront is. It does not provide caching capabilities, meaning users would still experience latency associated with accessing the S3 bucket directly.

**Option D: Activate S3 Transfer Acceleration for the bucket. Update the Route 53 records to direct to the new endpoint.**

- **Limited Benefits**: S3 Transfer Acceleration speeds up uploads to S3 from clients located far from the S3 bucket, but it does not provide caching or improve download speeds for static content in the same way CloudFront does.
- **Cost Implications**: While it can be beneficial for upload scenarios, it is not as cost-effective or effective for broad distribution of static content compared to using CloudFront.

### Technical Details for AWS Solutions Architect Associate Exam

When preparing for the AWS Solutions Architect Associate exam, it is important to understand the following concepts:

1. **Amazon S3**: Familiarize yourself with S3 storage classes, bucket policies, and CORS configuration for static websites.
2. **Amazon CloudFront**: Know how to set up a CloudFront distribution, understand edge locations, caching behavior, and invalidation of cached content.
3. **Route 53**: Understand DNS routing policies, including geolocation, latency-based routing, and how to configure alias records for integrating with AWS resources.
4. **Cost Management**: Be aware of the pricing models for different AWS services, including S3, CloudFront, and Global Accelerator, to make informed decisions on cost-effective solutions.
5. **Performance Optimization**: Study how to optimize performance for web applications using AWS services, including content delivery networks, caching strategies, and latency reduction techniques.

By understanding these concepts, you will be well-equipped to tackle questions related to optimizing web application performance on the AWS Solutions Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is hosting a static website on Amazon S3 and is using Amazon Route 53 for DNS. The website is experiencing increased demand from around the world. The company must decrease latency for users who access the website.
Which solution meets these requirements MOST cost-effectively?
{: .original-query}

### Original Questions

- [ ] A. Replicate the S3 bucket that contains the website to all AWS Regions. Add Route 53 geolocation routing entries.
{: .originaloption}
- [ ] B. Provision accelerators in AWS Global Accelerator. Associate the supplied IP addresses with the S3 bucket. Edit the Route 53 entries to point to the IP addresses of the accelerators.
{: .originaloption}
- [ ] C. Add an Amazon CloudFront distribution in front of the S3 bucket. Edit the Route 53 entries to point to the CloudFront distribution.
{: .originaloption}
- [ ] D. Enable S3 Transfer Acceleration on the bucket. Edit the Route 53 entries to point to the new endpoint.
{: .originaloption}


### Comments


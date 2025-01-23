---
layout: answered-question
title: "AWS A Company Collects Data Question"
meta: "AWS Exam Question: A company collects data for temperature, humidity, and pressure globally, aggregating 500 GB daily in Amazon S3. Find the answer using AWS Glue and Kinesis."
slug: "q-47-temperature-humidity-pressure-AWS S3"
certification: "AWS Solution Architect Associate Exam"
---


 A company gathers data on temperature, humidity, and atmospheric pressure from various cities around the world. Each site generates approximately 500 GB of data daily, and all locations are equipped with high-speed Internet connections. To streamline operations, the company aims to quickly consolidate this data into a single Amazon S3 bucket. What solution would best satisfy these criteria while minimizing operational complexity?
{: .query}

- [x] A. Enable S3 Transfer Acceleration for the target S3 bucket. Utilize multipart uploads to directly transfer site data to the target S3 bucket.
{: .option}
- [ ] B. Transfer the data from every site to an S3 bucket located in the nearest Region. Utilize S3 Cross-Region Replication to duplicate the objects into the target S3 bucket. After that, delete the data from the original S3 bucket.
{: .option}
- [ ] C. Plan daily jobs for the AWS Snowball Edge Storage Optimized devices to move data from each location to the nearest Region. Utilize S3 Cross-Region Replication to duplicate objects into the target S3 bucket.
{: .option}
- [ ] D. Transfer the data from each site to an Amazon EC2 instance located in the nearest Region. Save the data on an Amazon Elastic Block Store (Amazon EBS) volume. Periodically, create an EBS snapshot and move it to the Region where the destination S3 bucket resides. Then, restore the EBS volume in that Region.
{: .option}

A
{: .answer}

The correct answer to the question is **A. Enable S3 Transfer Acceleration for the target S3 bucket. Utilize multipart uploads to directly transfer site data to the target S3 bucket.**

### Explanation for the Correct Answer (A)

1. **S3 Transfer Acceleration**: This feature uses Amazon CloudFront's globally distributed edge locations to accelerate uploads to S3. When a file is uploaded to the S3 bucket, the data is routed to the nearest edge location, which then quickly transfers the data to the S3 bucket over optimized network paths. This minimizes latency and speeds up the upload process, which is essential since the company needs to aggregate large amounts of data (500 GB daily from each site).

2. **Multipart Uploads**: Utilizing multipart uploads allows large objects to be uploaded in parts. This not only enables faster uploads (as multiple parts can be uploaded concurrently) but also improves the reliability of uploads. If a part fails, only that part needs to be retransmitted rather than the entire object.

3. **Operational Simplicity**: This solution is straightforward as it directly uploads the data to the target S3 bucket without needing intermediate storage or additional steps (like replication or transferring data to EC2 instances), which minimizes operational complexity.

### Why the Other Options are Incorrect

**B. Transfer the data from every site to an S3 bucket located in the nearest Region. Utilize S3 Cross-Region Replication to duplicate the objects into the target S3 bucket. After that, delete the data from the original S3 bucket.**
- **Latency and Complexity**: Transferring data to a nearest-region bucket introduces additional latency, and cross-region replication can add complexity and increase costs. The primary goal is to aggregate data as quickly as possible, making this approach less ideal.
- **Operational Overhead**: This option involves transferring data to two different S3 buckets and deleting data afterward, which adds operational overhead compared to a direct upload.

**C. Plan daily jobs for the AWS Snowball Edge Storage Optimized devices to move data from each location to the nearest Region. Utilize S3 Cross-Region Replication to duplicate objects into the target S3 bucket.**
- **Hardware Dependency**: The use of AWS Snowball devices involves physical hardware, which introduces delays due to shipping, setup, and transfer times. This is not suitable for real-time or near-real-time data aggregation.
- **Cost and Complexity**: The need to manage physical devices adds significant complexity and cost to the solution, which goes against the requirement for minimizing operational complexity.

**D. Transfer the data from each site to an Amazon EC2 instance located in the nearest Region. Save the data on an Amazon Elastic Block Store (Amazon EBS) volume. Periodically, create an EBS snapshot and move it to the Region where the destination S3 bucket resides. Then, restore the EBS volume in that Region.**
- **Indirect and Inefficient**: This approach is indirect, requiring multiple steps (uploading to EC2, creating EBS snapshots, transferring snapshots) and is less efficient than directly uploading to S3.
- **Operational Complexity**: Managing EC2 instances, EBS volumes, and snapshots increases operational complexity, which the company is trying to minimize.

### Technical Details for AWS Solutions Architect Associate Exam

If a user is preparing for the AWS Solutions Architect Associate exam, they should understand the following concepts related to AWS S3 and data transfer:

1. **S3 Transfer Acceleration**: Candidates should be familiar with how this service works, including the benefits of using CloudFront for optimized data transfer and the implications for latency.
   
2. **Multipart Uploads**: Understanding the multipart upload feature, including its benefits for large file transfers, the ability to upload parts concurrently, and how it handles failures.

3. **Data Transfer Options**: Candidates should be able to evaluate different data transfer options (direct uploads vs. intermediate storage) and understand when to use services like Snowball versus direct network transfers.

4. **S3 Cross-Region Replication**: Candidates should know how and when to use cross-region replication, the associated costs, and the implications for data consistency and availability.

By focusing on these areas, candidates can better understand how to design efficient and cost-effective solutions using AWS services.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection.
The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity.
Which solution meets these requirements?
{: .original-query}

### Original Questions

- [ ] A. Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket.
{: .originaloption}
- [ ] B. Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.
{: .originaloption}
- [ ] C. Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket.
{: .originaloption}
- [ ] D. Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region.
{: .originaloption}


### Comments

--- 
The objective is to efficiently aggregate data from multiple global sites into a single Amazon S3 bucket while minimizing operational complexity. 

Option A is the most suitable solution, as enabling S3 Transfer Acceleration leverages Amazon's edge locations to facilitate rapid data transfers. This feature significantly enhances upload speeds by utilizing optimized network paths. Additionally, employing multipart uploads allows for large files to be uploaded in parallel, further increasing transfer efficiency.

In contrast, options B, C, and D do not effectively minimize operational complexity or expedite the data transfer process. These alternatives involve additional steps, such as transferring data to intermediary locations or using separate storage solutions, which can introduce delays and increase management overhead.
{: .comment}
--- 
When dealing with a mountain of data from all corners of the globe, it’s essential to have a speedy and simple plan to gather everything into one cozy Amazon S3 bucket. With high-speed Internet connections in place, you’re set to transfer those hefty 500 GB daily data loads from each site without a hitch. 🚀

The best approach? Drum roll, please... **Option A: S3 Transfer Acceleration!** 🎉 Here's why:

- It’s like a turbo boost for your data—perfect for long-distance transfers using Edge Locations. Think of it as a friendly courier zipping around the globe to fetch your files.
- This feature can increase transfer speeds by an impressive 50-500%! That’s not just fast; that’s lightning! ⚡
- Ideal scenarios for this include mobile and web app uploads, sharing data across distributed offices, and exchanging information with trusted partners. It’s particularly useful for sharing large datasets—imagine your customers having a VIP express lane for their uploads!

Now, let’s take a quick peek at the other options:

- **Option B** is more suited for disaster recovery. Great if you're playing it safe, but not quite the speedster we need here.
- **Option C** involves transferring data between your local setup and the AWS Cloud—helpful, but not exactly a race to the finish line.
- **Option D** is also focused on disaster recovery, which is important but lacks the speedy aggregation we’re after.

So, when it comes to gathering data faster than a cheetah on roller skates, S3 Transfer Acceleration is your best bet! 🏎️💨
{: .comment}
--- 
Option C seems to be the way to go, right? We have these "local environments" (or "sites," if you will) diligently gathering data that needs to make its grand entrance into the AWS cloud. So why not go with C? The question doesn’t mention any large objects, which means the whole "multipart upload" notion isn’t even on the table. It's like trying to fit a square peg in a round hole—just doesn't add up!
{: .comment}
--- 
Hello everyone,

I recently completed the exam, and I must say it was quite challenging! I encountered around 150 questions, and none of them were sourced from examtopics. The questions we discuss here seem significantly easier compared to what I faced today. I highly recommend supplementing your study materials with some YouTube videos, particularly those by Sthithapragna. I found their content to be very relevant and accurate based on my experience with today’s exam. I hope this feedback proves helpful to all of you!
{: .comment}
--- 
Let’s dive into the details! 🌟 

The second option proposes a delightful approach of transferring data from each location to an Amazon S3 bucket situated in the nearest region. This strategy takes full advantage of the high-speed Internet connections available, ensuring a swift transfer of data. Once the data is in the initial S3 bucket, S3 Cross-Region Replication comes into play, effortlessly creating copies of the objects in the target S3 bucket. This seamless replication makes it a breeze to gather all the data in one place, minimizing any fuss and facilitating a smooth aggregation process. Happy data collecting! 📊✨
{: .comment}

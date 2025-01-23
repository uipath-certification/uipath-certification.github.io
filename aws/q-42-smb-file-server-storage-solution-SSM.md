---
layout: answered-question
title: "AWS A Company Is Running An SMB File Server Question"
meta: "AWS Exam Question: A company needs to manage SMB file storage efficiently, ensuring low-latency access and lifecycle management. The answer includes AWS S3 and EFS."
slug: "q-42-smb-file-server-storage-solution-SSM"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates an SMB file server within its data center that hosts large files, which see frequent access in the initial days after their creation. However, after a week, these files tend to be accessed infrequently. As the overall data size approaches the company's storage limits, a solutions architect is tasked with expanding available storage capacity while ensuring that recently accessed files remain readily accessible with low latency. Additionally, the architect needs to implement a file lifecycle management strategy to prevent future storage challenges. What solution would effectively address these needs?
{: .query}

- [ ] A. Utilize AWS DataSync to transfer data that is over 7 days old from the SMB file server to AWS.
{: .option}
- [x] B. Set up an Amazon S3 File Gateway to expand the organization's storage capacity. Implement an S3 Lifecycle policy to move the data to S3 Glacier Deep Archive after a period of 7 days.
{: .option}
- [ ] C. Set up an Amazon FSx for Windows File Server file system to expand the company's storage capacity.
{: .option}
- [ ] D. Set up a utility on every user's computer to connect to Amazon S3. Establish an S3 Lifecycle policy to move the data to S3 Glacier Flexible Retrieval after a period of 7 days.
{: .option}

B
{: .answer}

The correct answer to the question is **B. Set up an Amazon S3 File Gateway to expand the organization's storage capacity. Implement an S3 Lifecycle policy to move the data to S3 Glacier Deep Archive after a period of 7 days.**

### Explanation of the Correct Answer (B):

1. **Amazon S3 File Gateway**: This service allows on-premises applications to access cloud storage in Amazon S3 while providing low-latency access to frequently accessed files. Files stored in S3 can be accessed as though they are on a local file system, which means that the most recently accessed files remain easily accessible while also offloading older files to a cost-effective storage solution.

2. **S3 Lifecycle Policy**: By implementing a lifecycle policy that transitions data to S3 Glacier Deep Archive after 7 days, the company can efficiently manage its storage costs. Since the files are rarely accessed after this period, moving them to a lower-cost storage tier is both practical and cost-effective. S3 Glacier Deep Archive is designed for data that is rarely accessed, providing significant cost savings compared to standard S3 storage.

3. **Scalability and Flexibility**: Using S3 allows the company to scale its storage capacity seamlessly. As the total data size increases, S3 can accommodate it without the need for additional on-premises hardware.

### Why the Other Options are Incorrect:

**A. Utilize AWS DataSync to transfer data that is over 7 days old from the SMB file server to AWS.**
- **Incorrect because**: AWS DataSync is primarily used for transferring data efficiently to and from AWS storage. While it can help move data to AWS, it does not provide a mechanism for maintaining low-latency access to frequently accessed files. After transferring files to S3, there would be no direct file system interface for users to access the files without additional configuration, potentially leading to longer access times for recently accessed files.

**C. Set up an Amazon FSx for Windows File Server file system to expand the company's storage capacity.**
- **Incorrect because**: Amazon FSx for Windows File Server provides a fully managed Windows file system that supports SMB and is ideal for workloads requiring low-latency access to frequently accessed files. However, it is more expensive than S3 and does not provide a built-in lifecycle management feature to automatically transition older files to a cheaper storage class, making it less suitable for the requirement of cost-effective storage management.

**D. Set up a utility on every user's computer to connect to Amazon S3. Establish an S3 Lifecycle policy to move the data to S3 Glacier Flexible Retrieval after a period of 7 days.**
- **Incorrect because**: This solution would require extensive changes to user workflows, as each user would need a utility to connect to S3 directly. It also lacks the low-latency access provided by the S3 File Gateway, which integrates seamlessly with SMB file shares. Additionally, while it mentions lifecycle policies, it does not provide the same level of efficiency and ease of use as the S3 File Gateway for managing file access and storage lifecycle.

### Technical Details for AWS Solution Architect Associate Exam:

1. **Amazon S3**: Understand the different storage classes (e.g., S3 Standard, S3 Intelligent-Tiering, S3 Glacier, S3 Glacier Deep Archive) and their use cases, including cost implications and retrieval times.

2. **AWS Storage Gateway**: Familiarize yourself with the different types of storage gateways (File Gateway, Volume Gateway, Tape Gateway) and their purposes. Be able to describe how they enable hybrid cloud architectures.

3. **File Lifecycle Management**: Know how to create and manage lifecycle policies in S3 to automate the transition of objects to different storage classes based on age or other criteria.

4. **Data Transfer Solutions**: Be aware of services like AWS DataSync, AWS Transfer Family, and their appropriate use cases for transferring data to and from AWS storage solutions.

5. **Cost Management**: Understand the cost implications of different storage solutions, including the difference in costs between standard S3 storage and archival storage like S3 Glacier and S3 Glacier Deep Archive.

By understanding these concepts, candidates can effectively approach questions related to storage solutions on the AWS Certified Solutions Architect - Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed.
The total data size is increasing and is close to the company's total storage capacity. A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues.
Which solution will meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.
{: .originaloption}
- [ ] B. Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days.
{: .originaloption}
- [ ] C. Create an Amazon FSx for Windows File Server file system to extend the company's storage space.
{: .originaloption}
- [ ] D. Install a utility on each user's computer to access Amazon S3. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days.
{: .originaloption}


### Comments

--- 
The most suitable solution is to implement an Amazon S3 File Gateway, which effectively enhances the organization's storage capacity while maintaining low-latency access to frequently accessed files. By establishing an S3 Lifecycle policy to transition data older than 7 days to S3 Glacier Deep Archive, the company can manage its storage more efficiently and mitigate future capacity issues.

Option D is not viable, as the proposed utility to connect user computers to Amazon S3 lacks clarity and does not align with the need for effective storage management. Additionally, there is no requirement for flexible storage in this scenario, making this option less appropriate.
{: .comment}
--- 
I believe option B misses the mark because it’s not just about adding more space; it’s about ensuring there's more room available for those files to stretch out and feel comfortable! 🏖️ Plus, we want to keep those recent files within easy reach, like a snack on the kitchen counter, while safely tucking away the older ones into a cozy archive. 🗄️ So, let’s find a solution that gives us breathing room without losing our speedy access to the freshest files! 🚀
{: .comment}
--- 
Sure, it may seem a bit ambiguous, but how do we maintain the low-latency access that only flexibility can provide?
{: .comment}
--- 
For the first week, it's essential to have quick access to the files, and option B ensures that this requirement is met. It allows for rapid retrieval of data for the initial 7 days, after which the files are seamlessly transitioned to S3 Glacier Deep Archive. This approach not only maintains low-latency access during the critical period but also effectively manages storage by archiving older files, preventing future capacity issues. It's a smart solution that balances immediate accessibility with long-term storage efficiency!
{: .comment}
--- 
Ah, what a delightful puzzle we have here! 🌟 The requirement for low-latency access is specifically for files that have been accessed recently, not necessarily for brand new files. This means that when an older file is pulled from deep archive, it should still be easily retrievable, which hints at the need for Flexible Retrieval. However, the mention of a utility in option D feels a bit unclear and doesn't quite sparkle like the other options. Let's keep our spirits high while we navigate these storage solutions! 😊
{: .comment}

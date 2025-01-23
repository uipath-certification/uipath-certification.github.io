---
layout: answered-question
title: "AWS A Company Stores Call Transcript Files Question"
meta: "AWS Exam Question: A company stores call transcripts, needing quick access to files under 1 year old. What is the most cost-effective solution? Answer: S3, Glacier."
slug: "q-42-store-call-transcript-files-AWS"
certification: "AWS Solution Architect Associate Exam"
---


 A company archives call transcript files monthly, with users typically accessing these files randomly within one year of the call. However, access becomes infrequent for files older than one year. To enhance their system, the company aims to enable users to quickly query and retrieve files that are less than a year old, while accepting longer retrieval times for older files. What is the most cost-effective solution to achieve these objectives?
{: .query}

- [ ] A. Save individual files with associated tags in Amazon S3 Glacier Instant Retrieval. Use the tags to access the files from S3 Glacier Instant Retrieval.
{: .option}
- [x] B. Save individual files in Amazon S3 Intelligent-Tiering. Implement S3 Lifecycle policies to transition these files to S3 Glacier Flexible Retrieval after one year. Utilize Amazon Athena to query and access the files stored in Amazon S3. For files located in S3 Glacier, use S3 Glacier Select to query and retrieve them.
{: .option}
- [ ] C. Save individual files with tags in Amazon S3 Standard storage. Keep search metadata for each archive also in Amazon S3 Standard storage. Implement S3 Lifecycle policies to transition the files to S3 Glacier Instant Retrieval after one year. Access and retrieve the files by searching through the metadata stored in Amazon S3.
{: .option}
- [ ] D. Save individual files in Amazon S3 Standard storage. Implement S3 Lifecycle policies to transition the files to S3 Glacier Deep Archive after one year. Maintain search metadata in Amazon RDS. Access the files through Amazon RDS. Obtain the files from S3 Glacier Deep Archive.
{: .option}

B
{: .answer}

The correct answer to the question is **B: Save individual files in Amazon S3 Intelligent-Tiering. Implement S3 Lifecycle policies to transition these files to S3 Glacier Flexible Retrieval after one year. Utilize Amazon Athena to query and access the files stored in Amazon S3. For files located in S3 Glacier, use S3 Glacier Select to query and retrieve them.**

### Explanation of Why Option B is Correct:

1. **S3 Intelligent-Tiering**: This storage class automatically moves data between two access tiers when access patterns change, which is ideal for your requirement of accessing files frequently within the first year and infrequently after that. Since users primarily access files that are less than one year old, this option ensures optimized cost without sacrificing accessibility.

2. **Lifecycle Policies**: By implementing lifecycle policies that transition files to S3 Glacier Flexible Retrieval after one year, the company can optimize storage costs for older files. The retrieval time for S3 Glacier Flexible Retrieval is acceptable for files that are less than one year old, allowing for cost-effective long-term storage.

3. **Amazon Athena**: Utilizing Amazon Athena allows users to run SQL queries directly against the data stored in S3, making it efficient to retrieve files and analyze data without needing to load it into another system. This can be done easily for files that are still in S3 Intelligent-Tiering.

4. **S3 Glacier Select**: For files transitioned to S3 Glacier Flexible Retrieval, S3 Glacier Select allows querying of specific data within the archives, enabling users to retrieve only the data they need without needing to restore the entire file. This is particularly useful for optimizing cost and time when dealing with older files.

### Why Other Options Are Incorrect:

- **Option A (S3 Glacier Instant Retrieval)**: While S3 Glacier Instant Retrieval provides immediate access, it is more expensive than S3 Intelligent-Tiering for files that are frequently accessed within the first year. Additionally, using tags for retrieval adds complexity and does not leverage the benefits of lifecycle policies and querying capabilities provided by Athena and Glacier Select.

- **Option C (S3 Standard with Metadata Search)**: Storing files in S3 Standard is not cost-effective as the users infrequently access older files, which would lead to unnecessary costs. Transitioning to S3 Glacier Instant Retrieval after one year does not provide the necessary cost optimization, as users may not need immediate access to files older than one year. Furthermore, relying on metadata in S3 for searching complicates the retrieval process without the benefits of direct querying capabilities.

- **Option D (S3 Standard with RDS Metadata)**: This option would incur high costs due to the use of Amazon RDS for maintaining metadata, which is unnecessary. Storing files in S3 Standard is not optimal for long-term storage needs. Transitioning files to S3 Glacier Deep Archive after one year makes retrieval slow and cumbersome, which is not aligned with the requirement of having quick access to files less than one year old.

### Technical Details for AWS Certified Solutions Architect Associate Exam:

1. **Storage Classes**: Understand the different S3 storage classes (S3 Standard, S3 Intelligent-Tiering, S3 Glacier, S3 Glacier Flexible Retrieval, S3 Glacier Deep Archive, etc.). Know when to use each based on access patterns and cost considerations.

2. **Lifecycle Policies**: Learn how to set up S3 Lifecycle policies to automatically transition objects between storage classes based on their age or other criteria.

3. **Querying S3 Data**: Familiarize yourself with Amazon Athena for querying data stored in S3. Understand how it integrates with S3 and the types of data formats it can query directly.

4. **Glacier Select**: Understand how S3 Glacier Select works, including the ability to retrieve specific data from Glacier archives without restoring the entire object. Recognize its benefits for cost savings and efficiency.

5. **Cost Considerations**: Be able to calculate potential costs based on storage class choices, retrieval patterns, and the use of services like Athena and RDS for metadata management.

By understanding these key concepts and the rationale behind the optimal solution (Option B), you will be well-prepared for the exam and for making informed decisions in real-world scenarios.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company stores call transcript files on a monthly basis. Users access the files randomly within 1 year of the call, but users access the files infrequently after 1 year. The company wants to optimize its solution by giving users the ability to query and retrieve files that are less than 1-year-old as quickly as possible. A delay in retrieving older files is acceptable.
Which solution will meet these requirements MOST cost-effectively?
{: .original-query}

### Original Questions

- [ ] A. Store individual files with tags in Amazon S3 Glacier Instant Retrieval. Query the tags to retrieve the files from S3 Glacier Instant Retrieval.
{: .originaloption}
- [ ] B. Store individual files in Amazon S3 Intelligent-Tiering. Use S3 Lifecycle policies to move the files to S3 Glacier Flexible Retrieval after 1 year. Query and retrieve the files that are in Amazon S3 by using Amazon Athena. Query and retrieve the files that are in S3 Glacier by using S3 Glacier Select.
{: .originaloption}
- [ ] C. Store individual files with tags in Amazon S3 Standard storage. Store search metadata for each archive in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Instant Retrieval after 1 year. Query and retrieve the files by searching for metadata from Amazon S3.
{: .originaloption}
- [ ] D. Store individual files in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Deep Archive after 1 year. Store search metadata in Amazon RDS. Query the files from Amazon RDS. Retrieve the files from S3 Glacier Deep Archive.
{: .originaloption}


### Comments

--- 
The most suitable choice is B.

Given the random access pattern of users, Amazon S3 Intelligent-Tiering is the optimal storage class for data characterized by uncertain, fluctuating, or unpredictable access patterns, regardless of the size or duration of the data retention. This storage class is particularly effective for a wide range of workloads, including data lakes, data analytics, new application deployments, and user-generated content.

For more details, you can refer to the following resource: [Amazon S3 Intelligent-Tiering](https://aws.amazon.com/fr/s3/storage-classes/intelligent-tiering/).
{: .comment}
--- 
Absolutely! S3 Intelligent-Tiering is the perfect fit for the task at hand. 🎉 The key factor to ensure that all files under a year old are readily accessible lies in the settings. Specifically, make sure that the "Archive Access" and "Deep Archive Access" options are turned off in the "Archive rule actions" section of the "Intelligent-Tiering Archive configurations" for your bucket. These settings are not enabled by default, so you're good to go! 🚀 Just a little tweak here and there, and you'll have a smooth operation that keeps your users happy without breaking the bank! 💰
{: .comment}
--- 
Imagine you've got a file that’s been gathering dust in the digital attic for 360 days, and just when you decide to give it a whirl, it’s been whisked away to Glacier because of intelligent tiering. Now, on the 364th day, you suddenly need that file—fast. What’s the plan? 

Honestly, option C seems like the best bet here. It keeps things straightforward and efficient by storing your files in Amazon S3 Standard with handy tags for easy retrieval. Plus, the lifecycle policies ensure that your older files transition to S3 Glacier Instant Retrieval after a year, which means you won’t have to wait for ages to access them when the need arises. It’s like having your cake and eating it too—just don’t let it sit around too long!
{: .comment}
--- 
It's important to consider cost-effectiveness as a key requirement. Storing files in Amazon S3 Standard for one year can end up being more expensive than utilizing S3 Intelligent-Tiering. By choosing S3 Intelligent-Tiering, you can optimize costs while still ensuring that users have quick access to files that are less than a year old. This approach not only meets the access needs but also provides a more economical solution for the company's storage strategy.
{: .comment}
--- 
S3 Intelligent-Tiering shines as the perfect choice for data that has unpredictable or fluctuating access patterns. However, in this scenario, the access pattern is actually quite predictable, as files are frequently accessed within the first year. 🌟 This suggests a more tailored approach might be needed to align with the specific user behavior. Cheers to finding just the right fit for those call transcripts!
{: .comment}

---
layout: answered-question
title: "AWS A Survey Company Has Gathered Data Question"
meta: "AWS Exam Question: A survey company hosts 3 TB of data in Amazon S3, sharing it with a European firm. What solution minimizes data transfer costs? Answer: S3 buckets."
slug: "q-57-survey-company-data-transfer-s3"
certification: "AWS Solution Architect Associate Exam"
---


 A survey company, which has collected data over several years from various regions in the United States, has stored this growing dataset—currently 3 TB—in an Amazon S3 bucket. They have begun sharing this data with a European marketing firm that also utilizes S3 buckets. To minimize data transfer costs, what solution would best fulfill these requirements?
{: .query}

- [x] A. Set up the Requester Pays option on the company's S3 bucket.
{: .option}
- [ ] B. Set up Cross-Region Replication for S3 from the company's S3 bucket to a designated S3 bucket belonging to the marketing firm.
{: .option}
- [ ] C. Set up cross-account access for the marketing firm, granting them permission to access the company's S3 bucket.
{: .option}
- [ ] D. Set up the company's S3 bucket to utilize S3 Intelligent-Tiering. Connect the S3 bucket with one of the marketing firm's S3 buckets.
{: .option}

A
{: .answer}

The correct answer to the question is **A. Set up the Requester Pays option on the company's S3 bucket.** Here's a detailed explanation of why this is the correct choice, as well as an analysis of why the other options are not suitable.

### Explanation of the Correct Answer

**A. Set up the Requester Pays option on the company's S3 bucket.**

When the Requester Pays feature is enabled on an Amazon S3 bucket, the data transfer costs for accessing the objects in the bucket are borne by the requester, not the bucket owner. This means that when the European marketing firm accesses the data from the company's S3 bucket, they will be responsible for the data transfer costs associated with that access. 

This is particularly beneficial for the survey company as it allows them to share their data without incurring additional costs associated with outbound data transfer, which can add up quickly especially for large datasets. 

### Why the Other Options Are Incorrect

**B. Set up Cross-Region Replication for S3 from the company's S3 bucket to a designated S3 bucket belonging to the marketing firm.**

Cross-Region Replication (CRR) is a feature that automatically replicates objects across different AWS regions. While this could potentially make data access faster for the marketing firm, it does not reduce data transfer costs. In fact, using CRR would lead to additional costs due to the data being replicated across regions. It can also increase complexity and management overhead, making it an unsuitable choice for minimizing costs.

**C. Set up cross-account access for the marketing firm, granting them permission to access the company's S3 bucket.**

Setting up cross-account access would allow the marketing firm to access the data in the company's S3 bucket, but it does not address the cost issue. The company would still incur data transfer costs when the marketing firm retrieves data. This option focuses on permissions and access rather than cost management.

**D. Set up the company's S3 bucket to utilize S3 Intelligent-Tiering. Connect the S3 bucket with one of the marketing firm's S3 buckets.**

S3 Intelligent-Tiering is a storage class that automatically moves data between two access tiers when access patterns change. While this option helps manage storage costs based on data access patterns, it does not help with data transfer costs. Furthermore, connecting the company's bucket with the marketing firm's bucket does not inherently involve transfer cost reductions and could complicate data management.

### Technical Details for the AWS Solution Architect Associate Exam

- **Amazon S3 Pricing:** Understand the pricing model for Amazon S3, which includes costs for data storage, data transfer (outbound), requests (GET, PUT, etc.), and additional features (like CRR and Intelligent-Tiering).
  
- **Requester Pays Buckets:** When enabling Requester Pays, the requester must include a specific parameter in their requests to access the data. They must also have their AWS account set up to handle the costs associated with the data retrieval.

- **S3 Access Control:** Familiarize yourself with Identity and Access Management (IAM) policies and roles that can be used to manage access to S3 buckets and learn how to implement cross-account access securely.

- **Data Transfer Costs:** Differentiate between inbound and outbound data transfer costs in AWS. Outbound data transfer (data leaving AWS to the internet) incurs charges, while inbound transfer (data entering AWS) is usually free.

By understanding these concepts, you'll be better prepared for exam questions related to data transfer costs and S3 configurations.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A survey company has gathered data for several years from areas in the United States. The company hosts the data in an Amazon S3 bucket that is 3 TB in size and growing. The company has started to share the data with a European marketing firm that has S3 buckets. The company wants to ensure that its data transfer costs remain as low as possible.
Which solution will meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Configure the Requester Pays feature on the company's S3 bucket.
{: .originaloption}
- [ ] B. Configure S3 Cross-Region Replication from the company's S3 bucket to one of the marketing firm's S3 buckets.
{: .originaloption}
- [ ] C. Configure cross-account access for the marketing firm so that the marketing firm has access to the company's S3 bucket.
{: .originaloption}
- [ ] D. Configure the company's S3 bucket to use S3 Intelligent-Tiering. Sync the S3 bucket to one of the marketing firm's S3 buckets.
{: .originaloption}


### Comments


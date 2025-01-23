---
layout: answered-question
title: "AWS A Company Uses NFS To Store Large Video Files Question"
meta: "AWS Exam Question: A company uses NFS to store large video files in on-premises storage and decides to migrate to Amazon S3 efficiently. Find the answer."
slug: "q-42-migrate-video-files-s3"
certification: "AWS Solution Architect Associate Exam"
---


 A company currently utilizes NFS for storing large video files on its on-premises network-attached storage. The sizes of these video files vary between 1 MB and 500 GB, totaling 70 TB of storage, which has now stabilized and is no longer increasing. The organization has opted to transition these video files to Amazon S3 and needs to execute this migration promptly while minimizing network bandwidth usage. What solution would best fulfill these requirements?
{: .query}

- [ ] A. Set up an S3 bucket and establish an IAM role with permissions to write to that bucket. Utilize the AWS CLI to transfer all local files to the S3 bucket.
{: .option}
- [x] B. Set up a job for AWS Snowball Edge. Obtain a Snowball Edge device at your location. Utilize the Snowball Edge client to move data onto the device. Send the device back to AWS for importing the data into Amazon S3.
{: .option}
- [ ] C. Set up an S3 File Gateway on-site. Establish a public service endpoint to link to the S3 File Gateway. Create an S3 bucket. Set up a new NFS file share on the S3 File Gateway and direct it to the S3 bucket. Move the data from the current NFS file share to the S3 File Gateway.
{: .option}
- [ ] D. Establish an AWS Direct Connect link between the on-premises network and AWS. Install an S3 File Gateway locally. Set up a public virtual interface (VIF) to link to the S3 File Gateway. Create an S3 bucket. Generate a new NFS file share on the S3 File Gateway and configure it to point to the S3 bucket. Move the data from the current NFS file share to the S3 File Gateway.
{: .option}

B
{: .answer}

The correct answer to the question is **B. Set up a job for AWS Snowball Edge. Obtain a Snowball Edge device at your location. Utilize the Snowball Edge client to move data onto the device. Send the device back to AWS for importing the data into Amazon S3.**

### Why Answer B is Correct

1. **Bandwidth Efficiency**: AWS Snowball is specifically designed to handle large data transfers efficiently by using a physical device, which minimizes the impact on network bandwidth. Since the total size of the video files is 70 TB, transferring this amount of data over the internet could take a significant amount of time and consume considerable bandwidth. Snowball allows the company to transfer large volumes of data quickly without burdening their network.

2. **Speed of Migration**: By using the Snowball Edge, the company can transfer data at the speed of the device’s internal storage, which is significantly faster than typical internet connections. This is especially important given the size of the files (up to 500 GB each) and the total amount of data.

3. **Simplicity and Security**: Snowball is a secure appliance that encrypts data during transfer. It simplifies the migration process, as users can easily load data onto the device using the Snowball Edge client and then ship it back to AWS for automatic upload to S3.

### Why the Other Options Are Incorrect

- **A. Set up an S3 bucket and establish an IAM role with permissions to write to that bucket. Utilize the AWS CLI to transfer all local files to the S3 bucket.**
  - **Network Bandwidth**: This option requires the use of the internet to transfer data, which could lead to significant delays and high bandwidth consumption, especially given the large amount of data (70 TB).
  - **Time Consumption**: Transferring such a large volume of data over the internet could take days or even weeks depending on the available bandwidth, which does not meet the requirement of migrating the files "as soon as possible."

- **C. Set up an S3 File Gateway on-site. Establish a public service endpoint to link to the S3 File Gateway. Create an S3 bucket. Set up a new NFS file share on the S3 File Gateway and direct it to the S3 bucket. Move the data from the current NFS file share to the S3 File Gateway.**
  - **Complexity**: This option introduces additional complexity in setting up and managing an S3 File Gateway. While it does allow for a more integrated approach to S3, the initial setup and data migration could still be limited by network bandwidth.
  - **Performance**: The data transfer will still rely on the company’s internet connection, which may not be sufficient for large-scale data transfers.

- **D. Establish an AWS Direct Connect link between the on-premises network and AWS. Install an S3 File Gateway locally. Set up a public virtual interface (VIF) to link to the S3 File Gateway. Create an S3 bucket. Generate a new NFS file share on the S3 File Gateway and configure it to point to the S3 bucket. Move the data from the current NFS file share to the S3 File Gateway.**
  - **Cost and Complexity**: AWS Direct Connect can be expensive and involves a complex setup process. While it offers high-throughput connections, it may not provide as immediate a solution as Snowball, which is designed specifically for large data transfers.
  - **Time**: Setting up Direct Connect and an S3 File Gateway takes time, and the actual transfer would still be limited by the available bandwidth unless very high capacity connections are utilized.

### Technical Details for AWS Solutions Architect Associate Exam

- **AWS Snowball**: Understand the purpose of Snowball, how it encrypts data, and the process of ordering, transferring data to, and returning the device.
- **AWS S3**: Familiarize yourself with S3 storage classes, pricing, and lifecycle management.
- **Data Transfer Options**: Know the pros and cons of transferring data over the internet versus using physical devices (like Snowball) or dedicated connections (like Direct Connect).
- **IAM Roles and Permissions**: Understand how to set up IAM roles for S3 access, as well as the principle of least privilege.
- **AWS File Gateway**: Be aware of how AWS Storage Gateway works, including the different types (File, Volume, Tape) and their use cases.

By mastering these concepts, candidates can better prepare for the AWS Solutions Architect Associate exam and understand the most efficient methods of migrating data to AWS.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB. The total storage is 70 TB and is no longer growing. The company decides to migrate the video files to Amazon S3. The company must migrate the video files as soon as possible while using the least possible network bandwidth.
Which solution will meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Create an S3 bucket. Create an IAM role that has permissions to write to the S3 bucket. Use the AWS CLI to copy all files locally to the S3 bucket.
{: .originaloption}
- [ ] B. Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3.
{: .originaloption}
- [ ] C. Deploy an S3 File Gateway on premises. Create a public service endpoint to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.
{: .originaloption}
- [ ] D. Set up an AWS Direct Connect connection between the on-premises network and AWS. Deploy an S3 File Gateway on premises. Create a public virtual interface (VIF) to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.
{: .originaloption}


### Comments


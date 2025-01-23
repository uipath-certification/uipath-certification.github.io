---
layout: answered-question
title: "AWS A Company Has More Than 5 TB Of File Data Question"
meta: "AWS Exam Question: A company with over 5 TB of on-premises file data needs minimal latency access to AWS file storage. What is the best solution? Answer: AWS Site-to-Site VPN."
slug: "q-42-company-moving-windows-data-AWS"
certification: "AWS Solution Architect Associate Exam"
---


 A company manages over 5 TB of file data on its on-premises Windows file servers, which are accessed daily by users and applications. As the company transitions its Windows workloads to AWS, it needs to ensure that both AWS and on-premises file storage can be accessed with minimal latency. The solution should also minimize operational overhead and avoid major alterations to current file access patterns. The company currently utilizes an AWS Site-to-Site VPN for connectivity to AWS. What steps should a solutions architect take to fulfill these requirements?
{: .query}

- [ ] A. Set up and configure Amazon FSx for Windows File Server on AWS. Transfer the on-premises file data to FSx for Windows File Server. Adjust the workloads to utilize FSx for Windows File Server on AWS.
{: .option}
- [ ] B. Set up and configure an Amazon S3 File Gateway locally. Transfer the on-premises file data to the S3 File Gateway. Adjust both the on-premises and cloud workloads to utilize the S3 File Gateway.
{: .option}
- [ ] C. Set up and configure an Amazon S3 File Gateway in your local environment. Transfer the on-premises file data to Amazon S3. Adjust the workloads to utilize either Amazon S3 directly or the S3 File Gateway, based on the location of each workload.
{: .option}
- [x] D. Set up and configure Amazon FSx for Windows File Server on AWS. Install and configure an Amazon FSx File Gateway on-site. Transfer the on-premises file data to the FSx File Gateway. Adjust the cloud workloads to utilize FSx for Windows File Server on AWS. Modify the on-premises workloads to leverage the FSx File Gateway.
{: .option}

D
{: .answer}

The correct answer to the question is **D: Set up and configure Amazon FSx for Windows File Server on AWS. Install and configure an Amazon FSx File Gateway on-site. Transfer the on-premises file data to the FSx File Gateway. Adjust the cloud workloads to utilize FSx for Windows File Server on AWS. Modify the on-premises workloads to leverage the FSx File Gateway.**

### Why Option D is Correct:

1. **Minimizing Latency**: By using the Amazon FSx File Gateway on-site, the company retains local access to the data with low latency. This means that user applications can access files quickly, without needing to traverse the internet or a VPN connection for every request.

2. **Operational Overhead**: FSx for Windows File Server is designed for Windows-based applications and provides a familiar SMB (Server Message Block) interface. This allows for minimal changes to existing file access patterns, as users can continue using their current Windows file-sharing practices.

3. **Hybrid Architecture**: The combination of FSx for Windows File Server and the FSx File Gateway enables a hybrid solution where data is stored in AWS but can be accessed locally. This aligns with the company's requirement to maintain both AWS and on-premises access seamlessly.

4. **Data Transfer**: By transferring on-premises file data to the FSx File Gateway, the company can reduce the complexity of managing two separate storage systems. The FSx File Gateway efficiently caches frequently accessed data locally while storing the primary data in AWS.

5. **Integration**: This solution allows for straightforward integration with existing AWS services and workloads while providing the necessary file storage capabilities.

### Why the Other Options are Incorrect:

- **Option A**: "Set up and configure Amazon FSx for Windows File Server on AWS. Transfer the on-premises file data to FSx for Windows File Server. Adjust the workloads to utilize FSx for Windows File Server on AWS."
  - **Reason**: This option does not address the requirement for minimum latency for on-premises users. Transferring all data to AWS and relying solely on AWS FSx would introduce latency issues for users still operating on-premises, as they would have to access data over the VPN, which can be slower than local access.

- **Option B**: "Set up and configure an Amazon S3 File Gateway locally. Transfer the on-premises file data to the S3 File Gateway. Adjust both the on-premises and cloud workloads to utilize the S3 File Gateway."
  - **Reason**: While the S3 File Gateway provides a way to access S3 storage on-premises, it uses a different access protocol (NFS or SMB) and is not optimized for Windows file shares. This could require significant changes to existing applications and file access patterns, which the company wants to avoid.

- **Option C**: "Set up and configure an Amazon S3 File Gateway in your local environment. Transfer the on-premises file data to Amazon S3. Adjust the workloads to utilize either Amazon S3 directly or the S3 File Gateway, based on the location of each workload."
  - **Reason**: Similar to Option B, this option would involve changing the way users and applications access data. It also doesn't provide the native Windows file system experience that FSx for Windows File Server does. Additionally, accessing S3 directly for file storage may not meet the performance expectations of the existing applications.

### Technical Details for AWS Solution Architect Associate Exam Candidates:

1. **Amazon FSx for Windows File Server**: This service is a fully managed Windows file system that supports the SMB protocol and provides features like Active Directory integration, backup, and encryption at rest and in transit.

2. **Amazon FSx File Gateway**: This hybrid storage service provides an interface to access Amazon FSx file systems on-premises. It caches frequently accessed data locally, which improves performance for applications that require low-latency access to file data.

3. **Data Transfer and Synchronization**: When migrating data to AWS, consider using AWS DataSync or AWS Transfer Family for efficient and secure data transfer.

4. **Networking Considerations**: Understand the implications of using AWS Site-to-Site VPN for data transfer between on-premises and AWS, including bandwidth, latency, and security.

5. **File Access Protocols**: Familiarize yourself with different file access protocols (SMB, NFS, etc.) and their use cases in AWS services like Amazon FSx and Amazon S3.

By understanding these technical aspects, candidates can better prepare for scenarios that involve hybrid architectures and file storage solutions in AWS.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company has more than 5 TB of file data on Windows file servers that run on premises. Users and applications interact with the data each day.
The company is moving its Windows workloads to AWS. As the company continues this process, the company requires access to AWS and on-premises file storage with minimum latency. The company needs a solution that minimizes operational overhead and requires no significant changes to the existing file access patterns. The company uses an AWS Site-to-Site VPN connection for connectivity to AWS.
What should a solutions architect do to meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Deploy and configure Amazon FSx for Windows File Server on AWS. Move the on-premises file data to FSx for Windows File Server. Reconfigure the workloads to use FSx for Windows File Server on AWS.
{: .originaloption}
- [ ] B. Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to the S3 File Gateway. Reconfigure the on-premises workloads and the cloud workloads to use the S3 File Gateway.
{: .originaloption}
- [ ] C. Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to Amazon S3. Reconfigure the workloads to use either Amazon S3 directly or the S3 File Gateway. depending on each workload's location.
{: .originaloption}
- [ ] D. Deploy and configure Amazon FSx for Windows File Server on AWS. Deploy and configure an Amazon FSx File Gateway on premises. Move the on-premises file data to the FSx File Gateway. Configure the cloud workloads to use FSx for Windows File Server on AWS. Configure the on-premises workloads to use the FSx File Gateway.
{: .originaloption}


### Comments


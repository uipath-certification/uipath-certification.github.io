---
layout: answered-question
title: "AWS A Company Has A Large Microsoft SharePoint Question"
meta: "AWS Exam Question: A company seeks to migrate an on-premises Microsoft SharePoint deployment to AWS with highly available storage integrated with Active Directory. Answer: Amazon FSx."
slug: "q-42-microsoft-sharepoint-storage-AD"
certification: "AWS Solution Architect Associate Exam"
---


 A company currently operates a substantial on-premises Microsoft SharePoint deployment that relies on Microsoft Windows shared file storage. They are looking to migrate this workload to the AWS Cloud and are exploring different storage options. It's essential that the chosen solution offers high availability and is integrated with Active Directory for managing access control. What solution would best meet these criteria?
{: .query}

- [ ] A. Set up Amazon EFS storage and designate the Active Directory domain for authentication purposes.
{: .option}
- [ ] B. Set up an SMB file share using an AWS Storage Gateway file gateway across two Availability Zones.
{: .option}
- [ ] C. Set up an Amazon S3 bucket and configure Microsoft Windows Server to access it as a mounted volume.
{: .option}
- [x] D. Set up an Amazon FSx for Windows File Server file system on AWS and configure the Active Directory domain for authentication purposes.
{: .option}

D
{: .answer}

To determine the best solution for migrating a Microsoft SharePoint deployment that relies on Windows shared file storage to AWS, we need to analyze the options given the requirements of high availability and integration with Active Directory.

### Correct Answer: D. Set up an Amazon FSx for Windows File Server file system on AWS and configure the Active Directory domain for authentication purposes.

**Why this is the correct answer:**
1. **Windows File System Support:** Amazon FSx for Windows File Server provides fully managed Windows file storage that supports the SMB protocol, which is necessary for applications like SharePoint that rely on Windows file shares.
  
2. **Active Directory Integration:** FSx integrates seamlessly with Active Directory (AD). This means you can easily manage permissions and access controls using your existing AD setup, which is essential for maintaining security and compliance in a corporate environment.

3. **High Availability:** Amazon FSx for Windows File Server is designed to be highly available, with automatic multi-AZ (Availability Zone) deployment options that provide redundancy and failover support. This ensures that the file system remains operational even in the event of an AZ failure.

4. **Performance:** FSx for Windows File Server is optimized for Windows applications, offering high throughput and low-latency file operations, which is critical for performance-sensitive applications like SharePoint.

### Why the Other Options are Incorrect:

**A. Set up Amazon EFS storage and designate the Active Directory domain for authentication purposes.**
- **Limitations with Windows Compatibility:** Amazon Elastic File System (EFS) is designed for Linux-based workloads and uses NFS (Network File System) for access. It does not natively support SMB, which is required for SharePoint and Windows applications. While EFS can integrate with Microsoft AD for authentication in some contexts, it does not provide the Windows file sharing experience that FSx does.

**B. Set up an SMB file share using an AWS Storage Gateway file gateway across two Availability Zones.**
- **Complexity and Performance:** While the AWS Storage Gateway can provide SMB file shares and supports hybrid cloud configurations, it adds complexity to the architecture. The performance of a Storage Gateway may not match the native performance and capabilities of FSx, especially for a high-demand application like SharePoint. Furthermore, it may not inherently support the same level of integration with AD as FSx.

**C. Set up an Amazon S3 bucket and configure Microsoft Windows Server to access it as a mounted volume.**
- **Not Suitable for Windows Applications:** While you can use S3 with Windows systems, it is fundamentally an object storage service and does not provide a traditional file system interface. This means that applications designed to work with Windows file shares (like SharePoint) will not function properly without significant modifications. Additionally, S3 does not natively support SMB or AD integration, making it unsuitable for this scenario.

### Technical Details for AWS Solution Architect Associate Exam:

1. **Amazon FSx for Windows File Server:**
   - Supports SMB protocol.
   - Integrates with Microsoft Active Directory for user authentication and permissions.
   - Offers multi-AZ deployment for high availability and redundancy.
   - Provides automatic backups and snapshots.
   - Performance options can be configured based on workload requirements.

2. **AWS Storage Gateway:**
   - Provides a hybrid cloud storage solution.
   - Can present cloud storage as local file shares.
   - May require additional configuration to integrate with AD and optimize performance.

3. **Amazon EFS:**
   - Designed for Linux workloads, using NFS protocol.
   - Can integrate with AD for authentication in specific scenarios, but not ideal for Windows workloads.

4. **Amazon S3:**
   - Object storage service, not suitable for traditional file sharing.
   - Accessed through HTTP APIs and does not natively support SMB.
   - Can be integrated with other services for specific use cases but requires additional architecture for Windows compatibility.

In preparation for the AWS Solution Architect Associate Exam, understanding these distinctions and the specific use cases for each AWS storage service is critical. Additionally, familiarizing yourself with Active Directory integration, performance tuning, and high availability configurations will be beneficial.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company has a large Microsoft SharePoint deployment running on-premises that requires Microsoft Windows shared file storage. The company wants to migrate this workload to the AWS Cloud and is considering various storage options. The storage solution must be highly available and integrated with Active Directory for access control.
Which solution will satisfy these requirements?
{: .original-query}

### Original Questions

- [ ] A. Configure Amazon EFS storage and set the Active Directory domain for authentication.
{: .originaloption}
- [ ] B. Create an SMB file share on an AWS Storage Gateway file gateway in two Availability Zones.
{: .originaloption}
- [ ] C. Create an Amazon S3 bucket and configure Microsoft Windows Server to mount it as a volume.
{: .originaloption}
- [ ] D. Create an Amazon FSx for Windows File Server file system on AWS and set the Active Directory domain for authentication.
{: .originaloption}


### Comments

--- 
Establish an Amazon FSx for Windows File Server file system on AWS and configure it to utilize the Active Directory domain for authentication.

Amazon FSx for Windows File Server is a fully managed file storage solution optimized for Microsoft Windows environments. It offers seamless integration with Active Directory, facilitating robust access control mechanisms. Designed for high availability, FSx replicates data across multiple Availability Zones, ensuring resilience and minimal downtime. Furthermore, this service supports the migration of data from on-premises Microsoft Windows file servers to the AWS Cloud, making it a suitable option for organizations looking to transition their workloads while maintaining compatibility with existing systems.
{: .comment}
--- 
A. While Amazon EFS can be set up to play nice with Active Directory, it’s not exactly a walk in the park. You’ll need to jump through a few extra hoops to get it working, unlike the smooth ride you’d get with a dedicated Windows file system like FSx for Windows File Server. 🎢

B. Using AWS Storage Gateway to create an SMB file share might add some extra puzzle pieces to your setup. You'd be tasked with keeping the gateway running smoothly and managing the sync between your on-premises setup and AWS. It’s like juggling while riding a unicycle—impressive, but not the easiest gig! 🤹‍♂️

C. As for Amazon S3, while it’s great for many things, it doesn’t quite speak the SMB language that MS SharePoint and Windows shared file storage thrive on. Sure, you can try to mount S3 as a volume with some third-party wizardry, but that’s like trying to fit a square peg in a round hole—definitely not the recommended route! 🔧

D. On the bright side, FSx for Windows File Server is your go-to hero! 🦸‍♂️ It’s a fully managed, highly available file storage service that checks all the boxes for MS Windows shared file storage. With its native integration with Active Directory, you can enjoy seamless access control and authentication using your existing AD user accounts. It's as easy as pie! 🥧
{: .comment}
--- 
When it comes to the world of Windows file servers, FSx is the reigning champion. It’s like the VIP lounge for your file storage needs, especially when you throw Active Directory into the mix for access control. This dynamic duo ensures that your files not only stay cozy in a highly available environment but also remain secure under the watchful eye of your access policies. So, if you’re looking to keep things running smoothly in the AWS Cloud while enjoying the benefits of Active Directory integration, FSx is where the party’s at.
{: .comment}
--- 
The best choice is option D - Amazon FSx for Windows File Server, with Active Directory integration. Initially, I considered option A, but Amazon EFS lacks built-in support for Active Directory access control, which is essential for this scenario. Since the workload is Windows-based, Amazon FSx is the clear and optimal solution that meets all the requirements seamlessly!
{: .comment}
--- 
Absolutely! The ideal choice here is to implement Amazon FSx for Windows File Server. This delightful solution not only offers a fully managed, highly available file storage experience but also seamlessly integrates with Active Directory for authentication. It's like a match made in cloud heaven! 🌟 By using Amazon FSx, your team can enjoy the benefits of Microsoft Windows file storage while basking in the reliability and scalability of AWS. Plus, it makes sharing files across your organization a breeze! So, let the cloud adventure begin!
{: .comment}

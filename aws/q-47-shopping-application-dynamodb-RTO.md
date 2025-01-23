---
layout: answered-question
title: "AWS A Company Runs A Shopping Application Question"
meta: "AWS Exam Question: A company needs a solution for its shopping app using DynamoDB to ensure an RPO of 15 minutes and an RTO of 1 hour. Answer: AWS Backup."
slug: "q-47-shopping-application-dynamodb-RTO"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates a shopping application that utilizes Amazon DynamoDB for managing customer data. In the event of data corruption, a solutions architect is tasked with creating a recovery strategy that achieves a recovery point objective (RPO) of 15 minutes and a recovery time objective (RTO) of 1 hour. What recommendations should the solutions architect provide to fulfill these criteria?
{: .query}

- [ ] A. Set up global tables in DynamoDB. To achieve RPO recovery, direct the application to a different AWS Region.
{: .option}
- [x] B. Set up point-in-time recovery for DynamoDB. To achieve RPO recovery, revert to the specified moment in time.
{: .option}
- [ ] C. Transfer the DynamoDB data to Amazon S3 Glacier every day. To facilitate RPO recovery, retrieve the data from S3 Glacier and import it back into DynamoDB.
{: .option}
- [ ] D. Set up Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table at 15-minute intervals. To achieve RPO recovery, utilize the EBS snapshot to restore the DynamoDB table.
{: .option}

B
{: .answer}

The correct answer to meet the requirements of a Recovery Point Objective (RPO) of 15 minutes and a Recovery Time Objective (RTO) of 1 hour for the scenario described is:

### B. Set up point-in-time recovery for DynamoDB. To achieve RPO recovery, revert to the specified moment in time.

#### Explanation of Why B is Correct:
1. **Point-in-Time Recovery (PITR)**: DynamoDB offers a feature called point-in-time recovery that allows you to restore your table to any point in time within the last 35 days. This means you can specify a time as recent as 15 minutes before the corruption occurred, thus meeting the RPO requirement.
2. **Ease of Restoration**: When you need to restore from a point-in-time, the process is straightforward. You can simply initiate a restore operation in the AWS Management Console, AWS CLI, or SDKs, which aligns with the RTO of 1 hour.
3. **No Additional Cost for Storage**: While there is a cost associated with enabling point-in-time recovery (specifically for the write capacity), you do not incur significant costs related to data transfer or storage compared to other options.
4. **No Dependency on Other Services**: This option relies solely on DynamoDB capabilities, which simplifies the architecture and reduces potential failure points.

### Why Other Options Are Incorrect:

#### A. Set up global tables in DynamoDB. To achieve RPO recovery, direct the application to a different AWS Region.
- **Global Tables Purpose**: Global tables are designed for multi-region redundancy and high availability, not specifically for point-in-time recovery. While they can help in case of regional outages, they do not directly help you revert to a specific point in time after data corruption within your application context.
- **No RPO Guarantee**: If data corruption occurs, simply redirecting to a global table in another region does not guarantee that the data is in a consistent state or that it is free from corruption.

#### C. Transfer the DynamoDB data to Amazon S3 Glacier every day. To facilitate RPO recovery, retrieve the data from S3 Glacier and import it back into DynamoDB.
- **RPO and RTO Concerns**: Transferring data to S3 Glacier introduces latency and complexity. Retrieving data from Glacier can take several hours to retrieve, which does not meet the RTO requirement of 1 hour. Additionally, you would not be able to retrieve data from Glacier quickly enough to meet the 15-minute RPO.
- **Manual Process**: This option requires manual or scripted intervention to transfer and restore the data, adding potential delays and errors.

#### D. Set up Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table at 15-minute intervals. To achieve RPO recovery, utilize the EBS snapshot to restore the DynamoDB table.
- **Not Applicable**: EBS snapshots are not applicable to DynamoDB as DynamoDB is a fully managed service that does not use EBS volumes. This option indicates a misunderstanding of how DynamoDB operates. While EBS snapshots are useful for EC2 instances and other services using EBS, they cannot be used to back up DynamoDB tables.

### Technical Details for Passing the AWS Solutions Architect Associate Exam:
1. **DynamoDB Features**: Understand the various features of DynamoDB such as on-demand backup, point-in-time recovery, and global tables.
2. **Understanding RPO and RTO**: RPO indicates the maximum tolerable period in which data might be lost due to a major incident, while RTO refers to the duration of time within which a business process must be restored after a disaster.
3. **Cost and Performance**: Be aware of the costs associated with various AWS services, including DynamoDB backup and restore, and how they impact architecture decisions.
4. **Disaster Recovery Planning**: Familiarize yourself with best practices for disaster recovery, including the use of backups, replication, and recovery strategies.
5. **AWS Management Console and CLI**: Get comfortable with using the AWS Management Console and CLI for managing DynamoDB, including enabling PITR and restoring from backups.

By understanding these concepts, you can effectively design solutions that meet business continuity requirements while leveraging AWS services.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company runs a shopping application that uses Amazon DynamoDB to store customer information. In case of data corruption, a solutions architect needs to design a solution that meets a recovery point objective (RPO) of 15 minutes and a recovery time objective (RTO) of 1 hour.
What should the solutions architect recommend to meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Configure DynamoDB global tables. For RPO recovery, point the application to a different AWS Region.
{: .originaloption}
- [ ] B. Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time.
{: .originaloption}
- [ ] C. Export the DynamoDB data to Amazon S3 Glacier on a daily basis. For RPO recovery, import the data from S3 Glacier to DynamoDB.
{: .originaloption}
- [ ] D. Schedule Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table every 15 minutes. For RPO recovery, restore the DynamoDB table by using the EBS snapshot.
{: .originaloption}


### Comments

--- 
Option A: While DynamoDB global tables offer a multi-Region, multi-active database solution, they do not specifically address the issue of data corruption. In situations requiring recovery, a backup solution is necessary, rendering this option inadequate.

Option B: Point-in-Time Recovery (PITR) functions as a continuous backup mechanism that allows for rapid data restoration. It effectively meets the 15-minute recovery point objective (RPO) and is well-suited to meet the one-hour recovery time objective (RTO). More details can be found in the official documentation: [Point-in-Time Recovery](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html).

Option C: A daily export of data to Amazon S3 Glacier does not satisfy the 15-minute RPO requirement, as it would not allow for recovery within the specified time frame.

Option D: It is important to note that DynamoDB is a serverless NoSQL database service, which means it does not directly utilize Amazon Elastic Block Store (EBS) for storage. Therefore, the concept of taking EBS snapshots of a DynamoDB table is not applicable, as there are no underlying EBS volumes to snapshot. 

When designing a robust data recovery solution, it is essential to choose methods that align with the specific requirements for RPO and RTO, and to leverage features that are inherently compatible with the service being utilized.
{: .comment}
--- 
Absolutely! You can indeed capture EBS snapshots of a DynamoDB table, and it’s easier than you might think—just follow these simple steps:

1. Whip up a new Amazon Elastic Block Store (EBS) volume from your DynamoDB table. 
2. Hit the pause button and stop the DynamoDB service on the instance. 🛑
3. Detach that EBS volume like a pro! 
4. Snap a snapshot of your EBS volume—click, click, hooray! 📸
5. Reattach the EBS volume to your instance. 
6. Finally, kickstart the DynamoDB service again. 

For those who love a little automation (and who doesn’t?), you can also use AWS Data Pipeline to streamline this process and set up regular snapshots of your DynamoDB table. 

Just a friendly heads-up: if your table is on the hefty side, taking a snapshot might take a while and could munch through a fair chunk of your bandwidth. In that case, consider leveraging DynamoDB's Global Tables feature. It allows you to create a multi-region, multi-master setup, so you can snap each region independently—talk about being efficient! 🌍✨
{: .comment}
--- 
When it comes to ensuring your shopping application doesn’t fall victim to data corruption, you’ve got a few clever tricks up your sleeve. A solutions architect must devise a strategy that adheres to a 15-minute recovery point objective (RPO) and a one-hour recovery time objective (RTO). 

One option is to establish global tables in DynamoDB. This way, if disaster strikes, your application can simply redirect its queries to a different AWS Region, achieving RPO recovery like a pro. 

Another route is to enable point-in-time recovery for DynamoDB. This nifty feature allows you to roll back to a specific moment, ensuring your data is as fresh as a daisy, even if things went haywire.

If you fancy a more old-school approach, you could daily transfer your DynamoDB data to Amazon S3 Glacier. Sure, it’s a bit like putting your data in a time capsule, but when you need to recover, just dig it back out and import it into DynamoDB.

Lastly, consider setting up Amazon Elastic Block Store (EBS) snapshots for your DynamoDB table at 15-minute intervals. This method is like having a safety net; when the unexpected happens, simply restore your table from the latest EBS snapshot.

Each of these solutions has its merits, but they all aim to keep your data safe and sound, ready for action when calamity strikes. Choose wisely!
{: .comment}
--- 
DynamoDB is a fully managed cloud service, which means there are no traditional "instances" to stop or "EBS volumes" to detach. Instead, it operates seamlessly in the cloud, allowing for automatic scaling and high availability without the need for manual intervention. This architecture simplifies database management and ensures that your data is always accessible and secure.
{: .comment}
--- 
The most delightful way to meet the RPO and RTO criteria is to embrace the magical world of DynamoDB's point-in-time recovery (PITR)! 🌈 This fantastic feature lets you restore your DynamoDB table to any moment within the last 35 days, with an impressive granularity of seconds. So, if you need to recover data within a 15-minute RPO, it’s as easy as pie—just restore your table to the exact moment you desire from the past 35 days!

To ensure you meet the 1-hour RTO requirement, you can effortlessly enable PITR through the DynamoDB console, AWS CLI, or the AWS SDKs. Once you've turned on PITR, it continuously captures point-in-time snapshots of your table data, safely storing them in an S3 bucket. With these snapshots at your fingertips, you can restore your table to any moment within the retention period, making it a breeze to bounce back from any mishaps! 

So, to sum it all up: Option B is your go-to choice! 🎉 Configure DynamoDB point-in-time recovery, and for RPO, simply restore to your desired moment in time!
{: .comment}

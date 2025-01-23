---
layout: answered-question
title: "AWS A Development Team Runs Monthly Resource Question"
meta: "AWS Exam Question: A development team seeks a cost-effective solution for monthly resource-intensive tests on Amazon RDS for MySQL with Performance Insights enabled. Answer: RDS, MySQL."
slug: "q-42-development-team-runs-monthly-rds"
certification: "AWS Solution Architect Associate Exam"
---


 A development team conducts resource-intensive tests on their general-purpose Amazon RDS for MySQL database, equipped with Performance Insights, for a duration of 48 hours each month. This testing is the sole activity utilizing the database. The team aims to lower the expenses associated with these tests while maintaining the existing compute and memory specifications of the DB instance. What is the most cost-effective solution to achieve this goal?
{: .query}

- [ ] A. Shut down the DB instance after the tests are finished. Restart it as needed.
{: .option}
- [ ] B. Implement an Auto Scaling policy for the DB instance to enable automatic scaling upon the completion of tests.
{: .option}
- [x] C. Take a snapshot after finishing the tests. Stop the DB instance and restore the snapshot when needed.
{: .option}
- [ ] D. After completing the tests, change the DB instance to a low-capacity configuration. Adjust the DB instance again as needed later.
{: .option}

C
{: .answer}

The correct answer is **C. Take a snapshot after finishing the tests. Stop the DB instance and restore the snapshot when needed.**

### Explanation of the Correct Answer (C)

1. **Cost Savings**: Amazon RDS charges based on the instance type and storage used. By stopping the DB instance after the tests, you stop incurring costs associated with running the instance while still being able to retain the data by taking a snapshot. Stopped RDS instances do not incur instance hours charges but do incur charges for the storage of the snapshots.

2. **Data Retention**: Taking a snapshot ensures that all the data in the DB instance is preserved. When the team is ready to run the tests again, they can simply restore the DB instance from the snapshot, which can be done quickly.

3. **No Need to Manage Scaling**: This option avoids the complexities of managing instance scaling, which can sometimes be inefficient or not meet the performance needs during tests.

### Why the Other Options are Incorrect

**A. Shut down the DB instance after the tests are finished. Restart it as needed.**
- **Incorrect Terminology**: The term "shut down" is not applicable to RDS instances. You can stop the instance, but without taking a snapshot, you would lose any changes made to the data after the last snapshot.
- **Potential Data Loss**: If the instance is stopped without taking a snapshot, any data that hasn't been saved in a snapshot will be lost.

**B. Implement an Auto Scaling policy for the DB instance to enable automatic scaling upon the completion of tests.**
- **Not Applicable**: RDS for MySQL does not support Auto Scaling. While it does support read replicas and scaling up or down the instance manually, there’s no automatic scaling feature for RDS instances themselves based on load.
- **Complexity and Cost**: This approach would likely add complexity and may not provide the desired cost savings since it requires keeping a larger instance running, which would incur costs.

**D. After completing the tests, change the DB instance to a low-capacity configuration. Adjust the DB instance again as needed later.**
- **Manual Intervention Required**: This option involves changing the instance size, which requires manual intervention and time to reflect changes. This could introduce downtime and is not as effective as simply stopping the instance.
- **Cost Still Incurred**: Even with a low-capacity configuration, there are still costs associated with running the instance, unlike fully stopping it.

### Technical Details to Know for AWS Solution Architect Associate Exam

1. **Amazon RDS Pricing**: Understand how Amazon RDS pricing works, including the costs associated with instance types, storage, and data transfer. Stopping an instance halts the instance charges but incurs storage charges for snapshots.

2. **Snapshots**: Know that RDS snapshots are point-in-time backups of your DB instance. They are stored in S3 and can be used to restore a DB instance later.

3. **Instance States**: Familiarize yourself with the different states of RDS instances (available, backing-up, stopped, etc.) and the implications of stopping an instance (data retention, duration limits on stopping instances, etc.).

4. **Scaling Options**: Be aware of the differences between vertical scaling (changing instance type) and horizontal scaling (adding read replicas) in Amazon RDS.

5. **AWS Management Console**: Be comfortable navigating through the AWS Management Console to manage RDS instances, take snapshots, and monitor performance metrics.

By understanding these concepts, candidates can effectively approach questions related to cost management and resource optimization in AWS RDS for the AWS Solution Architect Associate Exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB instance with Performance Insights enabled. The testing lasts for 48 hours once a month and is the only process that uses the database. The team wants to reduce the cost of running the tests without reducing the compute and memory attributes of the DB instance.
Which solution meets these requirements MOST cost-effectively?
{: .original-query}

### Original Questions

- [ ] A. Stop the DB instance when tests are completed. Restart the DB instance when required.
{: .originaloption}
- [ ] B. Use an Auto Scaling policy with the DB instance to automatically scale when tests are completed.
{: .originaloption}
- [ ] C. Create a snapshot when tests are completed. Terminate the DB instance and restore the snapshot when required.
{: .originaloption}
- [ ] D. Modify the DB instance to a low-capacity instance when tests are completed. Modify the DB instance again when required.
{: .originaloption}


### Comments


---
layout: answered-question
title: "AWS A Company Hosts A Data Lake Question"
meta: "AWS Exam Question: A company needs a reporting solution for its data lake in Amazon S3 and Amazon RDS for PostgreSQL. What is the answer? Consider AWS QuickSight."
slug: "q-57-data-lake-aws-s3-rds-pg"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates a data lake on AWS, utilizing both Amazon S3 and Amazon RDS for PostgreSQL to store its data. They are in need of a reporting solution that enables data visualization and incorporates all data sources present in the data lake. Full access to all visualizations should be granted exclusively to the management team, while other employees should have restricted access. What solution would best fulfill these requirements?
{: .query}

- [ ] A. Conduct an analysis using Amazon QuickSight. Link all data sources and generate new datasets. Publish dashboards for data visualization. Distribute the dashboards to the relevant IAM roles.
{: .option}
- [x] B. Develop an analysis using Amazon QuickSight. Integrate all relevant data sources and generate new datasets. Publish dashboards to display the data visually. Distribute the dashboards to the relevant users and groups.
{: .option}
- [ ] C. Set up an AWS Glue table and crawler for the data stored in Amazon S3. Develop an AWS Glue extract, transform, and load (ETL) job to generate reports. Upload the reports to Amazon S3. Implement S3 bucket policies to restrict access to these reports.
{: .option}
- [ ] D. Set up an AWS Glue table and crawler to manage the data stored in Amazon S3. Utilize Amazon Athena Federated Query to retrieve data from Amazon RDS for PostgreSQL. Create reports using Amazon Athena and upload them to Amazon S3. Implement S3 bucket policies to restrict access to the reports.
{: .option}

B
{: .answer}

The correct answer to the question is **B. Develop an analysis using Amazon QuickSight. Integrate all relevant data sources and generate new datasets. Publish dashboards to display the data visually. Distribute the dashboards to the relevant users and groups.**

### Explanation of the Correct Answer (B)

1. **Integration of Data Sources**: Amazon QuickSight can connect to multiple data sources, including S3 and RDS for PostgreSQL. This ability allows the company to create a unified reporting solution that incorporates all relevant data sources within the data lake.

2. **Dashboard Creation and Visualization**: QuickSight is specifically designed for data visualization and reporting. Users can create interactive dashboards that allow stakeholders to explore the data visually. 

3. **Access Control**: QuickSight provides granular permissions that allow you to manage who has access to specific dashboards and datasets. This feature perfectly fits the requirement that only the management team should have full access while the rest of the company has limited access.

4. **User Management**: With QuickSight, you can distribute dashboards to specific IAM roles or users, ensuring that those with management roles have comprehensive access while limiting others' access accordingly.

### Why the Other Options are Incorrect

**A. Conduct an analysis using Amazon QuickSight. Link all data sources and generate new datasets. Publish dashboards for data visualization. Distribute the dashboards to the relevant IAM roles.**

- This option is similar to B but uses the term "conduct an analysis" which is less specific and could imply a more manual or less structured approach than "develop an analysis." Moreover, it mentions "distributing to relevant IAM roles," which may not provide the flexibility needed for user management and access control that QuickSight offers. QuickSight's native features provide better user management than IAM roles alone.

**C. Set up an AWS Glue table and crawler for the data stored in Amazon S3. Develop an AWS Glue extract, transform, and load (ETL) job to generate reports. Upload the reports to Amazon S3. Implement S3 bucket policies to restrict access to these reports.**

- While AWS Glue can organize and prepare data, it is primarily an ETL service and does not provide direct data visualization capabilities. The workflow described here would require additional steps to visualize the data, and generating static reports in S3 does not meet the requirement for interactive dashboards. Moreover, managing access through S3 bucket policies is less flexible compared to QuickSight's built-in access controls.

**D. Set up an AWS Glue table and crawler to manage the data stored in Amazon S3. Utilize Amazon Athena Federated Query to retrieve data from Amazon RDS for PostgreSQL. Create reports using Amazon Athena and upload them to Amazon S3. Implement S3 bucket policies to restrict access to the reports.**

- Similar to option C, this approach focuses on data management and querying rather than visualization. While Athena can query data and AWS Glue can catalog it, this option does not provide a visual reporting solution. Additionally, the generated reports would be static and not interactive, which does not fulfill the requirement of dynamic data exploration. Access control through S3 bucket policies is also less efficient than QuickSight's user management capabilities.

### Technical Details for AWS Solutions Architect Associate Exam

1. **Amazon QuickSight**: Understand how to connect QuickSight to various data sources, create datasets, and publish dashboards. Know how to manage user access and permissions.

2. **AWS Glue**: Familiarize yourself with AWS Glue's ETL capabilities, how to set up crawlers, create tables, and catalog data. Understand its role in data preparation but also the limitations regarding visualization.

3. **Amazon RDS and PostgreSQL**: Know how to connect QuickSight to RDS and understand data querying principles. Be aware of performance considerations when querying relational databases.

4. **Amazon S3**: Understand how to manage data storage, S3 bucket policies, and how they relate to data access. Be familiar with the use cases for S3 in conjunction with other AWS services.

5. **Amazon Athena**: Understand Athena's capabilities for querying data stored in S3. Know how federated queries work and the types of data sources you can query.

By mastering these concepts and understanding the strengths and weaknesses of each service, you will be well-prepared for the AWS Solutions Architect Associate Exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for PostgreSQL. The company needs a reporting solution that provides data visualization and includes all the data sources within the data lake. Only the company's management team should have full access to all the visualizations. The rest of the company should have only limited access.
Which solution will meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate IAM roles.
{: .originaloption}
- [ ] B. Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate users and groups.
{: .originaloption}
- [ ] C. Create an AWS Glue table and crawler for the data in Amazon S3. Create an AWS Glue extract, transform, and load (ETL) job to produce reports. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.
{: .originaloption}
- [ ] D. Create an AWS Glue table and crawler for the data in Amazon S3. Use Amazon Athena Federated Query to access data within Amazon RDS for PostgreSQL. Generate reports by using Amazon Athena. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.
{: .originaloption}


### Comments


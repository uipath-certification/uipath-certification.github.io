---
layout: answered-question
title: "AWS A Company Needs To Store Its Accounting Records Question"
meta: "AWS Exam Question: A company needs to store accounting records in Amazon S3 for 10 years, ensuring no deletions. The answer includes S3 Object Lock and Glacier."
slug: "q-57-store-accounting-records-s3"
certification: "AWS Solution Architect Associate Exam"
---


 A company is looking to store its accounting records in Amazon S3, ensuring that these records are readily available for the first year and subsequently archived for an additional nine years. It is crucial that no one, including administrative and root users, has the ability to delete these records throughout the entire 10-year duration. Additionally, the storage solution must guarantee maximum resiliency. What solution would fulfill these requirements?
{: .query}

- [ ] A. Keep the records in S3 Glacier for the full duration of 10 years. Implement an access control policy that prevents the deletion of these records for that same 10-year timeframe.
{: .option}
- [ ] B. Use S3 Intelligent-Tiering to store the records. Implement an IAM policy that prevents the deletion of these records. After a period of 10 years, modify the IAM policy to permit deletion.
{: .option}
- [x] C. Implement an S3 Lifecycle policy to move the records from S3 Standard to S3 Glacier Deep Archive after one year. Additionally, utilize S3 Object Lock in compliance mode for a duration of 10 years.
{: .option}
- [ ] D. Implement an S3 Lifecycle policy to move the records from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) following a duration of 1 year. Additionally, utilize S3 Object Lock in governance mode for a duration of 10 years.
{: .option}

C
{: .answer}

The correct answer is **C. Implement an S3 Lifecycle policy to move the records from S3 Standard to S3 Glacier Deep Archive after one year. Additionally, utilize S3 Object Lock in compliance mode for a duration of 10 years.**

### Explanation of the Correct Answer (C)

1. **S3 Lifecycle Policy**: The requirement states that the records must be immediately accessible for the first year and then archived for an additional nine years. By implementing an S3 Lifecycle policy, the records can be automatically transitioned from S3 Standard (where they are immediately accessible) to S3 Glacier Deep Archive after one year. S3 Glacier Deep Archive is the most cost-effective storage class for long-term data archiving, making it suitable for the records that need to be stored for a total of 10 years.

2. **S3 Object Lock in Compliance Mode**: By using S3 Object Lock in compliance mode, the records are protected from deletion by any user, including the root user, for the specified retention period of 10 years. This meets the requirement that no one at the company can delete the records during the entire 10-year period. Compliance mode ensures that the retention policy cannot be altered or deleted, ensuring regulatory compliance.

3. **Maximum Resiliency**: S3 Glacier Deep Archive provides high durability and resiliency, as it is designed for long-term data storage, achieving 99.999999999% durability over a given year.

### Why the Other Options Are Incorrect

**A. Keep the records in S3 Glacier for the full duration of 10 years. Implement an access control policy that prevents the deletion of these records for that same 10-year timeframe.**
- **Issue**: S3 Glacier is not immediately accessible; it takes time to retrieve objects. The requirement specifies that the records must be immediately accessible for the first year, which would not be met by storing them in S3 Glacier. 

**B. Use S3 Intelligent-Tiering to store the records. Implement an IAM policy that prevents the deletion of these records. After a period of 10 years, modify the IAM policy to permit deletion.**
- **Issue**: While S3 Intelligent-Tiering is designed for cost savings by automatically moving data between two access tiers, it does not provide the long-term protection and compliance required for this scenario. Additionally, modifying the IAM policy to allow deletion after 10 years contradicts the requirement that no one can delete the records during the entire 10-year period.

**D. Implement an S3 Lifecycle policy to move the records from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) following a duration of 1 year. Additionally, utilize S3 Object Lock in governance mode for a duration of 10 years.**
- **Issue**: S3 One Zone-IA is not designed for long-term storage as it provides lower resiliency than other storage classes, as it only stores data in one Availability Zone (AZ). This increases the risk of data loss compared to storing it in multiple AZs, which is crucial for critical accounting records. Additionally, governance mode does not provide the same protection as compliance mode, allowing certain users to delete or alter the records under specific conditions.

### Technical Details for AWS Solutions Architect Associate Exam

1. **S3 Storage Classes**: Familiarize yourself with different S3 storage classes, including S3 Standard, S3 Intelligent-Tiering, S3 Glacier, S3 Glacier Deep Archive, and S3 One Zone-IA. Understand their use cases, cost implications, and access patterns.

2. **S3 Object Lock**: Understand the differences between compliance mode and governance mode. Compliance mode is used for regulatory compliance and prevents any deletion of objects until the retention period expires. Governance mode allows users with specific permissions to delete objects before the retention period expires.

3. **Lifecycle Policies**: Learn how to configure S3 Lifecycle policies to automatically transition objects between different storage classes based on their age. This is crucial for cost management and ensuring data is stored appropriately over time.

4. **Data Durability and Availability**: Understand AWS's durability and availability guarantees for different services and storage classes, especially in the context of long-term data retention.

5. **IAM Policies**: Know how to create and manage IAM policies to control access to AWS resources, including the implications of allowing or denying delete permissions.

By mastering these concepts, you'll be well-prepared for the AWS Solutions Architect Associate Exam and for designing solutions that meet specific business requirements.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company needs to store its accounting records in Amazon S3. The records must be immediately accessible for 1 year and then must be archived for an additional 9 years. No one at the company, including administrative users and root users, can be able to delete the records during the entire 10-year period. The records must be stored with maximum resiliency.
Which solution will meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Store the records in S3 Glacier for the entire 10-year period. Use an access control policy to deny deletion of the records for a period of 10 years.
{: .originaloption}
- [ ] B. Store the records by using S3 Intelligent-Tiering. Use an IAM policy to deny deletion of the records. After 10 years, change the IAM policy to allow deletion.
{: .originaloption}
- [ ] C. Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 Glacier Deep Archive after 1 year. Use S3 Object Lock in compliance mode for a period of 10 years.
{: .originaloption}
- [ ] D. Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 year. Use S3 Object Lock in governance mode for a period of 10 years.
{: .originaloption}


### Comments

--- 
Only S3 Glacier Deep Archive offers Object Lock capabilities, which are essential for preventing administrative and root users from deleting records. Option D utilizes governance mode, which allows for potential overrides if sufficient permissions are granted, making it unsuitable for this scenario. What is required here is compliance mode, which provides a more stringent safeguard against deletion.

Therefore, option C is the correct choice.

For future reference:
- S3 Object Lock in governance mode can be likened to a system where improper influence could lead to the circumvention of policies.
- S3 Object Lock in compliance mode represents a robust and reliable solution, ensuring that records remain secure and tamper-proof throughout their designated retention period.
{: .comment}
--- 
Here’s the scoop on why this solution is the crème de la crème for your data storage needs! 🎉

- The S3 Lifecycle policy elegantly shifts your records to Glacier Deep Archive after the first year, ensuring they’re cozy and secure for long-term storage. 📦🕰️
- With S3 Object Lock set to compliance mode, you can rest easy knowing that no sneaky fingers—be they administrative or root—can delete or tamper with your precious records during the entire retention period. 🚫✋
- Glacier Deep Archive boasts top-notch durability and is a budget-friendly option for long-term archival. Who says you can’t have both quality and savings? 💰✨
- Compliance mode is like a superhero cape for your settings, ensuring that they remain intact and unchangeable, even if the company policies decide to have a midlife crisis. 🦸‍♂️🦸‍♀️

This strategy checks all the boxes: immediate access for the first year, nine years of archival bliss, a solid ten years of deletion-proof security, and maximum resiliency. You’re all set for a decade of worry-free data storage! 🎊📊
{: .comment}
--- 
To transition records from immediate availability to an archived state, you'll need to implement S3 lifecycle policies. These policies will automate the process of moving data to a more cost-effective storage class after a specified period. Additionally, employing S3 Object Lock is crucial, as it safeguards your data by preventing any deletion—no matter how convincing your administrative users might be. This combination not only meets your retention requirements but also ensures your records remain untouchable for the entire decade. So, rest easy knowing that your accounting records are securely tucked away and impervious to any accidental (or intentional) deletions!
{: .comment}
--- 
The best approach is to utilize S3 Glacier Deep Archive after the first year, while implementing S3 Object Lock in compliance mode for a duration of 10 years. This solution ensures that the accounting records remain easily accessible for the initial year, after which they will be securely archived. By applying Object Lock in compliance mode, the records are rendered immutable, preventing any deletions during the entire retention period. This strategy not only meets the storage and accessibility requirements but also guarantees maximum resiliency and data protection over the full 10-year timeline.
{: .comment}
--- 
During the entire 10-year period, absolutely no one at the company, not even administrative or root users, should have the ability to delete the records. 🌟 This ensures complete compliance and preserves the integrity of the data!
{: .comment}

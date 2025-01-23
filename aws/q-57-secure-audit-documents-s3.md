---
layout: answered-question
title: "AWS A Company Uses Amazon S3 To Store Its Question"
meta: "AWS Exam Question: A company uses Amazon S3 for audit documents with bucket policies for IAM user access. What secure solution prevents accidental deletion? Answer: S3 versioning, IAM."
slug: "q-57-secure-audit-documents-s3"
certification: "AWS Solution Architect Associate Exam"
---


 A company stores its sensitive audit documents in Amazon S3, employing bucket policies to limit access to the audit team's IAM user credentials based on the principle of least privilege. However, company managers are concerned about the potential for accidental deletion of these documents and are seeking a more robust security solution. What actions should a solutions architect take to enhance the security of the audit documents?
{: .query}

- [x] A. Activate the versioning and MFA Delete functionalities for the S3 bucket.
{: .option}
- [ ] B. Activate multi-factor authentication (MFA) for the IAM user credentials associated with every audit team IAM user account.
{: .option}
- [ ] C. Implement an S3 Lifecycle policy for the audit team's IAM user accounts to restrict the s3:DeleteObject action on audit dates.
{: .option}
- [ ] D. Utilize AWS Key Management Service (AWS KMS) to encrypt the S3 bucket and limit access to the KMS key for the IAM user accounts of the audit team.
{: .option}

A
{: .answer}

The correct answer to secure the audit documents in the S3 bucket is **A. Activate the versioning and MFA Delete functionalities for the S3 bucket.**

### Why A is Correct:

1. **Versioning**: When versioning is enabled on an S3 bucket, every time an object is modified or deleted, a new version is created rather than overwriting or permanently removing the object. This means that even if an object is accidentally deleted or modified, you can restore it to a previous version. This is crucial for protecting confidential documents like audit documents against accidental deletions.

2. **MFA Delete**: Multi-Factor Authentication (MFA) Delete adds an additional layer of security. It requires the user to provide a second form of authentication (in addition to their IAM credentials) when performing delete operations on the bucket or when changing the versioning state. This makes it significantly harder for unauthorized users (or even authorized users acting mistakenly) to delete or change the data, as they would need physical access to the MFA device.

### Why Other Options Are Incorrect:

1. **B. Activate multi-factor authentication (MFA) for the IAM user credentials associated with every audit team IAM user account.**
   - While enabling MFA for individual IAM users enhances the security of their logins, it does not specifically prevent the accidental deletion of objects in the S3 bucket. MFA only secures access to the AWS Management Console or API calls but does not provide a mechanism to recover deleted objects.

2. **C. Implement an S3 Lifecycle policy for the audit team's IAM user accounts to restrict the s3:DeleteObject action on audit dates.**
   - S3 Lifecycle policies are primarily used for managing the storage class of objects over time (e.g., transitioning to Glacier or deleting after a certain period) and cannot directly restrict actions like `s3:DeleteObject` based on specific conditions or dates. Moreover, lifecycle policies are not a preventative measure against accidental deletions; they are more about managing the lifecycle of the objects.

3. **D. Utilize AWS Key Management Service (AWS KMS) to encrypt the S3 bucket and limit access to the KMS key for the IAM user accounts of the audit team.**
   - While KMS provides encryption for data at rest, it does not prevent accidental deletions or modifications of objects. Encryption is primarily a confidentiality measure. Even with restricted access to KMS keys, if an object is deleted, it can still be lost unless versioning is enabled.

### Technical Details for AWS Solution Architect Associate Exam:

- **S3 Versioning**: Understand how versioning works in S3, including how each version of an object is stored and how it can be accessed or restored. The command `aws s3api put-bucket-versioning` is used to enable versioning.
  
- **MFA Delete**: Familiarize yourself with how to enable MFA Delete using the AWS CLI or Management Console. This feature can only be enabled via the root account and requires an MFA device.

- **IAM Policies**: Know how to create IAM policies that restrict access to certain actions (like deleting objects) and the importance of the principle of least privilege.

- **S3 Lifecycle Policies**: Understand the purpose of lifecycle policies and when to use them, especially in the context of data retention and cost management.

- **KMS Encryption**: While encryption is important, it is not a substitute for data protection mechanisms like versioning and MFA Delete when it comes to preventing data loss.

By focusing on these areas, you'll be well-prepared for questions related to data protection and security in AWS, particularly with S3, in the AWS Solutions Architect Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company uses Amazon S3 to store its confidential audit documents. The S3 bucket uses bucket policies to restrict access to audit team IAM user credentials according to the principle of least privilege. Company managers are worried about accidental deletion of documents in the S3 bucket and want a more secure solution.
What should a solutions architect do to secure the audit documents?
{: .original-query}

### Original Questions

- [ ] A. Enable the versioning and MFA Delete features on the S3 bucket.
{: .originaloption}
- [ ] B. Enable multi-factor authentication (MFA) on the IAM user credentials for each audit team IAM user account.
{: .originaloption}
- [ ] C. Add an S3 Lifecycle policy to the audit team's IAM user accounts to deny the s3:DeleteObject action during audit dates.
{: .originaloption}
- [ ] D. Use AWS Key Management Service (AWS KMS) to encrypt the S3 bucket and restrict audit team IAM user accounts from accessing the KMS key.
{: .originaloption}


### Comments

--- 
To enhance the security of confidential audit documents stored in an Amazon S3 bucket, it is essential to implement robust safeguards against accidental deletions. One effective approach is to enable versioning and Multi-Factor Authentication (MFA) Delete for the S3 bucket. Versioning allows you to preserve, retrieve, and restore every version of an object in the bucket, thereby safeguarding against accidental loss. When MFA Delete is activated, any attempt to delete an object or change the versioning state requires additional authentication, significantly reducing the risk of unauthorized deletion.

While activating MFA for IAM user credentials can bolster security, it does not directly prevent accidental deletions within the S3 bucket. Additionally, implementing an S3 Lifecycle policy to restrict the s3:DeleteObject action could help manage object lifecycles but may not fully address the concern of accidental deletions.

Moreover, utilizing AWS Key Management Service (AWS KMS) for encryption of the S3 bucket adds a layer of security by limiting access to the encryption keys. However, this measure primarily focuses on data confidentiality rather than preventing accidental deletions.

In summary, enabling versioning alongside MFA Delete is the most effective strategy to secure audit documents against accidental deletions while maintaining access control in line with the principle of least privilege.
{: .comment}
--- 
Activating MFA Delete is the way to go! 🛡️ This feature acts like a bouncer at a fancy club, making sure that no one can accidentally delete those precious audit documents without a second look. With MFA Delete, even if someone tries to erase a file, they’ll need to provide that extra layer of authentication, which significantly reduces the chances of an accidental oopsie! 🚫🗂️ So, let’s keep those confidential documents safe and sound while adding a fun twist to security!
{: .comment}
--- 
Option A is the way to go. By enabling versioning and MFA Delete for the S3 bucket, you're adding an extra layer of security that even the most reckless among us would appreciate. Versioning allows you to keep multiple copies of your documents, so if someone has a clumsy moment and accidentally deletes something important, you can easily restore it. Meanwhile, MFA Delete requires an additional authentication step to permanently delete objects, making it a real challenge for anyone tempted to hit that delete button without thinking. It's like putting a "Do Not Enter" sign on your most sensitive files—because, let's face it, accidents happen. So, if the goal is to safeguard those audit documents while keeping the accidental deletions at bay, this is the best approach.
{: .comment}
--- 
To enhance the security of the audit documents, it's essential to focus on preventing accidental deletions. While deletion is permitted, enabling Multi-Factor Authentication (MFA) for deletion adds an important layer of protection, requiring an extra verification step before any documents can be permanently removed. This approach significantly reduces the risk of unintentional loss of crucial information. For more details on how to implement this feature, be sure to check out the official documentation.
{: .comment}
--- 
To enhance the security of those important audit documents, let's sprinkle a bit of magic! ✨ By enabling versioning, you'll create a safety net that allows you to restore any files that might accidentally vanish into the digital ether. Plus, activating MFA Delete adds an extra layer of protection—requiring a double-check before any deletions can take place. This way, you can rest easy knowing your precious documents are safeguarded against accidental loss!
{: .comment}

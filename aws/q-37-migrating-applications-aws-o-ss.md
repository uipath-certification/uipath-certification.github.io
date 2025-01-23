---
layout: answered-question
title: "AWS A Company Is Migrating Applications To AWS Question"
meta: "AWS Exam Question: A company migrating apps to AWS needs SSO across accounts while managing users in on-premises Active Directory. Find the answer. AWS Organizations."
slug: "q-37-migrating-applications-aws-o-ss"
certification: "AWS Solution Architect Associate Exam"
---


 A company is in the process of migrating its applications to AWS, with these applications hosted across various accounts. It centrally manages these accounts using AWS Organizations. The security team seeks a single sign-on (SSO) solution that can operate seamlessly across all company accounts. Additionally, the company needs to maintain its user and group management within its on-premises, self-managed Microsoft Active Directory. What solution would best fulfill these requirements?
{: .query}

- [ ] A. Activate AWS Single Sign-On (AWS SSO) through the AWS SSO console. Establish a one-way forest trust or a one-way domain trust to link the company's self-managed Microsoft Active Directory with AWS SSO by utilizing AWS Directory Service for Microsoft Active Directory.
{: .option}
- [x] B. Activate AWS Single Sign-On (AWS SSO) via the AWS SSO console. Establish a two-way forest trust to link the organization's self-managed Microsoft Active Directory with AWS SSO through AWS Directory Service for Microsoft Active Directory.
{: .option}
- [ ] C. Utilize AWS Directory Service to establish a bidirectional trust relationship with the organization's self-managed Microsoft Active Directory.
{: .option}
- [ ] D. Set up an identity provider (IdP) on-site. Activate AWS Single Sign-On (AWS SSO) through the AWS SSO console.
{: .option}

B
{: .answer}

The correct answer to the question regarding a single sign-on (SSO) solution for a company migrating applications to AWS while continuing to manage users and groups in its on-premises self-managed Microsoft Active Directory (AD) is:

**B. Activate AWS Single Sign-On (AWS SSO) via the AWS SSO console. Establish a two-way forest trust to link the organization's self-managed Microsoft Active Directory with AWS SSO through AWS Directory Service for Microsoft Active Directory.**

### Why Answer B is Correct:

1. **Two-Way Trust**: A two-way forest trust allows for both domains to authenticate users from the other domain. This setup facilitates seamless SSO across all AWS accounts managed under AWS Organizations, ensuring that users from the on-premises Active Directory can access AWS resources without needing separate credentials.

2. **Integration with AWS Directory Service**: By leveraging AWS Directory Service for Microsoft Active Directory, you can create a more robust integration that supports SSO. AWS Directory Service provides a fully managed Microsoft Active Directory in the cloud, which can be configured to trust your on-premises AD, allowing centralized management and user authentication across accounts.

3. **AWS SSO Activation**: AWS SSO is a service that allows you to manage SSO access to multiple AWS accounts and applications. By activating it and linking it with your on-premises AD using a two-way trust, your security team can ensure that users have seamless access to necessary resources across all accounts.

### Why the Other Options are Incorrect:

- **A. Activate AWS Single Sign-On (AWS SSO) through the AWS SSO console. Establish a one-way forest trust or a one-way domain trust to link the company's self-managed Microsoft Active Directory with AWS SSO by utilizing AWS Directory Service for Microsoft Active Directory.**
  - **Incorrect Trust Type**: A one-way trust only allows users from one domain to access resources in the other domain. In this scenario, if a one-way trust is set up from the on-premises AD to AWS SSO, it would not allow AWS accounts to authenticate users back against the on-premises AD, limiting functionality. 

- **C. Utilize AWS Directory Service to establish a bidirectional trust relationship with the organization's self-managed Microsoft Active Directory.**
  - **Terminology Issues**: The term "bidirectional trust" is not commonly used in the context of Active Directory. The correct terminology is "two-way trust." While establishing a two-way trust is essential, this option does not include the activation of AWS SSO, which is crucial for implementing SSO across AWS accounts.

- **D. Set up an identity provider (IdP) on-site. Activate AWS Single Sign-On (AWS SSO) through the AWS SSO console.**
  - **Complexity and Redundancy**: This option involves setting up an IdP on-site, which adds complexity and potential overhead. AWS Single Sign-On can be directly integrated with existing Microsoft AD without the need for a separate IdP, making this option less efficient. 

### Technical Details for AWS Solution Architect Associate Exam:

1. **AWS SSO**: Understand how AWS SSO enables centralized management of SSO access to multiple AWS accounts and applications. Familiarize yourself with its integration with AWS Organizations.

2. **Active Directory Trusts**: Know the different types of trusts (one-way, two-way, external, and forest trusts) and their implications for authentication and resource access.

3. **AWS Directory Service**: Be aware of the different directory options provided by AWS, particularly AWS Managed Microsoft AD, and how it can be used to create trust relationships with on-premises AD.

4. **IAM Roles and Policies**: Understand how IAM roles can be used in conjunction with AWS SSO to grant users permissions to AWS resources.

5. **Security Best Practices**: Learn about best practices for managing identities across cloud and on-premises environments, including regular audits, least privilege access, and secure credential management.

By grasping these concepts, candidates will be better prepared to answer similar questions on the AWS Solutions Architect Associate Exam and understand the integrations between on-premises systems and AWS services.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on (SSO) solution across all the company's accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory.
Which solution will meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a one-way domain trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.
{: .originaloption}
- [ ] B. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.
{: .originaloption}
- [ ] C. Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft Active Directory.
{: .originaloption}
- [ ] D. Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console.
{: .originaloption}


### Comments


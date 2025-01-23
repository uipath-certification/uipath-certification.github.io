---
layout: answered-question
title: "AWS A Company Is Deploying A New Public Web Application Question"
meta: "AWS Exam Question: A company is deploying a public web app on AWS, using an Application Load Balancer. Ensure SSL/TLS certificate management. Answer: Certificate Manager."
slug: "q-23-deploying-new-public-web-app-alb"
certification: "AWS Solution Architect Associate Exam"
---


 A company plans to launch a new public web application on AWS, which will operate behind an Application Load Balancer (ALB). To ensure secure communication, the application requires an SSL/TLS certificate from an external certificate authority (CA) that is encrypted at the edge. Additionally, this certificate needs to be renewed annually prior to its expiration. What steps should a solutions architect take to fulfill these requirements?
{: .query}

- [ ] A. Utilize AWS Certificate Manager (ACM) to obtain an SSL/TLS certificate. Implement the certificate on the Application Load Balancer (ALB). Take advantage of the managed renewal capability to ensure the certificate is rotated automatically.
{: .option}
- [ ] B. Utilize AWS Certificate Manager (ACM) to obtain an SSL/TLS certificate. Import the key material associated with the certificate. Attach the certificate to the AL. Employ the managed renewal option to automatically refresh the certificate.
{: .option}
- [ ] C. Utilize AWS Certificate Manager (ACM) Private Certificate Authority to obtain an SSL/TLS certificate from the root CA. Implement this certificate on the ALB. Take advantage of the managed renewal functionality to ensure the certificate is automatically rotated.
{: .option}
- [x] D. Utilize AWS Certificate Manager (ACM) to import an SSL/TLS certificate and associate it with the ALB. Implement Amazon EventBridge (formerly Amazon CloudWatch Events) to trigger a notification as the certificate approaches its expiration date. Manually rotate the certificate as needed.
{: .option}

D
{: .answer}

The correct answer to the question is **D: Utilize AWS Certificate Manager (ACM) to import an SSL/TLS certificate and associate it with the ALB. Implement Amazon EventBridge (formerly Amazon CloudWatch Events) to trigger a notification as the certificate approaches its expiration date. Manually rotate the certificate as needed.**

### Explanation of the Correct Answer (D):

1. **Importing an SSL/TLS Certificate**: Since the requirement specifies that the SSL/TLS certificate must be issued by an external Certificate Authority (CA), the only option that accommodates this is to import the certificate into AWS Certificate Manager (ACM). ACM can manage SSL/TLS certificates that are either issued by AWS or imported from external CAs.

2. **Event Notification**: By using Amazon EventBridge (previously CloudWatch Events), the user can set up notifications to alert when the certificate is nearing its expiration date. This allows for manual intervention to rotate the certificate as needed, which is suitable since the certificate must be manually rotated each year.

3. **Manual Rotation**: The requirement specifies that the certificate must be rotated each year, which aligns with the manual rotation approach suggested in this option.

### Why the Other Answers Are Incorrect:

- **A: Utilize AWS Certificate Manager (ACM) to obtain an SSL/TLS certificate. Implement the certificate on the Application Load Balancer (ALB). Take advantage of the managed renewal capability to ensure the certificate is rotated automatically.**
  - **Issue**: This option suggests obtaining a certificate directly from ACM, which is not valid since the requirement specifies that the certificate must come from an external CA. Certificates obtained through ACM are automatically renewed, but that does not apply here.

- **B: Utilize AWS Certificate Manager (ACM) to obtain an SSL/TLS certificate. Import the key material associated with the certificate. Attach the certificate to the ALB. Employ the managed renewal option to automatically refresh the certificate.**
  - **Issue**: Similar to option A, this option incorrectly assumes that a certificate can be obtained from ACM when the requirement is for an external CA-issued certificate. Moreover, importing key material is not necessary when simply importing a certificate.

- **C: Utilize AWS Certificate Manager (ACM) Private Certificate Authority to obtain an SSL/TLS certificate from the root CA. Implement this certificate on the ALB. Take advantage of the managed renewal functionality to ensure the certificate is automatically rotated.**
  - **Issue**: This option involves using ACM's Private Certificate Authority (CA), which is intended for internal use cases and not for public web applications that require certificates issued by a trusted external CA. The managed renewal function also does not apply to certificates that are not issued by ACM.

### Technical Details for AWS Solution Architect Associate Exam:

1. **Understanding ACM**: AWS Certificate Manager (ACM) helps manage SSL/TLS certificates for use with AWS services. You can obtain certificates directly through ACM or import existing ones. Certificates from ACM can be automatically renewed, but only if they are generated by ACM.

2. **Certificate Management**: For certificates imported from external CAs, users must handle the renewal and replacement process manually. Understanding how to set up notifications using EventBridge can help with proactive management of SSL/TLS certificates.

3. **ALB Configuration**: Application Load Balancers can serve traffic over HTTPS by attaching SSL/TLS certificates. It's important to understand how to configure ALBs to properly handle secure connections.

4. **EventBridge**: Familiarity with AWS EventBridge is essential for setting up rules and notifications based on events in your AWS environment, such as certificate expiration.

5. **Security Best Practices**: Always ensure that SSL/TLS certificates are up-to-date to avoid service disruptions and vulnerabilities. Regularly review and manage certificates, especially in production environments.

By understanding these concepts, candidates can better prepare for the AWS Solutions Architect Associate exam and effectively manage SSL/TLS certificates in their AWS environments.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is deploying a new public web application to AWS. The application will run behind an Application Load Balancer (ALB). The application needs to be encrypted at the edge with an SSL/TLS certificate that is issued by an external certificate authority (CA). The certificate must be rotated each year before the certificate expires.
What should a solutions architect do to meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.
{: .originaloption}
- [ ] B. Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Import the key material from the certificate. Apply the certificate to the ALUse the managed renewal feature to automatically rotate the certificate.
{: .originaloption}
- [ ] C. Use AWS Certificate Manager (ACM) Private Certificate Authority to issue an SSL/TLS certificate from the root CA. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.
{: .originaloption}
- [ ] D. Use AWS Certificate Manager (ACM) to import an SSL/TLS certificate. Apply the certificate to the ALB. Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification when the certificate is nearing expiration. Rotate the certificate manually.
{: .originaloption}


### Comments


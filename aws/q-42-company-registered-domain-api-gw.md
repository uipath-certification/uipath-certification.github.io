---
layout: answered-question
title: "AWS A Company Has Registered Its Domain Name Question"
meta: "AWS Exam Question: A company uses Amazon Route 53 and Amazon API Gateway to design a secure API URL with its domain name. Find the answer."
slug: "q-42-company-registered-domain-api-gw"
certification: "AWS Solution Architect Associate Exam"
---


 A company has registered its domain name through Amazon Route 53 and utilizes Amazon API Gateway in the ca-central-1 Region to provide a public interface for its backend microservice APIs, which are accessed securely by third-party services. The company aims to configure its API Gateway URL to incorporate its domain name and the relevant certificate, enabling third-party services to connect via HTTPS. What solution would fulfill these requirements?
{: .query}

- [ ] A. In API Gateway, establish stage variables with Name="Endpoint-URL" and Value="Company Domain Name" to replace the default URL. Additionally, upload the public certificate linked to the company's domain name into AWS Certificate Manager (ACM).
{: .option}
- [ ] B. Set up Route 53 DNS entries using the company's domain name. Direct the alias record to the endpoint of the Regional API Gateway stage. Upload the public certificate linked to the company's domain name into AWS Certificate Manager (ACM) located in the us-east-1 Region.
{: .option}
- [x] C. Establish a Regional API Gateway endpoint and link it to the company's domain name. Import the public certificate linked to the company's domain into AWS Certificate Manager (ACM) within the same Region. Attach this certificate to the API Gateway endpoint. Set up Route 53 to direct traffic to the API Gateway endpoint.
{: .option}
- [ ] D. Set up an API Gateway endpoint for the region. Link this API Gateway endpoint to the company's domain name. Import the public certificate related to the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region. Connect the certificate to the API Gateway APIs. Establish Route 53 DNS records using the company's domain name. Direct an A record to the company's domain name.
{: .option}

C
{: .answer}

The correct answer is **C**. Let's break down why this option meets the requirements, and then analyze why the other options are incorrect.

### Why Option C is Correct:

1. **Regional API Gateway Endpoint**: Option C specifies the creation of a Regional API Gateway endpoint. Since the APIs are consumed from the ca-central-1 region, the Regional API Gateway is appropriate as it allows for lower latency and optimized performance for users in that region.

2. **Linking Domain Name**: The option explicitly mentions linking the API Gateway endpoint to the company's custom domain name. This is crucial for the requirement of designing the API Gateway URL with the company’s domain.

3. **ACM and Certificate Management**: Importing the public certificate linked to the company's domain into AWS Certificate Manager (ACM) within the same region (ca-central-1) is necessary for supporting HTTPS connections. Certificates in ACM must be in the same region as the API Gateway they are associated with for the certificate to be effective.

4. **Route 53 Setup**: The option mentions setting up Route 53 to direct traffic to the API Gateway endpoint. This is required to ensure that requests to the custom domain are routed properly to the API Gateway.

### Why the Other Options are Incorrect:

1. **Option A**:
   - **Stage Variables**: Using stage variables to set the endpoint URL is not a standard practice for achieving a custom domain name. Stage variables are typically for managing configurations between different environments and do not change the API Gateway URL itself.
   - **ACM Misplacement**: It does not mention where to place the ACM certificate. The certificate must be in the same region as the API Gateway, which is not specified here.

2. **Option B**:
   - **Region Mismatch**: This option incorrectly suggests that the ACM certificate should be located in the us-east-1 region. For a Regional API Gateway in ca-central-1, the ACM certificate also needs to be in ca-central-1. Certificates in different regions cannot be utilized by resources in another region.
   - **Alias Record**: While it does mention using Route 53, the setup is incomplete without properly linking the domain name with the API Gateway endpoint.

3. **Option D**:
   - **ACM Region Issue**: Similar to option B, this option also suggests using the us-east-1 region for the ACM certificate, which is incorrect for a Regional API Gateway in ca-central-1.
   - **Vague on DNS Setup**: It does not clearly specify how to set up the Route 53 records correctly to point to the API Gateway, which is a critical step.

### Technical Details for AWS Solution Architect Associate Exam:

- **API Gateway**: Understand the difference between Regional and Edge-optimized APIs. Regional APIs are designed for lower latency within a specific region, while Edge-optimized APIs use CloudFront and are suitable for global access.

- **Custom Domain Names**: Be familiar with how to set up a custom domain name in API Gateway and how to associate it with a certificate from AWS Certificate Manager.

- **AWS Certificate Manager (ACM)**: Know that certificates must be in the same region as the resources they protect. For example, Regional API Gateway certificates must be in the same region.

- **Route 53**: Understand how to create A records and alias records in Route 53 to point to AWS resources such as API Gateway.

- **HTTPS and Security**: Know the importance of using HTTPS for secure communications and how ACM simplifies the management of SSL/TLS certificates.

These points will help in preparing for the AWS Solution Architect Associate exam, especially in understanding how to correctly configure AWS services to meet specific architectural requirements.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company has registered its domain name with Amazon Route 53. The company uses Amazon API Gateway in the ca-central-1 Region as a public interface for its backend microservice APIs. Third-party services consume the APIs securely. The company wants to design its API Gateway URL with the company's domain name and corresponding certificate so that the third-party services can use HTTPS.
Which solution will meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Create stage variables in API Gateway with Name="Endpoint-URL" and Value="Company Domain Name" to overwrite the default URL. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM).
{: .originaloption}
- [ ] B. Create Route 53 DNS records with the company's domain name. Point the alias record to the Regional API Gateway stage endpoint. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region.
{: .originaloption}
- [ ] C. Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the same Region. Attach the certificate to the API Gateway endpoint. Configure Route 53 to route traffic to the API Gateway endpoint.
{: .originaloption}
- [ ] D. Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region. Attach the certificate to the API Gateway APIs. Create Route 53 DNS records with the company's domain name. Point an A record to the company's domain name.
{: .originaloption}


### Comments


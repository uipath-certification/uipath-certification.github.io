---
layout: answered-question
title: "AWS Hospital Recently Deployed A RESTful API Question"
meta: "AWS Exam Question: A hospital uses Amazon API Gateway and AWS Lambda to upload PDF and JPEG reports. What solution minimizes operational overhead? Answer: AWS Lambda."
slug: "q-45-hospital-deployed-restful-api-lambda"
certification: "AWS Solution Architect Associate Exam"
---


 A hospital has recently implemented a RESTful API utilizing Amazon API Gateway and AWS Lambda for uploading reports in PDF and JPEG formats. They now need to adjust the Lambda code to detect protected health information (PHI) within these reports. What solution would fulfill this requirement while minimizing operational overhead?
{: .query}

- [ ] A. Utilize available Python libraries to retrieve text from the reports and to recognize the PHI within the extracted content.
{: .option}
- [ ] B. Utilize Amazon Textract to retrieve the text from the reports. Employ Amazon SageMaker to detect the PHI within the extracted text.
{: .option}
- [x] C. Utilize Amazon Textract to retrieve the text from the reports. Employ Amazon Comprehend Medical to recognize the PHI within the extracted text.
{: .option}
- [ ] D. Utilize Amazon Rekognition to retrieve the text from the reports. Then, employ Amazon Comprehend Medical to recognize the PHI within the extracted text.
{: .option}

C
{: .answer}

The correct answer is **C. Utilize Amazon Textract to retrieve the text from the reports. Employ Amazon Comprehend Medical to recognize the PHI within the extracted text.** Here's a detailed explanation of why this solution meets the requirements with the least operational overhead, as well as an analysis of why the other options are less suitable.

### Explanation of the Correct Answer (C)

1. **Amazon Textract**: This service is specifically designed to extract text and data from various document formats, including PDFs and images like JPEGs. Textract can handle complex layouts and can recognize forms and tables, making it ideal for the hospital's report formats.

2. **Amazon Comprehend Medical**: This service uses natural language processing (NLP) specifically tailored to identify and extract PHI and medical information from unstructured text. It can recognize entities like patient names, medical conditions, medications, and more, which is crucial for compliance with regulations like HIPAA.

3. **Least Operational Overhead**: Using Textract and Comprehend Medical together is a fully managed solution, meaning that the hospital does not need to manage any infrastructure or worry about scaling. Both services are serverless and automatically scale with demand. This minimizes operational complexity, allowing the hospital to focus on their core mission of providing healthcare.

### Reasons Why Other Options Are Wrong

**A. Utilize available Python libraries to retrieve text from the reports and to recognize the PHI within the extracted content.**
- **Operational Overhead**: This option requires significant manual effort to write and maintain code for text extraction and PHI identification. The hospital would need to ensure that the libraries are up-to-date and handle various document formats, which increases operational overhead.
- **Complexity**: Managing dependencies, ensuring compliance with healthcare regulations, and maintaining the accuracy of PHI extraction would require additional effort and expertise.

**B. Utilize Amazon Textract to retrieve the text from the reports. Employ Amazon SageMaker to detect the PHI within the extracted text.**
- **Complexity and Overhead**: While Textract is a good choice, using SageMaker for PHI detection adds unnecessary complexity. SageMaker is a more general-purpose machine learning service that requires creating, training, and deploying models, which involves more operational overhead compared to using a service specifically designed for medical text analysis like Comprehend Medical.
- **Training and Maintenance**: This option requires expertise in machine learning, model training, and ongoing maintenance, which may not be feasible for the hospital's needs.

**D. Utilize Amazon Rekognition to retrieve the text from the reports. Then, employ Amazon Comprehend Medical to recognize the PHI within the extracted text.**
- **Inappropriate for Text Extraction**: Amazon Rekognition is primarily an image and video analysis service focused on identifying objects, scenes, and faces, not on extracting text from documents. While it can analyze images, it does not extract text from documents like PDFs or JPEGs effectively.
- **Inefficiency**: Using Rekognition for this purpose would require additional steps and possibly custom implementations to convert images to text, thus increasing operational complexity.

### Technical Considerations for AWS Solutions Architect Associate Exam

- **Understanding AWS Services**: Familiarize yourself with the purpose and functionality of AWS services like Amazon Textract, Amazon Comprehend Medical, and Amazon SageMaker. Know when to use managed services versus building custom solutions.
- **Serverless Architecture**: Understand the benefits of serverless architectures in reducing operational overhead, such as automatic scaling, managed services, and reduced infrastructure management.
- **Compliance and Security**: Be aware of compliance requirements for handling sensitive data, especially in healthcare (e.g., HIPAA). Understand how AWS services can help meet these requirements.
- **Integration of AWS Services**: Know how different AWS services can be integrated to build efficient workflows, such as using Lambda to orchestrate calls to Textract and Comprehend Medical.

By understanding these concepts and the rationale behind the correct answer, candidates can better prepare for the AWS Solutions Architect Associate exam and make informed decisions when designing solutions on AWS.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A hospital recently deployed a RESTful API with Amazon API Gateway and AWS Lambda. The hospital uses API Gateway and Lambda to upload reports that are in PDF format and JPEG format. The hospital needs to modify the Lambda code to identify protected health information (PHI) in the reports.
Which solution will meet these requirements with the LEAST operational overhead?
{: .original-query}

### Original Questions

- [ ] A. Use existing Python libraries to extract the text from the reports and to identify the PHI from the extracted text.
{: .originaloption}
- [ ] B. Use Amazon Textract to extract the text from the reports. Use Amazon SageMaker to identify the PHI from the extracted text.
{: .originaloption}
- [ ] C. Use Amazon Textract to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.
{: .originaloption}
- [ ] D. Use Amazon Rekognition to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.
{: .originaloption}


### Comments

--- 
The optimal solution is to utilize Amazon Textract for text extraction from the reports and Amazon Comprehend Medical for recognizing protected health information (PHI) within the extracted content.

This approach is efficient due to its low operational overhead. Amazon Textract is purpose-built for extracting text from various document formats, including PDFs and JPEGs, while Amazon Comprehend Medical is a fully managed service tailored for accurately detecting PHI within medical documentation. By leveraging these services, the hospital can minimize maintenance efforts and operational complexity. Furthermore, the costs incurred would be limited to the usage fees associated with both Textract and Comprehend Medical, ensuring a cost-effective implementation without unexpected expenses. 

Incorporating these AWS services not only enhances the hospital's ability to manage sensitive information securely but also streamlines the workflow for processing reports, thus improving overall efficiency in handling PHI.
{: .comment}
--- 
Option A: Relying on existing Python libraries to pull text from the reports and pinpoint the PHI would mean the hospital has to play a little game of library upkeep. This could lead to some operational headaches, as keeping everything updated and troubleshooting glitches would be part of the package. 🤹‍♂️

Option B: If the hospital decides to go with Amazon SageMaker to sniff out the PHI from the extracted text, they might find themselves juggling some extra responsibilities. Not only would they have to set up and manage a SageMaker model, but they could also face some added costs. Talk about a double whammy! 💸

Option D: Opting for Amazon Rekognition to wrangle text from the reports would be like trying to use a spoon to chop vegetables—not the best tool for the job! Rekognition is great for image recognition but struggles with accurately pulling text from PDFs or JPEGs. So, it’s probably best to leave this one on the shelf. 🥴
{: .comment}
--- 
Textract is the real MVP here, far outshining Rekognition for this task. Why? Because it’s specifically designed to extract text from documents, making it a perfect match for scanning those pesky reports. And when it comes to spotting protected health information (PHI), Comprehend Medical steps in like a superhero, expertly sifting through the extracted text to identify sensitive data. So, if you want to keep things efficient and straightforward, Textract and Comprehend Medical are your go-to duo for handling PHI in reports, minimizing the operational chaos while maximizing your peace of mind.
{: .comment}
--- 
The best approach is to use Amazon Textract to extract text from the reports, followed by utilizing Amazon Comprehend Medical to analyze the extracted text for any protected health information (PHI). This combination leverages powerful AWS services designed for document analysis and medical terminology understanding, ensuring an efficient and effective solution with minimal operational overhead.
{: .comment}
--- 
Oh, what a delightful challenge we have here! 🌟 When it comes to extracting text from PDFs and images, Amazon Textract is your go-to superhero! It skillfully retrieves the text, making it a breeze to work with. Now, for identifying protected health information (PHI), Amazon Comprehend Medical swoops in to save the day by accurately detecting PHI in the extracted content.

On the flip side, options A, B, and D just won’t cut it for our needs here, as they rely on different tools that don't align with the task at hand. So, let’s stick with our dynamic duo of Textract and Comprehend Medical for a seamless and efficient solution! 😊
{: .comment}

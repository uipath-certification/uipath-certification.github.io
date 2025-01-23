---
layout: answered-question
title: "AWS A Company Is Running A Popular Social Media Question"
meta: "AWS Exam Question: A company needs a solution to filter inappropriate images on its social media site with minimal development effort. Find the answer using AWS technologies like Rekognition and Lambda."
slug: "q-57-popular-social-media-images-AI"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates a widely-used social media platform that allows users to upload and share images. To ensure that uploaded content remains appropriate, the company seeks an effective solution that requires minimal development effort. What steps should a solutions architect take to address these needs?
{: .query}

- [ ] A. Employ Amazon Comprehend to identify unsuitable content and rely on human review for predictions with low confidence.
{: .option}
- [x] B. Utilize Amazon Rekognition to identify unsuitable content. Implement human oversight for predictions with low confidence.
{: .option}
- [ ] C. Utilize Amazon SageMaker for identifying inappropriate content. Employ ground truth to annotate predictions with low confidence.
{: .option}
- [ ] D. Utilize AWS Fargate to implement a tailored machine learning model aimed at identifying inappropriate content. Employ ground truth to annotate predictions with low confidence.
{: .option}

B
{: .answer}

The correct answer to the question about how to ensure that images uploaded to a social media website do not contain inappropriate content is **B: Utilize Amazon Rekognition to identify unsuitable content. Implement human oversight for predictions with low confidence.** Let's break down why this is the best option and why the others are less suitable.

### Explanation of the Correct Answer (B):

**Amazon Rekognition** is a powerful image and video analysis service provided by AWS that can automatically detect inappropriate content in images. This service leverages deep learning models trained on large datasets to identify various attributes in images, including explicit nudity, violence, and other inappropriate content. 

#### Key Points:
1. **Pre-trained Model**: Rekognition provides pre-trained models specifically for detecting inappropriate content, which minimizes the development effort required to build and train your own model.
2. **Human Oversight**: The suggestion to implement human oversight for predictions with low confidence is crucial, as it ensures that any ambiguous cases are reviewed by a human moderator. This helps to reduce false positives and negatives, enhancing the reliability of the content moderation process.
3. **Scalability and Ease of Use**: Since Rekognition is a managed service, it can easily scale with the demands of the application without the need for infrastructure management.

### Why the Other Options Are Wrong:

**A. Employ Amazon Comprehend to identify unsuitable content and rely on human review for predictions with low confidence.**
- **Incorrect Service**: Amazon Comprehend is primarily designed for natural language processing (NLP), such as sentiment analysis, entity recognition, and topic modeling. It is not suitable for analyzing images, making this option irrelevant for the task of identifying inappropriate image content.

**C. Utilize Amazon SageMaker for identifying inappropriate content. Employ ground truth to annotate predictions with low confidence.**
- **Higher Development Effort**: While SageMaker is an excellent tool for building and deploying machine learning models, it requires significant development effort, including data labeling, model training, and tuning. This goes against the requirement for minimizing development effort. Moreover, using Ground Truth for manual labeling adds additional complexity and time to the process.

**D. Utilize AWS Fargate to implement a tailored machine learning model aimed at identifying inappropriate content. Employ ground truth to annotate predictions with low confidence.**
- **Overhead and Complexity**: Fargate is a container management service that allows you to run containerized applications without managing the underlying infrastructure. While you can create a tailored ML model using Fargate, it requires expertise in machine learning, additional development, and operational overhead to create, train, and deploy the model. This again does not align with the goal of minimizing development effort.

### Technical Details for AWS Solution Architect Associate Exam:

1. **Amazon Rekognition Features**:
   - Pre-trained models for image and video analysis.
   - Capable of detecting explicit content, facial analysis, object and scene detection, and more.
   - API-driven, which allows for easy integration with applications.

2. **Human Review Process**:
   - Implementing a human review process typically involves creating a workflow where low-confidence predictions are flagged for manual review. This can be managed through a queue system or a dashboard where moderators can review flagged content.

3. **Cost Considerations**:
   - Understand the pricing model for Rekognition, which typically charges per image processed and for additional features like facial recognition or content moderation.

4. **Best Practices**:
   - Always have logging and monitoring in place to track the performance of the content moderation system.
   - Regularly review and update models or thresholds based on new data or changing content standards.

By focusing on the strengths of Amazon Rekognition and understanding the limitations of the other options, you can effectively design a solution that meets the company's needs with minimal development effort.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company is running a popular social media website. The website gives users the ability to upload images to share with other users. The company wants to make sure that the images do not contain inappropriate content. The company needs a solution that minimizes development effort.
What should a solutions architect do to meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Use Amazon Comprehend to detect inappropriate content. Use human review for low-confidence predictions.
{: .originaloption}
- [ ] B. Use Amazon Rekognition to detect inappropriate content. Use human review for low-confidence predictions.
{: .originaloption}
- [ ] C. Use Amazon SageMaker to detect inappropriate content. Use ground truth to label low-confidence predictions.
{: .originaloption}
- [ ] D. Use AWS Fargate to deploy a custom machine learning model to detect inappropriate content. Use ground truth to label low-confidence predictions.
{: .originaloption}


### Comments

--- 
The most effective approach to address the requirements is to utilize Amazon Rekognition for the detection of inappropriate content, supplemented by human review for predictions that fall below a certain confidence threshold.

Amazon Rekognition is a robust cloud-based service designed for image and video analysis, capable of identifying various categories of inappropriate content through its pre-trained models. This includes the detection of explicit adult material, violent imagery, and offensive language. With its high accuracy and low latency, Amazon Rekognition is well-suited for applications that require real-time content moderation. Additionally, integrating human oversight for low-confidence predictions ensures that nuanced judgments can be made, thereby enhancing the overall reliability of the content moderation process. This combination not only minimizes development effort but also leverages existing AWS capabilities effectively.
{: .comment}
--- 
Option A, which suggests using Amazon Comprehend, just doesn’t cut it for this scenario. Why? Because it’s all about analyzing text, not images. It’s like trying to use a toaster to boil water—great tool, wrong job! 🍞🚫

Now, moving on to Option C, employing Amazon SageMaker. While it’s a powerful tool for building custom machine learning models, it’s a bit of a heavy lifter. You’d need to roll up your sleeves and gather a mountain of labeled images to train the model—definitely not a quick or easy task! 🏔️💼

As for Option D, using AWS Fargate to launch a custom machine learning model is also a labor-intensive approach. You’d still be facing that same mountain of labeled images, plus the development effort could take a lot of time and resources. It’s like trying to run a marathon without training—yikes! 🏃‍♂️💨

In a nutshell, the most efficient and effective way to tackle this challenge is to leverage Amazon Rekognition to spot inappropriate content in images. By combining this with human oversight for any low-confidence predictions, you can ensure that nothing slips through the cracks. It’s a win-win! 🎉✨
{: .comment}
--- 
The best route to take here is option B. Why? Well, it’s simple: Amazon Rekognition offers a straightforward way to flag unsuitable content with its image moderation capabilities. Utilizing this service allows you to automatically detect inappropriate images, and for those borderline cases that leave you scratching your head, you can always lean on good ol’ human judgment to intervene. This combination strikes a balance between efficiency and reliability, minimizing development effort while ensuring that your platform remains user-friendly and safe. 

For some extra context, Amazon Rekognition leverages advanced machine learning to analyze images and videos, making it a robust choice for monitoring content. With features like object and scene detection, facial analysis, and, of course, content moderation, it’s a tech-savvy partner in keeping your social media site clean and appropriate. Plus, since it’s a fully managed service, you can focus on more pressing matters, like what cat video to binge-watch next! 

For more details, feel free to explore the official documentation: [Amazon Rekognition Content Moderation](https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html?pg=ln&sec=ft).
{: .comment}
--- 
Amazon Rekognition is an exceptional machine learning service provided by AWS that specializes in image and video analysis, making it the ideal choice for this scenario. Its advanced capabilities enable the efficient identification of inappropriate content, ensuring a safe and enjoyable experience for users. By leveraging this powerful tool, the company can effectively manage user-generated content while minimizing development effort.
{: .comment}
--- 
I’ll happily choose option B! 🎉 While it’s true that Amazon Rekognition shines when it comes to analyzing images and videos rather than focusing on language or text, it’s an excellent choice for identifying unsuitable content. Plus, it offers the added bonus of flexibility! You can enhance its capabilities to detect objects, text, and unsafe material—all through its robust APIs. It’s a fantastic way to ensure a safe and enjoyable environment for users while keeping development efforts to a minimum. What a delightful solution! 😊
{: .comment}

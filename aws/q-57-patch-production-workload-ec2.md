---
layout: answered-question
title: "AWS A Company Has A Production Workload Question"
meta: "AWS Exam Question: A company needs to patch third-party software on 1,000 Amazon EC2 Linux instances quickly. What is the best solution? Answer: AWS Systems Manager."
slug: "q-57-patch-production-workload-ec2"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates a production workload across 1,000 Amazon EC2 Linux instances, utilizing third-party software. Due to a critical security vulnerability, it is essential for the company to promptly patch this software on all EC2 instances. What steps should a solutions architect take to address this situation effectively?
{: .query}

- [ ] A. Develop an AWS Lambda function to implement the patch across all EC2 instances.
{: .option}
- [ ] B. Set up AWS Systems Manager Patch Manager to deploy the patch across all EC2 instances.
{: .option}
- [ ] C. Arrange a maintenance window in AWS Systems Manager to implement the patch across all EC2 instances.
{: .option}
- [x] D. Utilize AWS Systems Manager Run Command to execute a custom command that deploys the patch across all EC2 instances.
{: .option}

D
{: .answer}

The correct answer to the question is **D. Utilize AWS Systems Manager Run Command to execute a custom command that deploys the patch across all EC2 instances.** 

### Explanation of the Correct Answer:
**D. Utilize AWS Systems Manager Run Command to execute a custom command that deploys the patch across all EC2 instances.**

- **Speed and Flexibility**: AWS Systems Manager Run Command allows for the execution of scripts or commands on multiple EC2 instances simultaneously. This is ideal for quickly applying patches, especially in response to critical security vulnerabilities.
- **Custom Commands**: With Run Command, you can specify custom commands tailored to the patching process of the third-party software. This flexibility means you can run exactly what you need, whether it's a simple update command or a more complex script.
- **No Maintenance Windows Needed**: Run Command can be executed immediately, without the need to schedule a maintenance window, which is beneficial when urgent action is required to address a security vulnerability.
- **Centralized Management**: It provides a centralized way to manage commands across all instances, ensuring that you can monitor the results and troubleshoot any issues that may arise during the execution.

### Why the Other Options Are Wrong:
**A. Develop an AWS Lambda function to implement the patch across all EC2 instances.**
- **Complexity and Overhead**: While AWS Lambda is designed for serverless computing and can manage tasks, it is not specifically tailored for managing EC2 instances. Developing a Lambda function to handle the patching process could introduce unnecessary complexity and overhead, particularly if the required actions involve multiple steps or dependencies.
- **Limited Execution Context**: Lambda has time limits and resource constraints that may not be suitable for the patching process, especially if it requires significant processing or interaction with multiple instances.

**B. Set up AWS Systems Manager Patch Manager to deploy the patch across all EC2 instances.**
- **Not Immediate**: Patch Manager is typically used for managing the installation of patches on a regular schedule or in a more controlled manner. It is more suited for ongoing maintenance rather than immediate remediation of critical security vulnerabilities, which is a priority in this scenario.
- **Dependency on Patch Baseline**: Patch Manager requires predefined patch baselines which might not be set up for this specific third-party software, making it less effective for urgent, one-off patches.

**C. Arrange a maintenance window in AWS Systems Manager to implement the patch across all EC2 instances.**
- **Scheduled Execution**: While maintenance windows are useful for planning and executing updates at a specified time, they are not suitable for urgent situations where immediate action is required. It delays the patching process, which is not ideal for critical vulnerabilities.

### Technical Details for AWS Solutions Architect Associate Exam:
- **AWS Systems Manager**: Familiarize yourself with the features of AWS Systems Manager, particularly Run Command and Patch Manager. Understand how to configure both and the scenarios in which each is best applied.
- **IAM Roles and Permissions**: Ensure that EC2 instances have the necessary IAM roles attached to allow them to communicate with Systems Manager. This includes permissions for executing commands and accessing S3 if necessary.
- **Instance Requirements**: Know that for EC2 instances to be managed by Systems Manager, they must have the SSM agent installed and running, which is typically pre-installed on Amazon Linux and some other AMIs.
- **Execution History**: Be aware of how to view execution results and logs in the Systems Manager console to troubleshoot issues that might arise during patching.
- **Custom Scripts**: Understand how to write and use custom scripts for specific applications, as well as how to handle dependencies and configurations that may need to be addressed during the patching process.

By understanding these concepts and the workings of AWS Systems Manager, you can effectively address similar scenarios in real-world applications and in AWS certification exams.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as possible to remediate a critical security vulnerability.
What should a solutions architect do to meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Create an AWS Lambda function to apply the patch to all EC2 instances.
{: .originaloption}
- [ ] B. Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances.
{: .originaloption}
- [ ] C. Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances.
{: .originaloption}
- [ ] D. Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2 instances.
{: .originaloption}


### Comments


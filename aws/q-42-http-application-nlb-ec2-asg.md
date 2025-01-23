---
layout: answered-question
title: "AWS A Company's HTTP Application Is Behind A Network Question"
meta: "AWS Exam Question: A company's HTTP application behind a NLB with EC2 Auto Scaling needs to improve availability without custom scripts. Find the answer, including EC2 and NLB."
slug: "q-42-http-application-nlb-ec2-asg"
certification: "AWS Solution Architect Associate Exam"
---


 A company's HTTP application operates behind a Network Load Balancer (NLB), which is set up to route traffic to an Amazon EC2 Auto Scaling group containing several EC2 instances that host the web service. However, the company has observed that the NLB fails to identify HTTP errors occurring within the application, leading to situations where a manual restart of the EC2 instances is necessary to resolve these issues. To enhance the application's availability without resorting to custom scripts or coding, what steps should a solutions architect take to address this challenge?
{: .query}

- [ ] A. Activate HTTP health checks on the NLB by providing the URL of the organization's application.
{: .option}
- [ ] B. Set up a cron job on the EC2 instances to examine the local application's logs every minute. If any HTTP errors are found, the application will automatically restart.
{: .option}
- [x] C. Substitute the NLB with an Application Load Balancer. Activate HTTP health checks by providing the URL of the organization's application. Set up an Auto Scaling action to replace any unhealthy instances.
{: .option}
- [ ] D. Set up an Amazon CloudWatch alarm to track the UnhealthyHostCount metric for the NLB. Establish an Auto Scaling action to substitute unhealthy instances when the alarm enters the ALARM state.
{: .option}

C
{: .answer}

The correct answer to the question is **C. Substitute the NLB with an Application Load Balancer. Activate HTTP health checks by providing the URL of the organization's application. Set up an Auto Scaling action to replace any unhealthy instances.**

### Explanation of the Correct Answer (C)

1. **HTTP Health Checks**: The Application Load Balancer (ALB) supports HTTP and HTTPS health checks. By activating HTTP health checks, the ALB can periodically send requests to a specified URL of the application running on the EC2 instances. If the application fails to respond correctly (e.g., returning a 4xx or 5xx HTTP status code), the ALB will mark the instance as unhealthy.

2. **Auto Scaling**: When the ALB detects that an instance is unhealthy, it can trigger Auto Scaling actions to replace that instance automatically. This improves application availability because it reduces the downtime associated with manual instance restarts.

3. **Enhanced Features**: ALBs provide additional features, such as content-based routing, WebSocket support, and better integration with AWS services like AWS WAF (Web Application Firewall).

### Why the Other Options are Incorrect:

**A. Activate HTTP health checks on the NLB by providing the URL of the organization's application.**
- **Reason**: While Network Load Balancers can perform health checks, they primarily support TCP and TLS health checks, not HTTP. This means that NLB would not be able to assess the health of your application based on the HTTP response. As a result, it wouldn’t detect application-level errors (like 5xx or 4xx status codes), which is essential for ensuring the availability of a web service.

**B. Set up a cron job on the EC2 instances to examine the local application's logs every minute. If any HTTP errors are found, the application will automatically restart.**
- **Reason**: This approach relies on a manual process and adds complexity to the system. It also does not directly integrate with AWS services like Auto Scaling, which can automatically handle instance replacement. Moreover, it does not prevent downtime as the cron job may not react quickly enough to failures, leading to potential service interruptions.

**D. Set up an Amazon CloudWatch alarm to track the UnhealthyHostCount metric for the NLB. Establish an Auto Scaling action to substitute unhealthy instances when the alarm enters the ALARM state.**
- **Reason**: While this option could help in monitoring, it relies on the NLB’s ability to detect unhealthy hosts. Since the NLB cannot perform HTTP health checks (as mentioned earlier), it will not be able to accurately reflect the health of the instances based on the application's HTTP errors. Therefore, setting up a CloudWatch alarm based on that metric would not be effective in improving availability.

### Additional Technical Details for AWS Solution Architect Associate Exam:

1. **Understanding Load Balancers**: Know the differences between NLB and ALB. NLB operates at Layer 4 (Transport Layer) and is suitable for TCP traffic, while ALB operates at Layer 7 (Application Layer) and is designed for HTTP/HTTPS traffic.

2. **Health Checks**: Be familiar with how health checks work for both NLB and ALB, including configuring them (protocol, path, port) and understanding how they affect instance registration in target groups.

3. **Auto Scaling**: Understand how Auto Scaling works, including defining scaling policies, configuring health checks, and how Auto Scaling interacts with load balancers to replace unhealthy instances.

4. **CloudWatch**: Be aware of how to set up CloudWatch alarms, what metrics to monitor, and how to use them in conjunction with Auto Scaling and Load Balancers to maintain high availability.

By understanding these concepts and how they interconnect, candidates can effectively prepare for questions related to designing highly available and fault-tolerant applications on AWS.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company's HTTP application is behind a Network Load Balancer (NLB). The NLB's target group is configured to use an Amazon EC2 Auto Scaling group with multiple EC2 instances that run the web service.
The company notices that the NLB is not detecting HTTP errors for the application. These errors require a manual restart of the EC2 instances that run the web service. The company needs to improve the application's availability without writing custom scripts or code.
What should a solutions architect do to meet these requirements?
{: .original-query}

### Original Questions

- [ ] A. Enable HTTP health checks on the NLB, supplying the URL of the company's application.
{: .originaloption}
- [ ] B. Add a cron job to the EC2 instances to check the local application's logs once each minute. If HTTP errors are detected. the application will restart.
{: .originaloption}
- [ ] C. Replace the NLB with an Application Load Balancer. Enable HTTP health checks by supplying the URL of the company's application. Configure an Auto Scaling action to replace unhealthy instances.
{: .originaloption}
- [ ] D. Create an Amazon Cloud Watch alarm that monitors the UnhealthyHostCount metric for the NLB. Configure an Auto Scaling action to replace unhealthy instances when the alarm is in the ALARM state.
{: .originaloption}


### Comments


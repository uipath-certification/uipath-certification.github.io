---
layout: answered-question
title: "AWS A Company Has An On-Premises Application Question"
meta: "AWS Exam Question: A company needs a solution for timely backups to Amazon S3 with minimal impact on internet connectivity. What’s the answer? Consider AWS Direct Connect."
slug: "q-27-time-sensitive-data-backups-s3"
certification: "AWS Solution Architect Associate Exam"
---


 A company operates an on-premises application that produces significant amounts of time-sensitive data, which is currently backed up to Amazon S3. However, as the application has expanded, users are experiencing issues with internet bandwidth constraints. A solutions architect is tasked with developing a long-term strategy that facilitates prompt backups to Amazon S3 while minimizing the impact on internet connectivity for internal users. What solution would best address these requirements?
{: .query}

- [ ] A. Set up AWS VPN connections and route all traffic through a VPC gateway endpoint.
{: .option}
- [x] B. Set up a new AWS Direct Connect link and route backup traffic through this newly established connection.
{: .option}
- [ ] C. Request AWS Snowball devices on a daily basis. Transfer the data onto the Snowball devices and send them back to AWS every day.
{: .option}
- [ ] D. Create a support ticket via the AWS Management Console. Ask for the removal of S3 service limitations on the account.
{: .option}

B
{: .answer}

The correct answer is **B. Set up a new AWS Direct Connect link and route backup traffic through this newly established connection.**

### Explanation of the Correct Answer:
AWS Direct Connect is a cloud service solution that makes it easy to establish a dedicated network connection from your premises to AWS. This solution is ideal for the scenario provided because:

1. **Reduced Internet Bandwidth Impact**: By using AWS Direct Connect, the company can transfer data directly to AWS without utilizing the public internet. This means that the backup traffic will not affect the internal users' internet connectivity, thereby addressing the complaints about bandwidth limitations.

2. **Consistent Network Performance**: Direct Connect provides a more consistent network experience compared to traditional internet connections, which can be affected by congestion and latency. This is crucial for time-sensitive data transfers, ensuring that backups are completed in a timely manner.

3. **Increased Throughput**: Direct Connect can support higher throughput than standard internet connections, making it suitable for large volumes of data being transferred to Amazon S3.

4. **Security**: Direct Connect provides a secure connection between on-premises infrastructure and AWS, which can be beneficial for regulatory compliance and data security.

### Explanation of Incorrect Answers:

**A. Set up AWS VPN connections and route all traffic through a VPC gateway endpoint.**
- While AWS VPN can provide a secure connection to AWS over the public internet, it does not offer the same level of performance as Direct Connect. VPN connections may still suffer from internet-related latency and bandwidth issues, potentially impacting the performance of backups and the experience of internal users. Additionally, VPN may not handle the large volume of data as effectively as a dedicated connection.

**C. Request AWS Snowball devices on a daily basis. Transfer the data onto the Snowball devices and send them back to AWS every day.**
- While AWS Snowball is a viable solution for transferring large amounts of data, it is not practical for daily backups of time-sensitive data. The process of physically shipping Snowball devices introduces significant delays (shipping time, device setup, etc.) that are incompatible with the requirement for timely backups. This option is better suited for one-time large data migrations, rather than ongoing backup processes.

**D. Create a support ticket via the AWS Management Console. Ask for the removal of S3 service limitations on the account.**
- This option does not address the core issue of internet bandwidth limitations. Removing service limitations on S3 would not change how data is backed up or how it impacts internet connectivity. Moreover, AWS S3 service limits are generally related to API request rates and data transfer fees, and not to the capacity of transferring large volumes of data efficiently.

### Technical Details for AWS Solution Architect Associate Exam:
1. **Understanding AWS Direct Connect**: Familiarize yourself with how AWS Direct Connect works, including its pricing model, types of connections (private and public), and the benefits it offers over standard internet connections.

2. **Networking Concepts**: Understand different networking concepts, including VPN, VPC endpoints, and routing options. Be able to compare and contrast their performance, security, and use cases.

3. **AWS Snowball**: Learn about the AWS Snow family (Snowball, Snowmobile) and their use cases. Understand the logistics involved in using Snowball, including the shipping process, data transfer methods, and when to choose Snowball over direct transfer methods.

4. **Data Transfer Solutions**: Be aware of various data transfer solutions provided by AWS, including AWS DataSync, S3 Transfer Acceleration, and their appropriate use cases.

5. **Security and Compliance**: Understand the security features associated with AWS Direct Connect and how they compare to VPN solutions, including encryption and physical security.

By mastering these concepts, candidates can prepare effectively for the AWS Certified Solutions Architect – Associate exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company has an on-premises application that generates a large amount of time-sensitive data that is backed up to Amazon S3. The application has grown and there are user complaints about internet bandwidth limitations. A solutions architect needs to design a long-term solution that allows for both timely backups to Amazon S3 and with minimal impact on internet connectivity for internal users.
Which solution meets these requirements?
{: .original-query}

### Original Questions

- [ ] A. Establish AWS VPN connections and proxy all traffic through a VPC gateway endpoint.
{: .originaloption}
- [ ] B. Establish a new AWS Direct Connect connection and direct backup traffic through this new connection.
{: .originaloption}
- [ ] C. Order daily AWS Snowball devices. Load the data onto the Snowball devices and return the devices to AWS each day.
{: .originaloption}
- [ ] D. Submit a support ticket through the AWS Management Console. Request the removal of S3 service limits from the account.
{: .originaloption}


### Comments

--- 
Option A involves using a VPN, which still relies on internet bandwidth and may not alleviate the existing connectivity issues. 

Option C, while utilizing AWS Snowball for daily data transfers, is not a sustainable long-term solution in terms of cost and efficiency. Frequent physical data transfers can become cumbersome and expensive.

Option D suggests requesting the removal of S3 service limitations, but this does not address the underlying issue of internet bandwidth constraints.

Therefore, the most viable solution is Option B, which involves establishing a dedicated AWS Direct Connect link to handle backup traffic. This approach ensures a consistent and reliable connection while minimizing the impact on internet bandwidth for internal users. Direct Connect provides a more efficient and scalable solution for transferring large volumes of data to Amazon S3.
{: .comment}
--- 
Option B is the winner! 🎉 Let’s roll out a shiny new AWS Direct Connect link and send that backup traffic through it like a boss!

AWS Direct Connect is a snazzy network service that lets you create a dedicated connection from your on-premises data center straight to AWS. 🚀 This means you can skip the wild ride of public internet and enjoy a smoother, more reliable, and lower-latency communication highway between your application and Amazon S3. By channeling your backup traffic through this special connection, you’ll keep your internet bandwidth free for all those important Zoom calls and cat video marathons, while still ensuring your data gets backed up to S3 in a timely manner! 🐱💻
{: .comment}
--- 
Option A is a no-go. Setting up AWS VPN connections and routing all traffic through a VPC gateway endpoint might sound like a clever plan, but it won't really ease the strain on your internet bandwidth. You'll still be relying on the public internet to access S3, which is like trying to run a marathon while dragging a boulder behind you.

As for Option C, the idea of using AWS Snowball devices is just wishful thinking. While they might seem like a neat solution, they won't alleviate your bandwidth woes. Transferring data to and from those Snowball devices still requires internet usage, so you're not escaping the bandwidth bottleneck here.

And let's not forget Option D. Submitting a support ticket to have those pesky S3 service limits removed is a bit of a pipe dream. This approach won’t resolve your internet bandwidth issues, nor will it guarantee that your backups to S3 happen in a timely manner. In short, it's not going to solve the actual problem at hand.
{: .comment}
--- 
Using Snowball for data transfer is not the most efficient option for timely backups, as it involves a lengthy process. After placing an order, it can take several days to receive the Snowball devices, and additional time is required for shipping and backup operations. This could lead to delays that are not ideal for handling time-sensitive data.
{: .comment}
--- 
Option C is not the right fit, and here's why! You actually don’t need an internet connection to transfer data to Snowball devices. For instance, if you're using a Snowcone, you can connect it directly to your on-premises device to load the data, and AWS will take care of uploading it to the cloud. However, using Snowball devices on a daily basis isn’t the most efficient approach. That's why option B shines brighter! 🌟 It provides a more effective and reliable solution for your data transfer needs.
{: .comment}

---
layout: answered-question
title: "AWS A Company Needs Guaranteed Amazon EC2 Capacity Question"
meta: "AWS Exam Question: A company needs guaranteed EC2 capacity in three Availability Zones for an event. What should they do to ensure it? Answer: Reserved Instances, AWS Region."
slug: "q-47-guaranteed-amazon-ec2-capacity-EC"
certification: "AWS Solution Architect Associate Exam"
---


 To ensure guaranteed Amazon EC2 capacity for an upcoming week-long event, a company requires resources in three designated Availability Zones within a specific AWS Region. What steps should the company take to secure this EC2 capacity?
{: .query}

- [ ] A. Acquire Reserved Instances that indicate the required Region.
{: .option}
- [ ] B. Establish a Capacity Reservation on-Demand that indicates the required Region.
{: .option}
- [ ] C. Acquire Reserved Instances that indicate the required Region and three Availability Zones.
{: .option}
- [x] D. Establish an On-Demand Capacity Reservation that outlines the required Region and three Availability Zones.
{: .option}

D
{: .answer}

The correct answer to guarantee Amazon EC2 capacity in three specific Availability Zones for a one-week event is **D. Establish an On-Demand Capacity Reservation that outlines the required Region and three Availability Zones.** 

### Explanation of the Correct Answer (D):

**On-Demand Capacity Reservations** allow users to reserve capacity for Amazon EC2 instances in a specific Availability Zone or zones within a Region. This means that even if demand increases in that Region, the reserved capacity will be available for the user to launch instances. Here are the reasons why this option is the best:

1. **Guaranteed Capacity**: The primary purpose of a Capacity Reservation is to ensure that the capacity is available when needed, especially during high-demand periods. This aligns perfectly with the company's requirement for guaranteed capacity for an upcoming event.

2. **Specific Availability Zones**: The question specifies the need for capacity in three specific Availability Zones. An On-Demand Capacity Reservation can be created to cover multiple Availability Zones, ensuring that the company has the required capacity across all of them.

3. **Short-Term Commitment**: The event will last for only one week, and Capacity Reservations can be established without long-term commitment, allowing flexibility to align with the event's timeline.

### Why the Other Options are Incorrect:

**A. Acquire Reserved Instances that indicate the required Region.**
- **Limited to Pricing Benefits**: Reserved Instances (RIs) offer pricing benefits but do not guarantee capacity. While RIs can reduce costs over time, they do not ensure that the required instances will be available when needed. This option does not meet the company’s need for guaranteed capacity.

**B. Establish a Capacity Reservation On-Demand that indicates the required Region.**
- **Lacks Specificity**: While establishing a Capacity Reservation for the required Region is a step in the right direction, it does not specify the three Availability Zones. Without specifying the Availability Zones, there is no guarantee that the capacity will be available in the specific zones needed for the event.

**C. Acquire Reserved Instances that indicate the required Region and three Availability Zones.**
- **Still No Guaranteed Capacity**: Similar to option A, while this option specifies the Availability Zones, it still relies on Reserved Instances, which do not guarantee capacity. The company may still face issues if the demand in those zones exceeds supply.

### Technical Details for AWS Solution Architect Associate Exam:

1. **Understanding EC2 Pricing Models**:
   - **On-Demand Instances**: Pay for compute capacity by the hour or second (depending on the instance type) with no long-term contracts.
   - **Reserved Instances**: Offer a significant discount (up to 75%) compared to On-Demand pricing, but do not guarantee capacity.
   - **Spot Instances**: Allow you to bid on unused EC2 capacity at reduced rates, but they can be interrupted by AWS with little notice.

2. **Capacity Reservations**:
   - Capacity Reservations are separate from Reserved Instances and are specifically designed to guarantee capacity in a specific Availability Zone.
   - It can be created through the AWS Management Console, AWS CLI, or AWS SDKs.
   - You can specify the instance type, platform, and number of instances when creating a Capacity Reservation.

3. **Best Practices**:
   - For events or workloads that require specific capacity, always consider using Capacity Reservations to ensure availability.
   - Monitor the capacity usage and adjust reservations as necessary to optimize costs versus guaranteed availability.

By understanding these concepts, candidates can better prepare for questions related to EC2 capacity management and pricing strategies in the AWS Solution Architect Associate Exam.
{: .chat-gpt-explanation}

AWS Solution Architect Associate Exam
{: .certificationKey}

### Original Query

A company needs guaranteed Amazon EC2 capacity in three specific Availability Zones in a specific AWS Region for an upcoming event that will last 1 week.
What should the company do to guarantee the EC2 capacity?
{: .original-query}

### Original Questions

- [ ] A. Purchase Reserved Instances that specify the Region needed.
{: .originaloption}
- [ ] B. Create an On-Demand Capacity Reservation that specifies the Region needed.
{: .originaloption}
- [ ] C. Purchase Reserved Instances that specify the Region and three Availability Zones needed.
{: .originaloption}
- [ ] D. Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed.
{: .originaloption}


### Comments

--- 
To ensure guaranteed EC2 capacity in specific Availability Zones for a short-term event, it is essential to utilize On-Demand Capacity Reservations. Unlike Reserved Instances, which are primarily suited for long-term commitments and may not provide the immediate capacity assurance needed for a brief event, On-Demand Capacity Reservations allow for the allocation of resources in designated Availability Zones for a defined period. This approach ensures that the necessary EC2 instances are available when required, providing the reliability and flexibility needed for the event's duration. Therefore, the most appropriate solution is to establish an On-Demand Capacity Reservation that specifies both the required AWS Region and the three Availability Zones.
{: .comment}
--- 
Absolutely! Reserved Instances come with a fixed commitment, typically lasting either one or three years—so if you're looking for something a bit more flexible, you might want to consider your options! 🎉 

For a short-term event, establishing an On-Demand Capacity Reservation could be your best bet. This allows you to secure the necessary EC2 capacity in the required Region and across those three specific Availability Zones without the long-term commitment. It's like ordering a pizza for a party—no need to commit to a full year of toppings! 🍕 

For more details, feel free to check out the official AWS documentation. It’s got all the juicy bits you need to make an informed decision! 📚✨
{: .comment}
--- 
**CORRECT**

The winning choice here is to establish an On-Demand Capacity Reservation that clearly outlines the required Region and the three Availability Zones. 

An On-Demand Capacity Reservation is your trusty sidekick in the world of Amazon EC2, allowing you to create and manage reserved capacity tailored to your needs. With this option, you can handpick the Region and Availability Zones where you want to secure your precious EC2 instances. This means you can confidently ensure that the necessary capacity is available precisely where you need it—no unexpected surprises! 

**WRONG**

Now, let’s not kid ourselves with the alternatives. Option A, which suggests snagging Reserved Instances for just the specified Region, won't cut it for guaranteeing capacity in specific Availability Zones. It’s like trying to reserve a table at a restaurant without actually confirming a spot in the dining area. 

Option B also falls short, as simply creating an On-Demand Capacity Reservation for the Region lacks the specificity needed for the Availability Zones. You might as well be reserving a seat on the Titanic—great idea, just not quite right for your needs.

And let’s not forget Option C. While buying Reserved Instances that mention the Region and three Availability Zones may sound appealing, it’s ultimately a mirage. Reserved Instances don’t come with the capacity reservation guarantee you’re looking for, so you’d be left in the lurch when it really counts. In short, stick with the On-Demand Capacity Reservation and save yourself the headache!
{: .comment}
--- 
It's important to note that Reserved Instances may not be the ideal choice in this scenario because they require a commitment to a term of either one or three years, rather than the short duration of just one week. This makes them less flexible for temporary needs. Instead, exploring alternatives that provide the necessary capacity for a limited time frame would be more advantageous.
{: .comment}
--- 
Option D (Establishing an On-Demand Capacity Reservation that specifies the region and the availability zones) shines as the ultimate choice! 🌟 It ensures that the necessary capacity is secured in the designated availability zones for that short-lived event, meeting requirements both efficiently and economically. It’s like having a VIP pass to the cloud party! 🎉
{: .comment}

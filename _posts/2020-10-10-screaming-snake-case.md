---
layout: answered-question
author: Serge
title: What is Screaming Snake Case? A Definition
blurb: Have you ever heard of screaming snake case before? Here we'll define the term Screaming Snake Case and even give you a few examples.
tweet: Are you familiar with screaming snake case. You need to know the various variable name conventions to pass the UiPath Certification exam.   #UiPath #mockexam #UiPathCertification
difficulty: 7
canonical: https://www.rpacertified.com/2020/10/10/screaming-snake-case.html
---

# What is Screaming Snake Case?

Screaming snake case is a naming convention used by software developers that insists compound words used in variable names be separated by an underscore, and written entirely in upper-case letters.

## Screaming Snake Case Examples

The following are examples of screaming snake case:

- THIS_IS_SCREAMING_SNAKE_CASE
- JAVA_CONSTANTS_USE_SNAKE_CASE
- INTEREST_RATE
- PI
- MAX_HEAP_SIZE

The reference to screaming comes from the fact that when users type in all capital letters in a Tweet, internet forum or a Facebook group, it is interpreted as the person shouting or screaming.

Snake case, also known as <a href="https://www.theserverside.com/definition/Snake-case">train case,</a> can be written in lower-case letters. But when it is, it is just called snake case, not SCREAMING SNAKE CASE.

- this_is_snake_case_but_not_screaming_snake_case
- not_screaming_snake_case_either

## How to write in Screaming Snake Case

To write a variable in Screaming Snake Case:

1. Choose a varaible name that consists of more than one word
2. Separate the independent words with an underscore
3. Change any lower-case letters to upper-case

## Screaming Snake Case vs Kebab Case

Snake case is often compared to kebab case. In <a href="https://www.theserverside.com/definition/Kebab-case">kebab case</a>, compound word variable names are separated by a dash, not an underscore. 

- this-is-kebab-case

Kebab case is arguable more readable than snake case, but the dash can be misinterpreted as a subtraction sign in code, which may introduce bugs. As such, kebab case is often avoided as a variable naming convention.

While upper case letters with an underscore is known as SCREAMING_SNAKE_CASE, upper case letters with kebab-case is known as a SCREAM-KEBAB.

Question: The variable `UIPATH_ASSOCIATE_EXAM` is said to follow what naming convention ?

- [ ] &nbsp;  camel case
- [ ] &nbsp;  snake case
- [x] &nbsp;  screaming snake case
- [ ] &nbsp;  kebab case

## Answer

The UiPath varaiable `UIPATH_ASSOCIATE_EXAM` is said to be written in screaming snake case. This makes C the most correct answer to this question.

#### UiPath screaming snake case

The use of the underscore to separate words in a UiPath variable is called snake case, so option B is somewhat correct. But when all the letters are uppercase, the naming convention is known as `screaming snake case` so C is the most correct answer of the bunch.

Screaming snake case violates the UiPath RegEx rule `([A-Z]|[a-z])+([A-Z]|[a-z]|[0-9])` and as such it is not considered a valid variable name and will be flagged by the UiPath Anaylze File process.

Screaming snake case is commonly used for constants. In Java, all [static final constants](https://www.theserverside.com/video/Why-we-use-static-final-in-Java-for-constants) are written in screaming snake case.

<iframe width="280" height="158" src="https://www.youtube.com/embed/MtQoWQForqE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
layout: answered-question
author: Serge
title: UiPath try cath block exam questions
blurb: Can you figure out the result of running this UiPath try-catch block? You'll need to be able to if you want to pass the exam.
difficulty: 7
objective: 5.3 Explain the importance of error handling and how it can be implemented
canonical: https://www.rpacertified.com//2020/09/09/flow-try-catch-result.html
keywords: try catch, exception handling, IndexOutOfRangeException, UiPath exceptions
---

<h1>Try catch blocks in UiPath Studio</h1>

Question:  <img src="/assets/TryCatch%20-%20Indexoutofrange.jpg" class="img-fluid" alt="UiPath, split">

 - [X] &nbsp;  IndexOutOfRangeException
 - [ ] &nbsp;  This Item: null
 - [ ] &nbsp;  This Item: Test
 - [ ] &nbsp;  Null Reference Exception

## Answer

Option A is correct.

This will throw an Index Out of Range exception as we have defined MyArray (0) in the default but not MyArray(1)


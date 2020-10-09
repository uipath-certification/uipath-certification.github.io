---
layout: answered-question
author: Serge
title: Incorrect UiPath Variable Names
blurb: Can you pick out the poorly named UiPath variable?
difficulty: 7
---

Question: Which of the following violates the UiPath variable naming convention?

- [x] &nbsp;  `H1Tag`
- [ ] &nbsp;  `HWonTag`
- [ ] &nbsp;  `hWonTag`
- [x] &nbsp;  `1hTag`

## Answer

The variables `1hTag` and `H1Tag` are correct because they are incorrect. Well, they're incorrect UiPath variable names that is, which makes them the correct answers to this question.

#### UiPath Variable Names

The regex UiPath uses to validate variable names is `([A-Z]|[a-z])+([A-Z]|[a-z]|[0-9])`. That's all you really need to know.

> A variable name complies with this RegEx rule if it starts with any upper or lower case letter and is then followed by another upper or lower case letter. Any number of numbers and letters can come after that.

Okay, RegEx is as confusing as hell, so nobody expects you to understand that. But what you need to know is that variable names must be camel cased, start with a letter, and the second letter has to be a character too. The fact that the second character can't be a number throws a lot of people off.

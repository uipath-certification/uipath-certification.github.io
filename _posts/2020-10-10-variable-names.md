---
layout: answered-question
author: Serge
title: UiPath Variable Names
blurb: Can you pick out the poorly named UiPath variable?
difficulty: 7
---

Question: Which of the following violates the UiPath variable naming convention?

- [x] &nbsp;  `H1Tag`
- [ ] &nbsp;  `HWonTag`
- [ ] &nbsp;  `hWonTag`
- [x] &nbsp;  `h1Tag`

## Answer

The variable `what-is-kebab-case` is a correct example of the naming convention in question.

#### UiPath and Kebab Case

I love [kebab case](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Why-you-should-make-kebab-case-a-URL-naming-convention-best-practice) for URLs and even JavaScript variables, although dashes in variables can often cause problems with batch scripts and cron jobs, so be careful when you use them.

However, UiPath and kebab case is **not** a match made in heaven. If you name UiPath variables with kebab case you'll get an error when you use the UiPath `Analyze File` option.

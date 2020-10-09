---
layout: answered-question
author: Serge
title: UiPath and Kebab Case
blurb: What is kebab case? I love it. UiPath? Not so much
---

Question: Which of the following variables is named using kebab-case?

- [ ] &nbsp;  `WhatIsKebabCase`
- [x] &nbsp;  `what-is-kebab-case`
- [ ] &nbsp;  `whatIsKebabCase`
- [ ] &nbsp;  `what_is_kebab_case`

## Answer

The variable `what-is-kebab-case` is a correct example of the naming convention in question.

#### UiPath and Kebab Case

I love [kebab case](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Why-you-should-make-kebab-case-a-URL-naming-convention-best-practice) for URLs and even JavaScript variables, although dashes in variables can often cause problems with batch scripts and cron jobs, so be careful when you use them.

However, UiPath and kebab case is **not** a match made in heaven. If you name UiPath variables with kebab case you'll get an error when you use the UiPath `Analyze File` option.


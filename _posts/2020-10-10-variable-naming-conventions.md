---
layout: answered-question
author: Serge
title: UiPath Variable Naming Conventions
blurb: Here we explain the UiPath Variable Naming Convention and standard, with examples of how to CamelCase, PascalCase and SCREAMING_SNAKE_CASE your UiPath variables.
tweet: Can you tell which one of these UiPath variable names is valid and which ones are not? Correct UiPath variable names is an important part of the UiPath Associate certification.  #UiPath #mockexam #UiPathCertification
keywords: UiPath Naming Conventions, UiPath Variables, Variable Naming Conventions, 
canonical: https://www.rpacertified.com/2020/10/10/variable-naming-conventions.html
---
# UiPath Naming Convention

Question: Which of the following is a valid UiPath variable name?

- [ ] &nbsp;  `$1000000`
- [ ] &nbsp;  `1000000$`
- [ ] &nbsp;  `1milliondollars`
- [x] &nbsp;  `One1MillionDollars`

## Naming Conventions Answer

Only `One1MillionDollars` would qualify as a correct answer to the UiPath practice exam question.

### Correct UiPath Variable Names

Get familiar with this RegEx expression. It's what's used by the UiPath Analyzer.  `([A-Z]|[a-z])+([A-Z]|[a-z]|[0-9])`. That's all you really need to know.

> A variable name complies with this RegEx rule if it starts with any upper or lower case letter and is then followed by another upper or lower case letter. Any number of numbers and letters can come after that.

A correct UiPath varaible name can have letters and numbers. Special characters like `$` are not allowed. Nor can a variable have a number in the first two letters.

`One1MillionDollars` is the only UiPath variable name that passes muster on this UiPath Associate mock exam question.

### UiPath Varianble Naming Options:

Along with the requirements for which characters are valid in a UiPath variable, it is important to know the lecicon pertaining to UiPath variable names. So before you do any UiPath Studio development, know the following terms:

* PascalCase
* CamelCase
* Kebab-Case
* Snake_Case and <a href="https://www.rpacertified.com/2020/10/10/screaming-snake-case.html">SCREAMING_SNAKE_CASE</a>








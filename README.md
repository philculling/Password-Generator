# Password-Generator
Week 5 Challenge
# Module 5 Challenge: Password Generator

## Overview

The password can include special characters. If you’re unfamiliar with these, see this [list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters).

## Instructions

Some sort of loop that will be (number of characters selected) long, and will select any random element from ALL of the selected arrays and log the answer in the place it is needed.


The following image shows the web application's appearance and functionality:

![password generator demo](./assets/05-javascript-challenge-demo.png)

* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password. i.e. a prompt asking how many characters would you like your password to contain? The user inputs a number. If too small or large, they get another prompt saying to try again e.g. 7 is too few or 129 is too many.
      * At least 10 characters but no more than 64.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
      If your password is 16 characters long, you will need to set up a loop that iterates 16 times selecting random elements from all the selected arrays. If your password is 24 characters long, you will need to set up a loop that iterates 24 times, etc., etc.
 * Code should validate for each input and at least one character type should be selected
  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

## Grading Requirements

This challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * The challenge should not produce any errors in the console when you inspect it using Chrome DevTools.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.


## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

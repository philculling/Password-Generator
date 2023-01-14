# Password-Generator
Week 5 Challenge
# Module 5 Challenge: Password Generator

## Overview

The password can include special characters. If you’re unfamiliar with these, see this [list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters).

## Instructions

WORK DOWN but think up.
The last line of code is what executes. Follow the logic UPWARDS.
So what is currently my line 152 will make the function writePassword happen.
Then refer to line 144.
The function writePassword will make the function generatePassword happen.
Then refer to line 136.
The function generatePassword will do a number of things. This is now where your challenge starts. One of the things is does is to call the function called getPasswordOptions. I know this because Laura showed us. There is likely to be more than just that though.
So go up again, refer to line 106.
This is where the computer collects the options from the user.
Perhaps there are functions in here, if not for the length, then definitely for the other 4 things - do you want numbers?, do you want lower case?, do you want upper case?, do you want specials? DRY. This is asking the same question 4 times. For the length, you've kind of nearly worked it out already, you just need to get it into the function.

This was what you in the middle of trying to do, but you were not thinking enough about functions, and working upwards.
Laura says get the structure of functions sorted.

Some sort of loop that will be (number of characters selected) long, and will select any random element from ALL of the selected arrays and log the answer in the place it is needed.


The following image shows the web application's appearance and functionality:

![password generator demo](./assets/05-javascript-challenge-demo.png)

MY NOTE Day 2 activity 5 might be useful.

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

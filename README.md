# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   - 1. Within a Github action that runs whenever code is pushed.

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   - No because unit testing is meant for testing individual components. A messaging feature may have multiple components requiring it to function, such as writing, sending, and deleting the message. Therefore, unit testing should not be used for this feature.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   - Yes because having a max length feature would be considered a component of the messaging application. The scale of a max length feature is appropriate for unit testing.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
   - If we set Headless to true, puppeteer will run tests without a browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
   - You would need to click on the settings icon first. If you try to use goto with #settings, it would open up the home page of the journal pages. 

Feature: Invalid Login
    As a user
    I want to be able to log in with invalid credentials
    So that I can see an error message

Scenario: Unsuccessful login
    Given i am on the login page
    When i set an unregistered email and password 
    Then i have an unsuccessful login
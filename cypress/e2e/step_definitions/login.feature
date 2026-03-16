Feature: Login
    As a user
    I want to be able to log in
    So that I can access my account

Scenario: Successful login
    Given i am on the login page
    When i set a registered email and password 
    Then i have a successful login